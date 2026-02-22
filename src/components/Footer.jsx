import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Link to="/" className="logo">JULIUS MIGBODZI</Link>
          <p className="footer-tagline">Safety Professional</p>
        </div>

        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/safety-insights">Safety Insights</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="footer-contact">
          <p>Email: juliusmigb@gmail.com / migbodzijulius@gmail.com  
</p>
          <p>Phone: +233 246 449 223 / 0257 816 887 </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Julius Migbodzi. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
