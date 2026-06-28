import "./Footer.css";
import { siteData } from "../../data/siteData";

function Footer() {
  const { footer } = siteData;

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <h2 className="footer__brand-name">
            {footer.brand.name}
          </h2>

          <p className="footer__brand-text">
            {footer.brand.description}
          </p>
        </div>

        {footer.columns.map((column, index) => (
          <div
            key={index}
            className="footer__column"
          >
            <h3 className="footer__title">
              {column.title}
            </h3>

            <ul className="footer__links">
              {column.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <span>{footer.copyright}</span>

        <span className="footer__locations">
          {footer.locations}
        </span>
      </div>
    </footer>
  );
}

export default Footer;