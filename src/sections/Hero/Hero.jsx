import "./Hero.css";
import { siteData } from "../../data/siteData";

function Hero() {
  return (
    <section className="hero" id="hero">
      <img
        src={siteData.hero.image}
        alt={`${siteData.logo.text} hero`}
        className="hero__image"
      />

      <div className="hero__overlay"></div>

      <div className="hero__number">
        {siteData.hero.chapterNumber}
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">
          {siteData.hero.eyebrow}
        </p>

        <h1 className="hero__title">
          {siteData.hero.title[0]}
          <br />

          {siteData.hero.title[1]}
          <br />

          <em>{siteData.hero.title[2]}</em>
        </h1>

        <p className="hero__description">
          {siteData.hero.description}
        </p>

        <a
          href={siteData.hero.primaryCTA.href}
          className="hero__cta"
        >
          {siteData.hero.primaryCTA.text}
        </a>
      </div>

      <div className="hero__scrollIndicator">
        <span>Scroll</span>

        <div className="hero__scrollLine"></div>
      </div>
    </section>
  );
}

export default Hero;