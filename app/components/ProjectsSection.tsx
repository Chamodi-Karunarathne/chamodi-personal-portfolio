"use client";

import { useEffect, useRef, useState } from 'react';

const ImageSlider = ({ images, title }: { images: string[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '1.5rem', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
      {images.map((src, idx) => (
        <img 
          key={idx} 
          src={src} 
          alt={`${title} screenshot ${idx + 1}`}
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            opacity: idx === currentIndex ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out'
          }} 
        />
      ))}
    </div>
  );
};

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Enterprise IT Asset Management System (EITAMS)",
      role: "Full-Stack Software Developer",
      duration: "11/2025 – Present",
      description: [
        "Scalable enterprise asset registry featuring real-time synchronization, automated PDF generation, and secure role-based access, built with a refactored, modular architecture in an Agile environment."
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Drizzle ORM"],
      images: ["/ITAMS.png"]
    },
    {
      title: "Skyforge - Environmental Monitoring Drone & Dashboard",
      role: "PCB Designer & Frontend Developer",
      duration: "12/2024 – 08/2025",
      description: [
        "Integrated hardware and software for an environmental drone by designing a custom sensor PCB and building a real-time telemetry dashboard with interactive data visualization."
      ],
      stack: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Recharts", "ESP32", "EasyEDA"],
      images: ["/skyforge.png", "/skyforge1.jpeg"]
    },
    {
      title: "Woof - Pet Adoption System",
      role: "Software Developer",
      duration: "10/2023 – 04/2024",
      description: [
        "Desktop management system featuring secure authentication, end-to-end CRUD operations, automated PDF reporting, and multi-language support built with an intuitive user interface."
      ],
      stack: ["Java", "Swing", "AWT", "MySQL", "JDBC", "i18n", "File I/O"],
      images: ["/woof.png"]
    },
    {
      title: "BlogCave – Full-Stack Blogging Platform",
      role: "Full-Stack Developer",
      duration: "09/2025 – 11/2025",
      description: [
        "Full-featured content publishing platform with secure role-based authorization, interactive post management, media upload handling, and an optimized relational database architecture."
      ],
      stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "XAMPP"],
      images: ["/blogcave.png"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const start = 80; 
      let progress = 0;
      
      if (top <= start) {
        progress = (start - top) / (height - viewportHeight);
        progress = Math.max(0, Math.min(1, progress));
      }

      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const maxTranslate = trackWidth - viewportWidth;
      
      if (maxTranslate > 0) {
        trackRef.current.style.transform = `translateX(-${progress * maxTranslate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section id="projects" ref={containerRef} style={{ height: '350vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: '80px', height: 'calc(100vh - 80px)', overflow: 'hidden', display: 'flex', flexDirection: 'column', paddingTop: '2rem' }}>
        <div className="container" style={{ marginBottom: '1.5rem' }}>
          <h2 className="section-title" style={{ justifyContent: 'flex-start' }}>Selected Works</h2>
        </div>
        
        <div style={{ paddingLeft: 'max(2rem, calc((100vw - 1200px) / 2))' }}>
          <div ref={trackRef} className="flex gap-8" style={{ width: 'max-content', paddingRight: 'max(2rem, calc((100vw - 1200px) / 2))', willChange: 'transform' }}>
            {projects.map((project, index) => (
              <div key={index} className="glass-card flex flex-col justify-between" style={{ width: '80vw', maxWidth: '650px', flexShrink: 0, padding: '2rem', maxHeight: 'calc(100vh - 180px)', overflowY: 'auto' }}>
                <div>
                  {/* Image Slider */}
                  <ImageSlider images={project.images} title={project.title} />

                  <div className="flex justify-between items-start mb-2" style={{ flexWrap: 'wrap' }}>
                    <h3 className="text-xl text-primary font-bold" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', maxWidth: '70%' }}>{project.title}</h3>
                    <span className="text-gold text-sm" style={{ letterSpacing: '0.1em' }}>{project.duration}</span>
                  </div>
                  <p className="text-sm font-bold mb-4" style={{ color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{project.role}</p>
                  
                  <ul className="text-sm mb-6 flex flex-col gap-3" style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                    {project.description.map((desc, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--gold)' }}>—</span> {desc}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-2 mt-4" style={{ flexWrap: 'wrap', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
                  {project.stack.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
