import type { CSSProperties, ReactNode } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { CaseStudyNav } from "../components/CaseStudyNav";
import { bookthingCopy as copy } from "../data/bookthingCopy";
import "./BookThingPage.css";


// Based on the read-only handoff and subsequent copy and image corrections.
// Crop rectangles use source pixels; source files are never altered.
const assets = {
  hero: { file: "bookthing-hero.png", width: 3000, height: 1800 },
  journey: { file: "bookthing-donor-journey.png", width: 736, height: 906 },
  originalHome: { file: "bookthing-original-homepage-first-screen.png", width: 1804, height: 969 },
  originalHomeFull: { file: "bookthing-original-homepage.png", width: 1620, height: 6504 },
  originalNews: { file: "bookthing-original-news.png", width: 1620, height: 4099 },
  originalDonate: { file: "bookthing-donate-before.png", width: 1620, height: 5538 },
  // Lossless original screenshots: grid redesign.pdf and high didelity redesign
  // compare-Donate rules.pdf, respectively; page 1, image xref 8 in each (2025).
  analysisNews2025: { file: "bookthing-analysis-news-2025.png", width: 1264, height: 2740 },
  analysisDonate2025: { file: "bookthing-analysis-donate-2025.png", width: 1152, height: 4096 },
  sitemap: { file: "bookthing-sitemap-clean-annotated.png", width: 1377, height: 462 },
  donate: { file: "bookthing-final-donate-page.png", width: 2560, height: 1960 },
  calendar: { file: "bookthing-final-calendar-page.png", width: 3840, height: 2496 },
  news: { file: "bookthing-final-news.png", width: 3840, height: 2496 },
  wishlist: { file: "bookthing-final-wishlist.png", width: 2560, height: 1672 },
  faq: { file: "bookthing-final-FAQ-page.png", width: 2560, height: 1672 },
  logo: { file: "bookthing-visual-system-support-logo.png", width: 727, height: 320 },
  typography: { file: "typography.png", width: 920, height: 978 },
  businessCard: { file: "bookthing-visual-system-support-business card.png", width: 462, height: 564 },
};
type AssetName = keyof typeof assets;
type Crop = [x: number, y: number, width: number, height: number];
// Refresh same-name exports in browser caches without changing the source files.
const assetRevisions: Partial<Record<AssetName, string>> = { donate: "7fec9a85f894", news: "165edb34d2e6", wishlist: "6242aeae8602", originalNews: "a7c454cdefd0" };
function assetUrl(name: AssetName) {
  const revision = assetRevisions[name];
  return `${import.meta.env.BASE_URL}images/projects/bookthing/${assets[name].file}${revision ? `?v=${revision}` : ""}`;
}

function ImageTodo({ children }: { children: ReactNode }) {
  return <div className="bt-todo">
    <span>Development placeholder</span>
    <strong>[IMAGE TODO — {children}]</strong>
  </div>;
}

function Asset({ name, alt, crop, className = "", eager = false, expand = true, fullSizeName, caption }: {
  name: AssetName; alt: string; crop?: Crop; className?: string; eager?: boolean; expand?: boolean; fullSizeName?: AssetName; caption?: string;
}) {
  const [failed, setFailed] = useState(false);
  const asset = assets[name];
  const [x, y, width, height] = crop ?? [0, 0, asset.width, asset.height];
  const src = assetUrl(name);
  const fullSizeSrc = assetUrl(fullSizeName ?? name);
  const imageStyle: CSSProperties = {
    width: `${asset.width / width * 100}%`,
    left: `${-x / width * 100}%`,
    top: `${-y / height * 100}%`,
  };
  const content = <div className={`bt-crop ${className}`} style={{ aspectRatio: `${width} / ${height}` }}>
    {failed ? <ImageTodo>{alt}</ImageTodo> : <img
      src={src} alt={alt} width={asset.width} height={asset.height}
      style={imageStyle} loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined} decoding="async" onError={() => setFailed(true)}
    />}
  </div>;
  return expand && !failed ? <a className="bt-image-link" href={fullSizeSrc} target="_blank" rel="noopener noreferrer"
    aria-label={`View full-size image: ${alt} (new tab)`}>
    {content}<span className={`bt-image-meta${caption ? " bt-image-meta--captioned" : ""}`}>
      {caption && <span className="bt-image-title">{caption}</span>}
      <span className="bt-image-hint" aria-hidden="true">Click to view full size <span>↗</span></span>
    </span>
  </a> : content;
}


