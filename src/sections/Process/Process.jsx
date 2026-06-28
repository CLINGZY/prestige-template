import "./Process.css";
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

function Process() {
  const { process } = siteData;

  return (
    <section className="process" id="process">
      <motion.div
        className="process__ghost"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        {process.ghostNumber}
      </motion.div>

      <motion.div
        className="process__header"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="process__heading"
          variants={fadeUp}
        >
          {process.heading[0]}
          <br />

          <em>{process.heading[1]}</em>
        </motion.h2>

        <motion.p
          className="process__intro"
          variants={fadeUp}
        >
          {process.intro}
        </motion.p>
      </motion.div>

      <motion.div
        className="process__steps"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {process.steps.map((step) => (
          <motion.article
            key={step.number}
            className="process__step"
            variants={fadeUp}
          >
            <span className="process__number">
              {step.number}
            </span>

            <h3 className="process__title">
              {step.title}
            </h3>

            <p className="process__body">
              {step.body}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default Process;