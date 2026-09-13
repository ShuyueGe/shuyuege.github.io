import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { CaseStudyNav } from "../components/CaseStudyNav";
import { patsyCopy as copy } from "../data/patsyCopy";
import "./PatsyPage.css";


// Public copy and image treatments follow case-study-handoff/patsy-final.md.
// Source exports remain intact; crops use original pixel coordinates in CSS.
const assets = {
  landing: { file: "after-Landing Page.png", width: 804, height: 1758 },
  starters: { file: "after-Menu 1.png", width: 804, height: 1758 },
  entrees: { file: "after-Menu 2.png", width: 804, height: 1758 },
  cart: { file: "after-Cart step2.png", width: 804, height: 1758 },
  checkout: { file: "after-Cart step3.png", width: 804, height: 1758 },
  orderConfirmation: { file: "after-Cart step4.png", width: 804, height: 1758 },
  reservationReview: { file: "after-Reservation step3.png", width: 804, height: 1758 },
  reservationConfirmation: { file: "after-Reservation step4.png", width: 804, height: 1758 },
  originalHome: { file: "before-landing page.jpg", width: 1179, height: 2101 },
  originalMenu: { file: "before-menu.jpg", width: 1179, height: 2282 },
  originalReservation: { file: "before-reservation.jpg", width: 1179, height: 2061 },
  // Exact byte copies from the source report: word/media/image57.jpg and image28.png.
  originalPhone: { file: "report-original-phone.jpg", width: 992, height: 2048 },
  testedMenu: { file: "report-tested-menu.png", width: 584, height: 638 },
};
type AssetName = keyof typeof assets;
type Crop = [x: number, y: number, width: number, height: number];

function Screen({ name, alt, crop, eager = false }: {
  name: AssetName; alt: string; crop?: Crop; eager?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const [failed, setFailed] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const asset = assets[name];
  const src = `${import.meta.env.BASE_URL}images/projects/patsy/${encodeURIComponent(asset.file)}`;
  const [x, y, width, height] = crop ?? [0, 0, asset.width, asset.height];
  const imageStyle: CSSProperties = {
    width: `${asset.width / width * 100}%`,
    left: `${-x / width * 100}%`,
    top: `${-y / height * 100}%`,
  };

  useEffect(() => {
    if (!expanded) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [expanded]);

  if (failed) return <div className="ps-image-error" role="img" aria-label={alt}>Image unavailable</div>;

  return <>
    <button className="ps-image" type="button" onClick={() => setExpanded(true)}
      aria-label={`Enlarge image: ${alt}`} aria-haspopup="dialog">
      <span className="ps-image__frame" style={{ aspectRatio: `${width} / ${height}` }}>
        <img src={src} alt={alt} width={asset.width} height={asset.height} style={imageStyle}
          loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : undefined}
          decoding="async" onError={() => setFailed(true)} />
      </span>
      <span className="ps-image__hint" aria-hidden="true">Click to enlarge ↗</span>
    </button>
    {expanded && <dialog ref={dialogRef} className="ps-viewer" aria-label={alt}
      onClose={() => setExpanded(false)}
      onKeyDown={event => {
        if (event.key === "Tab") {
          event.preventDefault();
          // The viewer has one control; keep keyboard focus on its close button.
          dialogRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
        }
      }}
      onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}>
      <div className="ps-viewer__toolbar">
        <span>Full image</span>
        <button type="button" autoFocus onClick={() => dialogRef.current?.close()}>Close <span aria-hidden="true">×</span></button>
      </div>
      <img className="ps-viewer__image" src={src} alt={alt} width={asset.width} height={asset.height} />
    </dialog>}
  </>;
}


