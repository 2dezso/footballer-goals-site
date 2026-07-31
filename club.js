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

  headerEl.style.setProperty("--club-color", club.color);
  headerEl.style.setProperty("--club-text", club.text || "#fff");
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
        <div class="player-avatar" style="background: ${club.color}; color: ${club.text || "#fff"}">${initials(player.name)}</div>
        <div class="player-name">${player.name}</div>
        <div class="player-meta">${player.position}${player.number ? ` &middot; #${player.number}` : ""}</div>
        <div class="goal-count">${player.goals.length} goal${player.goals.length === 1 ? "" : "s"} this season</div>
      </a>
    `).join("")
    : '<p class="empty-state">No players tracked for this club yet. Add some in data.js.</p>';
}

renderClubPage();
