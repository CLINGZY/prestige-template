import "./QuoteStrip.css";
import { motion } from "framer-motion";
import { siteData } from "../../data/siteData";

function QuoteStrip() {
  const { quoteStrip } = siteData;

  return (
    <section className="quote-strip">
      <img
        src={quoteStrip.image}
        alt=""
        className="quote-strip__background"
      />

      <div className="quote-strip__overlay">
        <motion.div
          className="quote-strip__content"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p className="quote-strip__text">
            "{quoteStrip.quote[0]}
            <br />

            {quoteStrip.quote[1]}
            <br />

            {quoteStrip.quote[2]}{" "}
            <em>{quoteStrip.emphasis}</em>"
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default QuoteStrip;