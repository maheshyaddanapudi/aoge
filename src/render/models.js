// Procedural low-poly models for units, buildings and resource nodes.
// Everything is built from primitives with flat shading and a warm palette;
// team color shows up on clothes, roofs trims and banners.

import * as THREE from 'three';

const matCache = new Map();
export function mat(color) {
  let m = matCache.get(color);
  if (!m) {
    m = new THREE.MeshLambertMaterial({ color });
    matCache.set(color, m);
  }
  return m;
}

const geoCache = new Map();
function geo(key, make) {
  let g = geoCache.get(key);
  if (!g) { g = make(); geoCache.set(key, g); }
  return g;
}

function box(w, h, d, color) {
  const m = new THREE.Mesh(geo(`b${w},${h},${d}`, () => new THREE.BoxGeometry(w, h, d)), mat(color));
  m.castShadow = true;
  return m;
}
function cyl(rt, rb, h, color, seg = 7) {
  const m = new THREE.Mesh(geo(`c${rt},${rb},${h},${seg}`, () => new THREE.CylinderGeometry(rt, rb, h, seg)), mat(color));
  m.castShadow = true;
  return m;
}
function cone(r, h, color, seg = 7) {
  const m = new THREE.Mesh(geo(`k${r},${h},${seg}`, () => new THREE.ConeGeometry(r, h, seg)), mat(color));
  m.castShadow = true;
  return m;
}
function sphere(r, color, detail = 0) {
  const m = new THREE.Mesh(geo(`s${r},${detail}`, () => new THREE.IcosahedronGeometry(r, detail)), mat(color));
  m.castShadow = true;
  return m;
}

// Palette
export const C = {
  skin: 0xd9a06b, skinDark: 0xb5854f,
  wood: 0x8a623a, woodDark: 0x6b4a28, plank: 0xa87c4f,
  thatch: 0xc9a85c, thatchDark: 0xb08f45,
  stone: 0x9d9a90, stoneDark: 0x7c7a72,
  cream: 0xe8dcc0, cloth: 0xb8a888,
  leaf: 0x4a7c3a, leafDark: 0x3a6630,
  gold: 0xe8b923, berry: 0xc23b3b,
  metal: 0xb8bcc4, metalDark: 0x6e7278,
  soil: 0x6b4f33, wheat: 0xd6b34e,
};

function teamShade(teamColor, f) {
  const c = new THREE.Color(teamColor);
  c.multiplyScalar(f);
  return c.getHex();
}

// ---------------------------------------------------------------------------
// UNITS — each returns a Group ~1.7 tall with userData.limbs for animation.

function humanoid(teamColor, { torsoColor, legColor, headgear } = {}) {
  const g = new THREE.Group();
  const tc = torsoColor ?? teamColor;
  const lc = legColor ?? 0x5a4a38;

  const limbs = {};
  // legs (pivot at hip, y=0.82)
  for (const side of [-1, 1]) {
    const hip = new THREE.Group();
    hip.position.set(side * 0.16, 0.82, 0);
    const leg = box(0.2, 0.8, 0.24, lc);
    leg.position.y = -0.4;
    hip.add(leg);
    g.add(hip);
    limbs[side < 0 ? 'lLeg' : 'rLeg'] = hip;
  }
  // torso
  const torso = box(0.62, 0.72, 0.4, tc);
  torso.position.y = 1.18;
  g.add(torso);
  // belt
  const belt = box(0.64, 0.1, 0.42, 0x3a2c1a);
  belt.position.y = 0.86;
  g.add(belt);
  // head
  const head = sphere(0.24, C.skin, 1);
  head.position.y = 1.74;
  g.add(head);
  limbs.head = head;
  if (headgear) { headgear.position.y = 1.74; g.add(headgear); limbs.hat = headgear; }
  // arms (pivot at shoulder)
  for (const side of [-1, 1]) {
    const sh = new THREE.Group();
    sh.position.set(side * 0.4, 1.46, 0);
    const arm = box(0.17, 0.62, 0.2, tc);
    arm.position.y = -0.28;
    sh.add(arm);
    const hand = sphere(0.09, C.skin, 0);
    hand.position.y = -0.6;
    sh.add(hand);
    g.add(sh);
    limbs[side < 0 ? 'lArm' : 'rArm'] = sh;
  }
  g.userData.limbs = limbs;
  return g;
}

