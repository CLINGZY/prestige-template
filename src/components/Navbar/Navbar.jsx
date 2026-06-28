import "./Navbar.css";
import { useEffect, useState } from "react";
import { siteData } from "../../data/siteData";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 60);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${
        isScrolled ? "navbar--scrolled" : ""
      }`}
    >
      <a href="/" className="navbar__logo">
        {siteData.businessName}
      </a>

      <ul className="navbar__links">
        {siteData.navigationLinks.map((link) => (
          <li key={link.id} className="navbar__item">
            <a
              href={link.href}
              className="navbar__link"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={siteData.primaryCTA.href}
        className="navbar__cta"
      >
        {siteData.primaryCTA.text}
      </a>
    </nav>
  );
}

export default Navbar;