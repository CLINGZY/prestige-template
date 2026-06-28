import "./QuoteStrip.css";
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
        <div className="quote-strip__content">
          <p className="quote-strip__text">
            "{quoteStrip.quote[0]}
            <br />

            {quoteStrip.quote[1]}
            <br />

            {quoteStrip.quote[2]}{" "}
            <em>{quoteStrip.emphasis}</em>"
          </p>
        </div>
      </div>
    </section>
  );
}

export default QuoteStrip;