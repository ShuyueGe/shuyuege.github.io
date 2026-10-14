import { assetUrl, EvidenceImage, PreviewMeta, PreviewShell, SectionHeading } from "./PreviewShared";
import { bookthingV2 as copy, bookthingV2Assets as assets } from "./content/bookthingV2";
import "./BookThingV2.css";

export function BookThingV2() {
  return <PreviewShell project="bookthing" title={copy.projectName} sections={copy.sections}>
    <section className="v2-hero bookthing-v2-hero" aria-labelledby="bookthing-v2-title">
      <header className="bookthing-v2-hero-heading">
        <p className="v2-label">{copy.hero.eyebrow}</p>
        <h1 id="bookthing-v2-title">{copy.hero.title}</h1>
      </header>
      <div className="bookthing-v2-hero-reading"><p className="v2-lead">{copy.hero.intro}</p></div>
      <PreviewMeta items={copy.hero.metadata} />
    </section>

    <section className="v2-section bookthing-v2-ia" aria-labelledby={copy.sections[0].id}>
      <div className="bookthing-v2-section-intro">
        <SectionHeading id={copy.sections[0].id} title={copy.ia.title} />
        <div className="bookthing-v2-section-copy">{copy.ia.body.map(paragraph => <p className="v2-prose" key={paragraph}>{paragraph}</p>)}</div>
      </div>
      <div className="bookthing-v2-map-comparison">
        <div><h3>{copy.ia.originalLabel}</h3><EvidenceImage {...assets.originalBranches} /></div>
        <div><h3>{copy.ia.revisedLabel}</h3><EvidenceImage {...assets.revisedBranches} /></div>
      </div>
      <p className="v2-prose bookthing-v2-ia-decision">{copy.ia.decision}</p>
      <details className="v2-details bookthing-v2-full-diagrams">
        <summary>{copy.ia.fullEvidenceLabel}</summary>
        <EvidenceImage {...assets.fullOriginal} />
        <EvidenceImage {...assets.fullTasks} />
        <EvidenceImage {...assets.fullRevised} />
      </details>
    </section>

    <section className="v2-section bookthing-v2-donation" aria-labelledby={copy.sections[1].id}>
      <div className="bookthing-v2-section-intro">
        <SectionHeading id={copy.sections[1].id} title={copy.donation.title} />
        <div className="bookthing-v2-section-copy">
          {copy.donation.body.map(paragraph => <p className="v2-prose" key={paragraph}>{paragraph}</p>)}

        </div>
      </div>
      <div className="bookthing-v2-donation-original">
        <h3>{copy.donation.originalLabel}</h3>
        <EvidenceImage {...assets.originalDonation} regions={[{ left: 20, top: 2070, width: 730, height: 515 }]} />
      </div>
      <h3 className="bookthing-v2-revised-label">{copy.donation.revisedLabel}</h3>
      <div className="bookthing-v2-donation-desktop"><EvidenceImage {...assets.donationContext} className="bookthing-v2-donation-context" regions={[{ left: 0, top: 0, width: 2560, height: 1620 }, { left: 1234, top: 569, width: 1098, height: 145 }, { left: 1234, top: 1430, width: 1098, height: 110 }]} /></div>
      <div className="bookthing-v2-donation-mobile">
        <div><h3>{copy.donation.moneyLabel}</h3><EvidenceImage {...assets.donationMoney} className="bookthing-v2-donation-money" regions={[{ left: 0, top: 0, width: 930, height: 864 }]} /></div>
        <div><h3>{copy.donation.booksLabel}</h3><EvidenceImage {...assets.donationBooks} className="bookthing-v2-donation-books" regions={[{ left: 9, top: 174, width: 520, height: 145 }, { left: 9, top: 1046, width: 650, height: 42 }, { left: 657, top: 1046, width: 453, height: 42 }, { left: 9, top: 1089, width: 650, height: 43 }, { left: 657, top: 1089, width: 453, height: 43 }]} /></div>
      </div>
      <p className="v2-prose bookthing-v2-donation-detail">{copy.donation.detail}</p>
      <p className="v2-note bookthing-v2-tradeoff">{copy.donation.tradeoff}</p>
    </section>

    <section className="v2-section v2-section--support bookthing-v2-calendar" aria-labelledby={copy.sections[2].id}>
      <div className="bookthing-v2-section-intro">
        <SectionHeading id={copy.sections[2].id} title={copy.calendar.title} />
        <div className="bookthing-v2-section-copy">{copy.calendar.body.map(paragraph => <p className="v2-prose" key={paragraph}>{paragraph}</p>)}</div>
      </div>
      <div className="bookthing-v2-calendar-desktop"><EvidenceImage {...assets.calendarContext} /></div>
      <div className="bookthing-v2-calendar-mobile">
        <EvidenceImage {...assets.calendarGrid} />
        <EvidenceImage {...assets.calendarHours} className="bookthing-v2-calendar-hours" regions={[{ left: 0, top: 0, width: 1140, height: 325 }]} />
      </div>
    </section>

    <section className="bookthing-v2-supporting-section" aria-labelledby={copy.sections[3].id}>
      <details className="v2-details bookthing-v2-supporting">
        <summary id={copy.sections[3].id}>{copy.supporting.label}</summary>
        <p className="v2-prose">{copy.supporting.body}</p>
        <div className="bookthing-v2-supporting-columns">
          <div><h3>{copy.supporting.prototypeLabel}</h3><ul>{copy.supporting.prototype.map(file => <li key={file.label}>
            <a href={assetUrl(file.src)} target="_blank" rel="noopener noreferrer" aria-label={`${file.label} (${copy.supporting.newTab})`}>{file.label}<span aria-hidden="true"> ↗</span></a>
          </li>)}</ul></div>
          <div><h3>{copy.supporting.identityLabel}</h3><ul>{copy.supporting.identity.map(file => <li key={file.label}>
            <a href={assetUrl(file.src)} target="_blank" rel="noopener noreferrer" aria-label={`${file.label} (${copy.supporting.newTab})`}>{file.label}<span aria-hidden="true"> ↗</span></a>
          </li>)}</ul></div>
        </div>
      </details>
    </section>

    <section className="v2-ending bookthing-v2-ending" aria-labelledby={copy.sections[4].id}>
      <SectionHeading id={copy.sections[4].id} title={copy.outcome.title} />
      <div className="bookthing-v2-ending-copy">{copy.outcome.body.map(paragraph => <p className="v2-prose" key={paragraph}>{paragraph}</p>)}</div>
    </section>
  </PreviewShell>;
}
