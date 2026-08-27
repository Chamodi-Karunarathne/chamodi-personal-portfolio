export default function AboutSection() {
  return (
    <section className="sec" id="about" data-section="A Note on Method">
      <div className="folio">
        <span className="label label--accent">P. 01</span>
        <h2 className="folio__t">A note on <em>method</em></h2>
        <span className="label" style={{ color: 'var(--ink-40)' }}>Essay</span>
      </div>

      <div className="feature">
        <aside className="note rv">
          <b>At a glance</b>
          BSc (Hons) Information Technology &amp; Management, University of Moratuwa. CGPA 3.78 of 4.00. Dean&apos;s List, Semester 01. Currently with the electronic team at IES Labs.
        </aside>

        <div>
          <h3 className="headline rv">Good software is mostly <i>unglamorous</i> decisions, made early.</h3>
          <div className="cols rv">
            <p>
              I build the parts nobody photographs — the schema, the auth layer, the role model — and then make the surface above them feel considered. Most of my work sits at the seam between backend logic and interface, which is also where things tend to break.
            </p>
            <p>
              At <b>IES Labs</b> I work on IoT and embedded systems alongside the electronic team, so a project rarely stops at the API. On Skyforge I designed the sensor PCB in EasyEDA and then wrote the dashboard that read from it — the same data followed end to end, from a trace on a board to a chart in a browser. Knowing what the sensor actually does changes how you write the code that receives it.
            </p>
            <p>
              I also teach. A year instructing at <b>ICTBUS Institute</b> did more for how I write documentation and name variables than any style guide. If a first-year can follow it, a reviewer can too.
            </p>
            <p>
              Right now I&apos;m building an enterprise asset management system with an external client, and looking for a <b>software engineering internship</b> where the hardware and the software are both on the table.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
