import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container grid grid-cols-2 items-center gap-8">
        <div>
          <h2 className="text-xl text-purple font-bold mb-2">HELLO, WORLD! I AM</h2>
          <h1 className="text-cyan mb-4" style={{ fontSize: '4rem', lineHeight: '1.1' }}>
            CHAMODI KARUNARATHNE
          </h1>
          <div className="typing-container mb-6 text-xl">
            <span className="typing-text">Software Engineering Intern</span>
          </div>
          <p className="mb-8 text-lg" style={{ maxWidth: '500px', color: 'var(--text-secondary)' }}>
            Passionate about blending robust backend logic with creative, high-end UI/UX prototyping to build highly optimized, out-of-the-box digital solutions.
          </p>
          <div className="flex gap-4">
            <a href="mailto:chamokarunarathne27@gmail.com" className="glow-button">Contact Me</a>
            <a href="https://github.com/Chamodi-Karunarathne" target="_blank" rel="noreferrer" className="glow-button-outline">GitHub</a>
            <a href="https://linkedin.com/in/chamodikaru" target="_blank" rel="noreferrer" className="glow-button-outline">LinkedIn</a>
          </div>
        </div>
        
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            position: 'relative',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            padding: '10px',
            background: 'linear-gradient(45deg, var(--neon-cyan), var(--neon-purple))',
            boxShadow: '0 0 30px rgba(0, 243, 255, 0.4), inset 0 0 20px rgba(176, 38, 255, 0.4)'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: 'var(--bg-color)'
            }}>
              <Image 
                src="/me wso2.jpg" 
                alt="Chamodi Karunarathne" 
                layout="fill" 
                objectFit="cover" 
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
