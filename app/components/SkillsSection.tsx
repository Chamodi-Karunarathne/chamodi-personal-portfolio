export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Typescript", "JavaScript", "Java", "C", "C++", "SQL", "Python"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Next.js", "React", "Node.js", "REST APIs", "Tailwind CSS"]
    },
    {
      title: "Databases & ORMs",
      skills: ["MySQL", "PostgreSQL", "Drizzle", "Firebase Realtime DB", "Neon"]
    },
    {
      title: "DevOps Tools",
      skills: ["Git", "Github", "Docker", "Vercel", "Expo"]
    },
    {
      title: "Hardware Platforms",
      skills: ["ESP32", "Arduino", "PCB Design (EasyEDA)"]
    }
  ];

  return (
    <section className="section container">
      <h2 className="section-title">02. Technical Arsenal</h2>
      <div className="grid grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="glass-card">
            <h3 className="text-lg text-cyan mb-4 font-bold">{category.title}</h3>
            <div className="flex" style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
              {category.skills.map((skill, idx) => (
                <span key={idx} className="tech-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
