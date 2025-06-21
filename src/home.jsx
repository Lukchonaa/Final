import React from "react";
import "./styles/reset.css";  
import "./styles/home.css"; 

export default function Home() {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <h1>
          Nice to meet you!
          <br /> I’m <span className="highlight">Luka Tkeshelashvili</span>.
        </h1>
        <p className="description">
          Based in Georgia, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <a href="#contact" className="contact-link">
          Contact me
        </a>
      </header>

      {/* Skills */}
      <section className="skills">
        {["HTML", "CSS", "Javascript", "Accessibility", "React", "Sass"].map(skill => (
          <div key={skill} className="skill">
            {skill}
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {["DESIGN PORTFOLIO", "E-LEARNING LANDING PAGE", "TODO WEB APP", "ENTERTAINMENT WEB APP", "MEMORY GAME", "ART GALLERY SHOWCASE"].map((title, i) => (
            <div key={i} className="project-card">
              <div className="project-image"></div>
              <div className="project-content">
                <h3>{title}</h3>
                <p className="project-tags">HTML / CSS / JavaScript</p>
                <a href="#" className="view-project">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="contact-section">
        <div className="contact-container">
          <h2>Contact</h2>
          <p className="contact-description">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" rows="5"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="footer-note">© lukatkeshelashvili</div>
      </footer>
    </div>
  );
}
