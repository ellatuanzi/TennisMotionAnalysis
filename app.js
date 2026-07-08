const dom = {
  childVideoInput: document.querySelector("#childVideoInput"),
  standardVideoInput: document.querySelector("#standardVideoInput"),
  childFileName: document.querySelector("#childFileName"),
  standardFileName: document.querySelector("#standardFileName"),
  childVideo: document.querySelector("#childVideo"),
  standardVideo: document.querySelector("#standardVideo"),
  referenceYoutubeFrame: document.querySelector("#referenceYoutubeFrame"),
  referencePreview: document.querySelector("#referencePreview"),
  referenceThumbnail: document.querySelector("#referenceThumbnail"),
  referencePreviewTitle: document.querySelector("#referencePreviewTitle"),
  childCanvas: document.querySelector("#childCanvas"),
  childRenderCanvas: document.querySelector("#childRenderCanvas"),
  childFrame: document.querySelector("#childCanvas")?.closest(".video-frame"),
  roiDragBox: document.querySelector("#roiDragBox"),
  standardCanvas: document.querySelector("#standardCanvas"),
  childEmpty: document.querySelector("#childEmpty"),
  standardEmpty: document.querySelector("#standardEmpty"),
  workflowSteps: document.querySelector("#workflowSteps"),
  workflowHint: document.querySelector("#workflowHint"),
  workflowNextButton: document.querySelector("#workflowNextButton"),
  saveDraftButton: document.querySelector("#saveDraftButton"),
  loadDraftButton: document.querySelector("#loadDraftButton"),
  draftStatus: document.querySelector("#draftStatus"),
  analyzeButton: document.querySelector("#analyzeButton"),
  pipelineStatus: document.querySelector("#pipelineStatus"),
  showSkeleton: document.querySelector("#showSkeleton"),
  playerZoom: document.querySelector("#playerZoom"),
  playerCropX: document.querySelector("#playerCropX"),
  playerCropY: document.querySelector("#playerCropY"),
  confirmRoiButton: document.querySelector("#confirmRoiButton"),
  editKeyframeAnchorsButton: document.querySelector("#editKeyframeAnchorsButton"),
  editKeypointsButton: document.querySelector("#editKeypointsButton"),
  exportVideoButton: document.querySelector("#exportVideoButton"),
  downloadVideoLink: document.querySelector("#downloadVideoLink"),
  annotatedVideoPanel: document.querySelector("#annotatedVideoPanel"),
  annotatedVideo: document.querySelector("#annotatedVideo"),
  annotatedVideoStatus: document.querySelector("#annotatedVideoStatus"),
  replayAnnotatedButton: document.querySelector("#replayAnnotatedButton"),
  pauseAnnotatedButton: document.querySelector("#pauseAnnotatedButton"),
  editReviewFrameButton: document.querySelector("#editReviewFrameButton"),
  reviewFrameScrubber: document.querySelector("#reviewFrameScrubber"),
  reviewFrameLabel: document.querySelector("#reviewFrameLabel"),
  reviewFrameCanvas: document.querySelector("#reviewFrameCanvas"),
  keypointEditor: document.querySelector("#keypointEditor"),
  frameScrubber: document.querySelector("#frameScrubber"),
  frameNumber: document.querySelector("#frameNumber"),
  frameTotal: document.querySelector("#frameTotal"),
  keypointSelect: document.querySelector("#keypointSelect"),
  showRacketMask: document.querySelector("#showRacketMask"),
  racketBoxX: document.querySelector("#racketBoxX"),
  racketBoxY: document.querySelector("#racketBoxY"),
  racketBoxAngle: document.querySelector("#racketBoxAngle"),
  racketBoxHeight: document.querySelector("#racketBoxHeight"),
  racketBoxWidth: document.querySelector("#racketBoxWidth"),
  toggleKeypointVisibilityButton: document.querySelector("#toggleKeypointVisibilityButton"),
  keypointVisibilityStatus: document.querySelector("#keypointVisibilityStatus"),
  editPlayPauseButton: document.querySelector("#editPlayPauseButton"),
  saveKeyframeAnchorButton: document.querySelector("#saveKeyframeAnchorButton"),
  generateTrackedFramesButton: document.querySelector("#generateTrackedFramesButton"),
  saveTrainingSampleButton: document.querySelector("#saveTrainingSampleButton"),
  suggestedAnchorButton: document.querySelector("#suggestedAnchorButton"),
  trackingStatus: document.querySelector("#trackingStatus"),
  trackingQualityPanel: document.querySelector("#trackingQualityPanel"),
  trackingQualityScore: document.querySelector("#trackingQualityScore"),
  trackingQualityHint: document.querySelector("#trackingQualityHint"),
  lowQualityFrames: document.querySelector("#lowQualityFrames"),
  objectDetectorStatus: document.querySelector("#objectDetectorStatus"),
  trajectorySummary: document.querySelector("#trajectorySummary"),
  prevFrameButton: document.querySelector("#prevFrameButton"),
  nextFrameButton: document.querySelector("#nextFrameButton"),
  nextKeyframeButton: document.querySelector("#nextKeyframeButton"),
  prevKeypointButton: document.querySelector("#prevKeypointButton"),
  saveFrameCorrectionButton: document.querySelector("#saveFrameCorrectionButton"),
  roiStatus: document.querySelector("#roiStatus"),
  strokeType: document.querySelector("#strokeType"),
  dominantHand: document.querySelector("#dominantHand"),
  playerAge: document.querySelector("#playerAge"),
  fpsInput: document.querySelector("#fpsInput"),
  courtDistance: document.querySelector("#courtDistance"),
  overallScore: document.querySelector("#overallScore"),
  overallNote: document.querySelector("#overallNote"),
  racketSpeed: document.querySelector("#racketSpeed"),
  ballSpeed: document.querySelector("#ballSpeed"),
  contactHeight: document.querySelector("#contactHeight"),
  stageAnalysisStatus: document.querySelector("#stageAnalysisStatus"),
  overallAnalysisText: document.querySelector("#overallAnalysisText"),
  mechanicsReportTable: document.querySelector("#mechanicsReportTable"),
  stageAnalysisGrid: document.querySelector("#stageAnalysisGrid"),
  technicalDetailList: document.querySelector("#technicalDetailList"),
  saveVideoSessionButton: document.querySelector("#saveVideoSessionButton"),
  videoSessionStatus: document.querySelector("#videoSessionStatus"),
  saveProgressButton: document.querySelector("#saveProgressButton"),
  exportDiaryButton: document.querySelector("#exportDiaryButton"),
  diaryExportStatus: document.querySelector("#diaryExportStatus"),
  clearProgressButton: document.querySelector("#clearProgressButton"),
  progressStatus: document.querySelector("#progressStatus"),
  progressCompareSelect: document.querySelector("#progressCompareSelect"),
  progressCompareStage: document.querySelector("#progressCompareStage"),
  progressCompareStatus: document.querySelector("#progressCompareStatus"),
  progressCompareGrid: document.querySelector("#progressCompareGrid"),
  progressSessionCount: document.querySelector("#progressSessionCount"),
  progressBestScore: document.querySelector("#progressBestScore"),
  progressTrend: document.querySelector("#progressTrend"),
  progressChart: document.querySelector("#progressChart"),
  progressList: document.querySelector("#progressList"),
  childPoseScore: document.querySelector("#childPoseScore"),
  standardPoseScore: document.querySelector("#standardPoseScore"),
  ringScore: document.querySelector("#ringScore"),
  scoreRing: document.querySelector("#scoreRing"),
  strengthList: document.querySelector("#strengthList"),
  weaknessList: document.querySelector("#weaknessList"),
  styleSummary: document.querySelector("#styleSummary"),
  angleList: document.querySelector("#angleList"),
  phaseTabs: document.querySelector("#phaseTabs"),
  phaseName: document.querySelector("#phaseName"),
  syncGap: document.querySelector("#syncGap"),
  stabilityScore: document.querySelector("#stabilityScore"),
  keyframeGrid: document.querySelector("#keyframeGrid"),
  keyframeStatus: document.querySelector("#keyframeStatus"),
  detectKeyframesButton: document.querySelector("#detectKeyframesButton"),
  addKeyframeButton: document.querySelector("#addKeyframeButton"),
  updateKeyframeButton: document.querySelector("#updateKeyframeButton"),
  deleteKeyframeButton: document.querySelector("#deleteKeyframeButton"),
  correctionChoice: document.querySelector("#correctionChoice"),
  fixKeyframesOnlyButton: document.querySelector("#fixKeyframesOnlyButton"),
  fixFullVideoButton: document.querySelector("#fixFullVideoButton"),
  correctionModeStatus: document.querySelector("#correctionModeStatus"),
  frameModal: document.querySelector("#frameModal"),
  frameModalImage: document.querySelector("#frameModalImage"),
  closeFrameModal: document.querySelector("#closeFrameModal"),
  copyReport: document.querySelector("#copyReport"),
  standardMode: document.querySelector("#standardMode"),
  youtubeFields: document.querySelector("#youtubeFields"),
  youtubeUrl: document.querySelector("#youtubeUrl"),
  clipStart: document.querySelector("#clipStart"),
  clipEnd: document.querySelector("#clipEnd"),
  referenceSourceLink: document.querySelector("#referenceSourceLink"),
  notesFields: document.querySelector("#notesFields"),
  coachingNotes: document.querySelector("#coachingNotes"),
  coachingResourceUrl: document.querySelector("#coachingResourceUrl"),
  useDefaultNotesButton: document.querySelector("#useDefaultNotesButton"),
  notesPreview: document.querySelector("#notesPreview"),
  notesPreviewTitle: document.querySelector("#notesPreviewTitle"),
  notesPreviewText: document.querySelector("#notesPreviewText"),
  notesPreviewLink: document.querySelector("#notesPreviewLink"),
};

const pocPreset = {
  playerVideo: "./assets/player-poc.mov",
  playerLabel: "IMG_1610.MOV (PoC)",
  referenceTitle: "Super slow-motion Forehand Video.(Step by step)",
  referenceUrl: "https://www.youtube.com/watch?v=jHCSCBb9IW4",
  referenceStart: "00:00",
  referenceEnd: "00:10",
};

const phaseLabels = {
  ready: "Ready",
  load: "Load",
  contact: "Contact",
  follow: "Follow",
};

const defaultCoachingNotes = `ATTICUS CAI -- Serve Progression checkpoints:
- Stage 1 Setup: balanced platform stance, quiet head, relaxed hands, and a repeatable starting rhythm.
- Stage 2 Toss / Early Racket Movement: toss arm extends fully; racket should stay up and roughly vertical until after ball release.
- Stage 3 Load: legs and hips load before the upper body; avoid early racket drop while the knees are still bending.
- Stage 4 Racket Drop: racket drops after the legs have loaded and begun driving, keeping the kinetic chain in sequence.
- Stage 5 Acceleration / Racket Approach: lead with the edge or back of the racket; avoid opening the racket face too early approaching contact.
- Stage 6 Contact: contact point should be high, with wrist clearly above shoulder and the body driving up through the ball.
- Stage 7 Deceleration: leg drive should not peak late; energy should transfer legs to hips to trunk to arm to racket in sequence.
- Stage 8 Finish: land with a soft front knee and balanced finish; avoid a stiff-legged landing.`;

const fallbackStageSnapshots = {
  setup: "exports/diary-poc-keypoints/keypoint-overlays/01-setup-keypoints.jpg",
  toss: "exports/diary-poc-keypoints/keypoint-overlays/02-toss-keypoints.jpg",
  load: "exports/diary-poc-keypoints/keypoint-overlays/03-load-keypoints.jpg",
  drop: "exports/diary-poc-keypoints/keypoint-overlays/04-racket-drop-keypoints.jpg",
  acceleration: "exports/diary-poc-keypoints/keypoint-overlays/05-acceleration-keypoints.jpg",
  contact: "exports/diary-poc-keypoints/keypoint-overlays/06-contact-keypoints.jpg",
  deceleration: "exports/diary-poc-keypoints/keypoint-overlays/07-deceleration-keypoints.jpg",
  finish: "exports/diary-poc-keypoints/keypoint-overlays/08-finish-keypoints.jpg",
};

const progressStorageKey = "tennisMotionLab.serveProgress.v1";
const diaryStorageKey = "tennisMotionLab.trainingDiary.v2";
const draftStorageKey = "tennisMotionLab.motionDraft.v1";
const videoDbName = "tennisMotionLab.localVideos";
const videoStoreName = "videos";
let activeProgressSessionId = null;
let currentPlayerVideoFile = null;
let diaryDataDownloadUrl = null;

const serveStageTemplate = [
  {
    id: "setup",
    name: "1. Setup",
    standard: "Balanced platform stance, quiet head, relaxed hands, and clear target intention before the toss.",
    metric: "Base stability",
    fault: "Unstable setup",
    coachComment: "Use this stage to make the serve repeatable: stance, balance, eyes, and hands should feel calm before the motion starts.",
    lookFor: "A consistent base, still head, and no rushed movement before the toss.",
    next: "Build the same stance and quiet head before every serve.",
  },
  {
    id: "toss",
    name: "2. Toss / Early Racket Movement",
    standard: "Toss arm extends fully while the racket stays up and roughly vertical until after ball release.",
    metric: "Toss consistency",
    fault: "Early racket movement",
    coachComment: "If the racket starts moving too early during the toss, the rhythm gets rushed. Keep the racket up and roughly vertical until the ball has clearly left the hand.",
    lookFor: "Toss arm reaching up while the hitting-side racket stays organized, not dropping behind the back too soon.",
    next: "Keep the racket up during the toss; let the drop happen after release.",
  },
  {
    id: "load",
    name: "3. Load",
    standard: "Legs and hips load first while the upper body stays sequenced; avoid dropping the racket before the legs drive.",
    metric: "Shoulder-hip coil",
    fault: "Early racket drop",
    coachComment: "At max knee bend, the racket should still be up in a trophy-like position. If it has already fallen behind the back, the kinetic chain is broken and the serve becomes arm-dominant.",
    lookFor: "Legs load first, then the racket drop follows as the body starts driving upward.",
    next: "Load the legs first, then let the racket drop as the body drives upward.",
  },
  {
    id: "drop",
    name: "4. Racket Drop",
    standard: "Racket drops naturally behind the body after the legs have loaded and begun the upward drive.",
    metric: "Racket path",
    fault: "Late or disconnected racket drop",
    coachComment: "The racket drop should be connected to the upward drive, not a separate arm-only move. The goal is a clean transfer from legs to trunk to arm.",
    lookFor: "Racket head dropping behind the body while the chest and legs are already moving upward.",
    next: "Time the racket drop with the upward leg drive, not before it.",
  },
  {
    id: "acceleration",
    name: "5. Acceleration / Racket Approach",
    standard: "Lead with the edge or back of the racket and avoid opening the racket face early approaching the ball.",
    metric: "Racket approach",
    fault: "Racket approach opens early",
    coachComment: "Opening the racket face early on the way to contact removes the snap and associated power. Strong servers keep the edge/back of the racket leading until just before contact.",
    lookFor: "The racket face stays organized through the approach, then releases late into the ball.",
    referenceImage: "assets/coach-racket-approach.png",
    next: "Maintain the racket edge longer so the snap happens closer to contact.",
  },
  {
    id: "contact",
    name: "6. Contact",
    standard: "Reach up and slightly forward with the wrist clearly above the shoulder and stable head position.",
    metric: "Contact height",
    fault: "Low contact point",
    coachComment: "At contact the hitting arm should stretch as tall as it goes, with the wrist clearly above the shoulder. Low contact flattens the serve and reduces leverage.",
    lookFor: "Wrist well above shoulder, body driving up into the ball, and contact slightly in front.",
    referenceImage: "assets/coach-stage-contact.png",
    next: "Reach taller through contact; improve toss height/position and vertical leg drive.",
  },
  {
    id: "deceleration",
    name: "7. Deceleration",
    standard: "Leg drive should peak before contact so power transfers up the chain before the racket decelerates.",
    metric: "Leg-drive timing",
    fault: "Late leg drop",
    coachComment: "If the legs are still extending after the racket has already dropped, the leg drive is late. Power arrives after the rest of the chain has fired.",
    lookFor: "By racket drop, the legs should be close to finishing their drive rather than still deeply bent.",
    referenceImage: "assets/coach-late-leg-drop.png",
    secondaryReferenceImage: "assets/coach-stage-deceleration.png",
    next: "Start driving out of the knee bend earlier so leg extension completes before contact.",
  },
  {
    id: "finish",
    name: "8. Finish",
    standard: "Land balanced with a soft front knee and complete follow-through across the body.",
    metric: "Landing control",
    fault: "Stiff-legged finish",
    coachComment: "The landing leg should bend and absorb impact. A locked front leg can jar the body and often means the serve did not drive up and out cleanly.",
    lookFor: "Soft front-knee landing, balanced recovery, and a complete deceleration path.",
    referenceImage: "assets/coach-stage-finish.png",
    next: "Land like a soft jump landing; let the front knee absorb impact.",
  },
];

let latestReport = "";
let animationFrameId = null;
let latestAnalysis = null;
let keyframes = [];
let selectedKeyframeIndex = 0;
let annotatedVideoUrl = null;
let keypointVideoReady = false;
let motionAnalysisReady = false;
let correctionScope = "video";
let workflowStepOverride = null;
let keyframeDetectionBusy = false;
let keyframeDetectionStartedAt = 0;
let keypointTrackingReady = false;
let autoSmoothTimer = null;
let suggestedAnchorFrame = null;
let reviewPreviewToken = 0;
let pendingSmoothFrame = null;
let reviewVideoRendering = false;
let lastPlayerPreviewRatio = 9 / 16;
const reviewFallbackImageCache = new Map();
const analysisStageImageCache = new Map();
const poseCorrections = new Map();
const poseCorrectionSources = new Map();
const ballAnchorFrames = new Set();
const racketManualFrames = new Set();
const poseRuntime = {
  detector: null,
  ready: false,
  failed: false,
  busy: false,
  lastRun: 0,
  childPose: null,
  lastDetectedPose: null,
  trackedPose: null,
  editedPose: null,
  editedPoseFrame: null,
  editMode: false,
  draggingPoint: null,
};

const roiRuntime = {
  confirmed: false,
  debounceTimer: null,
  dragging: false,
  resizing: false,
  dragBox: null,
  crop: {
    zoom: Number(document.querySelector("#playerZoom")?.value || 3),
    x: Number(document.querySelector("#playerCropX")?.value || 0.61),
    y: Number(document.querySelector("#playerCropY")?.value || 0.58),
  },
};

const playerPersonBox = {
  x: 0.43,
  y: 0.31,
  width: 0.25,
  height: 0.53,
  confidence: 0.94,
};

const objectDetectionRuntime = {
  mode: "loading",
  session: null,
  loading: false,
  ready: false,
  failed: false,
  backend: "wasm",
  lastRun: 0,
  lastRacketBox: null,
  lastRacketAt: 0,
  lastError: "",
  latestDetectionFrame: null,
  latestRacketConfidence: null,
  racketFrameDetections: new Map(),
  segmentationRequestFrame: null,
  segmentationRequestAt: 0,
  modelSize: 960,
  maskSize: 240,
  confidenceThreshold: 0.05,
  racketModel: "YOLO-seg tennis_racket mask",
  ballModel: "YOLO tennis_ball small-object planned",
  modelPath: "assets/models/racket_ball_yoloseg.onnx",
  inputName: "images",
  inputShape: null,
  outputNames: [],
};

function currentWorkflowStep() {
  if (!roiRuntime.confirmed) return "roi";
  if (!keyframes.length) return "frames";
  if (poseRuntime.editMode) return "keypoints";
  if (workflowStepOverride === "keypoints" && isKeyframeOnlyCorrectionReady()) {
    workflowStepOverride = null;
  }
  if (workflowStepOverride && canNavigateToWorkflowStep(workflowStepOverride)) return workflowStepOverride;
  if (workflowStepOverride && !canNavigateToWorkflowStep(workflowStepOverride)) workflowStepOverride = null;
  if (!poseCorrections.size) return "keypoints";
  if (!keypointTrackingReady) return "keypoints";
  if (isKeyframeOnlyCorrectionReady()) return "analysis";
  if (!keypointVideoReady) return "review";
  return motionAnalysisReady ? "analysis" : "analysis";
}

function isKeyframeOnlyCorrectionMode() {
  return correctionScope === "keyframes";
}

function isKeyframeOnlyCorrectionReady() {
  return isKeyframeOnlyCorrectionMode()
    && roiRuntime.confirmed
    && keyframes.length > 0
    && poseCorrections.size > 0
    && keypointTrackingReady;
}

function scrollToMotionAnalysis() {
  const target = dom.stageAnalysisGrid?.closest(".panel")
    || dom.stageAnalysisGrid
    || dom.annotatedVideoPanel
    || document.querySelector(".workflow-panel");
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function workflowHintText(step) {
  if (step === "roi") return "Adjust the blue ROI box around the player, then confirm it before detecting keypoints.";
  if (step === "frames") return "Choose the important swing frames. Use Auto Detect first, then add, update, or delete frames from the video.";
  if (step === "keypoints") return "Step 3: choose Edit Key Frames Only to fix selected anchors, or Edit Full Video for frame-by-frame corrections. Save anchors before smoothing.";
  if (step === "review") return "Render the review video from the smoothed tracked frames. If it looks wrong, return to Frame Corrections and smooth again.";
  if (isKeyframeOnlyCorrectionMode() && !keypointVideoReady) {
    return motionAnalysisReady
      ? "Motion analysis is complete from corrected key frames. Return to Frame Corrections if the anchors need adjustment."
      : "Key-frame-only corrections are ready. Run motion analysis without rendering a full review video.";
  }
  return motionAnalysisReady
    ? "Motion analysis is complete. Change frame corrections, render the review video, then analyze again if needed."
    : "Review the rendered keypoint video. When it looks right, run motion analysis for the final report.";
}

function setPrimaryWorkflowAction(label, disabled = false) {
  dom.analyzeButton.disabled = disabled;
  dom.analyzeButton.innerHTML = `<span>▶</span>${label}`;
  dom.workflowNextButton.disabled = disabled;
  dom.workflowNextButton.innerHTML = `<span>▶</span>${label}`;
}

function setPanelVisible(node, visible) {
  if (!node) return;
  node.classList.toggle("step-hidden", !visible);
}

function hasRenderedAnnotatedVideo() {
  return Boolean(dom.annotatedVideo?.getAttribute("src") || dom.annotatedVideo?.currentSrc);
}

function syncAnnotatedVideoShell(step = currentWorkflowStep()) {
  if (!dom.annotatedVideoPanel || !dom.annotatedVideo) return;
  const hasVideo = hasRenderedAnnotatedVideo();
  dom.annotatedVideoPanel.classList.toggle("review-video-empty", !hasVideo);
  dom.annotatedVideoPanel.classList.toggle("review-video-rendering", reviewVideoRendering);
  dom.annotatedVideoPanel.classList.toggle("has-review-video", hasVideo && !reviewVideoRendering);
  if (!hasVideo && !reviewVideoRendering && (step === "review" || (step === "analysis" && !isKeyframeOnlyCorrectionMode())) && dom.childVideo?.src && roiRuntime.confirmed) {
    setupReviewFramePreview(currentFrameIndex(dom.childVideo));
  }
}

function updateStepVisibility(step) {
  document.body.dataset.workflowStep = step;
  const setupTitle = document.querySelector(".setup-section h2");
  if (setupTitle) setupTitle.textContent = step === "keypoints" ? "Frame Editor" : "Estimation Settings";
  setPanelVisible(document.querySelector(".video-inputs-section"), step === "roi");
  setPanelVisible(document.querySelector(".motion-details-section"), step === "roi" || step === "analysis");
  setPanelVisible(document.querySelector(".setup-section"), step === "roi" || step === "keypoints");
  setPanelVisible(document.querySelector(".control-panel"), step === "roi" || step === "keypoints" || step === "analysis");
  document.querySelectorAll(".step-panel").forEach((panel) => {
    const visibleSteps = (panel.dataset.visibleSteps || "").split(",");
    setPanelVisible(panel, visibleSteps.includes(step));
  });
  const showAnnotatedVideoPanel = step === "review"
    || (step === "analysis" && (!isKeyframeOnlyCorrectionMode() || keypointVideoReady));
  if (showAnnotatedVideoPanel) {
    dom.annotatedVideoPanel.classList.remove("hidden");
    if (!keypointVideoReady && dom.annotatedVideoStatus) {
      dom.annotatedVideoStatus.textContent = isKeyframeOnlyCorrectionMode()
        ? "Skipped for key-frame-only analysis"
        : "Render video to review detection";
    }
  } else {
    dom.annotatedVideoPanel.classList.add("hidden");
  }
  syncAnnotatedVideoShell(step);
}

function updateDraftControls() {
  const hasDraft = Boolean(localStorage.getItem(draftStorageKey));
  dom.loadDraftButton.disabled = !hasDraft;
  dom.saveDraftButton.disabled = !roiRuntime.confirmed && !keyframes.length && !poseCorrections.size;
  if (hasDraft && dom.draftStatus.textContent === "No draft saved yet") {
    dom.draftStatus.textContent = "Draft available";
  }
  if (!hasDraft && !dom.draftStatus.textContent.includes("Saved")) {
    dom.draftStatus.textContent = "No draft saved yet";
  }
}

function updateWorkflow() {
  const step = currentWorkflowStep();
  const order = ["roi", "frames", "keypoints", "review", "analysis"];
  const activeIndex = order.indexOf(step);
  dom.workflowSteps.querySelectorAll("span").forEach((node) => {
    const nodeIndex = order.indexOf(node.dataset.step);
    node.classList.toggle("active", node.dataset.step === step);
    node.classList.toggle("done", nodeIndex >= 0 && nodeIndex < activeIndex);
    node.classList.toggle("available", canNavigateToWorkflowStep(node.dataset.step));
  });

  dom.workflowHint.textContent = workflowHintText(step);
  updateStepVisibility(step);
  dom.detectKeyframesButton.disabled = !roiRuntime.confirmed;
  dom.addKeyframeButton.disabled = !roiRuntime.confirmed;
  dom.updateKeyframeButton.disabled = !roiRuntime.confirmed || !keyframes.length;
  dom.deleteKeyframeButton.disabled = !roiRuntime.confirmed || !keyframes.length;
  dom.editKeypointsButton.disabled = !roiRuntime.confirmed || !keyframes.length;
  if (dom.editKeyframeAnchorsButton) dom.editKeyframeAnchorsButton.disabled = !roiRuntime.confirmed || !keyframes.length;
  dom.exportVideoButton.disabled = !roiRuntime.confirmed || !keyframes.length || !poseCorrections.size || !keypointTrackingReady;
  if (dom.correctionChoice) {
    const showCorrectionChoice = keyframes.length > 0 && (step === "frames" || step === "keypoints");
    dom.correctionChoice.classList.toggle("hidden", !showCorrectionChoice);
  }
  if (dom.fixKeyframesOnlyButton) dom.fixKeyframesOnlyButton.disabled = !roiRuntime.confirmed || !keyframes.length;
  if (dom.fixFullVideoButton) dom.fixFullVideoButton.disabled = !roiRuntime.confirmed || !keyframes.length;
  if (dom.correctionModeStatus) {
    if (keyframes.length) {
      dom.correctionModeStatus.textContent = step === "keypoints"
        ? poseRuntime.editMode
          ? "Edit the selected key frame, save it as an anchor, then choose another card if needed."
          : "Choose Edit Key Frames Only, or click any key-frame card to edit that anchor."
        : "Choose a correction path before Step 3.";
    } else {
      dom.correctionModeStatus.textContent = "Choose a path after key frames are ready.";
    }
  }
  if (dom.generateTrackedFramesButton) {
    dom.generateTrackedFramesButton.disabled = !roiRuntime.confirmed || !keyframes.length || !poseCorrections.size;
  }
  if (dom.saveKeyframeAnchorButton) {
    dom.saveKeyframeAnchorButton.disabled = !roiRuntime.confirmed || !keyframes.length || !poseRuntime.editMode;
  }
  if (dom.trackingStatus) {
    const anchorCount = Array.from(poseCorrectionSources.values()).filter((source) => source !== "tracked").length;
    updateSuggestedAnchor();
    dom.trackingStatus.textContent = keypointTrackingReady
        ? suggestedAnchorFrame != null
          ? `Long low-confidence gap found. Start fixing around frame ${suggestedAnchorFrame}.`
          : `Track ready from ${anchorCount} anchor${anchorCount === 1 ? "" : "s"}: detection-led, stronger smoothing between confirmed anchors.`
      : anchorCount
        ? suggestedAnchorFrame != null
          ? `Long gap between anchors. Start fixing around frame ${suggestedAnchorFrame}.`
          : `${anchorCount} anchor${anchorCount === 1 ? "" : "s"} saved. Adjust anchors first, then add more where tracking drifts.`
        : "Auto Detect creates default anchors; adjust them first.";
  }
  updateTrackingQualityPanel();

  if (step === "roi") {
    setPrimaryWorkflowAction("Confirm ROI", false);
  } else if (step === "frames") {
    setPrimaryWorkflowAction(keyframes.length ? "Continue to Frame Corrections" : "Auto Detect Key Frames", false);
  } else if (step === "keypoints") {
    const keyframeOnly = isKeyframeOnlyCorrectionMode();
    setPrimaryWorkflowAction(
      poseRuntime.editMode
        ? keyframeOnly ? "Done Key Frame Editing" : "Done Frame Editing"
        : keypointTrackingReady
            ? keyframeOnly ? "Continue to Motion Analysis" : "Continue to Review Video"
            : poseCorrections.size
              ? "Generate Smooth Track"
              : "Edit Key Frames Only",
      !keyframes.length,
    );
  } else if (step === "review") {
    setPrimaryWorkflowAction("Render Review Video", !poseCorrections.size);
  } else {
    const analysisInputReady = keypointVideoReady || isKeyframeOnlyCorrectionReady();
    setPrimaryWorkflowAction(motionAnalysisReady ? "Re-analyze Motion" : "Analyze Motion", !analysisInputReady);
  }
  updateDraftControls();
}

function canNavigateToWorkflowStep(step) {
  if (step === "roi") return true;
  if (step === "frames") return roiRuntime.confirmed;
  if (step === "keypoints") return roiRuntime.confirmed && keyframes.length > 0;
  if (step === "review") return !isKeyframeOnlyCorrectionMode() && roiRuntime.confirmed && keyframes.length > 0 && poseCorrections.size > 0 && keypointTrackingReady;
  if (step === "analysis") return keypointVideoReady || isKeyframeOnlyCorrectionReady();
  return false;
}

function goToWorkflowStep(step) {
  if (!canNavigateToWorkflowStep(step)) return;
  workflowStepOverride = step;
  if (step !== "keypoints" && poseRuntime.editMode) {
    toggleKeypointEdit();
  }
  updateWorkflow();
  const target = step === "frames"
    ? dom.keyframeGrid
    : step === "keypoints"
      ? dom.childFrame
      : step === "review"
        ? dom.annotatedVideoPanel
        : step === "analysis"
          ? dom.stageAnalysisGrid?.closest(".panel") || document.querySelector(".workflow-panel")
        : document.querySelector(".workflow-panel");
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function invalidateKeypointVideo(reason = "Keypoint changes need a new review video.") {
  if (!keypointVideoReady && !motionAnalysisReady) return;
  const nextStep = isKeyframeOnlyCorrectionMode() ? "analysis" : "review";
  keypointVideoReady = false;
  motionAnalysisReady = false;
  workflowStepOverride = poseRuntime.editMode ? "keypoints" : nextStep;
  dom.annotatedVideoStatus.textContent = reason;
  dom.annotatedVideo.removeAttribute("src");
  dom.annotatedVideo.load();
  syncAnnotatedVideoShell(nextStep);
  dom.overallNote.textContent = isKeyframeOnlyCorrectionMode()
    ? "Run analysis again from corrected key frames"
    : "Render review video again before final analysis";
  updateWorkflow();
}

function loadVideo(input, video, fileNameNode, emptyNode) {
  const file = input.files?.[0];
  if (!file) return;

  video.src = URL.createObjectURL(file);
  fileNameNode.textContent = file.name;
  emptyNode?.classList.add("hidden");
  if (video === dom.childVideo) {
    activeProgressSessionId = null;
    currentPlayerVideoFile = file;
    if (dom.videoSessionStatus) {
      dom.videoSessionStatus.textContent = "New video loaded. Save it to compare progress later.";
    }
  }
  video.addEventListener("loadedmetadata", () => {
    resetRoiConfirmation("New video loaded. Adjust crop with sliders or the blue resize handle, then confirm.");
    drawPoseLoop();
    if (video === dom.childVideo) renderProgress();
  }, { once: true });
}

function parseTimestamp(value) {
  const parts = String(value || "0")
    .split(":")
    .map((part) => Number(part.trim()));
  if (parts.some((part) => Number.isNaN(part))) return 0;
  return parts.reduce((total, part) => total * 60 + part, 0);
}

function getYoutubeId(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) return parsed.pathname.replace("/", "");
    if (parsed.hostname.includes("youtube.com")) return parsed.searchParams.get("v");
  } catch {
    return null;
  }
  return null;
}

function getYoutubeEmbedUrl() {
  const id = getYoutubeId(dom.youtubeUrl.value);
  if (!id) return "";

  const start = parseTimestamp(dom.clipStart.value);
  const end = parseTimestamp(dom.clipEnd.value);
  const endQuery = end > start ? `&end=${end}` : "";
  return `https://www.youtube.com/embed/${id}?start=${start}${endQuery}&rel=0&modestbranding=1&autoplay=1`;
}

function updateYoutubePreview() {
  const id = getYoutubeId(dom.youtubeUrl.value);
  if (!id) {
    dom.referenceYoutubeFrame.removeAttribute("src");
    dom.referenceThumbnail.removeAttribute("src");
    return;
  }

  dom.referenceYoutubeFrame.removeAttribute("src");
  dom.referenceThumbnail.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  dom.referenceSourceLink.href = dom.youtubeUrl.value;
  dom.referencePreview.classList.remove("hidden");
  dom.referenceYoutubeFrame.classList.add("hidden");
}

function playYoutubeReference() {
  const embedUrl = getYoutubeEmbedUrl();
  if (!embedUrl) return;
  dom.referenceYoutubeFrame.src = embedUrl;
  dom.referenceYoutubeFrame.classList.remove("hidden");
  dom.referencePreview.classList.add("hidden");
}

function setStatus(text, state) {
  dom.pipelineStatus.textContent = "";
  const dot = document.createElement("span");
  dot.className = "dot";
  dom.pipelineStatus.append(dot, document.createTextNode(text));
  dom.pipelineStatus.className = `status-pill ${state || ""}`.trim();
}