export function makeVillager(teamColor) {
  const g = humanoid(teamColor, { torsoColor: C.cloth });
  // team sash
  const sash = box(0.66, 0.16, 0.44, teamColor);
  sash.position.y = 1.32;
  sash.rotation.z = 0.18;
  g.add(sash);
  // axe in right hand
  const axe = new THREE.Group();
  const handle = cyl(0.035, 0.035, 0.62, C.woodDark, 5);
  handle.rotation.x = Math.PI / 2;
  axe.add(handle);
  const blade = box(0.06, 0.18, 0.22, C.metal);
  blade.position.set(0, 0.08, 0.26);
  axe.add(blade);
  axe.position.set(0, -0.6, 0.1);
  g.userData.limbs.rArm.add(axe);
  g.userData.tool = axe;
  return g;
}

export function makeMilitia(teamColor) {
  const helmet = cone(0.26, 0.3, C.metalDark, 7);
  helmet.position.y = 0.16;
  const wrap = new THREE.Group(); wrap.add(helmet);
  const g = humanoid(teamColor, { torsoColor: teamColor, headgear: wrap });
  // sword
  const sword = new THREE.Group();
  const blade = box(0.06, 0.7, 0.1, C.metal);
  blade.position.y = -0.35;
  blade.rotation.x = Math.PI;
  sword.add(blade);
  const guard = box(0.2, 0.05, 0.12, C.woodDark);
  sword.add(guard);
  sword.position.set(0, -0.62, 0);
  sword.rotation.x = -Math.PI * 0.45;
  g.userData.limbs.rArm.add(sword);
  // shield
  const shield = cyl(0.3, 0.3, 0.07, teamShade(teamColor, 0.75), 8);
  shield.rotation.z = Math.PI / 2;
  shield.position.set(-0.14, -0.35, 0.1);
  const boss = sphere(0.08, C.metal, 0);
  boss.position.set(-0.2, -0.35, 0.1);
  g.userData.limbs.lArm.add(shield, boss);
  return g;
}

export function makeArcher(teamColor) {
  const hood = cone(0.27, 0.34, teamShade(teamColor, 0.8), 7);
  hood.position.y = 0.12;
  const wrap = new THREE.Group(); wrap.add(hood);
  const g = humanoid(teamColor, { torsoColor: 0x6b7a4a, headgear: wrap });
  const sash = box(0.66, 0.14, 0.44, teamColor);
  sash.position.y = 1.3; sash.rotation.z = -0.2;
  g.add(sash);
  // bow (half torus) in left hand
  const bow = new THREE.Mesh(
    geo('bow', () => new THREE.TorusGeometry(0.42, 0.035, 5, 10, Math.PI)),
    mat(C.woodDark)
  );
  bow.castShadow = true;
  bow.rotation.y = Math.PI / 2;
  bow.rotation.z = Math.PI / 2;
  bow.position.set(0, -0.55, 0.05);
  g.userData.limbs.lArm.add(bow);
  // quiver
  const quiver = cyl(0.09, 0.09, 0.46, C.wood, 6);
  quiver.position.set(0.18, 1.3, -0.26);
  quiver.rotation.x = 0.3;
  g.add(quiver);
  return g;
}

