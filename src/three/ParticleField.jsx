import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { particleVertex, particleFragment } from './shaders.js';

// Warm palette — reads as "dawn sky" rather than "deep space"
const PALETTE = [
  new THREE.Color('#c4532a'),
  new THREE.Color('#e8a87c'),
  new THREE.Color('#d4a574'),
  new THREE.Color('#8fa68e'),
  new THREE.Color('#b8a89a'),
];

// Generate a soft circular sprite at runtime — no external assets
function makeSprite() {
  const size = 64;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.4, 'rgba(255,255,255,0.6)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

export function ParticleLayer({ count, spread, sizeRange, alpha, zOffset = 0, rotationSpeed = 0.01, scrollRef, mouseRef }) {
  const pointsRef = useRef();
  const materialRef = useRef();

  const sprite = useMemo(() => makeSprite(), []);

  // Build geometry once, memoized on the relevant inputs
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Spherical distribution biased toward edges so the center stays readable
      const r = spread * (0.3 + Math.pow(Math.random(), 0.5) * 0.7);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi) * 0.6;

      const col = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;

      sizes[i] = sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);
      phases[i] = Math.random() * Math.PI * 2;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geo.setAttribute('phase', new THREE.BufferAttribute(phases, 1));
    return geo;
  }, [count, spread, sizeRange]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uScroll: { value: 0 },
      uAlpha: { value: alpha },
      uSprite: { value: sprite },
    }),
    [alpha, sprite]
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTime.value = t;
    if (mouseRef?.current) {
      materialRef.current.uniforms.uMouse.value.copy(mouseRef.current);
    }
    if (scrollRef?.current !== undefined) {
      materialRef.current.uniforms.uScroll.value = scrollRef.current;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.z = t * rotationSpeed;
    }
  });

  return (
    <points ref={pointsRef} position={[0, 0, zOffset]} geometry={geometry}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={particleVertex}
        fragmentShader={particleFragment}
        uniforms={uniforms}
        vertexColors
        transparent
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  );
}

export default function ParticleField({ scrollRef, mouseRef }) {
  // Smooth camera-follow behavior based on mouse
  const sceneRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    if (!mouseRef?.current) return;
    const m = mouseRef.current;
    // Whole-scene parallax tilt based on mouse
    if (sceneRef.current) {
      sceneRef.current.rotation.y += (m.x * 0.08 - sceneRef.current.rotation.y) * 0.05;
      sceneRef.current.rotation.x += (-m.y * 0.05 - sceneRef.current.rotation.x) * 0.05;
    }
    // Gentle camera dolly on scroll
    if (scrollRef?.current !== undefined) {
      const s = scrollRef.current;
      camera.position.z += (140 + s * 0.03 - camera.position.z) * 0.08;
      camera.position.y += (-s * 0.04 - camera.position.y) * 0.08;
    }
  });

  return (
    <group ref={sceneRef}>
      <ParticleLayer
        count={1400}
        spread={250}
        sizeRange={[1.2, 2.2]}
        alpha={0.35}
        zOffset={-40}
        rotationSpeed={0.01}
        scrollRef={scrollRef}
        mouseRef={mouseRef}
      />
      <ParticleLayer
        count={900}
        spread={180}
        sizeRange={[1.8, 3.5]}
        alpha={0.55}
        zOffset={0}
        rotationSpeed={0.015}
        scrollRef={scrollRef}
        mouseRef={mouseRef}
      />
      <ParticleLayer
        count={300}
        spread={120}
        sizeRange={[3.0, 5.5]}
        alpha={0.75}
        zOffset={20}
        rotationSpeed={0.02}
        scrollRef={scrollRef}
        mouseRef={mouseRef}
      />
    </group>
  );
}
