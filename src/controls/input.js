// Mouse & keyboard interaction: picking, box-select, right-click context
// commands, building placement ghost, control groups.

import * as THREE from 'three';
import { TILE, PLAYER, BUILDINGS } from '../config.js';
import { BUILDING_FACTORY } from '../render/models.js';
import { packBuilding } from '../render/pack.js';
import { voice } from '../voice.js';

export class InputController {
  constructor({ canvas, game, rtsCam, camera, terrainMesh, onSelectionChange, sound }) {
    this.canvas = canvas;
    this.game = game;
    this.rtsCam = rtsCam;
    this.camera = camera;
    this.terrain = terrainMesh;
    this.onSelectionChange = onSelectionChange;
    this.sound = sound;

    this.selection = [];
    this.groups = new Map();
    this.raycaster = new THREE.Raycaster();
    this.mouseNDC = new THREE.Vector2();

    this.dragStart = null;     // {x,y} screen px
    this.dragging = false;
    this.placing = null;       // {type, def, ghost, valid, gx, gy}
    this.idleVillIdx = 0;

    this.boxEl = document.createElement('div');
    this.boxEl.style.cssText = 'position:fixed;border:1.5px solid #7df58b;background:rgba(110,245,140,.12);pointer-events:none;display:none;z-index:20;';
    document.body.appendChild(this.boxEl);

    canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
    window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    window.addEventListener('mouseup', (e) => this.onMouseUp(e));
    canvas.addEventListener('dblclick', (e) => this.onDblClick(e));
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const gp = this.groundPoint(e.clientX, e.clientY);
      this.rtsCam.zoomBy(e.deltaY, gp);
    }, { passive: false });
    window.addEventListener('keydown', (e) => this.onKeyDown(e));

    this.setupTouch();
  }

  // ---- touch / mobile ---------------------------------------------------------
  // On a touchscreen there is no right-click, so a TAP is contextual: tap your
  // own unit/building to select it; with a selection, tap a tree/enemy/ground to
  // gather/attack/move (the right-click equivalent). One finger drags to pan,
  // two fingers pinch to zoom, and an armable button enables box-select.
  setupTouch() {
    const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
    this.boxArmed = false;
    this.touch = null;     // single-finger gesture state
    this.pinch = null;     // two-finger gesture state
    const canvas = this.canvas;

    const TAP_MOVE = 12;   // px of movement still counted as a tap
    const TAP_TIME = 400;  // ms

    canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      if (e.touches.length === 1) {
        const t = e.touches[0];
        this.touch = { x0: t.clientX, y0: t.clientY, x: t.clientX, y: t.clientY, t0: performance.now(), moved: false };
        if (this.placing) this.updateGhost(t.clientX, t.clientY);
        if (this.boxArmed) { this.dragStart = { x: t.clientX, y: t.clientY, shift: false }; this.dragging = false; }
      } else if (e.touches.length === 2) {
        // entering pinch cancels any pending single-finger gesture/box
        this.touch = null; this.dragStart = null; this.dragging = false; this.boxEl.style.display = 'none';
        if (this.placing) { this.cancelPlacement(); }
        const [a, b] = e.touches;
        this.pinch = { d: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY),
                       mx: (a.clientX + b.clientX) / 2, my: (a.clientY + b.clientY) / 2 };
      }
    }, { passive: false });

    window.addEventListener('touchmove', (e) => {
      if (this.pinch && e.touches.length >= 2) {
        e.preventDefault();
        const [a, b] = e.touches;
        const d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
        const mx = (a.clientX + b.clientX) / 2, my = (a.clientY + b.clientY) / 2;
        if (this.pinch.d > 0) {
          const ratio = this.pinch.d / d; // fingers apart -> ratio<1 -> zoom in
          this.rtsCam.dist = THREE.MathUtils.clamp(this.rtsCam.dist * ratio, this.rtsCam.minDist, this.rtsCam.maxDist);
        }
        this.panScreen(this.pinch.mx, this.pinch.my, mx, my);
        this.pinch = { d, mx, my };
        return;
      }
      if (this.touch && e.touches.length === 1) {
        e.preventDefault();
        const t = e.touches[0];
        const px = this.touch.x, py = this.touch.y;
        this.touch.x = t.clientX; this.touch.y = t.clientY;
        if (Math.hypot(t.clientX - this.touch.x0, t.clientY - this.touch.y0) > TAP_MOVE) this.touch.moved = true;
        if (this.placing) { this.updateGhost(t.clientX, t.clientY); return; }
        if (this.boxArmed && this.dragStart) {       // draw selection box
          this.dragging = true;
          const x0 = Math.min(t.clientX, this.dragStart.x), y0 = Math.min(t.clientY, this.dragStart.y);
          this.boxEl.style.display = 'block';
          this.boxEl.style.left = x0 + 'px'; this.boxEl.style.top = y0 + 'px';
          this.boxEl.style.width = Math.abs(t.clientX - this.dragStart.x) + 'px';
          this.boxEl.style.height = Math.abs(t.clientY - this.dragStart.y) + 'px';
          return;
        }
        if (this.touch.moved) this.panScreen(px, py, t.clientX, t.clientY); // drag to pan
      }
    }, { passive: false });

    window.addEventListener('touchend', (e) => {
      if (this.pinch && e.touches.length < 2) { this.pinch = null; }
      if (!this.touch) return;
      const tt = this.touch;
      const isTap = !tt.moved && (performance.now() - tt.t0) < TAP_TIME;
      if (e.touches.length === 0) {
        if (this.placing) {                          // placement: tap/drag-then-lift places
          this.tryPlace(false);
        } else if (this.boxArmed) {                  // armed: a drag box-selects, a tap just disarms
          if (this.dragging) this.boxSelect(this.dragStart, { x: tt.x, y: tt.y }, false);
          this.setBoxArmed(false);
        } else if (isTap) {
          this.handleTap(tt.x0, tt.y0);
        }
        this.dragStart = null; this.dragging = false; this.boxEl.style.display = 'none';
        this.touch = null;
      }
    }, { passive: false });

    // armable box-select button (shown only on touch devices)
    const btn = document.getElementById('touch-box-btn');
    if (btn) {
      if (isTouch) btn.classList.remove('hidden');
      btn.addEventListener('click', () => this.setBoxArmed(!this.boxArmed));
    }
    if (isTouch) document.body.classList.add('is-touch');
  }

  setBoxArmed(on) {
    this.boxArmed = on;
    const btn = document.getElementById('touch-box-btn');
    if (btn) btn.classList.toggle('armed', on);
  }

  // Pan the camera so the world point under (px,py) follows to (qx,qy).
  panScreen(px, py, qx, qy) {
    const p1 = this.screenToPlane(px, py);
    const p2 = this.screenToPlane(qx, qy);
    if (p1 && p2) this.rtsCam.panBy(p1.x - p2.x, p1.z - p2.z);
  }

  // Intersect the pick ray with the horizontal plane at the camera's focus height.
  screenToPlane(x, y) {
    this.setRayFrom(x, y);
    const ray = this.raycaster.ray;
    const planeY = this.rtsCam.smoothTarget.y;
    if (Math.abs(ray.direction.y) < 1e-5) return null;
    const t = (planeY - ray.origin.y) / ray.direction.y;
    if (t <= 0) return null;
    return new THREE.Vector3().copy(ray.direction).multiplyScalar(t).add(ray.origin);
  }

  // A tap is select-or-command depending on the selection. With units
  // selected, COMMAND intent wins (attack the enemy, work the farm, resume
  // the construction site, deposit at the TC) — selection switching only
  // happens when nothing commandable is under the tap.
  handleTap(x, y) {
    if (this.attackMoveArmed) { this.fireAttackMove(x, y); return; }
    const hit = this.pick(x, y) || {};
    const ent = hit.entity || null;
    const ownSel = this.selection.filter(e => !e.dead && e.owner === PLAYER);
    const selUnits = ownSel.filter(e => e.isUnit);
    const selBuildings = ownSel.filter(e => e.isBuilding);

    if (selUnits.length) {
      // enemy (picked or nearby) -> attack
      const enemy = (ent && ent.owner !== PLAYER) ? ent : this.unitNearScreen(x, y, 34, 'foe');
      if (enemy) return this.dispatchContext({ entity: enemy });
      // resource node -> gather
      if (hit.node) return this.dispatchContext(hit);
      // own building: command when it means something, otherwise switch selection
      if (ent?.isBuilding && ent.owner === PLAYER) {
        const carrying = selUnits.some(u => u.type === 'villager' && u.carry?.amt > 0);
        const hasVill = selUnits.some(u => u.type === 'villager');
        if (!ent.complete || ent.def.isFarm || (ent.def.dropoff && carrying) ||
            (hasVill && ent.hp < ent.maxHp - 0.5)) {
          return this.dispatchContext({ entity: ent });
        }
        this.select([ent]); this.selectFeedback([ent]); return;
      }
      // own unit -> switch selection
      const ownU = (ent?.isUnit && ent.owner === PLAYER) ? ent : this.unitNearScreen(x, y, 30, PLAYER);
      if (ownU) { this.select([ownU]); this.selectFeedback([ownU]); return; }
      // ground -> move
      if (hit.point) return this.dispatchContext(hit);
      this.select([]);
      return;
    }

    if (selBuildings.length) {
      // taps on ground/nodes set the rally; own entities switch selection
      if (ent && ent.owner === PLAYER) { this.select([ent]); this.selectFeedback([ent]); return; }
      if (hit.node || hit.point) return this.dispatchContext(hit);
      if (ent) { this.select([ent]); this.onSelectionChange(this.selection); return; }
      this.select([]);
      return;
    }

    // nothing selected: tap selects
    const own = (ent && ent.owner === PLAYER) ? ent : this.unitNearScreen(x, y, 34, PLAYER);
    if (own) { this.select([own]); this.selectFeedback([own]); return; }
    if (ent) { this.select([ent]); this.onSelectionChange(this.selection); return; }
    this.select([]);
  }

  // ---- picking helpers --------------------------------------------------------

  setRayFrom(clientX, clientY) {
    this.mouseNDC.set((clientX / window.innerWidth) * 2 - 1, -(clientY / window.innerHeight) * 2 + 1);
    this.raycaster.setFromCamera(this.mouseNDC, this.camera);
  }

  groundPoint(clientX, clientY) {
    this.setRayFrom(clientX, clientY);
    const hits = this.raycaster.intersectObject(this.terrain, false);
    return hits.length ? hits[0].point : null;
  }

  // Returns {entity} | {node} | {point} | null
  pick(clientX, clientY) {
    this.setRayFrom(clientX, clientY);
    const game = this.game;

    // fog-hidden (and garrisoned) entities are invisible but would still be
    // raycast-hit, so filter them out of the pick set
    const roots = [];
    for (const u of game.units) if (u.group.visible) roots.push(u.group);
    for (const b of game.buildings) if (b.group.visible) roots.push(b.group);
    for (const n of game.nodes) if (n.mesh && n.mesh.visible) roots.push(n.mesh);
    const hits = this.raycaster.intersectObjects(roots, true);

    // instanced trees
    const treeHits = this.raycaster.intersectObjects(game.trees.pickMeshes, false);

    const ground = this.raycaster.intersectObject(this.terrain, false);

    let best = null, bestDist = Infinity;
    if (hits.length && hits[0].distance < bestDist) {
      bestDist = hits[0].distance;
      let o = hits[0].object;
      while (o && !o.userData.entity && !o.userData.node) o = o.parent;
      if (o?.userData.entity) best = { entity: o.userData.entity };
      else if (o?.userData.node) best = { node: o.userData.node };
      else best = null;
    }
    if (treeHits.length && treeHits[0].distance < bestDist) {
      const node = game.treeNodeByInstance.get(treeHits[0].instanceId);
      if (node && !node.dead) {
        best = { node };
        bestDist = treeHits[0].distance;
      }
    }
    if (!best && ground.length) return { point: ground[0].point };
    if (best && ground.length && ground[0].distance < bestDist - 0.5) {
      // terrain genuinely in front (e.g. hill) — fall back to point
      return { point: ground[0].point };
    }
    return best || null;
  }

  // ---- selection ----------------------------------------------------------------

  select(entities, additive = false) {
    if (!additive) {
      for (const e of this.selection) e.setSelected(false);
      this.selection = [];
    }
    for (const e of entities) {
      if (!this.selection.includes(e) && !e.dead) {
        this.selection.push(e);
        e.setSelected(true);
      }
    }
    this.pruneSelection();
    this.onSelectionChange(this.selection);
  }

  pruneSelection() {
    this.selection = this.selection.filter(e => !e.dead);
  }

  selectedUnits(ownOnly = true) {
    this.pruneSelection();
    return this.selection.filter(e => e.isUnit && (!ownOnly || e.owner === PLAYER));
  }

  // ---- mouse events ----------------------------------------------------------------

  onMouseDown(e) {
    if (e.button === 0) {
      if (this.placing) {
        if (this.placing.def.isWall) {
          // walls place in drag-lines: anchor here, stretch, release to build
          this.placing.lineStart = { gx: this.placing.gx, gy: this.placing.gy };
          return;
        }
        this.tryPlace(e.shiftKey);
        return;
      }
      if (this.attackMoveArmed) {
        this.fireAttackMove(e.clientX, e.clientY);
        return;
      }
      this.dragStart = { x: e.clientX, y: e.clientY, shift: e.shiftKey };
      this.dragging = false;
    } else if (e.button === 2) {
      if (this.placing) { this.cancelPlacement(); return; }
      if (this.attackMoveArmed) { this.disarmAttackMove(); return; }
      this.issueContextCommand(e.clientX, e.clientY, e.shiftKey);
    }
  }

  // ---- attack-move ------------------------------------------------------------
  armAttackMove() {
    if (!this.selectedUnits().some(u => u.type !== 'villager')) return;
    this.attackMoveArmed = true;
    this.canvas.style.cursor = 'crosshair';
  }

  disarmAttackMove() {
    this.attackMoveArmed = false;
    this.canvas.style.cursor = 'default';
  }

  fireAttackMove(cx, cy) {
    this.disarmAttackMove();
    const hit = this.pick(cx, cy);
    const units = this.selectedUnits().filter(u => u.type !== 'villager');
    if (!units.length || !hit) return;
    if (hit.entity && hit.entity.owner !== PLAYER) {
      for (const u of units) u.orderAttack(hit.entity);
    } else {
      const p = hit.point || (hit.node ? { x: hit.node.wx, z: hit.node.wz } : null);
      if (!p) return;
      for (const u of units) u.orderAttackMove(p.x, p.z);
    }
    this.ackFeedback(units);
  }

  // double-click an own unit: select all visible units of the same type
  onDblClick(e) {
    const hit = this.pick(e.clientX, e.clientY);
    const u = hit?.entity;
    if (!u?.isUnit || u.owner !== PLAYER) return;
    const v = new THREE.Vector3();
    const same = this.game.units.filter(o => {
      if (o.owner !== PLAYER || o.dead || o.type !== u.type || o.garrisoned) return false;
      v.set(o.x, o.group.position.y + 0.8, o.z).project(this.camera);
      return v.z < 1 && Math.abs(v.x) <= 1 && Math.abs(v.y) <= 1;
    });
    if (same.length) { this.select(same); this.selectFeedback(same); }
  }

  // cycle through idle villagers (the '.' key and the HUD badge share this)
  cycleIdleVillager() {
    const idlers = this.game.units.filter(u => u.owner === PLAYER && u.type === 'villager' && !u.dead && u.state === 'idle' && !u.garrisoned);
    if (!idlers.length) return;
    this.idleVillIdx = (this.idleVillIdx + 1) % idlers.length;
    const v = idlers[this.idleVillIdx];
    this.select([v]);
    this.rtsCam.jumpTo(v.x, v.z);
  }

  onMouseMove(e) {
    if (this.placing) {
      this.updateGhost(e.clientX, e.clientY);
      if (this.placing.lineStart) this.updateWallLine();
    }
    // hover cursor: point at an enemy with soldiers selected -> pointer
    this.hoverT = this.hoverT || 0;
    const now = performance.now();
    if (!this.placing && !this.attackMoveArmed && now - this.hoverT > 130) {
      this.hoverT = now;
      if (this.selectedUnits().some(u => u.type !== 'villager')) {
        const h = this.pick(e.clientX, e.clientY);
        this.canvas.style.cursor = (h?.entity && h.entity.owner !== PLAYER) ? 'pointer' : 'default';
      } else if (this.canvas.style.cursor === 'pointer') this.canvas.style.cursor = 'default';
    }
    if (this.dragStart) {
      const dx = e.clientX - this.dragStart.x, dy = e.clientY - this.dragStart.y;
      if (!this.dragging && Math.hypot(dx, dy) > 6) this.dragging = true;
      if (this.dragging) {
        const x0 = Math.min(e.clientX, this.dragStart.x), y0 = Math.min(e.clientY, this.dragStart.y);
        this.boxEl.style.display = 'block';
        this.boxEl.style.left = x0 + 'px';
        this.boxEl.style.top = y0 + 'px';
        this.boxEl.style.width = Math.abs(dx) + 'px';
        this.boxEl.style.height = Math.abs(dy) + 'px';
      }
    }
  }

  // ---- wall drag-lines ---------------------------------------------------------
  wallLineTiles() {
    const p = this.placing;
    if (!p?.lineStart) return [];
    const tiles = [];
    let { gx: x0, gy: y0 } = p.lineStart;
    const x1 = p.gx, y1 = p.gy;
    const dx = Math.abs(x1 - x0), dy = Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
    let err = dx - dy, x = x0, y = y0;
    for (let i = 0; i < 40; i++) {
      tiles.push([x, y]);
      if (x === x1 && y === y1) break;
      const e2 = 2 * err;
      if (e2 > -dy) { err -= dy; x += sx; }
      if (e2 < dx) { err += dx; y += sy; }
    }
    return tiles;
  }

  updateWallLine() {
    if (!this.linePreview) {
      this.linePreview = [];
      const geo = new THREE.PlaneGeometry(1.8, 1.8);
      geo.rotateX(-Math.PI / 2);
      for (let i = 0; i < 40; i++) {
        const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0x4dff5e, transparent: true, opacity: 0.45, depthWrite: false }));
        m.visible = false;
        m.renderOrder = 3;
        this.game.scene.add(m);
        this.linePreview.push(m);
      }
    }
    const tiles = this.wallLineTiles();
    for (let i = 0; i < this.linePreview.length; i++) {
      const m = this.linePreview[i];
      if (i < tiles.length) {
        const [gx, gy] = tiles[i];
        const [wx, wz] = this.game.map.gridToWorld(gx, gy);
        m.visible = true;
        m.position.set(wx, this.game.map.heightAt(wx, wz) + 0.1, wz);
        m.material.color.setHex(this.game.canPlaceBuilding(gx, gy, 1) ? 0x4dff5e : 0xff4030);
      } else m.visible = false;
    }
  }

  hideWallLine() {
    if (this.linePreview) for (const m of this.linePreview) m.visible = false;
  }

  onMouseUp(e) {
    // finish a wall drag-line: build every valid, affordable segment
    if (e.button === 0 && this.placing?.lineStart) {
      const tiles = this.wallLineTiles();
      const type = this.placing.type;
      const placed = [];
      for (const [gx, gy] of tiles) {
        const b = this.game.placeBuilding(PLAYER, type, gx, gy);
        if (b) placed.push(b);
      }
      const vills = this.selectedUnits().filter(u => u.type === 'villager');
      vills.forEach((v, i) => { if (placed.length) v.orderBuild(placed[i % placed.length]); });
      if (placed.length) this.sound('place'); else this.sound('error');
      this.placing.lineStart = null;
      this.hideWallLine();
      if (!e.shiftKey) this.cancelPlacement();
      return;
    }
    if (e.button !== 0 || !this.dragStart) return;
    const start = this.dragStart;
    this.dragStart = null;
    this.boxEl.style.display = 'none';

    if (this.dragging) {
      this.dragging = false;
      this.boxSelect(start, { x: e.clientX, y: e.clientY }, start.shift);
      return;
    }
    // simple click select. Units are small on screen, so a click that doesn't
    // land exactly on a unit grabs the nearest one within a few pixels; a unit
    // also wins over a building/ground it's standing on.
    const hit = this.pick(e.clientX, e.clientY);
    let ent = hit?.entity || null;
    const near = this.unitNearScreen(e.clientX, e.clientY, 30);
    if (near && (!ent || ent.isBuilding)) ent = near;
    if (ent) {
      this.select([ent], start.shift);
      this.selectFeedback([ent]);
    } else if (!start.shift) {
      this.select([]);
    }
  }

  // Nearest unit whose projected position is within maxPx of (cx,cy), or null.
  unitNearScreen(cx, cy, maxPx, ownerFilter = null) {
    const v = new THREE.Vector3();
    let best = null, bestD = maxPx * maxPx;
    for (const u of this.game.units) {
      if (u.dead || !u.group.visible) continue;
      if (ownerFilter === 'foe' ? u.owner === PLAYER
          : (ownerFilter !== null && u.owner !== ownerFilter)) continue;
      v.set(u.x, u.group.position.y + 0.9, u.z).project(this.camera);
      if (v.z >= 1) continue;
      const sx = (v.x + 1) / 2 * window.innerWidth;
      const sy = (1 - v.y) / 2 * window.innerHeight;
      const d = (sx - cx) ** 2 + (sy - cy) ** 2;
      if (d < bestD) { bestD = d; best = u; }
    }
    return best;
  }

  boxSelect(a, b, additive) {
    const x0 = Math.min(a.x, b.x), x1 = Math.max(a.x, b.x);
    const y0 = Math.min(a.y, b.y), y1 = Math.max(a.y, b.y);
    const v = new THREE.Vector3();
    const found = [];
    for (const u of this.game.units) {
      if (u.owner !== PLAYER || u.dead) continue;
      v.set(u.x, u.group.position.y + 0.8, u.z).project(this.camera);
      const sx = (v.x + 1) / 2 * window.innerWidth;
      const sy = (1 - v.y) / 2 * window.innerHeight;
      if (sx >= x0 && sx <= x1 && sy >= y0 && sy <= y1 && v.z < 1) found.push(u);
    }
    if (found.length) {
      // military preferred over villagers in mixed boxes
      const mil = found.filter(u => u.type !== 'villager');
      this.select(mil.length ? mil : found, additive);
      this.selectFeedback(this.selection);
    } else if (!additive) {
      this.select([]);
    }
  }

  selectFeedback(sel) {
    const own = sel.filter(e => e.owner === PLAYER);
    if (own.some(e => e.isUnit && e.type !== 'villager')) voice('mSelect');
    else if (own.some(e => e.isUnit)) voice('vSelect');
    else this.sound('select');
  }

  ackFeedback(units) {
    if (units.some(u => u.type !== 'villager')) voice('mAck');
    else if (units.length) voice('vAck');
    else this.sound('command');
  }

  // ---- commands ----------------------------------------------------------------------

  issueContextCommand(cx, cy, shift = false) {
    let hit = this.pick(cx, cy);
    if (!hit) hit = {};
    // forgiveness: right-clicking near an ENEMY unit targets it — never snap
    // to own units, which would silently turn formation moves into follows
    if (!hit.entity && !hit.node) {
      const nearFoe = this.unitNearScreen(cx, cy, 22, 'foe');
      if (nearFoe) hit = { entity: nearFoe };
    }
    this.dispatchContext(hit, shift);
  }

  // Execute a contextual command against a resolved target for the current
  // selection. With shift held the command is QUEUED to run after the unit's
  // current order finishes (waypoints, gather-then-build chains, etc).
  dispatchContext(hit, shift = false) {
    const sel = this.selection.filter(e => !e.dead && e.owner === PLAYER);
    if (!sel.length) return;
    if (!hit || (!hit.entity && !hit.node && !hit.point)) return;

    const units = sel.filter(e => e.isUnit);
    const buildingsSel = sel.filter(e => e.isBuilding);
    // per-unit issue helper honoring shift-queueing
    const issue = (u, fn) => {
      if (shift) u.pushOrder(fn);
      else { u.orderQueue = null; fn(); }
    };

    // Rally point for selected production buildings
    if (!units.length && buildingsSel.length) {
      for (const b of buildingsSel) {
        if (hit.node) b.rally = { node: hit.node };
        else if (hit.entity?.isBuilding && hit.entity.def.isFarm && hit.entity.owner === PLAYER) b.rally = { farm: hit.entity };
        else if (hit.point) b.rally = { x: hit.point.x, z: hit.point.z };
      }
      this.sound('command');
      return;
    }
    if (!units.length) return;

    if (hit.entity) {
      const t = hit.entity;
      if (t.owner !== PLAYER) {
        for (const u of units) issue(u, () => u.orderAttack(t));
        this.ackFeedback(units);
      } else if (t.isBuilding && (!t.complete || t.hp < t.maxHp - 0.5) && !t.def.isFarm) {
        // construct or repair
        for (const u of units) if (u.type === 'villager') issue(u, () => u.orderBuild(t));
        this.ackFeedback(units.filter(u => u.type === 'villager'));
      } else if (t.isBuilding && t.def.isFarm) {
        const vills = units.filter(u => u.type === 'villager');
        for (const v of vills) issue(v, () => v.orderGatherFarm(t));
        this.ackFeedback(vills);
      } else if (t.isBuilding && t.def.dropoff) {
        for (const u of units) {
          if (u.type === 'villager' && u.carry?.amt > 0) {
            u.order = u.order?.kind === 'gather' || u.order?.kind === 'farm' ? u.order : { kind: 'gather', node: null };
            u.goDeposit();
          } else issue(u, () => u.orderMove(t.cx, t.cz));
        }
        this.ackFeedback(units);
      } else {
        for (const u of units) issue(u, () => u.orderMove(t.isBuilding ? t.cx : t.x, t.isBuilding ? t.cz : t.z));
        this.ackFeedback(units);
      }
      return;
    }

    if (hit.node) {
      const vills = units.filter(u => u.type === 'villager');
      const rest = units.filter(u => u.type !== 'villager');
      for (const v of vills) issue(v, () => v.orderGather(hit.node));
      for (const u of rest) issue(u, () => u.orderMove(hit.node.wx, hit.node.wz));
      this.ackFeedback(units);
      return;
    }

    if (hit.point) {
      this.moveFormation(units, hit.point.x, hit.point.z, issue);
      this.ackFeedback(units);
    }
  }

  moveFormation(units, x, z, issue = (u, fn) => { u.orderQueue = null; fn(); }) {
    const n = units.length;
    const cols = Math.ceil(Math.sqrt(n));
    const spacing = 1.7;
    units.forEach((u, i) => {
      const r = Math.floor(i / cols), c = i % cols;
      const ox = (c - (cols - 1) / 2) * spacing;
      const oz = (r - (Math.ceil(n / cols) - 1) / 2) * spacing;
      issue(u, () => u.orderMove(x + ox, z + oz));
    });
  }

  // ---- building placement ---------------------------------------------------------------

  startPlacement(type) {
    this.cancelPlacement();
    const def = BUILDINGS[type];
    const ghostMat = new THREE.MeshLambertMaterial({ color: 0x4dff5e, transparent: true, opacity: 0.55, depthWrite: false });
    const ghost = packBuilding(type, this.game.players[PLAYER].age, def.size)
      || BUILDING_FACTORY[type](this.game.teamColor(PLAYER));
    ghost.traverse(o => { if (o.isMesh) { o.material = ghostMat; o.castShadow = false; } });
    this.game.scene.add(ghost);
    this.placing = { type, def, ghost, ghostMat, valid: false, gx: 0, gy: 0 };
  }

  updateGhost(cx, cy) {
    const p = this.placing;
    const gp = this.groundPoint(cx, cy);
    if (!gp) { p.ghost.visible = false; return; }
    const map = this.game.map;
    const gx = Math.round(gp.x / TILE - p.def.size / 2);
    const gy = Math.round(gp.z / TILE - p.def.size / 2);
    p.gx = gx; p.gy = gy;
    const wx = (gx + p.def.size / 2) * TILE;
    const wz = (gy + p.def.size / 2) * TILE;
    p.ghost.visible = true;
    p.ghost.position.set(wx, map.heightAt(wx, wz), wz);
    p.valid = this.game.canPlaceBuilding(gx, gy, p.def.size);
    p.ghostMat.color.setHex(p.valid ? 0x4dff5e : 0xff4030);
  }

  tryPlace(keepPlacing) {
    const p = this.placing;
    if (!p || !p.valid) { this.sound('error'); return; }
    const b = this.game.placeBuilding(PLAYER, p.type, p.gx, p.gy);
    if (!b) { this.sound('error'); return; }
    const vills = this.selectedUnits().filter(u => u.type === 'villager');
    for (const v of vills) v.orderBuild(b);
    this.sound('place');
    if (!keepPlacing) this.cancelPlacement();
    else {
      // hide the ghost and invalidate the spot until the next real pointer
      // move — never re-derive placement from a synthetic corner ray
      p.valid = false;
      p.ghost.visible = false;
    }
  }

  cancelPlacement() {
    if (!this.placing) return;
    this.game.scene.remove(this.placing.ghost);
    this.placing = null;
    this.hideWallLine();
  }

  // ---- keyboard ----------------------------------------------------------------------------

  onKeyDown(e) {
    if (document.querySelector('.overlay:not(.hidden)')) return; // menus open
    if (e.code === 'Escape') {
      if (this.placing) this.cancelPlacement();
      else if (this.attackMoveArmed) this.disarmAttackMove();
      else this.select([]);
      return;
    }
    if (e.code === 'KeyA' && !e.ctrlKey && !e.metaKey) { this.armAttackMove(); return; }
    if (e.code === 'KeyM') {
      const mil = this.game.units.filter(u => u.owner === PLAYER && !u.dead && u.type !== 'villager' && !u.garrisoned);
      if (mil.length) { this.select(mil); this.selectFeedback(mil); }
      return;
    }
    // control groups: Shift+digit assigns (Ctrl+digit is reserved by browsers
    // for tab switching and cannot be suppressed), digit recalls, quick
    // double-tap of the digit also jumps the camera to the group.
    if (e.code.startsWith('Digit')) {
      const d = e.code.slice(5);
      if (d === '0') return;
      if (e.shiftKey || e.ctrlKey || e.metaKey) {
        e.preventDefault();
        this.groups.set(d, [...this.selection]);
        this.sound('command');
      } else {
        const g = (this.groups.get(d) || []).filter(x => !x.dead);
        if (g.length) {
          this.select(g);
          const now = performance.now();
          const doubleTap = this.lastRecall?.d === d && now - this.lastRecall.t < 450;
          this.lastRecall = { d, t: now };
          const f = g[0];
          if (doubleTap || e.repeat) this.rtsCam.jumpTo(f.isBuilding ? f.cx : f.x, f.isBuilding ? f.cz : f.z);
        }
      }
      return;
    }
    if (e.code === 'KeyH') {
      const tc = this.game.buildings.find(b => b.owner === PLAYER && b.type === 'towncenter' && !b.dead);
      if (tc) { this.rtsCam.jumpTo(tc.cx, tc.cz); this.select([tc]); }
      return;
    }
    if (e.code === 'Period') {
      this.cycleIdleVillager();
      return;
    }
    if (e.code === 'KeyT') { // stop (hard: clears queued orders too)
      for (const u of this.selectedUnits()) u.clearOrder(true);
    }
  }
}
