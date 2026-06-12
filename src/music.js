// Generative background music, AoE-style: a calm medieval loop (plucked
// lute via Karplus-Strong string synthesis, breathy flute melody, low drone)
// that seamlessly layers in war drums and darker harmony when combat
// involves the player. All synthesized — no audio files.

import { audioBus } from './audio.js';

let ctx = null;
let bus = null;        // music gain -> master
let wet = null;        // reverb send
let running = false;
let schedTimer = null;

let tension = 0;        // 0 = peace, 1 = battle (smoothed)
let tensionHold = 0;    // wall-clock until which tension stays raised

// D dorian
const SCALE = [0, 2, 3, 5, 7, 9, 10];
const ROOT = 50; // D3
// chord roots as scale degrees: Dm, F, C, G, Dm, Bb-ish(Am), C, Dm
const PROG_PEACE = [0, 2, 6, 3, 0, 4, 6, 0];
const PROG_WAR = [0, 5, 0, 4, 0, 5, 3, 0];

let barIndex = 0;
let nextBarAt = 0;
let lastMelodyDeg = 7;

const midiHz = (m) => 440 * Math.pow(2, (m - 69) / 12);
const degMidi = (deg, oct = 0) =>
  ROOT + 12 * (oct + Math.floor(deg / 7)) + SCALE[((deg % 7) + 7) % 7];

// ---- Karplus-Strong plucked string ----------------------------------------
const pluckCache = new Map();
function pluckBuffer(midi) {
  let buf = pluckCache.get(midi);
  if (buf) return buf;
  const sr = ctx.sampleRate;
  const freq = midiHz(midi);
  const N = Math.max(2, Math.round(sr / freq));
  const dur = 1.6;
  const len = Math.floor(sr * dur);
  buf = ctx.createBuffer(1, len, sr);
  const out = buf.getChannelData(0);
  const ring = new Float32Array(N);
  for (let i = 0; i < N; i++) ring[i] = Math.random() * 2 - 1;
  let idx = 0;
  const damp = 0.995 + Math.min(0.0045, freq / 90000);
  for (let i = 0; i < len; i++) {
    const cur = ring[idx];
    const nxt = ring[(idx + 1) % N];
    ring[idx] = damp * 0.5 * (cur + nxt);
    out[i] = cur;
    idx = (idx + 1) % N;
  }
  pluckCache.set(midi, buf);
  return buf;
}

function pluck(midi, t, vel = 0.5) {
  const src = ctx.createBufferSource();
  src.buffer = pluckBuffer(midi);
  const g = ctx.createGain();
  g.gain.value = vel;
  src.connect(g);
  g.connect(bus);
  g.connect(wet);
  src.start(t);
}

// ---- flute -----------------------------------------------------------------
function flute(midi, t, dur, vel = 0.4) {
  const o = ctx.createOscillator();
  o.type = 'sine';
  const f = midiHz(midi);
  o.frequency.setValueAtTime(f, t);
  // vibrato
  const lfo = ctx.createOscillator();
  lfo.frequency.value = 5.2;
  const lfoG = ctx.createGain();
  lfoG.gain.value = f * 0.008;
  lfo.connect(lfoG).connect(o.frequency);
  // breath noise
  const g = ctx.createGain();
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(vel, t + 0.08);
  g.gain.setValueAtTime(vel, t + dur - 0.12);
  g.gain.linearRampToValueAtTime(0, t + dur);
  o.connect(g);
  g.connect(bus);
  g.connect(wet);
  o.start(t);
  o.stop(t + dur + 0.05);
  lfo.start(t);
  lfo.stop(t + dur + 0.05);
}

// ---- drums -----------------------------------------------------------------
function drum(t, vel, low = true) {
  if (vel <= 0.01) return;
  const o = ctx.createOscillator();
  o.type = 'sine';
  o.frequency.setValueAtTime(low ? 110 : 180, t);
  o.frequency.exponentialRampToValueAtTime(low ? 48 : 80, t + 0.12);
  const g = ctx.createGain();
  g.gain.setValueAtTime(vel, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
  o.connect(g).connect(bus);
  o.start(t);
  o.stop(t + 0.3);
  // skin noise
  const len = Math.floor(ctx.sampleRate * 0.05);
  const nb = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = nb.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
  const ns = ctx.createBufferSource();
  ns.buffer = nb;
  const ng = ctx.createGain();
  ng.gain.value = vel * 0.5;
  const bp = ctx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.value = low ? 300 : 700;
  ns.connect(bp).connect(ng).connect(bus);
  ns.start(t);
}

// ---- reverb (generated impulse) ---------------------------------------------
function makeReverb() {
  const sr = ctx.sampleRate;
  const dur = 1.9;
  const len = Math.floor(sr * dur);
  const ir = ctx.createBuffer(2, len, sr);
  for (let ch = 0; ch < 2; ch++) {
    const d = ir.getChannelData(ch);
    for (let i = 0; i < len; i++) {
      d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.4);
    }
  }
  const conv = ctx.createConvolver();
  conv.buffer = ir;
  return conv;
}

