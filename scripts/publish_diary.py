#!/usr/bin/env python3
"""Build, verify, commit, and publish the static diary release."""

from __future__ import annotations

import argparse
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PUBLISHED = ROOT / "published-diary"
REMOTE = "git@github.com:ellatuanzi/TennisMotionAnalysis.git"


def run(command: list[str], cwd: Path = ROOT, check: bool = True) -> subprocess.CompletedProcess[str]:
  print("+", " ".join(command))
  return subprocess.run(command, cwd=cwd, check=check, text=True)


def has_changes(cwd: Path) -> bool:
  result = subprocess.run(["git", "status", "--short"], cwd=cwd, check=True, text=True, capture_output=True)
  return bool(result.stdout.strip())


def publish_pages(message: str) -> None:
  with tempfile.TemporaryDirectory(prefix="tennis-pages.") as tmp:
    pages_dir = Path(tmp)
    run(["git", "clone", "--branch", "gh-pages", REMOTE, str(pages_dir)])
    shutil.copytree(PUBLISHED, pages_dir, dirs_exist_ok=True)
    run(["git", "add", "."], cwd=pages_dir)
    if has_changes(pages_dir):
      run(["git", "commit", "-m", message], cwd=pages_dir)
      run(["git", "push", "origin", "gh-pages"], cwd=pages_dir)
    else:
      print("GitHub Pages already matches published-diary.")


def main() -> int:
  parser = argparse.ArgumentParser(description="Publish the checked diary to GitHub Pages.")
  parser.add_argument("--message", default="Publish diary update", help="Git commit message.")
  parser.add_argument("--skip-push", action="store_true", help="Build and check only; do not push.")
  args = parser.parse_args()

  run(["python3", "scripts/build_published_diary.py"])
  run(["python3", "scripts/check_diary_release.py"])
  run(["git", "add", "diary-data.json", "published-diary"])
  if has_changes(ROOT):
    run(["git", "commit", "-m", args.message])
  else:
    print("Main branch already has the latest diary files.")

  if args.skip_push:
    print("Skipped push.")
    return 0

  run(["git", "push", "origin", "main"])
  publish_pages(args.message)
  return 0


if __name__ == "__main__":
  sys.exit(main())
