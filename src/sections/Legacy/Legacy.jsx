import "./Legacy.css";
import { motion } from "framer-motion";
import { siteData } from "../../data/siteData";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function Legacy() {
  const { legacy } = siteData;

  return (
    <section className="legacy" id="legacy">
      <img
        src={legacy.backgroundImage}
        alt=""
        className="legacy__background"
      />

      <div className="legacy__overlay"></div>

      <motion.div
        className="legacy__content"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span
          className="legacy__eyebrow"
          variants={fadeUp}
        >
          {legacy.eyebrow}
        </motion.span>

        <motion.h2
          className="legacy__heading"
          variants={fadeUp}
        >
          Every <em>{legacy.emphasis}</em>
          <br />

          {legacy.heading[1]}
          <br />

          {legacy.heading[2]}
        </motion.h2>

        <motion.p
          className="legacy__text"
          variants={fadeUp}
        >
          {legacy.text}
        </motion.p>

        <motion.div
          className="legacy__actions"
          variants={fadeUp}
        >
          <a
            href={legacy.primaryCTA.href}
            className="legacy__button-primary"
            target="_blank"
            rel="noreferrer"
          >
            {legacy.primaryCTA.text}
          </a>

          <a
            href={legacy.secondaryCTA.href}
            className="legacy__button-secondary"
            target="_blank"
            rel="noreferrer"
          >
            {legacy.secondaryCTA.text}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Legacy;