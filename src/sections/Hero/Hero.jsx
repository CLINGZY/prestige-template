import "./Hero.css";
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
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function Hero() {
  return (
    <section className="hero" id="hero">
      <motion.img
        src={siteData.hero.image}
        alt={`${siteData.logo.text} hero`}
        className="hero__image"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8,
          ease: "easeOut",
        }}
      />

      <div className="hero__overlay"></div>

      <motion.div
        className="hero__number"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
        }}
      >
        {siteData.hero.chapterNumber}
      </motion.div>

      <motion.div
        className="hero__content"
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.2,
        }}
      >
        <motion.p
          className="hero__eyebrow"
          variants={fadeUp}
        >
          {siteData.hero.eyebrow}
        </motion.p>

        <motion.h1
          className="hero__title"
          variants={fadeUp}
        >
          {siteData.hero.title[0]}
          <br />

          {siteData.hero.title[1]}
          <br />

          <em>{siteData.hero.title[2]}</em>
        </motion.h1>

        <motion.p
          className="hero__description"
          variants={fadeUp}
        >
          {siteData.hero.description}
        </motion.p>

        <motion.a
          href={siteData.hero.primaryCTA.href}
          className="hero__cta"
          variants={fadeUp}
        >
          {siteData.hero.primaryCTA.text}
        </motion.a>
      </motion.div>

      <motion.div
        className="hero__scrollIndicator"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span>Scroll</span>

        <div className="hero__scrollLine"></div>
      </motion.div>
    </section>
  );
}

export default Hero;