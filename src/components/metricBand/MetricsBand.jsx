import "./MetricsBand.css";
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
      staggerChildren: 0.15,
    },
  },
};

function MetricsBand() {
  return (
    <motion.section
      className="metrics"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {siteData.metricsBand.map((metric) => (
        <motion.div
          key={metric.id}
          className="metrics__item"
          variants={fadeUp}
        >
          <span className="metrics__number">
            {metric.number}
          </span>

          <span className="metrics__label">
            {metric.label}
          </span>
        </motion.div>
      ))}
    </motion.section>
  );
}

export default MetricsBand;