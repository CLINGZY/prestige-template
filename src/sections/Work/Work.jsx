import "./Work.css";

function Work() {
  return (
    <section className="work" id="work">
      <div className="work__intro">
        <h2 className="work__heading">
          Projects
          <br />
          that <em>outlive</em>
          <br />
          the moment.
        </h2>

        <p className="work__text">
          Each commission is a singular act of collaboration —
          between our studio, our clients, and the unique demands
          of place. No two spaces share the same resolution.
          Below is a selection of our most defining work.
        </p>
      </div>

        <article className="work__featured">
            <img
            className="work__featured-image"
            src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1800&q=85"
            alt=""
            />

            <div className="work__featured-overlay"></div>

            <div className="work__featured-content">
                <div>
                    <span className="work__tag">
                    Residential — Abuja
                    </span>

                    <h3 className="work__project-name">
                    The Maitama
                    <br />
                    House
                    </h3>

                    <p className="work__project-description">
                    A private residence designed around permanence,
                    natural light and family ceremony.
                    </p>
                </div>

                <div className="work__meta">
                    <span>Year</span>
                    <strong>2023</strong>
                </div>
            </div>
        </article>



        <div className="work__grid">
            <article className="work__grid-item">
                <img
                className="work__grid-image"
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80"
                alt=""
                />

                <div className="work__grid-overlay"></div>

                <div className="work__grid-content">
                <span className="work__grid-tag">
                    Residential — Lagos
                </span>

                <h3 className="work__grid-title">
                    Victoria Island Penthouse
                </h3>
                </div>
            </article>

            <article className="work__grid-item">
                <img
                className="work__grid-image"
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=700&q=80"
                alt=""
                />

                <div className="work__grid-overlay"></div>

                <div className="work__grid-content">
                <span className="work__grid-tag">
                    Commercial — Lagos
                </span>

                <h3 className="work__grid-title">
                    Lekki Corporate HQ
                </h3>
                </div>
            </article>
            </div>

            <div className="work__stack">
            <article className="work__grid-item">
                <img
                className="work__grid-image"
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
                alt=""
                />

                <div className="work__grid-overlay"></div>

                <div className="work__grid-content">
                <span className="work__grid-tag">
                    Kitchen — Lagos
                </span>

                <h3 className="work__grid-title">
                    Ikoyi Bespoke Kitchen
                </h3>
                </div>
            </article>

            <article className="work__grid-item">
                <img
                className="work__grid-image"
                src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1000&q=80"
                alt=""
                />

                <div className="work__grid-overlay"></div>

                <div className="work__grid-content">
                <span className="work__grid-tag">
                    Hospitality — Port Harcourt
                </span>

                <h3 className="work__grid-title">
                    GRA Hospitality Suite
                </h3>
                </div>
            </article>
            </div>
    </section>
  );
}

export default Work;