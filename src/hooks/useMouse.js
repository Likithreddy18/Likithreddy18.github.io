import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Track the normalized mouse position (-1..1 on each axis) in a ref
 * so Three.js can read it without triggering re-renders.
 */
export function useMouse() {
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const targetRef = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const onMove = (e) => {
      targetRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetRef.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    let raf;
    const tick = () => {
      mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * 0.05;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return mouseRef;
}
