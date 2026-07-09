#!/usr/bin/env python3
"""Import a browser-exported diary package into the local project."""

from __future__ import annotations

import argparse
import json
import shutil
import sys
import zipfile
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
ALLOWED_PREFIXES = ("assets/", "exports/")


def entry_key(entry: dict) -> str:
  return str(entry.get("id") or f"{entry.get('date', '')}|{entry.get('sessionName') or entry.get('videoName') or entry.get('title', '')}|{entry.get('createdAt', '')}")


def safe_member_path(name: str) -> Path:
  path = Path(name)
  if path.is_absolute() or ".." in path.parts:
    raise SystemExit(f"Unsafe package path: {name}")
  if name != "diary-data.json" and not name.startswith(ALLOWED_PREFIXES):
    raise SystemExit(f"Unexpected package path: {name}")
  return ROOT / path


def load_entries(path: Path) -> list[dict]:
  if not path.exists():
    return []
  data = json.loads(path.read_text(encoding="utf-8"))
  return data if isinstance(data, list) else data.get("entries", [])


def merge_entries(imported: list[dict], current: list[dict]) -> list[dict]:
  merged: list[dict] = []
  seen: set[str] = set()
  for entry in [*imported, *current]:
    key = entry_key(entry)
    if key in seen:
      continue
    seen.add(key)
    merged.append(entry)
  return merged


def main() -> int:
  parser = argparse.ArgumentParser(description="Import a diary package zip exported by the browser.")
  parser.add_argument("package", type=Path, help="Path to the exported diary package zip")
  args = parser.parse_args()

  if not args.package.exists():
    raise SystemExit(f"Package not found: {args.package}")

  with zipfile.ZipFile(args.package) as archive:
    names = archive.namelist()
    if "diary-data.json" not in names:
      raise SystemExit("Package does not contain diary-data.json")

    imported_data = json.loads(archive.read("diary-data.json").decode("utf-8"))
    imported_entries = imported_data if isinstance(imported_data, list) else imported_data.get("entries", [])
    if not imported_entries:
      raise SystemExit("Package diary-data.json has no entries")

    for name in names:
      if name.endswith("/"):
        continue
      target = safe_member_path(name)
      if name == "diary-data.json":
        continue
      target.parent.mkdir(parents=True, exist_ok=True)
      with archive.open(name) as source, target.open("wb") as destination:
        shutil.copyfileobj(source, destination)

  current_entries = load_entries(ROOT / "diary-data.json")
  merged_entries = merge_entries(imported_entries, current_entries)
  (ROOT / "diary-data.json").write_text(json.dumps({"entries": merged_entries}, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
  print(f"Imported {len(imported_entries)} package entries; diary-data.json now has {len(merged_entries)} entries.")
  return 0


if __name__ == "__main__":
  sys.exit(main())
