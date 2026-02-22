import Projects from "../components/Projects";
import "../styles/pages/projects.css";

function ProjectsPage() {
  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="projects-hero-content">
          <h1>Safety in Action</h1>
          <p className="projects-subtitle">Real-world projects, measurable impact, and proven safety leadership</p>
          <p className="projects-description">
            Throughout my career, I have had the privilege of leading safety initiatives across diverse industries. 
            Each project represents not just a professional achievement, but a commitment to protecting workers 
            and building sustainable safety cultures. Explore below to see how I've transformed workplace safety 
            outcomes through strategic planning, rigorous implementation, and continuous improvement.
          </p>
        </div>
      </section>

      <section className="projects-approach">
        <div className="approach-content">
          <h2>My Project Methodology</h2>
          <div className="approach-cards">
            <div className="approach-card">
              <div className="card-icon">🔍</div>
              <h3>Assess</h3>
              <p>Comprehensive evaluation of existing safety protocols, workplace hazards, and compliance gaps</p>
            </div>
            <div className="approach-card">
              <div className="card-icon">📐</div>
              <h3>Design</h3>
              <p>Customized safety frameworks tailored to specific project requirements and regulatory standards</p>
            </div>
            <div className="approach-card">
              <div className="card-icon">🚀</div>
              <h3>Implement</h3>
              <p>Strategic deployment of safety measures with clear accountability structures and communication channels</p>
            </div>
            <div className="approach-card">
              <div className="card-icon">📊</div>
              <h3>Evaluate</h3>
              <p>Data-driven analysis of safety performance with continuous refinement and optimization</p>
            </div>
          </div>
        </div>
      </section>

      <Projects />

      <section className="projects-highlights">
        <div className="highlights-content">
          <h2>Project Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-item">
              <span className="highlight-number">18+</span>
              <span className="highlight-text">Months of incident-free operations on major construction projects</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">5</span>
              <span className="highlight-text">Industries served: Construction, Power Generation, Manufacturing</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">100%</span>
              <span className="highlight-text">Regulatory compliance achievement across all project phases</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
