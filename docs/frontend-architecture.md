# Frontend Architecture Notes

This app has grown into several workflows inside one file. Keep future changes small and move code behind stable contracts before changing behavior.

## Module Split Target

- `workflow`: step state, step actions, draft save/load, status text.
- `video-frame`: video loading, frame capture, source frame dimensions, review frame preview.
- `coordinates`: all conversions between source video, ROI crop, normalized pose data, and display canvas.
- `pose-editing`: body keypoint editing, hidden points, anchors, smoothing.
- `racket-detection`: YOLO model loading, racket mask/rotated box, ball anchor/track state.
- `review-render`: annotated video rendering, preview scrubber, playback controls.
- `analysis-report`: serve stage analysis, progress table, saved session comparison.

## Coordinate Contract

Use one storage format and convert only at boundaries.

- Source video pixels: `{ x, y }` in the original video frame.
- Normalized source pose: `[x, y]` in `[0..1]` relative to the full source video.
- ROI crop: source-pixel rectangle `{ sx, sy, sw, sh }`.
- Display viewport: CSS-pixel rectangle used for drawing and pointer hit testing.
- Model inputs: may use resized tensors, but model outputs must be converted back to source video pixels immediately.

Rule: saved pose, racket box, racket mask, and ball track data should be source-normalized or source-pixel data. Display scale, letterbox padding, and ROI crop offsets should never be stored as analysis data.

## Step Checklist

Step 2 Key Frames:

- Keyframes should resolve to distinct frame indexes.
- Keyframe cards should use the selected stage frame, not a stale first frame.
- Card images must keep the player visible enough for full-body review.

Step 3 Frame Corrections:

- The editor should render the current frame's latest smoothed body, racket, and ball data.
- Changing frames can smooth nearby related frames, but dragging a point should not smooth the full video on every pointer move.
- Racket mask and rotated rectangle must come from the same frame and same coordinate space.

Step 4 Review Video:

- Rendered duration should match the source clip duration.
- The preview should have a scrubber for frame-by-frame inspection.
- No extra top-level canvas, image, or video element should be left above the review card.

Step 5 Motion Analysis:

- It should consume the same reviewed track used in Step 4.
- Stage metrics should include angle, position, timing, and confidence support where possible.
- Users must be able to return to Frame Corrections, render again, and re-run analysis.

## Model Diagnostics

The UI should show these in one place:

- Model path: `assets/models/racket_ball_yoloseg.onnx`
- Load state: loading, active, or fallback
- Backend: currently ONNX Runtime Web WASM
- Input name and input shape
- Output names
- Latest racket confidence and frame index
- Number of cached model detections and smoothed track frames

If YOLO is not active, the UI should say that plainly and avoid implying racket/ball quality is model-backed.

## Safe Refactor Order

1. Extract `coordinates` helpers first and add call-site comments only where conversions happen.
2. Move detector runtime and diagnostics into `racket-detection`.
3. Move review rendering after the coordinate contract is stable.
4. Split workflow and analysis last, once the data shape is no longer shifting.