// ---- composer -----------------------------------------------------------------
function scheduleBar(t) {
  const war = tension;
  const tempo = 68 + war * 26;
  const beat = 60 / tempo;
  const barDur = beat * 4;
  const prog = war > 0.5 ? PROG_WAR : PROG_PEACE;
  const chordDeg = prog[barIndex % prog.length];
  const chord = [chordDeg, chordDeg + 2, chordDeg + 4];

  // drone on phrase starts
  if (barIndex % 4 === 0) {
    pluck(degMidi(chordDeg, -1), t, 0.34);
    flute(degMidi(chordDeg, 0), t + 0.02, barDur * 0.96, 0.05 + war * 0.03);
  }

  // lute arpeggio (eighths)
  const pattern = [0, 2, 1, 2, 0, 2, 1, 2];
  for (let i = 0; i < 8; i++) {
    const sparse = war < 0.4 && (barIndex + i) % 7 === 3; // breathe in peace
    if (sparse) continue;
    const deg = chord[pattern[i]] + (i === 4 && Math.random() < 0.4 ? 7 : 0);
    const vel = (i % 4 === 0 ? 0.4 : 0.22) * (0.8 + Math.random() * 0.35);
    pluck(degMidi(deg, 1), t + i * beat * 0.5, vel);
  }

  // melody: sparse phrases, random-walking on the scale toward chord tones
  if (barIndex % 2 === (war > 0.5 ? 0 : 1) && Math.random() < 0.85) {
    let cursor = t + beat * (Math.random() < 0.5 ? 0 : 0.5);
    const notes = 2 + ((Math.random() * 3) | 0);
    for (let n = 0; n < notes && cursor < t + barDur - 0.2; n++) {
      const drift = [-2, -1, -1, 1, 1, 2][(Math.random() * 6) | 0];
      lastMelodyDeg += drift;
      // tether to the octave-above register and pull toward chord tones
      if (lastMelodyDeg < 5) lastMelodyDeg += 4;
      if (lastMelodyDeg > 13) lastMelodyDeg -= 4;
      if (n === notes - 1) lastMelodyDeg = chord[(Math.random() * 3) | 0] + 7;
      const dur = beat * (Math.random() < 0.3 ? 1.5 : 0.75);
      flute(degMidi(lastMelodyDeg - 7 + (war > 0.5 ? 0 : 7), 1), cursor, dur, 0.16 + Math.random() * 0.07);
      cursor += dur + (Math.random() < 0.3 ? beat * 0.5 : 0);
    }
  }

  // war drums scale with tension
  if (war > 0.06) {
    drum(t, 0.5 * war, true);
    drum(t + beat * 1.5, 0.3 * war, false);
    drum(t + beat * 2, 0.45 * war, true);
    if (war > 0.6) drum(t + beat * 3, 0.3 * war, false);
    if (war > 0.8 && Math.random() < 0.5) drum(t + beat * 3.5, 0.25 * war, false);
  }

  barIndex++;
  return barDur;
}

function tick() {
  if (!running) return;
  // smooth tension toward target (raised while tensionHold is in the future)
  const target = performance.now() < tensionHold ? 1 : 0;
  tension += (target - tension) * 0.06;
  if (tension < 0.01) tension = 0;

  // lookahead scheduling
  while (nextBarAt < ctx.currentTime + 0.5) {
    if (nextBarAt < ctx.currentTime) nextBarAt = ctx.currentTime + 0.05;
    nextBarAt += scheduleBar(nextBarAt);
  }
}

// ---- public API ------------------------------------------------------------------

export function startMusic() {
  const b = audioBus();
  if (!b || running) return;
  ctx = b.ctx;
  bus = ctx.createGain();
  bus.gain.value = 0.55;
  bus.connect(b.master);
  const reverb = makeReverb();
  wet = ctx.createGain();
  wet.gain.value = 0.35;
  wet.connect(reverb);
  reverb.connect(bus);
  running = true;
  nextBarAt = ctx.currentTime + 0.1;
  schedTimer = setInterval(tick, 120);
}

export function stopMusic(fadeSec = 1.5) {
  if (!running) return;
  running = false;
  clearInterval(schedTimer);
  if (bus) {
    const t = ctx.currentTime;
    bus.gain.setValueAtTime(bus.gain.value, t);
    bus.gain.linearRampToValueAtTime(0.0001, t + fadeSec);
  }
}

// Called from combat events; keeps the battle layer up while fighting continues.
export function combatPulse() {
  tensionHold = performance.now() + 9000;
}
