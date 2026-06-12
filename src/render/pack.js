// Optional CC0 model-pack integration (Quaternius "Ultimate Fantasy RTS").
// Building models are loaded from public/models/buildings/ when present and
// registered per building type and age tier; anything missing falls back to
// the procedural factories in models.js. Pack models come in two age styles
// ("FirstAge" for Dark/Feudal, "SecondAge" for Castle/Imperial) so bases
// visually evolve when a player advances.

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { TILE } from '../config.js';

// our building type -> pack model basename per age (1-4). null = no mapping.
// Level suffix picks the most built-out variant of each tier.
const MANIFEST = {
  towncenter: ['TownCenter_FirstAge_Level1', 'TownCenter_FirstAge_Level3', 'TownCenter_SecondAge_Level2', 'TownCenter_SecondAge_Level3'],
  house: ['Houses_FirstAge_1_Level1', 'Houses_FirstAge_2_Level2', 'Houses_SecondAge_1_Level2', 'Houses_SecondAge_3_Level3'],
  barracks: ['Barracks_FirstAge_Level2', 'Barracks_FirstAge_Level3', 'Barracks_SecondAge_Level2', 'Barracks_SecondAge_Level3'],
  archeryrange: ['Archery_FirstAge_Level2', 'Archery_FirstAge_Level3', 'Archery_SecondAge_Level2', 'Archery_SecondAge_Level3'],
  farm: ['Farm_FirstAge_Level2_Wheat', 'Farm_FirstAge_Level3_Wheat', 'Farm_SecondAge_Level2_Wheat', 'Farm_SecondAge_Level3_Wheat'],
  tower: ['WatchTower_FirstAge_Level2', 'WatchTower_FirstAge_Level3', 'WatchTower_SecondAge_Level2', 'WatchTower_SecondAge_Level3'],
  storehouse: ['Market_FirstAge_Level2', 'Market_FirstAge_Level3', 'Market_SecondAge_Level2', 'Market_SecondAge_Level3'],
  stable: ['Windmill_FirstAge', 'Windmill_FirstAge', 'Windmill_SecondAge', 'Windmill_SecondAge'],
  siegeworkshop: ['TowerHouse_FirstAge', 'TowerHouse_FirstAge', 'TowerHouse_SecondAge', 'TowerHouse_SecondAge'],
  wall: ['Walls_FirstAge', 'Walls_FirstAge', 'Walls_SecondAge', 'Walls_SecondAge'],
};

const registry = new Map(); // "name" -> normalized prototype Group
let packReady = false;
let onReadyCallbacks = [];

export function isPackReady() { return packReady; }
export function onPackReady(cb) {
  if (packReady) cb();
  else onReadyCallbacks.push(cb);
}

// Normalize a loaded scene: center on XZ, rest base at y=0.
function normalize(scene) {
  const g = new THREE.Group();
  g.add(scene);
  const box = new THREE.Box3().setFromObject(scene);
  const center = box.getCenter(new THREE.Vector3());
  scene.position.x -= center.x;
  scene.position.z -= center.z;
  scene.position.y -= box.min.y;
  scene.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
      if (o.material) {
        o.material.roughness = Math.min(1, (o.material.roughness ?? 0.9) + 0.1);
        o.material.metalness = 0;
      }
    }
  });
  g.userData.footprint = Math.max(box.max.x - box.min.x, box.max.z - box.min.z);
  return g;
}

export async function loadPack() {
  const base = import.meta.env.BASE_URL + 'models/buildings/';
  // Probe the manifest file first so missing packs fail fast and quietly.
  let index;
  try {
    const res = await fetch(base + 'index.json');
    if (!res.ok) return false;
    index = await res.json(); // array of available basenames
  } catch {
    return false;
  }
  // index.json lists filenames (with extension); match manifest by basename
  const byBase = new Map(index.map(f => [f.replace(/\.(glb|gltf)$/i, ''), f]));
  const loader = new GLTFLoader();
  const names = [...new Set(Object.values(MANIFEST).flat())].filter(n => byBase.has(n));
  await Promise.all(names.map(async (name) => {
    try {
      const gltf = await loader.loadAsync(base + byBase.get(name));
      registry.set(name, normalize(gltf.scene));
    } catch (e) {
      console.warn('pack model failed:', name, e.message);
    }
  }));
  packReady = registry.size > 0;
  if (packReady) {
    onReadyCallbacks.forEach(cb => cb());
    onReadyCallbacks = [];
  }
  return packReady;
}

/**
 * Returns a ready-to-place model Group for a building type at an age (1-4),
 * scaled to the tile footprint — or null if the pack doesn't cover it.
 */
export function packBuilding(type, age, footprintTiles) {
  const names = MANIFEST[type];
  if (!names) return null;
  const name = names[Math.min(3, Math.max(0, age - 1))];
  const proto = registry.get(name);
  if (!proto) return null;
  const inst = proto.clone(true);
  const targetSize = footprintTiles * TILE * 0.96;
  const s = targetSize / (proto.userData.footprint || targetSize);
  inst.scale.setScalar(s);
  return inst;
}
