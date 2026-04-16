import { useReveal } from '../hooks/useReveal.js';

const EDU = [
  {
    year: '2023—25',
    deg: 'M.S. Operations Research',
    school: 'UT Austin · Data Analytics Track',
  },
  {
    year: '2017—21',
    deg: 'B.Tech Mechanical Engineering',
    school: 'NIT Calicut',
  },
];

export default function About() {
  const labelRef = useReveal();
  const leftRef = useReveal();
  const eduRef = useReveal();

  return (
    <section id="about">
      <div className="label" ref={labelRef}>About / context</div>

      <div className="about-grid">
        <div ref={leftRef}>
          <p className="about-lead">
            I sit at the intersection of <span className="italic">quantitative research</span> and{' '}
            <span className="italic">production ML</span> — building systematic equity models with
            leak-free backtests, shipping multi-agent LLM platforms, and migrating legacy data
            systems to cloud-native architectures.
          </p>
          <div className="about-body">
            <p>
              When I'm not training models, I'm partnering with leadership to make sure only
              validated signals ever reach production — the kind of work where the difference
              between a 0.8 Sharpe and a 1.4 Sharpe is almost entirely about what you catch before
              it ships.
            </p>
            <p>
              I care about statistical rigor, reproducible pipelines, and the boring infrastructure
              work that makes everything else possible.
            </p>
          </div>
        </div>

        <div className="edu-list" ref={eduRef}>
          {EDU.map((e, i) => (
            <div className="edu-item" key={i}>
              <div className="edu-year">{e.year}</div>
              <div>
                <div className="edu-deg">{e.deg}</div>
                <div className="edu-school">{e.school}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
