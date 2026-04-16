import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initialise Lenis smooth scroll and sync it with GSAP's ScrollTrigger.
 * Returns a ref holding the current scrollY so Three.js can read it
 * without forcing React re-renders.
 */
export function useSmoothScroll() {
  const scrollRef = useRef(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    lenis.on('scroll', ({ scroll }) => {
      scrollRef.current = scroll;
      ScrollTrigger.update();
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Wire GSAP ticker to Lenis
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return scrollRef;
}
