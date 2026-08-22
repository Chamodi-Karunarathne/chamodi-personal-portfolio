"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const finalPhrase = "Decoding Complexity. Curating Creativity.";
  const [displayText, setDisplayText] = useState(finalPhrase);

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        finalPhrase
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return finalPhrase[index];
            }
            return Math.random() < 0.5 ? "0" : "1";
          })
          .join("")
      );
      if (iteration >= finalPhrase.length) clearInterval(interval);
      iteration += 1 / 2;
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div className="container grid grid-cols-2 items-center gap-12" style={{ width: '100%', zIndex: 1 }}>
        
        {/* Left Column: Text */}
        <div style={{ maxWidth: '600px', zIndex: 2 }}>
          <h2 className="text-gold mb-4" style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.2em', fontSize: '0.8rem', textTransform: 'uppercase' }}>
            {displayText}
          </h2>
          <h1 style={{ fontSize: '5rem', lineHeight: '0.9', marginBottom: '2rem', textTransform: 'uppercase' }}>
            <span style={{ display: 'block', color: 'var(--text-primary)' }}>Chamodi</span>
            <span style={{ display: 'block', color: 'var(--gold)', fontStyle: 'italic' }}>Karunarathne</span>
          </h1>
          <p className="mb-8" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '400px', lineHeight: 1.8 }}>
            I'm a Software Engineering Intern specializing in full-stack engineering and digital experiences that embody elegance, robust logic, and intention.
          </p>
          <div className="flex gap-6">
            <a href="mailto:chamokarunarathne27@gmail.com" className="glow-button">Contact Me</a>
            <a href="https://github.com/Chamodi-Karunarathne" target="_blank" rel="noreferrer" className="glow-button-outline">GitHub</a>
          </div>
        </div>

        {/* Right Column: Image with Gold Triangle */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          
          {/* Decorative Gold Triangle Behind */}
          <div style={{
            position: 'absolute',
            width: '380px',
            height: '420px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(-7.5deg)',
            zIndex: 0,
            opacity: 0.7
          }}>
            <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none">
              <polygon points="100,0 0,50 100,100" fill="none" stroke="var(--gold)" strokeWidth="1" />
            </svg>
          </div>

          <div style={{ 
            position: 'relative', 
            width: '400px', 
            height: '500px', 
            zIndex: 1 
          }}>
            <Image 
              src="/my_pic.png" 
              alt="Chamodi Karunarathne" 
              layout="fill" 
              objectFit="contain" 
              objectPosition="center bottom"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}
