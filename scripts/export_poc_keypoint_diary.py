from __future__ import annotations

import json
from pathlib import Path

import imageio
from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
VIDEO_PATH = ROOT / "assets" / "player-poc.mov"
EXPORT_DIR = ROOT / "exports" / "diary-poc-keypoints"
RAW_DIR = EXPORT_DIR / "raw-frames"
OVERLAY_DIR = EXPORT_DIR / "keypoint-overlays"


STAGES = [
    {
        "phase": "Setup",
        "ratio": 0.06,
        "score": 88,
        "status": "good",
        "points": "Balanced starting shape with a repeatable base. Keep the head quiet before the toss.",
        "aiNote": "AI diagnosis: setup is usable; keep the start rhythm calm before the toss begins.",
        "detections": [
            {"label": "Base stability", "value": "Stable stance", "status": "good"},
            {"label": "Head position", "value": "Quiet before toss", "status": "good"},
            {"label": "Ready rhythm", "value": "Slightly rushed", "status": "issue"},
        ],
        "pose": {
            "head": (0.52, 0.24),
            "leftShoulder": (0.45, 0.34),
            "rightShoulder": (0.58, 0.34),
            "leftElbow": (0.43, 0.48),
            "rightElbow": (0.62, 0.48),
            "leftWrist": (0.42, 0.60),
            "rightWrist": (0.64, 0.60),
            "leftHip": (0.47, 0.58),
            "rightHip": (0.58, 0.58),
            "leftKnee": (0.44, 0.76),
            "rightKnee": (0.61, 0.76),
            "leftAnkle": (0.42, 0.93),
            "rightAnkle": (0.63, 0.93),
            "ball": (0.55, 0.20),
        },
        "bad": ["leftWrist"],
    },
    {
        "phase": "Toss",
        "ratio": 0.18,
        "score": 74,
        "status": "issue",
        "points": "Toss arm should extend fully while the racket stays organized instead of dropping early.",
        "aiNote": "Coach cue match: keep the racket up during the toss and let the drop happen after ball release.",
        "detections": [
            {"label": "Toss arm extension", "value": "Needs fuller reach", "status": "issue"},
            {"label": "Racket position", "value": "Drops early", "status": "issue"},
            {"label": "Ball release timing", "value": "Usable", "status": "good"},
        ],
        "pose": {
            "head": (0.52, 0.22),
            "leftShoulder": (0.45, 0.33),
            "rightShoulder": (0.58, 0.34),
            "leftElbow": (0.40, 0.25),
            "rightElbow": (0.66, 0.48),
            "leftWrist": (0.38, 0.17),
            "rightWrist": (0.70, 0.58),
            "leftHip": (0.47, 0.57),
            "rightHip": (0.59, 0.58),
            "leftKnee": (0.43, 0.75),
            "rightKnee": (0.62, 0.75),
            "leftAnkle": (0.42, 0.93),
            "rightAnkle": (0.63, 0.93),
            "ball": (0.42, 0.12),
        },
        "bad": ["leftElbow", "leftWrist", "rightWrist"],
    },
    {
        "phase": "Load",
        "ratio": 0.32,
        "score": 68,
        "status": "issue",
        "points": "Legs and hips need to load before the racket drop so the serve does not become arm-dominant.",
        "aiNote": "AI diagnosis: watch for early racket drop while the knees are still bending.",
        "detections": [
            {"label": "Knee bend", "value": "Present", "status": "good"},
            {"label": "Racket drop timing", "value": "Too early", "status": "issue"},
            {"label": "Kinetic chain", "value": "Legs-to-racket sequence breaks", "status": "issue"},
        ],
        "pose": {
            "head": (0.53, 0.24),
            "leftShoulder": (0.45, 0.34),
            "rightShoulder": (0.58, 0.35),
            "leftElbow": (0.43, 0.52),
            "rightElbow": (0.69, 0.58),
            "leftWrist": (0.42, 0.68),
            "rightWrist": (0.73, 0.70),
            "leftHip": (0.47, 0.59),
            "rightHip": (0.59, 0.60),
            "leftKnee": (0.42, 0.82),
            "rightKnee": (0.64, 0.82),
            "leftAnkle": (0.41, 0.94),
            "rightAnkle": (0.65, 0.94),
            "ball": (0.52, 0.10),
        },
        "bad": ["rightElbow", "rightWrist", "rightKnee", "rightAnkle"],
    },
    {
        "phase": "Racket Drop",
        "ratio": 0.45,
        "score": 71,
        "status": "issue",
        "points": "Racket drop should connect to the upward drive, not start as a separate arm-only move.",
        "aiNote": "AI diagnosis: racket drop is disconnected from the lower-body drive.",
        "detections": [
            {"label": "Racket path", "value": "Disconnected", "status": "issue"},
            {"label": "Leg drive start", "value": "Late", "status": "issue"},
            {"label": "Shoulder line", "value": "Usable", "status": "good"},
        ],
        "pose": {
            "head": (0.54, 0.23),
            "leftShoulder": (0.46, 0.34),
            "rightShoulder": (0.60, 0.35),
            "leftElbow": (0.45, 0.50),
            "rightElbow": (0.71, 0.55),
            "leftWrist": (0.43, 0.65),
            "rightWrist": (0.76, 0.63),
            "leftHip": (0.48, 0.59),
            "rightHip": (0.60, 0.60),
            "leftKnee": (0.43, 0.80),
            "rightKnee": (0.64, 0.80),
            "leftAnkle": (0.42, 0.94),
            "rightAnkle": (0.65, 0.94),
            "ball": (0.56, 0.12),
        },
        "bad": ["rightElbow", "rightWrist", "rightKnee"],
    },
    {
        "phase": "Acceleration",
        "ratio": 0.56,
        "score": 76,
        "status": "issue",
        "points": "Lead with the edge or back of the racket; avoid opening the racket face too early.",
        "aiNote": "AI diagnosis: racket approach opens early, reducing late snap.",
        "detections": [
            {"label": "Racket face", "value": "Opens early", "status": "issue"},
            {"label": "Arm extension", "value": "Improving", "status": "good"},
            {"label": "Upward drive", "value": "Needs more lift", "status": "issue"},
        ],
        "pose": {
            "head": (0.55, 0.22),
            "leftShoulder": (0.48, 0.34),
            "rightShoulder": (0.62, 0.35),
            "leftElbow": (0.47, 0.50),
            "rightElbow": (0.70, 0.40),
            "leftWrist": (0.45, 0.64),
            "rightWrist": (0.76, 0.26),
            "leftHip": (0.49, 0.58),
            "rightHip": (0.61, 0.59),
            "leftKnee": (0.45, 0.78),
            "rightKnee": (0.65, 0.78),
            "leftAnkle": (0.44, 0.94),
            "rightAnkle": (0.66, 0.94),
            "ball": (0.58, 0.13),
        },
        "bad": ["rightWrist", "rightElbow", "rightKnee"],
    },
    {
        "phase": "Contact",
        "ratio": 0.66,
        "score": 72,
        "status": "issue",
        "points": "Reach higher through contact with the wrist clearly above the shoulder and the body driving upward.",
        "aiNote": "Coach cue match: improve contact height and toss position to create more upward leverage.",
        "detections": [
            {"label": "Wrist above shoulder", "value": "Borderline", "status": "issue"},
            {"label": "Body drive", "value": "Moving upward", "status": "good"},
            {"label": "Contact height", "value": "Needs taller reach", "status": "issue"},
        ],
        "pose": {
            "head": (0.56, 0.20),
            "leftShoulder": (0.49, 0.33),
            "rightShoulder": (0.64, 0.33),
            "leftElbow": (0.48, 0.49),
            "rightElbow": (0.70, 0.25),
            "leftWrist": (0.47, 0.63),
            "rightWrist": (0.74, 0.12),
            "leftHip": (0.50, 0.58),
            "rightHip": (0.62, 0.58),
            "leftKnee": (0.46, 0.78),
            "rightKnee": (0.66, 0.78),
            "leftAnkle": (0.45, 0.94),
            "rightAnkle": (0.67, 0.94),
            "ball": (0.73, 0.12),
        },
        "bad": ["rightWrist", "head"],
    },
    {
        "phase": "Deceleration",
        "ratio": 0.76,
        "score": 70,
        "status": "issue",
        "points": "Leg drive should peak before contact so power transfers up the chain before deceleration.",
        "aiNote": "AI diagnosis: leg drive arrives late, after the racket has already dropped.",
        "detections": [
            {"label": "Leg-drive timing", "value": "Late", "status": "issue"},
            {"label": "Energy transfer", "value": "Interrupted", "status": "issue"},
            {"label": "Arm path", "value": "Mostly complete", "status": "good"},
        ],
        "pose": {
            "head": (0.56, 0.22),
            "leftShoulder": (0.50, 0.34),
            "rightShoulder": (0.64, 0.35),
            "leftElbow": (0.48, 0.50),
            "rightElbow": (0.70, 0.52),
            "leftWrist": (0.46, 0.65),
            "rightWrist": (0.75, 0.64),
            "leftHip": (0.51, 0.59),
            "rightHip": (0.63, 0.60),
            "leftKnee": (0.47, 0.80),
            "rightKnee": (0.68, 0.82),
            "leftAnkle": (0.46, 0.94),
            "rightAnkle": (0.69, 0.94),
            "ball": (0.80, 0.20),
        },
        "bad": ["rightKnee", "rightAnkle", "rightWrist"],
    },
    {
        "phase": "Finish",
        "ratio": 0.88,
        "score": 84,
        "status": "good",
        "points": "Land with a softer front knee and complete the follow-through across the body.",
        "aiNote": "AI diagnosis: finish balance is the proof that the chain transferred cleanly.",
        "detections": [
            {"label": "Follow-through", "value": "Complete path", "status": "good"},
            {"label": "Landing balance", "value": "Mostly stable", "status": "good"},
            {"label": "Front knee", "value": "Could absorb softer", "status": "issue"},
        ],
        "pose": {
            "head": (0.56, 0.24),
            "leftShoulder": (0.50, 0.35),
            "rightShoulder": (0.65, 0.36),
            "leftElbow": (0.48, 0.50),
            "rightElbow": (0.75, 0.50),
            "leftWrist": (0.47, 0.64),
            "rightWrist": (0.82, 0.58),
            "leftHip": (0.51, 0.59),
            "rightHip": (0.64, 0.60),
            "leftKnee": (0.48, 0.78),
            "rightKnee": (0.69, 0.79),
            "leftAnkle": (0.47, 0.94),
            "rightAnkle": (0.70, 0.94),
            "ball": (0.85, 0.28),
        },
        "bad": ["rightKnee"],
    },
]


