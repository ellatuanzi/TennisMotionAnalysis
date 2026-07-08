#!/usr/bin/env python3
"""Export trained YOLO-seg weights to ONNX for app integration."""

from __future__ import annotations

import argparse
import shutil
from pathlib import Path


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--weights", type=Path, required=True)
    parser.add_argument("--output", type=Path, default=Path("model_pipeline/models/racket_ball_yoloseg.onnx"))
    parser.add_argument("--imgsz", type=int, default=960)
    args = parser.parse_args()

    try:
      from ultralytics import YOLO
    except ImportError as exc:
      raise SystemExit("Install ultralytics first: pip install ultralytics") from exc

    model = YOLO(str(args.weights))
    exported = Path(model.export(format="onnx", imgsz=args.imgsz, simplify=True))
    args.output.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(exported, args.output)
    print(f"ONNX model written to {args.output}")


if __name__ == "__main__":
    main()

