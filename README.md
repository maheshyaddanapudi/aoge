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
  ages, researches blacksmith techs and attacks in escalating waves — optionally
  two allied AIs at once (1v2).
- **Win** by destroying every enemy building. **Lose** if yours are razed first.
- **Fog of war**, unit stances, attack-move, drag-line walls, control groups.
- **Blacksmith tech tree**, spearman/knight/archer counter triangle, market
  trading, stone mining, town bell and garrisoning, repairs.
- **Docks & fishing boats** (naval-lite) on maps with ponds.
- **Scenarios**: Lightning War, Hold the Line, Golden Age — plus map seed,
  size and biome options on the start screen.
- **Save/load** (localStorage), **score screen**, and **replays**: the sim is
  fully deterministic (fixed 50 ms ticks + seeded PRNG), every player action
  is a serializable command, and a match's tick-stamped command log replays
  into an identical playout.
- **Local co-op multiplayer**: host a game and open the join link in a second
  tab/window — a BroadcastChannel lockstep session shares one deterministic
  sim (guest commands route through the host; state hashes verify sync).
  Online play would swap the transport for a WebRTC DataChannel (e.g. PeerJS)
  behind the same `Coop` protocol in `src/game/net.js`.
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

## Rendering notes

- **Ambient occlusion**: N8AO (half-res, low quality mode) runs in the post
  stack; a runtime perf guard drops all post-processing on GPUs that can't
  hold ~28 FPS, and `?lite` skips shadows + post entirely.
- **Shadows**: one directional light whose ortho shadow box re-centers on the
  camera target and scales with zoom (4k shadow maps on capable GPUs). A real
  cascaded shadow map (three's CSM addon) was evaluated and skipped: it
  requires patching every material via `setupMaterial`, which conflicts with
  the dynamically generated team/pack/instanced materials.
- **Tree LOD**: each tree species is rendered once to an offscreen snapshot;
  trees beyond ~95 world units of the camera target collapse to billboard
  quads (the RTS camera has a fixed yaw, so one angle suffices) and pop back
  to instanced 3D when the camera nears, with hysteresis.
- **WebGPU**: assessed at three r165 — `WebGPURenderer` is still maturing
  (incomplete post-processing and shader-node coverage) and Safari/Firefox
  lack stable WebGPU, so the game stays on WebGL2. The renderer-facing code
  (instancing, render targets, composer passes) is standard three.js, which
  keeps a future migration mechanical rather than architectural.
