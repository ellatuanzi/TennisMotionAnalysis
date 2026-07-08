const dom = {
  videoInput: document.querySelector("#videoInput"),
  video: document.querySelector("#video"),
  canvas: document.querySelector("#canvas"),
  statusText: document.querySelector("#statusText"),
  fileName: document.querySelector("#fileName"),
  playButton: document.querySelector("#playButton"),
  captureButton: document.querySelector("#captureButton"),
  prevFrameButton: document.querySelector("#prevFrameButton"),
  nextFrameButton: document.querySelector("#nextFrameButton"),
  frameStepInput: document.querySelector("#frameStepInput"),
  sampleEveryInput: document.querySelector("#sampleEveryInput"),
  autoSampleButton: document.querySelector("#autoSampleButton"),
  zoomInput: document.querySelector("#zoomInput"),
  panXInput: document.querySelector("#panXInput"),
  panYInput: document.querySelector("#panYInput"),
  resetViewButton: document.querySelector("#resetViewButton"),
  undoPointButton: document.querySelector("#undoPointButton"),
  closePolygonButton: document.querySelector("#closePolygonButton"),
  clearPolygonButton: document.querySelector("#clearPolygonButton"),
  deleteFrameButton: document.querySelector("#deleteFrameButton"),
  labelSelect: document.querySelector("#labelSelect"),
  saveProjectButton: document.querySelector("#saveProjectButton"),
  loadProjectInput: document.querySelector("#loadProjectInput"),
  timeText: document.querySelector("#timeText"),
  frameCountText: document.querySelector("#frameCountText"),
  frameStrip: document.querySelector("#frameStrip"),
};

const state = {
  videoName: "",
  videoUrl: "",
  fps: 60,
  frames: [],
  selectedFrameId: null,
  draftPolygon: [],
  view: {
    zoom: 1,
    panX: 0.5,
    panY: 0.5,
  },
};

const ctx = dom.canvas.getContext("2d");

function selectedFrame() {
  return state.frames.find((frame) => frame.id === state.selectedFrameId) || null;
}

function setStatus(text) {
  dom.statusText.textContent = text;
}

function fitCanvasToVideo() {
  const width = dom.video.videoWidth || 1280;
  const height = dom.video.videoHeight || 720;
  dom.canvas.width = width;
  dom.canvas.height = height;
}

function viewSourceRect() {
  const zoom = Math.max(1, Number(state.view.zoom || 1));
  const width = 1 / zoom;
  const height = 1 / zoom;
  const x = Math.max(0, Math.min(1 - width, Number(state.view.panX || 0.5) - width / 2));
  const y = Math.max(0, Math.min(1 - height, Number(state.view.panY || 0.5) - height / 2));
  return { x, y, width, height };
}

function sourceToCanvas(point) {
  const view = viewSourceRect();
  return [
    ((point[0] - view.x) / view.width) * dom.canvas.width,
    ((point[1] - view.y) / view.height) * dom.canvas.height,
  ];
}

function canvasToSource(point) {
  const view = viewSourceRect();
  return [
    Math.max(0, Math.min(1, view.x + point[0] * view.width)),
    Math.max(0, Math.min(1, view.y + point[1] * view.height)),
  ];
}

function drawPolygon(points, color, closed = false) {
  if (!points.length) return;
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = Math.max(3, dom.canvas.width / 420);
  ctx.beginPath();
  points.forEach((point, index) => {
    const [x, y] = sourceToCanvas(point);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  if (closed && points.length >= 3) ctx.closePath();
  ctx.stroke();
  points.forEach((point) => {
    const [x, y] = sourceToCanvas(point);
    ctx.beginPath();
    ctx.arc(x, y, Math.max(5, dom.canvas.width / 180), 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.strokeStyle = color;
  });
  ctx.restore();
}

function redraw() {
  ctx.clearRect(0, 0, dom.canvas.width, dom.canvas.height);
  ctx.fillStyle = "#10201b";
  ctx.fillRect(0, 0, dom.canvas.width, dom.canvas.height);

  const frame = selectedFrame();
  if (frame?.image?.dataUrl) {
    const image = new Image();
    image.onload = () => {
      const view = viewSourceRect();
      ctx.drawImage(
        image,
        view.x * image.width,
        view.y * image.height,
        view.width * image.width,
        view.height * image.height,
        0,
        0,
        dom.canvas.width,
        dom.canvas.height,
      );
      frame.annotations.forEach((annotation) => drawPolygon(annotation.polygon, "#ef334d", true));
      drawPolygon(state.draftPolygon, "#10d9c4", false);
    };
    image.src = frame.image.dataUrl;
    return;
  }

  if (dom.video.readyState >= 2) {
    const view = viewSourceRect();
    ctx.drawImage(
      dom.video,
      view.x * dom.video.videoWidth,
      view.y * dom.video.videoHeight,
      view.width * dom.video.videoWidth,
      view.height * dom.video.videoHeight,
      0,
      0,
      dom.canvas.width,
      dom.canvas.height,
    );
  }
  drawPolygon(state.draftPolygon, "#10d9c4", false);
}

function canvasPoint(event) {
  const rect = dom.canvas.getBoundingClientRect();
  return canvasToSource([
    Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)),
    Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height)),
  ]);
}

