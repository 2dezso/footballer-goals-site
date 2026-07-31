function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function renderPlayerGrid() {
  const grid = document.getElementById("player-grid");
  if (!PLAYERS.length) {
    grid.innerHTML = '<p class="empty-state">No players yet. Add some in data.js.</p>';
    return;
  }

  grid.innerHTML = PLAYERS.map((player) => `
    <a class="player-card" href="player.html?id=${encodeURIComponent(player.id)}">
      <div class="player-avatar">${initials(player.name)}</div>
      <div class="player-name">${player.name}</div>
      <div class="player-meta">${player.team} &middot; ${player.position}</div>
      <div class="goal-count">${player.goals.length} goal${player.goals.length === 1 ? "" : "s"} this season</div>
    </a>
  `).join("");
}

renderPlayerGrid();