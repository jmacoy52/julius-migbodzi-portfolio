import "../styles/competencies.css";

function Competencies() {
  return (
    <section id="skills" className="competencies">
      <div className="competencies-container">
        <h2>Key Competencies</h2>
        <p className="section-subtitle">Core expertise areas that define my professional practice</p>

        <div className="competency-grid">
          <div className="competency-card">
            <div className="icon-badge">🎯</div>
          <h3>Risk Assessment</h3>
          <p>Identifying hazards and implementing effective control measures.</p>
        </div>

          <div className="competency-card">
            <div className="icon-badge">✓</div>
            <h3>Safety Audits</h3>
          <p>Monitoring compliance with safety standards and regulations.</p>
        </div>

          <div className="competency-card">
            <div className="icon-badge">📋</div>
            <h3>Regulatory Compliance</h3>
            <p>Ensuring adherence to occupational health and safety laws.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Competencies;
