export default function ExperienceSection() {
  return (
    <section className="section container">
      <h2 className="section-title">03. Professional Trajectory</h2>
      
      <div className="grid grid-cols-2 gap-8">
        {/* Experience & Certificates */}
        <div className="flex flex-col gap-6">
          <div className="glass-card">
            <h3 className="text-2xl text-cyan mb-6" style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
              Experience
            </h3>
            
            <div className="mb-6">
              <h4 className="text-lg text-purple font-bold">IoT & Embedded Systems Labs (IES Labs)</h4>
              <p className="text-cyan text-sm mb-2">Software Developer | 09/2025 – Present</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>&gt; Electronic Team Member</p>
            </div>
            
            <div>
              <h4 className="text-lg text-purple font-bold">ICTBUS Institute</h4>
              <p className="text-cyan text-sm mb-2">Academic Instructor | 01/2025 – 01/2026</p>
            </div>
          </div>

          <div className="glass-card">
            <h3 className="text-2xl text-cyan mb-6" style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
              Certificates
            </h3>
            <ul className="text-sm flex flex-col gap-3" style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
              <li><span className="text-purple font-bold">BCS Level 4 Certificate in IT</span></li>
              <li><span className="text-purple font-bold">Java Programming Certification</span> - SLIIT</li>
            </ul>
          </div>
        </div>

        {/* Community and Leadership */}
        <div className="glass-card">
          <h3 className="text-2xl text-cyan mb-6" style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
            Community & Leadership
          </h3>
          
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-lg text-purple font-bold">Hackelite 2.0</h4>
              <p className="text-cyan text-sm mb-1">IEEE WIE Student Branch Affinity Group of UOM</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>&gt; Lead - Finance Committee</p>
            </div>
            
            <div>
              <h4 className="text-lg text-purple font-bold">Annual General Meeting 2025</h4>
              <p className="text-cyan text-sm mb-1">IEEE Professional Communication Society</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>&gt; Lead - Logistics Handling</p>
            </div>

            <div>
              <h4 className="text-lg text-purple font-bold">Road to Legacy 2.0</h4>
              <p className="text-cyan text-sm mb-1">IIEE of USJ</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>&gt; Member - Program Committee</p>
            </div>

            <div>
              <h4 className="text-lg text-purple font-bold">Binara Padura 2.0</h4>
              <p className="text-cyan text-sm mb-1">Rotaract Club of University of Moratuwa</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>&gt; Member - Finance Committee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
