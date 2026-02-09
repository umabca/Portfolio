import "./Home.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Frontend Developer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="home">
      <div className="home-box">
        <h1>Hello, I'm <span className="gradient-text">Uma Kumari</span></h1>
        <h2 className="typing">{text}</h2>

        <p>I build clean, modern and responsive web applications using React.</p>

        <a className="btn" href="#projects">Explore My Work</a>
        <br />
        <a className="btn" href="resume.pdf" download>Download Resume</a>

        <div className="socials">
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </section>
  );
}
