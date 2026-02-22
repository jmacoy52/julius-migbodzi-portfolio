import { useNavigate } from "react-router-dom";
import "../styles/pages/safety-insights.css";

function SafetyInsightsPage() {
  const navigate = useNavigate();

  const insights = [
    {
      id: 1,
      slug: "5-signs-safety-culture-needs-refresh",
      title: "5 Signs Your Safety Culture Needs a Refresh",
      category: "HSE Culture",
      description: "Learn the warning signs that indicate it's time to reinvigorate your workplace safety culture and take corrective action."
    },
    {
      id: 2,
      slug: "critical-role-toolbox-talks-hazard-prevention",
      title: "The Critical Role of Toolbox Talks in Hazard Prevention",
      category: "Hazard Awareness",
      description: "Discover why daily toolbox talks are essential for hazard awareness and how to make them effective."
    },
    {
      id: 3,
      slug: "common-osha-violations-prevention",
      title: "Common OSHA Violations and How to Prevent Them",
      category: "Regulatory Compliance",
      description: "Understand the top OSHA violations and practical strategies to ensure compliance."
    },
    {
      id: 4,
      slug: "building-psychological-safety-jobsite",
      title: "Building Psychological Safety on the Jobsite",
      category: "Team Leadership",
      description: "Explore how psychological safety improves reporting and overall workplace safety outcomes."
    },
    {
      id: 5,
      slug: "emergency-response-planning-beyond-basics",
      title: "Emergency Response Planning: Beyond the Basics",
      category: "Emergency Response",
      description: "Learn how to develop and test comprehensive emergency response procedures for your workplace."
    },
    {
      id: 6,
      slug: "hazardous-materials-handling-best-practices",
      title: "Hazardous Materials Handling: Best Practices",
      category: "Industry-Specific",
      description: "Best practices for managing hazardous materials safely and compliantly."
    },
    {
      id: 7,
      slug: "personal-protective-equipment-guide",
      title: "Personal Protective Equipment: A Complete Guide",
      category: "PPE",
      description: "Everything you need to know about selecting, using, and maintaining personal protective equipment."
    },
    {
      id: 8,
      slug: "conducting-effective-safety-audits",
      title: "Conducting Effective Safety Audits",
      category: "Auditing",
      description: "Learn how to plan and execute safety audits that identify hazards and improve compliance."
    },
    {
      id: 9,
      slug: "workplace-ergonomics-prevention",
      title: "Workplace Ergonomics: Preventing Musculoskeletal Disorders",
      category: "Occupational Health",
      description: "Understand ergonomic principles to prevent injuries and improve employee well-being."
    },
    {
      id: 10,
      slug: "safety-training-program-development",
      title: "Developing an Effective Safety Training Program",
      category: "Training",
      description: "Create engaging and impactful safety training that resonates with your workforce."
    },
    {
      id: 11,
      slug: "contractor-safety-management",
      title: "Contractor Safety Management Best Practices",
      category: "Contractor Safety",
      description: "Ensure contractor safety and compliance with these essential management strategies."
    },
    {
      id: 12,
      slug: "incident-investigation-root-cause",
      title: "Incident Investigation: Finding the Root Cause",
      category: "Incident Management",
      description: "Master the art of incident investigation to prevent future occurrences."
    }
  ];

  const handleArticleClick = (slug) => {
    navigate(`/safety-insights/${slug}`);
  };

  return (
    <div className="safety-insights-page">
      <section className="insights-hero">
        <h1>Safety Insights & Workplace Tips</h1>
        <p>Thought leadership, practical advice, and safety education for workplace excellence</p>
      </section>

      <section className="insights-grid">
        {insights.map((insight) => (
          <article 
            key={insight.id} 
            className="insight-card"
            onClick={() => handleArticleClick(insight.slug)}
          >
            <span className="category-badge">{insight.category}</span>
            <h3>{insight.title}</h3>
            <p>{insight.description}</p>
            <button className="read-more">Read More </button>
          </article>
        ))}
      </section>
    </div>
  );
}

export default SafetyInsightsPage;