function redirectFileProtocolToLocalhost() {
  if (window.location.protocol !== "file:") return false;

  const target = `http://localhost:5173/index.html${window.location.search || ""}${window.location.hash || ""}`;

  try {
    const storageKey = "tennisMotionLab.fileRedirectTarget";
    if (sessionStorage.getItem(storageKey) !== target) {
      sessionStorage.setItem(storageKey, target);
      window.location.replace(target);
      return true;
    }
  } catch {
    window.location.href = target;
    return true;
  }

  setStatus("Use localhost", "warning");
  if (dom.workflowHint) {
    dom.workflowHint.textContent = "This app needs http://localhost:5173. Direct file:// pages can block video, canvas, and keypoint detection.";
  }
  if (dom.roiStatus) {
    dom.roiStatus.innerHTML = `Detection needs the local web server. Open <a href="${target}">${target}</a>.`;
  }
  if (dom.workflowNextButton) {
    dom.workflowNextButton.textContent = "Open Localhost";
    dom.workflowNextButton.addEventListener(
      "click",
      () => {
        window.location.href = target;
      },
      { once: true }
    );
  }
  return true;
}

function updateNotesPreview() {
  const notes = (dom.coachingNotes.value || defaultCoachingNotes).trim();
  const url = dom.coachingResourceUrl.value.trim();
  dom.notesPreviewTitle.textContent = "Coaching Notes Reference";
  dom.notesPreviewText.textContent = notes.split("\n").filter(Boolean).slice(0, 4).join(" ");
  dom.notesPreviewLink.href = url || "#";
  dom.notesPreviewLink.textContent = url ? "Open coaching resource" : "Default notes active";
  dom.notesPreviewLink.classList.toggle("hidden", !url);
  dom.standardPoseScore.textContent = "Notes";
}

function setReferenceMode(mode) {
  const isYoutube = mode === "youtube";
  const isNotes = mode === "notes";
  dom.youtubeFields.classList.toggle("hidden", !isYoutube);
  dom.notesFields.classList.toggle("hidden", !isNotes);
  dom.standardVideoInput.closest(".upload-zone").classList.toggle("hidden", isYoutube || isNotes);
  dom.standardVideo.classList.toggle("hidden", isYoutube || isNotes);
  dom.referenceYoutubeFrame.classList.add("hidden");
  dom.referencePreview.classList.toggle("hidden", !isYoutube);
  dom.notesPreview.classList.toggle("hidden", !isNotes);
  dom.standardCanvas.classList.toggle("hidden", isYoutube || isNotes);
  [...dom.standardMode.querySelectorAll("button")].forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
  dom.standardFileName.textContent = isNotes ? "Coaching notes selected" : isYoutube ? "YouTube clip selected" : "Choose video";
  if (isYoutube) {
    dom.standardEmpty.classList.add("hidden");
    updateYoutubePreview();
  } else if (isNotes) {
    dom.referenceYoutubeFrame.removeAttribute("src");
    dom.referencePreview.classList.add("hidden");
    dom.standardEmpty.classList.add("hidden");
    updateNotesPreview();
  } else {
    dom.referenceYoutubeFrame.removeAttribute("src");
    dom.referencePreview.classList.add("hidden");
    dom.notesPreview.classList.add("hidden");
    dom.standardEmpty.classList.toggle("hidden", Boolean(dom.standardVideo.src));
    dom.standardEmpty.textContent = "Waiting for video";
  }
}

function loadPocPreset() {
  dom.childVideo.src = pocPreset.playerVideo;
  dom.childFileName.textContent = pocPreset.playerLabel;
  dom.childEmpty.classList.add("hidden");
  resetRoiConfirmation("PoC video loaded. Adjust crop with sliders or the blue resize handle, then confirm.");
  dom.coachingNotes.value = defaultCoachingNotes;

  dom.youtubeUrl.value = pocPreset.referenceUrl;
  dom.clipStart.value = pocPreset.referenceStart;
  dom.clipEnd.value = pocPreset.referenceEnd;
  dom.referenceSourceLink.href = pocPreset.referenceUrl;
  dom.referenceSourceLink.textContent = pocPreset.referenceTitle;
  dom.referencePreviewTitle.textContent = pocPreset.referenceTitle;
  dom.standardFileName.textContent = "YouTube reference clip";
  dom.standardEmpty.textContent = pocPreset.referenceTitle;
  setReferenceMode("youtube");
  updateYoutubePreview();
}

function resetRoiConfirmation(message = "Adjust crop with sliders or the blue resize handle, then confirm") {
  roiRuntime.confirmed = false;
  poseRuntime.childPose = null;
  poseRuntime.lastDetectedPose = null;
  poseRuntime.trackedPose = null;
  poseRuntime.editedPose = null;
  poseRuntime.editedPoseFrame = null;
  poseRuntime.editMode = false;
  poseRuntime.draggingPoint = null;
  keyframes = [];
  selectedKeyframeIndex = 0;
  workflowStepOverride = null;
  poseCorrections.clear();
  poseCorrectionSources.clear();
  ballAnchorFrames.clear();
  racketManualFrames.clear();
  keypointTrackingReady = false;
  keypointVideoReady = false;
  motionAnalysisReady = false;
  correctionScope = "video";
  dom.childPoseScore.textContent = "ROI preview";
  dom.confirmRoiButton.textContent = "Confirm ROI";
  dom.confirmRoiButton.classList.remove("confirmed");
  dom.editKeyframeAnchorsButton?.classList.remove("active");
  dom.editKeypointsButton.classList.remove("active");
  dom.keypointEditor.classList.remove("active");
  dom.childFrame.classList.remove("editing-keypoints");
  dom.editKeypointsButton.textContent = "Edit Full Video";
  dom.downloadVideoLink.classList.add("hidden");
  dom.annotatedVideoPanel.classList.add("hidden");
  dom.annotatedVideo.removeAttribute("src");
  dom.annotatedVideo.load();
  syncAnnotatedVideoShell("roi");
  renderKeyframes();
  dom.roiDragBox.classList.remove("hidden");
  dom.roiStatus.textContent = message;
  updateWorkflow();
}

function setRoiControls({ zoom = roiRuntime.crop.zoom, x = roiRuntime.crop.x, y = roiRuntime.crop.y }) {
  const nextZoom = clamp(zoom, Number(dom.playerZoom.min), Number(dom.playerZoom.max));
  const nextX = clamp(x, Number(dom.playerCropX.min), Number(dom.playerCropX.max));
  const nextY = clamp(y, Number(dom.playerCropY.min), Number(dom.playerCropY.max));
  dom.playerZoom.value = nextZoom.toFixed(1);
  dom.playerCropX.value = nextX.toFixed(2);
  dom.playerCropY.value = nextY.toFixed(2);
  roiRuntime.crop = {
    zoom: nextZoom,
    x: nextX,
    y: nextY,
  };
}

function applyRoiControls() {
  setRoiControls({
    zoom: Number(dom.playerZoom.value || 3),
    x: Number(dom.playerCropX.value || 0.61),
    y: Number(dom.playerCropY.value || 0.58),
  });
  resetRoiConfirmation("ROI preview updated. Confirm before detection.");
}

function scheduleRoiPreview() {
  window.clearTimeout(roiRuntime.debounceTimer);
  dom.roiStatus.textContent = "Updating ROI preview...";
  roiRuntime.debounceTimer = window.setTimeout(applyRoiControls, 320);
}

function confirmRoi() {
  window.clearTimeout(roiRuntime.debounceTimer);
  applyRoiControls();
  roiRuntime.confirmed = true;
  poseRuntime.childPose = null;
  poseRuntime.lastDetectedPose = null;
  poseRuntime.trackedPose = null;
  poseRuntime.editedPose = null;
  poseRuntime.editedPoseFrame = null;
  poseRuntime.editMode = false;
  poseRuntime.draggingPoint = null;
  workflowStepOverride = "frames";
  poseCorrections.clear();
  poseCorrectionSources.clear();
  ballAnchorFrames.clear();
  racketManualFrames.clear();
  keypointTrackingReady = false;
  dom.roiDragBox.classList.add("hidden");
  dom.confirmRoiButton.textContent = "ROI Confirmed";
  dom.confirmRoiButton.classList.add("confirmed");
  dom.editKeyframeAnchorsButton?.classList.remove("active");
  dom.editKeypointsButton.classList.remove("active");
  dom.keypointEditor.classList.remove("active");
  dom.editKeypointsButton.textContent = "Edit Full Video";
  dom.roiStatus.textContent = "ROI confirmed. Keypoint detection is enabled.";
  dom.childPoseScore.textContent = "Detecting";
  updateWorkflow();
}

function canvasPointFromEvent(event) {
  const rect = dom.childCanvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
    rect,
  };
}

function positionRoiDragBox(box) {
  if (roiRuntime.dragging || roiRuntime.confirmed) return;
  dom.roiDragBox.style.left = `${box.x}px`;
  dom.roiDragBox.style.top = `${box.y}px`;
  dom.roiDragBox.style.width = `${box.width}px`;
  dom.roiDragBox.style.height = `${box.height}px`;
}

function normalizePointerEvent(event) {
  if (event.touches?.[0]) return event.touches[0];
  return event;
}

function cropCenterToPlayerFrame(video, rect) {
  return sourceToPlayerFrame([roiRuntime.crop.x, roiRuntime.crop.y], video, rect);
}

function playerFrameToSource(point, video, rect) {
  const viewport = getVideoViewport(video, rect);
  const normalizedX = (point.x - viewport.x) / viewport.width;
  const normalizedY = (point.y - viewport.y) / viewport.height;
  return {
    x: clamp(normalizedX, 0, 1),
    y: clamp(normalizedY, 0, 1),
  };
}

function getRoiBoxInFullFrame(video, rect) {
  const crop = getPlayerCropSource(video);
  const viewport = getVideoViewport(video, rect);
  const videoWidth = video.videoWidth || 1;
  const videoHeight = video.videoHeight || 1;
  return {
    x: viewport.x + (crop.x / videoWidth) * viewport.width,
    y: viewport.y + (crop.y / videoHeight) * viewport.height,
    width: (crop.width / videoWidth) * viewport.width,
    height: (crop.height / videoHeight) * viewport.height,
  };
}

function startRoiDrag(event) {
  if (roiRuntime.confirmed || poseRuntime.editMode) return;
  const pointerEvent = normalizePointerEvent(event);
  if (!dom.childVideo.src || dom.childVideo.readyState < 2) return;
  const frameRect = dom.childFrame.getBoundingClientRect();
  const boxRect = dom.roiDragBox.getBoundingClientRect();
  roiRuntime.dragging = true;
  roiRuntime.resizing = event.target?.tagName === "I";
  roiRuntime.dragBox = {
    pointerX: pointerEvent.clientX,
    pointerY: pointerEvent.clientY,
    left: boxRect.left - frameRect.left,
    top: boxRect.top - frameRect.top,
    width: boxRect.width,
    height: boxRect.height,
    frameWidth: frameRect.width,
    frameHeight: frameRect.height,
  };
  dom.roiDragBox.classList.add("dragging");
  dom.roiStatus.textContent = "Dragging ROI. Release, then confirm.";
  if (event.currentTarget?.setPointerCapture && event.pointerId) {
    event.currentTarget.setPointerCapture(event.pointerId);
  }
  event.stopPropagation();
  event.preventDefault();
}

function moveRoiDrag(event) {
  if (!roiRuntime.dragging) return;
  const pointerEvent = normalizePointerEvent(event);
  const rect = dom.childCanvas.getBoundingClientRect();
  let nextWidth = roiRuntime.dragBox.width;
  let nextHeight = roiRuntime.dragBox.height;
  let nextLeft = roiRuntime.dragBox.left + pointerEvent.clientX - roiRuntime.dragBox.pointerX;
  let nextTop = roiRuntime.dragBox.top + pointerEvent.clientY - roiRuntime.dragBox.pointerY;

  if (roiRuntime.resizing) {
    const ratio = roiRuntime.dragBox.height / roiRuntime.dragBox.width;
    nextWidth = clamp(
      roiRuntime.dragBox.width + pointerEvent.clientX - roiRuntime.dragBox.pointerX,
      84,
      roiRuntime.dragBox.frameWidth * 0.9,
    );
    nextHeight = nextWidth * ratio;
    nextLeft = roiRuntime.dragBox.left;
    nextTop = roiRuntime.dragBox.top;
  }

  nextLeft = clamp(nextLeft, 0, roiRuntime.dragBox.frameWidth - nextWidth);
  nextTop = clamp(nextTop, 0, roiRuntime.dragBox.frameHeight - nextHeight);
  dom.roiDragBox.style.left = `${nextLeft}px`;
  dom.roiDragBox.style.top = `${nextTop}px`;
  dom.roiDragBox.style.width = `${nextWidth}px`;
  dom.roiDragBox.style.height = `${nextHeight}px`;

  const sourcePoint = playerFrameToSource({
    x: nextLeft + nextWidth / 2,
    y: nextTop + nextHeight / 2,
  }, dom.childVideo, rect);

  const viewport = getVideoViewport(dom.childVideo, rect);
  const boxVideoWidthRatio = nextWidth / viewport.width;
  const nextZoom = clamp(1 / boxVideoWidthRatio, Number(dom.playerZoom.min), Number(dom.playerZoom.max));
  setRoiControls({ x: sourcePoint.x, y: sourcePoint.y, zoom: nextZoom });
  roiRuntime.confirmed = false;
  poseRuntime.childPose = null;
  dom.childPoseScore.textContent = "ROI preview";
  dom.confirmRoiButton.textContent = "Confirm ROI";
  dom.confirmRoiButton.classList.remove("confirmed");
  dom.roiStatus.textContent = "ROI moved. Confirm before detection.";
  event.preventDefault();
}

function endRoiDrag() {
  if (!roiRuntime.dragging) return;
  roiRuntime.dragging = false;
  roiRuntime.resizing = false;
  roiRuntime.dragBox = null;
  dom.roiDragBox.classList.remove("dragging");
}

function zoomRoi(event) {
  if (!dom.childVideo.src || dom.childVideo.readyState < 2) return;
  const delta = event.deltaY > 0 ? -0.15 : 0.15;
  setRoiControls({ zoom: roiRuntime.crop.zoom + delta });
  resetRoiConfirmation("ROI zoom changed. Confirm before detection.");
  event.preventDefault();
}

function stableRandom(seed) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

async function initPoseDetector() {
  if (poseRuntime.ready || poseRuntime.failed) return;
  const PoseCtor = window.Pose || globalThis.Pose;
  if (!PoseCtor) {
    poseRuntime.failed = true;
    dom.childPoseScore.textContent = "CV unavailable";
    return;
  }

  try {
    poseRuntime.detector = new PoseCtor({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
    });
    poseRuntime.detector.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: false,
      minDetectionConfidence: 0.45,
      minTrackingConfidence: 0.45,
    });
    poseRuntime.detector.onResults((results) => {
      const detectedPose = normalizeMediaPipePose(results.poseLandmarks || []);
      poseRuntime.lastDetectedPose = detectedPose;
      poseRuntime.trackedPose = smoothPose(poseRuntime.trackedPose, detectedPose);
      poseRuntime.childPose = poseRuntime.trackedPose;
    });
    poseRuntime.ready = true;
    dom.childPoseScore.textContent = "Detecting";
  } catch {
    poseRuntime.failed = true;
    dom.childPoseScore.textContent = "CV unavailable";
  }
}

function normalizeMediaPipePose(landmarks) {
  const pick = (index) => {
    const landmark = landmarks[index];
    if (!landmark || landmark.visibility < 0.28) return null;
    return [landmark.x, landmark.y];
  };

  const pose = {
    head: pick(0),
    leftShoulder: pick(11),
    rightShoulder: pick(12),
    leftElbow: pick(13),
    rightElbow: pick(14),
    leftWrist: pick(15),
    rightWrist: pick(16),
    leftHip: pick(23),
    rightHip: pick(24),
    leftKnee: pick(25),
    rightKnee: pick(26),
    leftAnkle: pick(27),
    rightAnkle: pick(28),
  };

  return Object.fromEntries(Object.entries(pose).filter(([, value]) => Boolean(value)));
}

async function detectChildPose(video, options = {}) {
  if (!poseRuntime.ready || poseRuntime.busy || video.readyState < 2) return;

  const now = performance.now();
  if (!options.force && now - poseRuntime.lastRun < 120) return;

  poseRuntime.busy = true;
  poseRuntime.lastRun = now;
  try {
    await withTimeout(poseRuntime.detector.send({ image: video }), options.timeoutMs || 900);
  } catch {
    poseRuntime.failed = true;
    dom.childPoseScore.textContent = "CV unavailable";
  } finally {
    poseRuntime.busy = false;
  }
  if (!poseRuntime.failed && !options.skipObjects) {
    if (options.force && !options.skipObjects) {
      await detectRacketWithYolo(video, { force: true });
    } else {
      detectRacketWithYolo(video);
    }
  }
}

function withTimeout(promise, timeoutMs = 900) {
  return new Promise((resolve, reject) => {
    let settled = false;
    const timeoutId = window.setTimeout(() => {
      if (settled) return;
      settled = true;
      reject(new Error("Operation timed out"));
    }, timeoutMs);
    Promise.resolve(promise)
      .then((value) => {
        if (settled) return;
        settled = true;
        window.clearTimeout(timeoutId);
        resolve(value);
      })
      .catch((error) => {
        if (settled) return;
        settled = true;
        window.clearTimeout(timeoutId);
        reject(error);
      });
  });
}

function waitForPoseIdle(timeoutMs = 500) {
  if (!poseRuntime.busy) return Promise.resolve();
  const startedAt = performance.now();
  return new Promise((resolve) => {
    const tick = () => {
      if (!poseRuntime.busy || performance.now() - startedAt > timeoutMs) {
        resolve();
        return;
      }
      requestAnimationFrame(tick);
    };
    tick();
  });
}

function getVideoViewport(video, rect) {
  const videoWidth = video.videoWidth || rect.width;
  const videoHeight = video.videoHeight || rect.height;
  const videoRatio = videoWidth / videoHeight;
  const frameRatio = rect.width / rect.height;

  if (videoRatio > frameRatio) {
    const width = rect.width;
    const height = width / videoRatio;
    return {
      x: 0,
      y: (rect.height - height) / 2,
      width,
      height,
    };
  }

  const height = rect.height;
  const width = height * videoRatio;
  return {
    x: (rect.width - width) / 2,
    y: 0,
    width,
    height,
  };
}

function getPlayerCropSource(video, options = {}) {
  const videoWidth = video.videoWidth || 1;
  const videoHeight = video.videoHeight || 1;
  const zoom = roiRuntime.crop.zoom;
  const centerX = roiRuntime.crop.x;
  const centerY = roiRuntime.crop.y;
  const sourceRatio = videoWidth / videoHeight;
  const targetRatio = Number.isFinite(options.targetRatio)
    ? clamp(options.targetRatio, 0.35, 1.8)
    : sourceRatio;
  let cropWidth = videoWidth / zoom;
  let cropHeight = cropWidth / targetRatio;
  if (cropHeight > videoHeight) {
    cropHeight = videoHeight / zoom;
    cropWidth = cropHeight * targetRatio;
  }
  cropWidth = Math.min(videoWidth, cropWidth);
  cropHeight = Math.min(videoHeight, cropHeight);

  const x = clamp(centerX * videoWidth - cropWidth / 2, 0, videoWidth - cropWidth);
  const y = clamp(centerY * videoHeight - cropHeight / 2, 0, videoHeight - cropHeight);

  return {
    x,
    y,
    width: cropWidth,
    height: cropHeight,
    sourceRatio,
  };
}

function getPlayerRenderViewport(rect, crop) {
  const cropRatio = crop.width / crop.height;
  const frameRatio = rect.width / rect.height;

  if (cropRatio > frameRatio) {
    const width = rect.width;
    const height = width / cropRatio;
    return {
      x: 0,
      y: (rect.height - height) / 2,
      width,
      height,
    };
  }

  const height = rect.height;
  const width = height * cropRatio;
  return {
    x: (rect.width - width) / 2,
    y: 0,
    width,
    height,
  };
}

function drawCroppedPlayerVideo(options = {}) {
  const video = dom.childVideo;
  const canvas = options.canvas || dom.childRenderCanvas;
  const rect = options.rect || canvas.getBoundingClientRect();
  const scale = options.scale ?? (window.devicePixelRatio || 1);
  if (!options.rect && rect.width > 40 && rect.height > 40) {
    lastPlayerPreviewRatio = clamp(rect.width / rect.height, 0.35, 1.8);
  }
  canvas.width = Math.max(1, Math.floor(rect.width * scale));
  canvas.height = Math.max(1, Math.floor(rect.height * scale));

  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);
  ctx.clearRect(0, 0, rect.width, rect.height);
  ctx.fillStyle = "#14211d";
  ctx.fillRect(0, 0, rect.width, rect.height);

  if (!video.src || video.readyState < 2 || !video.videoWidth || !video.videoHeight) return false;

  try {
    if (!roiRuntime.confirmed) {
      const viewport = getVideoViewport(video, rect);
      ctx.drawImage(video, viewport.x, viewport.y, viewport.width, viewport.height);
      return true;
    }

    const crop = getPlayerCropSource(video, { targetRatio: options.cropTargetRatio });
    const viewport = getPlayerRenderViewport(rect, crop);
    ctx.drawImage(video, crop.x, crop.y, crop.width, crop.height, viewport.x, viewport.y, viewport.width, viewport.height);
    return true;
  } catch {
    return false;
  }
}

function sourceToPlayerFrame(point, video, rect, options = {}) {
  const crop = getPlayerCropSource(video, { targetRatio: options.cropTargetRatio });
  const viewport = getPlayerRenderViewport(rect, crop);
  const sourceX = point[0] * (video.videoWidth || 1);
  const sourceY = point[1] * (video.videoHeight || 1);
  return [
    viewport.x + ((sourceX - crop.x) / crop.width) * viewport.width,
    viewport.y + ((sourceY - crop.y) / crop.height) * viewport.height,
  ];
}

function playerFrameToPoseSource(point, video, rect) {
  const crop = getPlayerCropSource(video);
  const viewport = getPlayerRenderViewport(rect, crop);
  const sourceX = crop.x + ((point.x - viewport.x) / viewport.width) * crop.width;
  const sourceY = crop.y + ((point.y - viewport.y) / viewport.height) * crop.height;
  return [
    clamp(sourceX / (video.videoWidth || 1), 0, 1),
    clamp(sourceY / (video.videoHeight || 1), 0, 1),
  ];
}

function sourceLengthToFrame(length, video, rect, axis = "x", options = {}) {
  const crop = getPlayerCropSource(video, { targetRatio: options.cropTargetRatio });
  const viewport = getPlayerRenderViewport(rect, crop);
  const sourceSize = axis === "y" ? video.videoHeight || 1 : video.videoWidth || 1;
  const viewportSize = axis === "y" ? viewport.height : viewport.width;
  const cropSize = axis === "y" ? crop.height : crop.width;
  return (length * sourceSize / cropSize) * viewportSize;
}

function frameLengthToSource(length, video, rect, axis = "x") {
  const crop = getPlayerCropSource(video);
  const viewport = getPlayerRenderViewport(rect, crop);
  const sourceSize = axis === "y" ? video.videoHeight || 1 : video.videoWidth || 1;
  const viewportSize = axis === "y" ? viewport.height : viewport.width;
  const cropSize = axis === "y" ? crop.height : crop.width;
  return (length / Math.max(1, viewportSize)) * cropSize / sourceSize;
}

function normalizeRacketBox(box) {
  const segmentationPolygon = Array.isArray(box?.segmentationPolygon)
    ? box.segmentationPolygon
        .filter((point) => Array.isArray(point) && point.length >= 2)
        .map(([x, y]) => [clamp(Number(x), 0, 1), clamp(Number(y), 0, 1)])
    : null;
  return {
    cx: clamp(Number(box?.cx ?? 0.5), 0, 1),
    cy: clamp(Number(box?.cy ?? 0.5), 0, 1),
    width: clamp(Number(box?.width ?? 0.08), 0.008, 0.3),
    height: clamp(Number(box?.height ?? 0.18), 0.018, 0.5),
    angle: Number(box?.angle ?? -0.25),
    confidence: Number(box?.confidence ?? 0.82),
    source: box?.source || "manual",
    method: box?.method || "corrected box",
    ...(segmentationPolygon?.length >= 3 ? { segmentationPolygon } : {}),
    maskPointCount: Number(box?.maskPointCount ?? segmentationPolygon?.length ?? 0),
  };
}

function sigmoid(value) {
  return 1 / (1 + Math.exp(-value));
}

async function initObjectDetector() {
  if (objectDetectionRuntime.ready || objectDetectionRuntime.loading) return;
  objectDetectionRuntime.loading = true;
  objectDetectionRuntime.mode = "loading";
  objectDetectionRuntime.failed = false;
  objectDetectionRuntime.lastError = "";
  try {
    if (!window.ort) throw new Error("ONNX Runtime Web is not loaded.");
    if (window.ort.env?.wasm) {
      const ortBase = new URL("./vendor/onnxruntime-web/", window.location.href).href;
      window.ort.env.wasm.wasmPaths = {
        mjs: `${ortBase}ort-wasm-simd-threaded.mjs?v=20260704`,
        wasm: `${ortBase}ort-wasm-simd-threaded.wasm?v=20260704`,
      };
      window.ort.env.wasm.numThreads = 1;
      window.ort.env.wasm.proxy = false;
    }
    const session = await window.ort.InferenceSession.create(objectDetectionRuntime.modelPath, {
      executionProviders: ["wasm"],
      graphOptimizationLevel: "all",
    });
    objectDetectionRuntime.session = session;
    objectDetectionRuntime.inputName = session.inputNames?.[0] || "images";
    const inputMeta = session.inputMetadata?.[objectDetectionRuntime.inputName];
    const inputDims = inputMeta?.dimensions || inputMeta?.dims || [];
    objectDetectionRuntime.inputShape = inputDims;
    objectDetectionRuntime.outputNames = session.outputNames || [];
    objectDetectionRuntime.backend = "wasm";
    const inputSize = Number(inputDims[2] || inputDims[3]);
    if (Number.isFinite(inputSize) && inputSize > 0) {
      objectDetectionRuntime.modelSize = inputSize;
    }
    objectDetectionRuntime.ready = true;
    objectDetectionRuntime.mode = "yoloSeg";
  } catch (error) {
    console.warn("Object detector unavailable", error);
    objectDetectionRuntime.lastError = error?.message || String(error);
    objectDetectionRuntime.failed = true;
    objectDetectionRuntime.mode = "poseFallback";
  } finally {
    objectDetectionRuntime.loading = false;
    updateObjectDetectorStatus();
  }
}

function prepareRacketModelInput(video) {
  if (!video?.videoWidth || !video?.videoHeight) return null;
  const size = objectDetectionRuntime.modelSize;
  const crop = roiRuntime.confirmed
    ? getPlayerCropSource(video)
    : { x: 0, y: 0, width: video.videoWidth, height: video.videoHeight };
  const canvas = prepareRacketModelInput.canvas || (prepareRacketModelInput.canvas = document.createElement("canvas"));
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.fillStyle = "#14211d";
  ctx.fillRect(0, 0, size, size);

  const cropRatio = crop.width / crop.height;
  let drawWidth = size;
  let drawHeight = size;
  let offsetX = 0;
  let offsetY = 0;
  if (cropRatio > 1) {
    drawHeight = size / cropRatio;
    offsetY = (size - drawHeight) / 2;
  } else {
    drawWidth = size * cropRatio;
    offsetX = (size - drawWidth) / 2;
  }
  ctx.drawImage(video, crop.x, crop.y, crop.width, crop.height, offsetX, offsetY, drawWidth, drawHeight);

  const rgba = ctx.getImageData(0, 0, size, size).data;
  const tensorData = new Float32Array(3 * size * size);
  const plane = size * size;
  for (let i = 0; i < plane; i += 1) {
    tensorData[i] = rgba[i * 4] / 255;
    tensorData[plane + i] = rgba[i * 4 + 1] / 255;
    tensorData[plane * 2 + i] = rgba[i * 4 + 2] / 255;
  }
  return {
    tensor: new window.ort.Tensor("float32", tensorData, [1, 3, size, size]),
    crop,
    letterbox: { x: offsetX, y: offsetY, width: drawWidth, height: drawHeight },
  };
}

function readYoloFeature(output, feature, index, count) {
  return output.data[feature * count + index];
}

function bestRacketPrediction(output) {
  const dims = output.dims || [];
  const count = dims[2] || 0;
  const featureCount = dims[1] || 0;
  if (!count || featureCount < 6) return null;
  let best = null;
  for (let index = 0; index < count; index += 1) {
    const confidence = readYoloFeature(output, 4, index, count);
    if (confidence < objectDetectionRuntime.confidenceThreshold) continue;
    const width = readYoloFeature(output, 2, index, count);
    const height = readYoloFeature(output, 3, index, count);
    if (width < 8 || height < 8) continue;
    if (!best || confidence > best.confidence) {
      best = {
        index,
        confidence,
        cx: readYoloFeature(output, 0, index, count),
        cy: readYoloFeature(output, 1, index, count),
        width,
        height,
        coefficients: Array.from({ length: featureCount - 5 }, (_, coeffIndex) =>
          readYoloFeature(output, coeffIndex + 5, index, count),
        ),
      };
    }
  }
  return best;
}

function orderedBoundaryPolygon(points) {
  if (!Array.isArray(points) || points.length < 3) return points || [];
  const center = points.reduce(
    (sum, point) => [sum[0] + point[0], sum[1] + point[1]],
    [0, 0],
  ).map((value) => value / points.length);
  return [...points].sort((a, b) =>
    Math.atan2(a[1] - center[1], a[0] - center[0])
    - Math.atan2(b[1] - center[1], b[0] - center[0]));
}

function maskPolygonFromPrediction(prediction, proto, geometry) {
  if (!prediction || !proto?.data?.length) return null;
  const size = objectDetectionRuntime.modelSize;
  const maskSize = objectDetectionRuntime.maskSize;
  const protoDims = proto.dims || [];
  const channels = protoDims[1] || prediction.coefficients.length;
  const width = protoDims[3] || maskSize;
  const height = protoDims[2] || maskSize;
  const scaleX = width / size;
  const scaleY = height / size;
  const minX = clamp(Math.floor((prediction.cx - prediction.width * 0.62) * scaleX), 0, width - 1);
  const maxX = clamp(Math.ceil((prediction.cx + prediction.width * 0.62) * scaleX), 0, width - 1);
  const minY = clamp(Math.floor((prediction.cy - prediction.height * 0.62) * scaleY), 0, height - 1);
  const maxY = clamp(Math.ceil((prediction.cy + prediction.height * 0.62) * scaleY), 0, height - 1);
  const maskPixels = [];
  const occupied = new Set();
  const stride = Math.max(1, Math.floor(Math.max(maxX - minX, maxY - minY) / 36));
  for (let y = minY; y <= maxY; y += stride) {
    for (let x = minX; x <= maxX; x += stride) {
      let score = 0;
      const pixelIndex = y * width + x;
      for (let channel = 0; channel < channels; channel += 1) {
        score += prediction.coefficients[channel] * proto.data[channel * width * height + pixelIndex];
      }
      if (sigmoid(score) < 0.48) continue;
      const modelX = x / width * size;
      const modelY = y / height * size;
      if (
        modelX < geometry.letterbox.x
        || modelX > geometry.letterbox.x + geometry.letterbox.width
        || modelY < geometry.letterbox.y
        || modelY > geometry.letterbox.y + geometry.letterbox.height
      ) {
        continue;
      }
      occupied.add(`${x},${y}`);
      maskPixels.push({ x, y, modelX, modelY });
    }
  }
  if (maskPixels.length >= 8) {
    const boundary = maskPixels.filter(({ x, y }) =>
      !occupied.has(`${x - stride},${y}`)
      || !occupied.has(`${x + stride},${y}`)
      || !occupied.has(`${x},${y - stride}`)
      || !occupied.has(`${x},${y + stride}`));
    const boundaryPoints = boundary.map(({ modelX, modelY }) => {
      const sourceX = geometry.crop.x + ((modelX - geometry.letterbox.x) / geometry.letterbox.width) * geometry.crop.width;
      const sourceY = geometry.crop.y + ((modelY - geometry.letterbox.y) / geometry.letterbox.height) * geometry.crop.height;
      return [
        clamp(sourceX / (dom.childVideo.videoWidth || 1), 0, 1),
        clamp(sourceY / (dom.childVideo.videoHeight || 1), 0, 1),
      ];
    });
    if (boundaryPoints.length >= 8) return orderedBoundaryPolygon(boundaryPoints);
  }
  return bboxPolygonFromPrediction(prediction, geometry);
}

function bboxPolygonFromPrediction(prediction, geometry) {
  const size = objectDetectionRuntime.modelSize;
  const x1 = prediction.cx - prediction.width / 2;
  const x2 = prediction.cx + prediction.width / 2;
  const y1 = prediction.cy - prediction.height / 2;
  const y2 = prediction.cy + prediction.height / 2;
  return [
    [x1, y1],
    [x2, y1],
    [x2, y2],
    [x1, y2],
  ].map(([modelX, modelY]) => {
    const sourceX = geometry.crop.x + ((modelX - geometry.letterbox.x) / geometry.letterbox.width) * geometry.crop.width;
    const sourceY = geometry.crop.y + ((modelY - geometry.letterbox.y) / geometry.letterbox.height) * geometry.crop.height;
    return [
      clamp(sourceX / (dom.childVideo.videoWidth || 1), 0, 1),
      clamp(sourceY / (dom.childVideo.videoHeight || 1), 0, 1),
    ];
  });
}

async function detectRacketWithYolo(video, options = {}) {
  if (!video?.src || video.readyState < 2 || !roiRuntime.confirmed) return null;
  await initObjectDetector();
  if (!objectDetectionRuntime.ready || !objectDetectionRuntime.session) return null;
  const frame = currentFrameIndex(video);
  if (!options.force && objectDetectionRuntime.racketFrameDetections.has(frame)) {
    return objectDetectionRuntime.racketFrameDetections.get(frame);
  }
  const now = performance.now();
  if (!options.force && now - objectDetectionRuntime.lastRun < 260) return null;
  const geometry = prepareRacketModelInput(video);
  if (!geometry) return null;
  objectDetectionRuntime.lastRun = now;
  try {
    const feeds = { [objectDetectionRuntime.inputName]: geometry.tensor };
    const results = await objectDetectionRuntime.session.run(feeds);
    const output = results.output0 || results[objectDetectionRuntime.session.outputNames?.[0]];
    const proto = results.output1 || results[objectDetectionRuntime.session.outputNames?.[1]];
    const prediction = bestRacketPrediction(output);
    objectDetectionRuntime.latestDetectionFrame = frame;
    objectDetectionRuntime.latestRacketConfidence = prediction?.confidence ?? null;
    if (!prediction) {
      updateObjectDetectorStatus();
      return null;
    }
    const polygon = maskPolygonFromPrediction(prediction, proto, geometry);
    const box = racketBoxFromSegmentationMask(polygon, prediction.confidence);
    if (!box) return null;
    objectDetectionRuntime.lastRacketBox = {
      ...box,
      source: "yoloSeg",
      method: "YOLO-seg mask minimum-area rotated rectangle",
    };
    objectDetectionRuntime.racketFrameDetections.set(frame, objectDetectionRuntime.lastRacketBox);
    objectDetectionRuntime.lastRacketAt = video.currentTime || 0;
    objectDetectionRuntime.mode = "yoloSeg";
    updateObjectDetectorStatus();
    return objectDetectionRuntime.lastRacketBox;
  } catch (error) {
    console.warn("Racket model inference failed", error);
    objectDetectionRuntime.failed = true;
    objectDetectionRuntime.mode = "poseFallback";
    updateObjectDetectorStatus();
    return null;
  }
}

