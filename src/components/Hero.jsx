import "../styles/hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>Occupational Safety, Health & Environment (HSE) Professional</h1>
        <p>
          Over 10 years of hands-on experience ensuring workplace safety,
          regulatory compliance, and strong safety culture across construction,
          engineering, power plant, and industrial projects.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/assets/hero.jpeg"
          alt="Julius Migbodzi - Safety Officer"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Hero;
