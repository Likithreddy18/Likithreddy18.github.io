import { useReveal } from '../hooks/useReveal.js';
import { experience } from '../data/experience.js';

export default function Work() {
  const labelRef = useReveal();
  const headRef = useReveal();
  const listRef = useReveal({ stagger: 0.08, childSelector: '.exp-item' });

  return (
    <section id="work">
      <div className="label" ref={labelRef}>Selected roles / 2021 – now</div>
      <div className="section-head" ref={headRef}>
        <h2 className="section-title">
          Building things <br />
          <span className="italic">in production.</span>
        </h2>
        <p className="section-meta">
          Five roles across quant research, AI engineering, and analytics consulting — spanning
          systematic trading, multi-agent LLM systems, and cloud-native ML infrastructure.
        </p>
      </div>

      <div className="exp-list" ref={listRef}>
        {experience.map((item, i) => (
          <div className="exp-item" key={i}>
            <div className="exp-date">
              {item.isNow && <span className="now-badge">NOW</span>}
              {item.date}
            </div>
            <div className="exp-content">
              <h3 className="exp-role">{item.role}</h3>
              <div className="exp-company">{item.company}</div>
              <p className="exp-desc">{item.desc}</p>
              <div className="exp-tags">
                {item.tags.map((t, j) => <span key={j}>{t}</span>)}
              </div>
            </div>
            <div className="exp-arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}
