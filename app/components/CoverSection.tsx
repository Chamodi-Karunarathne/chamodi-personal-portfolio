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
            <span className="t">A note on <i>method</i></span>
            <span className="p">P. 01</span>
          </a>
          <a href="#practice">
            <span className="t">Index of practice</span>
            <span className="p">P. 02</span>
          </a>
          <a href="#works">
            <span className="t">Selected <i>works</i></span>
            <span className="p">P. 03</span>
          </a>
          <a href="#trajectory">
            <span className="t">Trajectory &amp; honours</span>
            <span className="p">P. 04</span>
          </a>
          <a href="#contact">
            <span className="t">Commissions</span>
            <span className="p">P. 05</span>
          </a>
        </nav>

        <figure className="fig cover__portrait">
          <img src="/me wso2.jpg" alt="Portrait of Chamodi Karunarathne" />
          <div className="fig__fb">Portrait — image not loaded</div>
        </figure>

        <div className="cover__aside">
          <div>
            <p className="deck">
              I'm a Software Engineering Intern specializing in full-stack engineering and <i>digital experiences </i>that embody elegance, robust logic, and intention.
            </p>
            <p className="sub">
              A second-year Information Technology & Management undergraduate at the University of Moratuwa.
            </p>
          </div>
          <div className="acts">
            <a className="btn" href="#works">Selected works <span aria-hidden="true">→</span></a>
            <a className="btn" href="/Chamodi_Karunarathne_CV.pdf">Curriculum vitae <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
