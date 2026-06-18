// Animated unit models: KayKit "Adventurers" characters (CC0) with the
// shared Rig_Medium animation library, driven by THREE.AnimationMixer.
// Falls back to the procedural unit models when the pack isn't present.

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone as skeletonClone } from 'three/addons/utils/SkeletonUtils.js';

// our unit type -> character file + target height + weapons attached to the
// rig's hand slots (handslotr = right/main hand, handslotl = off hand).
const CHARACTERS = {
  villager: { file: 'Rogue', height: 1.75, weaponR: 'axe_1handed' },
  militia: { file: 'Barbarian', height: 1.85, weaponR: 'axe_1handed', weaponL: 'shield_round_barbarian' },
  archer: { file: 'Ranger', height: 1.8, weaponL: 'bow_withString' },
  knight: { file: 'Knight', height: 1.95, weaponR: 'sword_1handed', weaponL: 'shield_round' },
};

const WEAPON_FILES = ['axe_1handed', 'sword_1handed', 'bow_withString', 'shield_round', 'shield_round_barbarian'];
const weaponProtos = new Map(); // file -> Object3D prototype

// state -> animation clip name. melee/shoot are synthesized procedurally
// (the FREE pack has no sword-slash or bow-draw clips — see buildCombatClips).
const CLIPS = {
  idle: 'Idle_A',
  walk: 'Running_A',
  work: 'Interact',      // villager chop / build
  melee: 'CombatMelee',  // synthesized sword/axe swing
  shoot: 'CombatBow',    // synthesized bow draw + release
  death: 'Death_A',
};

const protos = new Map();     // char file -> { scene, height }
let clips = new Map();        // clip name -> AnimationClip
let ready = false;

export function isUnitPackReady() { return ready; }

// Reject if a load takes too long so a single bad asset can't stall the pack.
function withTimeout(promise, ms, label) {
  return Promise.race([
    promise,
    new Promise((_, rej) => setTimeout(() => rej(new Error('timeout: ' + label)), ms)),
  ]);
}

