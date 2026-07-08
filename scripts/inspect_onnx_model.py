#!/usr/bin/env python3
"""Print ONNX model input and output tensor shapes."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
LOCAL_DEPS = ROOT / ".python_deps"
if LOCAL_DEPS.exists():
    sys.path.insert(0, str(LOCAL_DEPS))

import onnx  # noqa: E402


def tensor_shape(value_info):
    return [
        dim.dim_value or dim.dim_param or "?"
        for dim in value_info.type.tensor_type.shape.dim
    ]


def main() -> int:
    parser = argparse.ArgumentParser(description="Inspect an ONNX model.")
    parser.add_argument("model", help="Path to an .onnx model")
    args = parser.parse_args()

    model_path = Path(args.model)
    model = onnx.load(model_path)

    print(f"Model: {model_path}")
    print("Inputs:")
    for item in model.graph.input:
        print(f"  {item.name}: {tensor_shape(item)}")
    print("Outputs:")
    for item in model.graph.output:
        print(f"  {item.name}: {tensor_shape(item)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
