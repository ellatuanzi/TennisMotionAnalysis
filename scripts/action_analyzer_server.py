#!/usr/bin/env python3
"""Local web server for Gemini tennis-action detection and FFmpeg clip export."""
from __future__ import annotations

import warnings
warnings.filterwarnings("ignore", message=".*'cgi' is deprecated.*", category=DeprecationWarning)
import cgi
import json
import mimetypes
import os
import re
import shutil
import subprocess
import tempfile
import time
import urllib.error
import urllib.parse
import urllib.request
import uuid
from datetime import datetime, timedelta, timezone
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
JOBS = ROOT / "action_jobs"
API = "https://generativelanguage.googleapis.com"
MODEL = os.environ.get("GEMINI_MODEL", "gemini-2.5-flash")
DRIVE_ROOT_FOLDER_ID = os.environ.get("GOOGLE_DRIVE_ROOT_FOLDER_ID", "1kuslAgGdTWLMwjM0fADdR9m6F_kbXOC9")

SCHEMA = {"type":"object","required":["overall_highlight","actions"],"properties":{"overall_highlight":{"type":"string"},"actions":{"type":"array","items":{"type":"object","required":["stroke_type","stroke_label","start_time","end_time","score","highlight","metrics","strengths","improvements"],"properties":{"stroke_type":{"type":"string","enum":["forehand","backhand","serve","volley","overhead","slice","drop_shot","other"]},"stroke_label":{"type":"string"},"start_time":{"type":"number"},"end_time":{"type":"number"},"score":{"type":"integer"},"highlight":{"type":"string"},"metrics":{"type":"object","properties":{"准备":{"type":"integer"},"击球点":{"type":"integer"},"挥拍":{"type":"integer"},"平衡":{"type":"integer"}}},"strengths":{"type":"array","items":{"type":"string"}},"improvements":{"type":"array","items":{"type":"string"}}}}}}}

def api_request(url: str, key: str, data: bytes | None = None, headers: dict | None = None) -> tuple[dict, object]:
    request = urllib.request.Request(url, data=data, headers={"x-goog-api-key": key, **(headers or {})}, method="POST" if data is not None else "GET")
    try:
        with urllib.request.urlopen(request, timeout=900) as response:
            raw = response.read()
            return (json.loads(raw) if raw else {}), response.headers
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", "replace")
        raise RuntimeError(f"Gemini API {exc.code}: {detail[:600]}") from exc

def upload_video(path: Path, mime: str, key: str) -> dict:
    size = path.stat().st_size
    metadata = json.dumps({"file":{"display_name":path.name}}).encode()
    _, headers = api_request(f"{API}/upload/v1beta/files", key, metadata, {"Content-Type":"application/json","X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":str(size),"X-Goog-Upload-Header-Content-Type":mime})
    upload_url = headers.get("X-Goog-Upload-URL")
    if not upload_url: raise RuntimeError("Gemini 没有返回视频上传地址。")
    result = {}
    offset = 0
    chunk_size = 8 * 1024 * 1024
    with path.open("rb") as stream:
        while chunk := stream.read(chunk_size):
            is_final = offset + len(chunk) == size
            result, _ = api_request(upload_url, key, chunk, {"Content-Type":mime,"Content-Length":str(len(chunk)),"X-Goog-Upload-Offset":str(offset),"X-Goog-Upload-Command":"upload, finalize" if is_final else "upload"})
            offset += len(chunk)
    file = result["file"]
    for _ in range(180):
        state, _ = api_request(f"{API}/v1beta/{file['name']}", key)
        if state.get("state") == "ACTIVE": return state
        if state.get("state") == "FAILED": raise RuntimeError("Gemini 无法处理这个视频。")
        time.sleep(2)
    raise RuntimeError("等待 Gemini 处理视频超时。")

def analyze(file: dict, hand: str, key: str) -> dict:
    prompt = f"""你是专业网球教练。逐段识别视频中每一次完整、独立的网球动作。动作包括 forehand、backhand、serve、volley、overhead、slice、drop shot 或 other。一次准备到随挥结束算一个动作；走动、捡球、等待不算。选手惯用手：{hand}。为每个动作给出精确到 0.1 秒的 start_time/end_time、0-100 分、中文 highlight、四项分数、优点和最重要改进。按时间排序，不要合并连续击球；没有完整击球时 actions 返回空数组。评分必须只依据画面中可见信息，不确定时明确说视角限制。"""
    body={"contents":[{"parts":[{"fileData":{"mimeType":file["mimeType"],"fileUri":file["uri"]}},{"text":prompt}]}],"generationConfig":{"temperature":0.15,"responseMimeType":"application/json","responseSchema":SCHEMA}}
    result,_=api_request(f"{API}/v1beta/models/{MODEL}:generateContent",key,json.dumps(body).encode(),{"Content-Type":"application/json"})
    try:return json.loads(result["candidates"][0]["content"]["parts"][0]["text"])
    except (KeyError,IndexError,json.JSONDecodeError) as exc: raise RuntimeError(f"Gemini 返回格式无法解析：{json.dumps(result,ensure_ascii=False)[:500]}") from exc

