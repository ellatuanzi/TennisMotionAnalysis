#!/usr/bin/env python3
"""Train a YOLO segmentation model from converted app samples."""

from __future__ import annotations

import argparse
from pathlib import Path


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--data", type=Path, required=True)
    parser.add_argument("--base", default="yolo11n-seg.pt")
    parser.add_argument("--epochs", type=int, default=80)
    parser.add_argument("--imgsz", type=int, default=960)
    parser.add_argument("--project", default="runs/segment")
    parser.add_argument("--name", default="racket_ball_seg")
    args = parser.parse_args()

    try:
      from ultralytics import YOLO
    except ImportError as exc:
      raise SystemExit("Install ultralytics first: pip install ultralytics") from exc

    model = YOLO(args.base)
    model.train(
        data=str(args.data),
        task="segment",
        epochs=args.epochs,
        imgsz=args.imgsz,
        project=args.project,
        name=args.name,
        classes=[0, 1],
    )


if __name__ == "__main__":
    main()

