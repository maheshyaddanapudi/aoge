// Renderer, scene, lights and shadow rig.

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { WORLD } from '../config.js';
import { skyGradient } from './textures.js';

export function createScene(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.22;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x9ec8e8);
  scene.fog = new THREE.Fog(0xb9d4e4, 170, 430);

  const camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 1, 1200);

  // Sky dome
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(520, 24, 12),
    new THREE.MeshBasicMaterial({ map: skyGradient(), side: THREE.BackSide, fog: false, depthWrite: false })
  );
  sky.position.set(WORLD / 2, -40, WORLD / 2);
  sky.renderOrder = -10;
  scene.add(sky);

  // Lighting: warm sun + cool sky fill.
  const hemi = new THREE.HemisphereLight(0xcfe5f5, 0x8a7a55, 0.85);
  scene.add(hemi);

  const sun = new THREE.DirectionalLight(0xfff2d8, 2.0);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.bias = -0.0008;
  sun.shadow.normalBias = 0.04;
  const SH = 65;
  sun.shadow.camera.left = -SH;
  sun.shadow.camera.right = SH;
  sun.shadow.camera.top = SH;
  sun.shadow.camera.bottom = -SH;
  sun.shadow.camera.near = 10;
  sun.shadow.camera.far = 260;
  scene.add(sun);
  scene.add(sun.target);

  const sunDir = new THREE.Vector3(-0.55, 1.0, 0.35).normalize();

  // Keep the shadow camera centered on the view target so shadows stay crisp.
  function updateSun(focus) {
    sun.target.position.copy(focus);
    sun.position.copy(focus).addScaledVector(sunDir, 110);
  }
  updateSun(new THREE.Vector3(WORLD / 2, 0, WORLD / 2));

  // Post-processing: multisampled render + subtle bloom.
  const target = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, {
    samples: 4,
    type: THREE.HalfFloatType,
  });
  const composer = new EffectComposer(renderer, target);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight), 0.22, 0.55, 0.82);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
  });

  return { renderer, scene, camera, updateSun, composer };
}
