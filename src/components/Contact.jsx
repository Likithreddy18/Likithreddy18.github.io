import { useReveal } from '../hooks/useReveal.js';

const LINKS = [
  { label: 'chlikith@utexas.edu', href: 'mailto:chlikith@utexas.edu', arrow: '→', external: false },
  { label: '+1 737 328 2796', href: 'tel:+17373282796', arrow: '→', external: false },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/likith-reddy-chintala/', arrow: '↗', external: true },
  { label: 'GitHub', href: 'https://github.com/Likithreddy18', arrow: '↗', external: true },
];

const INFO = [
  { k: 'Based in', v: 'Austin, TX · Open to relocation' },
  { k: 'Seeking', v: 'Quant research · Applied ML · AI engineering roles' },
  { k: 'Response time', v: 'Usually within 24 hrs' },
];

export default function Contact() {
  const labelRef = useReveal();
  const titleRef = useReveal();
  const linksRef = useReveal();
  const infoRef = useReveal();

  return (
    <section className="contact" id="contact">
      <div className="label" ref={labelRef}>Get in touch / open to opportunities</div>

      <h2 className="contact-title" ref={titleRef}>
        Let's <span className="italic">talk.</span>
      </h2>

      <div className="contact-grid">
        <div className="contact-links" ref={linksRef}>
          {LINKS.map((l, i) => (
            <a
              key={i}
              href={l.href}
              {...(l.external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {l.label} <span className="arrow">{l.arrow}</span>
            </a>
          ))}
        </div>

        <div className="contact-info" ref={infoRef}>
          {INFO.map((item, i) => (
            <div key={i}>
              <span className="k">{item.k}</span>
              {item.v}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
