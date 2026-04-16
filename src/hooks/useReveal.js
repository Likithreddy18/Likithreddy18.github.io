import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade + rise reveal on scroll-into-view.
 * Set `stagger` > 0 to cascade children.
 */
export function useReveal({ stagger = 0, childSelector = '> *' } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger > 0 ? el.querySelectorAll(childSelector) : [el];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: stagger || 0,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [stagger, childSelector]);

  return ref;
}