def ffmpeg_binary() -> str:
    configured=os.environ.get("FFMPEG_PATH")
    if configured and Path(configured).exists(): return configured
    found=shutil.which("ffmpeg")
    if found:return found
    for python in [ROOT/".venv-yolo/bin/python",Path(shutil.which("python3") or "")]:
        if python and python.exists():
            run=subprocess.run([str(python),"-c","import imageio_ffmpeg;print(imageio_ffmpeg.get_ffmpeg_exe())"],capture_output=True,text=True)
            if run.returncode==0 and Path(run.stdout.strip()).exists():return run.stdout.strip()
    raise RuntimeError("未找到 FFmpeg。请安装 FFmpeg，或设置 FFMPEG_PATH 后重启工具。")

def video_recorded_date(path: Path) -> datetime:
    """Read QuickTime mvhd creation time, with file mtime as fallback."""
    quicktime_epoch = datetime(1904, 1, 1, tzinfo=timezone.utc)
    with path.open("rb") as stream:
        data = stream.read(min(path.stat().st_size, 32 * 1024 * 1024))
    marker = data.find(b"mvhd")
    if marker >= 0 and marker + 16 <= len(data):
        version = data[marker + 4]
        width = 8 if version == 1 else 4
        seconds = int.from_bytes(data[marker + 8:marker + 8 + width], "big")
        candidate = quicktime_epoch + timedelta(seconds=seconds)
        if datetime(1990, 1, 1, tzinfo=timezone.utc) <= candidate <= datetime.now(timezone.utc) + timedelta(days=2):
            return candidate.astimezone()
    return datetime.fromtimestamp(path.stat().st_mtime).astimezone()

def split_clip(source: Path, output: Path, start: float, end: float) -> None:
    if end <= start: raise ValueError("终点必须晚于起点。")
    common=[ffmpeg_binary(),"-y","-ignore_unknown","-ss",f"{start:.3f}","-i",str(source),"-t",f"{end-start:.3f}","-map","0:v:0","-map","0:a:0?","-map_metadata","-1","-map_chapters","-1","-dn","-sn"]
    cmd=[*common,"-c:v","libx264","-preset","veryfast","-crf","20","-c:a","aac","-movflags","+faststart",str(output)]
    run=subprocess.run(cmd,capture_output=True,text=True)
    if run.returncode:
        fallback=[*common,"-c","copy","-avoid_negative_ts","make_zero","-movflags","+faststart",str(output)]
        copied=subprocess.run(fallback,capture_output=True,text=True)
        if copied.returncode: raise RuntimeError(f"视频切分失败：{copied.stderr[-700:]}")

def drive_request(method: str, url: str, token: str, data: bytes | None = None, content_type: str = "application/json") -> dict:
    request=urllib.request.Request(url,data=data,method=method,headers={"Authorization":f"Bearer {token}","Content-Type":content_type})
    try:
        with urllib.request.urlopen(request,timeout=900) as response:
            raw=response.read();return json.loads(raw) if raw else {}
    except urllib.error.HTTPError as exc:
        detail=exc.read().decode("utf-8","replace")
        raise RuntimeError(f"Google Drive API {exc.code}: {detail[:500]}") from exc

def drive_date_folder(token: str, date_name: str) -> dict:
    query=f"name = '{date_name}' and '{DRIVE_ROOT_FOLDER_ID}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false"
    params=urllib.parse.urlencode({"q":query,"fields":"files(id,name,webViewLink)","pageSize":"10"})
    found=drive_request("GET",f"https://www.googleapis.com/drive/v3/files?{params}",token)
    if found.get("files"): return found["files"][0]
    metadata={"name":date_name,"mimeType":"application/vnd.google-apps.folder","parents":[DRIVE_ROOT_FOLDER_ID]}
    return drive_request("POST","https://www.googleapis.com/drive/v3/files?fields=id,name,webViewLink",token,json.dumps(metadata).encode())

def upload_clip_to_drive(path: Path, folder_id: str, token: str) -> dict:
    boundary=f"codex-{uuid.uuid4().hex}"
    metadata=json.dumps({"name":path.name,"parents":[folder_id]}).encode()
    body=(f"--{boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n".encode()+metadata+
          f"\r\n--{boundary}\r\nContent-Type: video/mp4\r\n\r\n".encode()+path.read_bytes()+f"\r\n--{boundary}--\r\n".encode())
    return drive_request("POST","https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,webViewLink",token,body,f"multipart/related; boundary={boundary}")

