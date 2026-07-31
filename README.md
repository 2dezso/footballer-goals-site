# Footballer Goals

A simple static site for the 2026/27 Premier League: browse all 20 clubs, drill into a club's
tracked players, and see each player's goals this season with embedded YouTube clips.

## Site structure

- `index.html` — home page, grid of all 20 Premier League clubs
- `club.html` — players tracked for a given club (`club.html?id=<clubId>`)
- `player.html` — a player's goals this season (`player.html?id=<playerId>`)

## Editing data

All content lives in [`data.js`](data.js).

### Clubs

The 20 clubs are already filled in (`CLUBS`). Each has a color used for the badge/banner:

```js
{ id: "arsenal", name: "Arsenal", short: "ARS", color: "#EF0107" }
```

You generally shouldn't need to touch `CLUBS` unless a club's identity changes.

### Players and goals

Add players to the `PLAYERS` array, pointing `clubId` at one of the `CLUBS` ids:

```js
{
  id: "unique-id",          // used in the URL, keep it short and unique
  name: "Player Name",
  clubId: "arsenal",        // must match a club id from CLUBS
  position: "Forward",
  number: 9,
  goals: [
    {
      date: "2026-08-16",           // YYYY-MM-DD
      opponent: "Rival Town",
      competition: "League",
      minute: 23,
      description: "Right-footed finish from inside the box.",
      youtube: "https://www.youtube.com/watch?v=XXXXXXXXXXX" // or just the 11-char video ID, or "" if none yet
    }
  ]
}
```

Add as many players and goals as you like — club pages and player pages update automatically.
The two `sample-*` players are placeholders; delete or repurpose them once you add real data.

## Running locally

No build step needed. Just open [index.html](index.html) in a browser.

## Deploying

This repo is set up for GitHub Pages — push to `main` and Pages redeploys automatically.
