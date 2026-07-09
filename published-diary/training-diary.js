const storageKey = "tennisMotionLab.trainingDiary.v2";
const authStorageKey = "tennisMotionLab.trainingDiary.auth.v1";
const authDurationMs = 1000 * 60 * 60 * 24 * 14;
const passwordHash = "44101bd7e008971009a5c8365210ced92bd3f3d3ded74f20ea70868dae51de69";
const urlParams = new URLSearchParams(window.location.search);
const releaseVersion = document.documentElement.dataset.releaseVersion || "";
const defaultDataFile = releaseVersion ? `./diary-data.json?v=${encodeURIComponent(releaseVersion)}` : "./diary-data.json";
const dataFile = urlParams.get("data") || defaultDataFile;
let localEntryCount = 0;
let fileEntryCount = 0;
let fileEntryKeys = new Set();
let diaryDataDownloadUrl = null;
const fallbackDiaryEntries = [
  {
    "id": "analysis-1783552650367",
    "source": "motion-analysis",
    "createdAt": "2026-07-08T23:17:30.367Z",
    "date": "2026-07-08",
    "title": "IMG_1894.MOV (PoC) \u00b7 Serve analysis",
    "stroke": "serve",
    "videoUrl": "./assets/atticus-07082026-poc.mov",
    "rawVideoUrl": "./assets/atticus-07082026-poc.mov",
    "videoName": "serve161707082026",
    "keyframes": [
      {
        "time": "0:00",
        "phase": "Setup",
        "score": 78,
        "status": "issue",
        "points": "Developing. Base width: 0.42 body; Head drift: 3%; Stability: 77/100. Focus: Build the same stance and quiet head before every serve.",
        "aiNote": "Evidence: Coach note: Stage 1 Setup: balanced platform stance, quiet head, relaxed hands, and a repeatable starting rhythm.. Coach cue: Use this stage to make the serve repeatable: stance, balance, eyes, and hands should feel calm before the motion starts.",
        "detections": [
          {
            "label": "Base width",
            "value": "0.42 body",
            "status": "issue"
          },
          {
            "label": "Head drift",
            "value": "3%",
            "status": "issue"
          },
          {
            "label": "Stability",
            "value": "77/100",
            "status": "issue"
          }
        ]
      },
      {
        "time": "0:01",
        "phase": "Toss / Early Racket Movement",
        "score": 69,
        "status": "issue",
        "points": "Needs focus. Toss release: 0.18s; Ball x drift: 6%; Racket timing: 96 ms. Focus: Keep the racket up during the toss; let the drop happen after release.",
        "aiNote": "Evidence: Coach note: Stage 2 Toss / Early Racket Movement: toss arm extends fully; racket should stay up and roughly vertical until after ball release.. Coach cue: If the racket starts moving too early during the toss, the rhythm gets rushed. Keep the racket up and roughly vertical until the ball has clearly left the hand.",
        "detections": [
          {
            "label": "Toss release",
            "value": "0.18s",
            "status": "issue"
          },
          {
            "label": "Ball x drift",
            "value": "6%",
            "status": "issue"
          },
          {
            "label": "Racket timing",
            "value": "96 ms",
            "status": "issue"
          }
        ]
      },
      {
        "time": "0:01",
        "phase": "Load",
        "score": 73,
        "status": "issue",
        "points": "Needs focus. Shoulder-hip separation: 38; Back knee angle: 129; Hip stack: 0.07 body. Focus: Load the legs first, then let the racket drop as the body drives upward.",
        "aiNote": "Evidence: Coach note: Stage 3 Load: legs and hips load before the upper body; avoid early racket drop while the knees are still bending.. Coach cue: At max knee bend, the racket should still be up in a trophy-like position. If it has already fallen behind the back, the kinetic chain is broken and the serve becomes arm-dominant.",
        "detections": [
          {
            "label": "Shoulder-hip separation",
            "value": "38",
            "status": "issue"
          },
          {
            "label": "Back knee angle",
            "value": "129",
            "status": "issue"
          },
          {
            "label": "Hip stack",
            "value": "0.07 body",
            "status": "issue"
          }
        ]
      },
      {
        "time": "0:02",
        "phase": "Racket Drop",
        "score": 71,
        "status": "issue",
        "points": "Needs focus. Racket angle: -38; Drop timing: 73 ms; Knee at drop: 121. Focus: Time the racket drop with the upward leg drive, not before it.",
        "aiNote": "Evidence: Coach note: Stage 4 Racket Drop: racket drops after the legs have loaded and begun driving, keeping the kinetic chain in sequence.. Coach cue: The racket drop should be connected to the upward drive, not a separate arm-only move. The goal is a clean transfer from legs to trunk to arm.",
        "detections": [
          {
            "label": "Racket angle",
            "value": "-38",
            "status": "issue"
          },
          {
            "label": "Drop timing",
            "value": "73 ms",
            "status": "issue"
          },
          {
            "label": "Knee at drop",
            "value": "121",
            "status": "issue"
          }
        ]
      },
      {
        "time": "0:03",
        "phase": "Acceleration / Racket Approach",
        "score": 72,
        "status": "issue",
        "points": "Needs focus. Racket speed: 98 km/h; Edge lead: 72%; Arm extension: 92. Focus: Maintain the racket edge longer so the snap happens closer to contact.",
        "aiNote": "Evidence: Coach note: Stage 5 Acceleration / Racket Approach: lead with the edge or back of the racket; avoid opening the racket face too early approaching contact.. Coach cue: Opening the racket face early on the way to contact removes the snap and associated power. Strong servers keep the edge/back of the racket leading until just before contact.",
        "detections": [
          {
            "label": "Racket speed",
            "value": "98 km/h",
            "status": "issue"
          },
          {
            "label": "Edge lead",
            "value": "72%",
            "status": "issue"
          },
          {
            "label": "Arm extension",
            "value": "92",
            "status": "issue"
          }
        ]
      },
      {
        "time": "0:03",
        "phase": "Contact",
        "score": 73,
        "status": "issue",
        "points": "Needs focus. Contact height: 0.56; Ball-wrist gap: 0.08 body; Ball speed: 91 km/h. Focus: Reach taller through contact; improve toss height/position and vertical leg drive.",
        "aiNote": "Evidence: Coach note: Stage 6 Contact: contact point should be high, with wrist clearly above shoulder and the body driving up through the ball.. Coach cue: At contact the hitting arm should stretch as tall as it goes, with the wrist clearly above the shoulder. Low contact flattens the serve and reduces leverage.",
        "detections": [
          {
            "label": "Contact height",
            "value": "0.56",
            "status": "issue"
          },
          {
            "label": "Ball-wrist gap",
            "value": "0.08 body",
            "status": "issue"
          },
          {
            "label": "Ball speed",
            "value": "91 km/h",
            "status": "issue"
          }
        ]
      },
      {
        "time": "0:03",
        "phase": "Deceleration",
        "score": 71,
        "status": "issue",
        "points": "Needs focus. Follow-through angle: 54; Landing knee: 111; Balance drift: 8%. Focus: Start driving out of the knee bend earlier so leg extension completes before contact.",
        "aiNote": "Evidence: Coach note: Stage 7 Deceleration: leg drive should not peak late; energy should transfer legs to hips to trunk to arm to racket in sequence.. Coach cue: If the legs are still extending after the racket has already dropped, the leg drive is late. Power arrives after the rest of the chain has fired.",
        "detections": [
          {
            "label": "Follow-through angle",
            "value": "54",
            "status": "issue"
          },
          {
            "label": "Landing knee",
            "value": "111",
            "status": "issue"
          },
          {
            "label": "Balance drift",
            "value": "8%",
            "status": "issue"
          }
        ]
      },
      {
        "time": "0:04",
        "phase": "Finish",
        "score": 74,
        "status": "issue",
        "points": "Needs focus. Landing control: Needs focus; Front knee angle: 115; Recovery position: 0.24s. Focus: Land like a soft jump landing; let the front knee absorb impact.",
        "aiNote": "Evidence: Coach note: Stage 8 Finish: land with a soft front knee and balanced finish; avoid a stiff-legged landing.. Coach cue: The landing leg should bend and absorb impact. A locked front leg can jar the body and often means the serve did not drive up and out cleanly.",
        "detections": [
          {
            "label": "Landing control",
            "value": "Needs focus",
            "status": "issue"
          },
          {
            "label": "Front knee angle",
            "value": "115",
            "status": "issue"
          },
          {
            "label": "Recovery position",
            "value": "0.24s",
            "status": "issue"
          }
        ]
      }
    ],
    "coach": "Setup: Use this stage to make the serve repeatable: stance, balance, eyes, and hands should feel calm before the motion starts.\nToss / Early Racket Movement: If the racket starts moving too early during the toss, the rhythm gets rushed. Keep the racket up and roughly vertical until the ball has clearly left the hand.\nLoad: At max knee bend, the racket should still be up in a trophy-like position. If it has already fallen behind the back, the kinetic chain is broken and the serve becomes arm-dominant.\nRacket Drop: The racket drop should be connected to the upward drive, not a separate arm-only move. The goal is a clean transfer from legs to trunk to arm.\nAcceleration / Racket Approach: Opening the racket face early on the way to contact removes the snap and associated power. Strong servers keep the edge/back of the racket leading until just before contact.\nContact: At contact the hitting arm should stretch as tall as it goes, with the wrist clearly above the shoulder. Low contact flattens the serve and reduces leverage.\nDeceleration: If the legs are still extending after the racket has already dropped, the leg drive is late. Power arrives after the rest of the chain has fired.\nFinish: The landing leg should bend and absorb impact. A locked front leg can jar the body and often means the serve did not drive up and out cleanly.",
    "diagnosis": "Overall, this serve is needs focus with the strongest stage in Setup. The main training priority is toss / early racket movement: Keep the racket up during the toss; let the drop happen after release.\n\nOverall score: 73. Racket speed: 98 km/h. Ball speed: 91 km/h. Contact height: 0.56. Tracking quality: 98.\n\nPriority: Toss / Early Racket Movement - Keep the racket up during the toss; let the drop happen after release.",
    "coachAi": "Setup (Developing, 78/100): Build the same stance and quiet head before every serve.\nToss / Early Racket Movement (Needs focus, 69/100): Keep the racket up during the toss; let the drop happen after release.\nLoad (Needs focus, 73/100): Load the legs first, then let the racket drop as the body drives upward.\nRacket Drop (Needs focus, 71/100): Time the racket drop with the upward leg drive, not before it.\nAcceleration / Racket Approach (Needs focus, 72/100): Maintain the racket edge longer so the snap happens closer to contact.\nContact (Needs focus, 73/100): Reach taller through contact; improve toss height/position and vertical leg drive.\nDeceleration (Needs focus, 71/100): Start driving out of the knee bend earlier so leg extension completes before contact.\nFinish (Needs focus, 74/100): Land like a soft jump landing; let the front knee absorb impact.",
    "comments": [],
    "metrics": {
      "score": 73,
      "racketSpeed": 98,
      "ballSpeed": 91,
      "contactHeight": "0.56",
      "trackingQuality": 98,
      "dominantHand": "Left"
    },
    "trainingContent": "serve",
    "sessionName": "serve161707082026",
    "sourceVideoName": "IMG_1894.MOV (PoC)"
  },
  {
    "id": "poc-player-serve-2026-07-07",
    "source": "motion-analysis-poc-export",
    "createdAt": "2026-07-07T18:00:00.000Z",
    "date": "2026-07-07",
    "title": "IMG_1610.MOV \u00b7 Serve motion-analysis PoC",
    "stroke": "serve",
    "videoUrl": "./assets/player-poc.mov",
    "rawVideoUrl": "./assets/player-poc.mov",
    "videoName": "serve110007072026",
    "keyframes": [
      {
        "time": "0.13",
        "phase": "Setup",
        "score": 88,
        "status": "good",
        "image": "./exports/diary-poc-keypoints/keypoint-overlays/01-setup-keypoints.jpg",
        "rawFrame": "./exports/diary-poc-keypoints/raw-frames/01-setup-raw.jpg",
        "points": "Balanced starting shape with a repeatable base. Keep the head quiet before the toss.",
        "aiNote": "AI diagnosis: setup is usable; keep the start rhythm calm before the toss begins.",
        "detections": [
          {
            "label": "Base stability",
            "value": "Stable stance",
            "status": "good"
          },
          {
            "label": "Head position",
            "value": "Quiet before toss",
            "status": "good"
          },
          {
            "label": "Ready rhythm",
            "value": "Slightly rushed",
            "status": "issue"
          }
        ]
      },
      {
        "time": "0.40",
        "phase": "Toss",
        "score": 74,
        "status": "issue",
        "image": "./exports/diary-poc-keypoints/keypoint-overlays/02-toss-keypoints.jpg",
        "rawFrame": "./exports/diary-poc-keypoints/raw-frames/02-toss-raw.jpg",
        "points": "Toss arm should extend fully while the racket stays organized instead of dropping early.",
        "aiNote": "Coach cue match: keep the racket up during the toss and let the drop happen after ball release.",
        "detections": [
          {
            "label": "Toss arm extension",
            "value": "Needs fuller reach",
            "status": "issue"
          },
          {
            "label": "Racket position",
            "value": "Drops early",
            "status": "issue"
          },
          {
            "label": "Ball release timing",
            "value": "Usable",
            "status": "good"
          }
        ]
      },
      {
        "time": "0.66",
        "phase": "Load",
        "score": 68,
        "status": "issue",
        "image": "./exports/diary-poc-keypoints/keypoint-overlays/03-load-keypoints.jpg",
        "rawFrame": "./exports/diary-poc-keypoints/raw-frames/03-load-raw.jpg",
        "points": "Legs and hips need to load before the racket drop so the serve does not become arm-dominant.",
        "aiNote": "AI diagnosis: watch for early racket drop while the knees are still bending.",
        "detections": [
          {
            "label": "Knee bend",
            "value": "Present",
            "status": "good"
          },
          {
            "label": "Racket drop timing",
            "value": "Too early",
            "status": "issue"
          },
          {
            "label": "Kinetic chain",
            "value": "Legs-to-racket sequence breaks",
            "status": "issue"
          }
        ]
      },
      {
        "time": "0.96",
        "phase": "Racket Drop",
        "score": 71,
        "status": "issue",
        "image": "./exports/diary-poc-keypoints/keypoint-overlays/04-racket-drop-keypoints.jpg",
        "rawFrame": "./exports/diary-poc-keypoints/raw-frames/04-racket-drop-raw.jpg",
        "points": "Racket drop should connect to the upward drive, not start as a separate arm-only move.",
        "aiNote": "AI diagnosis: racket drop is disconnected from the lower-body drive.",
        "detections": [
          {
            "label": "Racket path",
            "value": "Disconnected",
            "status": "issue"
          },
          {
            "label": "Leg drive start",
            "value": "Late",
            "status": "issue"
          },
          {
            "label": "Shoulder line",
            "value": "Usable",
            "status": "good"
          }
        ]
      },
      {
        "time": "1.19",
        "phase": "Acceleration",
        "score": 76,
        "status": "issue",
        "image": "./exports/diary-poc-keypoints/keypoint-overlays/05-acceleration-keypoints.jpg",
        "rawFrame": "./exports/diary-poc-keypoints/raw-frames/05-acceleration-raw.jpg",
        "points": "Lead with the edge or back of the racket; avoid opening the racket face too early.",
        "aiNote": "AI diagnosis: racket approach opens early, reducing late snap.",
        "detections": [
          {
            "label": "Racket face",
            "value": "Opens early",
            "status": "issue"
          },
          {
            "label": "Arm extension",
            "value": "Improving",
            "status": "good"
          },
          {
            "label": "Upward drive",
            "value": "Needs more lift",
            "status": "issue"
          }
        ]
      },
      {
        "time": "1.38",
        "phase": "Contact",
        "score": 72,
        "status": "issue",
        "image": "./exports/diary-poc-keypoints/keypoint-overlays/06-contact-keypoints.jpg",
        "rawFrame": "./exports/diary-poc-keypoints/raw-frames/06-contact-raw.jpg",
        "points": "Reach higher through contact with the wrist clearly above the shoulder and the body driving upward.",
        "aiNote": "Coach cue match: improve contact height and toss position to create more upward leverage.",
        "detections": [
          {
            "label": "Wrist above shoulder",
            "value": "Borderline",
            "status": "issue"
          },
          {
            "label": "Body drive",
            "value": "Moving upward",
            "status": "good"
          },
          {
            "label": "Contact height",
            "value": "Needs taller reach",
            "status": "issue"
          }
        ]
      },
      {
        "time": "1.61",
        "phase": "Deceleration",
        "score": 70,
        "status": "issue",
        "image": "./exports/diary-poc-keypoints/keypoint-overlays/07-deceleration-keypoints.jpg",
        "rawFrame": "./exports/diary-poc-keypoints/raw-frames/07-deceleration-raw.jpg",
        "points": "Leg drive should peak before contact so power transfers up the chain before deceleration.",
        "aiNote": "AI diagnosis: leg drive arrives late, after the racket has already dropped.",
        "detections": [
          {
            "label": "Leg-drive timing",
            "value": "Late",
            "status": "issue"
          },
          {
            "label": "Energy transfer",
            "value": "Interrupted",
            "status": "issue"
          },
          {
            "label": "Arm path",
            "value": "Mostly complete",
            "status": "good"
          }
        ]
      },
      {
        "time": "1.85",
        "phase": "Finish",
        "score": 84,
        "status": "good",
        "image": "./exports/diary-poc-keypoints/keypoint-overlays/08-finish-keypoints.jpg",
        "rawFrame": "./exports/diary-poc-keypoints/raw-frames/08-finish-raw.jpg",
        "points": "Land with a softer front knee and complete the follow-through across the body.",
        "aiNote": "AI diagnosis: finish balance is the proof that the chain transferred cleanly.",
        "detections": [
          {
            "label": "Follow-through",
            "value": "Complete path",
            "status": "good"
          },
          {
            "label": "Landing balance",
            "value": "Mostly stable",
            "status": "good"
          },
          {
            "label": "Front knee",
            "value": "Could absorb softer",
            "status": "issue"
          }
        ]
      }
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
      "dominantHand": "Left"
    },
    "trainingContent": "serve",
    "sessionName": "serve110007072026",
    "sourceVideoName": "IMG_1610.MOV"
  }
];


