export default function ContactSection() {
  return (
    <section className="closing" id="contact" data-section="Contact">
      <div className="folio" style={{ textAlign: 'left' }}>
        <span className="label label--accent">P. 05</span>
        <h2 className="folio__t">Contact</h2>
        <span className="label" style={{ color: 'var(--ink-40)' }}>Open</span>
      </div>

      <p className="closing__big rv">
        If you have something that needs <i>building well</i>, I&apos;d like to hear about it.
      </p>

      <div className="reach rv">
        <a href="https://www.linkedin.com/in/chamodikaru" target="_blank" rel="noopener noreferrer">
          <span className="k">LinkedIn</span>
          <span className="v">in/chamodikaru ↗</span>
        </a>
        <a href="mailto:chamokarunarathne27@gmail.com">
          <span className="k">Email</span>
          <span className="v">chamokarunarathne27@gmail.com ↗</span>
        </a>
        <a href="https://github.com/Chamodi-Karunarathne" target="_blank" rel="noopener noreferrer">
          <span className="k">GitHub</span>
          <span className="v">@Chamodi-Karunarathne ↗</span>
        </a>
      </div>
    </section>
  );
}