function captureImageData() {
  const output = document.createElement("canvas");
  output.width = dom.video.videoWidth || dom.canvas.width;
  output.height = dom.video.videoHeight || dom.canvas.height;
  output.getContext("2d").drawImage(dom.video, 0, 0, output.width, output.height);
  return output.toDataURL("image/jpeg", 0.9);
}

function currentFrameIndex() {
  return Math.round((dom.video.currentTime || 0) * state.fps);
}

function captureCurrentFrame() {
  if (dom.video.readyState < 2) return;
  const frameIndex = currentFrameIndex();
  const existing = state.frames.find((frame) => frame.frameIndex === frameIndex);
  const frame = existing || {
    id: crypto.randomUUID(),
    frameIndex,
    time: Number((dom.video.currentTime || 0).toFixed(4)),
    image: { type: "video-frame", dataUrl: captureImageData() },
    annotations: [],
  };
  if (!existing) state.frames.push(frame);
  state.selectedFrameId = frame.id;
  state.draftPolygon = [];
  renderFrameStrip();
  redraw();
  setStatus(`Frame ${frame.frameIndex} captured`);
}

function closePolygon() {
  const frame = selectedFrame();
  if (!frame || state.draftPolygon.length < 3) return;
  frame.annotations = [{
    class: dom.labelSelect.value,
    type: "polygon",
    polygon: state.draftPolygon.map((point) => [Number(point[0].toFixed(6)), Number(point[1].toFixed(6))]),
  }];
  state.draftPolygon = [];
  renderFrameStrip();
  redraw();
  setStatus(`Frame ${frame.frameIndex} annotated`);
}

function renderFrameStrip() {
  dom.frameCountText.textContent = `${state.frames.length} frames`;
  dom.frameStrip.innerHTML = "";
  state.frames
    .sort((a, b) => a.frameIndex - b.frameIndex)
    .forEach((frame) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `thumb${frame.id === state.selectedFrameId ? " active" : ""}`;
      button.innerHTML = `
        <img src="${frame.image.dataUrl}" alt="Frame ${frame.frameIndex}">
        <div class="thumb-meta">f${frame.frameIndex} - ${frame.annotations.length ? "labeled" : "unlabeled"}</div>
      `;
      button.addEventListener("click", () => {
        state.selectedFrameId = frame.id;
        state.draftPolygon = [];
        if (dom.video.readyState >= 1) dom.video.currentTime = frame.time || frame.frameIndex / state.fps;
        focusViewOnFrameAnnotation(frame);
        renderFrameStrip();
        redraw();
      });
      dom.frameStrip.appendChild(button);
    });
}

function syncViewInputs() {
  dom.zoomInput.value = String(state.view.zoom);
  dom.panXInput.value = String(state.view.panX);
  dom.panYInput.value = String(state.view.panY);
}