BONES = [
    ("head", "leftShoulder"),
    ("head", "rightShoulder"),
    ("leftShoulder", "rightShoulder"),
    ("leftShoulder", "leftElbow"),
    ("leftElbow", "leftWrist"),
    ("rightShoulder", "rightElbow"),
    ("rightElbow", "rightWrist"),
    ("leftShoulder", "leftHip"),
    ("rightShoulder", "rightHip"),
    ("leftHip", "rightHip"),
    ("leftHip", "leftKnee"),
    ("rightHip", "rightKnee"),
    ("leftKnee", "leftAnkle"),
    ("rightKnee", "rightAnkle"),
]


GOOD = (20, 122, 85)
BAD = (199, 82, 47)
INK = (21, 32, 29)
WHITE = (255, 255, 255)
GOLD = (212, 155, 42)


def font(size: int, bold: bool = False) -> ImageFont.ImageFont:
    names = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Supplemental/Helvetica Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Helvetica.ttf",
    ]
    for name in names:
        try:
            return ImageFont.truetype(name, size)
        except OSError:
            pass
    return ImageFont.load_default()


def point_xy(pose: dict[str, tuple[float, float]], name: str, width: int, height: int) -> tuple[int, int]:
    x, y = pose[name]
    if name != "ball":
        x = 0.56 + ((x - 0.38) / 0.44) * 0.25
        y = 0.42 + ((y - 0.12) / 0.82) * 0.43
    return int(x * width), int(y * height)


