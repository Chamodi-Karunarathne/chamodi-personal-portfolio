export default function ProjectsSection() {
  const projects = [
    {
      title: "Enterprise IT Asset Management System (EITAMS)",
      role: "Full-Stack Software Developer",
      duration: "11/2025 – Present",
      description: [
        "Built a scalable, enterprise-grade Next.js/React asset registry featuring complex data grids, real-time synchronization, and automated PDF tag generation.",
        "Designed relational databases with Drizzle ORM (PostgreSQL/MySQL) to securely manage bulk asset transfers, reporting, and NextAuth role-based access.",
        "Improved codebase maintainability by refactoring monolithic UI files into modular React hooks while collaborating in an Agile team environment."
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Drizzle ORM"]
    },
    {
      title: "Skyforge - Environmental Monitoring Drone & Dashboard",
      role: "PCB Designer & Frontend Developer",
      duration: "12/2024 – 08/2025",
      description: [
        "Designed a custom EasyEDA PCB for an ESP32-based environmental monitoring drone, integrating sensors and communication modules.",
        "Developed a responsive React dashboard with Firebase Realtime Database integration for real-time environmental and flight telemetry monitoring.",
        "Built interactive data visualizations for weather parameters, GPS, altitude, air quality, and flight status."
      ],
      stack: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Recharts", "ESP32", "EasyEDA", "Arduino IDE", "C++"]
    },
    {
      title: "Woof - Pet Adoption System",
      role: "Software Developer",
      duration: "10/2023 – 04/2024",
      description: [
        "Developed a Java-based desktop pet adoption management system using Swing and AWT event handling.",
        "Implemented role-based authentication, MySQL integration, and CRUD operations including report generation using JDBC.",
        "Built user-friendly interfaces with search, reporting, file handling, PDF generation, and i18n support."
      ],
      stack: ["Java", "Swing", "AWT", "MySQL", "JDBC", "i18n", "File I/O", "PDF Generation"]
    },
    {
      title: "BlogCave – Full-Stack Blogging Platform",
      role: "Full-Stack Developer",
      duration: "09/2025 – 11/2025",
      description: [
        "Developed a PHP and MySQL-based blogging platform with secure authentication, role-based access, and blog management features.",
        "Built responsive user interfaces and implemented CRUD operations, user profiles, image uploads, and interactive post functionalities.",
        "Designed and optimized a relational database structure for efficient user and content management."
      ],
      stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "XAMPP"]
    }
  ];

  return (
    <section className="section container">
      <h2 className="section-title">Selected Works</h2>
      <div className="grid grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="glass-card flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2" style={{ flexWrap: 'wrap' }}>
                <h3 className="text-xl text-primary font-bold" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', maxWidth: '70%' }}>{project.title}</h3>
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
    </section>
  );
}
