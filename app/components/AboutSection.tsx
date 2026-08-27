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
          BSc. (Hons) Information Technology &amp; Management<br />
          Faculty of IT, University of Moratuwa<br />
          <i>&bull; CGPA: 3.78 / 4.00</i><br />
          <i>&bull; Academic Honors: Included in the Dean&apos;s List for Semester 01</i>
          <br /><br />
          G.C.E. Advanced Level, Devi Balika Vidyalaya, Colombo 08<br />
          <i>&bull; 2022(2023) - Commerce Stream (English Medium)</i><br />
          <i>&bull;3A passes (Accounting, ICT and English)</i><br />
<i>&bull;1B pass (Economics)</i>
        </aside>

        <div>
          <h3 className="headline rv">"I'm Chamodi , I decode complexity and curate <i>creativity</i>."</h3>
          <div className="cols rv">
            <p>
              I bridge robust technical systems with fluid digital design. By combining core languages like <b>TypeScript</b>, <b>Java</b>, and <b>Next.js</b> with structured systems architecture, I simplify complex data handling&mdash;from relational schemas and role-based auth layers down to hardware-software integration.
            </p>
            <p>
              Whether building <b>scalable enterprise platforms</b> or <b>transforming hardware data into intuitive web dashboards</b>, I focus on clean execution and high-end UI/UX prototyping to turn intricate technical challenges into engaging, user-focused digital products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
