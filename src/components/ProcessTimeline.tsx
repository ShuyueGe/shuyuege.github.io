import type { ProcessTimelineVisual } from "../types/project";

interface ProcessTimelineProps {
  visual: ProcessTimelineVisual;
}

export function ProcessTimeline({ visual }: ProcessTimelineProps) {
  return (
    <section className="structured-section">
      <div className="structured-section__heading">
        <p className="section-label">{visual.title}</p>
        <h2>{visual.intro}</h2>
      </div>
      <ol className="process-timeline">
        {visual.steps.map((step, index) => (
          <li key={step.title}>
            <span className="process-timeline__number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{step.title}</h3>
            <p>{step.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

