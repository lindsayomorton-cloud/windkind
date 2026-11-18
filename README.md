# Spellwood Arcade

A cozy forest arcade where every move is a spelled word. Van the fox and Dean the beaver guide 6 and 7 year olds through seven spelling games, designed with dyslexic readers in mind.

## Games

- Fox's Solitaire
- Connect Four
- Mushroom Memory
- Tic-Tac-Toe
- Acorn Drop
- Beaver's Dam
- Root Run

Plus a weekly Spelling Test, Learn with Fox, Remember with Fox (spaced review) and the Word Race leaderboard.

## Run it

It is a static site with no build step.

- **Locally:** serve the folder (for example `npx serve .` or `python3 -m http.server`) and open http://localhost:8000. Opening `index.html` directly from disk mostly works, but the voice worker needs a server.
- **GitHub Pages:** push this folder to a repo, then Settings → Pages → Deploy from branch → `main` / root.

## Settings

Edit `window.SPELLWOOD_CFG` in `index.html`:

| Key | Values | Default |
| --- | --- | --- |
| `mode` | `unlock`, `during`, `free` | `unlock` |
| `words` | words to spell before a game unlocks | `5` |
| `devSkip` | show the developer Skip button | `false` |

## Files

- `index.html` – entry page
- `game.js` – all game screens and logic
- `literacy.js` – word lists, spelling patterns and feedback
- `asset-map.js` – image lookup
- `style.css`, `ds/organic.css` – styles
- `tts-worker.js` – optional Kokoro voice (loads from a CDN on first use; falls back to the browser voice)
- `assets/` – artwork

## Notes

- Progress is saved in the browser (localStorage).
- Fonts load from Google Fonts; artwork is local.