export function makeKnight(teamColor) {
  const g = new THREE.Group();
  const limbs = {};
  const horseC = 0x6e4f33;
  // horse body
  const body = box(0.62, 0.62, 1.5, horseC);
  body.position.y = 1.0;
  g.add(body);
  // neck + head
  const neck = box(0.3, 0.6, 0.34, horseC);
  neck.position.set(0, 1.45, 0.72);
  neck.rotation.x = 0.45;
  g.add(neck);
  const hd = box(0.26, 0.28, 0.52, 0x5d4129);
  hd.position.set(0, 1.74, 0.95);
  g.add(hd);
  // legs
  let i = 0;
  for (const z of [0.55, -0.55]) for (const x of [-0.22, 0.22]) {
    const hip = new THREE.Group();
    hip.position.set(x, 0.78, z);
    const leg = box(0.16, 0.78, 0.18, 0x5d4129);
    leg.position.y = -0.39;
    hip.add(leg);
    g.add(hip);
    limbs['hLeg' + i++] = hip;
  }
  // tail
  const tail = box(0.12, 0.5, 0.14, 0x3d2c1a);
  tail.position.set(0, 1.05, -0.85);
  tail.rotation.x = -0.5;
  g.add(tail);
  // caparison (team cloth)
  const cap = box(0.7, 0.3, 1.2, teamColor);
  cap.position.y = 1.22;
  g.add(cap);
  // rider
  const torso = box(0.42, 0.56, 0.34, teamShade(teamColor, 0.85));
  torso.position.set(0, 1.78, -0.1);
  g.add(torso);
  const head = sphere(0.2, C.skin, 1);
  head.position.set(0, 2.2, -0.1);
  g.add(head);
  const helm = cone(0.22, 0.28, C.metal, 7);
  helm.position.set(0, 2.38, -0.1);
  g.add(helm);
  // lance arm
  const sh = new THREE.Group();
  sh.position.set(0.3, 1.95, -0.1);
  const arm = box(0.14, 0.4, 0.16, teamShade(teamColor, 0.85));
  arm.position.y = -0.18;
  sh.add(arm);
  const lance = cyl(0.03, 0.05, 1.7, C.plank, 5);
  lance.rotation.x = Math.PI / 2 - 0.12;
  lance.position.set(0, -0.3, 0.5);
  sh.add(lance);
  const tip = cone(0.06, 0.18, C.metal, 5);
  tip.rotation.x = Math.PI / 2;
  tip.position.set(0, -0.2, 1.36);
  sh.add(tip);
  g.add(sh);
  limbs.rArm = sh;
  g.userData.limbs = limbs;
  g.userData.isMounted = true;
  return g;
}

export function makeCatapult(teamColor) {
  const g = new THREE.Group();
  const base = box(1.1, 0.26, 1.7, C.wood);
  base.position.y = 0.5;
  g.add(base);
  // wheels
  for (const z of [0.6, -0.6]) for (const x of [-0.62, 0.62]) {
    const w = cyl(0.34, 0.34, 0.14, C.woodDark, 9);
    w.rotation.z = Math.PI / 2;
    w.position.set(x, 0.34, z);
    g.add(w);
  }
  // A-frame
  for (const x of [-0.4, 0.4]) {
    const f = box(0.12, 0.9, 0.14, C.woodDark);
    f.position.set(x, 0.95, 0.1);
    g.add(f);
  }
  const axle = cyl(0.06, 0.06, 0.92, C.woodDark, 6);
  axle.rotation.z = Math.PI / 2;
  axle.position.set(0, 1.3, 0.1);
  g.add(axle);
  // throwing arm (pivot at axle)
  const armPivot = new THREE.Group();
  armPivot.position.set(0, 1.3, 0.1);
  const arm = box(0.14, 0.14, 1.9, C.plank);
  arm.position.z = -0.55;
  armPivot.add(arm);
  const bucket = cyl(0.22, 0.16, 0.18, C.woodDark, 7);
  bucket.position.set(0, 0.06, -1.45);
  armPivot.add(bucket);
  const counter = box(0.4, 0.4, 0.3, C.stoneDark);
  counter.position.z = 0.5;
  armPivot.add(counter);
  armPivot.rotation.x = -0.5;
  g.add(armPivot);
  // team banner
  const pole = cyl(0.025, 0.025, 0.7, C.woodDark, 4);
  pole.position.set(0.5, 1.1, -0.75);
  g.add(pole);
  const flag = box(0.3, 0.18, 0.02, teamColor);
  flag.position.set(0.65, 1.32, -0.75);
  g.add(flag);
  g.userData.limbs = { throwArm: armPivot };
  g.userData.isMachine = true;
  return g;
}

