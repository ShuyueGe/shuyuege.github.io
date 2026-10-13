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
        <div className="bookthing-v2-section-copy"><p className="v2-prose">{copy.ia.body}</p></div>
      </div>
      <div className="bookthing-v2-map-comparison">
        <div><h3>{copy.ia.originalLabel}</h3><EvidenceImage {...assets.originalBranches} /></div>
        <div><h3>{copy.ia.revisedLabel}</h3><EvidenceImage {...assets.revisedBranches} /></div>
      </div>
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
          <a className="bookthing-v2-source-link" href={assetUrl(assets.originalDonation)} target="_blank" rel="noopener noreferrer"
            aria-label={`${copy.donation.originalLink} (${copy.supportingFiles.newTab})`}>{copy.donation.originalLink}</a>
        </div>
      </div>
      <div className="bookthing-v2-donation-desktop"><EvidenceImage {...assets.donationContext} /></div>
      <div className="bookthing-v2-donation-mobile">
        <div><h3>{copy.donation.moneyLabel}</h3><EvidenceImage {...assets.donationMoney} /></div>
        <div><h3>{copy.donation.booksLabel}</h3><EvidenceImage {...assets.donationBooks} /></div>
      </div>
      <p className="v2-note bookthing-v2-tradeoff">{copy.donation.tradeoff}</p>
    </section>

    <section className="v2-section v2-section--support bookthing-v2-calendar" aria-labelledby={copy.sections[2].id}>
      <div className="bookthing-v2-section-intro">
        <SectionHeading id={copy.sections[2].id} title={copy.calendar.title} />
        <div className="bookthing-v2-section-copy"><p className="v2-prose">{copy.calendar.body}</p></div>
      </div>
      <div className="bookthing-v2-calendar-desktop"><EvidenceImage {...assets.calendarContext} /></div>
      <div className="bookthing-v2-calendar-mobile">
        <EvidenceImage {...assets.calendarGrid} />
        <EvidenceImage {...assets.calendarHours} />
      </div>
    </section>

    <section className="v2-ending bookthing-v2-ending" aria-labelledby={copy.sections[3].id}>
      <SectionHeading id={copy.sections[3].id} title={copy.outcome.title} />
      {copy.outcome.body.map(paragraph => <p className="v2-prose" key={paragraph}>{paragraph}</p>)}
      <details className="v2-details bookthing-v2-supporting">
        <summary>{copy.outcome.supportingLabel}</summary>
        <p className="v2-prose">{copy.outcome.supportingBody}</p>
        <div className="bookthing-v2-supporting-columns">
          <div><h3>{copy.outcome.prototypeLabel}</h3><ul>{copy.supportingFiles.prototype.map(file => <li key={file.label}>
            <a href={assetUrl(file.src)} target="_blank" rel="noopener noreferrer" aria-label={`${file.label} (${copy.supportingFiles.newTab})`}>{file.label}<span aria-hidden="true"> ↗</span></a>
          </li>)}</ul></div>
          <div><h3>{copy.outcome.identityLabel}</h3><ul>{copy.supportingFiles.identity.map(file => <li key={file.label}>
            <a href={assetUrl(file.src)} target="_blank" rel="noopener noreferrer" aria-label={`${file.label} (${copy.supportingFiles.newTab})`}>{file.label}<span aria-hidden="true"> ↗</span></a>
          </li>)}</ul></div>
        </div>
      </details>
    </section>
  </PreviewShell>;
}
