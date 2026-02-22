import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "../styles/projects.css";

function Projects() {
  const slides = [
    {
      image: "/assets/on-field.jpeg",
      type: "Construction Site Safety",
      role: "Safety Officer",
      bullets: [
        "Conducted daily safety inspections across multiple work zones",
        "Performed comprehensive risk assessments for high-risk activities",
        "Led toolbox talks for 50+ workers on hazard awareness",
        "Monitored compliance with OSHA and local safety regulations"
      ],
      outcome: "Achieved zero lost-time incidents over 18-month project duration, exceeding industry safety benchmarks."
    },
    {
      image: "/assets/onsite_1.jpeg",
      type: "Power Plant Safety Operations",
      role: "HSE Coordinator",
      bullets: [
        "Developed and implemented emergency response procedures",
        "Managed hazardous materials handling and storage protocols",
        "Coordinated safety training programs for maintenance crews",
        "Conducted regular audits of safety management systems"
      ],
      outcome: "Reduced workplace accidents by 40% through proactive safety measures and continuous improvement initiatives."
    },
    {
      image: "/assets/myself.jpeg",
      type: "Industrial Engineering Project Safety",
      role: "Safety Officer",
      bullets: [
        "Oversaw safety for complex equipment installations",
        "Implemented fall protection systems for elevated work",
        "Managed confined space entry permits and procedures",
        "Coordinated with engineering teams on safety-by-design principles"
      ],
      outcome: "Successfully completed multi-million dollar project with exemplary safety record, earning industry recognition."
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Safety in Action</h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        className="projects-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <div className="slide-image">
                <img
                  src={slide.image}
                  alt={`${slide.type} safety work`}
                  loading="lazy"
                />
              </div>
              <div className="slide-text">
                <h3>{slide.type}</h3>
                <p className="role">{slide.role}</p>
                <ul>
                  {slide.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
                <p className="outcome">{slide.outcome}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Projects;
