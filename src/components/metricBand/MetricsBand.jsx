import "./MetricsBand.css";
import { siteData } from "../../data/siteData";

function MetricsBand() {
  return (
    <section className="metrics">
      {siteData.metricsBand.map((metric) => (
        <div
          key={metric.id}
          className="metrics__item"
        >
          <span className="metrics__number">
            {metric.number}
          </span>

          <span className="metrics__label">
            {metric.label}
          </span>
        </div>
      ))}
    </section>
  );
}

export default MetricsBand;