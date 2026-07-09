#!/usr/bin/env python3
"""Validate local and published diary data before release."""

from __future__ import annotations

import json
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
LOCAL_DATA = ROOT / "diary-data.json"
PUBLISHED_DATA = ROOT / "published-diary" / "diary-data.json"


def load_entries(path: Path) -> list[dict]:
  if not path.exists():
    raise SystemExit(f"Missing {path.relative_to(ROOT)}")
  data = json.loads(path.read_text(encoding="utf-8"))
  entries = data if isinstance(data, list) else data.get("entries", [])
  if not isinstance(entries, list):
    raise SystemExit(f"{path.relative_to(ROOT)} does not contain an entries list")
  return entries


def entry_key(entry: dict) -> str:
  return str(entry.get("id") or f"{entry.get('date', '')}|{entry.get('sessionName') or entry.get('videoName') or entry.get('title', '')}|{entry.get('createdAt', '')}")


def validate_entries(entries: list[dict], label: str) -> list[str]:
  errors: list[str] = []
  seen: set[str] = set()
  for index, entry in enumerate(entries, start=1):
    key = entry_key(entry)
    if key in seen:
      errors.append(f"{label}: duplicate entry {key}")
    seen.add(key)
    for field in ["date", "title", "trainingContent", "sessionName", "keyframes"]:
      if field not in entry:
        errors.append(f"{label}: entry {index} is missing {field}")
    if not isinstance(entry.get("keyframes"), list) or not entry.get("keyframes"):
      errors.append(f"{label}: entry {index} has no keyframes")
    if not entry.get("videoUrl") and not entry.get("rawVideoUrl") and not entry.get("previewVideoUrl"):
      errors.append(f"{label}: entry {index} has no video URL")
    for frame_index, frame in enumerate(entry.get("keyframes") or [], start=1):
      if not frame.get("image"):
        errors.append(f"{label}: entry {index} frame {frame_index} has no keyframe image")
      for field in ["image", "rawFrame"]:
        value = frame.get(field)
        if isinstance(value, str) and (value.startswith("./") or value.startswith("assets/") or value.startswith("exports/")):
          relative = value.removeprefix("./")
          if not (ROOT / relative).exists():
            errors.append(f"{label}: entry {index} frame {frame_index} missing asset {relative}")
    for field in ["videoUrl", "rawVideoUrl", "previewVideoUrl"]:
      value = entry.get(field)
      if isinstance(value, str) and (value.startswith("./") or value.startswith("assets/")):
        relative = value.removeprefix("./")
        if not (ROOT / relative).exists():
          errors.append(f"{label}: entry {index} missing video asset {relative}")
  return errors


def summarize(entries: list[dict]) -> str:
  rows = []
  for entry in entries:
    rows.append(
      f"- {entry.get('date', '--')} {entry.get('trainingContent', '--')} "
      f"{entry.get('sessionName') or entry.get('videoName') or entry.get('title', '--')}"
    )
  return "\n".join(rows)


def main() -> int:
  local_entries = load_entries(LOCAL_DATA)
  published_entries = load_entries(PUBLISHED_DATA) if PUBLISHED_DATA.exists() else []
  errors = validate_entries(local_entries, "diary-data.json")

  if published_entries:
    errors.extend(validate_entries(published_entries, "published-diary/diary-data.json"))
    local_keys = [entry_key(entry) for entry in local_entries]
    published_keys = [entry_key(entry) for entry in published_entries]
    if local_keys != published_keys:
      errors.append("published-diary/diary-data.json is not synced with diary-data.json")

  if errors:
    print("Diary release check failed:")
    for error in errors:
      print(f"- {error}")
    return 1

  print(f"Diary release check passed: {len(local_entries)} entries")
  print(summarize(local_entries))
  return 0


if __name__ == "__main__":
  sys.exit(main())
