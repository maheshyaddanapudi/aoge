// Visual Tier 2 probes: ambient life (birds, clouds+shadows, ripples,
// grass tufts) and the bundled MedievalSharp font.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4268 } });
const browser = await chromium.launch({ args: ['--use-gl=angle','--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
await page.goto('http://localhost:4268/aoge/', { waitUntil: 'networkidle' });
await page.click('#start-normal'); await page.waitForTimeout(2200);
const R=[];

// V1: ambient systems exist with expected population
R.push(await page.evaluate(()=>{
  const a=window.__ambient;
  const birds=a?.birdMesh?.count===18&&a.flocks.length===3;
  const clouds=a?.clouds?.length===4&&a.clouds.every(c=>c.group.children.length>=3&&c.shadow);
  const ripples=(a?.ripples?.length||0)>=8;
  const grassPlaced=[...a.scene.children].some(o=>o.isInstancedMesh&&o!==a.birdMesh&&o.count>200&&o.material.alphaTest>0);
  return `V1 ambient-setup: birds=${birds} clouds=${clouds} ripples=${ripples} grass=${grassPlaced} ${birds&&clouds&&ripples&&grassPlaced?'PASS':'FAIL'}`;
}));

// V2: birds fly and clouds drift over time (positions change)
R.push(await page.evaluate(async ()=>{
  const a=window.__ambient;
  const f0={x:a.flocks[0].x,z:a.flocks[0].z};
  const c0=a.clouds[0].group.position.x;
  await new Promise(r=>setTimeout(r,2500));
  const fMoved=Math.hypot(a.flocks[0].x-f0.x,a.flocks[0].z-f0.z);
  const cMoved=Math.abs(a.clouds[0].group.position.x-c0);
  const shadowOnGround=a.clouds.some(c=>c.shadow.visible&&c.shadow.position.y<12);
  // headless runs at ~2 FPS with dt clamped to 0.05 — expect small but nonzero drift
  return `V2 motion: flockMoved=${fMoved.toFixed(1)} cloudMoved=${cMoved.toFixed(2)} shadowConformed=${shadowOnGround} ${fMoved>0.3&&cMoved>0.03&&shadowOnGround?'PASS':'FAIL'}`;
}));

// V3: ripples animate on water (some ripple is mid-cycle with opacity > 0)
R.push(await page.evaluate(async ()=>{
  const a=window.__ambient;
  if(!a.ripples.length) return 'V3 ripples: no water on this map — SKIP PASS';
  let seen=false;
  for(let i=0;i<40&&!seen;i++){
    await new Promise(r=>setTimeout(r,250));
    seen=a.ripples.some(r=>r.mesh.material.opacity>0.05);
  }
  const onWater=a.ripples.every(r=>r.t<0||r.mesh.position.y<0);
  return `V3 ripples: animating=${seen} atWaterLevel=${onWater} ${seen&&onWater?'PASS':'FAIL'}`;
}));

// V4: bundled font actually loads (no network fetch to Google)
R.push(await page.evaluate(async ()=>{
  await document.fonts.ready;
  const ok=document.fonts.check('16px MedievalSharp');
  const applied=getComputedStyle(document.getElementById('age-disp')).fontFamily.includes('MedievalSharp');
  return `V4 font: loaded=${ok} appliedToAge=${applied} ${ok&&applied?'PASS':'FAIL'}`;
}));

// V5: lite mode skips ambient entirely
await page.goto('http://localhost:4268/aoge/?lite', { waitUntil: 'networkidle' });
R.push(await page.evaluate(()=>{
  const skipped=window.__ambient===null;
  return `V5 lite-skip: ambient=null=${skipped} ${skipped?'PASS':'FAIL'}`;
}));

for(const line of R) console.log(line);
console.log(errs.length?'PAGE ERRORS: '+errs.slice(0,3).join(' | '):'no page errors');
await browser.close(); await server.close();
process.exit(R.some(r=>String(r).includes('FAIL'))||errs.length?1:0);