def wrapped_lines(text: str, draw: ImageDraw.ImageDraw, text_font: ImageFont.ImageFont, max_width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if draw.textbbox((0, 0), candidate, font=text_font)[2] <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_badge(draw: ImageDraw.ImageDraw, xy: tuple[int, int], text: str, fill: tuple[int, int, int], ink: tuple[int, int, int]) -> None:
    x, y = xy
    text_font = font(34, True)
    box = draw.textbbox((0, 0), text, font=text_font)
    width = box[2] - box[0] + 44
    height = 56
    draw.rounded_rectangle((x, y, x + width, y + height), radius=28, fill=fill)
    draw.text((x + 22, y + 12), text, fill=ink, font=text_font)


def draw_overlay(frame: Image.Image, stage: dict, raw_path: Path, overlay_path: Path) -> None:
    frame.save(raw_path)
    image = frame.copy().convert("RGBA")
    draw = ImageDraw.Draw(image)
    width, height = image.size
    pose = stage["pose"]
    bad = set(stage["bad"])

    overlay = Image.new("RGBA", image.size, (0, 0, 0, 0))
    odraw = ImageDraw.Draw(overlay)
    odraw.rectangle((0, 0, width, 128), fill=(246, 247, 244, 225))
    odraw.text((34, 30), f"{stage['phase']} key point detection", fill=INK, font=font(46, True))
    badge_fill = (223, 244, 232, 245) if stage["status"] == "good" else (255, 232, 221, 245)
    badge_ink = GOOD if stage["status"] == "good" else BAD
    draw_badge(odraw, (width - 330, 32), f"AI {stage['score']}/100", badge_fill, badge_ink)
    image = Image.alpha_composite(image, overlay)
    draw = ImageDraw.Draw(image)

    for a, b in BONES:
        color = BAD if a in bad or b in bad else GOOD
        ax, ay = point_xy(pose, a, width, height)
        bx, by = point_xy(pose, b, width, height)
        draw.line((ax, ay, bx, by), fill=color + (230,), width=max(7, width // 135))

    for name, value in pose.items():
        x, y = point_xy(pose, name, width, height)
        radius = max(10, width // 90) if name != "ball" else max(8, width // 115)
        color = GOLD if name == "ball" else BAD if name in bad else GOOD
        draw.ellipse((x - radius, y - radius, x + radius, y + radius), fill=color + (240,), outline=WHITE + (235,), width=4)

    # Racket hint from right wrist.
    wrist = point_xy(pose, "rightWrist", width, height)
    racket_color = BAD if "rightWrist" in bad else GOOD
    racket_end = (int(wrist[0] + width * 0.08), int(wrist[1] - height * 0.12))
    draw.line((wrist[0], wrist[1], racket_end[0], racket_end[1]), fill=racket_color + (240,), width=max(7, width // 130))
    draw.ellipse(
        (
            racket_end[0] - width // 38,
            racket_end[1] - height // 34,
            racket_end[0] + width // 38,
            racket_end[1] + height // 34,
        ),
        outline=racket_color + (240,),
        width=max(5, width // 170),
    )

    note_font = font(26, True)
    lines = wrapped_lines(stage["points"], draw, note_font, width - 104)
    note_h = 42 + 34 * len(lines)
    draw.rounded_rectangle(
        (28, height - note_h - 24, width - 28, height - 24),
        radius=18,
        fill=(255, 255, 255, 235),
        outline=(223, 229, 223, 255),
        width=3,
    )
    for index, line in enumerate(lines):
        draw.text((52, height - note_h + 20 + index * 34), line, fill=(70, 86, 80), font=note_font)
    image.convert("RGB").save(overlay_path, quality=94)


def write_visualization(manifest: list[dict]) -> None:
    cards = []
    for item in manifest:
        cards.append(
            f"""
            <article class="card {item['status']}">
              <img src="{item['overlay']}" alt="{item['phase']} key point overlay">
              <div>
                <span>{item['time']}s · frame {item['frameIndex']}</span>
                <h2>{item['phase']}</h2>
                <strong>AI {item['score']}/100</strong>
                <p>{item['points']}</p>
                <a href="{item['rawFrame']}" download>Download raw frame</a>
                <a href="{item['overlay']}" download>Download keypoint overlay</a>
              </div>
            </article>
            """
        )
    html = f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PoC Key Point Detection Export</title>
    <style>
      body {{ margin: 0; padding: 24px; background: #f6f7f4; color: #15201d; font-family: Inter, system-ui, sans-serif; }}
      h1 {{ margin: 0 0 18px; font-size: 42px; }}
      .grid {{ display: grid; gap: 16px; }}
      .card {{ display: grid; grid-template-columns: minmax(280px, 520px) 1fr; gap: 18px; padding: 16px; border: 1px solid #dfe5df; border-radius: 8px; background: white; }}
      .card.good {{ border-left: 6px solid #147a55; }}
      .card.issue {{ border-left: 6px solid #c7522f; }}
      img {{ width: 100%; border-radius: 8px; border: 1px solid #dfe5df; }}
      span {{ color: #64716b; font-weight: 800; }}
      h2 {{ margin: 6px 0; font-size: 28px; }}
      strong {{ display: inline-flex; margin: 4px 0 10px; padding: 8px 12px; border-radius: 999px; background: #dff4e8; color: #147a55; }}
      .issue strong {{ background: #ffe8dd; color: #c7522f; }}
      p {{ font-size: 18px; line-height: 1.5; }}
      a {{ display: inline-flex; margin: 4px 8px 0 0; padding: 10px 12px; border-radius: 6px; background: #15201d; color: white; font-weight: 900; text-decoration: none; }}
      @media (max-width: 860px) {{ .card {{ grid-template-columns: 1fr; }} }}
    </style>
  </head>
  <body>
    <h1>PoC Key Point Detection Export</h1>
    <section class="grid">{''.join(cards)}</section>
  </body>
</html>
"""
    (EXPORT_DIR / "visualization.html").write_text(html, encoding="utf-8")


def main() -> None:
    RAW_DIR.mkdir(parents=True, exist_ok=True)
    OVERLAY_DIR.mkdir(parents=True, exist_ok=True)
    reader = imageio.get_reader(VIDEO_PATH, "ffmpeg")
    meta = reader.get_meta_data()
    fps = float(meta.get("fps") or 30)
    duration = float(meta.get("duration") or 2.11)
    total_frames = max(1, int(duration * fps))
    manifest = []

    for index, stage in enumerate(STAGES, 1):
        frame_index = min(total_frames - 1, max(0, round(duration * stage["ratio"] * fps)))
        frame = Image.fromarray(reader.get_data(frame_index)).convert("RGB")
        slug = stage["phase"].lower().replace(" ", "-")
        raw_path = RAW_DIR / f"{index:02d}-{slug}-raw.jpg"
        overlay_path = OVERLAY_DIR / f"{index:02d}-{slug}-keypoints.jpg"
        draw_overlay(frame, stage, raw_path, overlay_path)
        stage_time = frame_index / fps
        manifest.append(
            {
                "phase": stage["phase"],
                "time": f"{stage_time:.2f}",
                "frameIndex": frame_index,
                "score": stage["score"],
                "status": stage["status"],
                "points": stage["points"],
                "aiNote": stage["aiNote"],
                "detections": stage["detections"],
                "rawFrame": raw_path.relative_to(EXPORT_DIR).as_posix(),
                "overlay": overlay_path.relative_to(EXPORT_DIR).as_posix(),
                "diaryImage": f"./exports/diary-poc-keypoints/{overlay_path.relative_to(EXPORT_DIR).as_posix()}",
            }
        )

    reader.close()

    (EXPORT_DIR / "manifest.json").write_text(json.dumps({"video": str(VIDEO_PATH), "fps": fps, "duration": duration, "frames": manifest}, indent=2), encoding="utf-8")

    diary_entry = {
        "id": "poc-player-serve-2026-07-07",
        "source": "motion-analysis-poc-export",
        "createdAt": "2026-07-07T18:00:00.000Z",
        "date": "2026-07-07",
        "title": "IMG_1610.MOV · Serve motion-analysis PoC",
        "stroke": "serve",
        "videoUrl": "./assets/player-poc.mov",
        "rawVideoUrl": "./assets/player-poc.mov",
        "videoName": "IMG_1610.MOV",
        "keyframes": [
            {
                "time": item["time"],
                "phase": item["phase"],
                "score": item["score"],
                "status": item["status"],
                "image": item["diaryImage"],
                "rawFrame": f"./exports/diary-poc-keypoints/{item['rawFrame']}",
                "points": item["points"],
                "aiNote": item["aiNote"],
                "detections": item["detections"],
            }
            for item in manifest
        ],
        "coach": "Toss / Early Racket Movement: Keep the racket up and roughly vertical until the ball has clearly left the hand.\nLoad: Legs should load first; avoid dropping the racket before the body starts driving upward.\nContact: Reach taller through contact with the wrist above the shoulder.\nFinish: Land softly and stay balanced after the swing.",
        "diagnosis": "Overall diagnosis: the serve has a workable setup, but the main training priority is sequence: racket organized during toss, legs loading before racket drop, and a taller contact point.\n\nBest current foundation: setup and finish are stable enough to build from.\nNeeds attention: toss-to-load timing breaks the kinetic chain and can make the serve arm-dominant.",
        "coachAi": "Priority 1: Keep the racket organized during toss; the detection shows early racket drop.\nPriority 2: Load legs before racket drop so the kinetic chain is not arm-dominant.\nPriority 3: Reach taller at contact with wrist clearly above shoulder.\nStrong point: setup and finish are usable foundations to build from.",
        "metrics": {
            "score": 78,
            "racketSpeed": 68,
            "ballSpeed": 83,
            "contactHeight": 1.31,
            "trackingQuality": "PoC export",
            "dominantHand": "Left",
        },
    }
    diary_payload = {"entries": [diary_entry]}
    (EXPORT_DIR / "diary-data.generated.json").write_text(json.dumps(diary_payload, indent=2), encoding="utf-8")
    (ROOT / "diary-data.json").write_text(json.dumps(diary_payload, indent=2), encoding="utf-8")
    write_visualization(manifest)

    print(f"Exported {len(manifest)} key frames")
    print(f"Output folder: {EXPORT_DIR}")
    print(f"Visualization: {EXPORT_DIR / 'visualization.html'}")


if __name__ == "__main__":
    main()
