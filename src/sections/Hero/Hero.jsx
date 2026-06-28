import "./Hero.css";
import { siteData } from "../../data/siteData";

function Hero() {
  return (
    <section className="hero">

      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
        alt={`${siteData.businessName} hero`}
        className="hero__image"
      />

      <div className="hero__overlay"></div>

      <div className="hero__number">
        I
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
      </div>

      <div className="hero__scrollIndicator">
        <span>Scroll</span>

        <div className="hero__scrollLine"></div>
      </div>

    </section>
  );
}

export default Hero;