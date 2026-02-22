import { Link } from "react-router-dom";
import "../../styles/home/hero-section.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Julius Migbodzi</h1>
          <p className="hero-role">Occupational Safety, Health & Environment (HSE) Professional</p>
          <p className="hero-statement">
            Transforming workplace safety through strategic leadership, proactive compliance, and a culture of prevention.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">On-Field Projects</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/assets/hero.jpeg" alt="Julius Migbodzi" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