const dom = {
  authGate: document.querySelector("#authGate"),
  authForm: document.querySelector("#authForm"),
  diaryPassword: document.querySelector("#diaryPassword"),
  authError: document.querySelector("#authError"),
  lockDiaryButton: document.querySelector("#lockDiaryButton"),
  dateFilter: document.querySelector("#dateFilter"),
  searchFilter: document.querySelector("#searchFilter"),
  strokeFilter: document.querySelector("#strokeFilter"),
  videoFilter: document.querySelector("#videoFilter"),
  clearFiltersButton: document.querySelector("#clearFiltersButton"),
  trainingCalendar: document.querySelector("#trainingCalendar"),
  calendarMonth: document.querySelector("#calendarMonth"),
  prevMonthButton: document.querySelector("#prevMonthButton"),
  nextMonthButton: document.querySelector("#nextMonthButton"),
  diarySyncStatus: document.querySelector("#diarySyncStatus"),
  downloadDiaryDataButton: document.querySelector("#downloadDiaryDataButton"),
  summaryStrip: document.querySelector("#summaryStrip"),
  diaryList: document.querySelector("#diaryList"),
  template: document.querySelector("#diaryCardTemplate"),
};

let entries = [];
let calendarCursor = new Date();

async function sha256(value) {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function isAuthorized() {
  try {
    const auth = JSON.parse(sessionStorage.getItem(authStorageKey) || localStorage.getItem(authStorageKey) || "null");
    return Boolean(auth?.expiresAt && Date.now() < auth.expiresAt);
  } catch {
    sessionStorage.removeItem(authStorageKey);
    localStorage.removeItem(authStorageKey);
    return false;
  }
}

function setAuthorized() {
  const payload = JSON.stringify({ expiresAt: Date.now() + authDurationMs });
  localStorage.setItem(authStorageKey, payload);
  sessionStorage.setItem(authStorageKey, payload);
}

function lockDiary() {
  localStorage.removeItem(authStorageKey);
  sessionStorage.removeItem(authStorageKey);
  document.body.classList.add("auth-locked");
  dom.diaryPassword.value = "";
  dom.authError.textContent = "";
  dom.diaryPassword.focus();
}

async function unlockDiary() {
  document.body.classList.remove("auth-locked");
  entries = await loadEntries();
  setCalendarToLatestTrainingMonth();
  syncContentFilterOptions();
  refreshDiaryDataDownload();
  renderDiarySyncStatus();
  renderEntries();
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  const enteredPassword = dom.diaryPassword.value.trim();
  const enteredHash = await sha256(enteredPassword);
  if (enteredHash !== passwordHash) {
    dom.authError.textContent = "Incorrect password. Please try again.";
    dom.diaryPassword.select();
    return;
  }
  setAuthorized();
  dom.authError.textContent = "";
  unlockDiary();
}

async function loadEntries() {
  let savedEntries = [];
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    if (Array.isArray(saved)) savedEntries = saved;
  } catch {
    localStorage.removeItem(storageKey);
  }
  localEntryCount = savedEntries.length;

  if (!dataFile) return savedEntries.map(normalizeDiaryEntry);

  try {
    const response = await fetch(dataFile, { cache: "no-store" });
    if (response.ok) {
      const data = await response.json();
      const importedEntries = Array.isArray(data) ? data : Array.isArray(data.entries) ? data.entries : [];
      fileEntryCount = importedEntries.length;
      fileEntryKeys = new Set(importedEntries.map((entry) => entry.id || `${entry.date || ""}|${entry.title || ""}|${entry.createdAt || ""}`));
      const mergedEntries = mergeDiaryEntries(savedEntries, importedEntries);
      try {
        if (mergedEntries.length > savedEntries.length) {
          localStorage.setItem(storageKey, JSON.stringify(mergedEntries));
        }
      } catch {
        // Large image snapshots can exceed storage quota; keep rendering from the data file.
      }
      return mergedEntries;
    }
  } catch {
    // Fall through to built-in recovery data below.
  }
  const fallbackEntries = mergeDiaryEntries(savedEntries, fallbackDiaryEntries);
  try {
    if (fallbackEntries.length > savedEntries.length) {
      localStorage.setItem(storageKey, JSON.stringify(fallbackEntries));
    }
  } catch {
    // Keep rendering from the built-in recovery data when storage is unavailable.
  }
  return fallbackEntries;
}

