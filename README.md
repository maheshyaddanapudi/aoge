# Age of Empires JS — Browser RTS

A fully playable Age of Empires-style real-time strategy game running entirely in the
browser, rendered in 3D with Three.js. Buildings, units and trees use CC0 low-poly
art packs (Quaternius, KayKit, Kenney), with procedural fallbacks; everything has
real-time shadows, post-processing and procedural surface textures.

**Play it live:** https://maheshyaddanapudi.github.io/aoge/

## Art & assets

- **Buildings** — Quaternius *Ultimate Fantasy RTS* (CC0): models evolve across the
  four ages (palisade fort → stone castle).
- **Units** — KayKit *Adventurers* (CC0): rigged characters with skeletal animation
  (run, idle, death) plus **procedurally authored combat clips** — real sword/axe
  swings and bow draws — with weapons attached to the rig's hand slots.
- **Trees** — Kenney *Nature Kit* (CC0) low-poly species, instanced for performance,
  with a procedurally generated leaf-cluster foliage texture + normal map.
- All asset packs are CC0 (public domain); credits live next to the model files.
  If a pack is absent the game falls back to fully procedural models.

## The game

- Start with a Town Center and four villagers on a procedurally generated map.
- Villagers gather **wood**, **food** and **gold** and construct buildings.
- Advance through **four Ages** (Dark → Feudal → Castle → Imperial), each unlocking
  stronger units and buildings: Militia → Archers → Knights → Catapults, plus
  watch towers, palisade walls and siege workshops.
- A scripted enemy AI builds its own base on the same map, advances through the
  ages, and attacks in escalating waves.
- **Win** by destroying every enemy building. **Lose** if yours are razed first.
- Fully synthesized audio: generative medieval background music (Karplus-Strong
  plucked strings, flute, drone) that layers in war drums during combat, plus
  AoE-style gibberish voice lines when you select and command units — no audio
  files anywhere.

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
