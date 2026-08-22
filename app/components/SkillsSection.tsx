export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Typescript", "JavaScript", "Java", "C", "C++", "SQL", "Python"]
    },
    {
      title: "Frameworks",
      skills: ["Next.js", "React", "Node.js", "REST APIs", "Tailwind CSS"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "Drizzle", "Firebase", "Neon"]
    },
    {
      title: "DevOps",
      skills: ["Git", "Github", "Docker", "Vercel", "Expo"]
    },
    {
      title: "Hardware",
      skills: ["ESP32", "Arduino", "PCB Design"]
    }
  ];

  return (
    <section className="section container">
      <h2 className="section-title">Expertise</h2>
      <div className="flex justify-between" style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '3rem 0' }}>
        {skillCategories.map((category, index) => (
          <div key={index} style={{ borderRight: index !== skillCategories.length - 1 ? '1px solid var(--border-subtle)' : 'none', padding: '0 2rem', flex: 1, textAlign: 'center' }}>
            <h3 className="text-gold mb-4" style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{category.title}</h3>
            <div className="flex flex-col gap-2 items-center">
              {category.skills.map((skill, idx) => (
                <span key={idx} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