function saveEntries() {
  localStorage.setItem(storageKey, JSON.stringify(entries));
  localEntryCount = entries.length;
  refreshDiaryDataDownload();
  renderDiarySyncStatus();
}

function mergeDiaryEntries(primaryEntries, importedEntries) {
  const merged = [];
  const seen = new Set();
  [...primaryEntries, ...importedEntries].forEach((entry) => {
    if (!entry || typeof entry !== "object") return;
    normalizeDiaryEntry(entry);
    const key = entry.id || `${entry.date || ""}|${entry.title || ""}|${entry.createdAt || ""}`;
    if (seen.has(key)) return;
    seen.add(key);
    merged.push(entry);
  });
  return merged;
}

function dateKeyFromParts(year, monthIndex, day) {
  return `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function setCalendarToLatestTrainingMonth() {
  const date = entries.map((entry) => entry.date).sort().at(-1);
  calendarCursor = date ? new Date(`${date}T12:00:00`) : new Date();
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    weekday: "short",
  }).format(new Date(`${value}T12:00:00`));
}

function cleanContentName(value = "") {
  return String(value || "training").toLowerCase().replace(/[^a-z0-9]+/g, "") || "training";
}

function entryContent(entry) {
  return cleanContentName(entry.trainingContent || entry.content || entry.stroke || "training");
}

function contentLabel(value) {
  const labels = {
    serve: "Serve",
    forehand: "Forehand",
    backhand: "Backhand",
    volley: "Volley",
    footwork: "Footwork",
  };
  const key = cleanContentName(value);
  return labels[key] || key.replace(/^\w/, (letter) => letter.toUpperCase());
}

function sessionDateParts(entry) {
  const created = entry.createdAt ? new Date(entry.createdAt) : null;
  if (created && !Number.isNaN(created.getTime())) {
    return {
      hours: created.getHours(),
      minutes: created.getMinutes(),
      month: created.getMonth() + 1,
      day: created.getDate(),
      year: created.getFullYear(),
    };
  }
  const match = String(entry.date || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (match) {
    return {
      hours: 0,
      minutes: 0,
      month: Number(match[2]),
      day: Number(match[3]),
      year: Number(match[1]),
    };
  }
  const now = new Date();
  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    month: now.getMonth() + 1,
    day: now.getDate(),
    year: now.getFullYear(),
  };
}

function compactSessionName(content, entry) {
  const parts = sessionDateParts(entry);
  return [
    cleanContentName(content),
    String(parts.hours).padStart(2, "0"),
    String(parts.minutes).padStart(2, "0"),
    String(parts.month).padStart(2, "0"),
    String(parts.day).padStart(2, "0"),
    String(parts.year),
  ].join("");
}

function entrySessionName(entry) {
  return entry.sessionName || entry.videoSessionName || compactSessionName(entryContent(entry), entry);
}

function normalizeDiaryEntry(entry) {
  entry.trainingContent = entryContent(entry);
  entry.sessionName = entrySessionName(entry);
  if (!entry.videoName) entry.videoName = entry.sessionName;
  return entry;
}

function refreshDiaryDataDownload() {
  if (!dom.downloadDiaryDataButton) return;
  if (diaryDataDownloadUrl) URL.revokeObjectURL(diaryDataDownloadUrl);
  const payload = {
    entries,
    exportedAt: new Date().toISOString(),
  };
  diaryDataDownloadUrl = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }));
  dom.downloadDiaryDataButton.href = diaryDataDownloadUrl;
}

function renderDiarySyncStatus() {
  if (!dom.diarySyncStatus) return;
  const localOnlyCount = entries.filter((entry) => {
    const key = entry.id || `${entry.date || ""}|${entry.title || ""}|${entry.createdAt || ""}`;
    return !fileEntryKeys.has(key);
  }).length;
  dom.diarySyncStatus.classList.toggle("needs-sync", localOnlyCount > 0);
  dom.diarySyncStatus.classList.toggle("is-synced", localOnlyCount === 0);
  if (localOnlyCount > 0) {
    dom.diarySyncStatus.textContent = `${localOnlyCount} local entr${localOnlyCount === 1 ? "y is" : "ies are"} not in diary-data.json yet. Download the current file before publishing.`;
    return;
  }
  dom.diarySyncStatus.textContent = `Synced: ${entries.length} entr${entries.length === 1 ? "y" : "ies"} loaded from diary-data.json.`;
}

function escapeText(value) {
  return value?.trim() || "Not entered yet.";
}

function renderAnalysisText(container, value) {
  container.innerHTML = "";
  const text = escapeText(value);
  const blocks = text.split(/\n+/).map((line) => line.trim()).filter(Boolean);
  blocks.forEach((line) => {
    const row = document.createElement("p");
    row.className = "analysis-line";
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0 && colonIndex < 42) {
      const label = document.createElement("strong");
      label.textContent = line.slice(0, colonIndex + 1);
      const detail = document.createElement("span");
      detail.textContent = ` ${line.slice(colonIndex + 1).trim()}`;
      row.append(label, detail);
      if (/^(priority|strong point|overall diagnosis)/i.test(label.textContent)) {
        row.classList.add("priority-line");
      }
    } else {
      row.textContent = line;
    }
    container.append(row);
  });
}

function parseKeyframes(value) {
  const lines = value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  return lines.map((line, index) => {
    const parts = line.split("|").map((part) => part.trim());
    if (parts.length >= 3) {
      return {
        time: parts[0],
        phase: parts[1],
        points: parts.slice(2).join(" | "),
        aiNote: "Review this frame against the coach cue and motion-analysis overlay.",
      };
    }
    return {
      time: `Frame ${index + 1}`,
      phase: "Key Point",
      points: line,
      aiNote: "Review this frame against the coach cue and motion-analysis overlay.",
    };
  });
}

function normalizeKeyframes(keyframes) {
  if (Array.isArray(keyframes)) return keyframes;
  if (typeof keyframes === "string") return parseKeyframes(keyframes);
  return [];
}

function filteredEntries() {
  const date = dom.dateFilter.value;
  const stroke = dom.strokeFilter.value;
  const video = dom.videoFilter.value;
  const query = dom.searchFilter.value.trim().toLowerCase();
  return entries
    .filter((entry) => !date || entry.date === date)
    .filter((entry) => stroke === "all" || entryContent(entry) === stroke)
    .filter((entry) => video === "all" || entrySessionName(entry) === video)
    .filter((entry) => {
      if (!query) return true;
      return [
        entry.title,
        entryContent(entry),
        contentLabel(entryContent(entry)),
        entrySessionName(entry),
        entry.videoName,
        normalizeKeyframes(entry.keyframes)
          .map((frame) => `${frame.time} ${frame.phase} ${frame.score || ""} ${frame.points} ${frame.aiNote} ${(frame.detections || frame.keypointDetections || []).map((item) => `${item.label} ${item.value} ${item.status}`).join(" ")}`)
          .join(" "),
        entry.coach,
        entry.diagnosis,
        entry.coachAi,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);
    })
    .sort((a, b) => {
      const dateOrder = b.date.localeCompare(a.date);
      if (dateOrder) return dateOrder;
      return String(b.createdAt || "").localeCompare(String(a.createdAt || ""));
    });
}

function optionElement(value, label) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  return option;
}

function contentValuesForDate(date = "") {
  return [...new Set(
    entries
      .filter((entry) => !date || entry.date === date)
      .map(entryContent),
  )].sort((a, b) => contentLabel(a).localeCompare(contentLabel(b)));
}

function syncContentFilterOptions() {
  const current = dom.strokeFilter.value || "all";
  const values = contentValuesForDate(dom.dateFilter.value);
  dom.strokeFilter.innerHTML = "";
  dom.strokeFilter.append(optionElement("all", "All"));
  values.forEach((value) => dom.strokeFilter.append(optionElement(value, contentLabel(value))));
  dom.strokeFilter.value = current === "all" || values.includes(current) ? current : "all";
}

function entriesForVideoOptions() {
  const date = dom.dateFilter.value;
  const stroke = dom.strokeFilter.value;
  const query = dom.searchFilter.value.trim().toLowerCase();
  return entries
    .filter((entry) => !date || entry.date === date)
    .filter((entry) => stroke === "all" || entryContent(entry) === stroke)
    .filter((entry) => {
      if (!query) return true;
      return [entry.title, entrySessionName(entry), entry.videoName, entryContent(entry), contentLabel(entryContent(entry))]
        .join(" ")
        .toLowerCase()
        .includes(query);
    })
    .sort((a, b) => String(b.createdAt || b.date).localeCompare(String(a.createdAt || a.date)));
}

function syncVideoFilterOptions() {
  const current = dom.videoFilter.value || "all";
  const options = entriesForVideoOptions();
  const seen = new Set();
  dom.videoFilter.innerHTML = "";
  dom.videoFilter.append(optionElement("all", "All videos"));
  options.forEach((entry) => {
    const name = entrySessionName(entry);
    if (seen.has(name)) return;
    seen.add(name);
    dom.videoFilter.append(optionElement(name, name));
  });
  dom.videoFilter.value = current === "all" || seen.has(current) ? current : "all";
}

function populateEntryContentSelect(target, entry) {
  const values = contentValuesForDate(entry.date);
  target.innerHTML = "";
  values.forEach((value) => target.append(optionElement(value, contentLabel(value))));
  target.value = values.includes(entryContent(entry)) ? entryContent(entry) : values[0] || "";
}

function populateEntryVideoSelect(target, entry, content = entryContent(entry)) {
  const seen = new Set();
  const options = entries
    .filter((item) => item.date === entry.date)
    .filter((item) => entryContent(item) === content)
    .sort((a, b) => String(b.createdAt || b.date).localeCompare(String(a.createdAt || a.date)));
  target.innerHTML = "";
  options.forEach((item) => {
    const name = entrySessionName(item);
    if (seen.has(name)) return;
    seen.add(name);
    target.append(optionElement(name, name));
  });
  const currentName = entrySessionName(entry);
  target.value = seen.has(currentName) ? currentName : target.options[0]?.value || "";
}

function bindEntrySelectors(card, entry) {
  const strokeSelect = card.querySelector(".entry-stroke-filter");
  const videoSelect = card.querySelector(".entry-video-filter");
  populateEntryContentSelect(strokeSelect, entry);
  populateEntryVideoSelect(videoSelect, entry, strokeSelect.value || entryContent(entry));

  strokeSelect.addEventListener("change", () => {
    dom.dateFilter.value = entry.date || dom.dateFilter.value;
    syncContentFilterOptions();
    dom.strokeFilter.value = strokeSelect.value;
    dom.videoFilter.value = "all";
    populateEntryVideoSelect(videoSelect, entry, strokeSelect.value);
    renderEntries();
  });
  videoSelect.addEventListener("change", () => {
    dom.dateFilter.value = entry.date || dom.dateFilter.value;
    syncContentFilterOptions();
    dom.strokeFilter.value = strokeSelect.value || entryContent(entry);
    dom.videoFilter.value = videoSelect.value;
    renderEntries();
  });
}

function renderCalendar() {
  const year = calendarCursor.getFullYear();
  const month = calendarCursor.getMonth();
  const monthLabel = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(calendarCursor);
  const trainingByDate = entries.reduce((map, entry) => {
    const current = map.get(entry.date) || { count: 0 };
    current.count += 1;
    map.set(entry.date, current);
    return map;
  }, new Map());

  dom.calendarMonth.textContent = monthLabel;
  dom.trainingCalendar.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;

  for (let cell = 0; cell < totalCells; cell += 1) {
    const dayNumber = cell - firstDay + 1;
    const button = document.createElement("button");
    button.className = "calendar-day";
    button.type = "button";

    if (dayNumber < 1 || dayNumber > daysInMonth) {
      button.classList.add("is-empty");
      button.tabIndex = -1;
      button.setAttribute("aria-hidden", "true");
      dom.trainingCalendar.append(button);
      continue;
    }

    const dateKey = dateKeyFromParts(year, month, dayNumber);
    const detail = trainingByDate.get(dateKey);
    button.textContent = dayNumber;
    button.dataset.date = dateKey;
    button.setAttribute("aria-label", detail ? `${dateKey}, ${detail.count} training entry${detail.count === 1 ? "" : "entries"}` : dateKey);
    button.classList.toggle("has-data", Boolean(detail));
    button.classList.toggle("selected", dom.dateFilter.value === dateKey);
    button.addEventListener("click", () => {
      dom.dateFilter.value = dom.dateFilter.value === dateKey ? "" : dateKey;
      dom.videoFilter.value = "all";
      renderEntries();
    });
    dom.trainingCalendar.append(button);
  }
}

function renderSummary(list) {
  const uniqueDates = new Set(entries.map((entry) => entry.date)).size;
  const scores = entries.flatMap((entry) => normalizeKeyframes(entry.keyframes).map((frame) => Number(frame.score)).filter(Number.isFinite));
  const averageScore = scores.length ? Math.round(scores.reduce((total, score) => total + score, 0) / scores.length) : "--";
  const latest = entries.map((entry) => entry.date).sort().at(-1) || "--";
  const items = [
    ["Showing", list.length],
    ["Training Dates", uniqueDates],
    ["Avg AI Score", averageScore],
    ["Latest Entry", latest],
  ];
  dom.summaryStrip.innerHTML = items
    .map(
      ([label, value]) => `
        <article class="summary-item">
          <span>${label}</span>
          <strong>${value}</strong>
        </article>
      `,
    )
    .join("");
}

function keyframeStatus(frame) {
  if (frame.status) return frame.status;
  if (Number.isFinite(Number(frame.score))) return Number(frame.score) >= 80 ? "good" : "issue";
  return "neutral";
}

function statusLabel(status) {
  if (status === "good") return "Good";
  if (status === "issue") return "Needs work";
  return "Review";
}

function isLocalAssetUrl(value = "") {
  return value.startsWith("./") || value.startsWith("assets/");
}

function renderDetectionList(container, detections = []) {
  if (!detections.length) return;
  const list = document.createElement("div");
  list.className = "detection-list";
  const title = document.createElement("strong");
  title.className = "detection-title";
  title.textContent = "Key point detection";
  list.append(title);

  detections.forEach((item) => {
    const row = document.createElement("div");
    const status = item.status === "good" ? "good" : item.status === "issue" ? "issue" : "neutral";
    row.className = `detection-row ${status}`;
    const label = document.createElement("span");
    label.textContent = item.label || "Detection";
    const value = document.createElement("b");
    value.textContent = item.value || "Review";
    row.append(label, value);
    list.append(row);
  });

  container.append(list);
}

function appendKeyframeDetail(container, frame) {
  const note = frame.aiNote || "Review this frame against the coach cue and motion-analysis overlay.";
  if (!note) return;
  const detail = document.createElement("details");
  detail.className = "keyframe-detail";
  const summary = document.createElement("summary");
  summary.textContent = "Evidence & coach cue";
  const body = document.createElement("p");
  body.textContent = note;
  detail.append(summary, body);
  container.append(detail);
}

function renderKeyframes(container, entry) {
  const frames = normalizeKeyframes(entry.keyframes);
  container.innerHTML = "";
  if (!frames.length) {
    const empty = document.createElement("article");
    empty.className = "keyframe-card empty";
    empty.textContent = "No key frames recorded yet.";
    container.append(empty);
    return;
  }
  frames.forEach((frame, index) => {
    const node = document.createElement("article");
    const status = keyframeStatus(frame);
    node.className = `keyframe-card ${status}`;
    if (frame.image) {
      const image = document.createElement("img");
      image.src = frame.image;
      image.alt = `${frame.phase || "Key point"} frame`;
      node.append(image);
    }
    const label = document.createElement("div");
    label.className = "keyframe-meta";
    const time = document.createElement("strong");
    time.textContent = frame.time || `Frame ${index + 1}`;
    const phase = document.createElement("span");
    phase.textContent = frame.phase || "Key Point";
    label.append(time, phase);
    if (Number.isFinite(Number(frame.score))) {
      const score = document.createElement("em");
      score.className = `score-badge ${status}`;
      score.textContent = `AI ${Number(frame.score)}/100`;
      label.append(score);
    }
    const statusBadge = document.createElement("em");
    statusBadge.className = `status-badge ${status}`;
    statusBadge.textContent = statusLabel(status);
    label.append(statusBadge);
    const points = document.createElement("p");
    points.className = "keyframe-main-point";
    points.textContent = frame.points || "No key point detail entered yet.";
    node.append(label, points);
    appendKeyframeDetail(node, frame);
    renderDetectionList(node, frame.detections || frame.keypointDetections || []);
    container.append(node);
  });
}

function renderEntries() {
  syncContentFilterOptions();
  syncVideoFilterOptions();
  const list = filteredEntries();
  renderSummary(list);
  renderCalendar();
  dom.diaryList.innerHTML = "";
  if (!list.length) {
    dom.diaryList.innerHTML = `<div class="empty-results">${entries.length ? "No matching training entries." : "No diary entries yet. Export a completed motion analysis to create the first entry."}</div>`;
    return;
  }

  list.forEach((entry) => {
    const card = dom.template.content.firstElementChild.cloneNode(true);
    const frames = normalizeKeyframes(entry.keyframes);
    card.querySelector(".card-date").textContent = formatDate(entry.date);
    bindEntrySelectors(card, entry);
    card.querySelector(".card-title").textContent = entry.title;
    card.querySelector(".session-pill").textContent = entrySessionName(entry);
    card.querySelector(".stroke-pill").textContent = contentLabel(entryContent(entry));
    card.querySelector(".keyframe-count").textContent = `${frames.length} frame${frames.length === 1 ? "" : "s"}`;
    renderKeyframes(card.querySelector(".keyframe-list"), entry);
    renderAnalysisText(card.querySelector(".coach-text"), entry.coach);
    renderAnalysisText(card.querySelector(".diagnosis-text"), entry.diagnosis);
    renderAnalysisText(card.querySelector(".coach-ai-text"), entry.coachAi);

    const videoWrap = card.querySelector(".video-link-wrap");
    const previewVideoUrl = entry.previewVideoUrl || entry.videoUrl;
    const rawVideoUrl = entry.rawVideoUrl || entry.videoUrl || previewVideoUrl;
    if (previewVideoUrl || rawVideoUrl) {
      if (previewVideoUrl && isLocalAssetUrl(previewVideoUrl)) {
        const video = document.createElement("video");
        video.src = previewVideoUrl;
        video.controls = true;
        video.playsInline = true;
        video.preload = "metadata";
        videoWrap.append(video);
      }
      if (rawVideoUrl) {
        const links = document.createElement("div");
        links.className = "video-actions";
        const rawLink = document.createElement("a");
        rawLink.className = "raw-video-link";
        rawLink.href = rawVideoUrl;
        rawLink.target = "_blank";
        rawLink.rel = "noreferrer";
        rawLink.textContent = "Download Raw Video";
        if (isLocalAssetUrl(rawVideoUrl)) {
          rawLink.setAttribute("download", entry.videoName || "raw-training-video");
        }
        links.append(rawLink);
        videoWrap.append(links);
      }
    }

    dom.diaryList.append(card);
  });
}

dom.dateFilter.addEventListener("input", renderEntries);
dom.dateFilter.addEventListener("change", renderEntries);
dom.searchFilter.addEventListener("input", renderEntries);
dom.searchFilter.addEventListener("change", renderEntries);
dom.strokeFilter.addEventListener("input", () => {
  dom.videoFilter.value = "all";
  renderEntries();
});
dom.strokeFilter.addEventListener("change", () => {
  dom.videoFilter.value = "all";
  renderEntries();
});
dom.videoFilter.addEventListener("input", renderEntries);
dom.videoFilter.addEventListener("change", renderEntries);

dom.clearFiltersButton.addEventListener("click", () => {
  dom.dateFilter.value = "";
  dom.searchFilter.value = "";
  dom.strokeFilter.value = "all";
  dom.videoFilter.value = "all";
  renderEntries();
});

dom.prevMonthButton.addEventListener("click", () => {
  calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() - 1, 1);
  renderCalendar();
});

dom.nextMonthButton.addEventListener("click", () => {
  calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() + 1, 1);
  renderCalendar();
});

dom.authForm.addEventListener("submit", handleAuthSubmit);
dom.lockDiaryButton.addEventListener("click", lockDiary);

if (isAuthorized()) {
  unlockDiary();
} else {
  document.body.classList.add("auth-locked");
  dom.diaryPassword.focus();
}
