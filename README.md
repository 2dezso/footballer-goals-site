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
      youtube: "https://www.youtube.com/watch?v=XXXXXXXXXXX", // or just the 11-char video ID, or "" if none yet
      start: 95,   // optional: seconds into the video where the goal happens — jumps the embed there
      end: 110     // optional: seconds where playback stops
    }
  ]
}
```

`start`/`end` are useful when the only embeddable clip you can find is a longer vlog, reaction video,
or compilation rather than a clean single-goal highlight — many broadcaster "highlights" clips
(Sky Sports, NBC, official club channels) disable embedding entirely, so fan/reaction/compilation
uploads are often the only option. Scrub to the goal in the video once, note the timestamp in
seconds, and set `start` (and optionally `end`) so the embed opens right on the goal instead of at
0:00. Every goal card also shows a "Watch on YouTube" link as a fallback.

Add as many players and goals as you like — club pages and player pages update automatically.
The two `sample-*` players are placeholders; delete or repurpose them once you add real data.

## Running locally

No build step needed. Just open [index.html](index.html) in a browser.

## Deploying

This repo is set up for GitHub Pages — push to `main` and Pages redeploys automatically.
