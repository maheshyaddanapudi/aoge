# Age of Empires JS — Browser RTS

A fully playable Age of Empires-style real-time strategy game running entirely in the
browser, rendered in 3D with Three.js. No assets — every unit, building and tree is
procedurally modeled low-poly geometry with real-time shadows.

**Play it live:** https://maheshyaddanapudi.github.io/aoge/

## The game

- Start with a Town Center and four villagers on a procedurally generated map.
- Villagers gather **wood**, **food** and **gold** and construct buildings.
- Advance through **four Ages** (Dark → Feudal → Castle → Imperial), each unlocking
  stronger units and buildings: Militia → Archers → Knights → Catapults, plus
  watch towers, palisade walls and siege workshops.
- A scripted enemy AI builds its own base on the same map, advances through the
  ages, and attacks in escalating waves.
- **Win** by destroying every enemy building. **Lose** if yours are razed first.

## Controls

| Input | Action |
| --- | --- |
| Left click / drag | Select / box-select units |
| Right click | Context command: move, gather, attack, build, set rally |
| WASD / arrows / screen edge | Pan camera |
| Mouse wheel | Zoom (toward cursor) |
| Ctrl+1–9 / 1–9 | Set / recall control groups |
| H | Jump to Town Center |
| . | Cycle idle villagers |
| T | Stop selected units |
| Esc | Cancel placement / clear selection |

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
node scripts/smoke.mjs   # headless playthrough test (needs npx playwright install chromium)
```

Deployed automatically to GitHub Pages via `.github/workflows/deploy.yml`.