export async function loadUnitPack() {
  const base = import.meta.env.BASE_URL + 'models/units/';
  const loader = new GLTFLoader();
  try {
    // probe one file; if absent, stay procedural
    const head = await fetch(base + 'Rogue.glb', { method: 'HEAD' });
    if (!head.ok) return false;

    const files = [...new Set(Object.values(CHARACTERS).map(c => c.file))];
    await Promise.all(files.map(async (f) => {
      const gltf = await withTimeout(loader.loadAsync(base + f + '.glb'), 15000, f);
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
      const gltf = await withTimeout(loader.loadAsync(base + animFile + '.glb'), 15000, animFile);
      for (const c of gltf.animations) clips.set(c.name, c);
    }
    // weapons attached to hand-slot bones (optional; a failure just leaves the
    // character unarmed and never blocks the pack from becoming ready)
    await Promise.all(WEAPON_FILES.map(async (w) => {
      try {
        const gltf = await withTimeout(loader.loadAsync(base + 'weapons/' + w + '.glb'), 8000, w);
        gltf.scene.traverse((o) => { if (o.isMesh) o.castShadow = true; });
        weaponProtos.set(w, gltf.scene);
      } catch { /* weapon missing/slow — character just goes unarmed */ }
    }));
    // synthesize combat clips on the shared rig (no combat clips in FREE tier)
    for (const c of buildCombatClips()) clips.set(c.name, c);
    ready = protos.size > 0 && clips.size > 0;
  } catch (e) {
    console.warn('unit pack unavailable:', e.message);
    return false;
  }
  return ready;
}

// ---------------------------------------------------------------------------
// Procedural combat animations authored on the Rig_Medium skeleton.
//
// AnimationClip tracks set ABSOLUTE local quaternions, so to move a bone
// relative to its rest pose we capture the rest local orientation and the
// parent's rest world orientation, then convert a model-space swing rotation
// ΔW into the bone's local frame:  local = inv(parentWorld) · ΔW · parentWorld · restLocal.
// (three.js strips the dots from bone names: 'upperarm.r' -> 'upperarmr'.)

function captureRest() {
  // any character shares the rig; use the first loaded proto
  const proto = protos.values().next().value;
  if (!proto) return null;
  proto.scene.updateMatrixWorld(true);
  const rest = {};
  const bones = ['chest', 'spine', 'upperarmr', 'lowerarmr', 'handr',
                 'upperarml', 'lowerarml', 'handl', 'head'];
  for (const name of bones) {
    const bone = proto.scene.getObjectByName(name);
    if (!bone) continue;
    const parentWorld = new THREE.Quaternion();
    bone.parent.getWorldQuaternion(parentWorld);
    rest[name] = {
      local: bone.quaternion.clone(),
      parentWorld,
      invParent: parentWorld.clone().invert(),
    };
  }
  return rest;
}

// boneTracks: [{ bone, axis:[x,y,z], keys:[[time, angle], ...] }]
function makeClip(name, rest, boneTracks) {
  const tracks = [];
  const axisV = new THREE.Vector3();
  for (const bt of boneTracks) {
    const r = rest[bt.bone];
    if (!r) continue;
    axisV.set(bt.axis[0], bt.axis[1], bt.axis[2]).normalize();
    const times = [];
    const values = [];
    for (const [t, ang] of bt.keys) {
      const dW = new THREE.Quaternion().setFromAxisAngle(axisV, ang);
      // local = invParent · dW · parentWorld · restLocal
      const q = r.invParent.clone().multiply(dW).multiply(r.parentWorld).multiply(r.local);
      times.push(t);
      values.push(q.x, q.y, q.z, q.w);
    }
    tracks.push(new THREE.QuaternionKeyframeTrack(bt.bone + '.quaternion', times, values));
  }
  return new THREE.AnimationClip(name, -1, tracks);
}

function buildCombatClips() {
  const rest = captureRest();
  if (!rest) return [];
  // Character faces -Z in model space; X is the left-right swing axis.
  const X = [1, 0, 0], Y = [0, 1, 0];

  // Sword/axe: windup up-and-back, fast diagonal downstrike, recover. (~0.8s)
  const melee = makeClip('CombatMelee', rest, [
    { bone: 'upperarmr', axis: X, keys: [[0, 0], [0.18, -1.45], [0.36, 1.15], [0.55, 0.5], [0.8, 0]] },
    { bone: 'lowerarmr', axis: X, keys: [[0, 0], [0.18, -0.9], [0.36, 0.25], [0.8, 0]] },
    { bone: 'chest', axis: Y, keys: [[0, 0], [0.18, 0.3], [0.36, -0.28], [0.8, 0]] },
    { bone: 'spine', axis: Y, keys: [[0, 0], [0.36, -0.15], [0.8, 0]] },
  ]);

  // Bow: left arm raises to aim, right hand draws to chest, hold, release. (~0.95s)
  const bow = makeClip('CombatBow', rest, [
    { bone: 'upperarml', axis: X, keys: [[0, 0], [0.28, 1.35], [0.7, 1.35], [0.95, 0]] },
    { bone: 'lowerarml', axis: X, keys: [[0, 0], [0.28, 0.2], [0.95, 0]] },
    { bone: 'upperarmr', axis: Y, keys: [[0, 0], [0.3, 0.55], [0.62, 0.55], [0.7, 0.2], [0.95, 0]] },
    { bone: 'lowerarmr', axis: X, keys: [[0, 0], [0.3, 1.5], [0.62, 1.55], [0.7, 0.3], [0.95, 0]] },
    { bone: 'chest', axis: Y, keys: [[0, 0], [0.3, -0.35], [0.62, -0.35], [0.95, 0]] },
  ]);
  return [melee, bow];
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

  // Attach weapons to the hand-slot bones (after tinting so they keep steel/wood).
  if (def.weaponR && weaponProtos.has(def.weaponR)) {
    const slot = model.getObjectByName('handslotr');
    if (slot) slot.add(weaponProtos.get(def.weaponR).clone(true));
  }
  if (def.weaponL && weaponProtos.has(def.weaponL)) {
    const slot = model.getObjectByName('handslotl');
    if (slot) slot.add(weaponProtos.get(def.weaponL).clone(true));
  }

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
