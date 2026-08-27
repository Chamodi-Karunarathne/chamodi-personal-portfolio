export default function ContactSection() {
  return (
    <section className="closing" id="contact" data-section="Commissions">
      <div className="folio" style={{ textAlign: 'left' }}>
        <span className="label label--accent">P. 05</span>
        <h2 className="folio__t">Commissions</h2>
        <span className="label" style={{ color: 'var(--ink-40)' }}>Open</span>
      </div>

      <p className="closing__big rv">
        If you have something that needs <i>building well</i>, I&apos;d like to hear about it.
      </p>

      <div className="reach rv">
        <a href="mailto:hello@chamodi.dev">
          <span className="k">Email</span>
          <span className="v">hello@chamodi.dev ↗</span>
        </a>
        <a href="https://github.com/Chamodi-Karunarathne" target="_blank" rel="noopener noreferrer">
          <span className="k">GitHub</span>
          <span className="v">@Chamodi-Karunarathne ↗</span>
        </a>
        <a href="https://www.linkedin.com/in/chamodi-karunarathne/" target="_blank" rel="noopener noreferrer">
          <span className="k">LinkedIn</span>
          <span className="v">in/chamodi-karunarathne ↗</span>
        </a>
        <a href="/Chamodi_Karunarathne_CV.pdf">
          <span className="k">Curriculum vitae</span>
          <span className="v">PDF, 2026 ↓</span>
        </a>
      </div>
    </section>
  );
}