export const UNIT_FACTORY = {
  villager: makeVillager,
  militia: makeMilitia,
  archer: makeArcher,
  knight: makeKnight,
  catapult: makeCatapult,
};

// ---------------------------------------------------------------------------
// BUILDINGS — footprint `size` tiles (TILE=2 world units per tile).
// Groups are centered at footprint center, base at y=0.

function banner(teamColor, h = 4) {
  const g = new THREE.Group();
  const pole = cyl(0.05, 0.05, h, C.woodDark, 5);
  pole.position.y = h / 2;
  g.add(pole);
  const flag = box(0.9, 0.55, 0.04, teamColor);
  flag.position.set(0.48, h - 0.35, 0);
  g.add(flag);
  return g;
}

export function makeTownCenter(teamColor) {
  const g = new THREE.Group();
  const S = 7.2;
  // stone platform
  const plat = box(S + 0.6, 0.5, S + 0.6, C.stone);
  plat.position.y = 0.25;
  g.add(plat);
  // main hall
  const hall = box(S - 1.2, 2.6, S - 1.2, C.cream);
  hall.position.y = 1.8;
  g.add(hall);
  // timber framing
  for (const x of [-(S - 1.2) / 2, (S - 1.2) / 2]) {
    for (const z of [-(S - 1.2) / 2, (S - 1.2) / 2]) {
      const post = box(0.34, 2.6, 0.34, C.woodDark);
      post.position.set(x, 1.8, z);
      g.add(post);
    }
  }
  // upper floor
  const upper = box(S - 2.6, 1.5, S - 2.6, 0xd9c9a3);
  upper.position.y = 3.85;
  g.add(upper);
  // big hip roof
  const roof = cone((S - 1.4) * 0.78, 2.4, C.thatch, 4);
  roof.position.y = 5.7;
  roof.rotation.y = Math.PI / 4;
  g.add(roof);
  const roofTrim = cone(0.5, 0.8, teamColor, 4);
  roofTrim.position.y = 7.1;
  roofTrim.rotation.y = Math.PI / 4;
  g.add(roofTrim);
  // lower skirt roof
  const skirt = cone(S * 0.74, 1.1, C.thatchDark, 4);
  skirt.position.y = 3.55;
  skirt.rotation.y = Math.PI / 4;
  g.add(skirt);
  // door
  const door = box(1.3, 1.6, 0.2, C.woodDark);
  door.position.set(0, 1.05, (S - 1.2) / 2 + 0.05);
  g.add(door);
  const b = banner(teamColor, 5.2);
  b.position.set(S / 2 - 0.5, 0.5, S / 2 - 0.5);
  g.add(b);
  return g;
}

export function makeHouse(teamColor) {
  const g = new THREE.Group();
  const body = box(3.2, 1.7, 2.8, C.cream);
  body.position.y = 0.95;
  g.add(body);
  // gable roof: stretched 3-sided prism
  const roof = new THREE.Mesh(
    geo('gable3.8', () => {
      const r = new THREE.CylinderGeometry(1.55, 1.55, 3.8, 3, 1);
      r.rotateZ(Math.PI / 2);
      r.rotateX(Math.PI / 6 + Math.PI / 2);
      return r;
    }),
    mat(C.thatch)
  );
  roof.castShadow = true;
  roof.scale.set(1, 0.72, 1.05);
  roof.position.y = 2.1;
  g.add(roof);
  const door = box(0.7, 1.1, 0.15, C.woodDark);
  door.position.set(0.5, 0.65, 1.45);
  g.add(door);
  const win = box(0.5, 0.45, 0.12, 0x4a3520);
  win.position.set(-0.8, 1.2, 1.45);
  g.add(win);
  // chimney
  const ch = box(0.4, 1.0, 0.4, C.stoneDark);
  ch.position.set(-1.1, 2.5, 0);
  g.add(ch);
  // team trim
  const trim = box(3.3, 0.16, 2.9, teamColor);
  trim.position.y = 1.75;
  g.add(trim);
  return g;
}

