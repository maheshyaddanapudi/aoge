// Copies the building models the game needs from a downloaded Quaternius
// "Ultimate Fantasy RTS" glTF folder into public/models/buildings/ and
// writes the index.json the loader probes for.
//
// Usage: node scripts/prepare-pack.mjs <path-to-glTF-folder>

import fs from 'node:fs';
import path from 'node:path';

const NEEDED = [
  'TownCenter_FirstAge_Level1', 'TownCenter_FirstAge_Level3', 'TownCenter_SecondAge_Level2', 'TownCenter_SecondAge_Level3',
  'Houses_FirstAge_1_Level1', 'Houses_FirstAge_2_Level2', 'Houses_SecondAge_1_Level2', 'Houses_SecondAge_3_Level3',
  'Barracks_FirstAge_Level2', 'Barracks_FirstAge_Level3', 'Barracks_SecondAge_Level2', 'Barracks_SecondAge_Level3',
  'Archery_FirstAge_Level2', 'Archery_FirstAge_Level3', 'Archery_SecondAge_Level2', 'Archery_SecondAge_Level3',
  'Farm_FirstAge_Level2_Wheat', 'Farm_FirstAge_Level3_Wheat', 'Farm_SecondAge_Level2_Wheat', 'Farm_SecondAge_Level3_Wheat',
  'WatchTower_FirstAge_Level2', 'WatchTower_FirstAge_Level3', 'WatchTower_SecondAge_Level2', 'WatchTower_SecondAge_Level3',
  'Market_FirstAge_Level2', 'Market_FirstAge_Level3', 'Market_SecondAge_Level2', 'Market_SecondAge_Level3',
  'Windmill_FirstAge', 'Windmill_SecondAge',
  'TowerHouse_FirstAge', 'TowerHouse_SecondAge',
  'Walls_FirstAge', 'Walls_SecondAge',
];

const src = process.argv[2];
if (!src || !fs.existsSync(src)) {
  console.error('Usage: node scripts/prepare-pack.mjs <path-to-glTF-folder>');
  process.exit(1);
}
const dst = path.join(import.meta.dirname, '..', 'public', 'models', 'buildings');
fs.mkdirSync(dst, { recursive: true });

// Build a recursive file map of the source folder.
const all = new Map();
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else all.set(e.name, p);
  }
})(src);

const index = [];
const copied = new Set();
const copy = (name) => {
  if (copied.has(name) || !all.has(name)) return false;
  fs.copyFileSync(all.get(name), path.join(dst, name));
  copied.add(name);
  return true;
};

let found = 0;
for (const base of NEEDED) {
  const glb = base + '.glb';
  const gltf = base + '.gltf';
  if (all.has(glb)) {
    copy(glb);
    index.push(glb);
    found++;
  } else if (all.has(gltf)) {
    copy(gltf);
    index.push(gltf);
    found++;
    // copy external buffers/textures referenced by the gltf JSON
    const doc = JSON.parse(fs.readFileSync(all.get(gltf), 'utf8'));
    for (const ref of [...(doc.buffers || []), ...(doc.images || [])]) {
      if (ref.uri && !ref.uri.startsWith('data:')) copy(decodeURIComponent(ref.uri));
    }
  } else {
    console.warn('missing in pack:', base);
  }
}

fs.writeFileSync(path.join(dst, 'index.json'), JSON.stringify(index, null, 1));
const sizeMB = [...copied].reduce((s, n) => s + fs.statSync(path.join(dst, n)).size, 0) / 1e6;
console.log(`copied ${copied.size} files (${found}/${NEEDED.length} models, ${sizeMB.toFixed(1)} MB) -> public/models/buildings/`);