function Heading({ index, id }: { index: number; id: string }) {
  return <header className="bt-heading"><p className="bt-eyebrow">{copy[index].eyebrow}</p><h2 id={id}>{copy[index].title}</h2></header>;
}

function Callout({ number, children }: { number: number; children: ReactNode }) {
  return <p className="bt-callout"><span className="bt-number">{["①", "②", "③"][number - 1]}</span><span>{children}</span></p>;
}

// The handoff identifies conflicting dates and inconsistent header exports.
// Keep source files untouched; these full-image positions await checked exports.
function PendingVisual({ label, ratio = "3840 / 2496" }: { label: string; ratio?: string }) {
  return <div className="bt-pending" role="img" aria-label={label} style={{ aspectRatio: ratio }} />;
}

export function BookThingPage() {
  useEffect(() => { document.title = "BookThing | Shuyue Ge"; }, []);
  return <Layout className="bookthing-page">
    <article className="bt-case page-shell" aria-labelledby="bookthing-title">
      <div className="bt-back"><Link className="back-link" to="/?section=projects"><span aria-hidden="true">←</span> Back to projects</Link></div>
      <section className="bt-hero" data-copy-section="S01" aria-labelledby="bookthing-title">
        <header className="bt-hero__statement"><p className="bt-eyebrow">{copy[0].eyebrow}</p><h1 id="bookthing-title">{copy[0].title}</h1><p className="bt-deck">{copy[0].body[0]}</p><p className="bt-hero__meta">{copy[0].captions[0]}</p></header>
        <figure className="bt-hero__visual"><PendingVisual label="Calendar and Newsroom · corrected hero export pending" ratio="2.6 / 1" /><figcaption>{copy[0].captions[1]}</figcaption></figure>
      </section>
      <div className="case-study-layout">
        <CaseStudyNav sections={[{id:"bookthing-problem",label:"Site analysis"},{id:"bookthing-ia",label:"Structure"},{id:"bookthing-donate",label:"Donation choices"},{id:"bookthing-calendar",label:"Opening dates"},{id:"bookthing-outcome",label:"Outcome"}]} />
        <div className="case-study-layout__content">
          <section className="bt-section bt-context" data-copy-section="S02" aria-labelledby="bookthing-context">
            <div className="bt-context__reading"><Heading index={1} id="bookthing-context" />{copy[1].body.map(text=><p className="bt-prose" key={text}>{text}</p>)}</div>
            <div className="bt-metadata">{copy[1].captions.map(text=><p key={text}><strong>{text.slice(0,text.indexOf(":")+1)}</strong>{text.slice(text.indexOf(":" )+1)}</p>)}</div>
          </section>
          <section className="bt-section bt-problem" data-copy-section="S03" aria-labelledby="bookthing-problem">
            <div className="bt-section-intro"><Heading index={2} id="bookthing-problem" /><p className="bt-prose">{copy[2].body[0]}</p></div>
        <div className="bt-evidence">
          <div className="bt-evidence__featured">
            <div className="bt-evidence__copy">
              <h3><span className="bt-evidence__index">01</span>Practical information had overlapping destinations</h3>
              <p>Opening dates appeared through News, while Events remained a separate navigation destination and book-donation schedules lived on Donate. The structure gave announcements, events, and operational information overlapping roles instead of a clear place for each type of content.</p>
            </div>
            <figure className="bt-evidence__destinations">
              <div className="bt-evidence__navigation">
                <p className="bt-evidence__source-label">News · Original navigation</p>
                <Asset name="analysisNews2025" crop={[480, 110, 705, 72]} alt="2025 News page navigation with separate News and Events destinations and the original Donate action" />
              </div>
              <div className="bt-evidence__paired">
                <div>
                  <p className="bt-evidence__source-label">News · Announcement excerpts</p>
                  <a className="bt-image-link" href={assetUrl("analysisNews2025")} target="_blank" rel="noopener noreferrer" aria-label="View full-size image: October opening and Booktoberfest announcements in the 2025 News page (new tab)">
                    <div className="bt-evidence__news-excerpts">
                      <Asset name="analysisNews2025" crop={[390, 550, 405, 150]} alt="October 2025 opening announcement with the October 12 date" expand={false} />
                      <Asset name="analysisNews2025" crop={[390, 805, 405, 155]} alt="Booktoberfest 2025 announcement with the October 30 event date" expand={false} />
                    </div>
                    <span className="bt-image-meta"><span className="bt-image-hint" aria-hidden="true">Click to view full size <span>↗</span></span></span>
                  </a>
                </div>
                <div>
                  <p className="bt-evidence__source-label">Donate</p>
                  <a className="bt-image-link bt-evidence__donate-source" href={assetUrl("analysisDonate2025")} target="_blank" rel="noopener noreferrer" aria-label="View full-size image: 2025 Donate page title, book-donation dates, and rules (new tab)">
                    <div className="bt-evidence__donate-title"><Asset name="analysisDonate2025" crop={[390, 285, 390, 115]} alt="Original Donations page title: how to donate books and/or money" expand={false} /></div>
                    <span className="bt-evidence__excerpt-label">Book-donation dates &amp; rules · excerpt</span>
                    <Asset name="analysisDonate2025" crop={[20, 850, 735, 405]} alt="2025 book-donation dates and donation hours, followed by the first book-donation rules" expand={false} />
                    <span className="bt-image-meta"><span className="bt-image-hint" aria-hidden="true">Click to view full size <span>↗</span></span></span>
                  </a>
                </div>
              </div>
              <figcaption><Callout number={1}>News carries opening and event announcements; book-donation schedules sit on Donate.</Callout></figcaption>
            </figure>
          </div>
          <div className="bt-evidence__supporting">
            <div className="bt-evidence__donate">
              <div className="bt-evidence__copy">
                <h3><span className="bt-evidence__index">02</span>Financial giving followed lengthy book-donation rules</h3>
                <p>The Donate page presented book-donation dates, limits, and acceptance rules before the Money Donations section. Reaching the financial-giving options meant scrolling past detailed instructions for a different type of contribution.</p>
              </div>
              <figure>
                <a className="bt-image-link" href={assetUrl("analysisDonate2025")} target="_blank" rel="noopener noreferrer" aria-label="View full-size image: 2025 Donate page showing book-donation rules before Money Donations (new tab)">
                  <Asset name="analysisDonate2025" crop={[20, 725, 735, 595]} alt="Book-donation schedule and the beginning of donation rules, including the seven-box limit" expand={false} />
                  <span className="bt-evidence__omission">Additional book-donation rules omitted</span>
                  <Asset name="analysisDonate2025" crop={[20, 2070, 730, 515]} alt="Continuous original Donate excerpt from the final book-donation rules to Money Donations and the PayPal action" expand={false} />
                  <span className="bt-image-meta"><span className="bt-image-hint" aria-hidden="true">Click to view full size <span>↗</span></span></span>
                </a>
                <figcaption><Callout number={2}>Book-donation dates and rules precede Money Donations.</Callout></figcaption>
              </figure>
            </div>
            <div className="bt-evidence__dates">
              <div className="bt-evidence__copy">
                <h3><span className="bt-evidence__index">03</span>Limited openings made the exact date essential</h3>
                <p>Public openings were generally monthly, typically alternating between Saturdays and Sundays, with occasional extra openings. The homepage explained the general frequency, but specific dates were presented through individual News announcements, making the relevant update necessary for planning a visit.</p>
              </div>
              <figure>
                <a className="bt-image-link" href={assetUrl("analysisNews2025")} target="_blank" rel="noopener noreferrer" aria-label="View full-size image: August, July, and June 2025 News summaries in original order, including the June double opening (new tab)">
                  <span className="bt-evidence__excerpt-label bt-evidence__excerpt-label--first">News · Opening-announcement excerpts</span>
                  <div className="bt-evidence__news-excerpts">
                    <Asset name="analysisNews2025" crop={[390, 1305, 405, 155]} alt="August 2025 News summary with the August 10 opening date" expand={false} />
                    <Asset name="analysisNews2025" crop={[390, 1555, 405, 155]} alt="July 2025 News summary with the July 12 opening date" expand={false} />
                    <Asset name="analysisNews2025" crop={[390, 1805, 405, 190]} alt="June 2025 double-opening summary with both June 15 and June 29" expand={false} />
                  </div>
                  <span className="bt-image-meta"><span className="bt-image-hint" aria-hidden="true">Click to view full size <span>↗</span></span></span>
                </a>
                <figcaption><Callout number={3}>Specific opening dates appear in individual News summaries, including extra openings.</Callout></figcaption>
              </figure>
            </div>
          </div>
        </div>
          </section>
          <section className="bt-section bt-ia" data-copy-section="S04" aria-labelledby="bookthing-ia">
            <div className="bt-section-intro"><Heading index={3} id="bookthing-ia" />{copy[3].body.map(text=><p className="bt-prose" key={text}>{text}</p>)}</div>
            <figure className="bt-map"><Asset name="sitemap" alt="Planning sitemap with Homepage and all six top-level branches" /><div className="bt-map__mobile"><Asset name="sitemap" crop={[65,120,395,315]} alt="Larger News and Events and Donate branches from the planning sitemap" /></div><figcaption>{copy[3].captions[0]}</figcaption></figure>
            <div className="bt-menus">
              <figure><Asset name="news" crop={[1250,120,600,405]} alt="News and Events dropdown: Calendar, Newsroom, and Social Media" /><figcaption>{copy[3].annotations[0]}</figcaption></figure>
              <figure><Asset name="donate" crop={[1240,75,350,250]} alt="Donate dropdown: Donation Rules, Donation schedule, and Wish List" /><figcaption>{copy[3].annotations[1]}</figcaption></figure>
            </div>
          </section>
          <section className="bt-section bt-donate" data-copy-section="S05" aria-labelledby="bookthing-donate">
            <div className="bt-section-intro"><Heading index={4} id="bookthing-donate" /><p className="bt-prose">{copy[4].body[0]}</p></div>
            <div className="bt-comparison">
              <figure className="bt-comparison__before"><Asset name="analysisDonate2025" crop={[20,1420,735,1165]} alt="Continuous project-era Donate page excerpt: book rules lead into Money Donations" /><figcaption>{copy[4].captions[0]}</figcaption></figure>
              <figure className="bt-comparison__after"><Asset name="donate" crop={[220,295,2130,350]} alt="Concept donation headings, payment actions, and book-donation instructions in the first content row" /><figcaption>{copy[4].captions[1]}</figcaption></figure>
            </div>
            <div className="bt-donate__deep-dive">
              <div className="bt-donate__reasoning"><p className="bt-prose">{copy[4].body[1]}</p><p className="bt-prose">{copy[4].body[2]}</p><div className="bt-annotations">{copy[4].annotations.map(text=><p key={text}>{text}</p>)}</div></div>
              <figure><Asset name="donate" crop={[220,295,2130,1260]} alt="Donation concept detail with unequal money and book columns, residency cues, both payment options, and expanded book rules" /></figure>
            </div>
            <figure className="bt-journey"><div className="bt-journey__steps">
              {([[278,289,182,49],[278,440,182,49],[269,622,213,49],[247,691,249,53],[264,766,213,49],[244,837,254,52]] as Crop[]).map((crop,index)=><Asset key={index} name="journey" crop={crop} alt={['Open website','Click donate in menu','Click money amount and donate button','Redirect to payment page','Insert payment information','Output donation receipt'][index]} expand={false} />)}
            </div><figcaption>{copy[4].captions[2]}</figcaption></figure>
          </section>
          <section className="bt-section bt-calendar" data-copy-section="S06" aria-labelledby="bookthing-calendar">
            <div className="bt-section-intro"><Heading index={5} id="bookthing-calendar" /><p className="bt-prose">{copy[5].body[0]}</p></div>
            <div className="bt-calendar__layout">
              <figure className="bt-calendar__visual"><PendingVisual label="Calendar · corrected schedule export pending" /><Asset name="calendar" crop={[1790,682,1440,404]} alt="December opening detail with giveaway hours of 9am–5pm and donation hours of 9am–2pm" /><figcaption>{copy[5].captions[0]}</figcaption><div className="bt-annotations">{copy[5].annotations.map(text=><p key={text}>{text}</p>)}</div></figure>
              <div className="bt-calendar__aside"><p className="bt-prose">{copy[5].body[1]}</p><figure className="bt-news-detail"><div className="bt-news-detail__crops"><Asset name="news" crop={[530,730,690,890]} alt="Newsroom archive with year groups and archived announcement titles" /><Asset name="news" crop={[1570,735,1680,315]} alt="Year-end Update announcement excerpt" /></div><figcaption>{copy[5].captions[1]}</figcaption></figure></div>
            </div>
          </section>
          <section className="bt-section bt-final" data-copy-section="S07" aria-labelledby="bookthing-final">
            <div className="bt-section-intro"><Heading index={6} id="bookthing-final" /><p className="bt-prose">{copy[6].body[0]}</p></div>
            <figure className="bt-gallery"><div className="bt-gallery__composition"><Asset name="donate" alt="Complete Donate desktop concept" /><div className="bt-gallery__planning"><PendingVisual label="Calendar · corrected full-page export pending" /><PendingVisual label="Newsroom · matching header export pending" /></div></div><figcaption>{copy[6].captions[0]}</figcaption></figure>
            <div className="bt-support"><p className="bt-prose">{copy[6].body[1]}</p><figure><div className="bt-support__strip"><Asset name="wishlist" crop={[230,620,1990,620]} alt="Wishlist categories for volunteer support, gift cards, cleaning supplies, and office tools" /><Asset name="logo" alt="Book-as-door identity artwork" /><Asset name="donate" crop={[430,530,450,65]} alt="Blue PayPal donation action" /><div className="bt-support__disclosures"><Asset name="donate" crop={[1230,570,1110,65]} alt="Books We Accept disclosure heading" /><Asset name="faq" crop={[220,540,1020,90]} alt="Are the books free disclosure heading from the FAQ concept" /></div></div><figcaption>{copy[6].captions[1]}</figcaption></figure></div>
          </section>
          <section className="bt-section bt-outcome" data-copy-section="S08" aria-labelledby="bookthing-outcome"><Heading index={7} id="bookthing-outcome" /><div className="bt-outcome__columns"><p>{copy[7].body[0]}</p><p>{copy[7].body[1]}</p></div><div className="bt-outcome__reflection"><p>{copy[7].body[2]}</p><p className="bt-key">{copy[7].captions[0]}</p></div></section>
        </div>
      </div>
    </article>
  </Layout>;
}
