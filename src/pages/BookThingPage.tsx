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
  originalSitemap: { file: "bookthing-ia-original-sitemap.png", width: 4320, height: 1382 },
  taskPaths: { file: "bookthing-ia-task-paths.png", width: 3126, height: 1408 },
  revisedSitemap: { file: "bookthing-ia-revised-sitemap.png", width: 3628, height: 1408 },
  donate: { file: "bookthing-final-donate-page.png", width: 2560, height: 1960 },
  calendar: { file: "bookthing-final-calendar-page.png", width: 3840, height: 2496 },
  news: { file: "bookthing-final-news.png", width: 3840, height: 2496 },
  wishlist: { file: "bookthing-final-wishlist.png", width: 2560, height: 1672 },
  faq: { file: "bookthing-final-FAQ-page.png", width: 2560, height: 1672 },
  logo: { file: "bookthing-visual-system-support-logo.png", width: 727, height: 320 },
  typography: { file: "typography.png", width: 920, height: 978 },
  palette: { file: "bookthing-visual-system-support-color platte.png", width: 702, height: 1096 },
  businessCard: { file: "bookthing-visual-system-support-business card.png", width: 462, height: 564 },
};
type AssetName = keyof typeof assets;
type Crop = [x: number, y: number, width: number, height: number];
// Refresh same-name exports in browser caches without changing the source files.
const assetRevisions: Partial<Record<AssetName, string>> = { donate: "7fec9a85f894", news: "165edb34d2e6", wishlist: "6242aeae8602", originalNews: "a7c454cdefd0", typography: "eb8e8d4309c5", palette: "a45e19386533" };
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

function Finding({ finding }: { finding: typeof copy.problem.findings[number] }) {
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
          <Asset name="hero" alt={copy.hero.caption} eager />
          <figcaption>{copy.hero.caption}</figcaption>
        </figure>
      </section>
      <div className="case-study-layout">
        <CaseStudyNav sections={[...copy.navigation]} />
        <div className="case-study-layout__content">
          <section className="bt-section bt-problem" data-copy-section="S02" aria-labelledby="bookthing-problem">
            <div className="bt-section-intro"><Heading section={copy.problem} id="bookthing-problem" /></div>
            <div className="bt-findings">
              {copy.problem.findings.map(finding => <Finding key={finding.title} finding={finding} />)}
            </div>
          </section>

          <div className="bt-decisions" role="group" aria-label="Decisions">
          <section className="bt-section bt-ia" data-copy-section="S03" aria-labelledby="bookthing-ia">
            <div className="bt-section-intro">
              <Heading section={copy.structure} id="bookthing-ia" />
              <p className="bt-prose">{copy.structure.body[0]}</p>
            </div>
            <div className="bt-ia__sequence">
              <figure className="bt-map">
                <figcaption>{copy.structure.captions.original}</figcaption>
                <Asset name="originalSitemap" alt="Original BookThing top-level navigation with page-content groups and information-architecture problems" />
              </figure>
              <figure className="bt-map">
                <figcaption>{copy.structure.captions.tasks}</figcaption>
                <Asset name="taskPaths" alt="Persona-informed key task paths for planning a visit, donating money, and participating" />
              </figure>
              <figure className="bt-map">
                <figcaption>{copy.structure.captions.revised}</figcaption>
                <Asset name="revisedSitemap" alt="Revised navigation with Calendar and Newsroom under News and Events, and donation resources under Donate" />
              </figure>
            </div>
          </section>

          <section className="bt-section bt-donate" data-copy-section="S04" aria-labelledby="bookthing-donate">
            <div className="bt-section-intro">
              <Heading section={copy.donate} id="bookthing-donate" />
              <p className="bt-prose">{copy.donate.body[0]}</p>
            </div>
            <div className="bt-comparison">
              <figure className="bt-comparison__original">
                <figcaption>original website</figcaption>
                <Asset name="originalDonate" alt="Complete original Donate page, from navigation through book-donation rules and financial giving to the footer" />
              </figure>
              <div className="bt-comparison__after">
                <p className="bt-prose">{copy.donate.body[1]}</p>
                <figure><Asset name="donate" alt="Complete redesigned Donate page with both donation paths, guidance, navigation, and footer" /></figure>
              </div>
            </div>
            <div className="bt-donate__details">
              <div>
                <p className="bt-prose">{copy.donate.body[2]}</p>
                <figure><Asset name="donate" crop={[1225, 395, 1130, 1145]} alt="Book-donation introduction, complete disclosure headings, expanded rules, and donation-hours guidance" /></figure>
              </div>
            </div>
          </section>

          <section className="bt-section bt-calendar" data-copy-section="S05" aria-labelledby="bookthing-calendar">
            <div className="bt-section-intro">
              <Heading section={copy.calendar} id="bookthing-calendar" />
              <p className="bt-prose">{copy.calendar.body[0]}</p>
            </div>
            <p className="bt-prose">{copy.calendar.body[1]}</p>
            <figure className="bt-calendar__visual">
              <Asset name="calendar" alt="Complete Calendar desktop page, including navigation, filters, date grid, opening and event details, and footer" />
            </figure>
          </section>
          </div>

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
            <div className="bt-identity__grid">
              <div className="bt-identity__applications">
                <figure className="bt-identity__logo bt-static-artifact">
                  <Asset name="logo" alt="Complete BookThing book-as-door mark, wordmark, and tagline" expand={false} />
                </figure>
                <figure className="bt-identity__card bt-static-artifact">
                  <Asset name="businessCard" alt="Both sides of the BookThing concept business card" expand={false} />
                </figure>
              </div>
              <figure className="bt-identity__type bt-static-artifact">
                <Asset name="typography" alt="Type specimen: NTR for navigation, Arima Madurai for headings, and Archivo Narrow for body copy" expand={false} />
              </figure>
              <figure className="bt-identity__palette bt-static-artifact">
                <Asset name="palette" alt="Complete color study with monochromatic, split-complementary, triadic, and analogous palettes and their original printed values" expand={false} />
              </figure>
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
