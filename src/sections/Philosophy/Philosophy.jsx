import "./Philosophy.css";

function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">
      <div className="philosophy__ghost">III</div>

      <div className="philosophy__container">
        <div className="philosophy__rule"></div>

        <p className="philosophy__quote">
          The standard is not excellence.
          <br />
          The standard is <em>inevitability</em> —
          <br />
          spaces that could not have been
          <br />
          designed any other way.
        </p>

        <div className="philosophy__body">
          <p>
            We begin every project with a period of
            deep listening. We study how our clients
            move through their day, how light enters
            their world, what the space is being asked
            to hold. Only then do we begin to design.
          </p>

          <p>
            This process takes longer than most studios
            are willing to invest. It is also why our
            projects never feel dated, never need to
            be redone, and why our clients rarely
            return to anyone else.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;