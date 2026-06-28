import "./Legacy.css";
import { siteData } from "../../data/siteData";

function Legacy() {
  const { legacy } = siteData;

  return (
    <section className="legacy" id="legacy">
      <img
        src={legacy.backgroundImage}
        alt=""
        className="legacy__background"
      />

      <div className="legacy__overlay"></div>

      <div className="legacy__content">
        <span className="legacy__eyebrow">
          {legacy.eyebrow}
        </span>

        <h2 className="legacy__heading">
          Every <em>{legacy.emphasis}</em>
          <br />

          {legacy.heading[1]}
          <br />

          {legacy.heading[2]}
        </h2>

        <p className="legacy__text">
          {legacy.text}
        </p>

        <div className="legacy__actions">
          <a
            href={legacy.primaryCTA.href}
            className="legacy__button-primary"
            target="_blank"
            rel="noreferrer"
          >
            {legacy.primaryCTA.text}
          </a>

          <a
            href={legacy.secondaryCTA.href}
            className="legacy__button-secondary"
            target="_blank"
            rel="noreferrer"
          >
            {legacy.secondaryCTA.text}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Legacy;