function focusViewOnFrameAnnotation(frame) {
  const points = frame?.annotations?.[0]?.polygon;
  if (!Array.isArray(points) || points.length < 3) return;
  const xs = points.map((point) => point[0]);
  const ys = points.map((point) => point[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const span = Math.max(maxX - minX, maxY - minY, 0.12);
  state.view.zoom = Math.max(1, Math.min(5, 0.55 / span));
  state.view.panX = Math.max(0, Math.min(1, (minX + maxX) / 2));
  state.view.panY = Math.max(0, Math.min(1, (minY + maxY) / 2));
  syncViewInputs();
}

function seekByFrames(delta) {
  if (!dom.video.duration) return;
  if (state.draftPolygon.length) {
    setStatus("Close or clear the current polygon before changing frames");
    return;
  }
  const step = Number(dom.frameStepInput.value || 4);
  const frame = selectedFrame();
  const baseTime = frame ? frame.time || frame.frameIndex / state.fps : dom.video.currentTime || 0;
  const next = Math.max(0, Math.min(dom.video.duration, baseTime + (delta * step) / state.fps));
  state.selectedFrameId = null;
  state.draftPolygon = [];
  dom.video.currentTime = next;
  renderFrameStrip();
  setStatus(`Moved to frame ${Math.round(next * state.fps)}`);
}

function waitForSeek() {
  return new Promise((resolve) => {
    const done = () => {
      dom.video.removeEventListener("seeked", done);
      resolve();
    };
    dom.video.addEventListener("seeked", done);
    window.setTimeout(resolve, 500);
  });
}

async function autoSampleFrames() {
  if (!dom.video.duration) return;
  dom.video.pause();
  const every = Number(dom.sampleEveryInput.value || 12);
  const total = Math.floor(dom.video.duration * state.fps);
  setStatus("Sampling frames...");
  for (let frame = 0; frame <= total; frame += every) {
    dom.video.currentTime = frame / state.fps;
    await waitForSeek();
    captureCurrentFrame();
  }
  setStatus(`${state.frames.length} frames sampled`);
}

function saveProject() {
  const payload = {
    schemaVersion: 1,
    kind: "racket-segmentation-annotation-project",
    savedAt: new Date().toISOString(),
    video: {
      fileName: state.videoName,
      fps: state.fps,
      width: dom.video.videoWidth || dom.canvas.width,
      height: dom.video.videoHeight || dom.canvas.height,
    },
    labels: ["tennis_racket"],
    frames: state.frames.sort((a, b) => a.frameIndex - b.frameIndex),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${(state.videoName || "racket-video").replace(/\.[^.]+$/, "")}-racket-annotations.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  setStatus("Project JSON saved");
}

function loadProject(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const project = JSON.parse(String(reader.result || "{}"));
      state.videoName = project.video?.fileName || state.videoName || "loaded-project";
      state.fps = Number(project.video?.fps || state.fps || 60);
      state.frames = Array.isArray(project.frames) ? project.frames : [];
      state.selectedFrameId = state.frames[0]?.id || null;
      state.draftPolygon = [];
      dom.fileName.textContent = state.videoName;
      renderFrameStrip();
      redraw();
      setStatus(`${state.frames.length} annotations loaded`);
    } catch {
      setStatus("Project could not be loaded");
    }
  };
  reader.readAsText(file);
}

dom.videoInput.addEventListener("change", () => {
  const file = dom.videoInput.files?.[0];
  if (!file) return;
  if (state.videoUrl) URL.revokeObjectURL(state.videoUrl);
  state.videoUrl = URL.createObjectURL(file);
  state.videoName = file.name;
  dom.video.src = state.videoUrl;
  dom.fileName.textContent = file.name;
  state.frames = [];
  state.selectedFrameId = null;
  state.draftPolygon = [];
  setStatus("Loading video...");
});

dom.video.addEventListener("loadedmetadata", () => {
  fitCanvasToVideo();
  redraw();
  setStatus("Video ready");
});

dom.video.addEventListener("timeupdate", () => {
  dom.timeText.textContent = `${(dom.video.currentTime || 0).toFixed(2)}s`;
  if (!selectedFrame()) redraw();
});

dom.video.addEventListener("seeked", () => {
  dom.timeText.textContent = `${(dom.video.currentTime || 0).toFixed(2)}s`;
  if (!selectedFrame()) redraw();
});

dom.canvas.addEventListener("click", (event) => {
  if (!selectedFrame()) captureCurrentFrame();
  state.draftPolygon.push(canvasPoint(event));
  redraw();
});

dom.canvas.addEventListener("dblclick", closePolygon);
dom.playButton.addEventListener("click", () => {
  if (dom.video.paused) {
    state.selectedFrameId = null;
    dom.video.play();
    dom.playButton.textContent = "Pause";
  } else {
    dom.video.pause();
    dom.playButton.textContent = "Play";
  }
});
dom.captureButton.addEventListener("click", captureCurrentFrame);
dom.prevFrameButton.addEventListener("click", () => seekByFrames(-1));
dom.nextFrameButton.addEventListener("click", () => seekByFrames(1));
dom.autoSampleButton.addEventListener("click", autoSampleFrames);
dom.zoomInput.addEventListener("input", () => {
  state.view.zoom = Number(dom.zoomInput.value || 1);
  redraw();
});
dom.panXInput.addEventListener("input", () => {
  state.view.panX = Number(dom.panXInput.value || 0.5);
  redraw();
});
dom.panYInput.addEventListener("input", () => {
  state.view.panY = Number(dom.panYInput.value || 0.5);
  redraw();
});
dom.resetViewButton.addEventListener("click", () => {
  state.view = { zoom: 1, panX: 0.5, panY: 0.5 };
  syncViewInputs();
  redraw();
});
dom.undoPointButton.addEventListener("click", () => {
  state.draftPolygon.pop();
  redraw();
});
dom.closePolygonButton.addEventListener("click", closePolygon);
dom.clearPolygonButton.addEventListener("click", () => {
  const frame = selectedFrame();
  if (frame) frame.annotations = [];
  state.draftPolygon = [];
  renderFrameStrip();
  redraw();
});
dom.deleteFrameButton.addEventListener("click", () => {
  const frame = selectedFrame();
  if (!frame) return;
  state.frames = state.frames.filter((item) => item.id !== frame.id);
  state.selectedFrameId = state.frames[0]?.id || null;
  state.draftPolygon = [];
  renderFrameStrip();
  redraw();
});
dom.saveProjectButton.addEventListener("click", saveProject);
dom.loadProjectInput.addEventListener("change", () => {
  const file = dom.loadProjectInput.files?.[0];
  if (file) loadProject(file);
});

renderFrameStrip();
syncViewInputs();
