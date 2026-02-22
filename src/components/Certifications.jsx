import "../styles/certifications.css";

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <h2>Certifications & Training</h2>

      <div className="certifications-grid">
        <div className="certification-card">
          <div className="icon">🏆</div>
          <h3>NEBOSH</h3>
          <p>Diploma – Ongoing</p>
        </div>

        <div className="certification-card">
          <div className="icon">🏆</div>
          <h3>OSHA Safety Management</h3>
          <p>Certification</p>
        </div>

        <div className="certification-card">
          <div className="icon">🏆</div>
          <h3>Construction Safety & Health</h3>
          <p>Training</p>
        </div>

        <div className="certification-card">
          <div className="icon">🏆</div>
          <h3>First Aid & Emergency Response</h3>
          <p>Certification</p>
        </div>

        <div className="certification-card">
          <div className="icon">🏆</div>
          <h3>Project Management</h3>
          <p>SHEild</p>
        </div>

        <div className="certification-card">
          <div className="icon">🏆</div>
          <h3>Project Management, PMP</h3>
          <p>Cambridge Center of Excellence  </p>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
