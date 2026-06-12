// Unit voice lines, AoE-style — synthesized gibberish speech ("Prostagma?")
// built from a glottal sawtooth source shaped by vowel formant filters.
// Villagers answer in a light questioning voice; soldiers grunt lower.

import { audioBus } from './audio.js';

// Vowel formant targets (F1, F2) in Hz.
const VOWELS = [
  [730, 1090], // a
  [530, 1840], // e
  [390, 1990], // i
  [570, 840],  // o
  [440, 1020], // u
];

let busyUntil = 0;

function syllable(ctx, dest, t, f0, vowel, dur, vel, gruff) {
  // consonant onset: short noise burst
  const nLen = Math.floor(ctx.sampleRate * 0.025);
  const nb = ctx.createBuffer(1, nLen, ctx.sampleRate);
  const nd = nb.getChannelData(0);
  for (let i = 0; i < nLen; i++) nd[i] = (Math.random() * 2 - 1) * (1 - i / nLen);
  const ns = ctx.createBufferSource();
  ns.buffer = nb;
  const nf = ctx.createBiquadFilter();
  nf.type = 'bandpass';
  nf.frequency.value = 1200 + Math.random() * 1800;
  const ng = ctx.createGain();
  ng.gain.value = vel * 0.5;
  ns.connect(nf).connect(ng).connect(dest);
  ns.start(t - 0.02);

  // glottal source
  const o = ctx.createOscillator();
  o.type = 'sawtooth';
  o.frequency.setValueAtTime(f0 * (0.96 + Math.random() * 0.08), t);
  o.frequency.linearRampToValueAtTime(f0, t + dur);
  // jitter LFO for naturalness
  const j = ctx.createOscillator();
  j.frequency.value = 11 + Math.random() * 6;
  const jg = ctx.createGain();
  jg.gain.value = f0 * (gruff ? 0.05 : 0.02);
  j.connect(jg).connect(o.frequency);

  const [F1, F2] = vowel;
  const mix = ctx.createGain();
  mix.gain.value = 0;
  for (const [freq, q, g] of [[F1, 9, 1], [F2, 11, 0.55], [2600, 13, 0.18]]) {
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = freq * (0.95 + Math.random() * 0.1);
    bp.Q.value = q;
    const bg = ctx.createGain();
    bg.gain.value = g;
    o.connect(bp).connect(bg).connect(mix);
  }
  // syllable envelope
  mix.gain.setValueAtTime(0, t);
  mix.gain.linearRampToValueAtTime(vel, t + 0.03);
  mix.gain.setValueAtTime(vel, t + dur - 0.045);
  mix.gain.linearRampToValueAtTime(0, t + dur);
  mix.connect(dest);
  o.start(t - 0.02);
  o.stop(t + dur + 0.03);
  j.start(t - 0.02);
  j.stop(t + dur + 0.03);
}

/**
 * kind: 'vSelect' | 'vAck' | 'mSelect' | 'mAck'
 * Select lines rise like a question; acks fall like an affirmation.
 */
export function voice(kind) {
  const b = audioBus();
  if (!b) return;
  const { ctx, master } = b;
  const now = performance.now();
  if (now < busyUntil) return;

  const military = kind[0] === 'm';
  const asking = kind.endsWith('Select');
  const f0base = military ? 96 + Math.random() * 14 : 126 + Math.random() * 22;
  const sylCount = 2 + ((Math.random() * 2) | 0) + (asking && !military ? 1 : 0);

  const out = ctx.createGain();
  out.gain.value = military ? 1.5 : 1.3;
  const lp = ctx.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.value = military ? 2400 : 3200;
  out.connect(lp).connect(master);

  let t = ctx.currentTime + 0.01;
  for (let s = 0; s < sylCount; s++) {
    const frac = s / Math.max(1, sylCount - 1);
    // pitch contour: question rises at the end, ack falls
    const contour = asking
      ? 1 + (frac > 0.6 ? (frac - 0.6) * 0.55 : 0)
      : 1.08 - frac * 0.18;
    const dur = 0.09 + Math.random() * 0.08 + (s === sylCount - 1 ? 0.06 : 0);
    const vel = 0.5 + Math.random() * 0.2 - frac * (asking ? 0 : 0.12);
    syllable(ctx, out, t, f0base * contour, VOWELS[(Math.random() * VOWELS.length) | 0], dur, vel, military);
    t += dur + 0.015 + Math.random() * 0.025;
  }
  busyUntil = now + (t - ctx.currentTime) * 1000 + 120;
}