export function makeStorehouse(teamColor) {
  const g = new THREE.Group();
  const body = box(3.0, 1.6, 3.0, C.plank);
  body.position.y = 0.9;
  g.add(body);
  const roof = box(3.5, 0.25, 3.5, C.woodDark);
  roof.position.y = 1.85;
  g.add(roof);
  const roof2 = box(2.2, 0.25, 2.2, C.wood);
  roof2.position.y = 2.35;
  g.add(roof2);
  // crates and sacks
  const c1 = box(0.7, 0.7, 0.7, C.wood); c1.position.set(1.7, 0.45, 1.0); g.add(c1);
  const c2 = box(0.55, 0.55, 0.55, C.plank); c2.position.set(1.85, 0.35, 0.1); g.add(c2);
  const sack = sphere(0.4, C.cloth, 1); sack.scale.y = 0.75; sack.position.set(-1.7, 0.3, 1.2); g.add(sack);
  const trim = box(3.1, 0.14, 3.1, teamColor);
  trim.position.y = 1.62;
  g.add(trim);
  return g;
}

export function makeBarracks(teamColor) {
  const g = new THREE.Group();
  const body = box(5.0, 2.2, 4.4, 0xcdbb96);
  body.position.y = 1.25;
  g.add(body);
  const roof = new THREE.Mesh(
    geo('gable5.6', () => {
      const r = new THREE.CylinderGeometry(2.3, 2.3, 5.6, 3, 1);
      r.rotateZ(Math.PI / 2);
      r.rotateX(Math.PI / 6 + Math.PI / 2);
      return r;
    }),
    mat(teamShade(teamColor, 0.62))
  );
  roof.castShadow = true;
  roof.scale.set(1, 0.6, 0.95);
  roof.position.y = 2.95;
  g.add(roof);
  const door = box(1.5, 1.7, 0.2, C.woodDark);
  door.position.set(0, 0.95, 2.25);
  g.add(door);
  // shield decorations
  for (const x of [-1.6, 1.6]) {
    const sh = cyl(0.42, 0.42, 0.1, teamColor, 8);
    sh.rotation.x = Math.PI / 2;
    sh.position.set(x, 1.6, 2.26);
    g.add(sh);
  }
  const b = banner(teamColor, 4);
  b.position.set(2.2, 0, -1.8);
  g.add(b);
  return g;
}

export function makeFarm() {
  const g = new THREE.Group();
  const soil = box(3.8, 0.18, 3.8, C.soil);
  soil.position.y = 0.09;
  soil.receiveShadow = true;
  g.add(soil);
  // crop rows
  for (let i = 0; i < 4; i++) {
    const row = box(0.5, 0.3, 3.4, C.wheat);
    row.position.set(-1.35 + i * 0.9, 0.3, 0);
    g.add(row);
  }
  // fence posts
  for (const [x, z] of [[-1.9, -1.9], [1.9, -1.9], [-1.9, 1.9], [1.9, 1.9]]) {
    const p = cyl(0.07, 0.07, 0.7, C.woodDark, 5);
    p.position.set(x, 0.35, z);
    g.add(p);
  }
  return g;
}

