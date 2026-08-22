import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div className="container grid grid-cols-2 items-center gap-12" style={{ width: '100%', zIndex: 1 }}>
        
        {/* Left Column: Text */}
        <div style={{ maxWidth: '600px', zIndex: 2 }}>
          <h2 className="text-gold mb-4" style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.2em', fontSize: '0.8rem', textTransform: 'uppercase' }}>
            Elevating Ideas. Crafting Prestige.
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

        {/* Right Column: Image with Gold Circle */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          
          {/* Decorative Gold Circle Behind */}
          <div style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            backgroundColor: 'var(--gold-dark)', // using a darker gold/bronze for the solid circle
            borderRadius: '50%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            opacity: 0.8
          }}></div>

          {/* The Actual Image */}
          <div style={{ 
            position: 'relative', 
            width: '100%', 
            maxWidth: '350px', 
            aspectRatio: '3/4', // keeping a portrait aspect ratio
            zIndex: 1 
          }}>
            <Image 
              src="/mypic.png" 
              alt="Chamodi Karunarathne" 
              layout="fill" 
              objectFit="contain" // contain prevents cropping and excessive upscaling, preserving original resolution
              objectPosition="center bottom"
              priority
            />
          </div>
          
          {/* Optional decorative text floating near the image */}
          <div style={{
            position: 'absolute',
            bottom: '10%',
            right: '-10%',
            fontFamily: 'var(--font-heading)',
            fontSize: '3rem',
            color: 'var(--gold)',
            fontStyle: 'italic',
            lineHeight: 0.8,
            zIndex: 2,
            opacity: 0.8,
            transform: 'rotate(-5deg)'
          }}>
          </div>
        </div>

      </div>
    </section>
  );
}
