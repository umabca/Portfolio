import "./Projects.css";

export default function Projects() {
  const projectList = [
    {
      title: "Portfolio",
      description: "A fully responsive and modern portfolio built with ReactJS, showcasing my skills, featured projects, and contact information. Includes smooth animations, reusable components, and optimized UI for all devices.",
      tech: "React",
      link: "#",
      github: "#"
    },{
      title: "Facebook Clone",
      description: "A fully responsive Facebook UI clone built with React.",
      tech: "React, CSS, JavaScript",
      link: "https://yourprojectlink.com",
      github: "https://github.com/umabca/Portfolio"
    },
    
  ];

  return (
    <section id="projects" className="projects">
      <h1>My Projects</h1>

      <div className="project-container">
        {projectList.map((p, index) => (
          <div className="project-card" key={index}>
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <p><strong>Tech Used:</strong> {p.tech}</p>

            <div className="buttons">
              {p.link && <a href={p.link} target="_blank" className="btn">Live Demo</a>}
              {p.github && <a href={p.github} target="_blank" className="btn">GitHub</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
