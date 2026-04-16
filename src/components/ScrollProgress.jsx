import { useEffect, useRef } from 'react';

/**
 * A thin scroll-progress bar pinned to the top of the viewport.
 * Reads a scroll ref (populated by Lenis) on each frame and writes
 * width directly — no React state, no re-renders.
 */
export default function ScrollProgress({ scrollRef }) {
  const barRef = useRef(null);

  useEffect(() => {
    let raf;
    const tick = () => {
      const bar = barRef.current;
      if (bar) {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        const s = scrollRef?.current ?? window.scrollY;
        const pct = max > 0 ? (s / max) * 100 : 0;
        bar.style.width = `${pct}%`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [scrollRef]);

  return <div className="progress" ref={barRef} />;
}