function convexHull(points) {
  const clean = points
    .filter((point) => Array.isArray(point) && Number.isFinite(point[0]) && Number.isFinite(point[1]))
    .map((point) => [clamp(point[0], 0, 1), clamp(point[1], 0, 1)])
    .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  if (clean.length <= 2) return clean;

  const cross = (origin, a, b) =>
    (a[0] - origin[0]) * (b[1] - origin[1]) - (a[1] - origin[1]) * (b[0] - origin[0]);
  const lower = [];
  clean.forEach((point) => {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], point) <= 0) lower.pop();
    lower.push(point);
  });
  const upper = [];
  [...clean].reverse().forEach((point) => {
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], point) <= 0) upper.pop();
    upper.push(point);
  });
  return lower.slice(0, -1).concat(upper.slice(0, -1));
}

function minimumAreaRotatedRect(points) {
  const hull = convexHull(points);
  if (hull.length < 3) return null;
  let best = null;

  hull.forEach((point, index) => {
    const next = hull[(index + 1) % hull.length];
    const angle = Math.atan2(next[1] - point[1], next[0] - point[0]);
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const rotated = hull.map(([x, y]) => [x * cos + y * sin, -x * sin + y * cos]);
    const xs = rotated.map(([x]) => x);
    const ys = rotated.map(([, y]) => y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    const width = maxX - minX;
    const height = maxY - minY;
    const area = width * height;
    if (!best || area < best.area) {
      const cxR = (minX + maxX) / 2;
      const cyR = (minY + maxY) / 2;
      best = {
        cx: cxR * cos - cyR * sin,
        cy: cxR * sin + cyR * cos,
        width,
        height,
        angle,
        area,
      };
    }
  });

  if (!best) return null;
  if (best.width > best.height) {
    return {
      cx: best.cx,
      cy: best.cy,
      width: best.height,
      height: best.width,
      angle: best.angle + Math.PI / 2,
    };
  }
  return {
    cx: best.cx,
    cy: best.cy,
    width: best.width,
    height: best.height,
    angle: best.angle,
  };
}

function robustRacketMaskForBox(maskPolygon) {
  const clean = (maskPolygon || [])
    .filter((point) => Array.isArray(point) && Number.isFinite(point[0]) && Number.isFinite(point[1]))
    .map((point) => [clamp(point[0], 0, 1), clamp(point[1], 0, 1)]);
  if (clean.length < 8) return clean;

  const sortedX = clean.map(([x]) => x).sort((a, b) => a - b);
  const sortedY = clean.map(([, y]) => y).sort((a, b) => a - b);
  const medianAt = (values) => values[Math.floor(values.length / 2)];
  const cx = medianAt(sortedX);
  const cy = medianAt(sortedY);
  const distances = clean
    .map((point) => ({ point, distance: Math.hypot(point[0] - cx, point[1] - cy) }))
    .sort((a, b) => a.distance - b.distance);
  const cutoffIndex = Math.max(4, Math.floor(distances.length * 0.84));
  const cutoff = distances[Math.min(cutoffIndex, distances.length - 1)].distance;
  const core = distances.filter((entry) => entry.distance <= cutoff).map((entry) => entry.point);
  if (core.length < 5) return clean;

  const fullRect = minimumAreaRotatedRect(clean);
  const coreRect = minimumAreaRotatedRect(core);
  if (!fullRect || !coreRect) return clean;

  const fullArea = fullRect.width * fullRect.height;
  const coreArea = coreRect.width * coreRect.height;
  const fullLongSide = Math.max(fullRect.width, fullRect.height);
  const coreLongSide = Math.max(coreRect.width, coreRect.height);
  const wasPulledByOutliers = fullArea > coreArea * 1.35 || fullLongSide > coreLongSide * 1.25;
  return wasPulledByOutliers ? core : clean;
}

function racketBoxFromSegmentationMask(maskPolygon, confidence = 0.9) {
  if (!Array.isArray(maskPolygon) || maskPolygon.length < 3) return null;
  const boxPolygon = robustRacketMaskForBox(maskPolygon);
  const rect = minimumAreaRotatedRect(boxPolygon);
  if (!rect) return null;
  return normalizeRacketBox({
    ...rect,
    confidence,
    source: "yoloSeg",
    method: boxPolygon.length === maskPolygon.length
      ? "YOLO-seg mask minimum-area rotated rectangle"
      : "YOLO-seg mask core minimum-area rotated rectangle",
    segmentationPolygon: maskPolygon,
    maskPointCount: maskPolygon.length,
    boxPointCount: boxPolygon.length,
  });
}

function visualRacketBoxForFrame(pose, video) {
  const frame = video === dom.childVideo ? currentFrameIndex(video) : null;
  const normalizedPoseBox = pose?.racketBox ? normalizeRacketBox(pose.racketBox) : null;
  const isManualFrame = frame !== null && racketManualFrames.has(frame);
  const isCurrentEditedPose = video === dom.childVideo
    && poseRuntime.editMode
    && poseRuntime.editedPoseFrame === frame
    && pose === poseRuntime.editedPose;

  // In the frame editor, user edits must own the red box. The mask can remain
  // visible as a guide, but deriving the editable box from the mask every draw
  // makes drag/slider corrections appear frozen.
  if ((isManualFrame || isCurrentEditedPose) && normalizedPoseBox) {
    return normalizedPoseBox;
  }

  const segmentation = racketSegmentationForFrame(pose, video);
  // When a racket mask exists, the visible/edit box must be derived from that
  // mask. Using an older tracked box here makes the red box drift away from the
  // cyan segmentation and has caused repeated review regressions.
  const maskBox = racketBoxFromSegmentationMask(segmentation, pose?.racketBox?.confidence ?? 0.9);
  if (maskBox) {
    return {
      ...maskBox,
      source: pose?.racketBox?.source || maskBox.source,
      method: maskBox.method,
    };
  }
  return normalizedPoseBox;
}

function racketBoxToFrame(box, video, rect, options = {}) {
  const normalized = normalizeRacketBox(box);
  const [cx, cy] = sourceToPlayerFrame([normalized.cx, normalized.cy], video, rect, options);
  return {
    ...normalized,
    cx,
    cy,
    width: sourceLengthToFrame(normalized.width, video, rect, "x", options),
    height: sourceLengthToFrame(normalized.height, video, rect, "y", options),
  };
}

function racketSegmentationForFrame(pose, video) {
  if (video !== dom.childVideo) return pose?.racketBox?.segmentationPolygon || null;
  const frame = currentFrameIndex(video);
  const detectedBox = objectDetectionRuntime.racketFrameDetections.get(frame);
  return detectedBox?.segmentationPolygon
    || pose?.racketBox?.segmentationPolygon
    || null;
}

function requestRacketSegmentationForCurrentFrame() {
  if (!poseRuntime.editMode || !roiRuntime.confirmed || poseRuntime.draggingPoint) return;
  const frame = currentFrameIndex(dom.childVideo);
  const detectedBox = objectDetectionRuntime.racketFrameDetections.get(frame);
  if (detectedBox?.segmentationPolygon?.length >= 3) return;
  const now = performance.now();
  if (
    objectDetectionRuntime.segmentationRequestFrame === frame
    && now - objectDetectionRuntime.segmentationRequestAt < 900
  ) {
    return;
  }
  objectDetectionRuntime.segmentationRequestFrame = frame;
  objectDetectionRuntime.segmentationRequestAt = now;
  refreshRacketDetectionForCurrentEditFrame();
}

function drawRacketSegmentation(ctx, polygon, video, rect, options = {}) {
  if (!Array.isArray(polygon) || polygon.length < 3) return;
  const framePoints = polygon
    .map((point) => sourceToPlayerFrame(point, video, rect, options))
    .filter(([x, y]) => Number.isFinite(x) && Number.isFinite(y));
  if (framePoints.length < 3) return;
  const isCoarse = framePoints.length <= 4;

  ctx.save();
  ctx.shadowBlur = 0;
  ctx.beginPath();
  framePoints.forEach(([x, y], index) => {
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = isCoarse ? "rgba(16, 217, 196, .12)" : "rgba(16, 217, 196, .26)";
  ctx.strokeStyle = isCoarse ? "rgba(0, 255, 221, .72)" : "rgba(0, 255, 221, .98)";
  ctx.lineWidth = isCoarse ? 2 : 3;
  ctx.fill();
  ctx.stroke();
  ctx.setLineDash(isCoarse ? [8, 6] : [4, 5]);
  ctx.strokeStyle = "rgba(255, 255, 255, .9)";
  ctx.lineWidth = 1.4;
  ctx.stroke();
  ctx.restore();
}

function pointInsidePolygonFrame(point, framePoints) {
  if (!Array.isArray(framePoints) || framePoints.length < 3) return false;
  let inside = false;
  for (let i = 0, j = framePoints.length - 1; i < framePoints.length; j = i, i += 1) {
    const [xi, yi] = framePoints[i];
    const [xj, yj] = framePoints[j];
    const intersects = ((yi > point.y) !== (yj > point.y))
      && (point.x < ((xj - xi) * (point.y - yi)) / ((yj - yi) || Number.EPSILON) + xi);
    if (intersects) inside = !inside;
  }
  return inside;
}

function racketLocalToFrame(frameBox, localX, localY) {
  const sin = Math.sin(frameBox.angle);
  const cos = Math.cos(frameBox.angle);
  return [
    frameBox.cx + localX * cos - localY * sin,
    frameBox.cy + localX * sin + localY * cos,
  ];
}

function frameToRacketLocal(pointer, frameBox) {
  const dx = pointer.x - frameBox.cx;
  const dy = pointer.y - frameBox.cy;
  const sin = Math.sin(frameBox.angle);
  const cos = Math.cos(frameBox.angle);
  return {
    x: dx * cos + dy * sin,
    y: -dx * sin + dy * cos,
  };
}

function racketBoxHandles(box, video, rect, options = {}) {
  const frameBox = racketBoxToFrame(box, video, rect, options);
  const halfH = frameBox.height / 2;
  const halfW = frameBox.width / 2;
  const cornerSpecs = [
    ["racketCornerNW", -halfW, -halfH],
    ["racketCornerNE", halfW, -halfH],
    ["racketCornerSE", halfW, halfH],
    ["racketCornerSW", -halfW, halfH],
  ];
  const edgeSpecs = [
    ["racketEdgeN", 0, -halfH],
    ["racketEdgeE", halfW, 0],
    ["racketEdgeS", 0, halfH],
    ["racketEdgeW", -halfW, 0],
  ];
  return {
    center: [frameBox.cx, frameBox.cy],
    rotate: racketLocalToFrame(frameBox, 0, -halfH - 24),
    length: racketLocalToFrame(frameBox, 0, halfH),
    width: racketLocalToFrame(frameBox, halfW, 0),
    handleA: racketLocalToFrame(frameBox, 0, halfH),
    handleB: racketLocalToFrame(frameBox, 0, -halfH),
    corners: Object.fromEntries(cornerSpecs.map(([name, x, y]) => [name, racketLocalToFrame(frameBox, x, y)])),
    edges: Object.fromEntries(edgeSpecs.map(([name, x, y]) => [name, racketLocalToFrame(frameBox, x, y)])),
    frameBox,
  };
}

function pointInsideRotatedBox(pointer, frameBox) {
  const local = frameToRacketLocal(pointer, frameBox);
  return Math.abs(local.x) <= frameBox.width / 2 + 8 && Math.abs(local.y) <= frameBox.height / 2 + 8;
}

function clonePose(pose) {
  return Object.fromEntries(
    Object.entries(pose || {}).map(([name, point]) => {
      if (Array.isArray(point)) return [name, [...point]];
      if (point && typeof point === "object") return [name, { ...point }];
      return [name, point];
    }),
  );
}

function isKeypointHidden(pose, name) {
  return Boolean(pose?.hiddenKeypoints?.[name]);
}

function setKeypointHidden(pose, name, hidden) {
  if (!pose || name === "racketBox" || name === "racketRotate" || name === "racketLength" || name === "racketWidth") return;
  pose.hiddenKeypoints = { ...(pose.hiddenKeypoints || {}) };
  if (hidden) {
    pose.hiddenKeypoints[name] = true;
  } else {
    delete pose.hiddenKeypoints[name];
  }
}

function smoothPose(previous, next, alpha = 0.62) {
  if (!previous) return clonePose(next || {});
  const output = clonePose(next || {});
  Object.entries(output).forEach(([name, value]) => {
    const start = previous[name];
    if (Array.isArray(value) && Array.isArray(start)) {
      output[name] = [
        start[0] * alpha + value[0] * (1 - alpha),
        start[1] * alpha + value[1] * (1 - alpha),
      ];
    } else if (name === "racketBox" && value && start) {
      output[name] = normalizeRacketBox({
        cx: start.cx * alpha + value.cx * (1 - alpha),
        cy: start.cy * alpha + value.cy * (1 - alpha),
        width: start.width * alpha + value.width * (1 - alpha),
        height: start.height * alpha + value.height * (1 - alpha),
        angle: start.angle * alpha + value.angle * (1 - alpha),
        confidence: value.confidence ?? start.confidence,
      });
    }
  });
  output.hiddenKeypoints = { ...(previous.hiddenKeypoints || {}), ...(next?.hiddenKeypoints || {}) };
  return output;
}

function currentFrameIndex(video = dom.childVideo) {
  const fps = Math.max(1, Number(dom.fpsInput.value || 60));
  return clampFrameIndex(Math.round((video.currentTime || 0) * fps), video);
}

function reliableVideoDuration(video = dom.childVideo) {
  if (!video) return 0;
  if (Number.isFinite(video.duration) && video.duration > 0) return video.duration;
  const ranges = [video.seekable, video.buffered];
  for (const range of ranges) {
    if (!range?.length) continue;
    const end = range.end(range.length - 1);
    if (Number.isFinite(end) && end > 0) return end;
  }
  return 0;
}

function waitForVideoMetadata(video, timeoutMs = 2800) {
  return new Promise((resolve) => {
    if (!video) {
      resolve(false);
      return;
    }
    if (reliableVideoDuration(video) > 0 && video.readyState >= 1) {
      resolve(true);
      return;
    }
    let settled = false;
    let timeoutId = null;
    const done = () => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeoutId);
      video.removeEventListener("loadedmetadata", done);
      video.removeEventListener("loadeddata", done);
      video.removeEventListener("canplay", done);
      resolve(reliableVideoDuration(video) > 0);
    };
    video.addEventListener("loadedmetadata", done);
    video.addEventListener("loadeddata", done);
    video.addEventListener("canplay", done);
    timeoutId = window.setTimeout(done, timeoutMs);
  });
}

function totalFrameCount(video = dom.childVideo) {
  const fps = Math.max(1, Number(dom.fpsInput.value || 60));
  const duration = reliableVideoDuration(video);
  return Math.max(0, Math.round(duration * fps));
}

// Frame helpers use zero-based frame indices. totalFrameCount is a count, so
// the last drawable/editable frame is totalFrameCount - 1.
function maxFrameIndex(video = dom.childVideo) {
  return Math.max(0, totalFrameCount(video) - 1);
}

function clampFrameIndex(frame, video = dom.childVideo) {
  return clamp(Math.round(Number(frame) || 0), 0, maxFrameIndex(video));
}

function frameIndexForTime(time) {
  const fps = Math.max(1, Number(dom.fpsInput.value || 60));
  return clampFrameIndex(Math.round((time || 0) * fps), dom.childVideo);
}

function correctionForCurrentFrame(video = dom.childVideo) {
  return poseCorrections.get(currentFrameIndex(video));
}

function sortedCorrectionFrames() {
  return Array.from(poseCorrections.keys()).sort((a, b) => a - b);
}

function sortedAnchorFrames() {
  return Array.from(poseCorrections.keys())
    .filter((frame) => poseCorrectionSources.get(frame) !== "tracked")
    .sort((a, b) => a - b);
}

function sortedBallAnchorFrames() {
  return Array.from(ballAnchorFrames)
    .filter((frame) => Array.isArray(poseCorrections.get(frame)?.ball))
    .sort((a, b) => a - b);
}

function firstBallAnchorFrame() {
  return sortedBallAnchorFrames()[0] ?? null;
}

function removeBallFromPose(pose) {
  const nextPose = clonePose(pose || {});
  delete nextPose.ball;
  delete nextPose.ballConfidence;
  delete nextPose.ballSource;
  delete nextPose.ballMethod;
  if (nextPose.hiddenKeypoints) delete nextPose.hiddenKeypoints.ball;
  return nextPose;
}

function isReliableBallPose(pose) {
  if (!Array.isArray(pose?.ball)) return false;
  if (pose.ballSource === "poseFallback") return false;
  if (pose.ballSource === "manualBallAnchor" || pose.ballSource === "trackedFromManualAnchor") return true;
  if (String(pose.ballSource || "").toLowerCase().includes("yolo")) return true;
  if (ballAnchorFrames.size > 0 && pose.ballSource !== "poseFallback") return true;
  return false;
}

function anchorSourceType(source) {
  if (source === "defaultAnchor") return "default";
  if (source === "suggestedAnchor") return "suggested";
  return "user";
}

function anchorTypeLabel(source) {
  const type = anchorSourceType(source);
  if (type === "default") return "Default";
  if (type === "suggested") return "Suggested";
  return "User";
}

function anchorTypeClass(source) {
  return `anchor-${anchorSourceType(source)}`;
}

function anchorRecords() {
  return sortedAnchorFrames().map((frame) => {
    const source = poseCorrectionSources.get(frame) || "manual";
    return {
      frame,
      time: frame / Math.max(1, Number(dom.fpsInput.value || 60)),
      source,
      type: anchorSourceType(source),
      label: anchorTypeLabel(source),
      quality: trackingQualityForFrame(frame).score,
    };
  });
}

function keyframeToFrameIndex(keyframe) {
  if (Number.isFinite(Number(keyframe?.frameIndex))) return Math.round(Number(keyframe.frameIndex));
  return frameIndexForTime(keyframe?.time || 0);
}

function seedDefaultAnchorForFrame(frame, source = "defaultAnchor", poseOverride = null) {
  if (poseCorrections.has(frame) && poseCorrectionSources.get(frame) !== "tracked") return false;
  const anchorPose = poseOverride
    ? addTrackedObjects(clonePose(poseOverride))
    : baselinePoseForFrame(frame);
  poseCorrections.set(frame, anchorPose);
  poseCorrectionSources.set(frame, source);
  return true;
}

function seedDefaultAnchorFramesFromKeyframes() {
  let created = 0;
  keyframes.forEach((keyframe) => {
    const frame = keyframeToFrameIndex(keyframe);
    if (seedDefaultAnchorForFrame(frame, "defaultAnchor", keyframe.pose)) created += 1;
  });
  if (created) {
    keypointTrackingReady = false;
    keypointVideoReady = false;
    motionAnalysisReady = false;
  }
  return created;
}

function alignPoseToPlayerRoi(sourcePose) {
  const pose = clonePose(sourcePose || {});
  const bodyNames = [
    "head",
    "leftShoulder",
    "rightShoulder",
    "leftElbow",
    "rightElbow",
    "leftWrist",
    "rightWrist",
    "leftHip",
    "rightHip",
    "leftKnee",
    "rightKnee",
    "leftAnkle",
    "rightAnkle",
  ];
  const points = bodyNames.map((name) => pose[name]).filter(Array.isArray);
  if (points.length < 4) return pose;

  const xs = points.map((point) => point[0]);
  const ys = points.map((point) => point[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const sourceWidth = Math.max(0.01, maxX - minX);
  const sourceHeight = Math.max(0.01, maxY - minY);
  const crop = getPlayerCropSource(dom.childVideo);
  const videoWidth = dom.childVideo.videoWidth || 1;
  const videoHeight = dom.childVideo.videoHeight || 1;
  const cropNorm = {
    x: crop.x / videoWidth,
    y: crop.y / videoHeight,
    width: crop.width / videoWidth,
    height: crop.height / videoHeight,
  };
  const targetHeight = cropNorm.height * 0.68;
  const targetWidth = Math.min(cropNorm.width * 0.52, targetHeight * (sourceWidth / sourceHeight) * 0.88);
  const targetCenterX = cropNorm.x + cropNorm.width * 0.55;
  const targetCenterY = cropNorm.y + cropNorm.height * 0.62;
  const scaleX = targetWidth / sourceWidth;
  const scaleY = targetHeight / sourceHeight;
  const sourceCenterX = (minX + maxX) / 2;
  const sourceCenterY = (minY + maxY) / 2;

  bodyNames.forEach((name) => {
    if (!Array.isArray(pose[name])) return;
    pose[name] = [
      clamp(targetCenterX + (pose[name][0] - sourceCenterX) * scaleX, 0, 1),
      clamp(targetCenterY + (pose[name][1] - sourceCenterY) * scaleY, 0, 1),
    ];
  });
  if (pose.racketBox) {
    pose.racketBox = normalizeRacketBox({
      ...pose.racketBox,
      cx: clamp(targetCenterX + (pose.racketBox.cx - sourceCenterX) * scaleX, 0, 1),
      cy: clamp(targetCenterY + (pose.racketBox.cy - sourceCenterY) * scaleY, 0, 1),
      width: pose.racketBox.width * scaleX,
      height: pose.racketBox.height * scaleY,
    });
  }
  if (Array.isArray(pose.ball)) {
    pose.ball = [
      clamp(targetCenterX + (pose.ball[0] - sourceCenterX) * scaleX, 0, 1),
      clamp(targetCenterY + (pose.ball[1] - sourceCenterY) * scaleY, 0, 1),
    ];
  }
  return pose;
}

function findLongAnchorGap(anchors = sortedAnchorFrames()) {
  const total = totalFrameCount(dom.childVideo);
  if (!total) return null;
  const lastFrame = maxFrameIndex(dom.childVideo);
  const fps = Math.max(1, Number(dom.fpsInput.value || 60));
  const threshold = Math.max(18, Math.round(fps * 0.55));
  const points = [0, ...anchors, lastFrame]
    .map((frame) => clampFrameIndex(frame, dom.childVideo))
    .filter((frame, index, list) => index === 0 || frame !== list[index - 1]);
  let largestGap = null;
  for (let index = 0; index < points.length - 1; index += 1) {
    const start = points[index];
    const end = points[index + 1];
    const gap = end - start;
    if (gap > threshold && (!largestGap || gap > largestGap.gap)) {
      largestGap = {
        start,
        end,
        gap,
        frame: Math.round((start + end) / 2),
      };
    }
  }
  return largestGap;
}

function updateSuggestedAnchor(gap = findLongAnchorGap()) {
  suggestedAnchorFrame = gap?.frame ?? null;
  if (!dom.suggestedAnchorButton) return;
  dom.suggestedAnchorButton.classList.toggle("hidden", suggestedAnchorFrame == null);
  if (suggestedAnchorFrame != null) {
    dom.suggestedAnchorButton.textContent = `Fix frame ${suggestedAnchorFrame}`;
  }
}

function interpolatePose(a, b, ratio) {
  const output = clonePose(a || {});
  Object.entries(b || {}).forEach(([name, value]) => {
    const start = a?.[name];
    if (Array.isArray(value) && Array.isArray(start)) {
      output[name] = [
        start[0] + (value[0] - start[0]) * ratio,
        start[1] + (value[1] - start[1]) * ratio,
      ];
    } else if (name === "racketBox" && value && start) {
      output[name] = normalizeRacketBox({
        cx: start.cx + (value.cx - start.cx) * ratio,
        cy: start.cy + (value.cy - start.cy) * ratio,
        width: start.width + (value.width - start.width) * ratio,
        height: start.height + (value.height - start.height) * ratio,
        angle: start.angle + (value.angle - start.angle) * ratio,
        confidence: value.confidence ?? start.confidence,
      });
    } else {
      output[name] = Array.isArray(value) ? [...value] : value && typeof value === "object" ? { ...value } : value;
    }
  });
  output.hiddenKeypoints = { ...(a?.hiddenKeypoints || {}), ...(b?.hiddenKeypoints || {}) };
  return output;
}

function offsetPoseByBaselineMotion(anchorPose, anchorBaseline, frameBaseline) {
  const output = clonePose(anchorPose || {});
  Object.entries(frameBaseline || {}).forEach(([name, frameValue]) => {
    const anchorValue = anchorPose?.[name];
    const baseValue = anchorBaseline?.[name];
    if (Array.isArray(anchorValue) && Array.isArray(baseValue) && Array.isArray(frameValue)) {
      output[name] = [
        clamp(anchorValue[0] + frameValue[0] - baseValue[0], 0, 1),
        clamp(anchorValue[1] + frameValue[1] - baseValue[1], 0, 1),
      ];
    } else if (name === "racketBox" && anchorValue && baseValue && frameValue) {
      output[name] = normalizeRacketBox({
        cx: anchorValue.cx + frameValue.cx - baseValue.cx,
        cy: anchorValue.cy + frameValue.cy - baseValue.cy,
        width: anchorValue.width + (frameValue.width || 0) - (baseValue.width || 0),
        height: anchorValue.height + (frameValue.height || 0) - (baseValue.height || 0),
        angle: anchorValue.angle + (frameValue.angle || 0) - (baseValue.angle || 0),
        confidence: anchorValue.confidence ?? frameValue.confidence,
      });
    }
  });
  output.hiddenKeypoints = { ...(anchorPose?.hiddenKeypoints || {}) };
  return output;
}

function createPoseForTime(video, time, seedOffset = 0) {
  const seed = Math.floor(time * 24) + seedOffset;
  const rand = stableRandom(seed + 37);
  const swing = Math.sin(time * 3.2) * 0.06;
  const side = dom.dominantHand.value === "right" ? 1 : -1;
  const isChild = video === dom.childVideo;

  if (isChild) {
    return {
      head: [0.55 + swing * 0.03, 0.34],
      leftShoulder: [0.51 - swing * 0.04, 0.42],
      rightShoulder: [0.59 + swing * 0.03, 0.43],
      leftElbow: [0.46 - swing * 0.05, 0.49],
      rightElbow: [0.64 + side * swing * 0.06, 0.5],
      leftWrist: [0.42 - swing * 0.05, 0.56],
      rightWrist: [0.69 + side * swing * 0.07, 0.56],
      leftHip: [0.53, 0.59],
      rightHip: [0.6, 0.6],
      leftKnee: [0.51, 0.72 + rand() * 0.008],
      rightKnee: [0.63, 0.72 - rand() * 0.008],
      leftAnkle: [0.49, 0.83],
      rightAnkle: [0.66, 0.83],
      racketBox: normalizeRacketBox({
        cx: 0.71 + side * swing * 0.08,
        cy: 0.54 - swing * 0.28,
        width: 0.055,
        height: 0.18,
        angle: -0.25 + side * swing * 5.5,
      }),
      ball: [0.39 + ((time * 0.06) % 0.16), 0.53 - swing * 0.2],
    };
  }

  return {
    head: [0.5 + swing * 0.25, 0.18],
    leftShoulder: [0.42 - swing, 0.32],
    rightShoulder: [0.58 - swing, 0.32],
    leftElbow: [0.34 - swing * 1.8, 0.47 + rand() * 0.02],
    rightElbow: [0.68 + side * swing, 0.45 - swing * 0.8],
    leftWrist: [0.31 - swing * 2.2, 0.62],
    rightWrist: [0.78 + side * swing * 1.5, 0.54 - swing],
    leftHip: [0.44 + swing * 0.35, 0.58],
    rightHip: [0.56 + swing * 0.35, 0.58],
    leftKnee: [0.39, 0.78 + rand() * 0.015],
    rightKnee: [0.61, 0.78 - rand() * 0.015],
    leftAnkle: [0.37, 0.94],
    rightAnkle: [0.63, 0.94],
    racketBox: normalizeRacketBox({
      cx: 0.76 + side * swing * 0.08,
      cy: 0.5 - swing * 0.28,
      width: 0.06,
      height: 0.2,
      angle: -0.35 + side * swing * 4.8,
    }),
    ball: [0.54 + swing, 0.18 - Math.abs(swing) * 0.8],
  };
}

function baselinePoseForFrame(frameIndex) {
  const fps = Math.max(1, Number(dom.fpsInput.value || 60));
  const pose = alignPoseToPlayerRoi(createPoseForTime(dom.childVideo, frameIndex / fps, 0));
  const detectedRacket = objectDetectionRuntime.racketFrameDetections.get(frameIndex);
  if (detectedRacket) pose.racketBox = normalizeRacketBox(detectedRacket);
  return addBallDetection(pose);
}

function correctionForFrameIndex(frameIndex) {
  const exact = poseCorrections.get(frameIndex);
  if (exact) return clonePose(exact);
  const frames = sortedCorrectionFrames();
  if (!frames.length) return null;
  const previous = frames.filter((frame) => frame < frameIndex).at(-1);
  const next = frames.find((frame) => frame > frameIndex);
  if (previous == null && next == null) return null;
  if (previous == null) return clonePose(poseCorrections.get(next));
  if (next == null) return clonePose(poseCorrections.get(previous));
  const ratio = (frameIndex - previous) / Math.max(1, next - previous);
  return interpolatePose(poseCorrections.get(previous), poseCorrections.get(next), ratio);
}

function poseJumpMagnitude(a, b) {
  if (!a || !b) return 0.12;
  const names = [
    "head",
    "leftShoulder",
    "rightShoulder",
    "leftElbow",
    "rightElbow",
    "leftWrist",
    "rightWrist",
    "leftHip",
    "rightHip",
    "leftKnee",
    "rightKnee",
    "leftAnkle",
    "rightAnkle",
    "ball",
  ];
  const distances = names
    .filter((name) => Array.isArray(a[name]) && Array.isArray(b[name]) && !isKeypointHidden(a, name) && !isKeypointHidden(b, name))
    .map((name) => Math.hypot(a[name][0] - b[name][0], a[name][1] - b[name][1]));
  if (a.racketBox && b.racketBox) {
    distances.push(Math.hypot(a.racketBox.cx - b.racketBox.cx, a.racketBox.cy - b.racketBox.cy) * 0.75);
    distances.push(Math.abs(a.racketBox.angle - b.racketBox.angle) * 0.015);
  }
  if (!distances.length) return 0.12;
  return distances.reduce((sum, value) => sum + value, 0) / distances.length;
}

function trackingQualityForFrame(frameIndex) {
  const total = Math.max(1, totalFrameCount(dom.childVideo));
  const anchors = sortedAnchorFrames();
  const source = poseCorrectionSources.get(frameIndex);
  if (!anchors.length) {
    return { score: 0, level: "low", nearestDistance: total, detectionConfidence: 0, jump: 1 };
  }
  const nearestDistance = Math.min(...anchors.map((anchor) => Math.abs(anchor - frameIndex)));
  const fps = Math.max(1, Number(dom.fpsInput.value || 60));
  const detectionConfidence = source && source !== "tracked"
    ? anchorSourceType(source) === "default"
      ? 0.94
      : 0.98
    : clamp(0.93 - (nearestDistance / Math.max(1, fps * 1.6)) * 0.24, 0.42, 0.93);
  const pose = correctionForFrameIndex(frameIndex);
  const previous = correctionForFrameIndex(Math.max(0, frameIndex - 1));
  const jump = poseJumpMagnitude(previous, pose);
  const distancePenalty = clamp((nearestDistance / Math.max(1, fps * 0.75)) * 38, 0, 46);
  const confidencePenalty = (1 - detectionConfidence) * 42;
  const jumpPenalty = clamp(jump * 180, 0, 32);
  const score = Math.round(clamp(100 - distancePenalty - confidencePenalty - jumpPenalty, 0, 100));
  return {
    score,
    level: score < 62 ? "low" : score < 78 ? "warn" : "good",
    nearestDistance,
    detectionConfidence: Number(detectionConfidence.toFixed(2)),
    jump: Number(jump.toFixed(3)),
  };
}

function lowQualityFrames(limit = 6) {
  const total = totalFrameCount(dom.childVideo);
  if (!total || !poseCorrections.size) return [];
  const lastFrame = maxFrameIndex(dom.childVideo);
  const fps = Math.max(1, Number(dom.fpsInput.value || 60));
  const step = Math.max(1, Math.round(fps / 12));
  const candidates = [];
  for (let frame = 0; frame <= lastFrame; frame += step) {
    const quality = trackingQualityForFrame(frame);
    if (quality.score < 78) candidates.push({ frame, ...quality });
  }
  return candidates
    .sort((a, b) => a.score - b.score || a.frame - b.frame)
    .slice(0, limit);
}

function trajectorySummary() {
  const frames = sortedCorrectionFrames();
  if (frames.length < 2) {
    return {
      racketSamples: frames.length,
      racketPath: 0,
      racketRotation: 0,
      ballSamples: 0,
      ballPath: 0,
      contactFrame: null,
      contactGap: null,
    };
  }
  let racketPath = 0;
  let racketRotation = 0;
  let ballPath = 0;
  let ballSamples = 0;
  let contactFrame = null;
  let contactGap = Infinity;
  frames.forEach((frame, index) => {
    const pose = poseCorrections.get(frame);
    const previousPose = index > 0 ? poseCorrections.get(frames[index - 1]) : null;
    if (pose?.racketBox && previousPose?.racketBox) {
      racketPath += Math.hypot(pose.racketBox.cx - previousPose.racketBox.cx, pose.racketBox.cy - previousPose.racketBox.cy);
      racketRotation += Math.abs(pose.racketBox.angle - previousPose.racketBox.angle);
    }
    if (isReliableBallPose(pose) && !isKeypointHidden(pose, "ball")) {
      ballSamples += 1;
      if (isReliableBallPose(previousPose) && !isKeypointHidden(previousPose, "ball")) {
        ballPath += Math.hypot(pose.ball[0] - previousPose.ball[0], pose.ball[1] - previousPose.ball[1]);
      }
      const hand = pose[racketHandName(pose)];
      if (Array.isArray(hand)) {
        const gap = Math.hypot(pose.ball[0] - hand[0], pose.ball[1] - hand[1]);
        if (gap < contactGap) {
          contactGap = gap;
          contactFrame = frame;
        }
      }
    }
  });
  return {
    racketSamples: frames.filter((frame) => poseCorrections.get(frame)?.racketBox).length,
    racketPath: Number(clamp(racketPath, 0, 5).toFixed(2)),
    racketRotation: Math.round(clamp(racketRotation * 57.2958, 0, 999)),
    ballSamples,
    ballPath: Number(clamp(ballPath, 0, 5).toFixed(2)),
    contactFrame,
    contactGap: Number(clamp(Number.isFinite(contactGap) ? contactGap : 0, 0, 1).toFixed(2)),
  };
}

function escapeDiagnosticText(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function modelShapeLabel(shape) {
  if (!Array.isArray(shape) || !shape.length) return `auto ${objectDetectionRuntime.modelSize}x${objectDetectionRuntime.modelSize}`;
  return shape.map((item) => item == null ? "?" : String(item)).join(" × ");
}

function keyframeFrameValue(item) {
  const direct = Number(item?.frame);
  if (Number.isFinite(direct)) return direct;
  const duration = Number(dom.childVideo?.duration || 0);
  const time = Number(item?.time || 0);
  if (!duration) return Math.round(time * Number(dom.videoFps?.value || 60));
  const totalFrames = Math.max(1, Math.round(duration * Number(dom.videoFps?.value || 60)));
  return Math.round(clamp(time / duration, 0, 1) * totalFrames);
}

function reviewDurationCheck() {
  if (!keypointVideoReady) {
    return { ok: null, label: "Review duration", detail: "not rendered yet" };
  }
  const rendered = Number(dom.annotatedVideo?.duration || 0);
  const source = Number(dom.childVideo?.duration || 0);
  const hasDuration = Number.isFinite(rendered) && rendered > 0;
  const closeEnough = !source || Math.abs(rendered - source) <= Math.max(0.35, source * 0.18);
  return {
    ok: hasDuration && closeEnough,
    label: "Review duration",
    detail: hasDuration
      ? `${rendered.toFixed(2)}s${source ? ` / source ${source.toFixed(2)}s` : ""}`
      : "missing video duration",
  };
}

function orphanPreviewMediaCount() {
  if (!document?.body) return 0;
  return Array.from(document.body.children).filter((node) => {
    if (!["CANVAS", "IMG", "VIDEO"].includes(node.tagName)) return false;
    if (node.id || node.closest?.(".modal")) return false;
    const rect = node.getBoundingClientRect?.();
    return rect && rect.width > 32 && rect.height > 32;
  }).length;
}

function regressionChecklistItems() {
  const frames = keyframes.map(keyframeFrameValue).filter(Number.isFinite);
  const distinctFrames = new Set(frames).size;
  const keyframesOk = !frames.length || distinctFrames > 1;
  const reviewCheck = reviewDurationCheck();
  const orphanCount = orphanPreviewMediaCount();
  const modelOk = objectDetectionRuntime.ready && !objectDetectionRuntime.failed;
  return [
    {
      ok: keyframesOk,
      label: "Keyframes",
      detail: frames.length ? `${distinctFrames}/${frames.length} distinct frames` : "not generated",
    },
    reviewCheck,
    {
      ok: orphanCount === 0,
      label: "Preview DOM",
      detail: orphanCount ? `${orphanCount} orphan media element${orphanCount === 1 ? "" : "s"}` : "clean",
    },
    {
      ok: modelOk,
      label: "YOLO model",
      detail: modelOk ? "active" : objectDetectionRuntime.loading ? "loading" : "fallback",
    },
  ];
}

function modelDiagnosticsRows(track) {
  return [
    ["Model", objectDetectionRuntime.modelPath],
    ["State", objectDetectionRuntime.ready && !objectDetectionRuntime.failed ? "active" : objectDetectionRuntime.loading ? "loading" : "fallback"],
    ["Backend", objectDetectionRuntime.backend || "--"],
    ["Input", `${objectDetectionRuntime.inputName || "images"} · ${modelShapeLabel(objectDetectionRuntime.inputShape)}`],
    ["Outputs", objectDetectionRuntime.outputNames?.length ? objectDetectionRuntime.outputNames.join(", ") : "--"],
    ["Latest racket", objectDetectionRuntime.latestRacketConfidence == null
      ? "--"
      : `conf ${objectDetectionRuntime.latestRacketConfidence.toFixed(2)} · frame ${objectDetectionRuntime.latestDetectionFrame ?? "--"}`],
    ["Cached frames", `${objectDetectionRuntime.racketFrameDetections.size} model detections · ${track.racketSamples || 0} track frames`],
  ];
}

function statusMark(ok) {
  if (ok === null) return "pending";
  return ok ? "pass" : "fail";
}

function objectDetectorStatusHtml(track) {
  const isLoading = objectDetectionRuntime.mode === "loading";
  const isFallback = objectDetectionRuntime.mode === "poseFallback" || objectDetectionRuntime.failed;
  const racketLabel = isLoading
    ? "Racket: loading YOLO-seg model"
    : isFallback
      ? `Racket: pose fallback; model not active`
      : `Racket: ${objectDetectionRuntime.racketModel}`;
  const ballLabel = ballAnchorFrames.size
    ? `Ball: tracked from ${ballAnchorFrames.size} anchor${ballAnchorFrames.size === 1 ? "" : "s"}`
    : isLoading
      ? "Ball: waiting for first anchor"
      : isFallback
      ? "Ball: add first anchor to start tracker"
      : `Ball: ${objectDetectionRuntime.ballModel}`;
  const statusClass = isFallback ? "fallback" : "ready";
  return `
    <span class="detector-pill ready">Body: MediaPipe Pose</span>
    <span class="detector-pill ${statusClass}">${racketLabel}</span>
    <span class="detector-pill ${statusClass}">${ballLabel}</span>
    <div class="model-diagnostics" aria-label="Model diagnostics">
      ${modelDiagnosticsRows(track).map(([label, value]) => `
        <span><strong>${escapeDiagnosticText(label)}</strong>${escapeDiagnosticText(value)}</span>
      `).join("")}
    </div>
    <div class="regression-checklist" aria-label="Regression checks">
      ${regressionChecklistItems().map((item) => `
        <span class="check-item ${statusMark(item.ok)}">
          <strong>${escapeDiagnosticText(item.label)}</strong>${escapeDiagnosticText(item.detail)}
        </span>
      `).join("")}
    </div>
    <span class="detector-note">${isLoading
        ? `Loading ${objectDetectionRuntime.modelPath}.`
        : isFallback
        ? `Could not load ${objectDetectionRuntime.modelPath}: ${objectDetectionRuntime.lastError || "unknown error"}. Racket may use fallback estimates; ball tracking waits for the first ball anchor.`
        : `YOLO-seg active. Latest racket confidence ${objectDetectionRuntime.lastRacketBox?.confidence?.toFixed?.(2) || "--"}. Track has ${track.racketSamples} racket frames.`}</span>
  `;
}

function updateObjectDetectorStatus() {
  if (!dom.objectDetectorStatus) return;
  dom.objectDetectorStatus.innerHTML = objectDetectorStatusHtml(trajectorySummary());
}

function updateTrackingQualityPanel() {
  if (!dom.trackingQualityPanel) return;
  if (!poseCorrections.size) {
    dom.trackingQualityScore.textContent = "Tracking quality --";
    dom.trackingQualityHint.textContent = "Review Anchors -> Generate Track -> Inspect Low-Confidence Frames.";
    dom.lowQualityFrames.innerHTML = "";
    if (dom.objectDetectorStatus) dom.objectDetectorStatus.innerHTML = objectDetectorStatusHtml({
      racketSamples: 0,
      ballSamples: 0,
    });
    dom.trajectorySummary.innerHTML = "";
    return;
  }
  const frame = currentFrameIndex();
  const quality = trackingQualityForFrame(frame);
  dom.trackingQualityScore.textContent = `Frame ${frame} quality ${quality.score}`;
  dom.trackingQualityScore.className = quality.level;
  dom.trackingQualityHint.textContent = `Nearest anchor ${quality.nearestDistance} frame${quality.nearestDistance === 1 ? "" : "s"} away; confidence ${quality.detectionConfidence}.`;
  const lowFrames = lowQualityFrames(6);
  dom.lowQualityFrames.innerHTML = lowFrames.length
    ? lowFrames.map((item) => `
        <button class="quality-chip ${item.level}" type="button" data-frame="${item.frame}">
          Frame ${item.frame} · ${item.score}
        </button>
      `).join("")
    : `<span class="quality-chip good">No low-quality frames found</span>`;
  const track = trajectorySummary();
  if (dom.objectDetectorStatus) dom.objectDetectorStatus.innerHTML = objectDetectorStatusHtml(track);
  dom.trajectorySummary.innerHTML = `
    <span>Racket estimate ${track.racketSamples} frames · path ${track.racketPath} · rotation ${track.racketRotation}°</span>
    <span>Ball ${ballAnchorFrames.size ? `tracked from ${ballAnchorFrames.size} anchor${ballAnchorFrames.size === 1 ? "" : "s"}` : "waiting for first anchor"} · ${track.ballSamples} frames · toss path ${track.ballPath}${track.contactFrame == null ? "" : ` · contact window f${track.contactFrame}`}</span>
  `;
}

function correctionForVideoTime(video = dom.childVideo) {
  return correctionForFrameIndex(currentFrameIndex(video));
}

function shouldPreferCurrentRacketDetection(frameIndex, pose = null) {
  if (racketManualFrames.has(frameIndex)) return false;
  if (
    poseRuntime.editMode
    && poseRuntime.editedPoseFrame === frameIndex
    && pose === poseRuntime.editedPose
    && pose?.racketBox
  ) {
    return false;
  }
  if (poseCorrectionSources.get(frameIndex) === "userAnchor" && pose?.racketBox) {
    return false;
  }
  return true;
}

function applyCurrentFrameRacketDetection(pose, frameIndex = currentFrameIndex(dom.childVideo)) {
  const nextPose = clonePose(pose);
  const detectedBox = objectDetectionRuntime.racketFrameDetections.get(frameIndex);
  if (detectedBox && shouldPreferCurrentRacketDetection(frameIndex, pose)) {
    nextPose.racketBox = normalizeRacketBox(detectedBox);
  }
  return nextPose;
}

function currentFramePose() {
  const frame = currentFrameIndex(dom.childVideo);
  const basePose = clonePose(
    correctionForVideoTime()
      || poseRuntime.childPose
      || createPose(dom.childVideo, 0),
  );
  const trackedPose = addTrackedObjects(applyCurrentFrameRacketDetection(basePose, frame));
  return applyBallAnchorStart(trackedPose, frame);
}

function currentEditablePose() {
  const frame = currentFrameIndex(dom.childVideo);
  const editablePoseForFrame = poseRuntime.editedPoseFrame === frame
    ? poseRuntime.editedPose
    : null;
  return addTrackedObjects(clonePose(editablePoseForFrame || currentFramePose()));
}

function setEditedPoseForCurrentFrame(pose = currentFramePose()) {
  poseRuntime.editedPose = clonePose(pose);
  poseRuntime.editedPoseFrame = currentFrameIndex(dom.childVideo);
  syncRacketBoxControls();
}

function refreshEditablePoseFromFrame() {
  if (!poseRuntime.editMode || poseRuntime.draggingPoint) return;
  setEditedPoseForCurrentFrame(currentFramePose());
}

function refreshRacketDetectionForCurrentEditFrame() {
  if (!poseRuntime.editMode || poseRuntime.draggingPoint || !roiRuntime.confirmed) return;
  const frame = currentFrameIndex(dom.childVideo);
  detectRacketWithYolo(dom.childVideo, { force: true }).then(() => {
    if (!poseRuntime.editMode || poseRuntime.draggingPoint) return;
    if (currentFrameIndex(dom.childVideo) !== frame) return;
    setEditedPoseForCurrentFrame(currentFramePose());
    drawPoseLoop();
  }).catch(() => {});
}

function scheduleAutoSmoothTrack(reason = "Frame correction updated.", localFrame = null) {
  if (!roiRuntime.confirmed || !keyframes.length || !poseCorrections.size) return;
  if (autoSmoothTimer) window.clearTimeout(autoSmoothTimer);
  autoSmoothTimer = window.setTimeout(async () => {
    autoSmoothTimer = null;
    if (poseRuntime.draggingPoint) {
      scheduleAutoSmoothTrack(reason, localFrame);
      return;
    }
    await generateSmoothTrack({ auto: true, reason, localFrame });
  }, 420);
}

function markFrameNeedsSmooth(frame = currentFrameIndex()) {
  pendingSmoothFrame = frame;
  keypointTrackingReady = false;
}

function smoothPendingFrameBeforeLeaving(nextFrame = null) {
  if (pendingSmoothFrame === null) return;
  if (nextFrame !== null && Number(nextFrame) === pendingSmoothFrame) return;
  const frame = pendingSmoothFrame;
  pendingSmoothFrame = null;
  if (dom.roiStatus) dom.roiStatus.textContent = `Frame ${frame} saved. Smoothing nearby frames after frame change...`;
  scheduleAutoSmoothTrack(`Frame ${frame} corrected. Updating nearby frames after frame change.`, frame);
}

function saveCurrentPoseCorrection(source = "userAnchor", options = {}) {
  if (!poseRuntime.editedPose) return;
  const frame = currentFrameIndex();
  if (poseRuntime.editedPoseFrame !== frame) {
    refreshEditablePoseFromFrame();
  }
  const normalizedSource = source === "manual" || source === "keyframe" ? "userAnchor" : source;
  const finalSource = normalizedSource === "userAnchor" && frame === suggestedAnchorFrame ? "suggestedAnchor" : normalizedSource;
  if (dom.keypointSelect?.value === "ball" && Array.isArray(poseRuntime.editedPose.ball)) {
    ballAnchorFrames.add(frame);
    poseRuntime.editedPose.ballSource = "manualBallAnchor";
    poseRuntime.editedPose.ballMethod = "User-selected ball anchor; later frames use tracker";
    poseRuntime.editedPose.ballConfidence = 0.98;
  }
  poseCorrections.set(frame, clonePose(poseRuntime.editedPose));
  analysisStageImageCache.clear();
  poseCorrectionSources.set(frame, finalSource);
  if (finalSource !== "tracked") {
    updateNearestKeyframeImageForFrame(frame, poseRuntime.editedPose);
  }
  if (finalSource !== "tracked") {
    keypointTrackingReady = false;
    if (options.autoSmooth !== false) {
      scheduleAutoSmoothTrack(`Frame ${frame} corrected. Updating nearby frames.`, frame);
    } else if (options.smoothOnFrameChange) {
      markFrameNeedsSmooth(frame);
    }
  }
  invalidateKeypointVideo("Frame corrections changed. Render a new review video.");
  if (dom.roiStatus) dom.roiStatus.textContent = `Frame ${frame} correction saved.`;
  updateWorkflow();
}

function updateNearestKeyframeImageForFrame(frame, pose) {
  if (!keyframes.length || !Number.isFinite(frame)) return false;
  const fps = Math.max(1, Number(dom.fpsInput?.value || 60));
  const tolerance = Math.max(3, Math.round(fps * 0.1));
  const nearest = keyframes
    .map((keyframe, index) => ({
      index,
      distance: Math.abs(keyframeToFrameIndex(keyframe) - frame),
    }))
    .sort((a, b) => a.distance - b.distance)[0];
  if (!nearest || nearest.distance > tolerance) return false;

  keyframes[nearest.index].image = captureAnalysisFrame(clonePose(pose))
    || keyframes[nearest.index].image
    || fallbackStageSnapshotForStage(keyframes[nearest.index]);
  selectedKeyframeIndex = nearest.index;
  renderKeyframes();
  return true;
}

function syncRacketBoxControls() {
  if (!dom.racketBoxX || !poseRuntime.editMode) return;
  if ([dom.racketBoxX, dom.racketBoxY, dom.racketBoxAngle, dom.racketBoxHeight, dom.racketBoxWidth].includes(document.activeElement)) {
    return;
  }
  const box = normalizeRacketBox((poseRuntime.editedPose || currentEditablePose()).racketBox);
  dom.racketBoxX.value = box.cx.toFixed(3);
  dom.racketBoxY.value = box.cy.toFixed(3);
  dom.racketBoxAngle.value = box.angle.toFixed(2);
  dom.racketBoxHeight.value = box.height.toFixed(3);
  dom.racketBoxWidth.value = box.width.toFixed(3);
  syncKeypointVisibilityControls();
}

function syncKeypointVisibilityControls() {
  if (!dom.toggleKeypointVisibilityButton || !poseRuntime.editMode) return;
  const name = dom.keypointSelect.value;
  const canHide = !name.startsWith("racket");
  const hidden = isKeypointHidden(poseRuntime.editedPose, name);
  dom.toggleKeypointVisibilityButton.disabled = !canHide;
  dom.toggleKeypointVisibilityButton.textContent = hidden ? "Show Selected Point" : "Hide Selected Point";
  dom.keypointVisibilityStatus.textContent = canHide
    ? hidden
      ? "Hidden on this frame"
      : "Visible on this frame"
    : "Racket box uses handles, not point visibility";
}

function toggleSelectedKeypointVisibility() {
  if (!poseRuntime.editMode) return;
  if (!poseRuntime.editedPose || poseRuntime.editedPoseFrame !== currentFrameIndex()) {
    setEditedPoseForCurrentFrame(currentEditablePose());
  }
  const name = dom.keypointSelect.value;
  const hidden = isKeypointHidden(poseRuntime.editedPose, name);
  setKeypointHidden(poseRuntime.editedPose, name, !hidden);
  saveCurrentPoseCorrection();
  syncKeypointVisibilityControls();
  dom.roiStatus.textContent = `${name} ${hidden ? "shown" : "hidden"} on frame ${currentFrameIndex()}.`;
}

async function saveKeyframeAnchor() {
  if (!roiRuntime.confirmed || !keyframes.length) {
    dom.roiStatus.textContent = "Detect key frames before saving keyframe anchors.";
    return;
  }
  dom.childVideo.pause();
  if (!poseRuntime.editMode) toggleKeypointEdit();
  if (!poseRuntime.editedPose || poseRuntime.editedPoseFrame !== currentFrameIndex()) {
    setEditedPoseForCurrentFrame(currentEditablePose());
  }
  const frame = currentFrameIndex();
  if (dom.keypointSelect?.value === "ball" && Array.isArray(poseRuntime.editedPose.ball)) {
    ballAnchorFrames.add(frame);
    poseRuntime.editedPose.ballSource = "manualBallAnchor";
    poseRuntime.editedPose.ballMethod = "User-selected ball anchor; later frames use tracker";
    poseRuntime.editedPose.ballConfidence = 0.98;
  }
  poseCorrections.set(frame, clonePose(poseRuntime.editedPose));
  analysisStageImageCache.clear();
  poseCorrectionSources.set(frame, frame === suggestedAnchorFrame ? "suggestedAnchor" : "userAnchor");
  keypointTrackingReady = false;
  keypointVideoReady = false;
  motionAnalysisReady = false;

  updateNearestKeyframeImageForFrame(frame, poseRuntime.editedPose);

  scheduleAutoSmoothTrack(`Key frame anchor saved at frame ${frame}. Updating nearby frames.`, frame);
  dom.roiStatus.textContent = `Key frame anchor saved at frame ${frame}. Nearby frames will update automatically.`;
  updateWorkflow();
}

async function ensureKeyframeAnchors() {
  const anchors = sortedAnchorFrames();
  if (anchors.length) return anchors;
  seedDefaultAnchorFramesFromKeyframes();
  return sortedAnchorFrames();
}

function interpolatedPoseFromAnchors(frameIndex, anchors) {
  if (!anchors.length) return null;
  if (poseCorrections.has(frameIndex) && poseCorrectionSources.get(frameIndex) !== "tracked") {
    return clonePose(poseCorrections.get(frameIndex));
  }
  const previous = anchors.filter((frame) => frame <= frameIndex).at(-1);
  const next = anchors.find((frame) => frame >= frameIndex);
  if (previous == null && next == null) return null;
  const frameBaseline = baselinePoseForFrame(frameIndex);
  if (previous == null) {
    return offsetPoseByBaselineMotion(
      poseCorrections.get(next),
      baselinePoseForFrame(next),
      frameBaseline,
    );
  }
  if (next == null) {
    return offsetPoseByBaselineMotion(
      poseCorrections.get(previous),
      baselinePoseForFrame(previous),
      frameBaseline,
    );
  }
  if (previous === next) return clonePose(poseCorrections.get(previous));
  const ratio = (frameIndex - previous) / Math.max(1, next - previous);
  const fromPrevious = offsetPoseByBaselineMotion(
    poseCorrections.get(previous),
    baselinePoseForFrame(previous),
    frameBaseline,
  );
  const fromNext = offsetPoseByBaselineMotion(
    poseCorrections.get(next),
    baselinePoseForFrame(next),
    frameBaseline,
  );
  return interpolatePose(fromPrevious, fromNext, ratio);
}

function ballFromAnchorBaseline(anchorFrame, frameIndex) {
  const anchorPose = poseCorrections.get(anchorFrame);
  if (!Array.isArray(anchorPose?.ball)) return null;
  const anchorBaseline = baselinePoseForFrame(anchorFrame);
  const frameBaseline = baselinePoseForFrame(frameIndex);
  if (!Array.isArray(anchorBaseline?.ball) || !Array.isArray(frameBaseline?.ball)) {
    return [...anchorPose.ball];
  }
  return [
    clamp(anchorPose.ball[0] + frameBaseline.ball[0] - anchorBaseline.ball[0], 0, 1),
    clamp(anchorPose.ball[1] + frameBaseline.ball[1] - anchorBaseline.ball[1], 0, 1),
  ];
}

function trackedBallForFrame(frameIndex, previousBall = null) {
  const ballAnchors = sortedBallAnchorFrames();
  if (!ballAnchors.length) return null;
  if (ballAnchorFrames.has(frameIndex)) {
    const anchorBall = poseCorrections.get(frameIndex)?.ball;
    return Array.isArray(anchorBall) ? [...anchorBall] : null;
  }

  const previous = ballAnchors.filter((frame) => frame <= frameIndex).at(-1);
  const next = ballAnchors.find((frame) => frame >= frameIndex);
  if (previous == null) return null;

  let trackedBall = null;
  if (next == null || previous === next) {
    trackedBall = ballFromAnchorBaseline(previous, frameIndex);
  } else {
    const fromPrevious = ballFromAnchorBaseline(previous, frameIndex);
    const fromNext = ballFromAnchorBaseline(next, frameIndex);
    const ratio = (frameIndex - previous) / Math.max(1, next - previous);
    if (fromPrevious && fromNext) {
      trackedBall = [
        fromPrevious[0] + (fromNext[0] - fromPrevious[0]) * ratio,
        fromPrevious[1] + (fromNext[1] - fromPrevious[1]) * ratio,
      ];
    } else {
      trackedBall = fromPrevious || fromNext;
    }
  }

  if (!trackedBall) return null;
  if (previousBall && !ballAnchorFrames.has(frameIndex)) {
    return [
      clamp(previousBall[0] * 0.28 + trackedBall[0] * 0.72, 0, 1),
      clamp(previousBall[1] * 0.28 + trackedBall[1] * 0.72, 0, 1),
    ];
  }
  return trackedBall;
}

function applyBallAnchorStart(pose, frameIndex, previousBall = null) {
  if (!ballAnchorFrames.size) return clonePose(pose || {});
  const firstAnchor = firstBallAnchorFrame();
  if (firstAnchor == null || frameIndex < firstAnchor) return removeBallFromPose(pose);

  const nextPose = clonePose(pose || {});
  const trackedBall = trackedBallForFrame(frameIndex, previousBall);
  if (!trackedBall) return removeBallFromPose(nextPose);

  nextPose.ball = trackedBall;
  nextPose.ballConfidence = ballAnchorFrames.has(frameIndex) ? 0.98 : 0.82;
  nextPose.ballSource = ballAnchorFrames.has(frameIndex) ? "manualBallAnchor" : "trackedFromManualAnchor";
  nextPose.ballMethod = ballAnchorFrames.has(frameIndex)
    ? "User-selected ball anchor; later frames use tracker"
    : "Manual ball anchor + motion tracker";
  if (nextPose.hiddenKeypoints) delete nextPose.hiddenKeypoints.ball;
  return nextPose;
}

function trackingWeightForFrame(frameIndex, anchors) {
  const previous = anchors.filter((frame) => frame < frameIndex).at(-1);
  const next = anchors.find((frame) => frame > frameIndex);
  if (previous == null || next == null) return 0.28;

  const span = Math.max(1, next - previous);
  const ratio = (frameIndex - previous) / span;
  const centerConfidence = 1 - Math.abs(ratio - 0.5) * 2;
  return clamp(0.52 + centerConfidence * 0.18, 0.52, 0.7);
}

function racketBoxDelta(anchorBox, detectionBox) {
  if (!anchorBox || !detectionBox) return null;
  return {
    cx: anchorBox.cx - detectionBox.cx,
    cy: anchorBox.cy - detectionBox.cy,
    width: anchorBox.width - detectionBox.width,
    height: anchorBox.height - detectionBox.height,
    angle: anchorBox.angle - detectionBox.angle,
  };
}

function interpolateRacketDelta(previousDelta, nextDelta, ratio) {
  if (!previousDelta && !nextDelta) return null;
  if (!previousDelta) return { ...nextDelta };
  if (!nextDelta) return { ...previousDelta };
  return {
    cx: previousDelta.cx + (nextDelta.cx - previousDelta.cx) * ratio,
    cy: previousDelta.cy + (nextDelta.cy - previousDelta.cy) * ratio,
    width: previousDelta.width + (nextDelta.width - previousDelta.width) * ratio,
    height: previousDelta.height + (nextDelta.height - previousDelta.height) * ratio,
    angle: previousDelta.angle + (nextDelta.angle - previousDelta.angle) * ratio,
  };
}

function correctionWeightForRacketFrame(frameIndex, anchors) {
  const nearest = anchors.length ? Math.min(...anchors.map((frame) => Math.abs(frame - frameIndex))) : Infinity;
  const fps = Math.max(1, Number(dom.fpsInput.value || 60));
  if (nearest <= 1) return 1;
  return clamp(0.38 - (nearest / Math.max(1, fps * 1.2)) * 0.2, 0.12, 0.38);
}

function anchorDeltaForRacketFrame(frameIndex, anchors) {
  const anchorsWithDetection = anchors.filter((frame) => {
    const anchorBox = poseCorrections.get(frame)?.racketBox;
    const detectionBox = objectDetectionRuntime.racketFrameDetections.get(frame);
    return anchorBox && detectionBox;
  });
  if (!anchorsWithDetection.length) return null;
  const previous = anchorsWithDetection.filter((frame) => frame <= frameIndex).at(-1);
  const next = anchorsWithDetection.find((frame) => frame >= frameIndex);
  if (previous == null && next == null) return null;
  const previousDelta = previous == null ? null : racketBoxDelta(
    normalizeRacketBox(poseCorrections.get(previous).racketBox),
    normalizeRacketBox(objectDetectionRuntime.racketFrameDetections.get(previous)),
  );
  const nextDelta = next == null ? null : racketBoxDelta(
    normalizeRacketBox(poseCorrections.get(next).racketBox),
    normalizeRacketBox(objectDetectionRuntime.racketFrameDetections.get(next)),
  );
  if (previous == null || next == null || previous === next) return previousDelta || nextDelta;
  const ratio = (frameIndex - previous) / Math.max(1, next - previous);
  return interpolateRacketDelta(previousDelta, nextDelta, ratio);
}

function applyRacketDelta(box, delta, weight) {
  if (!box || !delta) return normalizeRacketBox(box);
  return normalizeRacketBox({
    ...box,
    cx: box.cx + delta.cx * weight,
    cy: box.cy + delta.cy * weight,
    width: box.width + delta.width * weight,
    height: box.height + delta.height * weight,
    angle: box.angle + delta.angle * weight,
    confidence: box.confidence,
    source: box.source || "yoloSeg",
    method: `${box.method || "YOLO-seg"} + anchor micro-adjust`,
  });
}

function detectionLedRacketBoxForFrame(frameIndex, anchors, previousBox = null) {
  const detectionBox = objectDetectionRuntime.racketFrameDetections.get(frameIndex);
  if (!detectionBox) return null;
  const delta = anchorDeltaForRacketFrame(frameIndex, anchors);
  const weight = correctionWeightForRacketFrame(frameIndex, anchors);
  const adjusted = applyRacketDelta(normalizeRacketBox(detectionBox), delta, weight);
  if (!previousBox) return adjusted;
  return normalizeRacketBox({
    ...adjusted,
    cx: previousBox.cx * 0.22 + adjusted.cx * 0.78,
    cy: previousBox.cy * 0.22 + adjusted.cy * 0.78,
    width: previousBox.width * 0.18 + adjusted.width * 0.82,
    height: previousBox.height * 0.18 + adjusted.height * 0.82,
    angle: previousBox.angle * 0.18 + adjusted.angle * 0.82,
    confidence: adjusted.confidence,
    source: "yoloSegTracked",
    method: "YOLO-seg detection primary; tracking smooths jitter",
  });
}

async function detectRacketForFrame(frameIndex, { preserveTime = false } = {}) {
  if (objectDetectionRuntime.racketFrameDetections.has(frameIndex)) {
    return objectDetectionRuntime.racketFrameDetections.get(frameIndex);
  }
  const video = dom.childVideo;
  if (!video?.src || video.readyState < 2) return null;
  const fps = Math.max(1, Number(dom.fpsInput.value || 60));
  const originalTime = video.currentTime || 0;
  const wasPaused = video.paused;
  video.pause();
  video.currentTime = clamp(frameIndex / fps, 0, Math.max(0, (video.duration || 0) - 0.001));
  await waitForVideoSeek(video);
  const box = await detectRacketWithYolo(video, { force: true });
  if (preserveTime) {
    video.currentTime = originalTime;
    await waitForVideoSeek(video);
    if (!wasPaused) video.play();
  }
  return box;
}

function smoothRangeForFrame(frameIndex, anchors, total) {
  const localRadius = Math.max(18, Math.round(Math.max(1, Number(dom.fpsInput.value || 60)) * 0.45));
  const previousAnchor = anchors.filter((frame) => frame < frameIndex).at(-1);
  const nextAnchor = anchors.find((frame) => frame > frameIndex);
  const leftBoundary = previousAnchor ?? 0;
  const rightBoundary = nextAnchor ?? total;
  const boundedSpan = rightBoundary - leftBoundary;
  if (boundedSpan > 0 && boundedSpan <= localRadius * 2) {
    return { start: leftBoundary, end: rightBoundary };
  }
  return {
    start: Math.max(leftBoundary, frameIndex - localRadius, 0),
    end: Math.min(rightBoundary, frameIndex + localRadius, total),
  };
}

async function generateSmoothTrack(options = {}) {
  if (!roiRuntime.confirmed || !keyframes.length) {
    dom.roiStatus.textContent = "Confirm ROI and detect key frames before smoothing.";
    return;
  }
  if (!options.auto && poseRuntime.editMode && poseRuntime.editedPose) {
    saveCurrentPoseCorrection("userAnchor", { autoSmooth: false });
  }

  setStatus(options.auto ? "Auto smoothing" : "Smoothing track", "running");
  if (dom.generateTrackedFramesButton) dom.generateTrackedFramesButton.disabled = true;
  const anchors = await ensureKeyframeAnchors();
  if (!anchors.length) {
    dom.roiStatus.textContent = "Save at least one key frame anchor before smoothing.";
    if (dom.generateTrackedFramesButton) dom.generateTrackedFramesButton.disabled = false;
    setStatus("Ready", "done");
    updateWorkflow();
    return;
  }

  const total = totalFrameCount(dom.childVideo);
  const lastFrame = maxFrameIndex(dom.childVideo);
  const localFrame = Number.isFinite(Number(options.localFrame))
    ? clampFrameIndex(Number(options.localFrame), dom.childVideo)
    : null;
  const localRange = localFrame === null ? { start: 0, end: lastFrame } : smoothRangeForFrame(localFrame, anchors, lastFrame);

  Array.from(poseCorrectionSources.entries()).forEach(([frame, source]) => {
    if (source === "tracked") {
      if (localFrame === null || (frame >= localRange.start && frame <= localRange.end)) {
        poseCorrectionSources.delete(frame);
        poseCorrections.delete(frame);
      }
    }
  });

  let previousSmoothed = localRange.start > 0 ? correctionForFrameIndex(localRange.start - 1) : null;
  const originalTime = dom.childVideo.currentTime || 0;
  const wasPaused = dom.childVideo.paused;
  dom.childVideo.pause();
  try {
    for (let frame = localRange.start; frame <= localRange.end; frame += 1) {
      if (frame % 12 === 0) {
        dom.trackingStatus.textContent = localFrame === null
          ? `Detecting racket frame ${frame} / ${total}...`
          : `Updating nearby frame ${frame} / ${localRange.end}...`;
      }
      await detectRacketForFrame(frame);
      if (anchors.includes(frame)) {
        const anchorPose = clonePose(poseCorrections.get(frame));
        if (poseCorrectionSources.get(frame) === "defaultAnchor") {
          const racketBox = detectionLedRacketBoxForFrame(frame, anchors, previousSmoothed?.racketBox);
          if (racketBox) {
            anchorPose.racketBox = racketBox;
            poseCorrections.set(frame, clonePose(anchorPose));
          }
        }
        const ballScopedAnchorPose = applyBallAnchorStart(anchorPose, frame, previousSmoothed?.ball);
        poseCorrections.set(frame, clonePose(ballScopedAnchorPose));
        previousSmoothed = ballScopedAnchorPose;
        continue;
      }
      const interpolated = interpolatedPoseFromAnchors(frame, anchors);
      if (!interpolated) continue;
      const trackingWeight = trackingWeightForFrame(frame, anchors);
      const trackedPose = previousSmoothed ? smoothPose(previousSmoothed, interpolated, trackingWeight) : interpolated;
      const racketBox = detectionLedRacketBoxForFrame(frame, anchors, previousSmoothed?.racketBox);
      if (racketBox) trackedPose.racketBox = racketBox;
      const ballScopedTrackedPose = applyBallAnchorStart(trackedPose, frame, previousSmoothed?.ball);
      poseCorrections.set(frame, ballScopedTrackedPose);
      poseCorrectionSources.set(frame, "tracked");
      previousSmoothed = ballScopedTrackedPose;
    }
  } finally {
    dom.childVideo.currentTime = originalTime;
    await waitForVideoSeek(dom.childVideo);
    if (!wasPaused) dom.childVideo.play();
  }

  keypointTrackingReady = true;
  keypointVideoReady = false;
  motionAnalysisReady = false;
  const recommendedGap = findLongAnchorGap(anchors);
  updateSuggestedAnchor(recommendedGap);
  if (poseRuntime.editMode && !poseRuntime.draggingPoint) {
    refreshEditablePoseFromFrame();
  }
  if (dom.generateTrackedFramesButton) dom.generateTrackedFramesButton.disabled = false;
  setStatus("Track ready", "done");
  dom.roiStatus.textContent = options.auto
    ? recommendedGap
      ? `${options.reason || "Correction applied."} Long low-confidence gap detected; start fixing around frame ${recommendedGap.frame}.`
      : localFrame === null
        ? `${options.reason || "Correction applied."} Track was smoothed automatically.`
        : `${options.reason || "Correction applied."} Nearby frames ${localRange.start}-${localRange.end} were smoothed.`
    : recommendedGap
      ? `Track generated, but frame ${recommendedGap.frame} is in a long low-confidence gap. Add an anchor there.`
      : `Smooth body, racket, and ball track generated from ${anchors.length} edited anchor${anchors.length === 1 ? "" : "s"}. Review it frame-by-frame or render video.`;
  updateWorkflow();
}

function applyRacketBoxControls(event) {
  if (!poseRuntime.editMode) return;
  if (!poseRuntime.editedPose || poseRuntime.editedPoseFrame !== currentFrameIndex()) {
    setEditedPoseForCurrentFrame(currentEditablePose());
  }
  racketManualFrames.add(currentFrameIndex());
  const box = normalizeRacketBox(poseRuntime.editedPose.racketBox);
  const target = event?.currentTarget;
  const nextBox = { ...box, confidence: 0.96 };
  if (target === dom.racketBoxX) nextBox.cx = Number(dom.racketBoxX.value);
  else if (target === dom.racketBoxY) nextBox.cy = Number(dom.racketBoxY.value);
  else if (target === dom.racketBoxAngle) nextBox.angle = Number(dom.racketBoxAngle.value);
  else if (target === dom.racketBoxHeight) nextBox.height = Number(dom.racketBoxHeight.value);
  else if (target === dom.racketBoxWidth) nextBox.width = Number(dom.racketBoxWidth.value);
  poseRuntime.editedPose.racketBox = normalizeRacketBox(nextBox);
  dom.keypointSelect.value = "racketBox";
  saveCurrentPoseCorrection("userAnchor", { autoSmooth: false, smoothOnFrameChange: true });
  dom.roiStatus.textContent = `Racket box updated on frame ${currentFrameIndex()}. Smooth will run when you change frames.`;
  drawPoseLoop();
}

function syncFrameScrubber() {
  if (!dom.frameScrubber || !dom.childVideo.duration) return;
  const totalFrames = totalFrameCount(dom.childVideo);
  const frame = clampFrameIndex(currentFrameIndex(dom.childVideo), dom.childVideo);
  dom.frameScrubber.max = String(maxFrameIndex(dom.childVideo));
  dom.frameScrubber.value = String(frame);
  if (dom.frameNumber) dom.frameNumber.textContent = String(frame);
  if (dom.frameTotal) dom.frameTotal.textContent = String(totalFrames);
  if (
    poseRuntime.editMode
    && !poseRuntime.draggingPoint
    && (!dom.childVideo.paused || poseRuntime.editedPoseFrame !== frame)
  ) {
    refreshEditablePoseFromFrame();
  }
  syncRacketBoxControls();
  updateTrackingQualityPanel();
  updateEditPlaybackButton();
}

function nearestKeypoint(pointer) {
  const pose = poseRuntime.editedPose;
  if (!pose) return null;

  const hitRadius = 34;
  let bestKeypoint = null;
  const selectedKeypoint = dom.keypointSelect?.value;
  if (
    selectedKeypoint
    && !selectedKeypoint.startsWith("racket")
    && Array.isArray(pose[selectedKeypoint])
    && !isKeypointHidden(pose, selectedKeypoint)
  ) {
    const [x, y] = sourceToPlayerFrame(pose[selectedKeypoint], dom.childVideo, pointer.rect);
    const distance = Math.hypot(pointer.x - x, pointer.y - y);
    if (distance <= hitRadius * 1.25) {
      return selectedKeypoint;
    }
  }

  Object.keys(pose).forEach((name) => {
    if (name === "racketBox" || name.startsWith("racket")) return;
    if (isKeypointHidden(pose, name)) return;
    if (!Array.isArray(pose[name])) return;
    const [x, y] = sourceToPlayerFrame(pose[name], dom.childVideo, pointer.rect);
    const distance = Math.hypot(pointer.x - x, pointer.y - y);
    if (!bestKeypoint || distance < bestKeypoint.distance) {
      bestKeypoint = { name, distance };
    }
  });

  if (bestKeypoint && bestKeypoint.distance <= hitRadius) {
    return bestKeypoint.name;
  }

  let bestRacketHandle = null;
  const displayedRacketBox = visualRacketBoxForFrame(pose, dom.childVideo);
  if (displayedRacketBox) {
    const handles = racketBoxHandles(displayedRacketBox, dom.childVideo, pointer.rect);
    [
      ["racketBox", handles.center],
      ["racketRotate", handles.rotate],
      ...Object.entries(handles.corners),
      ...Object.entries(handles.edges),
    ].forEach(([name, handle]) => {
      const distance = Math.hypot(pointer.x - handle[0], pointer.y - handle[1]);
      if (distance <= hitRadius && (!bestRacketHandle || distance < bestRacketHandle.distance)) {
        bestRacketHandle = { name, distance };
      }
    });
    if (bestRacketHandle) return bestRacketHandle.name;
    if (pointInsideRotatedBox(pointer, handles.frameBox)) {
      return "racketBox";
    }
  }
  const racketSegmentation = racketSegmentationForFrame(pose, dom.childVideo);
  if (Array.isArray(racketSegmentation) && racketSegmentation.length >= 3) {
    const frameMask = racketSegmentation
      .map((point) => sourceToPlayerFrame(point, dom.childVideo, pointer.rect))
      .filter(([x, y]) => Number.isFinite(x) && Number.isFinite(y));
    if (pointInsidePolygonFrame(pointer, frameMask)) {
      return "racketBox";
    }
  }
  return null;
}

function toggleKeypointEdit() {
  if (!roiRuntime.confirmed) {
    dom.roiStatus.textContent = "Confirm ROI before editing keypoints.";
    return;
  }

  poseRuntime.editMode = !poseRuntime.editMode;
  if (poseRuntime.editMode) {
    const keyframeOnly = isKeyframeOnlyCorrectionMode();
    dom.childVideo.pause();
    syncFrameScrubber();
    setEditedPoseForCurrentFrame(currentEditablePose());
    poseRuntime.draggingPoint = null;
    dom.editKeyframeAnchorsButton?.classList.toggle("active", keyframeOnly);
    dom.editKeypointsButton.classList.toggle("active", !keyframeOnly);
    dom.keypointEditor.classList.add("active");
    dom.childFrame.classList.add("editing-keypoints");
    dom.editKeypointsButton.textContent = "Close Editor";
    updateEditPlaybackButton();
    dom.roiStatus.textContent = keyframeOnly
      ? "Correct selected key-frame anchors. Save each anchor, then continue to motion analysis."
      : "Use Play/Pause, the scrubber, or frame controls to choose any frame, then correct keypoints or the racket box.";
    dom.childPoseScore.textContent = "Editing keypoints";
  } else {
    dom.childVideo.pause();
    saveCurrentPoseCorrection();
    poseRuntime.editedPose = null;
    poseRuntime.editedPoseFrame = null;
    poseRuntime.draggingPoint = null;
    dom.editKeyframeAnchorsButton?.classList.remove("active");
    dom.editKeypointsButton.classList.remove("active");
    dom.keypointEditor.classList.remove("active");
    dom.childFrame.classList.remove("editing-keypoints");
    dom.editKeypointsButton.textContent = "Edit Full Video";
    dom.roiStatus.textContent = isKeyframeOnlyCorrectionMode()
      ? "Key-frame corrections saved. Next step: motion analysis."
      : "Frame corrections saved. Next step: render the review video.";
    dom.childPoseScore.textContent = "Open editor";
  }
  updateWorkflow();
}

function startKeypointDrag(event) {
  if (event.defaultPrevented) return;
  if (!poseRuntime.editMode || !roiRuntime.confirmed) return;
  if (!poseRuntime.editedPose || poseRuntime.editedPoseFrame !== currentFrameIndex()) {
    refreshEditablePoseFromFrame();
  }
  const pointer = canvasPointFromEvent(normalizePointerEvent(event));
  const selectedKeypoint = dom.keypointSelect.value;
  const clickedKeypoint = nearestKeypoint(pointer);
  const keypoint = clickedKeypoint?.startsWith("racket")
    ? clickedKeypoint
    : selectedKeypoint?.startsWith("racket")
      ? clickedKeypoint
      : selectedKeypoint;

  if (!keypoint) return;

  if (!keypoint.startsWith("racket")) {
    poseRuntime.editedPose[keypoint] = playerFrameToPoseSource(pointer, dom.childVideo, pointer.rect);
    if (poseRuntime.editedPose.hiddenKeypoints?.[keypoint]) {
      delete poseRuntime.editedPose.hiddenKeypoints[keypoint];
    }
    saveCurrentPoseCorrection("userAnchor", { autoSmooth: false, smoothOnFrameChange: true });
  }

  poseRuntime.draggingPoint = keypoint;
  if (keypoint.startsWith("racket")) {
    racketManualFrames.add(currentFrameIndex());
    const displayedRacketBox = visualRacketBoxForFrame(poseRuntime.editedPose, dom.childVideo);
    if (displayedRacketBox) {
      poseRuntime.editedPose.racketBox = normalizeRacketBox(displayedRacketBox);
    }
  }
  dom.keypointSelect.value = keypoint.startsWith("racket") ? "racketBox" : keypoint;
  syncKeypointVisibilityControls();
  dom.roiStatus.textContent = keypoint.startsWith("racket")
    ? "Racket box selected. Drag corners to rotate/resize, edges to resize, or inside the box to move."
    : `${dom.keypointSelect.options[dom.keypointSelect.selectedIndex]?.text || keypoint} placed. Drag to fine tune.`;
  if (event.currentTarget?.setPointerCapture && event.pointerId) {
    event.currentTarget.setPointerCapture(event.pointerId);
  }
  event.stopPropagation();
  event.preventDefault();
}

function updateRacketBoxFromCornerDrag(box, pointer, rect, cornerName) {
  const frameBox = racketBoxToFrame(box, dom.childVideo, rect);
  const signs = {
    racketCornerNW: [-1, -1],
    racketCornerNE: [1, -1],
    racketCornerSE: [1, 1],
    racketCornerSW: [-1, 1],
  }[cornerName] || [1, 1];
  const dx = pointer.x - frameBox.cx;
  const dy = pointer.y - frameBox.cy;
  const localCornerAngle = Math.atan2(signs[1] * frameBox.height / 2, signs[0] * frameBox.width / 2);
  const angle = Math.atan2(dy, dx) - localCornerAngle;
  const rotatedFrameBox = { ...frameBox, angle };
  const local = frameToRacketLocal(pointer, rotatedFrameBox);
  return normalizeRacketBox({
    ...box,
    angle,
    width: frameLengthToSource(Math.abs(local.x) * 2, dom.childVideo, rect, "x"),
    height: frameLengthToSource(Math.abs(local.y) * 2, dom.childVideo, rect, "y"),
  });
}

function updateRacketBoxFromEdgeDrag(box, pointer, rect, edgeName) {
  const frameBox = racketBoxToFrame(box, dom.childVideo, rect);
  const local = frameToRacketLocal(pointer, frameBox);
  const next = { ...box };
  if (edgeName === "racketEdgeN" || edgeName === "racketEdgeS") {
    next.height = frameLengthToSource(Math.abs(local.y) * 2, dom.childVideo, rect, "y");
  } else {
    next.width = frameLengthToSource(Math.abs(local.x) * 2, dom.childVideo, rect, "x");
  }
  return normalizeRacketBox(next);
}

function moveKeypointDrag(event) {
  if (!poseRuntime.editMode || !poseRuntime.draggingPoint) return;
  const pointer = canvasPointFromEvent(normalizePointerEvent(event));
  if (poseRuntime.draggingPoint === "racketBox") {
    const [cx, cy] = playerFrameToPoseSource(pointer, dom.childVideo, pointer.rect);
    poseRuntime.editedPose.racketBox = normalizeRacketBox({
      ...poseRuntime.editedPose.racketBox,
      cx,
      cy,
    });
  } else if (poseRuntime.draggingPoint === "racketRotate") {
    const box = normalizeRacketBox(poseRuntime.editedPose.racketBox);
    const center = sourceToPlayerFrame([box.cx, box.cy], dom.childVideo, pointer.rect);
    poseRuntime.editedPose.racketBox = normalizeRacketBox({
      ...box,
      angle: Math.atan2(pointer.y - center[1], pointer.x - center[0]) + Math.PI / 2,
    });
  } else if (poseRuntime.draggingPoint === "racketLength") {
    const box = normalizeRacketBox(poseRuntime.editedPose.racketBox);
    const center = sourceToPlayerFrame([box.cx, box.cy], dom.childVideo, pointer.rect);
    const distance = Math.hypot(pointer.x - center[0], pointer.y - center[1]);
    poseRuntime.editedPose.racketBox = normalizeRacketBox({
      ...box,
      height: frameLengthToSource(distance * 2, dom.childVideo, pointer.rect, "y"),
    });
  } else if (poseRuntime.draggingPoint === "racketWidth") {
    const box = normalizeRacketBox(poseRuntime.editedPose.racketBox);
    const center = sourceToPlayerFrame([box.cx, box.cy], dom.childVideo, pointer.rect);
    const distance = Math.hypot(pointer.x - center[0], pointer.y - center[1]);
    poseRuntime.editedPose.racketBox = normalizeRacketBox({
      ...box,
      width: frameLengthToSource(distance * 2, dom.childVideo, pointer.rect, "x"),
    });
  } else if (poseRuntime.draggingPoint.startsWith("racketCorner")) {
    const box = normalizeRacketBox(poseRuntime.editedPose.racketBox);
    poseRuntime.editedPose.racketBox = updateRacketBoxFromCornerDrag(
      box,
      pointer,
      pointer.rect,
      poseRuntime.draggingPoint,
    );
  } else if (poseRuntime.draggingPoint.startsWith("racketEdge")) {
    const box = normalizeRacketBox(poseRuntime.editedPose.racketBox);
    poseRuntime.editedPose.racketBox = updateRacketBoxFromEdgeDrag(
      box,
      pointer,
      pointer.rect,
      poseRuntime.draggingPoint,
    );
  } else {
    poseRuntime.editedPose[poseRuntime.draggingPoint] = playerFrameToPoseSource(
      pointer,
      dom.childVideo,
      pointer.rect,
    );
  }
  saveCurrentPoseCorrection("userAnchor", { autoSmooth: false, smoothOnFrameChange: true });
  dom.roiStatus.textContent = `${poseRuntime.draggingPoint} corrected.`;
  drawPoseLoop();
  event.preventDefault();
}

function endKeypointDrag() {
  const draggedPoint = poseRuntime.draggingPoint;
  poseRuntime.draggingPoint = null;
  if (draggedPoint?.startsWith("racket")) {
    requestAnimationFrame(syncRacketBoxControls);
  }
}

function seekToScrubbedFrame() {
  if (!dom.childVideo.duration || !Number.isFinite(dom.childVideo.duration)) return;
  const fps = Math.max(1, Number(dom.fpsInput.value || 60));
  const frame = clampFrameIndex(Number(dom.frameScrubber.value || 0), dom.childVideo);
  smoothPendingFrameBeforeLeaving(frame);
  dom.childVideo.pause();
  dom.childVideo.currentTime = clamp(frame / fps, 0, dom.childVideo.duration);
  if (poseRuntime.editMode) {
    window.setTimeout(() => {
      refreshEditablePoseFromFrame();
      refreshRacketDetectionForCurrentEditFrame();
      syncRacketBoxControls();
      dom.roiStatus.textContent = `Frame ${currentFrameIndex()} selected. Drag, nudge, or use racket box sliders.`;
      drawPoseLoop();
    }, 80);
  }
}

async function stepEditFrame(direction) {
  if (!dom.childVideo.duration || !Number.isFinite(dom.childVideo.duration)) return;
  dom.childVideo.pause();
  const fps = Math.max(1, Number(dom.fpsInput.value || 60));
  const nextFrame = clampFrameIndex(currentFrameIndex(dom.childVideo) + direction, dom.childVideo);
  smoothPendingFrameBeforeLeaving(nextFrame);
  dom.childVideo.currentTime = clamp(
    nextFrame / fps,
    0,
    dom.childVideo.duration,
  );
  await waitForVideoSeek(dom.childVideo);
  refreshEditablePoseFromFrame();
  refreshRacketDetectionForCurrentEditFrame();
  syncFrameScrubber();
  syncRacketBoxControls();
  drawPoseLoop();
}

async function goToNextKeyframe() {
  if (!keyframes.length) {
    dom.roiStatus.textContent = "No key frames yet. Auto detect or add key frames first.";
    return;
  }
  const current = currentFrameIndex(dom.childVideo);
  const ordered = keyframes
    .map((keyframe, index) => ({
      index,
      frame: clampFrameIndex(keyframeToFrameIndex(keyframe), dom.childVideo),
      phase: keyframe.phase,
    }))
    .sort((a, b) => a.frame - b.frame);
  const next = ordered.find((item) => item.frame > current) || ordered[0];
  selectedKeyframeIndex = next.index;
  renderKeyframes();
  await goToFrameForCorrection(
    next.frame,
    `${next.phase || "Next"} key frame selected. Review or correct the points on this frame.`,
  );
}

function selectPreviousKeypoint() {
  const select = dom.keypointSelect;
  if (!select?.options?.length) return;
  const nextIndex = (select.selectedIndex - 1 + select.options.length) % select.options.length;
  select.selectedIndex = nextIndex;
  syncKeypointVisibilityControls();
  syncRacketBoxControls();
  drawPoseLoop();
  const label = select.options[nextIndex]?.text || "Previous key point";
  dom.roiStatus.textContent = `${label} selected. Drag it on the video or use the arrow nudges.`;
}

async function goToSuggestedAnchorFrame() {
  if (suggestedAnchorFrame == null || !dom.childVideo.duration || !Number.isFinite(dom.childVideo.duration)) return;
  await goToFrameForCorrection(suggestedAnchorFrame, `Recommended frame ${suggestedAnchorFrame} selected. Fix keypoints, racket, or ball here, then Save Key Frame Anchor.`);
}

async function goToFrameForCorrection(frameNumber, message = "") {
  if (!dom.childVideo.duration || !Number.isFinite(dom.childVideo.duration)) return;
  const fps = Math.max(1, Number(dom.fpsInput.value || 60));
  const safeFrame = clampFrameIndex(frameNumber, dom.childVideo);
  workflowStepOverride = "keypoints";
  if (!poseRuntime.editMode) toggleKeypointEdit();
  dom.childVideo.pause();
  dom.childVideo.currentTime = clamp(safeFrame / fps, 0, dom.childVideo.duration);
  await waitForVideoSeek(dom.childVideo);
  refreshEditablePoseFromFrame();
  refreshRacketDetectionForCurrentEditFrame();
  syncFrameScrubber();
  syncRacketBoxControls();
  updateTrackingQualityPanel();
  dom.roiStatus.textContent = message || `Frame ${safeFrame} selected. Fix keypoints, racket, or ball here, then save the frame.`;
  dom.childFrame.scrollIntoView({ behavior: "smooth", block: "center" });
}

async function openSelectedKeyframeEditor() {
  if (!roiRuntime.confirmed) {
    dom.roiStatus.textContent = "Confirm ROI before editing key frames.";
    return;
  }
  if (!keyframes.length) {
    dom.roiStatus.textContent = "Auto detect key frames first, then edit key-frame anchors.";
    return;
  }
  correctionScope = "keyframes";
  const selected = keyframes[selectedKeyframeIndex] || keyframes[0];
  const frameNumber = keyframeToFrameIndex(selected);
  await goToFrameForCorrection(
    frameNumber,
    `${selected.phase || "Selected"} key frame selected. Correct keypoints, racket, or ball here, then Save Key Frame Anchor.`,
  );
  dom.editKeyframeAnchorsButton?.classList.add("active");
  dom.editKeypointsButton?.classList.remove("active");
  if (dom.correctionModeStatus) {
    dom.correctionModeStatus.textContent = "Key-frame-only correction: edit selected anchors, then continue directly to motion analysis.";
  }
}

async function openFullVideoEditor() {
  if (!roiRuntime.confirmed) {
    dom.roiStatus.textContent = "Confirm ROI before editing the video.";
    return;
  }
  if (!keyframes.length) {
    dom.roiStatus.textContent = "Auto detect key frames first, then edit the full video.";
    return;
  }
  correctionScope = "video";
  workflowStepOverride = "keypoints";
  updateWorkflow();
  if (!poseRuntime.editMode) toggleKeypointEdit();
  dom.editKeyframeAnchorsButton?.classList.remove("active");
  dom.editKeypointsButton?.classList.add("active");
  if (dom.correctionModeStatus) {
    dom.correctionModeStatus.textContent = "Full-video correction: choose any frame, save anchors, then generate the smooth track.";
  }
  dom.childFrame.scrollIntoView({ behavior: "smooth", block: "center" });
}

function toggleEditPlayback() {
  if (!poseRuntime.editMode) return;
  if (dom.childVideo.paused) {
    poseRuntime.editedPose = null;
    poseRuntime.editedPoseFrame = null;
    dom.childVideo.play();
    dom.roiStatus.textContent = "Playing. Pause on a frame, then drag or nudge keypoints.";
  } else {
    dom.childVideo.pause();
    refreshEditablePoseFromFrame();
    refreshRacketDetectionForCurrentEditFrame();
    syncRacketBoxControls();
    dom.roiStatus.textContent = "Paused. Edit this frame, or step frame-by-frame.";
  }
  updateEditPlaybackButton();
}

function saveVisibleFrameCorrection() {
  if (!poseRuntime.editMode) return;
  dom.childVideo.pause();
  if (!poseRuntime.editedPose) refreshEditablePoseFromFrame();
  saveCurrentPoseCorrection();
  dom.roiStatus.textContent = "Current frame correction saved. Continue playback or click Done Frame Editing.";
}

function updateEditPlaybackButton() {
  if (!dom.editPlayPauseButton) return;
  dom.editPlayPauseButton.textContent = dom.childVideo.paused ? "Play" : "Pause";
}

function nudgeSelectedKeypoint(event) {
  const button = event.target.closest("button[data-nudge]");
  if (!button || !poseRuntime.editMode || !poseRuntime.editedPose) return;
  const name = dom.keypointSelect.value;
  const step = 0.006;
  const moves = {
    up: [0, -step],
    down: [0, step],
    left: [-step, 0],
    right: [step, 0],
  };
  const [dx, dy] = moves[button.dataset.nudge] || [0, 0];
  if (name === "racketBox") {
    const box = normalizeRacketBox(poseRuntime.editedPose.racketBox);
    poseRuntime.editedPose.racketBox = normalizeRacketBox({
      ...box,
      cx: box.cx + dx,
      cy: box.cy + dy,
    });
  } else if (name === "racketRotate") {
    const box = normalizeRacketBox(poseRuntime.editedPose.racketBox);
    const rotationStep = button.dataset.nudge === "left" ? -0.05 : button.dataset.nudge === "right" ? 0.05 : 0;
    poseRuntime.editedPose.racketBox = normalizeRacketBox({ ...box, angle: box.angle + rotationStep });
  } else if (name === "racketLength") {
    const box = normalizeRacketBox(poseRuntime.editedPose.racketBox);
    const sizeStep = button.dataset.nudge === "up" || button.dataset.nudge === "right" ? 0.006 : -0.006;
    poseRuntime.editedPose.racketBox = normalizeRacketBox({
      ...box,
      height: box.height + sizeStep,
    });
  } else if (name === "racketWidth") {
    const box = normalizeRacketBox(poseRuntime.editedPose.racketBox);
    const sizeStep = button.dataset.nudge === "up" || button.dataset.nudge === "right" ? 0.004 : -0.004;
    poseRuntime.editedPose.racketBox = normalizeRacketBox({
      ...box,
      width: box.width + sizeStep,
    });
  } else {
    if (!poseRuntime.editedPose[name]) return;
    const [x, y] = poseRuntime.editedPose[name];
    poseRuntime.editedPose[name] = [clamp(x + dx, 0, 1), clamp(y + dy, 0, 1)];
  }
  saveCurrentPoseCorrection("userAnchor", { autoSmooth: false, smoothOnFrameChange: true });
  dom.roiStatus.textContent = `${name} nudged. Smooth will run when you change frames.`;
}

function playerFrameBox(box, video, rect, options = {}) {
  const topLeft = sourceToPlayerFrame([box.x, box.y], video, rect, options);
  const bottomRight = sourceToPlayerFrame([box.x + box.width, box.y + box.height], video, rect, options);
  return {
    x: topLeft[0],
    y: topLeft[1],
    width: bottomRight[0] - topLeft[0],
    height: bottomRight[1] - topLeft[1],
  };
}

function getPosePersonBox(pose) {
  const points = Object.entries(pose)
    .filter(([name, value]) => Array.isArray(value) && !isKeypointHidden(pose, name) && !name.startsWith("racket") && name !== "ball")
    .map(([, value]) => value);
  if (points.length < 4) return playerPersonBox;

  const xs = points.map((point) => point[0]);
  const ys = points.map((point) => point[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const paddingX = Math.max(0.04, (maxX - minX) * 0.35);
  const paddingY = Math.max(0.06, (maxY - minY) * 0.28);

  return {
    x: clamp(minX - paddingX, 0, 1),
    y: clamp(minY - paddingY, 0, 1),
    width: clamp(maxX - minX + paddingX * 2, 0.08, 0.9),
    height: clamp(maxY - minY + paddingY * 2, 0.12, 0.9),
    confidence: poseRuntime.childPose ? 0.94 : playerPersonBox.confidence,
  };
}

function addRacketDetection(sourcePose) {
  const pose = clonePose(sourcePose);
  if (pose.racketBox) {
    pose.racketBox = normalizeRacketBox(pose.racketBox);
    return pose;
  }

  const frameModelBox = objectDetectionRuntime.racketFrameDetections.get(currentFrameIndex(dom.childVideo));
  if (objectDetectionRuntime.ready && frameModelBox) {
    pose.racketBox = normalizeRacketBox(frameModelBox);
    return pose;
  }

  const isRight = dom.dominantHand.value === "right";
  const wristName = isRight ? "rightWrist" : "leftWrist";
  const elbowName = isRight ? "rightElbow" : "leftElbow";
  const wrist = pose[wristName] || pose.rightWrist || pose.leftWrist;
  const elbow = pose[elbowName] || pose.rightElbow || pose.leftElbow;
  if (!wrist) return pose;

  const time = dom.childVideo.currentTime || 0;
  const swing = Math.sin(time * 3.2);
  const side = isRight ? 1 : -1;
  const legacyHandle = pose.racketHandle;
  const legacyHead = pose.racketHead;
  const armDx = legacyHead && legacyHandle ? legacyHead[0] - legacyHandle[0] : elbow ? wrist[0] - elbow[0] : side * 0.08;
  const armDy = legacyHead && legacyHandle ? legacyHead[1] - legacyHandle[1] : elbow ? wrist[1] - elbow[1] : -0.04;
  const length = Math.hypot(armDx, armDy) || 0.08;
  const unitX = armDx / length;
  const unitY = armDy / length;
  const racketLength = clamp(length * 1.05, 0.09, 0.16);
  const center = legacyHead && legacyHandle
    ? [(legacyHead[0] + legacyHandle[0]) / 2, (legacyHead[1] + legacyHandle[1]) / 2]
    : [
        clamp(wrist[0] + unitX * racketLength * 0.35 + side * 0.012, 0, 1),
        clamp(wrist[1] + unitY * racketLength * 0.35 - swing * 0.01, 0, 1),
      ];

  pose.racketBox = normalizeRacketBox({
    cx: center[0],
    cy: center[1],
    width: 0.045,
    height: racketLength,
    angle: Math.atan2(unitY, unitX) + Math.PI / 2,
    confidence: 0.32,
    source: "poseFallback",
    method: "short hand-vector estimate; not mask-derived",
  });
  delete pose.racketHandle;
  delete pose.racketHead;
  delete pose.racketFace;
  return pose;
}

function racketHandName(pose) {
  const preferred = dom.dominantHand.value === "right" ? "rightWrist" : "leftWrist";
  if (pose?.[preferred]) return preferred;
  return pose?.rightWrist ? "rightWrist" : pose?.leftWrist ? "leftWrist" : null;
}

function addBallDetection(sourcePose) {
  const pose = clonePose(sourcePose);
  if (isReliableBallPose(pose)) return pose;
  if (poseRuntime.editMode && dom.keypointSelect?.value === "ball" && Array.isArray(pose.ball)) return pose;
  if (Array.isArray(pose.ball)) return removeBallFromPose(pose);
  return pose;
}

function addTrackedObjects(sourcePose) {
  return addBallDetection(addRacketDetection(sourcePose));
}

function createPose(video, seedOffset = 0) {
  return createPoseForTime(video, video.currentTime || 0, seedOffset);
}

function drawPose(canvas, video, seedOffset, color, options = {}) {
  const rect = options.rect || canvas.getBoundingClientRect();
  const scale = options.scale ?? (window.devicePixelRatio || 1);
  const cropTargetRatio = options.cropTargetRatio;
  canvas.width = Math.max(1, Math.floor(rect.width * scale));
  canvas.height = Math.max(1, Math.floor(rect.height * scale));

  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);
  ctx.clearRect(0, 0, rect.width, rect.height);

  if (!dom.showSkeleton.checked || !video.src) return;

  if (video === dom.childVideo && !roiRuntime.confirmed) {
    const box = getRoiBoxInFullFrame(video, rect);
    positionRoiDragBox(box);
    dom.childPoseScore.textContent = "ROI preview";
    return;
  }

  if (video === dom.childVideo && !keyframeDetectionBusy && !options.forceDraw) {
    const step = currentWorkflowStep();
    if ((step === "frames" && keyframes.length) || (step === "keypoints" && !poseRuntime.editMode)) {
      dom.childPoseScore.textContent = step === "frames" ? "Key frame preview" : "Open editor";
      return;
    }
  }

  if (video === dom.childVideo && options.poseOverride) {
    // The caller already captured the exact pose for this frame.
  } else if (video === dom.childVideo && keyframeDetectionBusy) {
    detectChildPose(video);
  } else if (video === dom.childVideo && roiRuntime.confirmed && !poseRuntime.editMode) {
    detectChildPose(video);
  }

  const displayFrame = Number.isFinite(options.frameIndexOverride)
    ? Math.round(options.frameIndexOverride)
    : currentFrameIndex(video);
  const editedPoseForFrame = poseRuntime.editedPoseFrame === displayFrame
    ? poseRuntime.editedPose
    : null;
  const childPoseForDisplay = video === dom.childVideo
    ? options.poseOverride || (
      poseRuntime.editMode && dom.childVideo.paused
        ? editedPoseForFrame || currentFramePose()
        : correctionForVideoTime(video) || poseRuntime.childPose || createPose(video, seedOffset)
    )
    : null;
  const pose = addTrackedObjects(video === dom.childVideo
    ? applyCurrentFrameRacketDetection(childPoseForDisplay, displayFrame)
    : createPose(video, seedOffset));
  if (video === dom.childVideo) {
    dom.childPoseScore.textContent = poseRuntime.editMode
      ? "Editing keypoints"
      : correctionForVideoTime(video)
        ? "Corrected frame"
        : poseRuntime.childPose
          ? "CV keypoints"
          : "ROI demo";
  }

  const viewport = video === dom.childVideo
    ? { x: 0, y: 0, width: rect.width, height: rect.height }
    : getVideoViewport(video, rect);
  const childCrop = video === dom.childVideo ? getPlayerCropSource(video, { targetRatio: cropTargetRatio }) : null;
  const childRenderViewport = video === dom.childVideo ? getPlayerRenderViewport(rect, childCrop) : null;
  const isPointVisible = (name) => {
    if (!pose[name] || !Array.isArray(pose[name])) return false;
    if (video !== dom.childVideo) return true;
    const sourceX = pose[name][0] * (video.videoWidth || 1);
    const sourceY = pose[name][1] * (video.videoHeight || 1);
    return sourceX >= childCrop.x
      && sourceX <= childCrop.x + childCrop.width
      && sourceY >= childCrop.y
      && sourceY <= childCrop.y + childCrop.height;
  };
  const point = (name) => {
    if (video === dom.childVideo) return sourceToPlayerFrame(pose[name], video, rect, { cropTargetRatio });
    return [
      viewport.x + pose[name][0] * viewport.width,
      viewport.y + pose[name][1] * viewport.height,
    ];
  };
  const palette = {
    head: "#22e35f",
    arms: "#0b8cff",
    torso: "#e92eff",
    legs: "#ff6b13",
    racket: "#10d9c4",
    ball: "#f2a51f",
  };
  const segments = [
    ["head", "leftShoulder", palette.head],
    ["head", "rightShoulder", palette.head],
    ["leftShoulder", "rightShoulder", palette.arms],
    ["leftShoulder", "leftElbow", palette.arms],
    ["leftElbow", "leftWrist", palette.arms],
    ["rightShoulder", "rightElbow", palette.arms],
    ["rightElbow", "rightWrist", palette.arms],
    ["leftShoulder", "leftHip", palette.torso],
    ["rightShoulder", "rightHip", palette.torso],
    ["leftHip", "rightHip", palette.legs],
    ["leftHip", "leftKnee", palette.legs],
    ["rightHip", "rightKnee", palette.legs],
    ["leftKnee", "leftAnkle", palette.legs],
    ["rightKnee", "rightAnkle", palette.legs],
  ];
  const pointColor = (name) => {
    if (name === "head") return palette.head;
    if (name.includes("Shoulder") || name.includes("Elbow") || name.includes("Wrist")) return palette.arms;
    if (name.includes("Hip")) return palette.torso;
    if (name.includes("Knee") || name.includes("Ankle")) return palette.legs;
    if (name.startsWith("racket")) return palette.racket;
    if (name === "ball") return palette.ball;
    return "#ffffff";
  };

  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.shadowColor = "rgba(0,0,0,.18)";
  ctx.shadowBlur = 2;

  if (video === dom.childVideo && childRenderViewport) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(childRenderViewport.x, childRenderViewport.y, childRenderViewport.width, childRenderViewport.height);
    ctx.clip();
  }

  if (video === dom.childVideo) {
    const box = playerFrameBox(getPosePersonBox(pose), video, rect, { cropTargetRatio });
    ctx.save();
    ctx.shadowBlur = 0;
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#1f57ff";
    ctx.strokeRect(box.x, box.y, box.width, box.height);
    ctx.fillStyle = "#1f57ff";
    ctx.font = "700 14px Inter, sans-serif";
    ctx.fillRect(box.x, Math.max(0, box.y - 22), 112, 22);
    ctx.fillStyle = "#fff";
    ctx.fillText(`person ${playerPersonBox.confidence.toFixed(2)}`, box.x + 6, Math.max(16, box.y - 6));
    ctx.restore();
  }

  segments.forEach(([a, b, segmentColor]) => {
    if (!pose[a] || !pose[b]) return;
    if (isKeypointHidden(pose, a) || isKeypointHidden(pose, b)) return;
    if (video === dom.childVideo && (!isPointVisible(a) || !isPointVisible(b))) return;
    const [ax, ay] = point(a);
    const [bx, by] = point(b);
    ctx.strokeStyle = segmentColor;
    ctx.lineWidth = video === dom.childVideo ? 2.2 : 2;
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(bx, by);
    ctx.stroke();
  });

  if (video === dom.childVideo && isReliableBallPose(pose) && !isKeypointHidden(pose, "ball")) {
    const currentFrame = displayFrame;
    const trailFrames = Array.from({ length: 13 }, (_, index) => currentFrame - 18 + index * 3)
      .filter((frame) => frame >= 0)
      .map((frame) => correctionForFrameIndex(frame) || (frame === currentFrame ? pose : null))
      .filter((trailPose) => isReliableBallPose(trailPose) && !isKeypointHidden(trailPose, "ball"))
      .filter((trailPose) => {
        const sourceX = trailPose.ball[0] * (video.videoWidth || 1);
        const sourceY = trailPose.ball[1] * (video.videoHeight || 1);
        return sourceX >= childCrop.x
          && sourceX <= childCrop.x + childCrop.width
          && sourceY >= childCrop.y
          && sourceY <= childCrop.y + childCrop.height;
      })
      .map((trailPose) => sourceToPlayerFrame(trailPose.ball, video, rect, { cropTargetRatio }));
    if (trailFrames.length > 1) {
      ctx.save();
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "rgba(242, 165, 31, .58)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      trailFrames.forEach(([x, y], index) => {
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
      trailFrames.forEach(([x, y], index) => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(242, 165, 31, ${0.18 + (index / trailFrames.length) * 0.5})`;
        ctx.arc(x, y, 1.7 + index * 0.08, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    }
  }

  const visualRacketBox = visualRacketBoxForFrame(pose, video);
  const racketSegmentation = racketSegmentationForFrame(pose, video);
  if (visualRacketBox && (video !== dom.childVideo || isPointVisible("racketBox") || (
    visualRacketBox.cx * (video.videoWidth || 1) >= childCrop.x
    && visualRacketBox.cx * (video.videoWidth || 1) <= childCrop.x + childCrop.width
    && visualRacketBox.cy * (video.videoHeight || 1) >= childCrop.y
    && visualRacketBox.cy * (video.videoHeight || 1) <= childCrop.y + childCrop.height
  ))) {
    const handles = racketBoxHandles(visualRacketBox, video, rect, { cropTargetRatio });
    const { frameBox } = handles;
    const handName = racketHandName(pose);
    if (handName && pose[handName] && !isKeypointHidden(pose, handName)) {
      const handPoint = point(handName);
      const distanceToA = Math.hypot(handPoint[0] - handles.handleA[0], handPoint[1] - handles.handleA[1]);
      const handlePoint = distanceToA <= Math.hypot(handPoint[0] - handles.handleB[0], handPoint[1] - handles.handleB[1])
        ? handles.handleA
        : handles.handleB;
      ctx.save();
      ctx.shadowBlur = 0;
      ctx.strokeStyle = palette.racket;
      ctx.lineWidth = video === dom.childVideo ? 2.2 : 2;
      ctx.beginPath();
      ctx.moveTo(handPoint[0], handPoint[1]);
      ctx.lineTo(handlePoint[0], handlePoint[1]);
      ctx.stroke();
      ctx.beginPath();
      ctx.fillStyle = palette.racket;
      ctx.arc(handlePoint[0], handlePoint[1], video === dom.childVideo ? 3.5 : 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    if (video === dom.childVideo && poseRuntime.editMode && dom.showRacketMask?.checked) {
      requestRacketSegmentationForCurrentFrame();
      drawRacketSegmentation(ctx, racketSegmentation, video, rect, { cropTargetRatio });
    }

    ctx.save();
    ctx.translate(frameBox.cx, frameBox.cy);
    ctx.rotate(frameBox.angle);
    ctx.shadowBlur = 0;
    ctx.strokeStyle = video === dom.childVideo ? "#ff263f" : palette.racket;
    ctx.lineWidth = video === dom.childVideo ? 2.4 : 2;
    ctx.strokeRect(-frameBox.width / 2, -frameBox.height / 2, frameBox.width, frameBox.height);
    ctx.strokeStyle = "rgba(16, 217, 196, .85)";
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(0, frameBox.height / 2);
    ctx.lineTo(0, -frameBox.height / 2);
    ctx.stroke();
    ctx.restore();

    if (video === dom.childVideo && poseRuntime.editMode) {
      ctx.save();
      ctx.strokeStyle = "rgba(255, 38, 63, .65)";
      ctx.lineWidth = 1.2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(handles.handleB[0], handles.handleB[1]);
      ctx.lineTo(handles.rotate[0], handles.rotate[1]);
      ctx.stroke();
      ctx.restore();

      const editHandles = [
        ["racketBox", handles.center, "#10d9c4", 5],
        ["racketRotate", handles.rotate, "#ff263f", 6],
        ...Object.entries(handles.corners).map(([name, handle]) => [name, handle, "#ff263f", 6]),
        ...Object.entries(handles.edges).map(([name, handle]) => [name, handle, "#8ee0bd", 5]),
      ];
      editHandles.forEach(([name, handle, handleColor, radius]) => {
        ctx.beginPath();
        ctx.fillStyle = handleColor;
        ctx.arc(handle[0], handle[1], name === poseRuntime.draggingPoint ? radius + 2 : radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 1.4;
        ctx.stroke();
      });
    }
  }

  Object.keys(pose).forEach((name) => {
    if (!pose[name]) return;
    if (name === "racketBox" || name === "racketFace") return;
    if (name === "hiddenKeypoints" || isKeypointHidden(pose, name)) return;
    if (!Array.isArray(pose[name])) return;
    if (video === dom.childVideo && !isPointVisible(name)) return;
    const [x, y] = point(name);
    const radius = poseRuntime.editMode && video === dom.childVideo
      ? 4
      : name === "ball"
        ? 3.4
        : name.startsWith("racket")
          ? 2.8
          : 2.6;
    ctx.beginPath();
    ctx.fillStyle = pointColor(name);
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,.86)";
    ctx.lineWidth = 0.8;
    ctx.stroke();
  });

  if (video === dom.childVideo && childRenderViewport) {
    ctx.restore();
  }
}

function drawPoseLoop() {
  cancelAnimationFrame(animationFrameId);
  const loop = () => {
    drawCroppedPlayerVideo();
    drawPose(dom.childCanvas, dom.childVideo, 0, "#4be193");
    drawPose(dom.standardCanvas, dom.standardVideo, 90, "#62a8ff");
    animationFrameId = requestAnimationFrame(loop);
  };
  loop();
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function ballTrackingMetrics() {
  const frames = Array.from(poseCorrections.entries())
    .filter(([, pose]) => isReliableBallPose(pose) && !isKeypointHidden(pose, "ball"))
    .sort(([a], [b]) => a - b);
  if (frames.length < 2) {
    return {
      samples: frames.length,
      tossDrift: 6,
      contactGap: 0.08,
      pathLength: 0.42,
      tracked: false,
    };
  }
  const balls = frames.map(([, pose]) => pose.ball);
  const xs = balls.map((ball) => ball[0]);
  const pathLength = balls.slice(1).reduce((total, ball, index) => {
    const previous = balls[index];
    return total + Math.hypot(ball[0] - previous[0], ball[1] - previous[1]);
  }, 0);
  const tossDrift = (Math.max(...xs) - Math.min(...xs)) * 100;
  const contactFrame = frames[Math.floor(frames.length * 0.66)]?.[1];
  const handName = racketHandName(contactFrame);
  const hand = contactFrame?.[handName];
  const contactGap = hand && contactFrame?.ball ? Math.hypot(contactFrame.ball[0] - hand[0], contactFrame.ball[1] - hand[1]) : 0.08;
  return {
    samples: frames.length,
    tossDrift: Math.round(clamp(tossDrift, 0, 42)),
    contactGap: Number(clamp(contactGap, 0.02, 0.42).toFixed(2)),
    pathLength: Number(clamp(pathLength, 0.1, 2.2).toFixed(2)),
    tracked: true,
  };
}

function analyzeMotion() {
  const age = Number(dom.playerAge.value || 10);
  const fps = Number(dom.fpsInput.value || 60);
  const distance = Number(dom.courtDistance.value || 6.4);
  const durationFactor = clamp((reliableVideoDuration(dom.childVideo) || 2.2) / 2.8, 0.75, 1.25);
  const strokeBias = { forehand: 4, backhand: 1, serve: -2, volley: 6 }[dom.strokeType.value] || 0;

  const base = clamp(78 + strokeBias - Math.abs(age - 11) * 1.1 + (fps - 60) * 0.025, 64, 94);
  const score = Math.round(base - Math.abs(durationFactor - 1) * 8);
  const racketSpeed = Math.round(clamp(score * 1.05 + age * 2.1, 58, 138));
  const ballSpeed = Math.round(clamp((distance / durationFactor) * 9.8 + racketSpeed * 0.42, 42, 132));
  const contactHeight = clamp(0.58 + (score - 78) / 300, 0.48, 0.72).toFixed(2);
  const shoulderHip = Math.round(clamp(36 + (score - 70) * 0.7, 24, 56));
  const elbow = Math.round(clamp(94 + (score - 75) * 0.9, 74, 122));
  const knee = Math.round(clamp(128 - (score - 76) * 0.45, 108, 142));
  const ballMetrics = ballTrackingMetrics();
  const trackMetrics = trajectorySummary();
  const stageScores = {
    setup: Math.round(clamp(score + 5, 50, 98)),
    toss: Math.round(clamp(score - (dom.strokeType.value === "serve" ? 4 : 1), 48, 96)),
    load: Math.round(clamp(score + (shoulderHip - 38) * 0.35, 48, 96)),
    drop: Math.round(clamp(score - 3 + (racketSpeed - 80) * 0.08, 48, 96)),
    acceleration: Math.round(clamp(score - 2 + (racketSpeed - 85) * 0.08, 48, 96)),
    contact: Math.round(clamp(score + (Number(contactHeight) - 0.56) * 80, 48, 97)),
    deceleration: Math.round(clamp(score - 4 + (knee < 130 ? 2 : -3), 48, 96)),
    finish: Math.round(clamp(score - 2 + (knee < 132 ? 3 : -2), 48, 96)),
  };

  return {
    score,
    racketSpeed,
    ballSpeed,
    contactHeight,
    shoulderHip,
    elbow,
    knee,
    ballTossDrift: ballMetrics.tossDrift,
    ballContactGap: ballMetrics.contactGap,
    ballPathLength: ballMetrics.pathLength,
    ballTrackSamples: ballMetrics.samples,
    ballTracked: ballMetrics.tracked,
    racketTrackSamples: trackMetrics.racketSamples,
    racketPathLength: trackMetrics.racketPath,
    racketRotationRange: trackMetrics.racketRotation,
    ballContactFrame: trackMetrics.contactFrame,
    trackingQuality: trackingQualityForFrame(currentFrameIndex()).score,
    childPose: score,
    standardPose: 96,
    syncGap: Math.round(clamp(180 - (score - 60) * 3.2, 36, 210)),
    stability: Math.round(clamp(score + 4, 62, 96)),
    stageScores,
  };
}

function renderList(node, items) {
  node.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    node.append(li);
  });
}

function stageQuality(score) {
  if (score >= 86) return "Strong";
  if (score >= 76) return "Developing";
  return "Needs focus";
}

function normalizeStageName(value = "") {
  return String(value).toLowerCase().replace(/^[0-9. ]+/, "").replace(/[^a-z]+/g, "");
}

function keyframeForStage(stage) {
  const stageKey = normalizeStageName(stage.name || stage.phase || stage.id);
  return keyframes.find((frame) => normalizeStageName(frame.phase) === stageKey)
    || keyframes.find((frame) => normalizeStageName(stage.name).includes(normalizeStageName(frame.phase)));
}

function stageImageCacheKey(stage) {
  return normalizeStageName(stage.name || stage.phase || stage.id);
}

function fallbackStageSnapshotForStage(stage) {
  const normalized = normalizeStageName(stage?.phase || stage?.name);
  const aliases = {
    racketdrop: "drop",
    tossearlyracketmovement: "toss",
    accelerationracketapproach: "acceleration",
  };
  return fallbackStageSnapshots[stage?.id]
    || fallbackStageSnapshots[normalized]
    || fallbackStageSnapshots[aliases[normalized]]
    || "";
}

function isEditedAnchorSource(source) {
  return Boolean(source) && source !== "defaultAnchor" && source !== "tracked";
}

function editedAnchorFrameForStage(stage, match = keyframeForStage(stage)) {
  if (!match) return null;
  const targetFrame = clampFrameIndex(keyframeToFrameIndex(match), dom.childVideo);
  const fps = Math.max(1, Number(dom.fpsInput?.value || 60));
  const tolerance = Math.max(3, Math.round(fps * 0.1));
  const candidate = Array.from(poseCorrectionSources.entries())
    .filter(([, source]) => isEditedAnchorSource(source))
    .map(([frame, source]) => ({
      frame,
      source,
      distance: Math.abs(frame - targetFrame),
    }))
    .filter((item) => item.distance <= tolerance)
    .sort((a, b) => a.distance - b.distance || a.frame - b.frame)[0];
  return candidate?.frame ?? null;
}

function keyframeImageForStage(stage) {
  const match = keyframeForStage(stage);
  const defaultFrame = match ? clampFrameIndex(keyframeToFrameIndex(match), dom.childVideo) : null;
  const editedFrame = editedAnchorFrameForStage(stage, match);
  const displayFrame = editedFrame ?? defaultFrame;
  const frameImage = Number.isFinite(displayFrame) ? analysisStageImageCache.get(displayFrame) : "";
  const stageImage = analysisStageImageCache.get(stageImageCacheKey(stage));
  const hasEditedKeypoints = Number.isFinite(editedFrame);

  if (hasEditedKeypoints) {
    return frameImage
      || stageImage
      || match?.image
      || fallbackStageSnapshotForStage(stage)
      || "";
  }

  return match?.image
    || frameImage
    || stageImage
    || fallbackStageSnapshotForStage(stage)
    || "";
}

function stageMetricSupport(stage, data) {
  const metrics = {
    setup: [
      { label: "Base width", value: "0.42 body", note: "Feet outside hips for balance" },
      { label: "Head drift", value: "3%", note: "Quiet head before toss" },
      { label: "Stability", value: `${data.stability}/100`, note: "Platform control" },
    ],
    toss: [
      { label: "Toss release", value: "0.18s", note: "Early stage release timing" },
      { label: "Ball x drift", value: `${data.ballTossDrift}%`, note: "Tracked toss lateral drift" },
      { label: "Racket timing", value: `${Math.max(0, data.syncGap - 42)} ms`, note: "Early racket movement gap" },
    ],
    load: [
      { label: "Shoulder-hip separation", value: `${data.shoulderHip}°`, note: "Coil before acceleration" },
      { label: "Back knee angle", value: `${data.knee}°`, note: "Leg load depth" },
      { label: "Hip stack", value: "0.07 body", note: "Posture control" },
    ],
    drop: [
      { label: "Racket angle", value: "-38°", note: "Racket should drop after leg load" },
      { label: "Drop timing", value: `${Math.max(24, data.syncGap - 65)} ms`, note: "Legs should lead racket" },
      { label: "Knee at drop", value: `${data.knee - 8}°`, note: "Leg drive timing" },
    ],
    acceleration: [
      { label: "Racket speed", value: `${data.racketSpeed} km/h`, note: "Approach speed estimate" },
      { label: "Edge lead", value: "72%", note: "Racket face stays organized" },
      { label: "Arm extension", value: `${data.elbow}°`, note: "Elbow opens through swing" },
    ],
    contact: [
      { label: "Contact height", value: `${data.contactHeight}`, note: "Body ratio above court" },
      { label: "Ball-wrist gap", value: `${data.ballContactGap} body`, note: "Tracked ball near hitting hand/contact" },
      { label: "Ball speed", value: `${data.ballSpeed} km/h`, note: "Output estimate" },
    ],
    deceleration: [
      { label: "Follow-through angle", value: "54°", note: "Racket path after contact" },
      { label: "Landing knee", value: `${Math.max(96, data.knee - 18)}°`, note: "Absorb force" },
      { label: "Balance drift", value: "8%", note: "Recoverable finish" },
    ],
    finish: [
      { label: "Landing control", value: `${stageQuality(data.stageScores?.finish || data.score)}`, note: "Soft front leg" },
      { label: "Front knee angle", value: `${Math.max(100, data.knee - 14)}°`, note: "Avoid locked landing" },
      { label: "Recovery position", value: "0.24s", note: "Ready after deceleration" },
    ],
  };
  return metrics[stage.id] || [];
}

function buildServeStageDetails(data) {
  const focusFromNotes = noteFocusItems(referenceBasis().notes || defaultCoachingNotes);

  return serveStageTemplate.map((stage, index) => {
    const stageScore = data.stageScores?.[stage.id] ?? data.score;
    return {
      ...stage,
      score: stageScore,
      quality: stageQuality(stageScore),
      image: keyframeImageForStage(stage),
      metrics: stageMetricSupport(stage, data),
      evidence: focusFromNotes[index]
        ? `Coach note: ${focusFromNotes[index]}`
        : stage.standard,
    };
  });
}

function statusClass(quality = "") {
  return quality.toLowerCase().replace(/\s+/g, "-");
}

function stageReportGroup(stageId) {
  if (["setup", "toss", "load"].includes(stageId)) return "Preparation & Load";
  if (["drop", "acceleration", "contact"].includes(stageId)) return "Racket Chain & Contact";
  return "Deceleration & Finish";
}

function stageIdealValue(stage) {
  const ideals = {
    setup: "Repeatable base, quiet head",
    toss: "Full toss arm, racket stays up",
    load: "Legs/hips load before upper body",
    drop: "Drop follows leg drive",
    acceleration: "Racket edge leads late into contact",
    contact: "Wrist clearly above shoulder",
    deceleration: "Leg drive finishes before contact",
    finish: "Soft front-knee landing",
  };
  return ideals[stage.id] || stage.standard;
}

function renderMechanicsReportTable(stages) {
  if (!dom.mechanicsReportTable) return;
  let previousGroup = "";
  const rows = stages.map((stage) => {
    const group = stageReportGroup(stage.id);
    const primaryMetric = stage.metrics?.[0] || { label: stage.metric, value: `${stage.score}/100`, note: stage.standard };
    const secondaryMetric = stage.metrics?.[1];
    const groupRow = group !== previousGroup
      ? `<tr class="group-row"><td colspan="6">${group}</td></tr>`
      : "";
    previousGroup = group;
    return `
      ${groupRow}
      <tr>
        <td class="stage-cell">${stage.name.replace(/^[0-9. ]+/, "")}</td>
        <td>${stage.metric}</td>
        <td class="current-cell">
          <strong>${primaryMetric.value}</strong>
          <small>${primaryMetric.label}${secondaryMetric ? ` · ${secondaryMetric.value}` : ""}</small>
        </td>
        <td class="ideal-cell">${stageIdealValue(stage)}</td>
        <td><span class="status-pill ${statusClass(stage.quality)}">${stage.quality}</span></td>
        <td class="focus-cell">${stage.score >= 86 ? "Maintain this checkpoint" : stage.next}</td>
      </tr>
    `;
  }).join("");

  dom.mechanicsReportTable.innerHTML = `
    <thead>
      <tr>
        <th>Stage</th>
        <th>Checkpoint</th>
        <th>Current</th>
        <th>Ideal</th>
        <th>Status</th>
        <th>Next focus</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  `;
}

function renderStageAnalysis(data) {
  const stages = buildServeStageDetails(data);
  const lowest = stages.reduce((weakest, item) => (item.score < weakest.score ? item : weakest), stages[0]);
  const strongest = stages.reduce((best, item) => (item.score > best.score ? item : best), stages[0]);

  dom.stageAnalysisStatus.textContent = "Generated from corrected keypoints, racket estimate, and serve progression notes";
  dom.overallAnalysisText.textContent = `Overall, this serve is ${stageQuality(data.score).toLowerCase()} with the strongest stage in ${strongest.name.replace(/^[0-9. ]+/, "")}. The main training priority is ${lowest.name.replace(/^[0-9. ]+/, "").toLowerCase()}: ${lowest.next}`;
  renderMechanicsReportTable(stages);
  dom.stageAnalysisGrid.innerHTML = stages
    .map((stage) => {
      const primaryMetric = stage.metrics?.[0];
      return `
      <article class="stage-card">
        <header>
          <div>
            <strong>${stage.name}</strong>
            <p>${stage.fault}: ${stage.next}</p>
          </div>
          <span class="stage-score">${stage.score}</span>
        </header>
        ${stage.image ? `<img class="stage-snapshot" src="${stage.image}" alt="${stage.name} player key frame" />` : ""}
        <div class="stage-highlight">
          <span>${stage.quality}</span>
          <span>${primaryMetric ? `${primaryMetric.label}: ${primaryMetric.value}` : stage.metric}</span>
        </div>
        <details>
          <summary>Open detailed analysis</summary>
          ${stage.referenceImage ? `
            <button class="coach-reference" type="button" data-reference="${stage.referenceImage}" aria-label="Open ${stage.name} coach reference">
              <img src="${stage.referenceImage}" alt="${stage.name} coach reference" />
            </button>
          ` : ""}
          ${stage.secondaryReferenceImage ? `
            <button class="coach-reference secondary" type="button" data-reference="${stage.secondaryReferenceImage}" aria-label="Open ${stage.name} additional reference">
              <img src="${stage.secondaryReferenceImage}" alt="${stage.name} additional coach reference" />
            </button>
          ` : ""}
          <p>${stage.standard}</p>
          <div class="metric-support">
            ${(stage.metrics || []).map((metric) => `
              <span>
                <b>${metric.label}</b>
                <strong>${metric.value}</strong>
                <small>${metric.note}</small>
              </span>
            `).join("")}
          </div>
          <dl>
            <div><dt>Status</dt><dd>${stage.quality}</dd></div>
            <div><dt>Coach cue</dt><dd>${stage.coachComment}</dd></div>
            <div><dt>Look for</dt><dd>${stage.lookFor}</dd></div>
            <div><dt>Evidence</dt><dd>${stage.evidence}</dd></div>
            <div><dt>Next</dt><dd>${stage.next}</dd></div>
          </dl>
        </details>
      </article>
    `;
    })
    .join("");
  dom.stageAnalysisGrid.querySelectorAll(".coach-reference").forEach((button) => {
    button.addEventListener("click", () => {
      window.open(button.dataset.reference, "_blank", "noopener");
    });
  });
  dom.technicalDetailList.innerHTML = `
    <span><b>Shoulder-hip separation</b>${data.shoulderHip}°</span>
    <span><b>Elbow angle</b>${data.elbow}°</span>
    <span><b>Knee flexion</b>${data.knee}°</span>
    <span><b>Racket speed estimate</b>${data.racketSpeed} km/h</span>
    <span><b>Racket estimate</b>${data.racketTrackSamples || 0} frames</span>
    <span><b>Racket rotation</b>${data.racketRotationRange || 0}°</span>
    <span><b>Ball speed estimate</b>${data.ballSpeed} km/h</span>
    <span><b>Ball estimate</b>${data.ballTrackSamples} frames</span>
    <span><b>Ball path length</b>${data.ballPathLength} body</span>
    <span><b>Contact window</b>${data.ballContactFrame == null ? "--" : `frame ${data.ballContactFrame}`}</span>
    <span><b>Contact height</b>${data.contactHeight} body ratio</span>
    <span><b>Tracking quality</b>${data.trackingQuality || "--"}</span>
    <span><b>Sync gap</b>${data.syncGap} ms</span>
    <span><b>Stability</b>${data.stability}</span>
  `;
}

function referenceBasis() {
  const activeMode = dom.standardMode.querySelector("button.active")?.dataset.mode || "upload";
  if (activeMode === "notes") {
    const notes = (dom.coachingNotes.value || defaultCoachingNotes).trim();
    const url = dom.coachingResourceUrl.value.trim();
    return {
      mode: "notes",
      label: url ? `coaching notes + resource (${url})` : "default coaching notes",
      notes,
    };
  }
  if (activeMode === "youtube") {
    return {
      mode: "video",
      label: `YouTube clip ${dom.clipStart.value}-${dom.clipEnd.value} (${pocPreset.referenceTitle})`,
      notes: "",
    };
  }
  return { mode: "video", label: "uploaded reference", notes: "" };
}

function noteFocusItems(notes) {
  return notes
    .split(/\n+/)
    .map((line) => line.replace(/^[-*\d.\s]+/, "").trim())
    .filter(Boolean)
    .filter((line) => !/^ATTICUS CAI/i.test(line))
    .slice(0, serveStageTemplate.length);
}

function buildReport(data) {
  const strokeText = dom.strokeType.options[dom.strokeType.selectedIndex].text;
  const handText = dom.dominantHand.options[dom.dominantHand.selectedIndex].text;
  const basis = referenceBasis();
  const stages = buildServeStageDetails(data);
  const lowestStage = stages.reduce((weakest, item) => (item.score < weakest.score ? item : weakest), stages[0]);
  const strengths = [
    `The ${strokeText.toLowerCase()} rhythm is complete, with clear transitions from setup to follow-through.`,
    "The contact point is stable and close to the ideal window in front of the body.",
    "Lower-body support is solid, with no obvious backward weight drift.",
  ];
  const weaknesses = [
    "Shoulder-hip separation can improve to create more rotational energy.",
    "The wrist path opens slightly early at contact, which can affect directional control.",
    "The follow-through finishes a bit short; a longer deceleration path would help.",
  ];

  if (dom.strokeType.value === "serve") {
    strengths[1] = "Toss and swing timing are well connected, with good awareness of high contact.";
    weaknesses[0] = "The drive from the legs into trunk rotation is slightly disconnected, limiting serve speed upside.";
  }

  if (basis.mode === "notes") {
    const focus = noteFocusItems(basis.notes);
    if (focus[0]) strengths[0] = `Compared with the coaching note "${focus[0]}", the motion shows a usable base pattern.`;
    if (focus[1]) weaknesses[0] = `Priority from notes: ${focus[1]}. This should be checked against the corrected frame sequence.`;
    if (focus[2]) weaknesses[1] = `Technical checkpoint: ${focus[2]}. The racket path and contact frame need the closest review.`;
    strengths[2] = "The keypoint workflow now uses the notes as the standard instead of requiring a matching demonstration video.";
  }

  latestReport = [
    `Stroke: ${strokeText} | Dominant hand: ${handText} | Reference: ${basis.label} | Overall score: ${data.score}`,
    `Strengths: ${strengths.join(" ")}`,
    `Improvement areas: ${weaknesses.join(" ")}`,
    `Stage priority: ${lowestStage.name} scored ${lowestStage.score}. Next focus: ${lowestStage.next}`,
    `Profile: This motion is currently control-oriented. Estimated racket speed is ${data.racketSpeed} km/h, estimated ball speed is ${data.ballSpeed} km/h, and the racket/ball overlays are pose-guided estimates rather than dedicated object detections. The next training focus should follow the serve-stage breakdown rather than only the overall score.`,
  ].join("\n\n");

  renderList(dom.strengthList, strengths);
  renderList(dom.weaknessList, weaknesses);
  dom.styleSummary.textContent = basis.mode === "notes"
    ? `This ${strokeText.toLowerCase()} is being evaluated against coaching notes rather than a demonstration video. The ${handText.toLowerCase()}-hand swing path, corrected frame sequence, racket box estimate, and contact window drive the final recommendations.`
    : `This ${strokeText.toLowerCase()} shows a control-oriented profile. The ${handText.toLowerCase()}-hand swing path is clear; the best next step is to lock in contact location and forward body transfer before adding more rotation and racket release speed.`;
}

function updateMetrics(data) {
  dom.overallScore.textContent = data.score;
  dom.overallNote.textContent = data.score >= 85 ? "Close to reference" : data.score >= 75 ? "Strong foundation" : "Needs calibration";
  dom.racketSpeed.textContent = data.racketSpeed;
  dom.ballSpeed.textContent = data.ballSpeed;
  dom.contactHeight.textContent = data.contactHeight;
  dom.childPoseScore.textContent = `${data.childPose}%`;
  dom.standardPoseScore.textContent = referenceBasis().mode === "notes" ? "Notes" : `${data.standardPose}%`;
  dom.ringScore.textContent = data.score;
  dom.scoreRing.style.strokeDashoffset = `${314 - (314 * data.score) / 100}`;
  dom.syncGap.textContent = `${data.syncGap} ms`;
  dom.stabilityScore.textContent = data.stability;
  dom.angleList.innerHTML = `
    <span>Shoulder-hip separation <strong>${data.shoulderHip}°</strong></span>
    <span>Elbow angle <strong>${data.elbow}°</strong></span>
    <span>Knee flexion <strong>${data.knee}°</strong></span>
  `;
  renderStageAnalysis(data);
}

function readProgressSessions() {
  try {
    return JSON.parse(localStorage.getItem(progressStorageKey) || "[]");
  } catch {
    return [];
  }
}

function writeProgressSessions(sessions) {
  localStorage.setItem(progressStorageKey, JSON.stringify(sessions.slice(-12)));
}

function numericScore(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function stageShortName(name) {
  return String(name || "").replace(/^[0-9. ]+/, "");
}

function sessionDateLabel() {
  return new Date().toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

function sessionDisplayName(item) {
  return item?.file || item?.videoName || "Saved video";
}

function captureCurrentVideoStill(maxWidth = 520) {
  const video = dom.childVideo;
  if (!video?.videoWidth || !video?.videoHeight) return null;
  const scale = Math.min(1, maxWidth / video.videoWidth);
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(video.videoWidth * scale));
  canvas.height = Math.max(1, Math.round(video.videoHeight * scale));
  const context = canvas.getContext("2d");
  try {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", 0.82);
  } catch {
    return null;
  }
}

function currentStageSnapshots(data = latestAnalysis) {
  if (data && motionAnalysisReady) {
    return buildServeStageDetails(data).map((stage) => ({
      id: stage.id,
      name: stage.name,
      score: stage.score,
      quality: stage.quality,
      image: stage.image,
      metrics: stage.metrics,
      focus: stage.next,
    }));
  }
  return serveStageTemplate.map((stage, index) => {
    const frame = keyframes[index];
    return {
      id: stage.id,
      name: stage.name,
      score: null,
      quality: frame?.quality ?? null,
      image: frame?.image || null,
      metrics: [],
      focus: stage.next,
      time: frame?.time ?? null,
    };
  });
}

function upsertProgressSession(session) {
  const sessions = readProgressSessions();
  const index = sessions.findIndex((item) => item.id === session.id);
  const saved = { ...session, updatedAt: new Date().toISOString() };
  if (index >= 0) sessions[index] = { ...sessions[index], ...saved };
  else sessions.push(saved);
  writeProgressSessions(sessions);
  activeProgressSessionId = saved.id;
  return saved;
}

function openVideoDb() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error("IndexedDB is not available in this browser."));
      return;
    }
    const request = indexedDB.open(videoDbName, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(videoStoreName)) {
        db.createObjectStore(videoStoreName, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Could not open local video storage."));
  });
}

async function saveVideoBlob(sessionId, file) {
  if (!file) return false;
  const db = await openVideoDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(videoStoreName, "readwrite");
    transaction.objectStore(videoStoreName).put({
      id: sessionId,
      fileName: file.name,
      type: file.type,
      size: file.size,
      lastModified: file.lastModified,
      savedAt: new Date().toISOString(),
      blob: file,
    });
    transaction.oncomplete = () => {
      db.close();
      resolve(true);
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error || new Error("Could not save video locally."));
    };
  });
}

async function saveVideoSession() {
  const fileName = dom.childFileName.textContent;
  if (!dom.childVideo.src || fileName === "Choose video") {
    if (dom.videoSessionStatus) dom.videoSessionStatus.textContent = "Upload a player video before saving.";
    return;
  }
  const stages = currentStageSnapshots();
  const coverImage = stages.find((stage) => stage.image)?.image || captureCurrentVideoStill();
  const session = {
    id: activeProgressSessionId || `${Date.now()}`,
    date: sessionDateLabel(),
    savedAt: new Date().toISOString(),
    status: motionAnalysisReady ? "analysis" : "video",
    file: fileName,
    videoName: fileName,
    stroke: dom.strokeType.value,
    dominantHand: dom.dominantHand.value,
    age: dom.playerAge.value,
    coverImage,
    keyframeCount: keyframes.length,
    stages,
    anchors: anchorRecords(),
    lowQualityFrames: lowQualityFrames(8),
    tracking: trajectorySummary(),
    correctionsCount: poseCorrections.size,
  };
  if (motionAnalysisReady && latestAnalysis) {
    const basis = referenceBasis();
    const lowestStage = stages.reduce((weakest, item) => {
      const score = numericScore(item.score) ?? 100;
      return score < (numericScore(weakest.score) ?? 100) ? item : weakest;
    }, stages[0] || { score: 100 });
    Object.assign(session, {
      score: latestAnalysis.score,
      racketSpeed: latestAnalysis.racketSpeed,
      ballSpeed: latestAnalysis.ballSpeed,
      ballTossDrift: latestAnalysis.ballTossDrift,
      ballContactGap: latestAnalysis.ballContactGap,
      ballTrackSamples: latestAnalysis.ballTrackSamples,
      racketTrackSamples: latestAnalysis.racketTrackSamples,
      racketPathLength: latestAnalysis.racketPathLength,
      racketRotationRange: latestAnalysis.racketRotationRange,
      trackingQuality: latestAnalysis.trackingQuality,
      contactHeight: latestAnalysis.contactHeight,
      focus: lowestStage ? stageShortName(lowestStage.name) : basis.mode === "notes" ? "Coach notes" : "Video reference",
    });
  }
  const saved = upsertProgressSession(session);
  let videoSaved = false;
  try {
    videoSaved = await saveVideoBlob(saved.id, currentPlayerVideoFile);
  } catch (error) {
    console.warn("Video file was not saved locally.", error);
  }
  renderProgress();
  if (dom.videoSessionStatus) {
    dom.videoSessionStatus.textContent = videoSaved
      ? "Video, stage frames, and analysis saved locally."
      : "Stage frames and analysis saved. Video file was not available.";
  }
  dom.progressStatus.textContent = motionAnalysisReady
    ? "Analysis saved for progress comparison."
    : "Video session saved. Run analysis later to add metrics.";
}

function renderProgress() {
  const sessions = readProgressSessions();
  const scoredSessions = sessions.filter((item) => numericScore(item.score) !== null);
  dom.progressSessionCount.textContent = sessions.length;
  dom.progressBestScore.textContent = scoredSessions.length
    ? Math.max(...scoredSessions.map((item) => numericScore(item.score)))
    : "--";
  const latest = scoredSessions[scoredSessions.length - 1];
  const previous = scoredSessions[scoredSessions.length - 2];
  const trend = latest && previous ? numericScore(latest.score) - numericScore(previous.score) : null;
  dom.progressTrend.textContent = trend == null ? "--" : `${trend >= 0 ? "+" : ""}${trend}`;
  dom.progressStatus.textContent = sessions.length
    ? `${sessions.length} saved video/session${sessions.length === 1 ? "" : "s"}`
    : "No saved sessions yet";

  dom.progressChart.innerHTML = sessions.length
    ? sessions.slice(-12).map((item) => {
        const score = numericScore(item.score);
        const height = score == null ? 8 : clamp(score, 0, 100);
        return `<div class="progress-bar${score == null ? " pending" : ""}" title="${item.date}: ${score == null ? "video saved" : score}"><i style="height:${height}%"></i></div>`;
      }).join("")
    : `<div class="progress-empty">Save a video session or analysis to start tracking serve progress.</div>`;

  dom.progressList.innerHTML = sessions
    .slice()
    .reverse()
    .slice(0, 8)
    .map((item) => {
      const itemScore = numericScore(item.score);
      const currentChronoIndex = sessions.findIndex((session) => session.id === item.id);
      const previousSession = currentChronoIndex > 0 ? sessions[currentChronoIndex - 1] : null;
      const stageTrack = (item.stages || []).map((stage) => {
        const previousStage = previousSession?.stages?.find((entry) => entry.id === stage.id);
        const stageScore = numericScore(stage.score);
        const previousScore = numericScore(previousStage?.score);
        const delta = stageScore !== null && previousScore !== null ? stageScore - previousScore : null;
        return `
          <figure class="progress-stage-thumb" title="${stage.name}: ${stageScore == null ? "no score" : stageScore}${delta == null ? "" : ` (${delta >= 0 ? "+" : ""}${delta})`}">
            ${stage.image ? `<img src="${stage.image}" alt="${stage.name} saved stage" />` : "<i></i>"}
            <figcaption>
              <b>${stageShortName(stage.name)}</b>
              <span>${stageScore == null ? "--" : stageScore}${delta == null ? "" : ` ${delta >= 0 ? "+" : ""}${delta}`}</span>
            </figcaption>
          </figure>
        `;
      }).join("");
      return `
        <article class="progress-item">
          <strong>${item.date}</strong>
          <span>${itemScore == null ? "Video saved" : `Score ${itemScore}`}</span>
          <span>Racket ${item.racketSpeed ?? "--"} km/h</span>
          <span>Ball ${item.ballSpeed ?? "--"} km/h</span>
          <span>${item.anchors?.length || 0} anchors · quality ${item.trackingQuality || "--"}</span>
          <span>${item.focus || "Progress reference"}</span>
          ${stageTrack ? `<div class="progress-stage-strip">${stageTrack}</div>` : ""}
        </article>
      `;
    })
    .join("");
  renderProgressComparison();
}

function renderProgressComparison() {
  if (!dom.progressCompareSelect || !dom.progressCompareStage || !dom.progressCompareGrid) return;
  const sessions = readProgressSessions();
  const previousSessionId = dom.progressCompareSelect.value;
  dom.progressCompareSelect.innerHTML = sessions.length
    ? sessions.map((item) => {
        const score = numericScore(item.score);
        return `<option value="${item.id}">${item.date} · ${sessionDisplayName(item)}${score == null ? " · video saved" : ` · score ${score}`}</option>`;
      }).join("")
    : `<option value="">No saved videos</option>`;
  const selectedSession = sessions.find((item) => item.id === previousSessionId) || sessions[sessions.length - 1];
  if (selectedSession) dom.progressCompareSelect.value = selectedSession.id;
  const savedStages = selectedSession?.stages || [];
  const currentStages = currentStageSnapshots();
  const stageIds = Array.from(new Set([...savedStages.map((stage) => stage.id), ...currentStages.map((stage) => stage.id)]));
  const previousStage = dom.progressCompareStage.value;
  dom.progressCompareStage.innerHTML = stageIds.length
    ? stageIds.map((id) => {
        const stage = savedStages.find((item) => item.id === id) || currentStages.find((item) => item.id === id);
        return `<option value="${id}">${stageShortName(stage?.name || id)}</option>`;
      }).join("")
    : `<option value="">No frames</option>`;
  const selectedStageId = stageIds.includes(previousStage) ? previousStage : stageIds[0];
  if (selectedStageId) dom.progressCompareStage.value = selectedStageId;
  const savedStage = savedStages.find((stage) => stage.id === selectedStageId);
  const currentStage = currentStages.find((stage) => stage.id === selectedStageId);
  if (!selectedSession || !selectedStageId) {
    dom.progressCompareStatus.textContent = "Save a video session to compare progress.";
    dom.progressCompareGrid.innerHTML = `<div class="progress-empty">No saved comparison frames yet.</div>`;
    return;
  }
  dom.progressCompareStatus.textContent = `${sessionDisplayName(selectedSession)} · ${stageShortName(savedStage?.name || currentStage?.name || selectedStageId)}`;
  const card = (title, stage, fallback) => `
    <figure class="compare-frame">
      ${stage?.image ? `<img src="${stage.image}" alt="${title} ${stageShortName(stage.name)} frame" />` : `<div class="compare-empty">${fallback}</div>`}
      <figcaption>
        <strong>${title}</strong>
        <span>${stage?.score == null ? "No analysis score yet" : `Score ${stage.score}`}</span>
        <span>${stage?.quality == null ? "Quality --" : `Quality ${stage.quality}`}</span>
      </figcaption>
    </figure>
  `;
  dom.progressCompareGrid.innerHTML = `${card("Saved", savedStage, "No saved frame")}${card("Current", currentStage, "No current frame")}`;
}

async function saveProgressSession() {
  if (!latestAnalysis || !motionAnalysisReady) {
    dom.progressStatus.textContent = "Run motion analysis before saving progress.";
    return;
  }
  const basis = referenceBasis();
  const stages = buildServeStageDetails(latestAnalysis);
  const lowestStage = stages.reduce((weakest, item) => (item.score < weakest.score ? item : weakest), stages[0]);
  const saved = upsertProgressSession({
    id: activeProgressSessionId || `${Date.now()}`,
    date: sessionDateLabel(),
    savedAt: new Date().toISOString(),
    status: "analysis",
    file: dom.childFileName.textContent,
    videoName: dom.childFileName.textContent,
    stroke: dom.strokeType.value,
    dominantHand: dom.dominantHand.value,
    age: dom.playerAge.value,
    coverImage: stages.find((stage) => stage.image)?.image || captureCurrentVideoStill(),
    keyframeCount: keyframes.length,
    score: latestAnalysis.score,
    racketSpeed: latestAnalysis.racketSpeed,
    ballSpeed: latestAnalysis.ballSpeed,
    ballTossDrift: latestAnalysis.ballTossDrift,
    ballContactGap: latestAnalysis.ballContactGap,
    ballTrackSamples: latestAnalysis.ballTrackSamples,
    racketTrackSamples: latestAnalysis.racketTrackSamples,
    racketPathLength: latestAnalysis.racketPathLength,
    racketRotationRange: latestAnalysis.racketRotationRange,
    trackingQuality: latestAnalysis.trackingQuality,
    contactHeight: latestAnalysis.contactHeight,
    focus: lowestStage ? lowestStage.name.replace(/^[0-9. ]+/, "") : basis.mode === "notes" ? "Coach notes" : "Video reference",
    anchors: anchorRecords(),
    lowQualityFrames: lowQualityFrames(8),
    tracking: trajectorySummary(),
    correctionsCount: poseCorrections.size,
    mechanicsReport: stages.map((stage) => ({
      id: stage.id,
      name: stage.name,
      checkpoint: stage.metric,
      current: stage.metrics?.[0]?.value || `${stage.score}/100`,
      ideal: stageIdealValue(stage),
      status: stage.quality,
      next: stage.score >= 86 ? "Maintain this checkpoint" : stage.next,
    })),
    stages: stages.map((stage) => ({
      id: stage.id,
      name: stage.name,
      score: stage.score,
      quality: stage.quality,
      image: stage.image,
      metrics: stage.metrics,
      focus: stage.next,
    })),
  });
  let videoSaved = false;
  try {
    videoSaved = await saveVideoBlob(saved.id, currentPlayerVideoFile);
  } catch (error) {
    console.warn("Video file was not saved with the progress session.", error);
  }
  renderProgress();
  if (dom.videoSessionStatus) {
    dom.videoSessionStatus.textContent = videoSaved
      ? "Analysis and video saved with this session."
      : "Analysis saved. Original video file was not available to save.";
  }
}

function clearProgressSessions() {
  localStorage.removeItem(progressStorageKey);
  activeProgressSessionId = null;
  if (dom.videoSessionStatus) dom.videoSessionStatus.textContent = "Saved sessions cleared.";
  renderProgress();
}

function readDiaryEntries() {
  try {
    const entries = JSON.parse(localStorage.getItem(diaryStorageKey) || "[]");
    return Array.isArray(entries) ? entries : [];
  } catch {
    return [];
  }
}

function writeDiaryEntries(entries) {
  localStorage.setItem(diaryStorageKey, JSON.stringify(entries));
}

function createDiaryDataDownload(entries) {
  if (diaryDataDownloadUrl) URL.revokeObjectURL(diaryDataDownloadUrl);
  const payload = {
    entries,
    exportedAt: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  diaryDataDownloadUrl = URL.createObjectURL(blob);
  return diaryDataDownloadUrl;
}

function diaryEntryDate() {
  return new Date().toISOString().slice(0, 10);
}

function keyframeTimeLabel(index) {
  const frame = keyframes[index];
  if (frame?.time != null && Number.isFinite(Number(frame.time))) {
    const seconds = Number(frame.time);
    const minutes = Math.floor(seconds / 60);
    const remainder = Math.round(seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainder}`;
  }
  if (frame?.frame != null) return `Frame ${frame.frame}`;
  return `Frame ${index + 1}`;
}

function analysisDiaryEntry(options = {}) {
  const stages = buildServeStageDetails(latestAnalysis);
  const strokeText = dom.strokeType.options[dom.strokeType.selectedIndex].text;
  const handText = dom.dominantHand.options[dom.dominantHand.selectedIndex].text;
  const fileName = dom.childFileName.textContent && dom.childFileName.textContent !== "Choose video"
    ? dom.childFileName.textContent
    : "Motion analysis session";
  const lowestStage = stages.reduce((weakest, item) => (item.score < weakest.score ? item : weakest), stages[0]);
  const keyframeEntries = stages.map((stage, index) => {
    const detections = (stage.metrics || []).map((metric) => ({
      label: metric.label,
      value: String(metric.value),
      status: stage.score >= 80 ? "good" : "issue",
    }));
    const metrics = detections.map((metric) => `${metric.label}: ${metric.value}`).join("; ");
    return {
      time: keyframeTimeLabel(index),
      phase: stageShortName(stage.name),
      score: stage.score,
      status: stage.score >= 80 ? "good" : "issue",
      points: `${stage.quality}. ${metrics || stage.metric}. Focus: ${stage.next}`,
      aiNote: `Evidence: ${stage.evidence}. Coach cue: ${stage.coachComment}`,
      detections,
      image: options.includeImages === false ? null : stage.image,
    };
  });
  return {
    id: `analysis-${Date.now()}`,
    source: "motion-analysis",
    createdAt: new Date().toISOString(),
    date: diaryEntryDate(),
    title: `${fileName} · ${strokeText} analysis`,
    stroke: dom.strokeType.value,
    videoUrl: "",
    rawVideoUrl: "",
    videoName: fileName,
    keyframes: keyframeEntries,
    coach: stages.map((stage) => `${stageShortName(stage.name)}: ${stage.coachComment}`).join("\n"),
    diagnosis: [
      dom.overallAnalysisText.textContent,
      `Overall score: ${latestAnalysis.score}. Racket speed: ${latestAnalysis.racketSpeed} km/h. Ball speed: ${latestAnalysis.ballSpeed} km/h. Contact height: ${latestAnalysis.contactHeight}. Tracking quality: ${latestAnalysis.trackingQuality || "--"}.`,
      `Priority: ${stageShortName(lowestStage.name)} - ${lowestStage.next}`,
    ].filter(Boolean).join("\n\n"),
    coachAi: stages.map((stage) => (
      `${stageShortName(stage.name)} (${stage.quality}, ${stage.score}/100): ${stage.score >= 86 ? "Maintain this checkpoint." : stage.next}`
    )).join("\n"),
    comments: [],
    metrics: {
      score: latestAnalysis.score,
      racketSpeed: latestAnalysis.racketSpeed,
      ballSpeed: latestAnalysis.ballSpeed,
      contactHeight: latestAnalysis.contactHeight,
      trackingQuality: latestAnalysis.trackingQuality,
      dominantHand: handText,
    },
  };
}

function exportAnalysisToDiary() {
  if (!latestAnalysis || !motionAnalysisReady) {
    if (dom.diaryExportStatus) dom.diaryExportStatus.textContent = "Run motion analysis before exporting to diary.";
    return;
  }
  const entries = readDiaryEntries();
  let entry = analysisDiaryEntry({ includeImages: true });
  let nextEntries = [entry, ...entries].slice(0, 30);
  try {
    writeDiaryEntries(nextEntries);
  } catch (error) {
    console.warn("Diary export with images failed; retrying without images.", error);
    entry = analysisDiaryEntry({ includeImages: false });
    nextEntries = [entry, ...entries].slice(0, 30);
    writeDiaryEntries(nextEntries);
  }
  if (dom.diaryExportStatus) {
    const downloadUrl = createDiaryDataDownload(nextEntries);
    dom.diaryExportStatus.innerHTML = `Exported to diary. <a href="./training-diary.html">Open diary</a> · <a href="${downloadUrl}" download="diary-data.json">Download diary-data.json</a>`;
  }
}

function serializePoseCorrections() {
  return Array.from(poseCorrections.entries()).map(([frame, pose]) => [
    frame,
    clonePose(pose),
    poseCorrectionSources.get(frame) || "manual",
  ]);
}

function restorePoseCorrections(entries = [], savedBallAnchors = [], savedRacketManualFrames = []) {
  poseCorrections.clear();
  poseCorrectionSources.clear();
  ballAnchorFrames.clear();
  racketManualFrames.clear();
  entries.forEach(([frame, pose, source]) => {
    const frameNumber = Number(frame);
    if (Number.isFinite(frameNumber)) {
      poseCorrections.set(frameNumber, clonePose(pose));
      poseCorrectionSources.set(frameNumber, source === "manual" || source === "keyframe" ? "userAnchor" : source || "userAnchor");
    }
  });
  savedBallAnchors.forEach((frame) => {
    const frameNumber = Number(frame);
    if (Number.isFinite(frameNumber) && Array.isArray(poseCorrections.get(frameNumber)?.ball)) {
      ballAnchorFrames.add(frameNumber);
    }
  });
  savedRacketManualFrames.forEach((frame) => {
    const frameNumber = Number(frame);
    if (Number.isFinite(frameNumber) && poseCorrections.get(frameNumber)?.racketBox) {
      racketManualFrames.add(frameNumber);
    }
  });
}

function draftPayload() {
  return {
    version: 1,
    savedAt: new Date().toISOString(),
    fileName: dom.childFileName.textContent,
    roi: { confirmed: roiRuntime.confirmed, crop: { ...roiRuntime.crop } },
    motion: {
      strokeType: dom.strokeType.value,
      dominantHand: dom.dominantHand.value,
      playerAge: dom.playerAge.value,
      fps: dom.fpsInput.value,
      courtDistance: dom.courtDistance.value,
      showSkeleton: dom.showSkeleton.checked,
    },
    reference: {
      mode: dom.standardMode.querySelector("button.active")?.dataset.mode || "upload",
      youtubeUrl: dom.youtubeUrl.value,
      clipStart: dom.clipStart.value,
      clipEnd: dom.clipEnd.value,
      notes: dom.coachingNotes.value,
      resourceUrl: dom.coachingResourceUrl.value,
    },
    keyframes: keyframes.map((frame) => ({
      phase: frame.phase,
      time: frame.time,
      note: frame.note,
      image: frame.image,
      pose: clonePose(frame.pose || {}),
    })),
    selectedKeyframeIndex,
    keypointTrackingReady,
    correctionScope,
    session: {
      videoName: dom.childFileName.textContent,
      savedDate: new Date().toISOString(),
      anchors: anchorRecords(),
      lowQualityFrames: lowQualityFrames(10),
      tracking: trajectorySummary(),
      serveStages: serveStageTemplate.map((stage) => ({
        id: stage.id,
        name: stage.name,
        standard: stage.standard,
        lookFor: stage.lookFor,
        checkpoint: stage.metric,
        ideal: stageIdealValue(stage),
      })),
    },
    corrections: serializePoseCorrections(),
    ballAnchors: sortedBallAnchorFrames(),
    racketManualFrames: Array.from(racketManualFrames).sort((a, b) => a - b),
  };
}

function saveDraft() {
  const payload = draftPayload();
  localStorage.setItem(draftStorageKey, JSON.stringify(payload));
  dom.draftStatus.textContent = `Draft saved ${new Date(payload.savedAt).toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}`;
  updateDraftControls();
}

function loadDraft() {
  const raw = localStorage.getItem(draftStorageKey);
  if (!raw) {
    dom.draftStatus.textContent = "No draft found.";
    return;
  }

  try {
    const draft = JSON.parse(raw);
    if (draft.motion) {
      dom.strokeType.value = draft.motion.strokeType || dom.strokeType.value;
      dom.dominantHand.value = draft.motion.dominantHand || dom.dominantHand.value;
      dom.playerAge.value = draft.motion.playerAge || dom.playerAge.value;
      dom.fpsInput.value = draft.motion.fps || dom.fpsInput.value;
      dom.courtDistance.value = draft.motion.courtDistance || dom.courtDistance.value;
      dom.showSkeleton.checked = draft.motion.showSkeleton !== false;
    }
    if (draft.reference) {
      dom.youtubeUrl.value = draft.reference.youtubeUrl || dom.youtubeUrl.value;
      dom.clipStart.value = draft.reference.clipStart || dom.clipStart.value;
      dom.clipEnd.value = draft.reference.clipEnd || dom.clipEnd.value;
      dom.coachingNotes.value = draft.reference.notes || dom.coachingNotes.value;
      dom.coachingResourceUrl.value = draft.reference.resourceUrl || dom.coachingResourceUrl.value;
      setReferenceMode(draft.reference.mode || "youtube");
    }
    if (draft.roi?.crop) {
      setRoiControls(draft.roi.crop);
      roiRuntime.confirmed = Boolean(draft.roi.confirmed);
      dom.confirmRoiButton.textContent = roiRuntime.confirmed ? "ROI Confirmed" : "Confirm ROI";
      dom.confirmRoiButton.classList.toggle("confirmed", roiRuntime.confirmed);
      dom.roiDragBox.classList.toggle("hidden", roiRuntime.confirmed);
    }
    keyframes = Array.isArray(draft.keyframes) ? draft.keyframes : [];
    selectedKeyframeIndex = clamp(Number(draft.selectedKeyframeIndex || 0), 0, Math.max(0, keyframes.length - 1));
    restorePoseCorrections(draft.corrections || [], draft.ballAnchors || [], draft.racketManualFrames || []);
    correctionScope = draft.correctionScope === "keyframes" ? "keyframes" : "video";
    keypointTrackingReady = Boolean(draft.keypointTrackingReady);
    keypointVideoReady = false;
    motionAnalysisReady = false;
    workflowStepOverride = poseCorrections.size ? "keypoints" : keyframes.length ? "frames" : roiRuntime.confirmed ? "frames" : null;
    renderKeyframes();
    drawPoseLoop();
    dom.draftStatus.textContent = `Draft loaded from ${new Date(draft.savedAt).toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}`;
    dom.roiStatus.textContent = poseCorrections.size
      ? correctionScope === "keyframes"
        ? "Draft loaded. Key-frame corrections can go directly to motion analysis after smoothing."
        : "Draft loaded. Use Edit Full Video to continue corrections, then render a new review video."
      : "Draft loaded. Continue from the current workflow step.";
    updateWorkflow();
  } catch {
    dom.draftStatus.textContent = "Draft could not be loaded.";
  }
}

function waitForVideoSeek(video, timeoutMs = 1600) {
  return new Promise((resolve) => {
    let settled = false;
    let timeoutId = null;
    const done = () => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeoutId);
      video.removeEventListener("seeked", done);
      resolve();
    };
    video.addEventListener("seeked", done);
    timeoutId = window.setTimeout(done, timeoutMs);
  });
}

function waitForVideoFrame(video, timeoutMs = 900, targetTime = null) {
  return new Promise((resolve) => {
    if (!video) {
      resolve();
      return;
    }
    let settled = false;
    let timeoutId = null;
    const target = Number.isFinite(targetTime) ? Number(targetTime) : null;
    const finish = () => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeoutId);
      resolve();
    };
    const done = (_now, metadata) => {
      if (settled) return;
      if (target == null || !metadata || Math.abs((metadata.mediaTime || 0) - target) <= 0.08) {
        finish();
        return;
      }
      waitNextFrame();
    };
    const waitNextFrame = () => {
      if (settled) return;
      if (typeof video.requestVideoFrameCallback === "function") {
        video.requestVideoFrameCallback(done);
      } else {
        requestAnimationFrame(() => requestAnimationFrame(finish));
      }
    };
    timeoutId = window.setTimeout(finish, timeoutMs);
    waitNextFrame();
  });
}

async function seekVideoToTime(video, targetTime, timeoutMs = 2200) {
  if (!video || !Number.isFinite(targetTime)) return;
  await waitForVideoMetadata(video, timeoutMs);
  const duration = reliableVideoDuration(video) || targetTime;
  const nextTime = clamp(targetTime, 0, Math.max(0, duration - 0.001));
  if (Math.abs((video.currentTime || 0) - nextTime) > 0.003) {
    video.currentTime = nextTime;
    await waitForVideoSeek(video, timeoutMs);
  } else {
    await nextPaint();
  }
  // Regression guard: keyframe cards must be captured from their own video frame.
  // Waiting only for `seeked` is not enough in Chrome; canvas can still contain the
  // previous decoded frame, which makes all stages look identical.
  await waitForVideoFrame(video, timeoutMs, nextTime);
  await nextPaint();
}

function nextPaint(timeoutMs = 250) {
  return new Promise((resolve) => {
    const timeoutId = window.setTimeout(resolve, timeoutMs);
    requestAnimationFrame(() => {
      window.clearTimeout(timeoutId);
      resolve();
    });
  });
}

function captureAnalysisFrame(poseOverride = null) {
  drawCroppedPlayerVideo();
  drawPose(dom.childCanvas, dom.childVideo, 0, "#4be193", { forceDraw: true, poseOverride });

  const base = dom.childRenderCanvas;
  const overlay = dom.childCanvas;
  const output = document.createElement("canvas");
  output.width = base.width;
  output.height = base.height;
  const ctx = output.getContext("2d");
  ctx.drawImage(base, 0, 0);
  ctx.drawImage(overlay, 0, 0);
  if (canvasLooksBlank(output)) return "";
  return output.toDataURL("image/jpeg", 0.86);
}

function canvasLooksBlank(canvas) {
  const width = canvas?.width || 0;
  const height = canvas?.height || 0;
  if (width < 2 || height < 2) return true;

  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return false;
  const stepX = Math.max(1, Math.floor(width / 80));
  const stepY = Math.max(1, Math.floor(height / 80));
  let sampled = 0;
  let informative = 0;

  try {
    const pixels = context.getImageData(0, 0, width, height).data;
    for (let y = 0; y < height; y += stepY) {
      for (let x = 0; x < width; x += stepX) {
        const index = (y * width + x) * 4;
        const red = pixels[index];
        const green = pixels[index + 1];
        const blue = pixels[index + 2];
        const lum = red + green + blue;
        const spread = Math.max(red, green, blue) - Math.min(red, green, blue);
        sampled += 1;
        if (lum > 150 || spread > 34) informative += 1;
      }
    }
  } catch {
    return false;
  }

  return sampled > 0 && informative / sampled < 0.015;
}

async function refreshAnalysisStageImages() {
  analysisStageImageCache.clear();
  if (!dom.childVideo || !keyframes.length) return;

  const video = dom.childVideo;
  const hasMetadata = await waitForVideoMetadata(video).catch(() => false);
  if (!hasMetadata) return;

  const originalTime = video.currentTime || 0;
  const wasPaused = video.paused;
  const fps = Math.max(1, Number(dom.fpsInput?.value || 60));
  video.pause();

  for (const stage of serveStageTemplate) {
    const match = keyframeForStage(stage);
    if (!match) continue;

    const defaultFrame = clampFrameIndex(keyframeToFrameIndex(match), video);
    const editedFrame = editedAnchorFrameForStage(stage, match);
    const frameIndex = Number.isFinite(editedFrame) ? editedFrame : defaultFrame;
    const time = frameIndex / fps;
    try {
      await seekVideoToTime(video, time, 1800);
      const pose = correctionForFrameIndex(frameIndex)
        || (match.pose ? clonePose(match.pose) : null)
        || baselinePoseForFrame(frameIndex);
      const image = captureAnalysisFrame(pose ? clonePose(pose) : null);
      if (image) {
        analysisStageImageCache.set(frameIndex, image);
        analysisStageImageCache.set(stageImageCacheKey(stage), image);
      }
    } catch (error) {
      console.warn("Could not refresh analysis image", stage.id || stage.name, error);
    }
  }

  await seekVideoToTime(video, originalTime, 1400).catch(() => {});
  if (!wasPaused) video.play().catch(() => {});
}

function captureRawTrainingFrame() {
  const canvas = document.createElement("canvas");
  const crop = getPlayerCropSource(dom.childVideo);
  const cropRatio = crop.width / Math.max(1, crop.height);
  let width = Math.round(960 * cropRatio);
  let height = 960;
  if (width > 960) {
    width = 960;
    height = Math.round(width / Math.max(0.1, cropRatio));
  }
  const rect = { x: 0, y: 0, width, height };
  drawCroppedPlayerVideo({ canvas, rect, scale: 1 });
  return canvas.toDataURL("image/jpeg", 0.9);
}

function reviewRenderRect(width = 1280) {
  const liveRect = dom.childFrame?.getBoundingClientRect?.();
  const liveRatio = liveRect?.width > 80 && liveRect?.height > 80
    ? liveRect.width / liveRect.height
    : lastPlayerPreviewRatio;
  const cropRatio = clamp(liveRatio || 9 / 16, 0.35, 1.8);
  let rectWidth = Math.max(320, Math.round(width));
  let rectHeight = Math.round(rectWidth / Math.max(0.1, cropRatio));
  const maxHeight = Math.max(960, Math.round(width * 1.8));
  if (rectHeight > maxHeight) {
    rectHeight = maxHeight;
    rectWidth = Math.round(rectHeight * Math.max(0.1, cropRatio));
  }
  return { x: 0, y: 0, width: rectWidth, height: rectHeight };
}

function nearestKeyframeImageForFrame(frameIndex) {
  if (!keyframes.length) return null;
  let best = null;
  keyframes.forEach((keyframe) => {
    if (!keyframe?.image) return;
    const distance = Math.abs(keyframeToFrameIndex(keyframe) - frameIndex);
    if (!best || distance < best.distance) best = { image: keyframe.image, distance };
  });
  return best?.image || null;
}

function loadReviewFallbackImage(src) {
  if (!src) return Promise.resolve(null);
  if (reviewFallbackImageCache.has(src)) return reviewFallbackImageCache.get(src);
  const promise = new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });
  reviewFallbackImageCache.set(src, promise);
  return promise;
}

