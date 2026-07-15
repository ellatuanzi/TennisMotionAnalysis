const $ = (selector) => document.querySelector(selector);
const dom = {input:$("#videoInput"),label:$("#fileLabel"),preview:$("#sourcePreview"),hand:$("#dominantHand"),pre:$("#preRoll"),post:$("#postRoll"),button:$("#analyzeButton"),status:$("#status"),bar:$("#progressBar"),summary:$("#summary"),results:$("#results"),template:$("#actionTemplate")};
let videoFile=null;
const fmt=(s)=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}.${Math.round((s%1)*10)}`;
function setStatus(text,progress){dom.status.textContent=text;if(progress!=null)dom.bar.style.width=`${progress}%`;}
dom.input.addEventListener("change",()=>{videoFile=dom.input.files[0]||null;if(!videoFile)return;dom.label.textContent=`${videoFile.name} · ${(videoFile.size/1048576).toFixed(1)} MB`;dom.preview.src=URL.createObjectURL(videoFile);dom.preview.style.display="block";dom.button.disabled=false;setStatus("视频已就绪。",0)});
async function request(path,body){const response=await fetch(path,{method:"POST",body});const data=await response.json().catch(()=>({}));if(!response.ok)throw new Error(data.error||`请求失败 (${response.status})`);return data;}
function list(node,items){node.replaceChildren(...(items||[]).map(text=>{const li=document.createElement("li");li.textContent=text;return li;}));}
function render(data){
  dom.results.replaceChildren();dom.summary.classList.remove("hidden");
  const summaryTitle=document.createElement("strong"),summaryText=document.createElement("p"),driveText=document.createElement("p");
  summaryTitle.textContent=`共识别 ${data.actions.length} 个动作 · 平均分 ${data.summary.average_score}/100`;
  summaryText.textContent=data.summary.overall_highlight||"";
  driveText.textContent=data.drive?.status==="uploaded"?`✓ ${data.drive.uploaded_count} 个视频已上传到 Google Drive / ${data.drive.date_folder}`:`Google Drive 日期文件夹：${data.drive?.date_folder||"--"}。${data.drive?.message||""}`;
  if(data.drive?.folder_url){const link=document.createElement("a");link.href=data.drive.folder_url;link.target="_blank";link.rel="noreferrer";link.textContent=" 打开文件夹";driveText.append(link);}
  dom.summary.replaceChildren(summaryTitle,summaryText,driveText);
  data.actions.forEach(action=>{
    const card=dom.template.content.firstElementChild.cloneNode(true);card.dataset.id=action.id;
    card.querySelector(".number").textContent=String(action.index).padStart(2,"0");card.querySelector(".type").textContent=action.stroke_label||action.stroke_type;card.querySelector(".time").textContent=`${fmt(action.clip_start)} – ${fmt(action.clip_end)}`;card.querySelector(".score").textContent=`${action.score}/100`;card.querySelector(".title").textContent=action.title||`${action.stroke_label} #${action.index}`;card.querySelector(".highlight").textContent=action.highlight;
    const scoreGrid=card.querySelector(".score-grid");Object.entries(action.metrics||{}).forEach(([name,value])=>{const box=document.createElement("div"),strong=document.createElement("strong");box.textContent=name;strong.textContent=value;box.append(strong);scoreGrid.append(box);});
    list(card.querySelector(".strengths"),action.strengths);list(card.querySelector(".improvements"),action.improvements);
    const clip=card.querySelector(".clip"),download=card.querySelector(".download");clip.src=action.clip_url;download.href=`/api/actions/download?job_id=${encodeURIComponent(data.job_id)}&action_id=${encodeURIComponent(action.id)}`;download.download=action.clip_filename;
    if(action.drive_url){const driveLink=document.createElement("a");driveLink.href=action.drive_url;driveLink.target="_blank";driveLink.rel="noreferrer";driveLink.className="download";driveLink.textContent="在 Google Drive 打开";download.after(driveLink);}
    card.querySelector(".start-edit").value=action.clip_start;card.querySelector(".end-edit").value=action.clip_end;
    card.querySelector(".reveal").addEventListener("click",async()=>{try{await request("/api/actions/reveal",JSON.stringify({job_id:data.job_id,action_id:action.id}));}catch(error){alert(error.message);}});
    card.querySelector(".recut").addEventListener("click",async()=>{const btn=card.querySelector(".recut");btn.disabled=true;btn.textContent="切分中…";try{const result=await request("/api/actions/recut",JSON.stringify({job_id:data.job_id,action_id:action.id,start:Number(card.querySelector(".start-edit").value),end:Number(card.querySelector(".end-edit").value)}));clip.src=`${result.clip_url}?t=${Date.now()}`;download.href=result.clip_url;card.querySelector(".time").textContent=`${fmt(result.start)} – ${fmt(result.end)}`;}catch(error){alert(error.message);}finally{btn.disabled=false;btn.textContent="按新时间重新切分";}});
    dom.results.append(card);
  });
}
dom.button.addEventListener("click",async()=>{if(!videoFile)return;dom.button.disabled=true;dom.results.replaceChildren();dom.summary.classList.add("hidden");const form=new FormData();form.append("video",videoFile);form.append("dominant_hand",dom.hand.value);form.append("pre_roll",dom.pre.value);form.append("post_roll",dom.post.value);let ticker;try{setStatus("正在上传视频并交给 Gemini 识别动作…",18);ticker=setInterval(()=>{const current=parseFloat(dom.bar.style.width)||18;dom.bar.style.width=`${Math.min(current+3,88)}%`;},1600);const data=await request("/api/actions/analyze",form);setStatus(`完成：已识别并拆分 ${data.actions.length} 个动作。`,100);render(data);}catch(error){setStatus(`失败：${error.message}`,0);}finally{clearInterval(ticker);dom.button.disabled=false;}});