export function makeArcheryRange(teamColor) {
  const g = new THREE.Group();
  const body = box(4.2, 1.9, 3.2, 0xc9b289);
  body.position.set(-0.5, 1.05, -0.8);
  g.add(body);
  const roof = box(4.8, 0.25, 3.8, teamShade(teamColor, 0.62));
  roof.position.set(-0.5, 2.15, -0.8);
  roof.rotation.z = 0.07;
  g.add(roof);
  // archery target
  const t1 = cyl(0.6, 0.6, 0.18, 0xe8e0cc, 10);
  t1.rotation.x = Math.PI / 2;
  t1.position.set(1.9, 1.0, 1.6);
  g.add(t1);
  const t2 = cyl(0.36, 0.36, 0.2, 0xd23b2e, 10);
  t2.rotation.x = Math.PI / 2;
  t2.position.set(1.9, 1.0, 1.6);
  g.add(t2);
  const t3 = cyl(0.14, 0.14, 0.22, 0xe8b923, 8);
  t3.rotation.x = Math.PI / 2;
  t3.position.set(1.9, 1.0, 1.6);
  g.add(t3);
  const stand = box(0.15, 1.0, 0.6, C.woodDark);
  stand.position.set(1.9, 0.5, 1.6);
  g.add(stand);
  const b = banner(teamColor, 3.6);
  b.position.set(-2.4, 0, 1.2);
  g.add(b);
  return g;
}

export function makeTower(teamColor) {
  const g = new THREE.Group();
  const base = cyl(1.0, 1.25, 4.6, C.stone, 7);
  base.position.y = 2.3;
  g.add(base);
  // crenellations
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2;
    const c = box(0.34, 0.4, 0.34, C.stoneDark);
    c.position.set(Math.cos(a) * 0.95, 4.85, Math.sin(a) * 0.95);
    g.add(c);
  }
  const roof = cone(1.15, 1.1, teamShade(teamColor, 0.62), 7);
  roof.position.y = 5.6;
  g.add(roof);
  const win = box(0.3, 0.5, 0.3, 0x2a2018);
  win.position.set(0, 3.6, 1.05);
  g.add(win);
  return g;
}

export function makeWall() {
  const g = new THREE.Group();
  // palisade: a row of sharpened logs
  for (let i = -2; i <= 2; i++) {
    const h = 2.2 + ((i * 7919) % 5) * 0.08;
    const log = cyl(0.17, 0.2, h, i % 2 ? C.wood : C.woodDark, 6);
    log.position.set(i * 0.38, h / 2, 0);
    g.add(log);
    const tip = cone(0.17, 0.3, C.woodDark, 6);
    tip.position.set(i * 0.38, h + 0.15, 0);
    g.add(tip);
  }
  const brace = box(1.9, 0.18, 0.12, C.plank);
  brace.position.set(0, 1.2, 0.2);
  g.add(brace);
  return g;
}

export function makeStable(teamColor) {
  const g = new THREE.Group();
  const body = box(5.2, 2.0, 3.6, 0xc4a878);
  body.position.set(0, 1.1, -0.6);
  g.add(body);
  const roof = new THREE.Mesh(
    geo('gable5.8', () => {
      const r = new THREE.CylinderGeometry(2.1, 2.1, 5.8, 3, 1);
      r.rotateZ(Math.PI / 2);
      r.rotateX(Math.PI / 6 + Math.PI / 2);
      return r;
    }),
    mat(teamShade(teamColor, 0.62))
  );
  roof.castShadow = true;
  roof.scale.set(1, 0.62, 1);
  roof.position.set(0, 2.65, -0.6);
  g.add(roof);
  // paddock fence
  for (const [x, z] of [[-2.3, 1.8], [-0.8, 2.2], [0.8, 2.2], [2.3, 1.8]]) {
    const p = cyl(0.07, 0.07, 0.8, C.woodDark, 5);
    p.position.set(x, 0.4, z);
    g.add(p);
  }
  const rail = box(4.6, 0.1, 0.1, C.plank);
  rail.position.set(0, 0.62, 2.0);
  g.add(rail);
  // hay pile
  const hay = sphere(0.55, C.wheat, 1);
  hay.scale.y = 0.6;
  hay.position.set(1.9, 0.3, 1.3);
  g.add(hay);
  const b = banner(teamColor, 3.8);
  b.position.set(-2.4, 0, -2.0);
  g.add(b);
  return g;
}

