import "./Transformation.css";
import { siteData } from "../../data/siteData";

function Transformation() {
  const { transformation } = siteData;

  return (
    <section className="transformation">
      <div className="transformation__top">
        <div className="transformation__image-wrapper">
          <img
            className="transformation__image"
            src={transformation.image}
            alt="Client transformation"
            loading="lazy"
          />
        </div>

        <div className="transformation__content">
          <p className="transformation__eyebrow">
            {transformation.eyebrow}
          </p>

          <h2 className="transformation__heading">
            {transformation.heading[0]}
            <br />

            {transformation.heading[1]}
            <br />

            <em>
              {transformation.heading[2]}
            </em>
          </h2>

          {transformation.paragraphs.map(
            (paragraph, index) => (
              <p
                key={index}
                className="transformation__text"
              >
                {paragraph}
              </p>
            )
          )}
        </div>
      </div>

      <div className="transformation__testimonials">
        {transformation.testimonials.map(
          (testimonial) => (
            <article
              key={testimonial.id}
              className="transformation__testimonial"
            >
              <p>{testimonial.quote}</p>

              <span className="transformation__name">
                {testimonial.name}
              </span>

              <span className="transformation__role">
                {testimonial.role}
              </span>
            </article>
          )
        )}
      </div>
    </section>
  );
}

export default Transformation;