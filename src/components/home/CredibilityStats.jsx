import "../../styles/home/credibility-stats.css";

function CredibilityStats() {
  const stats = [
    { id: 1, number: "10+", label: "Years of Experience" },
    { id: 2, number: "5+", label: "Industries Served" },
    { id: 3, number: "100%", label: "Safety Compliance Focus" },
    { id: 4, number: "0", label: "Lost-Time Incidents Led" }
  ];

  return (
    <section className="credibility-stats">
      <div className="stats-container">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-card">
            <p className="stat-number">{stat.number}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CredibilityStats;