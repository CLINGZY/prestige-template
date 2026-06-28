import "./Transformation.css";

function Transformation() {
  return (
    <section className="transformation">
      <div className="transformation__top">
        <div className="transformation__image-wrapper">
          <img
            className="transformation__image"
            src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=900&q=85"
            alt=""
          />
        </div>

        <div className="transformation__content">
          <p className="transformation__eyebrow">
            What our clients experience
          </p>

          <h2 className="transformation__heading">
            The same address.
            <br />
            A completely
            <br />
            <em>different life.</em>
          </h2>

          <p className="transformation__text">
            Every project produces a transformation
            that extends beyond the physical.
            Guests arrive differently. Conversations
            change. The relationship to home deepens.
          </p>

          <p className="transformation__text">
            This is the cumulative effect of every
            decision — material, light, proportion
            and craft — resolved with intention.
          </p>
        </div>
      </div>

      <div className="transformation__testimonials">
        <article className="transformation__testimonial">
          <p>
            They didn't just redesign our office —
            they redesigned how we present ourselves.
          </p>

          <span className="transformation__name">
            Adebayo Okonkwo
          </span>

          <span className="transformation__role">
            Managing Director
          </span>
        </article>

        <article className="transformation__testimonial">
          <p>
            Every room now feels like it was made
            specifically for me, because it was.
          </p>

          <span className="transformation__name">
            Chidinma Eze
          </span>

          <span className="transformation__role">
            Private Client
          </span>
        </article>

        <article className="transformation__testimonial">
          <p>
            The team understood exactly what we
            were trying to achieve — before we did.
          </p>

          <span className="transformation__name">
            Tunde & Funmi Adeyemi
          </span>

          <span className="transformation__role">
            Residential Clients
          </span>
        </article>
      </div>
    </section>
  );
}

export default Transformation;