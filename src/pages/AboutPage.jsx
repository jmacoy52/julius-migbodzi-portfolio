import Competencies from "../components/Competencies";
import ExperienceSummary from "../components/ExperienceSummary";
import Certifications from "../components/Certifications";
import "../styles/pages/about.css";
import "../styles/pages/about-hero.css";

function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-text">
            <h1>Julius Migbodzi</h1>
            <p className="subtitle">Occupational Safety, Health & Environment (HSE) Professional</p>
          </div>
          <div className="about-hero-image">
            <img src="/assets/about.jpeg" alt="Julius Migbodzi" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="about-journey">
        <div className="journey-content">
          <h2>Professional Journey</h2>
          <div className="journey-text">
            <p>
              My journey in occupational safety and health began over a decade ago with a fundamental belief: every worker deserves to return home safely at the end of each day. Throughout my career, I have had the privilege of working across diverse industries including construction, power generation, manufacturing, and industrial engineering.
            </p>
            <p>
              As an HSE Professional, I have successfully led safety initiatives that have transformed workplace cultures, reduced incident rates, and ensured compliance with international standards including OSHA regulations. My approach combines rigorous technical expertise with people-centered leadership, recognizing that sustainable safety outcomes emerge when teams are engaged, educated, and empowered.
            </p>
            <p>
              From conducting comprehensive risk assessments to implementing emergency response protocols, every project I undertake is driven by a singular focus: protecting human life while enabling operational excellence. I pride myself on building lasting safety frameworks that continue to deliver value long after my direct involvement concludes.
            </p>
          </div>
        </div>
      </section>

      <section className="about-approach">
        <div className="approach-content">
          <h2>My Approach to Workplace Safety</h2>
          <div className="approach-grid">
            <div className="approach-item">
              <h3>Risk Assessment & Analysis</h3>
              <p>Systematic identification and evaluation of workplace hazards before they become incidents. I employ proven methodologies to analyze work environments, predict potential risks, and implement preventive controls that address root causes.</p>
            </div>
            <div className="approach-item">
              <h3>Training & Development</h3>
              <p>Building safety competency through engaging, practical training programs. From toolbox talks to comprehensive certification courses, I ensure that every team member understands not just the "what" but the "why" behind safety protocols.</p>
            </div>
            <div className="approach-item">
              <h3>Compliance Management</h3>
              <p>Navigating complex regulatory landscapes to ensure full adherence to local, national, and international safety standards. I maintain current knowledge of evolving regulations and proactively update systems to meet compliance requirements.</p>
            </div>
            <div className="approach-item">
              <h3>Continuous Improvement</h3>
              <p>Implementing feedback loops and performance metrics that drive ongoing safety enhancement. Using data-driven insights, I identify trends, measure effectiveness, and refine strategies to achieve ever-better outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-narrative">
        <div className="narrative-content">
          <h2>Professional Philosophy</h2>
          
          <div className="philosophy-section">
            <p className="philosophy-intro">
              With over 10 years of hands-on experience in workplace safety, I believe that true safety culture is built on three pillars:
            </p>
            
            <div className="pillars-container">
              <div className="pillar">
                <div className="pillar-icon">🛡️</div>
                <h4>Prevention Through Empowerment</h4>
                <p>Equipping teams with knowledge and authority to identify and mitigate risks</p>
              </div>
              <div className="pillar">
                <div className="pillar-icon">📋</div>
                <h4>Compliance Through Clarity</h4>
                <p>Clear standards and transparent communication ensure adherence to safety regulations</p>
              </div>
              <div className="pillar">
                <div className="pillar-icon">👥</div>
                <h4>Leadership Through Accountability</h4>
                <p>Leading by example and holding ourselves and others accountable for safe practices</p>
              </div>
            </div>

            <p className="philosophy-main">
              Every project I lead reflects my commitment to protecting lives, preventing workplace incidents, and supporting organizations to achieve safe and productive operations.
            </p>

            <div className="philosophy-callout">
              <p><strong>Safety isn't just a checkbox</strong>—it's a proactive practice that requires continuous learning, strong communication, and unwavering commitment to excellence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-impact">
        <div className="impact-content">
          <h2>Impact & Achievements</h2>
          <div className="impact-stats">
            <div className="impact-stat-item">
              <span className="impact-number">10+</span>
              <span className="impact-label">Years of Experience</span>
            </div>
            <div className="impact-stat-item">
              <span className="impact-number">0</span>
              <span className="impact-label">Lost Time Incidents</span>
            </div>
            <div className="impact-stat-item">
              <span className="impact-number">40%</span>
              <span className="impact-label">Accident Reduction</span>
            </div>
            <div className="impact-stat-item">
              <span className="impact-number">300+</span>
              <span className="impact-label">Workers Trained</span>
            </div>
          </div>
          <p className="impact-summary">
            These results represent not just numbers, but real lives protected and communities strengthened through unwavering dedication to workplace safety excellence.
          </p>
        </div>
      </section>

      <Competencies />
      <ExperienceSummary />
      <Certifications />
    </div>
  );
}

export default AboutPage;
