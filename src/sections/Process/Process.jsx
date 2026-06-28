import "./Process.css";

const steps = [
  {
    number: "01",
    title: "Discovery & Immersion",
    body:
      "We spend the first weeks doing nothing but listening. We study your life, work, routines and ambitions. Everything informs the design."
  },
  {
    number: "02",
    title: "Concept Development",
    body:
      "We present a single fully resolved concept. Every decision connects back to a principle and your original brief."
  },
  {
    number: "03",
    title: "Material & Craft Selection",
    body:
      "Materials are selected not only for appearance, but for longevity, maintenance, origin and how they interact with light."
  },
  {
    number: "04",
    title: "Delivery & Stewardship",
    body:
      "We remain involved until the space is exactly as designed and continue supporting our clients long after completion."
  }
];

function Process() {
  return (
    <section className="process" id="process">
      <div className="process__ghost">V</div>

      <div className="process__header">
        <h2 className="process__heading">
          How we
          <br />
          <em>work.</em>
        </h2>

        <p className="process__intro">
          Our process is not a formula. It is a discipline —
          a set of convictions about how to move from a brief
          to a space that exceeds expectations.
        </p>
      </div>

      <div className="process__steps">
        {steps.map((step) => (
          <article
            key={step.number}
            className="process__step"
          >
            <span className="process__number">
              {step.number}
            </span>

            <h3 className="process__title">
              {step.title}
            </h3>

            <p className="process__body">
              {step.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Process;