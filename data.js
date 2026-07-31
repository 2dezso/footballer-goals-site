// 2026/27 Premier League clubs.
// "color" drives the badge/banner accent; "text" overrides badge text color
// for clubs whose primary color is too light for white text.
const CLUBS = [
  { id: "arsenal", name: "Arsenal", short: "ARS", color: "#EF0107" },
  { id: "aston-villa", name: "Aston Villa", short: "AVL", color: "#670E36" },
  { id: "bournemouth", name: "Bournemouth", short: "BOU", color: "#DA291C" },
  { id: "brentford", name: "Brentford", short: "BRE", color: "#E30613" },
  { id: "brighton", name: "Brighton & Hove Albion", short: "BHA", color: "#0057B8" },
  { id: "chelsea", name: "Chelsea", short: "CHE", color: "#034694" },
  { id: "coventry", name: "Coventry City", short: "COV", color: "#78D0F2", text: "#1a1a1a" },
  { id: "crystal-palace", name: "Crystal Palace", short: "CRY", color: "#1B458F" },
  { id: "everton", name: "Everton", short: "EVE", color: "#003399" },
  { id: "fulham", name: "Fulham", short: "FUL", color: "#000000" },
  { id: "hull-city", name: "Hull City", short: "HUL", color: "#F18A01" },
  { id: "ipswich", name: "Ipswich Town", short: "IPS", color: "#0044A9" },
  { id: "leeds", name: "Leeds United", short: "LEE", color: "#FFCD00", text: "#1a1a1a" },
  { id: "liverpool", name: "Liverpool", short: "LIV", color: "#C8102E" },
  { id: "man-city", name: "Manchester City", short: "MCI", color: "#6CABDD" },
  { id: "man-united", name: "Manchester United", short: "MUN", color: "#DA291C" },
  { id: "newcastle", name: "Newcastle United", short: "NEW", color: "#241F20" },
  { id: "nottm-forest", name: "Nottingham Forest", short: "NFO", color: "#DD0000" },
  { id: "sunderland", name: "Sunderland", short: "SUN", color: "#EB172B" },
  { id: "tottenham", name: "Tottenham Hotspur", short: "TOT", color: "#132257" }
];

// Players, grouped by club via clubId (must match a CLUBS id above).
// Edit/add freely — the site renders whatever's here.
//
// Each goal's "youtube" field accepts either a full YouTube URL
// (e.g. "https://www.youtube.com/watch?v=XXXXXXXXXXX") or just the
// 11-character video ID. Leave it as "" if you don't have a video yet.
const PLAYERS = [
  {
    id: "sample-striker",
    name: "Sample Striker",
    clubId: "arsenal",
    position: "Forward",
    number: 9,
    goals: [
      {
        date: "2026-08-16",
        opponent: "Rival Town",
        competition: "League",
        minute: 23,
        description: "Right-footed finish from inside the box.",
        youtube: ""
      },
      {
        date: "2026-08-30",
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
    clubId: "chelsea",
    position: "Winger",
    number: 11,
    goals: [
      {
        date: "2026-09-13",
        opponent: "Athletic Rovers",
        competition: "League",
        minute: 55,
        description: "Curled effort into the top corner.",
        youtube: ""
      }
    ]
  },
  {
    // Real player, but goals are from the 2025/26 season (last season) rather
    // than the 2026/27 season this site otherwise tracks — added just to test
    // the goal/video layout with real data.
    id: "szoboszlai",
    name: "Dominik Szoboszlai",
    clubId: "liverpool",
    position: "Midfielder",
    number: 8,
    goals: [
      {
        date: "2025-08-31",
        opponent: "Arsenal",
        competition: "Premier League",
        minute: 83,
        description: "Thumping 30-yard free-kick into the top corner to win it at Anfield.",
        youtube: "https://www.youtube.com/watch?v=K0nNW8BVNLg"
      },
      {
        date: "2025-12-06",
        opponent: "Leeds United",
        competition: "Premier League",
        minute: 80,
        description: "Touch and low finish at Elland Road to restore Liverpool's lead.",
        youtube: "https://www.youtube.com/watch?v=gx9jZjByZDg"
      },
      {
        date: "2026-01-24",
        opponent: "Bournemouth",
        competition: "Premier League",
        minute: 80,
        description: "Free-kick blasted into the corner to level the game at 2-2.",
        youtube: "https://www.youtube.com/watch?v=qS4YroCfk0Q"
      },
      {
        date: "2026-03-15",
        opponent: "Tottenham Hotspur",
        competition: "Premier League",
        minute: 18,
        description: "Free-kick curled into the top corner at Anfield.",
        youtube: "https://www.youtube.com/watch?v=BneiDhukt4M"
      },
      {
        date: "2026-05-03",
        opponent: "Manchester United",
        competition: "Premier League",
        minute: 47,
        description: "Pounced on a defensive error to pull Liverpool level at Old Trafford.",
        youtube: "https://www.youtube.com/watch?v=HNpt6RgTw-s"
      }
    ]
  }
];
