import "./Navbar.css";
import { useEffect, useState } from "react";
import { siteData } from "../../data/siteData";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 60);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);


  const iconMap = {
    instagram: <FaInstagram />,
    facebook: <FaFacebookF />,
    whatsapp: <FaWhatsapp />,
  };

  return (
    <nav
      className={`navbar ${
        isScrolled ? "navbar--scrolled" : ""
      }`}
    >
      <div className="navbar__inner">
        <a
          href={siteData.logo.href}
          className="navbar__logo"
        >
          {siteData.logo.type === "image" ? (
            <img
              src={siteData.logo.image}
              alt={siteData.logo.text}
              className="navbar__logo-image"
            />
          ) : (
            siteData.logo.text
          )}
        </a>

        <ul className="navbar__links">
          {siteData.navigationLinks.map((link) => (
            <li
              key={link.id}
              className="navbar__item"
            >
              <a
                href={link.href}
                className="navbar__link"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {siteData.socialLinks.length > 0 && (
          <div className="navbar__socials">
            {siteData.socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                className="navbar__social-link"
                target="_blank"
                rel="noreferrer"
                aria-label={social.platform}
              >
                {iconMap[social.icon]}
              </a>
            ))}
          </div>
        )}

        <a
          href={siteData.primaryCTA.href}
          className="navbar__cta"
        >
          {siteData.primaryCTA.text}
        </a>

        <button
          className={`navbar__toggle ${
            isMenuOpen
              ? "navbar__toggle--active"
              : ""
          }`}
          onClick={() =>
            setIsMenuOpen(!isMenuOpen)
          }
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        className={`navbar__mobile ${
          isMenuOpen
            ? "navbar__mobile--open"
            : ""
        }`}
      >
        <ul className="navbar__mobile-links">
          {siteData.navigationLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="navbar__mobile-link"
                onClick={() =>
                  setIsMenuOpen(false)
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={siteData.primaryCTA.href}
          className="navbar__mobile-cta"
          onClick={() => setIsMenuOpen(false)}
        >
          {siteData.primaryCTA.text}
        </a>

        {siteData.socialLinks.length > 0 && (
          <div className="navbar__mobile-socials">
            {siteData.socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                className="navbar__mobile-social-link"
                target="_blank"
                rel="noreferrer"
                aria-label={social.platform}
              >
                {iconMap[social.icon]}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;