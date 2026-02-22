import "../../styles/home/gallery-showcase.css";

function GalleryShowcase() {
  const images = [
    { id: 1, image: "/assets/onsite_2.jpeg", title: "Safety Leadership" },
    { id: 2, image: "/assets/onsite_1.jpeg", title: "On-Site Inspection" },
    { id: 3, image: "/assets/on-site.jpeg", title: "Site Assessment" },
    { id: 4, image: "/assets/safety_campaign.jpeg", title: "Safety Campaign" },
    { id: 5, image: "/assets/workshop.jpeg", title: "Training Workshop" }
  ];

  return (
    <section className="gallery-showcase">
      <div className="gallery-container">
        <h2>Professional Work</h2>
        <p className="gallery-subtitle">A glimpse into my HSE leadership and safety initiatives</p>
        <div className="gallery-grid">
          {images.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-overlay">
                <p className="gallery-title">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryShowcase;
