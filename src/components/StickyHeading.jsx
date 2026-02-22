import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/sticky-heading.css";

function StickyHeading() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const shouldShow = location.pathname === "/" || location.pathname === "/about";

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400 && shouldShow) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [shouldShow]);

  if (!isVisible || !shouldShow) return null;

  return (
    <div className="sticky-heading">
      <div className="sticky-heading-container">
        <Link to="/" className="sticky-logo">JULIUS MIGBODZI</Link>
        <span className="sticky-tagline">HSE Professional</span>
      </div>
    </div>
  );
}

export default StickyHeading;
