import "./Work.css";
import { siteData } from "../../data/siteData";

function Work() {
  const { work } = siteData;

  const topProjects = work.projects.slice(0, 2);
  const bottomProjects = work.projects.slice(2, 4);

  return (
    <section className="work" id="work">
      <div className="work__intro">
        <h2 className="work__heading">
          {work.heading[0]}
          <br />
          {work.heading[1]} <em>{work.heading[2]}</em>
          <br />
          {work.heading[3]}
        </h2>

        <p className="work__text">
          {work.description}
        </p>
      </div>

      <article className="work__featured">
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
      </article>

      <div className="work__grid">
        {topProjects.map((project) => (
          <article
            key={project.id}
            className="work__grid-item"
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
          </article>
        ))}
      </div>

      <div className="work__stack">
        {bottomProjects.map((project) => (
          <article
            key={project.id}
            className="work__grid-item"
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
          </article>
        ))}
      </div>
    </section>
  );
}

export default Work;