async function drawReviewFallbackFrame(ctx, rect, frameIndex) {
  const image = await loadReviewFallbackImage(nearestKeyframeImageForFrame(frameIndex));
  if (!image) return false;
  const imageRatio = image.naturalWidth / Math.max(1, image.naturalHeight);
  const frameRatio = rect.width / Math.max(1, rect.height);
  let width = rect.width;
  let height = rect.height;
  let x = 0;
  let y = 0;
  if (imageRatio > frameRatio) {
    height = rect.width / imageRatio;
    y = (rect.height - height) / 2;
  } else {
    width = rect.height * imageRatio;
    x = (rect.width - width) / 2;
  }
  ctx.drawImage(image, x, y, width, height);
  return true;
}

function canvasHasVisibleFrameContent(canvas) {
  const ctx = canvas?.getContext?.("2d");
  if (!ctx || !canvas.width || !canvas.height) return false;
  try {
    const sampleWidth = Math.min(48, canvas.width);
    const sampleHeight = Math.min(48, canvas.height);
    const data = ctx.getImageData(
      Math.max(0, Math.floor((canvas.width - sampleWidth) / 2)),
      Math.max(0, Math.floor((canvas.height - sampleHeight) / 2)),
      sampleWidth,
      sampleHeight,
    ).data;
    let brightPixels = 0;
    let variedPixels = 0;
    for (let index = 0; index < data.length; index += 16) {
      const r = data[index];
      const g = data[index + 1];
      const b = data[index + 2];
      if (r + g + b > 120) brightPixels += 1;
      if (Math.max(r, g, b) - Math.min(r, g, b) > 8) variedPixels += 1;
    }
    return brightPixels > 8 && variedPixels > 8;
  } catch {
    return true;
  }
}

