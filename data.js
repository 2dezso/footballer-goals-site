// Season goal data for the site.
// Edit this file to add/update players and goals.
//
// Each goal's "youtube" field accepts either a full YouTube URL
// (e.g. "https://www.youtube.com/watch?v=XXXXXXXXXXX") or just the
// 11-character video ID. Leave it as "" if you don't have a video yet.

const PLAYERS = [
  {
    id: "sample-striker",
    name: "Sample Striker",
    team: "Sample FC",
    position: "Forward",
    number: 9,
    goals: [
      {
        date: "2025-08-16",
        opponent: "Rival Town",
        competition: "League",
        minute: 23,
        description: "Right-footed finish from inside the box.",
        youtube: ""
      },
      {
        date: "2025-08-30",
        opponent: "United City",
        competition: "Cup",
        minute: 78,
        description: "Header from a corner.",
        youtube: ""
      }
    ]
  },
  {
    id: "sample-winger",
    name: "Sample Winger",
    team: "Sample FC",
    position: "Winger",
    number: 11,
    goals: [
      {
        date: "2025-09-13",
        opponent: "Athletic Rovers",
        competition: "League",
        minute: 55,
        description: "Curled effort into the top corner.",
        youtube: ""
      }
    ]
  }
];
