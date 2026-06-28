import "./Footer.css";
import { motion } from "framer-motion";
import { siteData } from "../../data/siteData";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Footer() {
  const { footer } = siteData;

  return (
    <footer className="footer">
      <motion.div
        className="footer__top"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="footer__brand"
          variants={fadeUp}
        >
          <h2 className="footer__brand-name">
            {footer.brand.name}
          </h2>

          <p className="footer__brand-text">
            {footer.brand.description}
          </p>
        </motion.div>

        {footer.columns.map((column, index) => (
          <motion.div
            key={index}
            className="footer__column"
            variants={fadeUp}
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
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="footer__bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <span>{footer.copyright}</span>

        <span className="footer__locations">
          {footer.locations}
        </span>
      </motion.div>
    </footer>
  );
}

export default Footer;