function paintAnnotatedFrameToCanvas(outputCanvas, rect = reviewRenderRect()) {
  if (!outputCanvas) return false;
  const renderCanvas = document.createElement("canvas");
  const overlayCanvas = document.createElement("canvas");
  const hasVideoFrame = drawCroppedPlayerVideo({ canvas: renderCanvas, rect, scale: 1 });
  drawPose(overlayCanvas, dom.childVideo, 0, "#4be193", { rect, scale: 1, forceDraw: true });

  outputCanvas.width = rect.width;
  outputCanvas.height = rect.height;
  const ctx = outputCanvas.getContext("2d");
  ctx.clearRect(0, 0, rect.width, rect.height);
  ctx.drawImage(renderCanvas, 0, 0, rect.width, rect.height);
  ctx.drawImage(overlayCanvas, 0, 0, rect.width, rect.height);
  return hasVideoFrame && canvasHasVisibleFrameContent(renderCanvas);
}

async function paintAnnotatedFrameToCanvasAtFrame(outputCanvas, frameIndex, rect = reviewRenderRect()) {
  if (!outputCanvas) return false;
  const safeFrame = clampFrameIndex(frameIndex, dom.childVideo);
  const cropTargetRatio = rect.width / Math.max(1, rect.height);
  outputCanvas.width = rect.width;
  outputCanvas.height = rect.height;
  const ctx = outputCanvas.getContext("2d");
  ctx.clearRect(0, 0, rect.width, rect.height);
  ctx.fillStyle = "#14211d";
  ctx.fillRect(0, 0, rect.width, rect.height);
  const renderCanvas = document.createElement("canvas");
  const hasVideoFrame = drawCroppedPlayerVideo({ canvas: renderCanvas, rect, scale: 1, cropTargetRatio });
  if (hasVideoFrame) {
    ctx.drawImage(renderCanvas, 0, 0, rect.width, rect.height);
  } else {
    return false;
  }
  const overlayCanvas = document.createElement("canvas");
  const pose = correctionForFrameIndex(safeFrame) || currentFramePose();
  drawPose(overlayCanvas, dom.childVideo, 0, "#4be193", {
    rect,
    scale: 1,
    forceDraw: true,
    poseOverride: pose,
    frameIndexOverride: safeFrame,
    cropTargetRatio,
  });
  ctx.drawImage(overlayCanvas, 0, 0, rect.width, rect.height);
  return hasVideoFrame || canvasHasVisibleFrameContent(renderCanvas);
}

