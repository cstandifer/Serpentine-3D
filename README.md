# Serpentine 3D

A big-screen rhythm snake game where you *are* the snake, steered by tipping your phone and jumping for real. It grew out of [Serpentine](https://github.com/cstandifer/Serpentine), a browser game that mixes *Dancing Line* with *Snake*, and keeps the same levels and music.

Everything is plain HTML files with no build step: `index.html` is the game for the big screen, and `controller.html` turns a phone into the controller.

**Start playing:** https://serpentine-3d.onrender.com/

## How to play

1. Open the game on a big screen (a TV, projector, or laptop).
2. Scan the QR code on the menu with your phone, or open `/controller.html` and type the 4-letter code.
3. Tip the phone to steer and jump to jump. Eat gems to grow and reach each level's gem goal, and don't run into your own tail. You get 3 lives per run.

## Controls

- **Phone**: steering is smooth and analog, so the snake curves instead of making 90° turns. Tip a little for a gentle curve, more for a tight one; left and right mean *your* left and right. The phone spots a jump from the push-off spike followed by a moment of near-weightlessness while you're in the air. Left, Jump and Right buttons are always there as a backup (hold Left or Right to keep turning), and a Sensitivity panel tunes how far you tip for a full turn and how big a jump needs to be.
- **Keyboard**: hold ← → to steer, Space jumps, C changes view. In the top view, arrow keys point the snake toward that direction and it curves round to face it.

## Views

- **Eye**: from inside the snake's head.
- **Chase**: just above and behind.
- **Top**: the original bird's-eye board.

Press **C** or use the View button on the phone to switch. In the 3D views, a minimap in the corner shows your tail.

## Modes and extras

- **Versus (2 players)**: pick any level and race for 60 seconds in one shared arena on a split screen. Each player gets 3 lives; crash into anything, including the other snake, and you lose a life and respawn a moment later. Highest score wins. Two phones can join the same code (first is Player 1, second is Player 2), or share a keyboard: A / D / W and ← / → / ↑.
- **Leaderboard**: a top 10 per difficulty, saved on the big screen. If a solo run makes the board, type your name on the phone or the keyboard.
- **Snakes**: Classic (balanced), Glider (jumps twice as far and clears pillars, but grows faster), Magnet (pulls in nearby gems, then recharges), and Comet (about 25% faster, with a wider turning circle).

## Levels

| Level | Name | Gem goal | Music |
|---|---|---|---|
| 1 | Open Floor | 12 | Lo-fi |
| 2 | Four Pillars | 16 | Synthwave |
| 3 | Corridors | 20 | Chiptune |
| 4 | Rooms | 24 | Drum & bass |
| 5 | Gauntlet | 30 | Techno |

## How it works

The phone and screen connect through [PeerJS](https://peerjs.com). Its free cloud server only handles the handshake, and game data goes directly between devices over WebRTC, so it still works as a static site. Some networks block that direct path, so `ice.js` can add a free TURN relay from [Metered](https://www.metered.ca/tools/openrelay/) that carries the data only when a phone can't connect directly. Uses [three.js](https://threejs.org) for the 3D views; if it can't load, the game falls back to the top view.

Phones only share motion sensors over **HTTPS**, so test the controller on the deployed site rather than a local `http://` address.

## Run it locally

Serve the folder and open it in a browser:

```bash
python3 -m http.server 8000
```

## Deploy

The repo includes a `render.yaml`, so Render can deploy it as a static site with no build step.

## Credits

Built on [Serpentine](https://github.com/cstandifer/Serpentine), the original browser version made with classmates at SVA.
