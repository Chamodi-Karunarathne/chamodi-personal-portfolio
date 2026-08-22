"use client";

import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section container" style={{ paddingTop: 0, paddingBottom: '3rem' }}>
      <div className="grid grid-cols-2 gap-8" style={{ border: '1px solid var(--border-subtle)', padding: '3rem' }}>
        <div>
          <h2 className="text-xl text-gold mb-6" style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem' }}>About Me</h2>
          <p className="mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
            Information Technology and Management undergraduate at the University of Moratuwa, focused on full-stack engineering and systems design using Java, Next.js, React.
          </p>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            With a refined eye for detail and a passion for building robust backend logic, I craft timeless aesthetics that elevate brands and leave a lasting impression. Balancing strong academic principles with hands-on experience in requirements engineering and IoT frameworks.
          </p>

        </div>

        <div className="flex flex-col justify-center gap-2" style={{ borderLeft: '1px solid var(--border-subtle)', paddingLeft: '3rem' }}>
          <h2 className={`text-xl text-gold mb-2 ${isVisible ? 'animate-line delay-1' : ''}`} style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', textTransform: 'uppercase', opacity: isVisible ? '' : 0 }}>Education</h2>

          <div className="flex flex-col gap-6">
            <div className={isVisible ? 'animate-line delay-2' : ''} style={{ opacity: isVisible ? '' : 0 }}>
              <h3 className="text-xl text-primary mb-2" style={{ fontSize: '1.2rem' }}>G.C.E. Advanced Level</h3>
              <p className="text-gold text-sm mb-2" style={{ letterSpacing: '0.1em' }}>Devi Balika Vidyalaya, Colombo 08 | 2020 – 2023</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Commerce Stream (English Medium)<br/>
                3A passes (Accounting, ICT and English)<br/>
                1B pass (Economics)
              </p>
            </div>
            <div className={isVisible ? 'animate-line delay-3' : ''} style={{ opacity: isVisible ? '' : 0 }}>
              <h3 className="text-xl text-primary mb-2" style={{ fontSize: '1.2rem' }}>BSc. (Hons) Information Technology & Management</h3>
              <p className="text-gold text-sm mb-2" style={{ letterSpacing: '0.1em' }}>Faculty of IT, University of Moratuwa | 2024 – Present</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                CGPA: 3.78 / 4.00<br/>
                Academic Honors: Dean's List for Semester 01
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