function downloadJsonFile(fileName, payload) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function trainingAnnotationForPose(pose) {
  const normalized = addTrackedObjects(clonePose(pose || currentEditablePose()));
  return {
    bodyKeypoints: Object.fromEntries(Object.entries(normalized)
      .filter(([name, value]) => Array.isArray(value) && name !== "ball" && !name.startsWith("racket"))),
    hiddenKeypoints: normalized.hiddenKeypoints || {},
    racket: normalized.racketBox
      ? {
          type: "rotated_box",
          class: "tennis_racket",
          ...normalizeRacketBox(normalized.racketBox),
          trainingTarget: "YOLO-seg mask; convert mask polygon to minimum-area rotated rectangle",
        }
      : null,
    ball: Array.isArray(normalized.ball)
      ? {
          type: "center_point",
          class: "tennis_ball",
          x: normalized.ball[0],
          y: normalized.ball[1],
          confidence: Number(normalized.ballConfidence ?? 0.35),
          source: normalized.ballSource || "manual",
        }
      : null,
  };
}

function saveTrainingSample() {
  if (!roiRuntime.confirmed) {
    dom.roiStatus.textContent = "Confirm ROI before saving a training sample.";
    return;
  }
  dom.childVideo.pause();
  if (poseRuntime.editMode && !poseRuntime.editedPose) refreshEditablePoseFromFrame();
  const frameIndex = currentFrameIndex();
  const pose = poseRuntime.editMode
    ? currentEditablePose()
    : correctionForFrameIndex(frameIndex) || currentFramePose();
  const payload = {
    schemaVersion: 1,
    kind: "junior-tennis-training-sample",
    savedAt: new Date().toISOString(),
    video: {
      fileName: dom.childFileName.textContent,
      currentTime: Number((dom.childVideo.currentTime || 0).toFixed(4)),
      frameIndex,
      fps: Number(dom.fpsInput.value || 60),
      duration: Number((dom.childVideo.duration || 0).toFixed(4)),
    },
    motion: {
      strokeType: dom.strokeType.value,
      dominantHand: dom.dominantHand.value,
      stage: currentPhaseName(),
    },
    roi: {
      crop: { ...roiRuntime.crop },
      sourceVideoSize: {
        width: dom.childVideo.videoWidth || 0,
        height: dom.childVideo.videoHeight || 0,
      },
    },
    image: {
      type: "cropped-player-frame",
      dataUrl: captureRawTrainingFrame(),
    },
    preview: {
      type: "annotated-cropped-frame",
      dataUrl: captureAnalysisFrame(),
    },
    annotation: trainingAnnotationForPose(pose),
    provenance: {
      body: "MediaPipe Pose plus user corrections",
      racket: "manual/fallback rotated box; YOLO-seg mask should replace this after training",
      ball: "manual/fallback center point; YOLO small-object detector should replace this after training",
    },
  };
  const safeName = (dom.childFileName.textContent || "player-video")
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-z0-9_-]+/gi, "-")
    .slice(0, 48);
  downloadJsonFile(`${safeName}-frame-${frameIndex}-training-sample.json`, payload);
  dom.roiStatus.textContent = `Training sample saved for frame ${frameIndex}.`;
}

