export default function AboutSection() {
  return (
    <section className="section container">
      <h2 className="section-title">01. About Me & Education</h2>
      <div className="grid grid-cols-2 gap-8">
        <div className="glass-card">
          <h3 className="text-xl text-purple mb-4">SYSTEM_PROFILE</h3>
          <p className="mb-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
            Information Technology and Management undergraduate at the University of Moratuwa, focused on full-stack engineering and systems design using Java, Next.js, React.
          </p>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Passionate about blending robust backend logic with creative, high-end UI/UX prototyping. Balancing strong academic principles with hands-on experience in requirements engineering and IoT frameworks to build highly optimized, out-of-the-box digital solutions.
          </p>
        </div>

        <div className="glass-card flex flex-col gap-6">
          <div>
            <h3 className="text-xl text-purple mb-2">BSc. (Hons) Information Technology & Management</h3>
            <p className="text-cyan font-bold text-sm">Faculty of IT, University of Moratuwa | 2024 – Present</p>
            <ul className="text-sm mt-2" style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
              <li>&gt; CGPA: 3.78 / 4.00</li>
              <li>&gt; Academic Honors: Included in the Dean's List for Semester 01</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-purple mb-2">G.C.E. Advanced Level</h3>
            <p className="text-cyan font-bold text-sm">Devi Balika Vidyalaya, Colombo 08 | 2020 – 2023</p>
            <ul className="text-sm mt-2" style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
              <li>&gt; Commerce Stream (English Medium)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
