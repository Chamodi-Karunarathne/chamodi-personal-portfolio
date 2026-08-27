export default function Colophon() {
  return (
    <footer className="colophon">
      <div>
        <span className="k">Colophon</span>
        <p>Set in Instrument Serif, Source Serif 4, and Jost. Composed and built in Colombo, Sri Lanka.</p>
      </div>
      <div>
        <span className="k">Edition</span>
        <p>Vol. 01, MMXXVI. Revised August 2026.</p>
      </div>
      <div>
        <span className="k">Rights</span>
        <p>© 2026 Chamodi Karunarathne. All rights reserved.</p>
      </div>
      <div>
        <span className="k">Return</span>
        <p>
          <a href="#top" style={{ textDecoration: 'none', borderBottom: '1px solid var(--rule)' }}>
            Back to the cover ↑
          </a>
        </p>
      </div>
    </footer>
  );
}
