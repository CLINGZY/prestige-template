import "./Legacy.css";

function Legacy() {
  return (
    <section className="legacy" id="contact">
      <div className="legacy__background"></div>

      <div className="legacy__content">
        <span className="legacy__eyebrow">
          Begin a conversation
        </span>

        <h2 className="legacy__heading">
          Every <em>great</em>
          <br />
          space begins
          <br />
          with a question.
        </h2>

        <p className="legacy__text">
          We take on a limited number of projects each year.
          If you are considering a space that matters, we
          would like to hear from you.
        </p>

        <div className="legacy__actions">
          <a
            href="mailto:hello@company.com"
            className="legacy__button-primary"
          >
            Send an Enquiry
          </a>

          <a
            href="tel:+2348000000000"
            className="legacy__button-secondary"
          >
            +234 800 000 0000
          </a>
        </div>
      </div>
    </section>
  );
}

export default Legacy;