function Heading({ section, id }: { section: number; id: string }) {
  const item = copy[section - 1];
  return <header className="ps-heading"><p className="ps-eyebrow">{item.eyebrow}</p><h2 id={id}>{item.headline}</h2></header>;
}
function Note({ number, children }: { number: number; children: ReactNode }) {
  return <p className="ps-annotation"><span className="ps-annotation__number" aria-hidden="true">{number}</span><span>{children}</span></p>;
}
function SurveyCount({ count, text }: { count: number; text: string }) {
  const lead = count + " of 21";
  return <div className="ps-stat"><p><strong>{lead}</strong>{" "}{text.slice(lead.length).trim()}</p><div className="ps-stat__units" aria-hidden="true">{Array.from({ length: 21 }, (_, i) => <span key={i} className={i < count ? "is-filled" : ""} />)}</div></div>;
}
const metadata = copy[0].blocks[1].split(/(?=Role:|Team:|Scope:|Report submitted:|Status:)/).filter(Boolean).map(item => { const split = item.indexOf(":"); return [item.slice(0, split + 1), item.slice(split + 1).trim()]; });
const findingTitles = ["Confirm the essentials", "Make information readable", "Help people evaluate dishes"];
const findings = copy[2].blocks.slice(4, 7).map((item, i) => { const text = item.slice(findingTitles[i].length).trim(); const end = text.indexOf(".") + 1; return {title: findingTitles[i], evidence: text.slice(0, end), response: text.slice(end).trim()}; });
const quote = copy[2].blocks[3].split(" — ");
export function PatsyPage() {
  useEffect(() => { document.title = "Patsy’s Restaurant | Shuyue Ge"; }, []);
  return <Layout className="patsy-page"><article className="ps-case page-shell" aria-labelledby="patsy-title">
    <div className="ps-back"><Link className="back-link" to="/?section=projects"><span aria-hidden="true">←</span> Back to projects</Link></div>
    <section className="ps-hero" data-copy-section="S01" aria-labelledby="patsy-title">
      <header className="ps-hero__intro"><p className="ps-eyebrow">{copy[0].eyebrow}</p><h1 id="patsy-title">{copy[0].headline}</h1><p className="ps-prose">{copy[0].blocks[0]}</p></header>
      <dl className="ps-metadata">{metadata.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      <figure className="ps-hero__visual"><div className="ps-hero__screens"><Screen name="landing" crop={[0, 0, 804, 1035]} alt="Team landing preview with restaurant image and separate reservation, menu, and pickup entry points" eager /><Screen name="entrees" crop={[0, 0, 804, 1160]} alt="Team menu preview retaining category tabs, the complete Crab Cakes row, and source marks" eager /></div><figcaption>{copy[0].captions[0]}</figcaption></figure>
      <p className="ps-hero__contribution">{copy[0].blocks[2]}</p>
    </section>
    <div className="case-study-layout"><CaseStudyNav sections={[{id:"patsy-research",label:"Research"},{id:"patsy-priorities",label:"Mobile priorities"},{id:"patsy-pickup",label:"Pickup iteration"},{id:"patsy-reservation",label:"Reservation review"},{id:"patsy-outcome",label:"Outcome"}]} /><div className="case-study-layout__content">
      <section className="ps-section ps-start" data-copy-section="S02" aria-labelledby="patsy-start">
        <Heading section={2} id="patsy-start" /><div className="ps-start__spread">
          <div className="ps-start__copy ps-prose">{copy[1].blocks.map(t=><p key={t}>{t}</p>)}</div>
          <figure className="ps-start__home"><h3>{copy[1].captions[0]}</h3><Screen name="originalHome" crop={[18,160,1120,1640]} alt="Original website showing sidebar categories, promotional badge, restaurant details, hours, and repeated contact information" /><figcaption><Note number={1}>{copy[1].captions[1]}</Note><Note number={2}>{copy[1].captions[2]}</Note></figcaption></figure>
          <figure className="ps-start__menu"><Screen name="originalMenu" crop={[360,320,665,825]} alt="Original Dinner Starters detail with consecutive names, descriptions, and prices" /><figcaption><Note number={3}>{copy[1].captions[3]}</Note></figcaption></figure>
        </div>
      </section>
      <section className="ps-section ps-research" data-copy-section="S03" aria-labelledby="patsy-research">
        <div className="ps-research__top"><div><Heading section={3} id="patsy-research" /><p className="ps-prose">{copy[2].blocks[0]}</p></div><div className="ps-research__results"><SurveyCount count={15} text={copy[2].blocks[1]} /><SurveyCount count={21} text={copy[2].blocks[2]} /><p className="ps-small">{copy[2].captions[0]}</p><blockquote><p>{quote[0]}</p><cite>— {quote[1]}</cite></blockquote></div></div>
        <div className="ps-findings">{findings.map(f=><div key={f.title}><h3>{f.title}</h3><p>{f.evidence}</p><p>{f.response}</p></div>)}</div><p className="ps-research__limit ps-small">{copy[2].blocks[7]}</p>
      </section>
      <section className="ps-section ps-priorities" data-copy-section="S04" aria-labelledby="patsy-priorities">
        <div className="ps-priorities__copy"><Heading section={4} id="patsy-priorities" /><div className="ps-prose">{copy[3].blocks.map(t=><p key={t}>{t}</p>)}</div></div>
        <div className="ps-priorities__comparison"><figure className="ps-priorities__before"><Screen name="originalPhone" crop={[0,0,992,1685]} alt="Actual original phone capture retaining the small desktop composition and orange surrounding area" /><figcaption>{copy[3].captions[0]}</figcaption></figure><div className="ps-priorities__after"><figure><Screen name="landing" crop={[50,205,704,825]} alt="Revised team homepage detail with the building image and three main task buttons" /><figcaption>{copy[3].captions[1]}</figcaption></figure><figure className="ps-footer-detail"><h3>{copy[3].captions[2]}</h3><Screen name="landing" crop={[0,1635,804,123]} alt="Separate team homepage footer with contact and location links" /><figcaption>{copy[3].captions[3]}</figcaption></figure></div></div>
      </section>
      <section className="ps-section ps-pickup" data-copy-section="S05" aria-labelledby="patsy-pickup">
        <div className="ps-pickup__top"><div className="ps-pickup__opening"><Heading section={5} id="patsy-pickup" /><div className="ps-prose">{copy[4].blocks.slice(0,3).map((t,i)=><p key={t} className={i===2?"ps-pickup__observation":undefined}>{t}</p>)}</div></div><div className="ps-menu-comparison"><figure><h3>{copy[4].captions[0]}</h3><Screen name="testedMenu" crop={[305,55,257,560]} alt="Tested V1 Entrées screen from the report, including phone icon, categories, and all menu items" /></figure><figure><h3>{copy[4].captions[1]}</h3><Screen name="entrees" alt="Complete revised team Entrées screen with cart cue, plus controls, source marks, and Mkt price unchanged" /></figure><p className="ps-menu-comparison__caption ps-small">{copy[4].captions[2]}</p></div></div>
        <div className="ps-pickup__revision ps-prose"><p>{copy[4].blocks[3]}</p><p className="ps-pickup__limitation">{copy[4].blocks[4]}</p><p className="ps-pickup__personal">{copy[4].blocks[5]}</p></div>
        <div className="ps-pickup__flow-stage"><p className="ps-flow-label">{copy[4].captions[6]}</p><ol className="ps-flow" aria-label="Intended pickup sequence">{(["cart","checkout","orderConfirmation"] as const).map((name,i)=><li key={name}><figure><Screen name={name} alt={["Complete preset cart screen showing example dishes, quantities, prices, totals, and Continue action","Complete preset checkout screen with pickup address, payment choices, and Place Order action","Complete preset confirmation overlay with the sample estimate and Return to Home action"][i]} /><figcaption>{copy[4].captions[3+i]}</figcaption></figure></li>)}</ol></div>
      </section>
      <section className="ps-section ps-reservation" data-copy-section="S06" aria-labelledby="patsy-reservation"><div className="ps-reservation__copy"><Heading section={6} id="patsy-reservation" /><p className="ps-prose ps-reservation__intro">{copy[5].blocks[0]}</p><figure className="ps-reservation__original"><h3>{copy[5].captions[0]}</h3><Screen name="originalReservation" crop={[305,365,845,180]} alt="Original reservation page sentence and full external Tock booking link" /></figure><div className="ps-prose">{copy[5].blocks.slice(1).map(t=><p key={t}>{t}</p>)}</div></div><figure className="ps-reservation__review"><h3>{copy[5].captions[1]}</h3><Screen name="reservationReview" crop={[50,850,710,875]} alt="Revised Confirm Reservation panel with full reservation details, Make Edits, and Reserve actions" /><figcaption>{copy[5].captions[2]}</figcaption></figure></section>
      <section className="ps-section ps-final" data-copy-section="S07" aria-labelledby="patsy-final"><div className="ps-final__opening"><Heading section={7} id="patsy-final" /><p className="ps-prose">{copy[6].blocks[0]}</p></div><div className="ps-final__stage"><div className="ps-gallery">{(["landing","starters","reservationConfirmation"] as const).map((name,i)=><figure key={name}><Screen name={name} alt={["Full team mobile homepage including status bar, task buttons, featured dishes, footer, and visible source marks","Full team Starters menu including status bar, category tabs, every dish, and page ending","Full team reservation confirmation including status bar, restaurant image, reservation details, and Return to Home action"][i]} /><figcaption>{copy[6].captions[i]}</figcaption></figure>)}</div><p className="ps-small ps-gallery__caption">{copy[6].captions[3]}</p></div></section>
      <section className="ps-section ps-outcome" data-copy-section="S08" aria-labelledby="patsy-outcome"><div className="ps-outcome__spread"><Heading section={8} id="patsy-outcome" /><dl className="ps-outcome__scope">{copy[7].blocks.slice(0,3).map(t=>{const i=t.indexOf(":");return <div key={t}><dt>{t.slice(0,i+1)}</dt><dd>{t.slice(i+1).trim()}</dd></div>;})}</dl></div><div className="ps-outcome__reflection ps-prose">{copy[7].blocks.slice(3).map(t=><p key={t}>{t}</p>)}</div><Link className="back-link" to="/?section=projects"><span aria-hidden="true">←</span> Back to projects</Link></section>
    </div></div></article></Layout>;
}
