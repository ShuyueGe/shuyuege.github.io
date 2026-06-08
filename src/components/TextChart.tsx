import type { TextChartVisual } from "../types/project";

interface TextChartProps {
  visual: TextChartVisual;
}

export function TextChart({ visual }: TextChartProps) {
  return (
    <section className="structured-section">
      <div className="structured-section__heading">
        <p className="section-label">{visual.title}</p>
        <h2>{visual.intro}</h2>
      </div>
      <div className="text-chart">
        {visual.items.map((item, index) => (
          <article key={item.label}>
            <span className="text-chart__number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </div>
            {item.emphasis ? (
              <strong className="text-chart__emphasis">{item.emphasis}</strong>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

