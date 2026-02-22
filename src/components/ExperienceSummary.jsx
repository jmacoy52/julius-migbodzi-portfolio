import "../styles/experience-summary.css";

function ExperienceSummary() {
  return (
    <section id="experience" className="experience-summary">
      <div className="experience-container">
        <h2>Experience Highlights</h2>
        <p className="section-subtitle">Proven track record across diverse industrial sectors</p>

        <div className="summary-grid">
          <div className="summary-card">
            <div className="icon-badge">📅</div>
            <h3>10+ Years Experience</h3>
            <p>Dedicated career in HSE leadership and workplace safety</p>
          </div>

          <div className="summary-card">
            <div className="icon-badge">🏢</div>
            <h3>Multi-Sector Expertise</h3>
            <p>Construction, power plants, and industrial operations</p>
          </div>

          <div className="summary-card">
            <div className="icon-badge">✅</div>
            <h3>Incident Prevention</h3>
            <p>Strong compliance and zero-incident outcomes</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSummary;
