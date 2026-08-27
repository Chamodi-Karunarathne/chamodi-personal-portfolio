const categories = [
  { num: 'I', name: 'Languages', chips: ['TypeScript', 'JavaScript', 'Java', 'C', 'C++', 'SQL', 'Python'] },
  { num: 'II', name: 'Frameworks', chips: ['Next.js', 'React', 'Node.js', 'REST APIs', 'Tailwind CSS'] },
  { num: 'III', name: 'Data', chips: ['PostgreSQL', 'MySQL', 'Drizzle ORM', 'Firebase', 'Neon'] },
  { num: 'IV', name: 'Operations', chips: ['Git', 'GitHub', 'Docker', 'Vercel', 'Expo'] },
  { num: 'V', name: 'Hardware', chips: ['ESP32', 'Arduino', 'PCB Design', 'EasyEDA'] },
];

export default function SkillsSection() {
  return (
    <section className="sec" id="practice" data-section="Index of Practice">
      <div className="folio">
        <span className="label label--accent">P. 02</span>
        <h2 className="folio__t">Index of <em>practice</em></h2>
        <span className="label" style={{ color: 'var(--ink-40)' }}>Five parts</span>
      </div>

      <div className="practice rv">
        {categories.map((cat) => (
          <div className="practice__row" key={cat.num}>
            <span className="practice__num">{cat.num}</span>
            <h3 className="practice__cat">{cat.name}</h3>
            <div className="chips">
              {cat.chips.map((chip) => (
                <span className="chip" key={chip}>{chip}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
