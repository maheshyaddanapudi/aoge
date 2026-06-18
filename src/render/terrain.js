// Terrain mesh with vertex-colored biomes, water plane, and instanced
// decoration (rocks, shrubs, flowers). Also manages instanced trees.

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MAP_SIZE, TILE, WORLD } from '../config.js';
import { WATER_LEVEL } from '../world/map.js';
import { mat, C } from './models.js';
import { grassDetail, waterNormal, foliage } from './textures.js';

export function buildTerrain(scene, map) {
  const segs = MAP_SIZE;
  const geom = new THREE.PlaneGeometry(WORLD, WORLD, segs, segs);
  geom.rotateX(-Math.PI / 2);

  const pos = geom.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const grassA = new THREE.Color(0x61a849);
  const grassB = new THREE.Color(0x7cbd59);
  const grassDry = new THREE.Color(0x9cab58);
  const dirt = new THREE.Color(0x8a6f48);
  const sand = new THREE.Color(0xcdb777);
  const rock = new THREE.Color(0x8d8a80);
  const tmp = new THREE.Color();

  for (let i = 0; i < pos.count; i++) {
    const wx = pos.getX(i) + WORLD / 2;
    const wz = pos.getZ(i) + WORLD / 2;
    const h = map.heightAt(wx, wz);
    pos.setX(i, wx);
    pos.setZ(i, wz);
    pos.setY(i, h);

    const moist = map.moistureAt(wx, wz);
    const jitter = (map.noise2(wx * 0.9, wz * 0.9) - 0.5) * 0.10;
    if (h < WATER_LEVEL + 0.35) {
      tmp.copy(sand);
    } else if (h > 2.6) {
      tmp.copy(rock).lerp(grassDry, Math.max(0, 3.8 - h) / 1.2);
    } else {
      tmp.copy(grassA).lerp(grassB, moist);
      if (moist < 0.22) tmp.lerp(grassDry, (0.22 - moist) * 2.0);
      if (moist > 0.85) tmp.lerp(dirt, (moist - 0.85) * 1.2);
    }
    tmp.offsetHSL(0, 0, jitter);
    colors[i * 3] = tmp.r;
    colors[i * 3 + 1] = tmp.g;
    colors[i * 3 + 2] = tmp.b;
  }
  geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geom.computeVertexNormals();

  // Tiling grass detail texture; hue still comes from the vertex colors.
  const detail = grassDetail();
  detail.map.repeat.set(72, 72);
  detail.normalMap.wrapS = detail.normalMap.wrapT = THREE.RepeatWrapping;
  detail.normalMap.repeat.set(72, 72);
  const ground = new THREE.Mesh(geom, new THREE.MeshStandardMaterial({
    vertexColors: true,
    map: detail.map,
    normalMap: detail.normalMap,
    normalScale: new THREE.Vector2(0.6, 0.6),
    roughness: 1,
    metalness: 0,
  }));
  ground.receiveShadow = true;
  ground.name = 'terrain';
  scene.add(ground);

  // Water with animated normals
  const wNorm = waterNormal();
  wNorm.repeat.set(34, 34);
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(WORLD, WORLD),
    new THREE.MeshStandardMaterial({
      color: 0x3577bd, transparent: true, opacity: 0.78,
      roughness: 0.18, metalness: 0.05,
      normalMap: wNorm, normalScale: new THREE.Vector2(0.55, 0.55),
    })
  );
  water.rotation.x = -Math.PI / 2;
  water.position.set(WORLD / 2, WATER_LEVEL - 0.12, WORLD / 2);
  scene.add(water);

  scatterDecor(scene, map);
  return { ground, water, waterNormalTex: wNorm };
}

// Decorative non-blocking detail: rocks, shrubs, flowers.
function scatterDecor(scene, map) {
  let s = (map.seed ^ 0x5eedf00d) >>> 0;
  const rand = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };

  const place = (count, geomMake, color, yOff, sMin, sMax) => {
    const g = geomMake();
    const m = new THREE.InstancedMesh(g, mat(color), count);
    m.castShadow = true;
    const M = new THREE.Matrix4();
    const Q = new THREE.Quaternion();
    const E = new THREE.Euler();
    let placed = 0, guard = 0;
    while (placed < count && guard++ < count * 12) {
      const wx = rand() * WORLD, wz = rand() * WORLD;
      const [gx, gy] = map.worldToGrid(wx, wz);
      if (!map.isWalkable(gx, gy) || map.occupantAt(gx, gy)) continue;
      const h = map.heightAt(wx, wz);
      const sc = sMin + rand() * (sMax - sMin);
      E.set(0, rand() * Math.PI * 2, 0);
      Q.setFromEuler(E);
      M.compose(new THREE.Vector3(wx, h + yOff * sc, wz), Q, new THREE.Vector3(sc, sc, sc));
      m.setMatrixAt(placed++, M);
    }
    m.count = placed;
    m.instanceMatrix.needsUpdate = true;
    scene.add(m);
  };

  place(180, () => new THREE.IcosahedronGeometry(0.5, 0), 0x8d8a80, 0.18, 0.3, 1.1);   // rocks
  place(220, () => new THREE.IcosahedronGeometry(0.45, 0), 0x55803f, 0.3, 0.5, 1.0);   // shrubs
  place(260, () => new THREE.ConeGeometry(0.1, 0.35, 5), 0xd8d44e, 0.16, 0.7, 1.3);    // flowers
  place(140, () => new THREE.ConeGeometry(0.12, 0.4, 5), 0xc46a8a, 0.18, 0.7, 1.2);    // flowers 2
}

