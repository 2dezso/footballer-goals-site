function playerCountFor(clubId) {
  return PLAYERS.filter((p) => p.clubId === clubId).length;
}

function renderClubGrid() {
  const grid = document.getElementById("club-grid");

  grid.innerHTML = CLUBS.map((club) => {
    const count = playerCountFor(club.id);
    return `
      <a class="club-card" href="club.html?id=${encodeURIComponent(club.id)}" style="--club-color: ${club.color}; --club-text: ${club.text || "#fff"}">
        <div class="club-badge">${club.short}</div>
        <div class="club-name">${club.name}</div>
        <div class="club-meta">${count} player${count === 1 ? "" : "s"} tracked</div>
      </a>
    `;
  }).join("");
}

renderClubGrid();
