#!/usr/bin/env python3
"""Build the password-protected static diary release.

Local workflow:
1. Iterate on training-diary.html/css/js and diary-data.json locally.
2. Confirm the local version in the browser.
3. Run this script to copy the confirmed diary into published-diary/.

The release is static and keeps the existing client-side password gate.
"""

from __future__ import annotations

import json
import re
import shutil
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "published-diary"


def copy_file(source: Path, target: Path) -> None:
  target.parent.mkdir(parents=True, exist_ok=True)
  shutil.copy2(source, target)


def release_html() -> str:
  html = (ROOT / "training-diary.html").read_text()
  html = html.replace('<link rel="stylesheet" href="./training-diary.css?v=20260707-diary-raw-video" />', '<link rel="stylesheet" href="./training-diary.css" />')
  html = re.sub(r'<link rel="stylesheet" href="./training-diary\.css\?v=[^"]+" />', '<link rel="stylesheet" href="./training-diary.css" />', html)
  html = re.sub(r'<script src="./training-diary\.js\?v=[^"]+"></script>', '<script src="./training-diary.js"></script>', html)
  html = html.replace('href="./index.html">Motion Analysis</a>', 'href="../index.html">Motion Analysis</a>')
  html = html.replace('href="./index.html">Open Motion Analysis</a>', 'href="../index.html">Open Motion Analysis</a>')
  return html


def local_asset_paths_from_entry(entry: dict) -> set[str]:
  paths: set[str] = set()
  fields = ["videoUrl", "previewVideoUrl", "rawVideoUrl"]
  for field in fields:
    value = entry.get(field)
    if isinstance(value, str) and (value.startswith("./assets/") or value.startswith("assets/")):
      paths.add(value.removeprefix("./"))

  for frame in entry.get("keyframes") or []:
    for field in ["image", "rawFrame"]:
      value = frame.get(field)
      if isinstance(value, str) and not value.startswith("data:") and (value.startswith("./") or value.startswith("assets/")):
        paths.add(value.removeprefix("./"))
  return paths


def copy_diary_assets() -> None:
  data = json.loads((ROOT / "diary-data.json").read_text())
  entries = data.get("entries") if isinstance(data, dict) else data
  asset_paths: set[str] = set()
  for entry in entries or []:
    if isinstance(entry, dict):
      asset_paths.update(local_asset_paths_from_entry(entry))

  for relative in sorted(asset_paths):
    source = ROOT / relative
    if source.exists() and source.is_file():
      copy_file(source, OUT / relative)


def main() -> None:
  OUT.mkdir(parents=True, exist_ok=True)
  (OUT / "index.html").write_text(release_html())
  copy_file(ROOT / "training-diary.css", OUT / "training-diary.css")
  copy_file(ROOT / "training-diary.js", OUT / "training-diary.js")
  copy_file(ROOT / "diary-data.json", OUT / "diary-data.json")
  copy_diary_assets()
  (OUT / ".nojekyll").write_text("")
  (OUT / "README.md").write_text(
    "# Published Tennis Training Diary\n\n"
    "This directory is the static, password-protected diary release. "
    "Update it only after confirming the local diary.\n\n"
    "Build command from the repository root:\n\n"
    "```bash\n"
    "python3 scripts/build_published_diary.py\n"
    "```\n"
  )
  print(f"Published diary written to {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
  main()