def summary_text(source_name: str, recorded: datetime, actions: list[dict]) -> str:
    lines=["网球动作分析汇总",f"原视频：{source_name}",f"拍摄日期：{recorded.strftime('%Y-%m-%d')}",f"动作数量：{len(actions)}",""]
    for action in actions:
        lines.extend([f"{action['clip_filename']}",f"动作：{action.get('stroke_label') or action.get('stroke_type','')}",f"评分：{action.get('score','--')}/100",f"Highlight：{action.get('highlight','')}",""])
    return "\n".join(lines)

def create_summary_doc(folder_id: str, title: str, content: str, token: str) -> dict:
    metadata={"name":title,"mimeType":"application/vnd.google-apps.document","parents":[folder_id]}
    doc=drive_request("POST","https://www.googleapis.com/drive/v3/files?fields=id,name,webViewLink",token,json.dumps(metadata).encode())
    body={"requests":[{"insertText":{"location":{"index":1},"text":content}}]}
    drive_request("POST",f"https://docs.googleapis.com/v1/documents/{doc['id']}:batchUpdate",token,json.dumps(body).encode())
    return doc

class Handler(SimpleHTTPRequestHandler):
    extensions_map={**SimpleHTTPRequestHandler.extensions_map,".js":"text/javascript",".mov":"video/quicktime"}
    def __init__(self,*args,**kwargs):super().__init__(*args,directory=str(ROOT),**kwargs)
    def end_headers(self):self.send_header("Cache-Control","no-store");super().end_headers()
    def json(self,status:int,payload:dict):
        data=json.dumps(payload,ensure_ascii=False).encode();self.send_response(status);self.send_header("Content-Type","application/json; charset=utf-8");self.send_header("Content-Length",str(len(data)));self.end_headers();self.wfile.write(data)
    def do_POST(self):
        try:
            if self.path=="/api/actions/analyze":return self.handle_analyze()
            if self.path=="/api/actions/recut":return self.handle_recut()
            if self.path=="/api/actions/reveal":return self.handle_reveal()
            self.json(404,{"error":"Not found"})
        except Exception as exc:self.json(500,{"error":str(exc)})
    def do_GET(self):
        if self.path.startswith("/api/actions/download?"):
            try:return self.handle_download()
            except Exception as exc:return self.json(404,{"error":str(exc)})
        return super().do_GET()
    def resolve_action_file(self, job_id: str, action_id: str) -> tuple[Path, dict]:
        safe_job=re.sub(r"[^a-f0-9]","",job_id);safe_action=re.sub(r"[^a-zA-Z0-9-]","",action_id);job=JOBS/safe_job
        manifest=json.loads((job/"manifest.json").read_text());action=next((x for x in manifest["actions"] if x["id"]==safe_action),None)
        if not action:raise ValueError("找不到这个动作。")
        path=job/action["clip_filename"]
        if not path.is_file():raise FileNotFoundError("动作视频文件不存在。")
        return path,action
    def handle_download(self):
        query=urllib.parse.parse_qs(urllib.parse.urlsplit(self.path).query);path,_=self.resolve_action_file(query.get("job_id",[""])[0],query.get("action_id",[""])[0]);size=path.stat().st_size
        self.send_response(200);self.send_header("Content-Type","video/mp4");self.send_header("Content-Disposition",f'attachment; filename="{path.name}"');self.send_header("Content-Length",str(size));self.end_headers()
        with path.open("rb") as stream:shutil.copyfileobj(stream,self.wfile)
    def handle_reveal(self):
        length=int(self.headers.get("Content-Length","0"));payload=json.loads(self.rfile.read(length));path,_=self.resolve_action_file(payload["job_id"],payload["action_id"])
        if os.uname().sysname != "Darwin":raise RuntimeError("此功能目前仅支持 macOS Finder。")
        subprocess.Popen(["/usr/bin/open","-R",str(path)],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL);self.json(200,{"ok":True,"path":str(path)})
    def handle_analyze(self):
        key=os.environ.get("GEMINI_API_KEY")
        if not key:raise RuntimeError("服务器未设置 GEMINI_API_KEY。")
        form=cgi.FieldStorage(fp=self.rfile,headers=self.headers,environ={"REQUEST_METHOD":"POST","CONTENT_TYPE":self.headers.get("Content-Type","")})
        video=form["video"] if "video" in form else None
        if video is None or not getattr(video,"file",None):raise ValueError("没有收到视频文件。")
        job_id=uuid.uuid4().hex[:12];job=JOBS/job_id;job.mkdir(parents=True)
        safe=re.sub(r"[^A-Za-z0-9._-]","_",video.filename or "source.mp4");source=job/safe
        with source.open("wb") as output:shutil.copyfileobj(video.file,output)
        mime=video.type or mimetypes.guess_type(source.name)[0] or "video/mp4"
        recorded=video_recorded_date(source);date_name=recorded.strftime("%m%d%Y")
        remote=upload_video(source,mime,key);report=analyze(remote,form.getvalue("dominant_hand","unknown"),key)
        pre=max(0,float(form.getvalue("pre_roll","0.8")));post=max(0,float(form.getvalue("post_roll","1.2")));actions=[]
        for index,item in enumerate(report.get("actions",[]),1):
            start=max(0,float(item["start_time"])-pre);end=max(start+.2,float(item["end_time"])+post);action_id=f"action-{index:03d}";filename=f"{source.stem}-{action_id}-{item['stroke_type']}.mp4";split_clip(source,job/filename,start,end)
            actions.append({**item,"id":action_id,"index":index,"title":f"{item['stroke_label']} #{index}","clip_start":round(start,2),"clip_end":round(end,2),"clip_filename":filename,"clip_url":f"/action_jobs/{job_id}/{filename}"})
        drive={"status":"not_configured","date_folder":date_name,"message":"未配置有效的 Google Drive OAuth token；视频已保存在本地。"}
        manifest={"job_id":job_id,"source":source.name,"recorded_at":recorded.isoformat(),"actions":actions,"drive":drive,"summary":{"average_score":round(sum(x["score"] for x in actions)/len(actions)) if actions else 0,"overall_highlight":report.get("overall_highlight","")}}
        # Persist successful analysis before attempting an external upload so a
        # stale Drive token never hides or discards locally generated clips.
        (job/"manifest.json").write_text(json.dumps(manifest,ensure_ascii=False,indent=2))
        drive_token=os.environ.get("GOOGLE_DRIVE_ACCESS_TOKEN")
        if drive_token and actions:
            try:
                folder=drive_date_folder(drive_token,date_name);uploaded=[]
                for action in actions:
                    item=upload_clip_to_drive(job/action["clip_filename"],folder["id"],drive_token)
                    action["drive_url"]=item.get("webViewLink");uploaded.append(item)
                doc=create_summary_doc(folder["id"],f"网球动作分析汇总 - {date_name} - {source.stem}",summary_text(source.name,recorded,actions),drive_token)
                drive={"status":"uploaded","date_folder":date_name,"folder_id":folder["id"],"folder_url":folder.get("webViewLink",f"https://drive.google.com/drive/folders/{folder['id']}"),"uploaded_count":len(uploaded),"summary_doc_url":doc.get("webViewLink",f"https://docs.google.com/document/d/{doc['id']}/edit")}
            except Exception as exc:
                message=str(exc)
                if "401" in message:
                    message="Google Drive OAuth token 无效或已过期；本地 clips 已保留。"
                drive={"status":"upload_failed","date_folder":date_name,"message":message}
        manifest["drive"]=drive
        (job/"analysis-summary.txt").write_text(summary_text(source.name,recorded,actions))
        (job/"manifest.json").write_text(json.dumps(manifest,ensure_ascii=False,indent=2));self.json(200,manifest)
    def handle_recut(self):
        length=int(self.headers.get("Content-Length","0"));payload=json.loads(self.rfile.read(length));job_id=re.sub(r"[^a-f0-9]","",payload["job_id"]);action_id=re.sub(r"[^a-zA-Z0-9-]","",payload["action_id"]);job=JOBS/job_id;manifest=json.loads((job/"manifest.json").read_text());action=next((x for x in manifest["actions"] if x["id"]==action_id),None)
        if not action:raise ValueError("找不到这个动作。")
        start=max(0,float(payload["start"]));end=float(payload["end"]);source=job/manifest["source"];output=job/action["clip_filename"];split_clip(source,output,start,end);action["clip_start"],action["clip_end"]=start,end;(job/"manifest.json").write_text(json.dumps(manifest,ensure_ascii=False,indent=2));self.json(200,{"start":start,"end":end,"clip_url":action["clip_url"]})

if __name__=="__main__":
    import argparse
    parser=argparse.ArgumentParser();parser.add_argument("--host",default="127.0.0.1");parser.add_argument("--port",type=int,default=5175);args=parser.parse_args();JOBS.mkdir(exist_ok=True);print(f"Action analyzer: http://{args.host}:{args.port}/action-analyzer.html");ThreadingHTTPServer((args.host,args.port),Handler).serve_forever()
