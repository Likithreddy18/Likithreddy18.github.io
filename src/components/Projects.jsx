import { useReveal } from '../hooks/useReveal.js';
import { projects } from '../data/projects.js';

function ProjectCard({ num, title, desc, tags, href }) {
  // Track mouse inside card for the radial glow
  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--mx', `${x}%`);
    e.currentTarget.style.setProperty('--my', `${y}%`);
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="project" onMouseMove={onMove}>
      <div>
        <div className="project-num">{num}</div>
        <h3>{title}</h3>
        <p className="project-desc">{desc}</p>
      </div>
      <div className="project-foot">
        <div className="project-tags">
          {tags.map((t, i) => <span key={i}>{t}</span>)}
        </div>
        <span className="project-link">View →</span>
      </div>
    </a>
  );
}

export default function Projects() {
  const labelRef = useReveal();
  const headRef = useReveal();
  const gridRef = useReveal({ stagger: 0.08, childSelector: '.project' });
  const footerRef = useReveal();

  return (
    <section id="projects">
      <div className="label" ref={labelRef}>Featured projects / things I built out of curiosity</div>
      <div className="section-head" ref={headRef}>
        <h2 className="section-title">
          Experiments & <span className="italic">side quests.</span>
        </h2>
        <p className="section-meta">
          Research papers, optimization problems, and teaching resources — hand-picked from the repo archive.
        </p>
      </div>

      <div className="projects-grid" ref={gridRef}>
        {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
      </div>

      <div className="all-repos" ref={footerRef}>
        <a
          href="https://github.com/Likithreddy18?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="cta"
        >
          Browse all repos <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
}
