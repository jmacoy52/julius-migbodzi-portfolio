import { Link } from "react-router-dom";
import "../../styles/home/navigation-cards.css";

function NavigationCards() {
  const cards = [
    {
      id: 1,
      title: "On-Field Projects",
      description: "Explore on-site case studies and safety projects",
      link: "/projects",
      icon: "📋"
    },
    {
      id: 2,
      title: "Professional Background",
      description: "Discover my background, expertise, and achievements",
      link: "/about",
      icon: "👤"
    },
    {
      id: 3,
      title: "Safety Insights",
      description: "Read articles on HSE trends and best practices",
      link: "/safety-insights",
      icon: "📚"
    }
  ];

  return (
    <section className="navigation-cards">
      <div className="nav-cards-container">
        {cards.map((card) => (
          <Link key={card.id} to={card.link} className="nav-card-link">
            <div className="nav-card">
              <div className="nav-card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default NavigationCards;
