import "./QuoteStrip.css";

function QuoteStrip() {
  return (
    <section className="quote-strip">
      <div className="quote-strip__background"></div>

      <div className="quote-strip__overlay">
        <div className="quote-strip__content">
          <p className="quote-strip__text">
            "We do not ask what our clients want their
            space to look like. We ask what they want
            their space to make <em>possible.</em>"
          </p>
        </div>
      </div>
    </section>
  );
}

export default QuoteStrip;