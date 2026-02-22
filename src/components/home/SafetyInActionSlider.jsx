import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../../styles/home/safety-action-slider.css";

function SafetyInActionSlider() {
  const slides = [
    { id: 1, image: "/assets/on-field.jpeg", caption: "On-Site Safety Assessments" },
    { id: 2, image: "/assets/on-site.jpeg", caption: "Real-Time Risk Management" },
    { id: 3, image: "/assets/myself.jpeg", caption: "Leadership in Practice" }
  ];

  return (
    <section className="safety-action-slider">
      <div className="slider-header">
        <h2>Safety in Action</h2>
        <p className="slider-subtitle">Julius Migbodzi</p>
        <p className="slider-title">Occupational Safety, Health & Environment (HSE) Professional</p>
        <p>Visual glimpse into real-world safety work</p>
      </div>
      
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
        className="safety-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slider-slide">
              <img src={slide.image} alt={slide.caption} loading="lazy" />
              <div className="slide-overlay">
                <p className="slide-caption">{slide.caption}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SafetyInActionSlider;
