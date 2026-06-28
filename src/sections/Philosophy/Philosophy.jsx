import "./Philosophy.css";
import { siteData } from "../../data/siteData";

function Philosophy() {
  const { philosophy } = siteData;

  return (
    <section
      className="philosophy"
      id="philosophy"
    >
      <div className="philosophy__ghost">
        {philosophy.ghostNumber}
      </div>

      <div className="philosophy__container">
        <div className="philosophy__rule"></div>

        <p className="philosophy__quote">
          {philosophy.quote[0]}
          <br />

          {philosophy.quote[1]}{" "}
          <em>{philosophy.emphasis}</em> —
          <br />

          {philosophy.quote[2]}
          <br />

          {philosophy.quote[3]}
        </p>

        <div className="philosophy__body">
          {philosophy.paragraphs.map(
            (paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Philosophy;