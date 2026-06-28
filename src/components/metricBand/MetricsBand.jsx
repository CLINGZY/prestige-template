import "./MetricsBand.css";

function MetricsBand() {
  return (
    <section className="metrics">
      <div className="metrics__item">
        <span className="metrics__number">
          ₦2.4<sup>B</sup>
        </span>
        <span className="metrics__label">
          Total project value delivered
        </span>
      </div>

      <div className="metrics__item">
        <span className="metrics__number">
          97<sup>%</sup>
        </span>
        <span className="metrics__label">
          Clients return for a second project
        </span>
      </div>

      <div className="metrics__item">
        <span className="metrics__number">18</span>
        <span className="metrics__label">
          Industry awards received
        </span>
      </div>

      <div className="metrics__item">
        <span className="metrics__number">
          4.2<sup>×</sup>
        </span>
        <span className="metrics__label">
          Average property value increase
        </span>
      </div>
    </section>
  );
}

export default MetricsBand;