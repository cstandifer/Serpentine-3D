# Serpentine 3D
<img width="1280" height="800" alt="image" src="https://github.com/user-attachments/assets/cf080bb0-aaca-4c5e-ba83-a9244a9e52b7" />

A big-screen rhythm snake game. Everyone watches one screen (a TV, a projector, a laptop) and steers their own snake with their phone or the keyboard. Every level is its own little world with its own song, and the floor and gems pulse on the beat.

It grew out of [Serpentine](https://github.com/cstandifer/Serpentine), a browser game that mixes *Dancing Line* with *Snake*, made with classmates at SVA.

**Play it:** https://serpentine-3d.onrender.com/

## Getting started

1. Open the game on the big screen.
2. Pick **Solo**, **Party** or **Tag team**.
3. To play from a phone, scan the QR code on the menu (or open `/controller.html` and type the 4-letter code). To play on the computer itself, use **+ Me, on this keyboard**.
4. Pick your snake, then start.

## Modes

- **Solo**: ten levels in order. Eat gems to reach each level's goal; you have 3 lives per run. Clearing a level unlocks the next one, and a top-10 leaderboard is kept for each difficulty.
- **Party (2 to 8 players)**: everyone in one arena on a timer (60 seconds for 2 players, longer for bigger groups). Crash into anything, including another snake, and you lose a life and respawn. Highest score wins. Pick any of the four party rooms. If every real player is out, **Skip to results** finishes the round instantly.
- **Tag team (2 to 4 players)**: work through the solo levels together. Every gem anyone eats counts toward a shared goal, teammates pass through each other, and each player has their own lives. A player who runs out stays out until the next run, and their split view goes to the players still in.

Computer snakes can fill any open seat in party and tag team. They play at the difficulty you pick (Easy, Normal or Hard), and can get their own split view if you want to watch them.

## Controls

- **Phone**: player 1's phone picks the level, adds computer snakes and starts the game. Everyone picks their snake on their own phone. Tip the phone to steer (smooth and analog, so the snake curves), and jump to jump. Left, Jump and Right buttons are always there as a backup, and a Sensitivity panel tunes the tilt and jump.
- **Keyboard**: hold ← → to steer, Space or ↑ jumps, C changes view. Two people can share a keyboard: A D W and the arrows.
- **Phone or tablet as the screen**: tilt to steer and tap to jump.

## Snakes

| Snake | What it does |
|---|---|
| Classic | Balanced, no tricks |
| Glider | Jumps twice as far and clears pillars, but grows faster |
| Magnet | Pulls in nearby gems, then needs a moment to recharge; shorter jumps |
| Comet | About 25% faster, with a wider turning circle |

## Views

**Eye** (inside the snake's head), **Chase** (just above and behind) and **Top** (the original bird's-eye board, solo only). Press C to switch. A small map shows the arena; it hides when a screen is split more than two ways.

## Levels

| # | Level | Gem goal | World | Song |
|---|---|---|---|---|
| 1 | Open Floor | 12 | Dusk and a pink moon | Good Night (Lofi Cozy Chill Music), FASSounds |
| 2 | Four Pillars | 16 | Outrun sunset | Static Heart, AleXZavesa |
| 3 | Corridors | 20 | Toy world: grass, toy blocks, logs, toadstool gems | The Return Of The 8-bit Era, DJARTMUSIC |
| 4 | Gauntlet | 24 | Warehouse rave with lasers | Vampire Night (Dark Acid Techno), wbmstudio |
| 5 | Mirror Ball | 26 | Light-up disco floor, giant mirror balls | Midnight Parade, djovan |
| 6 | Beat Gates | 26 | Neon light-cycle city; gates rise and fall on the beat | Hard Cyberpunk, Kulakovka |
| 7 | Undertow | 28 | Coral reef, jellyfish | La nuit, Jean_Motell |
| 8 | Rooms | 30 | Construction site with scaffolding | Upbeat Electronic Beat, Tunetank |
| 9 | Event Horizon | 30 | Deep space: a black hole, a ring station, smoked-glass walls | Interstellar, QuentinGaming |
| 10 | Last Dance | 34 | Rainbow road in space, with ramps and coins | Built-in synth |

## Party rooms

| Room | World | Song |
|---|---|---|
| Neon Bowl | Outrun sunset | Static Heart |
| Crossroads | Warehouse rave | Vampire Night |
| Pinball | Neon light-cycle city | 20s swing rave, dferun |
| Night Market | Deep space | Interstellar |

All recorded songs are from [Pixabay](https://pixabay.com/music/) under the Pixabay Content License.

## How it works

- **Plain files, no build step.** `index.html` is the whole game, `controller.html` turns a phone into a controller, and `music/` holds the songs.
- **Phones connect** through [PeerJS](https://peerjs.com): its free server only handles the handshake, and game data goes directly between devices over WebRTC. Some networks block that direct path, so `ice.js` adds a free TURN relay from [Metered](https://www.metered.ca/tools/openrelay/) for when a phone can't connect directly.
- **3D** is drawn with [three.js](https://threejs.org). A copy ships in `vendor/` so a slow or blocked CDN can't stop the game from starting; if 3D can't run at all, solo falls back to the top view.
- **Music** loads per level and loops; the visuals pulse from the song's measured tempo. Losing a life or pausing picks the song back up where it stopped. If a song fails to load, the game retries rather than switching to the built-in synth.
- **If the game ever fails to start**, it says so on screen with the reason and a Reload button, instead of showing a black page.

Phones only share motion sensors over **HTTPS**, so test the phone controller on the deployed site, not a local `http://` address.

## Run it locally

Serve the folder and open it in a browser:

```bash
python3 -m http.server 8000
```

Songs don't load from a page opened straight from a file (`file://`); in that case the game uses its built-in synth music.

## Deploy

`render.yaml` deploys the folder to Render as a static site with no build step.

## Credits

Built on [Serpentine](https://github.com/cstandifer/Serpentine), the original browser version made with classmates at SVA. Music from the Pixabay artists listed above.
