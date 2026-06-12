// Animated unit models: KayKit "Adventurers" characters (CC0) with the
// shared Rig_Medium animation library, driven by THREE.AnimationMixer.
// Falls back to the procedural unit models when the pack isn't present.

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone as skeletonClone } from 'three/addons/utils/SkeletonUtils.js';

// our unit type -> character file + target height (catapult stays procedural)
const CHARACTERS = {
  villager: { file: 'Rogue', height: 1.75 },
  militia: { file: 'Barbarian', height: 1.85 },
  archer: { file: 'Ranger', height: 1.8 },
  knight: { file: 'Knight', height: 1.95 },
};

// state -> animation clip name (FREE tier of the pack)
const CLIPS = {
  idle: 'Idle_A',
  walk: 'Running_A',
  work: 'Interact',      // chop / build / melee swing
  shoot: 'Throw',        // ranged attack
  death: 'Death_A',
};

const protos = new Map();     // char file -> { scene, height }
let clips = new Map();        // clip name -> AnimationClip
let ready = false;

export function isUnitPackReady() { return ready; }

export async function loadUnitPack() {
  const base = import.meta.env.BASE_URL + 'models/units/';
  const loader = new GLTFLoader();
  try {
    // probe one file; if absent, stay procedural
    const head = await fetch(base + 'Rogue.glb', { method: 'HEAD' });
    if (!head.ok) return false;

    const files = [...new Set(Object.values(CHARACTERS).map(c => c.file))];
    await Promise.all(files.map(async (f) => {
      const gltf = await loader.loadAsync(base + f + '.glb');
      const scene = gltf.scene;
      const box = new THREE.Box3().setFromObject(scene);
      scene.traverse((o) => {
        if (o.isMesh || o.isSkinnedMesh) {
          o.castShadow = true;
          o.frustumCulled = false; // skinned bounds lag the animation
        }
      });
      protos.set(f, { scene, height: box.max.y - box.min.y });
    }));
    for (const animFile of ['Rig_Medium_General', 'Rig_Medium_MovementBasic']) {
      const gltf = await loader.loadAsync(base + animFile + '.glb');
      for (const c of gltf.animations) clips.set(c.name, c);
    }
    ready = protos.size > 0 && clips.size > 0;
  } catch (e) {
    console.warn('unit pack unavailable:', e.message);
    return false;
  }
  return ready;
}

// Team-tinted material cache so all units of a (type, team) share materials.
const teamMatCache = new Map();
function teamMaterial(material, teamColor, key) {
  const k = key + '|' + material.uuid;
  let m = teamMatCache.get(k);
  if (!m) {
    m = material.clone();
    if (m.color) m.color.lerp(new THREE.Color(teamColor), 0.45);
    teamMatCache.set(k, m);
  }
  return m;
}

/**
 * Returns { model, mixer, actions } for an animated pack unit, or null.
 * actions: { idle, walk, work, shoot, death } (THREE.AnimationAction or undefined)
 */
export function packUnit(type, teamColor) {
  if (!ready) return null;
  const def = CHARACTERS[type];
  if (!def) return null;
  const proto = protos.get(def.file);
  if (!proto) return null;

  const model = skeletonClone(proto.scene);
  const s = def.height / (proto.height || def.height);
  model.scale.setScalar(s);
  model.rotation.y = Math.PI; // KayKit rigs face -Z; game faces +Z
  const key = type + '|' + teamColor;
  model.traverse((o) => {
    if ((o.isMesh || o.isSkinnedMesh) && o.material) {
      o.material = teamMaterial(o.material, teamColor, key);
    }
  });

  const mixer = new THREE.AnimationMixer(model);
  const actions = {};
  for (const [state, clipName] of Object.entries(CLIPS)) {
    const clip = clips.get(clipName);
    if (clip) actions[state] = mixer.clipAction(clip);
  }
  if (actions.death) {
    actions.death.setLoop(THREE.LoopOnce);
    actions.death.clampWhenFinished = true;
  }
  return { model, mixer, actions };
}
