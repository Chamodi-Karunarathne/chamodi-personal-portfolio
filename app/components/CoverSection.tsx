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
            <span className="t">Four selected <i>works</i></span>
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
          <img src="/my_pic.png" alt="Portrait of Chamodi Karunarathne" />
          <div className="fig__fb">Portrait — image not loaded</div>
        </figure>

        <div className="cover__aside">
          <div>
            <p className="deck">
              Full-stack engineer working across enterprise asset registries, real-time telemetry, and the <i>sensor hardware</i> underneath them.
            </p>
            <p className="sub">
              Java and Next.js on one side. ESP32 and a soldering iron on the other. Second-year Information Technology &amp; Management at the University of Moratuwa.
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
