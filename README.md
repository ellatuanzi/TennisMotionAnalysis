# Junior Tennis Motion Analysis Prototype

This is a local website prototype for comparing a junior player's tennis video against a reference motion. It generates pose match scoring, strengths, improvement areas, motion profile notes, racket speed, and estimated ball speed.

## Run Locally

Start a local server from this folder:

```bash
python3 -m http.server 5173
```

Then open:

```text
http://localhost:5173
```

Racket annotation tool:

```text
http://localhost:5173/racket_annotator/
```

## Model Integration Plan

The current `createPose()` and `analyzeMotion()` functions in `app.js` are replaceable front-end simulation layers. A production version can use these API boundaries:

- `POST /api/pose/extract`: input a video, output per-frame keypoints, confidence scores, and phase labels.
- `POST /api/motion/compare`: input player and reference keypoints, output angle gaps, timing gaps, and phase scores.
- `POST /api/report/generate`: input structured metrics, call an LLM to generate the coaching report.
- `POST /api/speed/estimate`: input ball trajectory, FPS, and reference distance, output estimated ball and racket speed.
- `POST /api/reference/youtube`: input a YouTube URL plus start/end timestamps, process the clip server-side, and return reference pose data.

Recommended CV stack:

- Browser prototype: MediaPipe Pose or MoveNet.
- Higher-accuracy backend: RTMPose, MMPose, or a tennis-specific pose model.
- Racket detection: YOLO-seg. Convert the racket mask polygon to a minimum-area rotated rectangle for editing and tracking.
- Ball detection: YOLO small-object detector plus color/motion filtering, Kalman smoothing, and user anchor corrections for missed frames.
- Ball speed estimation: detected ball trajectory, multi-frame tracking, and scale calibration from court lines or known distances.
- YouTube references: store the URL, timestamps, and extracted keypoints; avoid redistributing downloaded video content.

Current object overlays:

- Body keypoints use MediaPipe Pose in the browser.
- Racket and ball overlays are pose-guided fallback estimates until a trained YOLO-seg/YOLO model is added.
- The app keeps racket/ball corrections as editable anchors so a future YOLO detector can plug into the same smoothing and review workflow.

Training data workflow:

- For true racket segmentation, use the standalone `racket_annotator/` tool. Import a video, capture or auto-sample frames, click a polygon around the racket, and save the project JSON.
- Convert annotator projects to YOLO-seg data:

```bash
python3 model_pipeline/scripts/convert_racket_annotations.py \
  --input model_pipeline/training_samples \
  --output model_pipeline/datasets/racket_seg
```

- Train:

```bash
python3 model_pipeline/scripts/train_yoloseg.py \
  --data model_pipeline/datasets/racket_seg/dataset.yaml \
  --base yolo11n-seg.pt \
  --epochs 80
```

- Export the model to `assets/models/racket_ball_yoloseg.onnx` with `model_pipeline/scripts/export_onnx.py`.
- `Save Training Sample` in the analysis frame editor still exports body, ball, and fallback racket context for progress tracking and later mixed datasets.
- For the future ball model, export a small bounding box around the corrected ball center and train it as a small-object detector.
- See `model_pipeline/README.md` for dataset conversion, training, and ONNX export commands.

## Current PoC Preset

- Player video: `assets/player-poc.mov`, copied from `IMG_1610.MOV`.
- Reference source: [Super slow-motion Forehand Video.(Step by step)](https://www.youtube.com/watch?v=jHCSCBb9IW4).
- Reference segment: `00:00-00:10`.
- The YouTube video is not downloaded or redistributed; the prototype stores only the source URL and timestamps.

## Regression Checks

Before changing keyframe extraction, video seeking, or review rendering, verify:

- `Auto Detect Key Frames` produces visibly different Setup, Toss, Load, Racket Drop, Acceleration, Contact, Deceleration, and Finish cards.
- Each keyframe card keeps its own frozen `frameIndex`, pose, and preview image after smoothing or entering Frame Corrections.
- Step 3 frame playback changes overlays as the frame slider moves; it must not reuse one corrected frame for the whole video.
- Review Video shows the actual video frame under the overlay, not only keypoints on a dark/blank frame.

Known failure mode: Chrome can fire `seeked` before the canvas receives the newly decoded video frame. Keep the `seekVideoToTime -> waitForVideoFrame(targetTime) -> nextPaint` sequence intact when capturing keyframe previews.
