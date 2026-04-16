import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Animate a number from 0 → target when the element scrolls into view.
 */
export function useCounter(target, suffix = '') {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: target,
        duration: 1.6,
        ease: 'expo.out',
        onUpdate: () => {
          el.textContent = Math.floor(obj.val) + suffix;
        },
        onComplete: () => {
          el.textContent = target + suffix;
        },
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, el);

    return () => ctx.revert();
  }, [target, suffix]);

  return ref;
}
