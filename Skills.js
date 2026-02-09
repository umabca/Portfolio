import "./Skills.css";

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "ReactJS", "Bootstrap", "Git & GitHub"];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-box">
        {skills.map((item) => (
          <span key={item} className="skill-chip">{item}</span>
        ))}
      </div>
    </section>
  );
}
