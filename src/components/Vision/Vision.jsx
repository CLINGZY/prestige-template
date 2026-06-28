import "./Vision.css";

function Vision() {
  return (
    <section className="vision" id="vision">
      <div className="vision__ghost">I</div>

      <div className="vision__layout">
        <div className="vision__content">
          <h2 className="vision__heading">
            We don't design
            <br />
            interiors.
            <br />
            We design <em>legacies.</em>
          </h2>

          <p className="vision__text">
            Forma was built on a single conviction: the environments you inhabit
            shape the person you become, the clients you attract, and the life
            you lead. Every project we undertake begins not with measurements,
            but with intention.
          </p>

          <p className="vision__text">
            Our work sits at the intersection of architectural precision and
            artistic restraint — spaces that feel inevitable rather than
            decorated, as though they could not have existed any other way.
          </p>

          <div className="vision__stats">
            <div className="vision__stat">
              <span className="vision__stat-number">14</span>
              <span className="vision__stat-label">
                Years of practice
              </span>
            </div>

            <div className="vision__stat">
              <span className="vision__stat-number">
                200<sup>+</sup>
              </span>
              <span className="vision__stat-label">
                Projects completed
              </span>
            </div>

            <div className="vision__stat">
              <span className="vision__stat-number">3</span>
              <span className="vision__stat-label">
                Countries served
              </span>
            </div>
          </div>
        </div>

        <div className="vision__image-wrapper">
          <img
            className="vision__image"
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=85"
            alt="Luxury Interior"
          />

          <div className="vision__caption">
            <span>Ikoyi Residence, Lagos — 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;