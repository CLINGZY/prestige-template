import "./Philosophy.css";
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

function Philosophy() {
  const { philosophy } = siteData;

  return (
    <section
      className="philosophy"
      id="philosophy"
    >
      <motion.div
        className="philosophy__ghost"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        {philosophy.ghostNumber}
      </motion.div>

      <motion.div
        className="philosophy__container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="philosophy__rule"
          variants={fadeUp}
        ></motion.div>

        <motion.p
          className="philosophy__quote"
          variants={fadeUp}
        >
          {philosophy.quote[0]}
          <br />

          {philosophy.quote[1]}{" "}
          <em>{philosophy.emphasis}</em> —
          <br />

          {philosophy.quote[2]}
          <br />

          {philosophy.quote[3]}
        </motion.p>

        <motion.div
          className="philosophy__body"
          variants={staggerContainer}
        >
          {philosophy.paragraphs.map(
            (paragraph, index) => (
              <motion.p
                key={index}
                variants={fadeUp}
              >
                {paragraph}
              </motion.p>
            )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Philosophy;