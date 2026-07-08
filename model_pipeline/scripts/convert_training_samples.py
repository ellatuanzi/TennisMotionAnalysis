#!/usr/bin/env python3
"""Convert app training-sample JSON files to a YOLO segmentation dataset."""

from __future__ import annotations

import argparse
import base64
import json
import math
import random
from pathlib import Path


CLASSES = ["tennis_racket", "tennis_ball"]


def clamp(value: float, low: float = 0.0, high: float = 1.0) -> float:
    return max(low, min(high, value))


def decode_data_url(data_url: str) -> tuple[bytes, str]:
    header, encoded = data_url.split(",", 1)
    ext = ".png" if "png" in header.lower() else ".jpg"
    return base64.b64decode(encoded), ext


def racket_polygon(box: dict) -> list[tuple[float, float]]:
    cx = float(box["cx"])
    cy = float(box["cy"])
    width = float(box["width"])
    height = float(box["height"])
    angle = float(box.get("angle", 0.0))
    sin_a = math.sin(angle)
    cos_a = math.cos(angle)
    corners = [
        (-width / 2, -height / 2),
        (width / 2, -height / 2),
        (width / 2, height / 2),
        (-width / 2, height / 2),
    ]
    return [
        (
            clamp(cx + x * cos_a - y * sin_a),
            clamp(cy + x * sin_a + y * cos_a),
        )
        for x, y in corners
    ]


def ball_polygon(ball: dict, size: float = 0.018) -> list[tuple[float, float]]:
    x = float(ball["x"])
    y = float(ball["y"])
    half = size / 2
    return [
        (clamp(x - half), clamp(y - half)),
        (clamp(x + half), clamp(y - half)),
        (clamp(x + half), clamp(y + half)),
        (clamp(x - half), clamp(y + half)),
    ]


def label_line(class_id: int, points: list[tuple[float, float]], mode: str) -> str:
    values = [str(class_id)]
    if mode == "obb":
        points = points[:4]
    for x, y in points:
        values.extend([f"{clamp(x):.6f}", f"{clamp(y):.6f}"])
    return " ".join(values)


def sample_labels(sample: dict, mode: str) -> list[str]:
    annotation = sample.get("annotation", {})
    labels: list[str] = []
    racket = annotation.get("racket")
    if racket:
        labels.append(label_line(0, racket_polygon(racket), mode))
    ball = annotation.get("ball")
    if ball:
        labels.append(label_line(1, ball_polygon(ball), mode))
    return labels


def write_yaml(path: Path, dataset_dir: Path) -> None:
    names = "\n".join(f"  {idx}: {name}" for idx, name in enumerate(CLASSES))
    path.write_text(
        f"path: {dataset_dir.resolve()}\n"
        "train: images/train\n"
        "val: images/val\n"
        f"names:\n{names}\n",
        encoding="utf-8",
    )


def convert(input_dir: Path, output_dir: Path, mode: str, val_ratio: float) -> int:
    samples = sorted(input_dir.glob("*.json"))
    random.Random(7).shuffle(samples)
    if not samples:
        raise SystemExit(f"No JSON samples found in {input_dir}")

    for split in ["train", "val"]:
        (output_dir / "images" / split).mkdir(parents=True, exist_ok=True)
        (output_dir / "labels" / split).mkdir(parents=True, exist_ok=True)

    converted = 0
    for idx, sample_path in enumerate(samples):
        sample = json.loads(sample_path.read_text(encoding="utf-8"))
        image_data = sample.get("image", {}).get("dataUrl")
        if not image_data:
            continue
        labels = sample_labels(sample, mode)
        if not labels:
            continue

        image_bytes, ext = decode_data_url(image_data)
        split = "val" if idx < max(1, round(len(samples) * val_ratio)) else "train"
        stem = sample_path.stem.replace("-training-sample", "")
        image_path = output_dir / "images" / split / f"{stem}{ext}"
        label_path = output_dir / "labels" / split / f"{stem}.txt"
        image_path.write_bytes(image_bytes)
        label_path.write_text("\n".join(labels) + "\n", encoding="utf-8")
        converted += 1

    write_yaml(output_dir / "dataset.yaml", output_dir)
    return converted


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--mode", choices=["segment", "obb"], default="segment")
    parser.add_argument("--val-ratio", type=float, default=0.2)
    args = parser.parse_args()

    count = convert(args.input, args.output, args.mode, args.val_ratio)
    print(f"Converted {count} samples to {args.output}")


if __name__ == "__main__":
    main()

