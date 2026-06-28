import "./Work.css";
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

function Work() {
  const { work } = siteData;

  const topProjects = work.projects.slice(0, 2);
  const bottomProjects = work.projects.slice(2, 4);

  return (
    <section className="work" id="work">
      <motion.div
        className="work__intro"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="work__heading"
          variants={fadeUp}
        >
          {work.heading[0]}
          <br />
          {work.heading[1]} <em>{work.heading[2]}</em>
          <br />
          {work.heading[3]}
        </motion.h2>

        <motion.p
          className="work__text"
          variants={fadeUp}
        >
          {work.description}
        </motion.p>
      </motion.div>

      <motion.article
        className="work__featured"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <img
          className="work__featured-image"
          src={work.featuredProject.image}
          alt={work.featuredProject.title.join(" ")}
        />

        <div className="work__featured-overlay"></div>

        <div className="work__featured-content">
          <div>
            <span className="work__tag">
              {work.featuredProject.tag}
            </span>

            <h3 className="work__project-name">
              {work.featuredProject.title[0]}
              <br />
              {work.featuredProject.title[1]}
            </h3>

            <p className="work__project-description">
              {work.featuredProject.description}
            </p>
          </div>

          <div className="work__meta">
            <span>Year</span>

            <strong>
              {work.featuredProject.year}
            </strong>
          </div>
        </div>
      </motion.article>

      <div className="work__grid">
        {topProjects.map((project) => (
          <motion.article
            key={project.id}
            className="work__grid-item"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <img
              className="work__grid-image"
              src={project.image}
              alt={project.title}
            />

            <div className="work__grid-overlay"></div>

            <div className="work__grid-content">
              <span className="work__grid-tag">
                {project.tag}
              </span>

              <h3 className="work__grid-title">
                {project.title}
              </h3>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="work__stack">
        {bottomProjects.map((project) => (
          <motion.article
            key={project.id}
            className="work__grid-item"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <img
              className="work__grid-image"
              src={project.image}
              alt={project.title}
            />

            <div className="work__grid-overlay"></div>

            <div className="work__grid-content">
              <span className="work__grid-tag">
                {project.tag}
              </span>

              <h3 className="work__grid-title">
                {project.title}
              </h3>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Work;