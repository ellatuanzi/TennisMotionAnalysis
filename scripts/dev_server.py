#!/usr/bin/env python3
"""Local server for the tennis motion app with WASM-friendly headers."""

from __future__ import annotations

import argparse
import functools
import http.server
import mimetypes
import socketserver
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


class TennisMotionHandler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        ".js": "text/javascript",
        ".mjs": "text/javascript",
        ".wasm": "application/wasm",
        ".onnx": "application/octet-stream",
    }

    def end_headers(self) -> None:
        self.send_header("Cross-Origin-Opener-Policy", "same-origin")
        self.send_header("Cross-Origin-Embedder-Policy", "require-corp")
        self.send_header("Cross-Origin-Resource-Policy", "same-origin")
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def guess_type(self, path: str) -> str:
        suffix = Path(path).suffix
        if suffix in self.extensions_map:
            return self.extensions_map[suffix]
        guessed, _ = mimetypes.guess_type(path)
        return guessed or "application/octet-stream"


def main() -> int:
    parser = argparse.ArgumentParser(description="Run the tennis motion local app server.")
    parser.add_argument("--port", type=int, default=5175)
    parser.add_argument("--host", default="127.0.0.1")
    args = parser.parse_args()

    handler = functools.partial(TennisMotionHandler, directory=str(ROOT))
    with socketserver.TCPServer((args.host, args.port), handler) as server:
        print(f"Serving {ROOT} at http://{args.host}:{args.port}/index.html")
        server.serve_forever()


if __name__ == "__main__":
    raise SystemExit(main())
