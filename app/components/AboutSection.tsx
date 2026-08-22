export default function AboutSection() {
  return (
    <section id="about" className="section container">
      <div className="grid grid-cols-2 gap-8" style={{ border: '1px solid var(--border-subtle)', padding: '3rem' }}>
        <div>
          <h2 className="text-xl text-gold mb-6" style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem' }}>About Me</h2>
          <p className="mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
            Information Technology and Management undergraduate at the University of Moratuwa, focused on full-stack engineering and systems design using Java, Next.js, React.
          </p>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            With a refined eye for detail and a passion for building robust backend logic, I craft timeless aesthetics that elevate brands and leave a lasting impression. Balancing strong academic principles with hands-on experience in requirements engineering and IoT frameworks.
          </p>
          <div className="mt-8">
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontStyle: 'italic', color: 'var(--gold)' }}>
              Chamodi Karunarathne
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-8 pl-8" style={{ borderLeft: '1px solid var(--border-subtle)' }}>
          <div>
            <h3 className="text-xl text-primary mb-2" style={{ fontSize: '1.2rem' }}>BSc. (Hons) Information Technology & Management</h3>
            <p className="text-gold text-sm mb-2" style={{ letterSpacing: '0.1em' }}>Faculty of IT, University of Moratuwa | 2024 – Present</p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              CGPA: 3.78 / 4.00<br/>
              Academic Honors: Dean's List for Semester 01
            </p>
          </div>
          <div>
            <h3 className="text-xl text-primary mb-2" style={{ fontSize: '1.2rem' }}>G.C.E. Advanced Level</h3>
            <p className="text-gold text-sm mb-2" style={{ letterSpacing: '0.1em' }}>Devi Balika Vidyalaya, Colombo 08 | 2020 – 2023</p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Commerce Stream (English Medium)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
