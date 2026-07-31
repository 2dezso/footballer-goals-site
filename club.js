function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function renderClubPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const club = CLUBS.find((c) => c.id === id);

  const headerEl = document.getElementById("club-header");
  const gridEl = document.getElementById("player-grid");

  if (!club) {
    headerEl.insertAdjacentHTML("beforeend", "<h1>Club not found</h1>");
    gridEl.innerHTML = '<p class="empty-state">Check the link, or pick a club from the home page.</p>';
    return;
  }

  document.title = `${club.name} · Goals Goals Goals`;

  const root = document.documentElement.style;
  root.setProperty("--club-color", club.color);
  root.setProperty("--club-text", club.text || "#fff");
  root.setProperty("--club-glow", `${club.color}55`);

  headerEl.classList.add("club-banner");
  headerEl.insertAdjacentHTML("beforeend", `
    <div class="club-header-body">
      <div class="club-badge club-badge-lg">${club.short}</div>
      <h1>${club.name}</h1>
    </div>
  `);

  const players = PLAYERS.filter((p) => p.clubId === club.id);

  gridEl.innerHTML = players.length
    ? players.map((player) => `
      <a class="player-card" href="player.html?id=${encodeURIComponent(player.id)}">
        <div class="player-avatar">${initials(player.name)}</div>
        <div class="player-name">${player.name}</div>
        <div class="card-subtext">${player.position}${player.number ? ` &middot; #${player.number}` : ""}</div>
        <div class="hero-stat">
          <span class="stat-number">${player.goals.length}</span>
          <span class="stat-label">Goal${player.goals.length === 1 ? "" : "s"}</span>
        </div>
      </a>
    `).join("")
    : '<p class="empty-state">No players tracked for this club yet. Add some in data.js.</p>';
}

renderClubPage();
