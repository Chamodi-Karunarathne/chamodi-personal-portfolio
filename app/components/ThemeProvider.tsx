'use client';

import { useEffect } from 'react';

export default function ThemeProvider() {
  useEffect(() => {
    const root = document.documentElement;

    // --- Theme: respect system preference, in-memory only ---
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = prefersDark ? 'midnight' : 'edition';
    root.setAttribute('data-theme', initial);

    // --- Scroll-reveal ---
    const revealItems = document.querySelectorAll('.rv');
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              revealObserver.unobserve(e.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
      );
      revealItems.forEach((el) => revealObserver.observe(el));

      // --- Running section head ---
      const runSection = document.getElementById('runSection');
      const sections = document.querySelectorAll('[data-section]');
      if (runSection) {
        const sectionObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                runSection.textContent = e.target.getAttribute('data-section');
              }
            });
          },
          { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
        );
        sections.forEach((s) => sectionObserver.observe(s));
      }
    } else {
      revealItems.forEach((el) => el.classList.add('in'));
    }

    // --- Nameplate entrance ---
    const lines = document.querySelectorAll('.nameplate .l>span') as NodeListOf<HTMLElement>;
    lines.forEach((el, i) => {
      el.style.transform = 'translateY(104%)';
      el.style.transition = `transform 950ms cubic-bezier(.2,.8,.2,1) ${i * 110 + 140}ms`;
    });
    requestAnimationFrame(() => {
      setTimeout(() => {
        document.body.classList.add('ready');
        lines.forEach((el) => {
          el.style.transform = 'translateY(0)';
        });
      }, 50);
    });

    // --- Broken-image fallback ---
    document.querySelectorAll('.fig img').forEach((img) => {
      const imgEl = img as HTMLImageElement;
      imgEl.addEventListener('error', () => {
        imgEl.closest('.fig')?.classList.add('broken');
      });
      if (imgEl.complete && imgEl.naturalWidth === 0) {
        imgEl.closest('.fig')?.classList.add('broken');
      }
    });
  }, []);

  return null;
}
