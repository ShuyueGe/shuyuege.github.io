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
    </section>

    <section className="v2-section patsy-v2-research" aria-labelledby="patsy-v2-research">
      <div className="patsy-v2-research-content">
        <SectionHeading id="patsy-v2-research" title={copy.research.title} />
        <div className="patsy-v2-survey-counts">
          {copy.research.counts.map(item => <p key={item.lead}><strong>{item.lead}</strong>{" "}{item.text}</p>)}
        </div>
      </div>
      <div className="patsy-v2-research-response">
        <p className="v2-prose">{copy.research.decision}</p>
        <p className="v2-note">{copy.research.tradeoff}</p>
        <p className="patsy-v2-small">{copy.research.sample}</p>
      </div>
      <EvidenceImage {...copy.assets.original} className="patsy-v2-original"
        crop={{ ratio: "992 / 900", position: "top" }} />
    </section>

    <section className="v2-section patsy-v2-ordering" aria-labelledby="patsy-v2-ordering">
      <SectionHeading id="patsy-v2-ordering" title={copy.ordering.title} />
      <p className="v2-prose patsy-v2-ordering-intro">{copy.ordering.intro}</p>
      <div className="patsy-v2-decision-copy">
        <p className="patsy-v2-observation">{copy.ordering.observation}</p>
        <p>{copy.ordering.hotspot}</p>
      </div>
      <div className="patsy-v2-ordering-bridge">
        <p className="v2-prose patsy-v2-revision">{copy.ordering.revision}</p>
      </div>
        <div className="patsy-v2-menu-comparison">
          <div className="patsy-v2-tested">
            <p className="patsy-v2-evidence-label">{copy.ordering.testedLabel}</p>
            <EvidenceImage {...copy.assets.testedMenu} regions={[{ left: 305, top: 55, width: 256, height: 365 }]} />
          </div>
          <div className="patsy-v2-revised">
            <p className="patsy-v2-evidence-label">{copy.ordering.revisedLabel}</p>
            <EvidenceImage {...copy.assets.revisedMenu} crop={{ ratio: "804 / 1180", position: "top" }} />
          </div>
        </div>
      <div className="patsy-v2-flow-stage">
        <h3>{copy.ordering.sequenceLabel}</h3>
        <p className="v2-note patsy-v2-flow-limitation">{copy.ordering.limitation}</p>
        <ol className="patsy-v2-flow">
          {copy.ordering.sequence.map((step, index) => <li key={step.asset}>
            <h4><span className="patsy-v2-step-number" aria-hidden="true">{index + 1}</span>{step.title}</h4>
            <EvidenceImage {...copy.assets[step.asset]}
              crop={index === 1 ? undefined : { ratio: index === 0 ? "804 / 670" : "804 / 660", position: "bottom" }}
              regions={index === 1 ? [{ left: 0, top: 734, width: 804, height: 402 }, { left: 0, top: 1590, width: 804, height: 168 }] : undefined} />
          </li>)}
        </ol>
      </div>
    </section>

    <section className="v2-section v2-section--support patsy-v2-reservation" aria-labelledby="patsy-v2-reservation">
      <div>
        <SectionHeading id="patsy-v2-reservation" title={copy.reservation.title} />
        <p className="v2-prose">{copy.reservation.text}</p>
      </div>
      <EvidenceImage {...copy.assets.reservation} className="patsy-v2-reservation-image"
        crop={{ ratio: "804 / 910", position: "bottom" }} />
    </section>

    <section className="patsy-v2-mockups" aria-labelledby="patsy-v2-mockups-heading">
      <details className="v2-details">
        <summary id="patsy-v2-mockups-heading">
          <span className="patsy-v2-disclosure-title">Final mockups</span>
          <span className="patsy-v2-disclosure-action">
            <span className="patsy-v2-disclosure-show">Show gallery</span>
            <span className="patsy-v2-disclosure-hide">Hide gallery</span>
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
              <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </summary>
        <div className="patsy-v2-mockup-groups">
          {finalMockupGroups.map(group => <div className="patsy-v2-mockup-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className={`patsy-v2-mockup-grid${group.screens.length === 3 ? " patsy-v2-mockup-grid--three" : ""}`}>
              {group.screens.map(([label, file]) => <div key={file}>
                <h4>{label}</h4>
                <EvidenceImage src={`/images/projects/patsy/${file}`} width={804} height={1758}
                  alt={`Full team prototype screen: ${label}`} />
              </div>)}
            </div>
          </div>)}
        </div>
      </details>
    </section>

    <section className="v2-ending patsy-v2-ending" aria-labelledby="patsy-v2-boundary">
      <SectionHeading id="patsy-v2-boundary" title={copy.boundary.title} />
      <div>
        <p className="v2-prose">{copy.boundary.text}</p>
      </div>
    </section>
  </PreviewShell>;
}
const finalMockupGroups = [
  { title: "Home & menus", screens: [
    ["Home", "after-Landing Page.png"],
    ["Starters", "after-Menu 1.png"],
    ["Entrées", "after-Menu 2.png"],
  ] },
  { title: "Pickup", screens: [
    ["Empty cart", "after-Cart step1.png"],
    ["Order review", "after-Cart step2.png"],
    ["Checkout", "after-Cart step3.png"],
    ["Order confirmation", "after-Cart step4.png"],
  ] },
  { title: "Reservations", screens: [
    ["Reservation details", "after-Reservation step1.png"],
    ["Guest count", "after-Reservation step2.png"],
    ["Reservation review", "after-Reservation step3.png"],
    ["Reservation confirmation", "after-Reservation step4.png"],
  ] },
] as const;
