// Mouse & keyboard interaction: picking, box-select, right-click context
// commands, building placement ghost, control groups.

import * as THREE from 'three';
import { TILE, PLAYER, BUILDINGS } from '../config.js';
import { BUILDING_FACTORY } from '../render/models.js';

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
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const gp = this.groundPoint(e.clientX, e.clientY);
      this.rtsCam.zoomBy(e.deltaY, gp);
    }, { passive: false });
    window.addEventListener('keydown', (e) => this.onKeyDown(e));
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

    const roots = [];
    for (const u of game.units) roots.push(u.group);
    for (const b of game.buildings) roots.push(b.group);
    for (const n of game.nodes) if (n.mesh) roots.push(n.mesh);
    const hits = this.raycaster.intersectObjects(roots, true);

    // instanced trees
    const treeHits = this.raycaster.intersectObjects(
      [game.trees.trunks, game.trees.pines, game.trees.oaks], false);

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
        this.tryPlace(e.shiftKey);
        return;
      }
      this.dragStart = { x: e.clientX, y: e.clientY, shift: e.shiftKey };
      this.dragging = false;
    } else if (e.button === 2) {
      if (this.placing) { this.cancelPlacement(); return; }
      this.issueContextCommand(e.clientX, e.clientY);
    }
  }

  onMouseMove(e) {
    if (this.placing) this.updateGhost(e.clientX, e.clientY);
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

  onMouseUp(e) {
    if (e.button !== 0 || !this.dragStart) return;
    const start = this.dragStart;
    this.dragStart = null;
    this.boxEl.style.display = 'none';

    if (this.dragging) {
      this.dragging = false;
      this.boxSelect(start, { x: e.clientX, y: e.clientY }, start.shift);
      return;
    }
    // simple click select
    const hit = this.pick(e.clientX, e.clientY);
    if (hit?.entity) {
      this.select([hit.entity], start.shift);
      this.sound('select');
    } else if (!start.shift) {
      this.select([]);
    }
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
      this.sound('select');
    } else if (!additive) {
      this.select([]);
    }
  }

  // ---- commands ----------------------------------------------------------------------

  issueContextCommand(cx, cy) {
    const sel = this.selection.filter(e => !e.dead && e.owner === PLAYER);
    if (!sel.length) return;
    const hit = this.pick(cx, cy);
    if (!hit) return;

    const units = sel.filter(e => e.isUnit);
    const buildingsSel = sel.filter(e => e.isBuilding);

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
        for (const u of units) u.orderAttack(t);
        this.sound('command');
      } else if (t.isBuilding && !t.complete) {
        for (const u of units) if (u.type === 'villager') u.orderBuild(t);
        this.sound('command');
      } else if (t.isBuilding && t.def.isFarm) {
        const vills = units.filter(u => u.type === 'villager');
        if (vills.length) vills[0].orderGatherFarm(t);
        this.sound('command');
      } else if (t.isBuilding && t.def.dropoff) {
        for (const u of units) {
          if (u.type === 'villager' && u.carry?.amt > 0) {
            u.order = u.order?.kind === 'gather' || u.order?.kind === 'farm' ? u.order : { kind: 'gather', node: null };
            u.goDeposit();
          } else u.orderMove(t.cx, t.cz);
        }
        this.sound('command');
      } else {
        for (const u of units) u.orderMove(t.isBuilding ? t.cx : t.x, t.isBuilding ? t.cz : t.z);
        this.sound('command');
      }
      return;
    }

    if (hit.node) {
      const vills = units.filter(u => u.type === 'villager');
      const rest = units.filter(u => u.type !== 'villager');
      for (const v of vills) v.orderGather(hit.node);
      for (const u of rest) u.orderMove(hit.node.wx, hit.node.wz);
      this.sound('command');
      return;
    }

    if (hit.point) {
      this.moveFormation(units, hit.point.x, hit.point.z);
      this.sound('command');
    }
  }

  moveFormation(units, x, z) {
    const n = units.length;
    const cols = Math.ceil(Math.sqrt(n));
    const spacing = 1.7;
    units.forEach((u, i) => {
      const r = Math.floor(i / cols), c = i % cols;
      const ox = (c - (cols - 1) / 2) * spacing;
      const oz = (r - (Math.ceil(n / cols) - 1) / 2) * spacing;
      u.orderMove(x + ox, z + oz);
    });
  }

  // ---- building placement ---------------------------------------------------------------

  startPlacement(type) {
    this.cancelPlacement();
    const def = BUILDINGS[type];
    const ghostMat = new THREE.MeshLambertMaterial({ color: 0x4dff5e, transparent: true, opacity: 0.55, depthWrite: false });
    const ghost = BUILDING_FACTORY[type](this.game.teamColor(PLAYER));
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
    p.valid = map.canPlace(gx, gy, p.def.size);
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
    else this.updateGhost(-1, -1);
  }

  cancelPlacement() {
    if (!this.placing) return;
    this.game.scene.remove(this.placing.ghost);
    this.placing = null;
  }

  // ---- keyboard ----------------------------------------------------------------------------

  onKeyDown(e) {
    if (e.code === 'Escape') {
      if (this.placing) this.cancelPlacement();
      else this.select([]);
      return;
    }
    // control groups
    if (e.code.startsWith('Digit')) {
      const d = e.code.slice(5);
      if (d === '0') return;
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        this.groups.set(d, [...this.selection]);
      } else {
        const g = (this.groups.get(d) || []).filter(x => !x.dead);
        if (g.length) {
          this.select(g);
          const f = g[0];
          if (e.repeat) this.rtsCam.jumpTo(f.isBuilding ? f.cx : f.x, f.isBuilding ? f.cz : f.z);
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
      const idlers = this.game.units.filter(u => u.owner === PLAYER && u.type === 'villager' && !u.dead && u.state === 'idle');
      if (idlers.length) {
        this.idleVillIdx = (this.idleVillIdx + 1) % idlers.length;
        const v = idlers[this.idleVillIdx];
        this.select([v]);
        this.rtsCam.jumpTo(v.x, v.z);
      }
      return;
    }
    if (e.code === 'KeyT') { // stop
      for (const u of this.selectedUnits()) u.clearOrder();
    }
  }
}
