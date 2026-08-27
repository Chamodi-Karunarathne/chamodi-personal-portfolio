'use client';

import { useCallback, useState, useEffect } from 'react';

export default function Header() {
  const [themeLabel, setThemeLabel] = useState('Midnight');

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme');
    const next = current === 'edition' ? 'midnight' : 'edition';
    root.setAttribute('data-theme', next);
    setThemeLabel(next === 'edition' ? 'Midnight' : 'Edition');
  }, []);

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    setThemeLabel(current === 'edition' ? 'Midnight' : 'Edition');
  }, []);

  return (
    <header className="runhead">
      <div className="runhead__l">
        <a className="label label--ink" href="#top">Chamodi Karunarathne</a>
      </div>
      <div className="runhead__c">
        <span className="label" id="runSection">The Cover</span>
      </div>
      <div className="runhead__r">
        <nav className="runhead__nav label" aria-label="Primary">
          <a href="#about">01</a>
          <a href="#practice">02</a>
          <a href="#works">03</a>
          <a href="#trajectory">04</a>
          <a href="#contact">05</a>
        </nav>
        <button
          className="tog"
          id="tog"
          type="button"
          aria-label={`Switch to ${themeLabel} edition`}
          onClick={toggleTheme}
        >
          <i aria-hidden="true" />
          <span id="togLabel">{themeLabel}</span>
        </button>
      </div>
    </header>
  );
}
