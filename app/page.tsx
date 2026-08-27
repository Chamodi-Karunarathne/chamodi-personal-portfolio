import CoverSection from './components/CoverSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Colophon from './components/Colophon';

export default function Home() {
  return (
    <main id="main">
      <div className="shell" id="top">
        <CoverSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Colophon />
      </div>
    </main>
  );
}
