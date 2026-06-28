import "./Vision.css";
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

function Vision() {
  const { vision } = siteData;

  return (
    <section className="vision" id="vision">
      <motion.div
        className="vision__ghost"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        {vision.ghostNumber}
      </motion.div>

      <div className="vision__layout">
        <motion.div
          className="vision__content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="vision__heading"
            variants={fadeUp}
          >
            {vision.heading[0]}
            <br />

            {vision.heading[1]}
            <br />

            {vision.heading[2]}{" "}
            <em>{vision.heading[3]}</em>
          </motion.h2>

          {vision.paragraphs.map(
            (paragraph, index) => (
              <motion.p
                key={index}
                className="vision__text"
                variants={fadeUp}
              >
                {paragraph}
              </motion.p>
            )
          )}

          <motion.div
            className="vision__stats"
            variants={staggerContainer}
          >
            {vision.stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="vision__stat"
                variants={fadeUp}
              >
                <span className="vision__stat-number">
                  {stat.number}
                </span>

                <span className="vision__stat-label">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="vision__image-wrapper"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <img
            className="vision__image"
            src={vision.image.src}
            alt={vision.image.alt}
            loading="lazy"
          />

          <div className="vision__caption">
            <span>
              {vision.image.caption}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Vision;