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
        <a href="mailto:chamokarunarathne27@gmail.com">
          <span className="k">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            Email
          </span>
          <span className="v">
            <span className="v__text">chamokarunarathne27@gmail.com</span>
            <span className="v__arr">↗</span>
          </span>
        </a>

        <a href="https://github.com/Chamodi-Karunarathne" target="_blank" rel="noopener noreferrer">
          <span className="k">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
            GitHub
          </span>
          <span className="v">
            <span className="v__text">@Chamodi-Karunarathne</span>
            <span className="v__arr">↗</span>
          </span>
        </a>

        <a href="https://www.linkedin.com/in/chamodikaru" target="_blank" rel="noopener noreferrer">
          <span className="k">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </span>
          <span className="v">
            <span className="v__text">in/chamodikaru</span>
            <span className="v__arr">↗</span>
          </span>
        </a>

        <a href="tel:+94764890904">
          <span className="k">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Mobile
          </span>
          <span className="v">
            <span className="v__text">+94 76 489 0904</span>
            <span className="v__arr">↗</span>
          </span>
        </a>

        <a href="/Chamodi_Karunarathne_CV.pdf" target="_blank" rel="noopener noreferrer">
          <span className="k">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
            Curriculum vitae
          </span>
          <span className="v">
            <span className="v__text">PDF, 2026</span>
            <span className="v__arr v__arr--down">↓</span>
          </span>
        </a>
      </div>
    </section>
  );
}
