import "./Process.css";
import { siteData } from "../../data/siteData";

function Process() {
  const { process } = siteData;

  return (
    <section className="process" id="process">
      <div className="process__ghost">
        {process.ghostNumber}
      </div>

      <div className="process__header">
        <h2 className="process__heading">
          {process.heading[0]}
          <br />

          <em>{process.heading[1]}</em>
        </h2>

        <p className="process__intro">
          {process.intro}
        </p>
      </div>

      <div className="process__steps">
        {process.steps.map((step) => (
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