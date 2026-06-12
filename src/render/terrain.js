// Terrain mesh with vertex-colored biomes, water plane, and instanced
// decoration (rocks, shrubs, flowers). Also manages instanced trees.

import * as THREE from 'three';
import { MAP_SIZE, TILE, WORLD } from '../config.js';
import { WATER_LEVEL } from '../world/map.js';
import { mat, C } from './models.js';
import { grassDetail, waterNormal } from './textures.js';

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
// Instanced trees: two species (pine = cone foliage, oak = blob foliage).
// Each tree owns an instance slot; removing a tree zeroes its matrix.

export class TreeRenderer {
  constructor(scene, capacity = 900) {
    this.capacity = capacity;
    const trunkGeo = new THREE.CylinderGeometry(0.16, 0.26, 1.4, 6);
    trunkGeo.translate(0, 0.7, 0);
    this.trunks = new THREE.InstancedMesh(trunkGeo, mat(C.woodDark), capacity);

    const pineGeo = new THREE.ConeGeometry(1.05, 2.9, 7);
    pineGeo.translate(0, 2.6, 0);
    this.pines = new THREE.InstancedMesh(pineGeo, new THREE.MeshLambertMaterial({ color: 0xffffff }), capacity);

    const oakGeo = new THREE.IcosahedronGeometry(1.25, 0);
    oakGeo.scale(1, 1.15, 1);
    oakGeo.translate(0, 2.5, 0);
    this.oaks = new THREE.InstancedMesh(oakGeo, new THREE.MeshLambertMaterial({ color: 0xffffff }), capacity);

    for (const m of [this.trunks, this.pines, this.oaks]) {
      m.castShadow = true;
      m.count = capacity;
      m.frustumCulled = false;
      scene.add(m);
    }
    this.zero = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let i = 0; i < capacity; i++) {
      this.trunks.setMatrixAt(i, this.zero);
      this.pines.setMatrixAt(i, this.zero);
      this.oaks.setMatrixAt(i, this.zero);
    }
    this.next = 0;
    this.tmpM = new THREE.Matrix4();
    this.tmpC = new THREE.Color();
  }

  // Returns instance handle {idx, species}
  add(wx, wy, wz, rngVal) {
    const idx = this.next++;
    if (idx >= this.capacity) return null;
    const species = rngVal < 0.55 ? 'pine' : 'oak';
    const sc = 0.8 + (rngVal * 7919 % 1) * 0.5;
    const rot = rngVal * 31.4;
    this.tmpM.makeRotationY(rot);
    this.tmpM.scale(new THREE.Vector3(sc, sc * (0.9 + (rngVal * 131 % 1) * 0.35), sc));
    this.tmpM.setPosition(wx, wy, wz);
    this.trunks.setMatrixAt(idx, this.tmpM);
    const leafMesh = species === 'pine' ? this.pines : this.oaks;
    leafMesh.setMatrixAt(idx, this.tmpM);
    const shade = 0.8 + (rngVal * 53 % 1) * 0.45;
    this.tmpC.setHex(species === 'pine' ? 0x3a7040 : 0x55903e).multiplyScalar(shade);
    leafMesh.setColorAt(idx, this.tmpC);
    return { idx, species };
  }

  remove(handle) {
    if (!handle) return;
    this.trunks.setMatrixAt(handle.idx, this.zero);
    (handle.species === 'pine' ? this.pines : this.oaks).setMatrixAt(handle.idx, this.zero);
    this.flush();
  }

  flush() {
    this.trunks.instanceMatrix.needsUpdate = true;
    this.pines.instanceMatrix.needsUpdate = true;
    this.oaks.instanceMatrix.needsUpdate = true;
    if (this.pines.instanceColor) this.pines.instanceColor.needsUpdate = true;
    if (this.oaks.instanceColor) this.oaks.instanceColor.needsUpdate = true;
  }
}
