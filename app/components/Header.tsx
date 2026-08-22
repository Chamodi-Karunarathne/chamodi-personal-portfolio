import React from 'react';

export default function Header() {
  return (
    <header style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      zIndex: 50, 
      backgroundColor: 'rgba(10, 10, 10, 0.85)', 
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(197, 161, 115, 0.1)'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        height: '80px' 
      }}>
        {/* Logo */}
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--gold)' }}>
          CK
        </div>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#home" className="nav-link active">HOME</a>
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#skills" className="nav-link">SKILLS</a>

          <a href="#certifications" className="nav-link">CERTIFICATIONS</a>
          <a href="#contacts" className="nav-link">CONTACTS</a>
        </nav>

        {/* Action Button */}
        <div>
          <a href="/Chamodi_Karunarathne_CV.pdf" download="Chamodi_Karunarathne_CV.pdf" className="pill-button">
            DOWNLOAD MY CV <span style={{ fontSize: '1.2rem', lineHeight: 0 }}>+</span>
          </a>
        </div>
      </div>
    </header>
  );
}
