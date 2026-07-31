# Footballer Goals

A simple static site listing footballers and their goals this season, with embedded YouTube clips.

## Editing data

All content lives in [`data.js`](data.js). Each player looks like:

```js
{
  id: "unique-id",          // used in the URL, keep it short and unique
  name: "Player Name",
  team: "Club Name",
  position: "Forward",
  number: 9,
  goals: [
    {
      date: "2025-08-16",           // YYYY-MM-DD
      opponent: "Rival Town",
      competition: "League",
      minute: 23,
      description: "Right-footed finish from inside the box.",
      youtube: "https://www.youtube.com/watch?v=XXXXXXXXXXX" // or just the 11-char video ID, or "" if none yet
    }
  ]
}
```

Add as many players and goals as you like — the home page and player pages update automatically.

## Running locally

No build step needed. Just open [index.html](index.html) in a browser.

## Deploying

This repo is set up for GitHub Pages — push to `main` and enable Pages (Settings → Pages → Deploy from branch → `main` / root).
