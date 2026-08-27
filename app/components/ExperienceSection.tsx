export default function ExperienceSection() {
  return (
    <section className="sec" id="trajectory" data-section="Trajectory">
      <div className="folio">
        <span className="label label--accent">P. 04</span>
        <h2 className="folio__t">Trajectory &amp; <em>honours</em></h2>
        <span className="label" style={{ color: 'var(--ink-40)' }}>2020 — Present</span>
      </div>

      <div className="traj">
        {/* Left column — Education */}
        <div className="rv">
          <div className="blk">
            <h3 className="blk__h">Education</h3>

            <div className="entry">
              <div>
                <h4>BSc (Hons) Information Technology &amp; Management</h4>
                <p>Faculty of IT, University of Moratuwa — CGPA 3.78 / 4.00 · Dean&apos;s List, Semester 01</p>
              </div>
              <span className="when">2024 —</span>
            </div>

            <div className="entry">
              <div>
                <h4>G.C.E. Advanced Level</h4>
                <p>Devi Balika Vidyalaya, Colombo 08 — Commerce, English medium · 3A (Accounting, ICT, English), 1B (Economics)</p>
              </div>
              <span className="when">2020 — 2023</span>
            </div>
          </div>

          <div className="blk">
            <h3 className="blk__h">Certifications</h3>
            <ul className="mini">
              <li>
                <span className="mk">✦</span>
                <div>
                  <strong>BCS Level 4 Certificate in IT</strong>
                  <span>British Computer Society</span>
                </div>
              </li>
              <li>
                <span className="mk">✦</span>
                <div>
                  <strong>Java Programming Certification</strong>
                  <span>SLIIT</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right column — Community & Leadership */}
        <div className="rv">
          <div className="blk">
            <h3 className="blk__h">Community &amp; leadership</h3>
            <ul className="mini">
              <li>
                <span className="mk">✦</span>
                <div>
                  <strong>Hackelite 2.0 · Finance Lead</strong>
                  <span>IEEE WIE Student Branch Affinity Group, UoM</span>
                </div>
              </li>
              <li>
                <span className="mk">✦</span>
                <div>
                  <strong>AGM 2025 · Logistics Lead</strong>
                  <span>IEEE Professional Communication Society</span>
                </div>
              </li>
              <li>
                <span className="mk">✦</span>
                <div>
                  <strong>Road to Legacy 2.0 · Programme Committee</strong>
                  <span>IEEE, University of Sri Jayewardenepura</span>
                </div>
              </li>
              <li>
                <span className="mk">✦</span>
                <div>
                  <strong>Binara Padura 2.0 · Finance Committee</strong>
                  <span>Rotaract Club, University of Moratuwa</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