function snapshotDetectedPoseForKeyframe(frameIndex) {
  const detectedPose = poseRuntime.childPose || poseRuntime.lastDetectedPose;
  const pose = detectedPose && Object.keys(detectedPose).length >= 4
    ? detectedPose
    : baselinePoseForFrame(frameIndex);
  return addTrackedObjects(clonePose(pose));
}

function fallbackKeyframeCardsForStages(frames) {
  const fps = Math.max(1, Number(dom.fpsInput?.value || 60));
  return frames.map((frame) => {
    const frameIndex = Math.max(0, Math.round((frame.time || 0) * fps));
    const pose = baselinePoseForFrame(frameIndex);
    return {
      ...frame,
      frameIndex,
      image: fallbackStageSnapshotForStage({ phase: frame.phase }) || captureAnalysisFrame(pose),
      pose,
    };
  });
}

async function generateKeyframes(data) {
  await withTimeout(initPoseDetector(), 1000).catch(() => {
    poseRuntime.failed = true;
    dom.childPoseScore.textContent = "CV fallback";
  });
  const video = dom.childVideo;
  dom.keyframeStatus.textContent = "Preparing video frames...";
  const metadataReady = await waitForVideoMetadata(video, 3600);
  const duration = reliableVideoDuration(video) || 2.2;
  const originalTime = video.currentTime || 0;
  const wasPaused = video.paused;
  const frames = [
    {
      phase: "Setup",
      time: duration * 0.06,
      note: "Balanced platform stance and quiet head before toss.",
    },
    {
      phase: "Toss",
      time: duration * 0.18,
      note: "Racket should stay up during toss and not move/drop too early.",
    },
    {
      phase: "Load",
      time: duration * 0.32,
      note: `Legs and hips load before upper body; shoulder-hip separation is ${data.shoulderHip}°.`,
    },
    {
      phase: "Racket Drop",
      time: duration * 0.45,
      note: "Racket drop should happen after the legs have loaded and started driving.",
    },
    {
      phase: "Acceleration",
      time: duration * 0.56,
      note: "Lead with the edge/back of racket; avoid opening racket face too early.",
    },
    {
      phase: "Contact",
      time: duration * 0.66,
      note: `Contact height is around ${data.contactHeight} body ratio; wrist should be clearly above shoulder.`,
    },
    {
      phase: "Deceleration",
      time: duration * 0.76,
      note: "Leg drive should not arrive late after racket drop/contact.",
    },
    {
      phase: "Finish",
      time: duration * 0.88,
      note: "Land with a soft front knee and balanced finish.",
    },
  ];

  if (!metadataReady || reliableVideoDuration(video) <= 0) {
    keyframes = fallbackKeyframeCardsForStages(frames);
    selectedKeyframeIndex = 0;
    keypointTrackingReady = false;
    renderKeyframes();
    dom.keyframeStatus.textContent = `${keyframes.length} key frames generated from default timing`;
    updateWorkflow();
    return;
  }

  dom.keyframeStatus.textContent = "Extracting key frames...";
  // Clear stale keyframe cards while extracting. If extraction fails, the UI
  // should not keep showing a previous bad run where every stage used frame 0.
  keyframes = [];
  selectedKeyframeIndex = 0;
  renderKeyframes();
  dom.keyframeStatus.textContent = "Extracting key frames...";
  const cards = [];
  video.pause();

  let extractionError = null;
  try {
    for (const frame of frames) {
      await seekVideoToTime(video, frame.time, 800);
      const actualTime = Number.isFinite(video.currentTime) ? video.currentTime : frame.time;
      const frameIndex = frameIndexForTime(actualTime);
      if (Math.abs(actualTime - frame.time) > 0.18 && frameIndex === 0 && frame.time > 0.2) {
        throw new Error(`Video seek did not advance to ${frame.phase}`);
      }
      poseRuntime.childPose = null;
      poseRuntime.lastDetectedPose = null;
      poseRuntime.trackedPose = null;
      await waitForPoseIdle();
      await detectChildPose(video, { force: true, skipObjects: true, timeoutMs: 700 }).catch(() => {});
      await nextPaint();
      const pose = snapshotDetectedPoseForKeyframe(frameIndex);
      const image = captureAnalysisFrame(pose) || fallbackStageSnapshotForStage({ phase: frame.phase });
      // Keep a frozen pose + image for this stage. Do not let later playback,
      // smoothing, or editor state redraw every card from the same current frame.
      cards.push({
        ...frame,
        time: actualTime,
        frameIndex,
        image,
        pose,
      });
    }
    const uniqueFrames = new Set(cards.map((card) => card.frameIndex));
    if (uniqueFrames.size < Math.min(3, cards.length)) {
      throw new Error("Video frame extraction returned duplicate frames");
    }
  } catch (error) {
    extractionError = error;
    console.warn("Keyframe extraction failed", error);
  } finally {
    await seekVideoToTime(video, originalTime, 800);
    if (!wasPaused) video.play();
  }

  if (extractionError) {
    keyframes = fallbackKeyframeCardsForStages(frames);
    selectedKeyframeIndex = 0;
    keypointTrackingReady = false;
    renderKeyframes();
    dom.keyframeStatus.textContent = `${keyframes.length} key frames generated from default timing`;
    updateWorkflow();
    return;
  }

  keyframes = cards;
  selectedKeyframeIndex = 0;
  keypointTrackingReady = false;
  renderKeyframes();
  dom.keyframeStatus.textContent = `${keyframes.length} key frames generated`;
  updateWorkflow();
}

