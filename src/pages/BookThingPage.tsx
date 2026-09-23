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
  palette: { file: "bookthing-visual-system-support-color platte.png", width: 950, height: 934 },
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


function Heading({ section, id }: { section: { eyebrow: string; title: string }; id: string }) {
  return <header className="bt-heading">
    <p className="bt-eyebrow">{section.eyebrow}</p>
    <h2 id={id}>{section.title}</h2>
  </header>;
}

function SourceGroup({ name, alt, children }: { name: AssetName; alt: string; children: ReactNode }) {
  return <a className="bt-image-link" href={assetUrl(name)} target="_blank" rel="noopener noreferrer"
    aria-label={`View full-size image: ${alt} (new tab)`}>
    <div className="bt-source-group">{children}</div>
    <span className="bt-image-meta"><span className="bt-image-hint" aria-hidden="true">Click to view full size <span>↗</span></span></span>
  </a>;
}

function Finding({ index }: { index: 0 | 1 | 2 }) {
  const finding = copy.problem.findings[index];
  return <div className="bt-evidence__copy">
    <h3><span className="bt-evidence__index">{finding.title.slice(0, 5)}</span>{finding.title.slice(5)}</h3>
    <p>{finding.body}</p>
  </div>;
}

export function BookThingPage() {
  useEffect(() => { document.title = "BookThing | Shuyue Ge"; }, []);
  return <Layout className="bookthing-page">
    <article className="bt-case page-shell" aria-labelledby="bookthing-title">
      <div className="bt-back"><Link className="back-link" to="/?section=projects"><span aria-hidden="true">←</span> Back to projects</Link></div>
      <section className="bt-hero" data-copy-section="S01" aria-labelledby="bookthing-title">
        <header className="bt-hero__statement">
          <p className="bt-eyebrow">{copy.hero.eyebrow}</p>
          <h1 id="bookthing-title">{copy.hero.title}</h1>
          <p className="bt-deck">{copy.hero.body[0]}</p>
          <div className="bt-metadata">{copy.hero.metadata.map(text => <p key={text}><strong>{text.slice(0, text.indexOf(":") + 1)}</strong>{" "}{text.slice(text.indexOf(":") + 2)}</p>)}</div>
        </header>
        <figure className="bt-hero__visual">
          <div className="bt-hero__screens">
            <Asset name="calendar" crop={[560, 380, 2680, 1270]} alt="Calendar concept showing the December grid beside opening and event details" eager />
            <Asset name="news" crop={[0, 0, 3840, 1950]} alt="Newsroom concept with its captured menu, archive, and announcements" eager />
          </div>
          <figcaption>{copy.hero.caption}</figcaption>
        </figure>
      </section>
      <div className="case-study-layout">
        <CaseStudyNav sections={[
          { id: "bookthing-problem", label: "Site analysis" },
          { id: "bookthing-ia", label: "Structure" },
          { id: "bookthing-donate", label: "Donation choices" },
          { id: "bookthing-calendar", label: "Opening dates" },
          { id: "bookthing-outcome", label: "Outcome" },
        ]} />
        <div className="case-study-layout__content">
          <section className="bt-section bt-problem" data-copy-section="S02" aria-labelledby="bookthing-problem">
            <div className="bt-section-intro"><Heading section={copy.problem} id="bookthing-problem" /></div>
            <div className="bt-evidence__featured">
              <Finding index={0} />
              <div className="bt-evidence__destinations">
                <Asset name="analysisNews2025" crop={[480, 110, 705, 72]} alt="Original 2025 navigation with separate News and Events destinations and Donate" />
                <div className="bt-evidence__paired">
                  <SourceGroup name="analysisNews2025" alt="October opening and Booktoberfest excerpts from the original 2025 News page">
                    <Asset name="analysisNews2025" crop={[390, 550, 405, 150]} alt="October 2025 opening announcement with the October 12 date" expand={false} />
                    <Asset name="analysisNews2025" crop={[390, 805, 405, 155]} alt="Booktoberfest 2025 announcement with the October 30 event date" expand={false} />
                  </SourceGroup>
                  <SourceGroup name="analysisDonate2025" alt="Original Donations title and separate schedule excerpt">
                    <div className="bt-evidence__donate-title"><Asset name="analysisDonate2025" crop={[390, 285, 390, 115]} alt="Original Donations page title" expand={false} /></div>
                    <Asset name="analysisDonate2025" crop={[20, 850, 735, 405]} alt="Original book-donation dates, hours, and first rules" expand={false} />
                  </SourceGroup>
                </div>
              </div>
            </div>
            <div className="bt-evidence__supporting">
              <div>
                <Finding index={1} />
                <figure><Asset name="analysisDonate2025" crop={[20, 2070, 730, 515]} alt="Continuous original excerpt from the final book-donation rules into Money Donations and PayPal" /></figure>
              </div>
              <div>
                <Finding index={2} />
                <figure><SourceGroup name="analysisNews2025" alt="August, July, and June 2025 opening summaries in their original order">
                  <Asset name="analysisNews2025" crop={[390, 1305, 405, 155]} alt="August 2025 announcement with the August 10 opening date" expand={false} />
                  <Asset name="analysisNews2025" crop={[390, 1555, 405, 155]} alt="July 2025 announcement with the July 12 opening date" expand={false} />
                  <Asset name="analysisNews2025" crop={[390, 1805, 405, 190]} alt="June 2025 double opening, including June 15 and June 29" expand={false} />
                </SourceGroup></figure>
              </div>
            </div>
          </section>

          <section className="bt-section bt-ia" data-copy-section="S03" aria-labelledby="bookthing-ia">
            <div className="bt-section-intro">
              <Heading section={copy.structure} id="bookthing-ia" />
              <p className="bt-prose">{copy.structure.body[0]}</p>
            </div>
            <figure className="bt-map">
              <Asset name="sitemap" alt="Revised planning sitemap with Homepage and six top-level branches" />
              <div className="bt-map__mobile"><Asset name="sitemap" crop={[0, 120, 460, 330]} alt="Larger News and Events and Donate branches with their complete planning notes" /></div>
            </figure>
            <div className="bt-menus">
              <figure><Asset name="news" crop={[1298, 161, 462, 346]} alt="News and Events menu showing Calendar, Newsroom, and Social Media" /></figure>
              <figure><SourceGroup name="donate" alt="Donate trigger and open menu showing Donation Rules, Donation schedule, and Wish List">
                <div className="bt-menu-trigger"><Asset name="donate" crop={[1257, 84, 226, 84]} alt="Donate navigation trigger" expand={false} /></div>
                <Asset name="donate" crop={[1257, 168, 322, 151]} alt="Complete donation menu: Donation Rules, Donation schedule, and Wish List" expand={false} />
              </SourceGroup></figure>
            </div>
          </section>

          <section className="bt-section bt-donate" data-copy-section="S04" aria-labelledby="bookthing-donate">
            <div className="bt-section-intro"><p className="bt-decision-lead" id="bookthing-donate">{copy.donate.body[0]}</p></div>
            <div className="bt-comparison">
              <figure><Asset name="analysisDonate2025" crop={[20, 2070, 730, 515]} alt="Original Donate excerpt: book-donation rules precede Money Donations" /></figure>
              <figure className="bt-comparison__after"><Asset name="donate" crop={[0, 0, 2560, 1625]} alt="Redesigned donation content with complete navigation, both donation paths, and book guidance" /></figure>
            </div>
            <div className="bt-donate__details">
              <div>
                <p className="bt-prose">{copy.donate.body[1]}</p>
                <figure><Asset name="donate" crop={[220, 295, 950, 865]} alt="Money-donation heading, complete location guidance, PayPal action, and Donorbox form" /></figure>
              </div>
              <div>
                <p className="bt-prose">{copy.donate.body[2]}</p>
                <figure><Asset name="donate" crop={[1225, 395, 1130, 1145]} alt="Book-donation introduction, complete disclosure headings, expanded rules, and donation-hours guidance" /></figure>
              </div>
            </div>
          </section>

          <section className="bt-section bt-calendar" data-copy-section="S05" aria-labelledby="bookthing-calendar">
            <div className="bt-section-intro"><p className="bt-decision-lead" id="bookthing-calendar">{copy.calendar.body[0]}</p></div>
            <div className="bt-calendar__layout">
              <p className="bt-prose">{copy.calendar.body[1]}</p>
              <div className="bt-calendar__visual">
                <Asset name="calendar" crop={[560, 380, 2680, 1270]} alt="Calendar title, filters, month grid, highlighted dates, and schedule panels" />
                <div className="bt-calendar__mobile-grid"><Asset name="calendar" crop={[650, 650, 870, 890]} alt="December date grid with the star and highlighted December 14 and 20 dates" /></div>
                <Asset name="calendar" crop={[1790, 682, 1440, 404]} alt="December 14 opening: giveaway hours 9am–5pm and book-donation hours 9am–2pm" />
              </div>
            </div>
          </section>

          <section className="bt-section bt-final" data-copy-section="S06" aria-labelledby="bookthing-final">
            <div className="bt-section-intro"><Heading section={copy.final} id="bookthing-final" /><p className="bt-prose">{copy.final.body[0]}</p></div>
            <div className="bt-gallery">
              <figure className="bt-gallery__lead"><Asset name="donate" alt="Complete Donate desktop concept" /></figure>
              <div className="bt-gallery__pair">
                <figure><Asset name="calendar" alt="Complete Calendar desktop concept" /></figure>
                <figure><Asset name="news" alt="Complete Newsroom desktop concept" /></figure>
              </div>
              <div className="bt-gallery__pair">
                <figure><Asset name="wishlist" alt="Complete Wishlist desktop concept" /></figure>
                <figure><Asset name="faq" alt="Complete FAQ desktop concept" /></figure>
              </div>
            </div>
          </section>

          <section className="bt-section bt-identity" data-copy-section="S07" aria-labelledby="bookthing-identity">
            <div className="bt-section-intro"><Heading section={copy.identity} id="bookthing-identity" /><p className="bt-prose">{copy.identity.body[0]}</p></div>
            <div className="bt-identity__foundations">
              <figure className="bt-identity__type"><Asset name="typography" alt="Type specimen: NTR for navigation, Arima Madurai for headings, and Archivo Narrow for body copy" /></figure>
              <figure className="bt-identity__palette">
                <div className="bt-identity__palette-wide"><Asset name="palette" crop={[15, 15, 895, 160]} alt="Monochromatic blue study with five swatches and the original printed RGB and HEX labels" /></div>
                <div className="bt-identity__palette-mobile">
                  <SourceGroup name="palette" alt="Blue study shown in two source excerpts, with the full color study available">
                    <Asset name="palette" crop={[15, 15, 530, 160]} alt="Monochromatic study heading and the first three blue swatches" expand={false} />
                    <div className="bt-identity__palette-tail"><Asset name="palette" crop={[558, 65, 337, 110]} alt="The remaining two blue swatches and their original printed values" expand={false} /></div>
                  </SourceGroup>
                </div>
              </figure>
            </div>
            <div className="bt-identity__applications">
              <figure className="bt-identity__logo"><Asset name="logo" alt="Complete BookThing book-as-door mark, wordmark, and tagline" /></figure>
              <figure className="bt-identity__card"><Asset name="businessCard" alt="Both sides of the BookThing concept business card" /></figure>
            </div>
          </section>

          <section className="bt-section bt-outcome" data-copy-section="S08" aria-labelledby="bookthing-outcome">
            <Heading section={copy.outcome} id="bookthing-outcome" />
            <div className="bt-outcome__reading">{copy.outcome.body.map(text => <p className="bt-prose" key={text}>{text}</p>)}</div>
          </section>
        </div>
      </div>
    </article>
  </Layout>;
}