export function makeSiegeWorkshop(teamColor) {
  const g = new THREE.Group();
  const body = box(5.0, 2.3, 4.2, C.plank);
  body.position.set(-0.3, 1.25, 0);
  g.add(body);
  const roof = box(5.8, 0.28, 5.0, C.woodDark);
  roof.position.set(-0.3, 2.55, 0);
  roof.rotation.x = 0.06;
  g.add(roof);
  // big door
  const door = box(2.2, 1.9, 0.2, 0x4a3520);
  door.position.set(-0.3, 1.0, 2.15);
  g.add(door);
  // spare wheel + beams outside
  const wheel = cyl(0.5, 0.5, 0.14, C.woodDark, 9);
  wheel.rotation.x = Math.PI / 2;
  wheel.rotation.z = 0.4;
  wheel.position.set(2.6, 0.52, 1.0);
  g.add(wheel);
  const beam = box(0.2, 0.2, 2.4, C.wood);
  beam.position.set(2.5, 0.2, -0.6);
  beam.rotation.y = 0.5;
  g.add(beam);
  const b = banner(teamColor, 4);
  b.position.set(-2.6, 0, -1.8);
  g.add(b);
  return g;
}

export const BUILDING_FACTORY = {
  towncenter: makeTownCenter,
  house: makeHouse,
  storehouse: makeStorehouse,
  barracks: makeBarracks,
  farm: () => makeFarm(),
  archeryrange: makeArcheryRange,
  tower: makeTower,
  wall: () => makeWall(),
  stable: makeStable,
  siegeworkshop: makeSiegeWorkshop,
};

// ---------------------------------------------------------------------------
// RESOURCE NODES (non-instanced ones) and misc.

export function makeBerryBush() {
  const g = new THREE.Group();
  const bush = sphere(0.85, C.leafDark, 1);
  bush.scale.y = 0.7;
  bush.position.y = 0.5;
  g.add(bush);
  const bush2 = sphere(0.55, C.leaf, 1);
  bush2.position.set(0.45, 0.55, 0.3);
  g.add(bush2);
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2;
    const berry = sphere(0.09, C.berry, 0);
    berry.position.set(Math.cos(a) * 0.66, 0.55 + Math.sin(i * 2.4) * 0.25, Math.sin(a) * 0.62);
    g.add(berry);
  }
  return g;
}

export function makeGoldMine() {
  const g = new THREE.Group();
  const rock = sphere(0.95, C.stoneDark, 0);
  rock.scale.set(1.1, 0.75, 1);
  rock.position.y = 0.45;
  rock.rotation.y = 0.6;
  g.add(rock);
  const rock2 = sphere(0.6, C.stone, 0);
  rock2.position.set(0.55, 0.35, -0.4);
  g.add(rock2);
  for (const [x, y, z, s] of [[0.3, 0.85, 0.3, 0.22], [-0.5, 0.6, 0.4, 0.18], [0, 0.45, 0.8, 0.16], [-0.3, 0.95, -0.3, 0.15]]) {
    const nug = sphere(s, C.gold, 0);
    nug.position.set(x, y, z);
    g.add(nug);
  }
  return g;
}

export function makeStump() {
  const s = cyl(0.22, 0.3, 0.4, C.woodDark, 6);
  s.position.y = 0.2;
  return s;
}

// Construction scaffold shown while a building is going up.
export function makeScaffold(size) {
  const g = new THREE.Group();
  const S = size * 2 - 0.6;
  for (const [x, z] of [[-S / 2, -S / 2], [S / 2, -S / 2], [-S / 2, S / 2], [S / 2, S / 2]]) {
    const p = cyl(0.08, 0.08, 2.4, C.plank, 5);
    p.position.set(x, 1.2, z);
    g.add(p);
  }
  const plank1 = box(S, 0.1, 0.3, C.plank);
  plank1.position.set(0, 1.7, -S / 2);
  g.add(plank1);
  const plank2 = box(0.3, 0.1, S, C.plank);
  plank2.position.set(S / 2, 2.0, 0);
  g.add(plank2);
  // pile of materials
  const pile = box(0.9, 0.4, 0.6, C.wood);
  pile.position.set(0.2, 0.2, 0.1);
  g.add(pile);
  return g;
}