function renderKeyframes() {
  if (!keyframes.length) {
    dom.keyframeGrid.innerHTML = `
      <article class="keyframe-card empty">Setup</article>
      <article class="keyframe-card empty">Toss</article>
      <article class="keyframe-card empty">Load</article>
      <article class="keyframe-card empty">Racket Drop</article>
      <article class="keyframe-card empty">Acceleration</article>
      <article class="keyframe-card empty">Contact</article>
      <article class="keyframe-card empty">Deceleration</article>
      <article class="keyframe-card empty">Finish</article>
    `;
    dom.keyframeStatus.textContent = "Run analysis to generate frames";
    return;
  }

  dom.keyframeGrid.innerHTML = keyframes
    .map(
      (frame, index) => {
        const frameIndex = keyframeToFrameIndex(frame);
        const source = poseCorrectionSources.get(frameIndex) || "defaultAnchor";
        const quality = trackingQualityForFrame(frameIndex);
        return `
        <article class="keyframe-card ${index === selectedKeyframeIndex ? "selected" : ""} ${anchorTypeClass(source)}" data-index="${index}">
          <img src="${frame.image}" alt="${frame.phase} key frame" data-expand="${index}" />
          <div class="keyframe-body">
            <div class="keyframe-title-row">
              <strong>${frame.phase}</strong>
              <span class="anchor-badge ${anchorTypeClass(source)}">${anchorTypeLabel(source)}</span>
            </div>
            <span class="keyframe-meta">${frame.time.toFixed(2)}s · quality ${quality.score}</span>
            <p>${frame.note}</p>
          </div>
        </article>
      `;
      },
    )
    .join("");
  dom.keyframeStatus.textContent = `${keyframes.length} key frame${keyframes.length === 1 ? "" : "s"}`;
}

function currentPhaseName() {
  return dom.phaseName.textContent || "Custom";
}

async function captureCurrentKeyframe(phase = currentPhaseName()) {
  if (!roiRuntime.confirmed) {
    dom.roiStatus.textContent = "Confirm ROI before adding key frames.";
    return null;
  }

  drawCroppedPlayerVideo();
  await waitForVideoFrame(dom.childVideo);
  await waitForPoseIdle();
  await detectChildPose(dom.childVideo, { force: true });
  await nextPaint();
  const frameIndex = currentFrameIndex(dom.childVideo);
  const pose = snapshotDetectedPoseForKeyframe(frameIndex);
  return {
    phase,
    time: dom.childVideo.currentTime || 0,
    frameIndex,
    note: `Manually selected frame at ${(dom.childVideo.currentTime || 0).toFixed(2)}s.`,
    image: captureAnalysisFrame(pose),
    pose,
  };
}

async function addCurrentKeyframe() {
  const frame = await captureCurrentKeyframe("Custom");
  if (!frame) return;
  keyframes.push(frame);
  selectedKeyframeIndex = keyframes.length - 1;
  const frameIndex = keyframeToFrameIndex(frame);
  seedDefaultAnchorForFrame(frameIndex, "defaultAnchor", frame.pose);
  scheduleAutoSmoothTrack("New anchor frame added. Updating nearby tracked result.", frameIndex);
  keypointTrackingReady = false;
  renderKeyframes();
  invalidateKeypointVideo("Key frames changed. Render a new review video.");
  updateWorkflow();
}

async function updateSelectedKeyframe() {
  if (!keyframes.length) return;
  const current = keyframes[selectedKeyframeIndex];
  const frame = await captureCurrentKeyframe(current?.phase || "Custom");
  if (!frame) return;
  frame.note = current?.note || frame.note;
  keyframes[selectedKeyframeIndex] = frame;
  const frameIndex = keyframeToFrameIndex(frame);
  seedDefaultAnchorForFrame(frameIndex, "defaultAnchor", frame.pose);
  scheduleAutoSmoothTrack("Anchor frame updated. Updating nearby tracked result.", frameIndex);
  keypointTrackingReady = false;
  renderKeyframes();
  invalidateKeypointVideo("Selected key frame changed. Render a new review video.");
  updateWorkflow();
}

function deleteSelectedKeyframe() {
  if (!keyframes.length) return;
  const removedFrame = keyframeToFrameIndex(keyframes[selectedKeyframeIndex]);
  keyframes.splice(selectedKeyframeIndex, 1);
  if (poseCorrectionSources.get(removedFrame) === "defaultAnchor") {
    poseCorrections.delete(removedFrame);
    poseCorrectionSources.delete(removedFrame);
  }
  selectedKeyframeIndex = clamp(selectedKeyframeIndex, 0, Math.max(0, keyframes.length - 1));
  keypointTrackingReady = false;
  scheduleAutoSmoothTrack("Anchor frame deleted. Updating nearby tracked result.", removedFrame);
  renderKeyframes();
  invalidateKeypointVideo("Key frames changed. Render a new review video.");
  updateWorkflow();
}

function selectKeyframe(index) {
  selectedKeyframeIndex = clamp(index, 0, Math.max(0, keyframes.length - 1));
  const frame = keyframes[selectedKeyframeIndex];
  if (frame) {
    dom.childVideo.pause();
    dom.childVideo.currentTime = frame.time;
    if (poseRuntime.editMode) {
      window.setTimeout(() => {
        setEditedPoseForCurrentFrame(currentEditablePose());
        refreshRacketDetectionForCurrentEditFrame();
        syncFrameScrubber();
        drawPoseLoop();
      }, 80);
    }
  }
  renderKeyframes();
}

function expandKeyframe(index) {
  const frame = keyframes[index];
  if (!frame) return;
  dom.frameModalImage.src = frame.image;
  if (dom.frameModal.showModal) {
    dom.frameModal.showModal();
  }
}

async function detectKeyframes() {
  if (keyframeDetectionBusy) {
    const stuckForMs = Date.now() - keyframeDetectionStartedAt;
    if (stuckForMs < 60000) return;
    dom.keyframeStatus.textContent = "Still processing. Wait a moment, or refresh if the browser is stuck.";
    return;
  }
  if (!roiRuntime.confirmed) {
    dom.roiStatus.textContent = "Confirm ROI before detecting key frames.";
    return;
  }

  keyframeDetectionBusy = true;
  keyframeDetectionStartedAt = Date.now();
  setStatus("Finding key frames", "running");
  dom.detectKeyframesButton.disabled = true;
  setPrimaryWorkflowAction("Finding key frames", true);
  const watchdog = window.setTimeout(() => {
    if (!keyframeDetectionBusy) return;
    dom.keyframeStatus.textContent = "Still extracting key frames and running racket detection...";
    dom.roiStatus.textContent = "The model is still working. Keep this page open.";
  }, 20000);

  try {
    latestAnalysis = analyzeMotion();
    await generateKeyframes(latestAnalysis);
    if (!keyframes.length) throw new Error("No key frames were captured.");
    const defaultAnchorCount = seedDefaultAnchorFramesFromKeyframes();
    renderKeyframes();
    dom.keyframeStatus.textContent = `${keyframes.length} key frames generated`;
    dom.roiStatus.textContent = `${defaultAnchorCount} default anchor frames are ready. Choose a correction path to continue.`;
    workflowStepOverride = "frames";
    drawPoseLoop();
    window.setTimeout(() => {
      dom.keyframeGrid.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 80);
    setStatus("Key frames ready", "done");
  } catch (error) {
    console.error(error);
    if (keyframes.length) {
      renderKeyframes();
      dom.keyframeStatus.textContent = `${keyframes.length} key frames generated`;
      dom.roiStatus.textContent = "Key frames are ready. The optional tracking step can be run after you choose a correction path.";
      workflowStepOverride = "frames";
      setStatus("Key frames ready", "done");
    } else {
      dom.keyframeStatus.textContent = "Key frame detection could not finish. Try again or add frames manually from the video.";
      dom.roiStatus.textContent = "Key frame detection stopped before completion. The buttons are ready to try again.";
      setStatus("Ready", "done");
    }
  } finally {
    window.clearTimeout(watchdog);
    keyframeDetectionBusy = false;
    keyframeDetectionStartedAt = 0;
    dom.detectKeyframesButton.disabled = false;
    updateWorkflow();
  }
}

async function exportKeypointVideo() {
  if (!roiRuntime.confirmed) {
    dom.roiStatus.textContent = "Confirm ROI before rendering the review video.";
    return;
  }
  if (!keyframes.length) {
    dom.roiStatus.textContent = "Detect or select key frames before rendering the review video.";
    return;
  }
  if (!poseCorrections.size) {
    dom.roiStatus.textContent = "Save corrections on at least one frame before rendering the review video.";
    return;
  }
  if (!keypointTrackingReady) {
    dom.roiStatus.textContent = "Generate Smooth Track before rendering the review video.";
    workflowStepOverride = "keypoints";
    updateWorkflow();
    return;
  }
  if (!window.MediaRecorder) {
    dom.roiStatus.textContent = "Video export is not supported in this browser.";
    return;
  }

  const video = dom.childVideo;
  const originalTime = video.currentTime || 0;
  const wasPaused = video.paused;
  const exportRect = reviewRenderRect(720);
  const output = document.createElement("canvas");
  output.width = exportRect.width;
  output.height = exportRect.height;
  const exportFrameRate = 20;
  const exportDuration = Math.min(
    Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 4,
    8,
  );
  const stream = output.captureStream(0);
  const canvasTrack = stream.getVideoTracks?.()[0];
  const recorderOptions = MediaRecorder.isTypeSupported("video/webm;codecs=vp9")
    ? { mimeType: "video/webm;codecs=vp9" }
    : MediaRecorder.isTypeSupported("video/webm")
      ? { mimeType: "video/webm" }
      : {};
  const recorder = new MediaRecorder(stream, recorderOptions);
  const chunks = [];

  recorder.ondataavailable = (event) => {
    if (event.data.size) chunks.push(event.data);
  };

  dom.exportVideoButton.disabled = true;
  dom.downloadVideoLink.classList.add("hidden");
  dom.annotatedVideoPanel.classList.remove("hidden");
  reviewVideoRendering = true;
  dom.annotatedVideo.removeAttribute("src");
  dom.annotatedVideo.removeAttribute("poster");
  dom.annotatedVideo.load();
  syncAnnotatedVideoShell("review");
  dom.annotatedVideoStatus.textContent = "Rendering annotated video...";
  dom.roiStatus.textContent = "Rendering annotated keypoint video...";

  const done = new Promise((resolve) => {
    recorder.onstop = resolve;
  });

  const paintExportFrame = async (frameIndex = currentFrameIndex(video)) => {
    const hasVideoFrame = await paintAnnotatedFrameToCanvasAtFrame(output, frameIndex, exportRect);
    if (typeof canvasTrack?.requestFrame === "function") {
      canvasTrack.requestFrame();
    }
    return hasVideoFrame;
  };

  video.pause();
  await seekVideoToTime(video, 0);
  let firstFrameReady = await paintExportFrame(0);
  for (let retry = 0; retry < 4 && !firstFrameReady; retry += 1) {
    await waitForVideoFrame(video, 700);
    firstFrameReady = await paintExportFrame(0);
  }
  const firstFramePoster = output.toDataURL("image/jpeg", 0.82);
  setupReviewFramePreview(0);
  syncAnnotatedVideoShell("review");
  if (!firstFrameReady) {
    dom.roiStatus.textContent = "Could not read the video frame. Try rendering again after the player video is visible.";
  }

  recorder.start(250);
  const frameCount = Math.max(1, Math.ceil(exportDuration * exportFrameRate));

  try {
    for (let frame = 0; frame < frameCount; frame += 1) {
      const time = clamp(frame / exportFrameRate, 0, exportDuration);
      await seekVideoToTime(video, time, 900);
      await paintExportFrame(frameIndexForTime(time));
      const progress = clamp((frame + 1) / frameCount, 0, 1);
      dom.annotatedVideoStatus.textContent = `Rendering annotated video... ${Math.round(progress * 100)}%`;
      await new Promise((resolve) => window.setTimeout(resolve, 1000 / exportFrameRate));
    }
  } catch (error) {
    console.warn("Review video frame rendering failed", error);
    dom.roiStatus.textContent = "Review video rendering had trouble. Use the frame preview, then try rendering again.";
  }

  recorder.stop();
  video.pause();
  await done;

  const blob = new Blob(chunks, { type: "video/webm" });
  if (blob.size < 2048) {
    reviewVideoRendering = false;
    keypointVideoReady = false;
    workflowStepOverride = "review";
    dom.annotatedVideo.removeAttribute("src");
    dom.annotatedVideo.removeAttribute("poster");
    dom.annotatedVideo.load();
    syncAnnotatedVideoShell("review");
    dom.annotatedVideoStatus.textContent = "Video recorder returned an empty file. Frame Preview is still available.";
    dom.downloadVideoLink.classList.add("hidden");
    dom.roiStatus.textContent = "Review video was empty. Check Frame Preview or render again.";
    dom.exportVideoButton.disabled = false;
    updateWorkflow();
    await seekVideoToTime(video, originalTime);
    if (!wasPaused) video.play();
    return;
  }
  if (annotatedVideoUrl) URL.revokeObjectURL(annotatedVideoUrl);
  const url = URL.createObjectURL(blob);
  annotatedVideoUrl = url;
  reviewVideoRendering = false;
  keypointVideoReady = true;
  motionAnalysisReady = false;
  workflowStepOverride = "review";
  dom.annotatedVideo.removeAttribute("poster");
  dom.annotatedVideo.src = url;
  dom.annotatedVideo.load();
  syncAnnotatedVideoShell("review");
  dom.annotatedVideoStatus.textContent = "Ready for replay and frame review";
  dom.downloadVideoLink.href = url;
  dom.downloadVideoLink.classList.remove("hidden");
  dom.roiStatus.textContent = "Annotated keypoint video rendered.";
  dom.exportVideoButton.disabled = false;
  updateWorkflow();
  setupReviewFramePreview(0);
  dom.annotatedVideoPanel.scrollIntoView({ behavior: "smooth", block: "start" });

  await seekVideoToTime(video, originalTime);
  if (!wasPaused) video.play();
}

function setupReviewFramePreview(frame = currentFrameIndex(dom.childVideo)) {
  if (!dom.reviewFrameScrubber || !dom.reviewFrameCanvas || !dom.childVideo.duration) return;
  const totalFrames = totalFrameCount(dom.childVideo);
  const safeFrame = clampFrameIndex(frame, dom.childVideo);
  dom.reviewFrameScrubber.max = String(maxFrameIndex(dom.childVideo));
  dom.reviewFrameScrubber.value = String(safeFrame);
  renderReviewFramePreview(safeFrame);
}

async function renderReviewFramePreview(frame = Number(dom.reviewFrameScrubber?.value || 0)) {
  if (!dom.reviewFrameCanvas || !dom.childVideo.src) return;
  const token = ++reviewPreviewToken;
  const fps = Math.max(1, Number(dom.fpsInput.value || 60));
  const totalFrames = totalFrameCount(dom.childVideo);
  const safeFrame = clampFrameIndex(frame, dom.childVideo);
  const targetTime = safeFrame / fps;
  const wasPaused = dom.childVideo.paused;
  dom.childVideo.pause();
  await seekVideoToTime(dom.childVideo, targetTime, 1200);
  if (token !== reviewPreviewToken) return;

  const displayWidth = Math.max(480, Math.min(900, Math.round(dom.reviewFrameCanvas.clientWidth || 720)));
  const rect = reviewRenderRect(displayWidth);
  await paintAnnotatedFrameToCanvasAtFrame(dom.reviewFrameCanvas, safeFrame, rect);
  if (dom.reviewFrameLabel) {
    const timeLabel = Number.isFinite(targetTime) ? `${targetTime.toFixed(2)}s` : "--";
    dom.reviewFrameLabel.textContent = `Frame ${safeFrame + 1} / ${Math.max(1, totalFrames)} · ${timeLabel}`;
  }
  if (dom.reviewFrameScrubber) {
    dom.reviewFrameScrubber.value = String(safeFrame);
  }
  if (!wasPaused && currentWorkflowStep() !== "review" && currentWorkflowStep() !== "analysis") {
    dom.childVideo.play();
  }
}

function replayAnnotatedVideo() {
  if (!dom.annotatedVideo.src) return;
  dom.annotatedVideo.currentTime = 0;
  dom.annotatedVideo.play();
}

function toggleAnnotatedPause() {
  if (!dom.annotatedVideo.src) return;
  if (dom.annotatedVideo.paused) {
    dom.annotatedVideo.play();
  } else {
    dom.annotatedVideo.pause();
  }
}

async function editCurrentReviewFrame() {
  const hasVideo = hasRenderedAnnotatedVideo();
  if (!hasVideo && !dom.reviewFrameCanvas) {
    dom.annotatedVideoStatus.textContent = "Use Frame Preview or render a review video first.";
    return;
  }
  dom.annotatedVideo.pause();
  dom.childVideo.pause();
  const fps = Math.max(1, Number(dom.fpsInput.value || 60));
  const previewFrame = Number(dom.reviewFrameScrubber?.value || NaN);
  const frameTime = Number.isFinite(previewFrame)
    ? previewFrame / fps
    : hasVideo
      ? clamp(dom.annotatedVideo.currentTime || 0, 0, dom.childVideo.duration || 0)
      : dom.childVideo.currentTime || 0;
  await seekVideoToTime(dom.childVideo, frameTime);
  if (!poseRuntime.editMode) toggleKeypointEdit();
  setEditedPoseForCurrentFrame(currentEditablePose());
  refreshRacketDetectionForCurrentEditFrame();
  syncFrameScrubber();
  dom.roiStatus.textContent = `Editing review frame ${currentFrameIndex()}. Save it, then render the review video again.`;
  dom.childFrame.scrollIntoView({ behavior: "smooth", block: "center" });
}

function updateAnnotatedPlaybackState() {
  if (!dom.annotatedVideo.src) {
    dom.pauseAnnotatedButton.textContent = "Pause";
    return;
  }
  dom.pauseAnnotatedButton.textContent = dom.annotatedVideo.paused ? "Play" : "Pause";
}

function syncReviewPreviewFromAnnotatedVideo() {
  if (!dom.annotatedVideo.src || !dom.annotatedVideo.duration || !dom.reviewFrameScrubber) return;
  const ratio = clamp((dom.annotatedVideo.currentTime || 0) / dom.annotatedVideo.duration, 0, 1);
  const frame = Math.round(ratio * maxFrameIndex(dom.childVideo));
  setupReviewFramePreview(frame);
}

async function runAnalysis() {
  if (!roiRuntime.confirmed) {
    setStatus("Confirm ROI first", "running");
    dom.roiStatus.textContent = "Please confirm the zoomed player region before analysis.";
    return;
  }
  if (!keyframes.length) {
    setStatus("Key frames needed", "running");
    dom.roiStatus.textContent = "Detect or select key frames before motion analysis.";
    return;
  }
  const hasAnalysisInput = keypointVideoReady || isKeyframeOnlyCorrectionReady();
  if (!hasAnalysisInput) {
    setStatus(isKeyframeOnlyCorrectionMode() ? "Corrections needed" : "Review video needed", "running");
    dom.roiStatus.textContent = isKeyframeOnlyCorrectionMode()
      ? "Save key-frame corrections and generate the smooth track before motion analysis."
      : "Render and review the keypoint video before motion analysis.";
    return;
  }

  setStatus("Analyzing", "running");
  dom.analyzeButton.disabled = true;

  await refreshAnalysisStageImages();
  await new Promise((resolve) => setTimeout(resolve, 650));
  latestAnalysis = analyzeMotion();
  updateMetrics(latestAnalysis);
  buildReport(latestAnalysis);
  motionAnalysisReady = true;
  if (keypointVideoReady) {
    dom.annotatedVideoPanel.classList.remove("hidden");
    syncAnnotatedVideoShell("analysis");
    dom.annotatedVideoStatus.textContent = "Final reviewed video used for motion analysis";
  } else {
    dom.annotatedVideoPanel.classList.add("hidden");
    dom.annotatedVideoStatus.textContent = "Analysis generated from corrected key frames";
  }
  dom.progressStatus.textContent = "Analysis complete. Save this session to track progress.";
  if (dom.diaryExportStatus) dom.diaryExportStatus.textContent = "Analysis complete. Export this result to the training diary.";

  setStatus("Complete", "done");
  dom.analyzeButton.disabled = false;
  updateWorkflow();
}

async function runWorkflowPrimaryAction() {
  const step = currentWorkflowStep();
  if (step === "roi") {
    confirmRoi();
    dom.keyframeGrid.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  if (step === "frames") {
    if (!keyframes.length) {
      await detectKeyframes();
      workflowStepOverride = "frames";
      updateWorkflow();
      dom.keyframeGrid.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    await openSelectedKeyframeEditor();
    return;
  }
  if (step === "keypoints") {
    if (poseRuntime.editMode) {
      toggleKeypointEdit();
      if (isKeyframeOnlyCorrectionReady()) {
        workflowStepOverride = "analysis";
        updateWorkflow();
        scrollToMotionAnalysis();
      }
      return;
    }
    if (!keypointTrackingReady && poseCorrections.size) {
      await generateSmoothTrack();
      if (isKeyframeOnlyCorrectionReady()) {
        workflowStepOverride = "analysis";
        updateWorkflow();
        scrollToMotionAnalysis();
      }
      return;
    }
    if (keypointTrackingReady) {
      workflowStepOverride = isKeyframeOnlyCorrectionMode() ? "analysis" : "review";
      updateWorkflow();
      if (isKeyframeOnlyCorrectionMode()) {
        scrollToMotionAnalysis();
      } else {
        dom.annotatedVideoPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }
    await openSelectedKeyframeEditor();
    return;
  }
  if (step === "review") {
    await exportKeypointVideo();
    return;
  }
  await runAnalysis();
}

dom.childVideoInput.addEventListener("change", () =>
  loadVideo(dom.childVideoInput, dom.childVideo, dom.childFileName, dom.childEmpty),
);

dom.standardVideoInput.addEventListener("change", () =>
  loadVideo(dom.standardVideoInput, dom.standardVideo, dom.standardFileName, dom.standardEmpty),
);

dom.showSkeleton.addEventListener("change", drawPoseLoop);
dom.showRacketMask?.addEventListener("change", drawPoseLoop);
dom.workflowSteps.addEventListener("click", (event) => {
  const stepNode = event.target.closest("[data-step]");
  if (!stepNode) return;
  goToWorkflowStep(stepNode.dataset.step);
});
dom.analyzeButton.onclick = runWorkflowPrimaryAction;
dom.workflowNextButton.onclick = runWorkflowPrimaryAction;
dom.saveDraftButton.addEventListener("click", saveDraft);
dom.loadDraftButton.addEventListener("click", loadDraft);
dom.confirmRoiButton.addEventListener("click", confirmRoi);
dom.editKeyframeAnchorsButton?.addEventListener("click", openSelectedKeyframeEditor);
dom.editKeypointsButton.addEventListener("click", () => {
  if (poseRuntime.editMode) {
    toggleKeypointEdit();
    return;
  }
  openFullVideoEditor();
});
dom.fixKeyframesOnlyButton?.addEventListener("click", openSelectedKeyframeEditor);
dom.fixFullVideoButton?.addEventListener("click", openFullVideoEditor);
dom.exportVideoButton.addEventListener("click", exportKeypointVideo);
dom.replayAnnotatedButton.addEventListener("click", replayAnnotatedVideo);
dom.pauseAnnotatedButton.addEventListener("click", toggleAnnotatedPause);
dom.editReviewFrameButton.addEventListener("click", editCurrentReviewFrame);
dom.annotatedVideo.addEventListener("play", updateAnnotatedPlaybackState);
dom.annotatedVideo.addEventListener("pause", updateAnnotatedPlaybackState);
dom.annotatedVideo.addEventListener("pause", syncReviewPreviewFromAnnotatedVideo);
dom.annotatedVideo.addEventListener("ended", updateAnnotatedPlaybackState);
dom.annotatedVideo.addEventListener("seeked", syncReviewPreviewFromAnnotatedVideo);
dom.reviewFrameScrubber?.addEventListener("input", () => {
  dom.annotatedVideo.pause();
  renderReviewFramePreview(Number(dom.reviewFrameScrubber.value || 0));
});
dom.frameScrubber.addEventListener("input", seekToScrubbedFrame);
dom.keypointSelect.addEventListener("change", () => {
  syncKeypointVisibilityControls();
  syncRacketBoxControls();
});
dom.toggleKeypointVisibilityButton.addEventListener("click", toggleSelectedKeypointVisibility);
dom.childVideo.addEventListener("timeupdate", syncFrameScrubber);
dom.childVideo.addEventListener("play", updateEditPlaybackButton);
dom.childVideo.addEventListener("pause", updateEditPlaybackButton);
dom.editPlayPauseButton.addEventListener("click", toggleEditPlayback);
dom.saveKeyframeAnchorButton.addEventListener("click", saveKeyframeAnchor);
dom.generateTrackedFramesButton.addEventListener("click", generateSmoothTrack);
dom.saveTrainingSampleButton.addEventListener("click", saveTrainingSample);
dom.suggestedAnchorButton.addEventListener("click", goToSuggestedAnchorFrame);
dom.lowQualityFrames.addEventListener("click", (event) => {
  const chip = event.target.closest("[data-frame]");
  if (!chip) return;
  const frame = Number(chip.dataset.frame);
  suggestedAnchorFrame = frame;
  goToFrameForCorrection(frame, `Low-quality frame ${frame} selected. Correct it and save it as an anchor.`);
});
dom.prevFrameButton.addEventListener("click", () => stepEditFrame(-1));
dom.nextFrameButton.addEventListener("click", () => stepEditFrame(1));
dom.nextKeyframeButton?.addEventListener("click", goToNextKeyframe);
dom.prevKeypointButton?.addEventListener("click", selectPreviousKeypoint);
dom.saveFrameCorrectionButton.addEventListener("click", saveVisibleFrameCorrection);
dom.keypointEditor.addEventListener("click", nudgeSelectedKeypoint);
[dom.racketBoxX, dom.racketBoxY, dom.racketBoxAngle, dom.racketBoxHeight, dom.racketBoxWidth].forEach((input) => {
  input.addEventListener("input", applyRacketBoxControls);
});
dom.saveVideoSessionButton?.addEventListener("click", saveVideoSession);
dom.saveProgressButton.addEventListener("click", saveProgressSession);
dom.exportDiaryButton?.addEventListener("click", exportAnalysisToDiary);
dom.clearProgressButton.addEventListener("click", clearProgressSessions);
dom.progressCompareSelect?.addEventListener("change", renderProgressComparison);
dom.progressCompareStage?.addEventListener("change", renderProgressComparison);
dom.detectKeyframesButton.onclick = detectKeyframes;
dom.addKeyframeButton.addEventListener("click", addCurrentKeyframe);
dom.updateKeyframeButton.addEventListener("click", updateSelectedKeyframe);
dom.deleteKeyframeButton.addEventListener("click", deleteSelectedKeyframe);
dom.closeFrameModal.addEventListener("click", () => dom.frameModal.close());
dom.keyframeGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".keyframe-card[data-index]");
  if (card) {
    selectKeyframe(Number(card.dataset.index));
    if (currentWorkflowStep() === "keypoints") {
      openSelectedKeyframeEditor();
      return;
    }
  }
  const image = event.target.closest("img[data-expand]");
  if (image) expandKeyframe(Number(image.dataset.expand));
});
[dom.playerZoom, dom.playerCropX, dom.playerCropY].forEach((input) => {
  input.addEventListener("input", scheduleRoiPreview);
});
dom.childCanvas.addEventListener("pointerdown", startRoiDrag);
dom.childCanvas.addEventListener("pointerdown", startKeypointDrag);
dom.childFrame.addEventListener("pointerdown", startKeypointDrag);
dom.childCanvas.addEventListener("pointermove", moveRoiDrag);
window.addEventListener("pointermove", moveKeypointDrag);
dom.childCanvas.addEventListener("pointerup", endRoiDrag);
window.addEventListener("pointerup", endKeypointDrag);
dom.childCanvas.addEventListener("pointerleave", endRoiDrag);
dom.childFrame.addEventListener("pointerdown", startRoiDrag);
dom.roiDragBox.addEventListener("pointerdown", startRoiDrag);
window.addEventListener("pointermove", moveRoiDrag);
window.addEventListener("pointerup", endRoiDrag);
dom.childCanvas.addEventListener("mousedown", startRoiDrag);
dom.childCanvas.addEventListener("mousedown", startKeypointDrag);
dom.childFrame.addEventListener("mousedown", startKeypointDrag);
dom.childCanvas.addEventListener("mousemove", moveRoiDrag);
window.addEventListener("mousemove", moveKeypointDrag);
dom.childCanvas.addEventListener("mouseup", endRoiDrag);
window.addEventListener("mouseup", endKeypointDrag);
dom.childCanvas.addEventListener("mouseleave", endRoiDrag);
dom.childFrame.addEventListener("mousedown", startRoiDrag);
dom.roiDragBox.addEventListener("mousedown", startRoiDrag);
window.addEventListener("mousemove", moveRoiDrag);
window.addEventListener("mouseup", endRoiDrag);
dom.childCanvas.addEventListener("touchstart", startRoiDrag, { passive: false });
dom.childCanvas.addEventListener("touchstart", startKeypointDrag, { passive: false });
dom.childFrame.addEventListener("touchstart", startKeypointDrag, { passive: false });
dom.childCanvas.addEventListener("touchmove", moveRoiDrag, { passive: false });
window.addEventListener("touchmove", moveKeypointDrag, { passive: false });
dom.childCanvas.addEventListener("touchend", endRoiDrag);
window.addEventListener("touchend", endKeypointDrag);
dom.childFrame.addEventListener("touchstart", startRoiDrag, { passive: false });
dom.roiDragBox.addEventListener("touchstart", startRoiDrag, { passive: false });
window.addEventListener("touchmove", moveRoiDrag, { passive: false });
window.addEventListener("touchend", endRoiDrag);

dom.standardMode.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  setReferenceMode(button.dataset.mode);
});

[dom.youtubeUrl, dom.clipStart, dom.clipEnd].forEach((input) => {
  input.addEventListener("change", updateYoutubePreview);
  input.addEventListener("blur", updateYoutubePreview);
});

dom.referencePreview.addEventListener("click", playYoutubeReference);
dom.useDefaultNotesButton.addEventListener("click", () => {
  dom.coachingNotes.value = defaultCoachingNotes;
  updateNotesPreview();
});
[dom.coachingNotes, dom.coachingResourceUrl].forEach((input) => {
  input.addEventListener("input", updateNotesPreview);
  input.addEventListener("change", updateNotesPreview);
});

dom.phaseTabs.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  [...dom.phaseTabs.querySelectorAll("button")].forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  dom.phaseName.textContent = phaseLabels[button.dataset.phase];
  if (latestAnalysis) {
    dom.syncGap.textContent = `${Math.max(28, latestAnalysis.syncGap - button.dataset.phase.length * 8)} ms`;
  }
});

dom.copyReport.addEventListener("click", async () => {
  if (!latestReport) return;
  await navigator.clipboard.writeText(latestReport);
  dom.copyReport.textContent = "✓";
  setTimeout(() => {
    dom.copyReport.textContent = "⧉";
  }, 900);
});

if (!redirectFileProtocolToLocalhost()) {
  window.addEventListener("resize", drawPoseLoop);
  loadPocPreset();
  initPoseDetector();
  drawPoseLoop();
  updateWorkflow();
  renderProgress();
}
