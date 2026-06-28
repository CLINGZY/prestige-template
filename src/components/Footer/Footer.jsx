import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <h2 className="footer__brand-name">
            Forma
          </h2>

          <p className="footer__brand-text">
            Interior design and architectural services
            for clients who understand that a well
            designed space is one of life's most
            enduring investments.
          </p>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">
            Services
          </h3>

          <ul className="footer__links">
            <li><a href="#">Residential Interiors</a></li>
            <li><a href="#">Commercial Spaces</a></li>
            <li><a href="#">Architecture</a></li>
            <li><a href="#">Bespoke Furniture</a></li>
            <li><a href="#">Kitchen Design</a></li>
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">
            Studio
          </h3>

          <ul className="footer__links">
            <li><a href="#">About</a></li>
            <li><a href="#">Our Work</a></li>
            <li><a href="#">Philosophy</a></li>
            <li><a href="#">Process</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">
            Contact
          </h3>

          <ul className="footer__links">
            <li><a href="#">Lagos Studio</a></li>
            <li><a href="#">Abuja Office</a></li>
            <li><a href="#">Begin a Project</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>
          © 2026 Forma Design Studio. All rights
          reserved.
        </span>

        <span className="footer__locations">
          Lagos · Abuja · London
        </span>
      </div>
    </footer>
  );
}

export default Footer;