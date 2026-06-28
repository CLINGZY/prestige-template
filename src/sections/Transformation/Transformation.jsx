import "./Transformation.css";
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

function Transformation() {
  const { transformation } = siteData;

  return (
    <section className="transformation">
      <div className="transformation__top">
        <motion.div
          className="transformation__image-wrapper"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <img
            className="transformation__image"
            src={transformation.image}
            alt="Client transformation"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="transformation__content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            className="transformation__eyebrow"
            variants={fadeUp}
          >
            {transformation.eyebrow}
          </motion.p>

          <motion.h2
            className="transformation__heading"
            variants={fadeUp}
          >
            {transformation.heading[0]}
            <br />

            {transformation.heading[1]}
            <br />

            <em>
              {transformation.heading[2]}
            </em>
          </motion.h2>

          {transformation.paragraphs.map(
            (paragraph, index) => (
              <motion.p
                key={index}
                className="transformation__text"
                variants={fadeUp}
              >
                {paragraph}
              </motion.p>
            )
          )}
        </motion.div>
      </div>

      <motion.div
        className="transformation__testimonials"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {transformation.testimonials.map(
          (testimonial) => (
            <motion.article
              key={testimonial.id}
              className="transformation__testimonial"
              variants={fadeUp}
            >
              <p>{testimonial.quote}</p>

              <span className="transformation__name">
                {testimonial.name}
              </span>

              <span className="transformation__role">
                {testimonial.role}
              </span>
            </motion.article>
          )
        )}
      </motion.div>
    </section>
  );
}

export default Transformation;