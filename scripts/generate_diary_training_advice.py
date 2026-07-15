#!/usr/bin/env python3
"""Generate individualized Diary training advice with Gemini."""

from __future__ import annotations

import argparse
import json
import os
import re
import urllib.parse
import urllib.request
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def compact_entry(entry: dict) -> dict:
  return {
    "id": entry.get("id"),
    "date": entry.get("date"),
    "stroke": entry.get("stroke") or entry.get("trainingContent"),
    "title": entry.get("title"),
    "metrics": entry.get("metrics"),
    "diagnosis": entry.get("diagnosis"),
    "coach": entry.get("coach"),
    "coachAi": entry.get("coachAi"),
    "keyframes": [
      {
        "phase": frame.get("phase"),
        "score": frame.get("score"),
        "points": frame.get("points"),
        "aiNote": frame.get("aiNote"),
        "detections": frame.get("detections"),
      }
      for frame in entry.get("keyframes") or []
    ],
  }


def extract_json(text: str) -> list[dict]:
  cleaned = re.sub(r"^```(?:json)?\s*|\s*```$", "", text.strip(), flags=re.I | re.S)
  payload = json.loads(cleaned)
  if not isinstance(payload, list):
    raise ValueError("Gemini response must be a JSON array")
  return payload


def generate(entries: list[dict], model: str) -> list[dict]:
  api_key = os.environ.get("GEMINI_API_KEY", "").strip()
  if not api_key:
    raise SystemExit("GEMINI_API_KEY is not set")
  prompt = f"""
You are a certified junior tennis development coach. Review each motion-analysis Diary entry below.
For every entry, produce concise, individualized, evidence-based training advice in English.

Return ONLY a valid JSON array. Each object must contain exactly:
- id: unchanged entry id
- trainingPriority: 2-3 numbered priorities, each on its own line. Lead with the lowest-scoring or most limiting movement checkpoint. Explain the desired change and a measurable success cue.
- trainingMethod: 3-4 numbered drills, each on its own line. Include sets/repetitions, intensity, one external coaching cue, and a progression test. Make the drills age-appropriate and specific to the stroke and observed issues.

Do not invent injury diagnoses. Do not repeat generic advice across entries. Use the supplied scores, metrics, diagnosis, and keyframe evidence.

Diary entries:
{json.dumps([compact_entry(entry) for entry in entries], ensure_ascii=False)}
""".strip()
  body = json.dumps({
    "contents": [{"parts": [{"text": prompt}]}],
    "generationConfig": {"temperature": 0.35, "responseMimeType": "application/json"},
  }).encode("utf-8")
  url = (
    f"https://generativelanguage.googleapis.com/v1beta/models/{urllib.parse.quote(model)}:generateContent"
    f"?key={urllib.parse.quote(api_key)}"
  )
  request = urllib.request.Request(url, data=body, headers={"Content-Type": "application/json"}, method="POST")
  with urllib.request.urlopen(request, timeout=120) as response:
    result = json.loads(response.read().decode("utf-8"))
  text = result["candidates"][0]["content"]["parts"][0]["text"]
  return extract_json(text)


def main() -> int:
  parser = argparse.ArgumentParser()
  parser.add_argument("--model", default=os.environ.get("GEMINI_MODEL", "gemini-2.5-flash"))
  args = parser.parse_args()
  path = ROOT / "diary-data.json"
  data = json.loads(path.read_text(encoding="utf-8"))
  entries = data if isinstance(data, list) else data.get("entries", [])
  advice = generate(entries, args.model)
  by_id = {str(item.get("id")): item for item in advice}
  updated = 0
  for entry in entries:
    item = by_id.get(str(entry.get("id")))
    if not item:
      continue
    priority = str(item.get("trainingPriority") or "").strip()
    method = str(item.get("trainingMethod") or "").strip()
    if not priority or not method:
      continue
    entry["trainingPriority"] = priority
    entry["trainingMethod"] = method
    updated += 1
  if updated != len(entries):
    raise SystemExit(f"Gemini returned complete advice for {updated}/{len(entries)} entries")
  path.write_text(json.dumps({"entries": entries}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
  print(f"Updated {updated} Diary entries with Gemini training advice.")
  return 0


if __name__ == "__main__":
  raise SystemExit(main())
