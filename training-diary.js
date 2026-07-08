const storageKey = "tennisMotionLab.trainingDiary.v2";
const authStorageKey = "tennisMotionLab.trainingDiary.auth.v1";
const authDurationMs = 1000 * 60 * 60 * 24 * 14;
const passwordHash = "44101bd7e008971009a5c8365210ced92bd3f3d3ded74f20ea70868dae51de69";
const urlParams = new URLSearchParams(window.location.search);
const dataFile = urlParams.get("data");

const dom = {
  authGate: document.querySelector("#authGate"),
  authForm: document.querySelector("#authForm"),
  diaryPassword: document.querySelector("#diaryPassword"),
  authError: document.querySelector("#authError"),
  lockDiaryButton: document.querySelector("#lockDiaryButton"),
  dateFilter: document.querySelector("#dateFilter"),
  searchFilter: document.querySelector("#searchFilter"),
  strokeFilter: document.querySelector("#strokeFilter"),
  clearFiltersButton: document.querySelector("#clearFiltersButton"),
  trainingCalendar: document.querySelector("#trainingCalendar"),
  calendarMonth: document.querySelector("#calendarMonth"),
  prevMonthButton: document.querySelector("#prevMonthButton"),
  nextMonthButton: document.querySelector("#nextMonthButton"),
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
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    if (Array.isArray(saved) && saved.length) return saved;
  } catch {
    localStorage.removeItem(storageKey);
  }

  if (!dataFile) return [];

  try {
    const response = await fetch(dataFile, { cache: "no-store" });
    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data)) return data;
      if (Array.isArray(data.entries)) return data.entries;
    }
  } catch {
    return [];
  }
}

function saveEntries() {
  localStorage.setItem(storageKey, JSON.stringify(entries));
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
  const query = dom.searchFilter.value.trim().toLowerCase();
  return entries
    .filter((entry) => !date || entry.date === date)
    .filter((entry) => stroke === "all" || entry.stroke === stroke)
    .filter((entry) => {
      if (!query) return true;
      return [
        entry.title,
        entry.stroke,
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
    .sort((a, b) => b.date.localeCompare(a.date));
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
    const ai = document.createElement("small");
    ai.textContent = frame.aiNote || "Review this frame against the coach cue and motion-analysis overlay.";
    node.append(label, points, ai);
    renderDetectionList(node, frame.detections || frame.keypointDetections || []);
    container.append(node);
  });
}

function renderEntries() {
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
    card.querySelector(".card-title").textContent = entry.title;
    card.querySelector(".stroke-pill").textContent = entry.stroke;
    card.querySelector(".keyframe-count").textContent = `${frames.length} frame${frames.length === 1 ? "" : "s"}`;
    renderKeyframes(card.querySelector(".keyframe-list"), entry);
    renderAnalysisText(card.querySelector(".coach-text"), entry.coach);
    renderAnalysisText(card.querySelector(".diagnosis-text"), entry.diagnosis);
    renderAnalysisText(card.querySelector(".coach-ai-text"), entry.coachAi);

    const videoWrap = card.querySelector(".video-link-wrap");
    const previewVideoUrl = entry.previewVideoUrl || entry.videoUrl;
    const rawVideoUrl = entry.rawVideoUrl || entry.videoUrl;
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
        if (isLocalAssetUrl(rawVideoUrl)) {
          rawLink.textContent = "Download Raw Video";
          rawLink.setAttribute("download", entry.videoName || "raw-training-video");
        } else {
          rawLink.textContent = "Open Raw Video";
        }
        links.append(rawLink);
        videoWrap.append(links);
      }
    }

    dom.diaryList.append(card);
  });
}

[dom.dateFilter, dom.searchFilter, dom.strokeFilter].forEach((input) => {
  input.addEventListener("input", renderEntries);
  input.addEventListener("change", renderEntries);
});

dom.clearFiltersButton.addEventListener("click", () => {
  dom.dateFilter.value = "";
  dom.searchFilter.value = "";
  dom.strokeFilter.value = "all";
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
