export default function CoverSection() {
  return (
    <section className="cover" data-section="The Cover">
      <div className="cover__meta">
        <span className="label label--ink">Vol. 01</span>
        <span className="label">Software Engineering</span>
        <span className="label">Colombo, Sri Lanka</span>
        <span className="label label--accent">Open to internships</span>
        <span className="label" style={{ marginLeft: 'auto' }}>MMXXVI</span>
      </div>

      <h1 className="nameplate">
        <span className="l"><span>Chamodi</span></span>
        <span className="l"><span>Karunarathne</span></span>
      </h1>
      <hr className="hair cover__hair" />

      <div className="cover__body">
        <nav className="lines cover__lines" aria-label="In this issue">
          <a href="#about">
            <span className="t">About <i>me</i></span>
            <span className="p">P. 01</span>
          </a>
          <a href="#practice">
            <span className="t">Skills</span>
            <span className="p">P. 02</span>
          </a>
          <a href="#works">
            <span className="t">Selected <i>projects</i></span>
            <span className="p">P. 03</span>
          </a>
          <a href="#trajectory">
            <span className="t">Trajectory &amp; honours</span>
            <span className="p">P. 04</span>
          </a>
          <a href="#contact">
            <span className="t">Contact</span>
            <span className="p">P. 05</span>
          </a>
        </nav>

        <figure className="fig cover__portrait">
          <img src="/my-pic.jpg" alt="Portrait of Chamodi Karunarathne" />
          <div className="fig__fb">Portrait — image not loaded</div>
        </figure>

        <div className="cover__aside">
          <div>
            <p className="deck">
              "I'm a Software Engineering Intern specializing in full-stack engineering and <i>digital experiences </i>that embody elegance, robust logic, and intention."
            </p>
            <p className="sub">
              A third-year Information Technology & Management undergraduate at the University of Moratuwa.
            </p>
          </div>
          <div className="acts">
            <a className="icon-btn" href="mailto:chamokarunarathne27@gmail.com" title="Email" aria-label="Email Chamodi">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
            <a className="icon-btn" href="https://github.com/Chamodi-Karunarathne" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub Profile">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>
            <a className="icon-btn" href="https://www.linkedin.com/in/chamodikaru" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn Profile">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a className="icon-btn" href="/Chamodi_CV.pdf" target="_blank" rel="noopener noreferrer" title="Curriculum Vitae" aria-label="Download Curriculum Vitae">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
