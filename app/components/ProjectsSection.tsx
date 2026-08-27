const works = [
  {
    id: 'w1',
    num: '01',
    label: 'Enterprise · In progress',
    title: <>Enterprise IT <i>Asset</i> Management System</>,
    deck: 'A scalable asset registry with real-time synchronisation, automated PDF generation, and role-based access control — rebuilt on a modular architecture after the first pass outgrew its own structure.',
    meta: [
      { dt: 'Period', dd: '11/2025 — Present' },
      { dt: 'Role', dd: 'Full-Stack Developer' },
      { dt: 'Context', dd: 'External client · Agile' },
    ],
    chips: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Drizzle'],
    figures: [{ src: '/ITAMS.png', alt: 'EITAMS dashboard interface', fb: 'Plate 01 — image not loaded' }],
    caption: 'Plate 01 — Asset registry, dashboard view',
    twoUp: false,
  },
  {
    id: 'w2',
    num: '02',
    label: 'Hardware & software',
    title: <>Skyforge <i>Environmental</i> Monitoring Drone</>,
    deck: 'A custom sensor board feeding a live telemetry dashboard. I designed the PCB, then built the visualisation layer that reads it — air quality and environmental data plotted in real time as the drone flies.',
    meta: [
      { dt: 'Period', dd: '12/2024 — 08/2025' },
      { dt: 'Role', dd: 'PCB Designer · Frontend' },
      { dt: 'Context', dd: 'IES Labs' },
    ],
    chips: ['React', 'TypeScript', 'Firebase', 'Recharts', 'ESP32', 'EasyEDA'],
    figures: [
      { src: '/skyforge.png', alt: 'Skyforge telemetry dashboard', fb: 'Plate 02.a' },
      { src: '/skyforge1.jpeg', alt: 'Skyforge drone and sensor board', fb: 'Plate 02.b' },
    ],
    caption: null,
    twoUp: true,
  },
  {
    id: 'w3',
    num: '03',
    label: 'Full-stack',
    title: <>BlogCave <i>Publishing</i> Platform</>,
    deck: 'A content platform with role-based authorisation, media upload handling, and a relational schema tuned for read-heavy traffic. Built without a framework, which made every query decision visible.',
    meta: [
      { dt: 'Period', dd: '09/2025 — 11/2025' },
      { dt: 'Role', dd: 'Full-Stack Developer' },
      { dt: 'Context', dd: 'Coursework' },
    ],
    chips: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'XAMPP'],
    figures: [{ src: '/blogcave.png', alt: 'BlogCave publishing interface', fb: 'Plate 03 — image not loaded' }],
    caption: 'Plate 03 — Editor and post management',
    twoUp: false,
  },
  {
    id: 'w4',
    num: '04',
    label: 'Desktop',
    title: <>Woof <i>Pet Adoption</i> System</>,
    deck: 'A desktop management system with secure authentication, end-to-end CRUD, automated PDF reporting, and multi-language support through i18n. The first project I built where someone other than me had to use it.',
    meta: [
      { dt: 'Period', dd: '10/2023 — 04/2024' },
      { dt: 'Role', dd: 'Software Developer' },
      { dt: 'Context', dd: 'Java desktop' },
    ],
    chips: ['Java', 'Swing', 'AWT', 'MySQL', 'JDBC', 'i18n'],
    figures: [{ src: '/woof.png', alt: 'Woof pet adoption desktop application', fb: 'Plate 04 — image not loaded' }],
    caption: 'Plate 04 — Main application window',
    twoUp: false,
  },
];

const contentsData = [
  { href: '#w1', n: '01', t: 'Enterprise IT Asset Management', s: 'Full-stack · Ongoing' },
  { href: '#w2', n: '02', t: 'Skyforge Monitoring Drone', s: 'Hardware + software' },
  { href: '#w3', n: '03', t: 'BlogCave Platform', s: 'Full-stack' },
  { href: '#w4', n: '04', t: 'Woof Adoption System', s: 'Java desktop' },
];

export default function ProjectsSection() {
  return (
    <section className="sec" id="works" data-section="Selected Works">
      <div className="folio">
        <span className="label label--accent">P. 03</span>
        <h2 className="folio__t">Selected <em>works</em></h2>
        <span className="label" style={{ color: 'var(--ink-40)' }}>2023 — Present</span>
      </div>

      {/* Contents strip */}
      <nav className="contents rv" aria-label="Works contents">
        {contentsData.map((c) => (
          <a href={c.href} key={c.href}>
            <span className="n">{c.n}</span>
            <span className="t">{c.t}</span>
            <span className="s">{c.s}</span>
          </a>
        ))}
      </nav>

      {/* Spreads */}
      {works.map((w) => (
        <article className="spread rv" id={w.id} key={w.id}>
          <div>
            <span className="spread__num">{w.num}</span>
            <span className="label label--accent">{w.label}</span>
            <h3 className="spread__title">{w.title}</h3>
            <p className="spread__deck">{w.deck}</p>
            <dl className="meta">
              {w.meta.map((m) => (
                <div key={m.dt}>
                  <dt>{m.dt}</dt>
                  <dd>{m.dd}</dd>
                </div>
              ))}
            </dl>
            <div className="chips">
              {w.chips.map((chip) => (
                <span className="chip" key={chip}>{chip}</span>
              ))}
            </div>
          </div>
          <div className={`spread__figs${w.twoUp ? ' two' : ''}`}>
            {w.figures.map((fig) => (
              <figure className="fig" key={fig.src}>
                <img src={fig.src} alt={fig.alt} loading="lazy" />
                <div className="fig__fb">{fig.fb}</div>
              </figure>
            ))}
            {w.caption && (
              <figcaption className="label" style={{ color: 'var(--ink-40)' }}>
                {w.caption}
              </figcaption>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
