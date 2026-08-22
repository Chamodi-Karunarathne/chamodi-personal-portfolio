export default function ExperienceSection() {
  return (
    <section id="work" className="section container">
      <h2 className="section-title">Professional Trajectory</h2>
      
      <div className="grid grid-cols-2 gap-8">
        {/* Experience & Certificates */}
        <div className="flex flex-col gap-8" style={{ borderRight: '1px solid var(--border-subtle)', paddingRight: '2rem' }}>
          <div>
            <h3 className="text-xl text-gold mb-6" style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem' }}>
              Experience
            </h3>
            
            <div className="mb-6">
              <h4 className="text-primary font-bold" style={{ fontSize: '1.2rem' }}>IoT & Embedded Systems Labs (IES Labs)</h4>
              <p className="text-gold text-sm mb-2" style={{ letterSpacing: '0.1em' }}>Software Developer | 09/2025 – Present</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Electronic Team Member</p>
            </div>
            
            <div>
              <h4 className="text-primary font-bold" style={{ fontSize: '1.2rem' }}>ICTBUS Institute</h4>
              <p className="text-gold text-sm mb-2" style={{ letterSpacing: '0.1em' }}>Academic Instructor | 01/2025 – 01/2026</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl text-gold mb-6" style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem' }}>
              Certificates
            </h3>
            <ul className="text-sm flex flex-col gap-3" style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--gold)' }}>✦</span>
                <span className="text-primary">BCS Level 4 Certificate in IT</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--gold)' }}>✦</span>
                <span className="text-primary">Java Programming Certification</span> - SLIIT
              </li>
            </ul>
          </div>
        </div>

        {/* Community and Leadership */}
        <div style={{ paddingLeft: '2rem' }}>
          <h3 className="text-xl text-gold mb-6" style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem' }}>
            Community & Leadership
          </h3>
          
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="text-primary font-bold" style={{ fontSize: '1.2rem' }}>Hackelite 2.0</h4>
              <p className="text-gold text-sm mb-1" style={{ letterSpacing: '0.1em' }}>IEEE WIE Student Branch Affinity Group of UOM</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Lead - Finance Committee</p>
            </div>
            
            <div>
              <h4 className="text-primary font-bold" style={{ fontSize: '1.2rem' }}>Annual General Meeting 2025</h4>
              <p className="text-gold text-sm mb-1" style={{ letterSpacing: '0.1em' }}>IEEE Professional Communication Society</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Lead - Logistics Handling</p>
            </div>

            <div>
              <h4 className="text-primary font-bold" style={{ fontSize: '1.2rem' }}>Road to Legacy 2.0</h4>
              <p className="text-gold text-sm mb-1" style={{ letterSpacing: '0.1em' }}>IIEE of USJ</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Member - Program Committee</p>
            </div>

            <div>
              <h4 className="text-primary font-bold" style={{ fontSize: '1.2rem' }}>Binara Padura 2.0</h4>
              <p className="text-gold text-sm mb-1" style={{ letterSpacing: '0.1em' }}>Rotaract Club of University of Moratuwa</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Member - Finance Committee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
