import { Link } from "react-router-dom";
import "../../styles/home/cta-section.css";

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>Ready to Strengthen Your Safety Program?</h2>
        <p>
          Let's discuss how my expertise in HSE leadership, compliance, and risk management 
          can contribute to your organization's safety goals.
        </p>
        <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
      </div>
    </section>
  );
}

export default CTASection;
