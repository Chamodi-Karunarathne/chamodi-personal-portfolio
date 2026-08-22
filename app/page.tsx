import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      
      <footer className="container" style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          © {new Date().getFullYear()} Chamodi Karunarathne. Designed & Built with ❤️ and ☕.
        </p>
      </footer>
    </main>
  );
}
