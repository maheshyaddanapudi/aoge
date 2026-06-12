// Tiny WebAudio synth for game SFX — no asset files needed.

let ctx = null;
let master = null;
let muted = false;
const lastPlayed = new Map();

export function initAudio() {
  if (ctx) return;
  try {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain();
    master.gain.value = 0.22;
    master.connect(ctx.destination);
  } catch { /* audio unavailable */ }
}

export function toggleMute() {
  muted = !muted;
  if (master) master.gain.value = muted ? 0 : 0.22;
  return muted;
}

export function isMuted() { return muted; }

// Shared audio graph access for the music and voice modules.
export function audioBus() {
  return ctx ? { ctx, master } : null;
}

function env(gainNode, t0, attack, decay, peak = 1) {
  gainNode.gain.setValueAtTime(0, t0);
  gainNode.gain.linearRampToValueAtTime(peak, t0 + attack);
  gainNode.gain.exponentialRampToValueAtTime(0.001, t0 + attack + decay);
}

function tone(freq, dur, type = 'square', vol = 0.5, slide = 0) {
  if (!ctx || muted) return;
  const t0 = ctx.currentTime;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t0);
  if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), t0 + dur);
  env(g, t0, 0.005, dur, vol);
  o.connect(g).connect(master);
  o.start(t0);
  o.stop(t0 + dur + 0.05);
}

function noise(dur, vol = 0.4, filterFreq = 1200) {
  if (!ctx || muted) return;
  const t0 = ctx.currentTime;
  const len = Math.ceil(ctx.sampleRate * dur);
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const f = ctx.createBiquadFilter();
  f.type = 'lowpass';
  f.frequency.value = filterFreq;
  const g = ctx.createGain();
  g.gain.value = vol;
  src.connect(f).connect(g).connect(master);
  src.start(t0);
}

const SOUNDS = {
  select: () => tone(620, 0.06, 'sine', 0.3),
  command: () => { tone(440, 0.05, 'sine', 0.3); setTimeout(() => tone(560, 0.05, 'sine', 0.25), 45); },
  place: () => tone(330, 0.1, 'triangle', 0.4),
  error: () => tone(160, 0.18, 'sawtooth', 0.25, -40),
  chop: () => noise(0.08, 0.3, 900),
  hammer: () => { noise(0.05, 0.25, 2500); tone(190, 0.05, 'square', 0.12); },
  treefall: () => noise(0.4, 0.3, 500),
  melee: () => { noise(0.07, 0.3, 3500); tone(900 + Math.random() * 300, 0.05, 'square', 0.1, -300); },
  arrow: () => noise(0.12, 0.18, 4500),
  catapult: () => { tone(90, 0.3, 'sawtooth', 0.3, -30); noise(0.25, 0.3, 700); },
  die: () => tone(220, 0.25, 'sawtooth', 0.18, -120),
  collapse: () => { noise(0.7, 0.5, 400); tone(70, 0.5, 'sawtooth', 0.25, -30); },
  horn: () => { tone(196, 0.55, 'sawtooth', 0.3); setTimeout(() => tone(196 * 1.25, 0.5, 'sawtooth', 0.28), 240); },
  ageup: () => [262, 330, 392, 523].forEach((f, i) => setTimeout(() => tone(f, 0.3, 'triangle', 0.32), i * 130)),
  built: () => { tone(392, 0.1, 'triangle', 0.3); setTimeout(() => tone(523, 0.15, 'triangle', 0.3), 90); },
  ready: () => tone(523, 0.09, 'sine', 0.25),
  victory: () => [262, 330, 392, 523, 659, 784].forEach((f, i) =>
    setTimeout(() => tone(f, i < 5 ? 0.28 : 0.9, 'triangle', 0.34), i * 150)),
  defeat: () => [392, 370, 311, 262, 196].forEach((f, i) =>
    setTimeout(() => tone(f, i < 4 ? 0.42 : 1.2, 'sawtooth', 0.2), i * 320)),
};

export function playSound(name) {
  if (!ctx || muted) return;
  const fn = SOUNDS[name];
  if (!fn) return;
  const now = performance.now();
  const last = lastPlayed.get(name) || 0;
  const minGap = name === 'chop' || name === 'hammer' || name === 'melee' ? 90 : 140;
  if (now - last < minGap) return;
  lastPlayed.set(name, now);
  fn();
}
