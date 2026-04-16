import { Canvas } from '@react-three/fiber';
import ParticleField from './ParticleField.jsx';

// Inline styles beat R3F's own inline defaults.
// Without this, R3F applies `position: relative` and the canvas scrolls
// with the document instead of staying fixed to the viewport.
const CANVAS_STYLE = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 0,
  pointerEvents: 'none',
};

export default function Scene({ scrollRef, mouseRef }) {
  return (
    <Canvas
      style={CANVAS_STYLE}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 140], fov: 60, near: 0.1, far: 2000 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ParticleField scrollRef={scrollRef} mouseRef={mouseRef} />
    </Canvas>
  );
}