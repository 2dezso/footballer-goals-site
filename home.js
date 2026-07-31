function goalCountFor(clubId) {
  return PLAYERS
    .filter((p) => p.clubId === clubId)
    .reduce((sum, p) => sum + p.goals.length, 0);
}

function renderClubGrid() {
  const grid = document.getElementById("club-grid");

  grid.innerHTML = CLUBS.map((club) => {
    const goals = goalCountFor(club.id);
    return `
      <a class="club-card" href="club.html?id=${encodeURIComponent(club.id)}" style="--club-color: ${club.color}; --club-text: ${club.text || "#fff"}; --club-glow: ${club.color}55">
        <div class="club-badge">${club.short}</div>
        <div class="club-name">${club.name}</div>
        <div class="hero-stat">
          <span class="stat-number">${goals}</span>
          <span class="stat-label">Goal${goals === 1 ? "" : "s"}</span>
        </div>
      </a>
    `;
  }).join("");
}

renderClubGrid();
