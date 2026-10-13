import { EvidenceImage, PreviewMeta, PreviewShell, SectionHeading } from "./PreviewShared";
import { patsyV2 as copy } from "./content/patsyV2";
import "./PatsyV2.css";

export function PatsyV2() {
  return <PreviewShell project="patsy" title={copy.project} sections={copy.sections}>
    <section className="v2-hero patsy-v2-hero" aria-labelledby="patsy-v2-title">
      <div className="patsy-v2-hero-copy">
        <p className="v2-label">{copy.label}</p>
        <h1 id="patsy-v2-title">{copy.title}</h1>
        <p className="v2-lead">{copy.intro}</p>
        <PreviewMeta items={copy.meta} />
      </div>
      <EvidenceImage {...copy.assets.landing} className="patsy-v2-hero-image"
        crop={{ ratio: "804 / 1040", position: "top" }} />
      <div className="patsy-v2-contribution">
        <h2>{copy.contributionTitle}</h2>
        <p>{copy.contribution}</p>
      </div>
    </section>

    <section className="v2-section patsy-v2-research" aria-labelledby="patsy-v2-research">
      <div className="patsy-v2-research-content">
        <SectionHeading id="patsy-v2-research" title={copy.research.title} />
        <p className="v2-prose">{copy.research.text}</p>
        <div className="patsy-v2-survey">
          {copy.research.counts.map(item => <p key={item.lead}><strong>{item.lead}</strong>{" "}{item.text}</p>)}
          <p className="patsy-v2-small">{copy.research.countNote}</p>
        </div>
        <p className="v2-prose">{copy.research.decision}</p>
      </div>
      <EvidenceImage {...copy.assets.original} className="patsy-v2-original"
        crop={{ ratio: "992 / 1080", position: "top" }} />
      <p className="patsy-v2-research-sample patsy-v2-small">{copy.research.sample}</p>
    </section>

    <section className="v2-section patsy-v2-ordering" aria-labelledby="patsy-v2-ordering">
      <SectionHeading id="patsy-v2-ordering" title={copy.ordering.title} />
      <p className="v2-prose patsy-v2-ordering-intro">{copy.ordering.intro}</p>
      <div className="patsy-v2-decision-grid">
        <div className="patsy-v2-decision-copy">
          <div className="patsy-v2-observation">
            <h3>{copy.ordering.observationTitle}</h3>
            <p>{copy.ordering.observation}</p>
          </div>
          <div className="patsy-v2-hotspot">
            <h3>{copy.ordering.hotspotTitle}</h3>
            <p>{copy.ordering.hotspot}</p>
          </div>
          <div className="patsy-v2-revision">
            <h3>{copy.ordering.revisedTitle}</h3>
            <p>{copy.ordering.revision}</p>
          </div>
        </div>
        <div className="patsy-v2-menu-comparison">
          <div className="patsy-v2-tested">
            <p className="patsy-v2-evidence-label">{copy.ordering.testedLabel}</p>
            <EvidenceImage {...copy.assets.testedMenu} crop={{ ratio: "292 / 638", position: "right top" }} />
          </div>
          <div className="patsy-v2-revised">
            <p className="patsy-v2-evidence-label">{copy.ordering.revisedLabel}</p>
            <EvidenceImage {...copy.assets.revisedMenu} crop={{ ratio: "804 / 1180", position: "top" }} />
          </div>
        </div>
      </div>
      <div className="patsy-v2-flow-stage">
        <h3>{copy.ordering.sequenceLabel}</h3>
        <p className="v2-note patsy-v2-flow-limitation">{copy.ordering.limitation}</p>
        <ol className="patsy-v2-flow">
          {copy.ordering.sequence.map((step, index) => <li key={step.asset}>
            <h4><span className="patsy-v2-step-number" aria-hidden="true">{index + 1}</span>{step.title}</h4>
            <EvidenceImage {...copy.assets[step.asset]} />
          </li>)}
        </ol>
      </div>
    </section>

    <section className="v2-section v2-section--support patsy-v2-reservation" aria-labelledby="patsy-v2-reservation">
      <div>
        <SectionHeading id="patsy-v2-reservation" title={copy.reservation.title} />
        <p className="v2-prose">{copy.reservation.text}</p>
        <p className="v2-prose">{copy.reservation.tradeoff}</p>
      </div>
      <EvidenceImage {...copy.assets.reservation} className="patsy-v2-reservation-image"
        crop={{ ratio: "804 / 910", position: "bottom" }} />
    </section>

    <section className="v2-ending patsy-v2-ending" aria-labelledby="patsy-v2-boundary">
      <SectionHeading id="patsy-v2-boundary" title={copy.boundary.title} />
      <div><p className="v2-prose">{copy.boundary.text}</p>
        <p className="v2-prose">{copy.boundary.reflection}</p></div>
    </section>
  </PreviewShell>;
}
