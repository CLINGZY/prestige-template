import "./Vision.css";
import { siteData } from "../../data/siteData";

function Vision() {
  const { vision } = siteData;

  return (
    <section className="vision" id="vision">
      <div className="vision__ghost">
        {vision.ghostNumber}
      </div>

      <div className="vision__layout">
        <div className="vision__content">
          <h2 className="vision__heading">
            {vision.heading[0]}
            <br />

            {vision.heading[1]}
            <br />

            {vision.heading[2]}{" "}
            <em>{vision.heading[3]}</em>
          </h2>

          {vision.paragraphs.map(
            (paragraph, index) => (
              <p
                key={index}
                className="vision__text"
              >
                {paragraph}
              </p>
            )
          )}

          <div className="vision__stats">
            {vision.stats.map((stat) => (
              <div
                key={stat.id}
                className="vision__stat"
              >
                <span className="vision__stat-number">
                  {stat.number}
                </span>

                <span className="vision__stat-label">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="vision__image-wrapper">
          <img
            className="vision__image"
            src={vision.image.src}
            alt={vision.image.alt}
            loading="lazy"
          />

          <div className="vision__caption">
            <span>
              {vision.image.caption}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;