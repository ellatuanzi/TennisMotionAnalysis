#!/usr/bin/env python3
"""Convert racket annotator project JSON files to a YOLO segmentation dataset."""

from __future__ import annotations

import argparse
import base64
import json
import random
from pathlib import Path


def decode_data_url(data_url: str) -> tuple[bytes, str]:
    header, encoded = data_url.split(",", 1)
    ext = ".png" if "png" in header.lower() else ".jpg"
    return base64.b64decode(encoded), ext


def clamp(value: float) -> float:
    return max(0.0, min(1.0, value))


def label_line(polygon: list[list[float]]) -> str:
    values = ["0"]
    for point in polygon:
        values.extend([f"{clamp(float(point[0])):.6f}", f"{clamp(float(point[1])):.6f}"])
    return " ".join(values)


def iter_frames(input_dir: Path):
    for path in sorted(input_dir.glob("*.json")):
        project = json.loads(path.read_text(encoding="utf-8"))
        for frame in project.get("frames", []):
            annotations = [
                annotation
                for annotation in frame.get("annotations", [])
                if annotation.get("class") == "tennis_racket" and len(annotation.get("polygon", [])) >= 3
            ]
            if annotations and frame.get("image", {}).get("dataUrl"):
                yield path.stem, frame, annotations


def write_yaml(output_dir: Path) -> None:
    (output_dir / "dataset.yaml").write_text(
        f"path: {output_dir.resolve()}\n"
        "train: images/train\n"
        "val: images/val\n"
        "names:\n"
        "  0: tennis_racket\n",
        encoding="utf-8",
    )


def convert(input_dir: Path, output_dir: Path, val_ratio: float) -> int:
    frames = list(iter_frames(input_dir))
    random.Random(7).shuffle(frames)
    if not frames:
        raise SystemExit(f"No labeled racket frames found in {input_dir}")

    for split in ["train", "val"]:
        (output_dir / "images" / split).mkdir(parents=True, exist_ok=True)
        (output_dir / "labels" / split).mkdir(parents=True, exist_ok=True)

    val_count = max(1, round(len(frames) * val_ratio))
    for idx, (project_stem, frame, annotations) in enumerate(frames):
        split = "val" if idx < val_count else "train"
        image_bytes, ext = decode_data_url(frame["image"]["dataUrl"])
        stem = f"{project_stem}-f{int(frame.get('frameIndex', idx)):05d}"
        (output_dir / "images" / split / f"{stem}{ext}").write_bytes(image_bytes)
        labels = [label_line(annotation["polygon"]) for annotation in annotations]
        (output_dir / "labels" / split / f"{stem}.txt").write_text("\n".join(labels) + "\n", encoding="utf-8")

    write_yaml(output_dir)
    return len(frames)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--val-ratio", type=float, default=0.2)
    args = parser.parse_args()

    count = convert(args.input, args.output, args.val_ratio)
    print(f"Converted {count} racket frames to {args.output}")


if __name__ == "__main__":
    main()