// ---------------------------------------------------------------------------
// Instanced trees. Each "species" is one or more InstancedMeshes (a part per
// material — trunk + foliage). Every tree owns a global instance index shared
// across all species meshes so a raycast instanceId maps straight to its node;
// removing a tree zeroes its matrix. Real Kenney tree models are used when the
// nature pack is present, with procedural cone/blob trees as a fallback.

// Per-species foliage tints (replaces Kenney's signature teal with forest greens).
const LEAF_TINTS = [0x4f8c3a, 0x5fa048, 0x3f7a39, 0x6aa84e, 0x457f3c, 0x568f42, 0x39702f];
const TREE_FILES = [
  { file: 'tree_default', scale: 2.6 },
  { file: 'tree_oak', scale: 3.4 },
  { file: 'tree_detailed', scale: 3.1 },
  { file: 'tree_fat', scale: 3.6 },
  { file: 'tree_pineDefaultA', scale: 2.7 },
  { file: 'tree_pineRoundB', scale: 3.2 },
  { file: 'tree_pineTallB_detailed', scale: 2.4 },
];

// Box-projection UVs: assign each triangle UVs from its two non-dominant
// object-space axes so a tiling texture covers arbitrary low-poly shapes
// without the single-texel UVs the flat-colored Kenney models ship with.
function boxProjectUV(geometry, tile) {
  const geo = geometry.index ? geometry.toNonIndexed() : geometry;
  const pos = geo.attributes.position;
  const uv = new Float32Array(pos.count * 2);
  const ax = new THREE.Vector3(), bx = new THREE.Vector3(), cx = new THREE.Vector3();
  const ab = new THREE.Vector3(), ac = new THREE.Vector3(), nrm = new THREE.Vector3();
  for (let i = 0; i < pos.count; i += 3) {
    ax.fromBufferAttribute(pos, i); bx.fromBufferAttribute(pos, i + 1); cx.fromBufferAttribute(pos, i + 2);
    ab.subVectors(bx, ax); ac.subVectors(cx, ax); nrm.crossVectors(ab, ac);
    const anx = Math.abs(nrm.x), any = Math.abs(nrm.y), anz = Math.abs(nrm.z);
    for (let k = 0; k < 3; k++) {
      const v = k === 0 ? ax : k === 1 ? bx : cx;
      let u, w;
      if (anx >= any && anx >= anz) { u = v.z; w = v.y; }
      else if (any >= anx && any >= anz) { u = v.x; w = v.z; }
      else { u = v.x; w = v.y; }
      uv[(i + k) * 2] = u * tile;
      uv[(i + k) * 2 + 1] = w * tile;
    }
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return geo;
}

export class TreeRenderer {
  constructor(scene, capacity = 1000, lite = false) {
    this.scene = scene;
    this.capacity = capacity;
    // lite: render only a fraction of trees (foliage is the heaviest cost on
    // software GPUs); the rest remain as invisible (still-choppable) nodes.
    this.lite = lite;
    this.zero = new THREE.Matrix4().makeScale(0, 0, 0);
    this.tmpM = new THREE.Matrix4();
    this.tmpC = new THREE.Color();
    this.next = 0;
    this.species = [];      // [{ parts: [{inst, isLeaf, baseColor}], scale }]
    this.pickMeshes = [];   // every InstancedMesh, for raycasting
    this.ready = false;
    // shared foliage material: leaf-cluster texture tinted per-instance (green)
    const fol = foliage();
    this.leafMat = new THREE.MeshStandardMaterial({
      color: 0xffffff, map: fol.map, normalMap: fol.normalMap,
      normalScale: new THREE.Vector2(0.9, 0.9), roughness: 0.92, metalness: 0,
    });
  }

  _addMesh(geo, material, isLeaf, baseColor) {
    const inst = new THREE.InstancedMesh(geo, material, this.capacity);
    inst.castShadow = true;
    inst.receiveShadow = true;
    inst.frustumCulled = false;
    inst.count = this.capacity;
    for (let i = 0; i < this.capacity; i++) inst.setMatrixAt(i, this.zero);
    this.scene.add(inst);
    this.pickMeshes.push(inst);
    return { inst, isLeaf, baseColor };
  }

  // Load the Kenney nature pack; fall back to procedural trees if unavailable.
  async load() {
    const base = import.meta.env.BASE_URL + 'models/nature/';
    try {
      // attempt real loads; reject -> procedural fallback (no HEAD probe, which
      // some static hosts answer unreliably)
      const loader = new GLTFLoader();
      await Promise.all(TREE_FILES.map(async (def, si) => {
        const gltf = await loader.loadAsync(base + def.file + '.glb');
        gltf.scene.updateMatrixWorld(true);
        const parts = [];
        gltf.scene.traverse((o) => {
          if (!o.isMesh) return;
          const geo = o.geometry.clone();
          geo.applyMatrix4(o.matrixWorld);   // bake node transform into geometry
          const isLeaf = /leaf|foliage/i.test(o.material?.name || '');
          if (isLeaf) {
            // box-project so the foliage texture tiles across the canopy
            const tgeo = boxProjectUV(geo, 1.9 / def.scale);
            parts.push(this._addMesh(tgeo, this.leafMat, true, new THREE.Color(LEAF_TINTS[si % LEAF_TINTS.length])));
          } else {
            const m = new THREE.MeshLambertMaterial({ color: 0x7a5536 });
            parts.push(this._addMesh(geo, m, false, null));
          }
        });
        this.species[si] = { parts, scale: def.scale };
      }));
      this.species = this.species.filter(Boolean);
      this.ready = this.species.length > 0;
    } catch {
      this._buildFallback();
    }
    if (!this.ready) this._buildFallback();
    return this.ready;
  }

  _buildFallback() {
    if (this.ready) return;
    const trunkGeo = new THREE.CylinderGeometry(0.16, 0.26, 1.4, 6);
    trunkGeo.translate(0, 0.7, 0);
    const pineGeo = new THREE.ConeGeometry(1.05, 2.9, 7); pineGeo.translate(0, 2.6, 0);
    const oakGeo = new THREE.IcosahedronGeometry(1.25, 0); oakGeo.scale(1, 1.15, 1); oakGeo.translate(0, 2.5, 0);
    this.species = [
      { scale: 1, parts: [
        this._addMesh(trunkGeo, mat(C.woodDark), false, null),
        this._addMesh(boxProjectUV(pineGeo, 0.6), this.leafMat, true, new THREE.Color(0x3a7040)),
      ] },
      { scale: 1, parts: [
        this._addMesh(trunkGeo.clone(), mat(C.woodDark), false, null),
        this._addMesh(boxProjectUV(oakGeo, 0.6), this.leafMat, true, new THREE.Color(0x55903e)),
      ] },
    ];
    this.ready = true;
  }

  // Returns instance handle { idx, species }.
  add(wx, wy, wz, rngVal) {
    if (!this.ready) return null;
    const idx = this.next++;
    if (idx >= this.capacity) return null;
    const sp = this.species[Math.floor(rngVal * 997) % this.species.length];
    const sc = sp.scale * (0.82 + (rngVal * 7919 % 1) * 0.42);
    const rot = rngVal * 31.4;
    this.tmpM.makeRotationY(rot);
    this.tmpM.scale(new THREE.Vector3(sc, sc * (0.9 + (rngVal * 131 % 1) * 0.3), sc));
    this.tmpM.setPosition(wx, wy, wz);
    const shade = 0.82 + (rngVal * 53 % 1) * 0.4;
    for (const part of sp.parts) {
      part.inst.setMatrixAt(idx, this.tmpM);
      if (part.isLeaf && part.baseColor) {
        this.tmpC.copy(part.baseColor).multiplyScalar(shade);
        part.inst.setColorAt(idx, this.tmpC);
      }
    }
    return { idx, species: sp };
  }

  remove(handle) {
    if (!handle) return;
    for (const part of handle.species.parts) part.inst.setMatrixAt(handle.idx, this.zero);
    this.flush();
  }

  flush() {
    // Only draw as many instances as we actually placed — zero-scaled slots
    // still run the vertex shader, so capping count is a big GPU saving.
    const n = Math.max(1, this.next);
    for (const m of this.pickMeshes) {
      m.count = n;
      m.instanceMatrix.needsUpdate = true;
      if (m.instanceColor) m.instanceColor.needsUpdate = true;
    }
  }
}
