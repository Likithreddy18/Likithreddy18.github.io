import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCounter } from '../hooks/useCounter.js';

gsap.registerPlugin(ScrollTrigger);

const LINE_1 = 'I build models';
const LINE_2 = 'that move markets';

function splitLine(text) {
  return [...text].map((ch, i) => (
    <span className="char" key={i}>
      {ch === ' ' ? '\u00A0' : ch}
    </span>
  ));
}

export default function Hero() {
  const headRef = useRef(null);
  const subRef = useRef(null);
  const bottomRef = useRef(null);

  const pctRef = useCounter(30, '%');
  const yrsRef = useCounter(5, '+');
  const rolesRef = useCounter(5, '');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = headRef.current.querySelectorAll('.char');

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.to(chars, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.025,
      })
        .fromTo(
          subRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          '-=0.3'
        )
        .fromTo(
          bottomRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          '-=0.6'
        );

      // Scroll-scrubbed headline: scales slightly and fades out as you leave the hero
      gsap.to(headRef.current, {
        scale: 0.92,
        opacity: 0.25,
        y: -40,
        scrollTrigger: {
          trigger: headRef.current,
          start: 'top top',
          end: '+=600',
          scrub: 0.6,
        },
      });
    }, headRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-masthead">
        <div className="masthead-left">
          <div className="masthead-row">ISSUE N° 01</div>
          <div className="masthead-row">APR 2026</div>
        </div>
        <div className="masthead-right">
          <div className="masthead-row"><span className="status-dot" /> IN AUSTIN, AVAILABLE</div>
          <div className="masthead-row">LIKITH REDDY CHINTALA</div>
        </div>
      </div>

      <h1 className="display" ref={headRef}>
        <span>{splitLine(LINE_1)}</span>
        <br />
        <span className="italic">{splitLine(LINE_2)}</span>
      </h1>

      <p className="hero-sub" ref={subRef} style={{ opacity: 0 }}>
        Data Scientist & AI Researcher building systematic equity models, multi-agent LLM platforms,
        and production ML systems — with a bias toward signals that actually hold up out-of-sample.
      </p>

      <div className="hero-bottom" ref={bottomRef} style={{ opacity: 0 }}>
        <div className="stat">
          <span className="num"><span ref={pctRef}>0%</span></span>
          <span className="caption">Above benchmark</span>
        </div>
        <div className="stat">
          <span className="num"><span ref={yrsRef}>0+</span></span>
          <span className="caption">Years experience</span>
        </div>
        <div className="stat">
          <span className="num"><span ref={rolesRef}>0</span></span>
          <span className="caption">Roles shipped</span>
        </div>
        <a href="#work" className="cta">Explore work <span className="arrow">→</span></a>
      </div>
    </section>
  );
}
