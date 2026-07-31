function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function extractYouTubeId(value) {
  if (!value) return null;
  const trimmed = value.trim();
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed;

  try {
    const url = new URL(trimmed);
    if (url.hostname.includes("youtu.be")) {
      return url.pathname.slice(1);
    }
    if (url.hostname.includes("youtube.com")) {
      if (url.pathname === "/watch") return url.searchParams.get("v");
      if (url.pathname.startsWith("/embed/")) return url.pathname.split("/")[2];
    }
  } catch (e) {
    // not a valid URL
  }
  return null;
}

function formatDate(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  return d.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
}

function goalCardHtml(goal) {
  const videoId = extractYouTubeId(goal.youtube);
  const embedParams = new URLSearchParams();
  if (goal.start) embedParams.set("start", goal.start);
  if (goal.end) embedParams.set("end", goal.end);
  const embedQuery = embedParams.toString() ? `&${embedParams.toString()}` : "";
  const watchSuffix = goal.start ? `&t=${goal.start}s` : "";

  const media = videoId
    ? `<div class="video-frame" data-video-id="${videoId}" data-embed-query="${embedQuery}">
         <button type="button" class="video-cover" aria-label="Play goal vs ${goal.opponent}">
           <span class="video-cover-ball">⚽</span>
           <span class="video-play-badge">▶</span>
         </button>
       </div>
       <a class="watch-link" href="https://www.youtube.com/watch?v=${videoId}${watchSuffix}" target="_blank" rel="noopener">Watch on YouTube ↗</a>`
    : `<div class="video-placeholder">No video linked yet</div>`;

  return `
    <div class="goal-card">
      <div class="goal-card-head">
        <span class="goal-title">vs ${goal.opponent} &middot; ${goal.competition}</span>
        <span class="goal-date">${formatDate(goal.date)}${goal.minute ? ` &middot; ${goal.minute}'` : ""}</span>
      </div>
      ${goal.description ? `<p class="goal-description">${goal.description}</p>` : ""}
      ${media}
    </div>
  `;
}

function renderPlayerPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const player = PLAYERS.find((p) => p.id === id);

  const headerWrap = document.getElementById("player-header-wrap");
  const headerEl = document.getElementById("player-header");
  const backLink = document.getElementById("back-link");
  const listEl = document.getElementById("goal-list");

  if (!player) {
    headerEl.innerHTML = "<h2>Player not found</h2>";
    listEl.innerHTML = '<p class="empty-state">Check the link, or pick a player from a club page.</p>';
    return;
  }

  const club = CLUBS.find((c) => c.id === player.clubId);

  document.title = `${player.name} · Goals Goals Goals`;

  if (club) {
    const root = document.documentElement.style;
    root.setProperty("--club-color", club.color);
    root.setProperty("--club-text", club.text || "#fff");
    root.setProperty("--club-glow", `${club.color}55`);
    headerWrap.classList.add("club-banner");
    backLink.href = `club.html?id=${encodeURIComponent(club.id)}`;
    backLink.textContent = `← ${club.name}`;
  }

  headerEl.innerHTML = `
    <h2>${player.name}</h2>
    <p class="player-meta">${club ? club.name + " · " : ""}${player.position}${player.number ? ` &middot; #${player.number}` : ""} &middot; ${player.goals.length} goal${player.goals.length === 1 ? "" : "s"} this season</p>
  `;

  const goals = [...player.goals].sort((a, b) => new Date(a.date) - new Date(b.date));
  listEl.innerHTML = goals.length
    ? goals.map(goalCardHtml).join("")
    : '<p class="empty-state">No goals recorded yet.</p>';

  listEl.addEventListener("click", (e) => {
    const cover = e.target.closest(".video-cover");
    if (!cover) return;
    const frame = cover.closest(".video-frame");
    const videoId = frame.dataset.videoId;
    const embedQuery = frame.dataset.embedQuery || "";
    frame.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${videoId}?autoplay=1${embedQuery}"
        title="Goal video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    `;
  });
}

renderPlayerPage();
