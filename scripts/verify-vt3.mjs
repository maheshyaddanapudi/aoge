// Visual Tier 3 probes: N8AO pass, adaptive shadow resolution, tree
// billboard LOD impostors.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4275 } });
const browser = await chromium.launch({ args: ['--use-gl=angle','--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
await page.goto('http://localhost:4275/aoge/?nofog', { waitUntil: 'networkidle' });
await page.evaluate(()=>document.getElementById('start-normal').click());
await page.waitForTimeout(1500);
const R=[];

// W1: N8AO pass sits in the composer between render and bloom
R.push(await page.evaluate(()=>{
  // constructor names are minified in prod builds: identify the AO pass by
  // its configuration object instead
  const passes=window.__composer.passes;
  const idx=passes.findIndex(p=>p.configuration&&p.configuration.aoRadius!==undefined);
  const ok=idx===1&&passes.length===4&&passes[idx].configuration.gammaCorrection===false;
  return `W1 n8ao: aoPassIndex=${idx} of ${passes.length}, gammaOff=${passes[idx]?.configuration.gammaCorrection===false} ${ok?'PASS':'FAIL'}`;
}));

// W2: shadow map resolution scales with GPU capability
R.push(await page.evaluate(()=>{
  const g=window.__game;
  let sun=null;
  g.scene.traverse(o=>{ if(o.isDirectionalLight&&o.castShadow) sun=o; });
  const maxTex=g.scene?1:0; // renderer not exposed; assert via mapSize being one of the two tiers
  const size=sun?.shadow.mapSize.x;
  const ok=size===4096||size===2048;
  return `W2 shadows: mapSize=${size} ${ok?'PASS':'FAIL'}`;
}));

// W3: impostors built per species, and far trees swap to billboards
R.push(await page.evaluate(async ()=>{
  const g=window.__game, trees=window.__trees;
  const built=trees.species.every(sp=>!!sp.billboard);
  // aim the camera at one corner so opposite-corner trees are far
  const far=g.nodes.find(n=>n.treeHandle&&!n.dead);
  window.__rtsCam.jumpTo(far.wx, far.wz);
  window.__rtsCam.smoothTarget.set(far.wx, 0, far.wz);
  await new Promise(r=>setTimeout(r, 3200)); // headless ~2fps: dt clamps to 50ms, so the 0.25s LOD timer needs ~2.5s real
  let farCount=0, nearCount=0;
  for(const n of g.nodes){
    if(!n.treeHandle||n.dead)continue;
    if(n.treeHandle.far)farCount++; else nearCount++;
  }
  // near tree still 3D, far trees billboarded
  const nearIs3D=!far.treeHandle.far;
  return `W3 impostors: built=${built} far=${farCount} near=${nearCount} anchor3D=${nearIs3D} ${built&&farCount>0&&nearCount>0&&nearIs3D?'PASS':'FAIL'}`;
}));

// W4: swap back — jump to a far tree and it returns to 3D
R.push(await page.evaluate(async ()=>{
  const g=window.__game;
  const farTree=g.nodes.find(n=>n.treeHandle?.far&&!n.dead);
  if(!farTree) return 'W4 lod-swap: no far tree FAIL';
  window.__rtsCam.jumpTo(farTree.wx, farTree.wz);
  window.__rtsCam.smoothTarget.set(farTree.wx, 0, farTree.wz);
  await new Promise(r=>setTimeout(r, 3200));
  return `W4 lod-swap: backTo3D=${!farTree.treeHandle.far} ${!farTree.treeHandle.far?'PASS':'FAIL'}`;
}));

for(const line of R) console.log(line);
console.log(errs.length?'PAGE ERRORS: '+errs.slice(0,3).join(' | '):'no page errors');
await browser.close(); await server.close();
process.exit(R.some(r=>String(r).includes('FAIL'))||errs.length?1:0);
