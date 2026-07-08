# YOLO-seg Racket and Ball Pipeline

This folder turns corrected app frames into a small, child-specific detector.

## Why YOLO-seg

- The racket needs a mask-like shape, not a large horizontal box.
- A racket mask can be converted to a minimum-area rotated rectangle for the app editor.
- YOLO-seg is usually faster to train and deploy than Mask R-CNN.

## Workflow

### True racket segmentation

1. Open `http://localhost:5173/racket_annotator/`.
2. Import a video.
3. Capture or auto-sample frames.
4. Click a polygon around the visible racket on each useful frame.
5. Save the project JSON.
6. Move the downloaded JSON files into `model_pipeline/training_samples/`.
7. Convert samples:

```bash
python3 model_pipeline/scripts/convert_racket_annotations.py \
  --input model_pipeline/training_samples \
  --output model_pipeline/datasets/racket_seg
```

8. Train:

```bash
python3 model_pipeline/scripts/train_yoloseg.py \
  --data model_pipeline/datasets/racket_seg/dataset.yaml \
  --base yolo11n-seg.pt \
  --epochs 80
```

### Analysis-app fallback samples

1. In the analysis app, correct a frame and click `Save Training Sample`.
2. Move the downloaded JSON files into `model_pipeline/training_samples/`.
3. Convert fallback samples:

```bash
python3 model_pipeline/scripts/convert_training_samples.py \
  --input model_pipeline/training_samples \
  --output model_pipeline/datasets/racket_ball_seg \
  --mode segment
```

4. Train:

```bash
python3 model_pipeline/scripts/train_yoloseg.py \
  --data model_pipeline/datasets/racket_ball_seg/dataset.yaml \
  --base yolo11n-seg.pt \
  --epochs 80
```

5. Export ONNX:

```bash
python3 model_pipeline/scripts/export_onnx.py \
  --weights runs/segment/racket_ball_seg/weights/best.pt \
  --output model_pipeline/models/racket_ball_yoloseg.onnx
```

6. Copy the ONNX model to:

```text
assets/models/racket_ball_yoloseg.onnx
```

## Labels

- `0 tennis_racket`
- `1 tennis_ball`

The current app samples store the racket as a corrected rotated rectangle. The converter writes that rectangle as a segmentation polygon. Later, true mask polygons can replace this approximation without changing the app workflow.
