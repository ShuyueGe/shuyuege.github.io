import type { CSSProperties, ReactNode } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import "./BookThingPage.css";

// Based on the read-only handoff and subsequent copy and image corrections.
// Crop rectangles use source pixels; source files are never altered.
const assets = {
  hero: { file: "banner-detail-bookthing.png", width: 3000, height: 936 },
  originalHome: { file: "bookthing-original-homepage-first-screen.png", width: 1804, height: 969 },
  originalHomeFull: { file: "bookthing-original-homepage.png", width: 1620, height: 6504 },
  originalNews: { file: "bookthing-original-news.png", width: 1620, height: 4099 },
  originalDonate: { file: "bookthing-donate-before.png", width: 1620, height: 5538 },
  sitemap: { file: "bookthing-sitemap-clean-annotated.png", width: 1377, height: 462 },
  donate: { file: "bookthing-final-donate-page.png", width: 1000, height: 1590 },
  calendar: { file: "bookthing-final-calendar-page.png", width: 3840, height: 2496 },
  news: { file: "bookthing-final-news.png", width: 3840, height: 2496 },
  wishlist: { file: "bookthing-final-wishlist.png", width: 1000, height: 1184 },
  faq: { file: "bookthing-FAQ.png", width: 1000, height: 1254 },
  logo: { file: "bookthing-visual-system-support-logo.png", width: 727, height: 320 },
  typography: { file: "typography.png", width: 920, height: 978 },
  businessCard: { file: "bookthing-visual-system-support-business card.png", width: 462, height: 564 },
};
const interfaceColors = ["#5DC8FD", "#ACE3FF", "#E6F3FA", "#F8FCFE", "#D5FDA1"];
type AssetName = keyof typeof assets;
type Crop = [x: number, y: number, width: number, height: number];
// Refresh same-name exports in browser caches without changing the source files.
const assetRevisions: Partial<Record<AssetName, string>> = { donate: "c878d77c358b", originalNews: "a7c454cdefd0" };
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

function SectionHeading({ id, eyebrow, children }: { id: string; eyebrow: string; children: ReactNode }) {
  return <header className="bt-heading">
    <p className="section-label">{eyebrow}</p>
    <h2 id={id}>{children}</h2>
  </header>;
}

function Callout({ number, children }: { number: number; children: ReactNode }) {
  return <p className="bt-callout"><span className="bt-number">{number}</span><span>{children}</span></p>;
}

export function BookThingPage() {
  useEffect(() => {
    document.title = "BookThing | Shuyue Ge";
  }, []);

  return <Layout className="bookthing-page">
    <article className="bt-case page-shell" aria-labelledby="bookthing-title">
      <section className="bt-hero" aria-labelledby="bookthing-title">
        <div className="bt-hero__top">
          <Link className="back-link" to="/?section=projects"><span aria-hidden="true">←</span> Back to projects</Link>
        </div>
        <figure className="bt-hero__visual">
          <Asset name="hero" alt="BookThing desktop concept with Calendar in front of Newsroom, showing the month selector, date grid, and schedule cards" eager expand={false} />
        </figure>
        <div className="bt-hero__statement">
          <h1 id="bookthing-title">The BookThing of Baltimore</h1>
          <p className="bt-hero__description">This desktop website redesign helps visitors navigate the schedules and donation requirements of a Baltimore nonprofit that redistributes books for free.<br />I restructured the information architecture and translated dense operational content into focused page layouts, visible donation choices, and a cohesive visual identity.</p>
        </div>
      </section>

      <section className="bt-section bt-context" aria-labelledby="bookthing-context">
        <div className="bt-context__overview">
          <SectionHeading id="bookthing-context" eyebrow="Context and scope">Free books.<br />Clearer ways to take part.</SectionHeading>
          <p className="bt-prose">The Book Thing of Baltimore redistributes donated books for free. Monthly openings and detailed donation policies made schedule information and donation requirements central to the redesign.<br />I independently developed the information architecture, desktop website UI prototype, and visual direction, incorporating feedback from instructor and peer critiques.</p>
        </div>
        <dl className="bt-metadata">
          <div><dt>Role</dt><dd>Solo designer</dd></div>
          <div><dt>Timeline</dt><dd>September-December 2025</dd></div>
          <div><dt>Scope</dt><dd>Information architecture<br />Desktop UI · Visual design</dd></div>
          <div><dt>Status</dt><dd>Concept prototype<br />not launched</dd></div>
        </dl>
      </section>

      <section className="bt-section bt-problem" aria-labelledby="bookthing-problem">
        <div className="bt-section-intro">
          <SectionHeading id="bookthing-problem" eyebrow="Site analysis">Essential information competed with the page around it</SectionHeading>
        </div>
        <div className="bt-evidence">
          <div className="bt-evidence__opening">
            <div className="bt-evidence__copy">
              <h3>1. Opening hours were missing from the first screen.</h3>
              <p>The desktop homepage’s first screen showed no opening dates or hours. Visitors had to scroll down to find the information needed to plan a visit.</p>
            </div>
            <figure>
              <Asset name="originalHome" fullSizeName="originalHomeFull" alt="First screen of the original desktop homepage, showing navigation and a welcome area without opening dates or hours; click for the complete archived homepage" />
              <figcaption>Desktop homepage · First screen; opening hours below the fold.</figcaption>
            </figure>
          </div>
          <div className="bt-evidence__supporting">
            <div className="bt-evidence__news">
              <div className="bt-evidence__copy">
                <h3>2. Schedules were hard to spot.</h3>
                <p>Each opening date sat inside an individual News post. Visitors had to scan summaries and read through updates to find a date that fit their plans.</p>
              </div>
              <figure>
                <Asset name="originalNews" crop={[25, 715, 1000, 1170]} alt="Original News feed with August, July, and June 2025 opening dates embedded in individual article summaries" />
                <figcaption>Original News feed · 2025 opening announcements.</figcaption>
              </figure>
            </div>
            <div className="bt-evidence__donate">
              <div className="bt-evidence__copy">
                <h3>3. Dense rules buried financial giving.</h3>
                <p>Long book-donation rules dominated the page. The option to give money did not appear until the fourth screen, requiring visitors to scroll past extensive guidance.</p>
              </div>
              <figure>
                <Asset name="originalDonate" crop={[25, 2520, 1000, 1015]} alt="Project-era Donate page crop preserving the end of book rules above the Money Donations heading and payment action" />
                <figcaption>Financial giving appears in the fourth screen.</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="bt-section bt-ia" aria-labelledby="bookthing-ia">
        <div className="bt-section-intro">
          <SectionHeading id="bookthing-ia" eyebrow="Decision 01 · Information architecture">A place for schedules and donation guidance</SectionHeading>
          <p className="bt-prose">I used the existing sitemap as the starting point for a structure organized around visitor tasks. Calendar is the destination for opening dates, while Newsroom holds announcements; Donate brings payment options, book guidance, and schedules into one area. Keeping FAQ, Contact, Location, and Volunteer as distinct destinations preserves direct routes to practical information.</p>
        </div>
        <div className="bt-ia__sequence">
          <figure className="bt-map">
            <h3>Before · Existing sitemap</h3>
            <div className="bt-map__overview"><Asset name="sitemap" alt="Sitemap before the redesign, documenting the existing Homepage, News and Events, Donate, FAQ, Contact, Location, and Volunteer branches" /></div>
            <figcaption>Existing site structure before the redesign.</figcaption>
          </figure>
          <figure className="bt-map bt-map--after">
            <h3>After · Redesigned sitemap</h3>
            <ImageTodo>Revised sitemap export to be added</ImageTodo>
          </figure>
        </div>
      </section>

      <section className="bt-section bt-donate" aria-labelledby="bookthing-donate">
        <div className="bt-section-intro">
          <SectionHeading id="bookthing-donate" eyebrow="Decision 02 · Donation choices">Showing both ways to donate before the detailed rules</SectionHeading>
          <p className="bt-prose">Money donations needed short explanations and visible actions; book donations needed space for schedules, limits, and acceptance rules. I brought both into the first content row, pairing a compact payment column with wider book guidance. Removing the banner and repeated side boxes made room for these unequal needs. The source site's payment options and policies were retained; no checkout was built.</p>
        </div>
        <div className="bt-comparison">
          <div className="bt-comparison__primary">
            <figure className="bt-comparison__before">
              <h3>Before</h3>
              <Asset name="originalDonate" crop={[0, 735, 1620, 2850]} alt="Original donation page content with book schedules, extensive acceptance rules, sidebar content, and the money-donation option much farther down" />
              <figcaption className="bt-comparison__explanation">Book guidance, acceptance rules, and side content dominated the page. Financial giving appeared much farther down, making it easy to miss when scanning.</figcaption>
            </figure>
            <figure className="bt-comparison__after">
              <h3>After 1 · Two ways to give, visible together.</h3>
              <Asset name="donate" alt="Redesigned Donate page with money and book donation columns visible together, location-specific payment choices, and labeled rule disclosures" />
              <figcaption className="bt-comparison__explanation">Money donors can compare the two payment options without passing through book rules. Book donors have a separate column for schedules and requirements, giving each task an appropriate amount of space. The shared first row makes the choice visible before either set of details.</figcaption>
            </figure>
          </div>
          <div className="bt-comparison__details">
            <figure>
              <h3>After 2 · Location cues beside payment options.</h3>
              <Asset name="donate" crop={[27, 280, 392, 360]} alt="Money donation detail showing out-of-state instructions next to PayPal and Maryland residency instructions directly above Donorbox" />
            </figure>
            <figure>
              <h3>After 3 · Detailed rules under descriptive labels.</h3>
              <Asset name="donate" crop={[453, 273, 527, 484]} alt="Book donation detail showing the priority notice and labeled Books We Accept and Other rules disclosures" />
            </figure>
          </div>
        </div>
      </section>

      <section className="bt-section bt-calendar" aria-labelledby="bookthing-calendar">
        <div className="bt-section-intro">
          <SectionHeading id="bookthing-calendar" eyebrow="Decision 03 · Opening dates">Making visit planning a schedule, not a news search</SectionHeading>
          <p className="bt-prose">Monthly openings moved between weekends. I chose a dedicated Calendar over a general News feed or homepage announcement so dates could sit beside operational details.</p>
        </div>
        <div className="bt-calendar__layout">
          <figure className="bt-calendar__visual">
            <Asset name="calendar" crop={[590, 370, 2700, 1290]} alt="Calendar concept detail with December selector, highlighted dates, and written cards separating book giveaway hours from donation hours" />
            <figcaption>Calendar · Operational schedules</figcaption>
            <div className="bt-calendar__mobile-detail"><Asset name="calendar" crop={[1790, 682, 1440, 404]} alt="Enlarged Calendar opening card listing book giveaway hours of 9am-5pm separately from donation hours of 9am-2pm" /></div>
            <div className="bt-calendar__annotations">
              <Callout number={1}>Dates connect to written schedule details.</Callout>
              <Callout number={2}>Giveaway and donation hours stay separate.</Callout>
              <p className="bt-calendar__legend"><span aria-hidden="true">★</span> The star marks BookThing’s own opening days, distinguishing them from events hosted elsewhere.</p>
            </div>
          </figure>
          <div className="bt-calendar__secondary">
            <div className="bt-calendar__copy">
              <p>Calendar holds schedules and separate giveaway and donation hours; Newsroom retains announcements and archives. This gives the two content types distinct roles.</p>
            </div>
            <figure className="bt-news-detail">
              <div className="bt-news-detail__crops">
                <div className="bt-news-detail__archive"><Asset name="news" crop={[530, 730, 690, 890]} alt="Complete Newsroom Archives panel: the three 2025 entries, Year-end Update, Save the date: Booktoberfest, and Double opening in June, followed by 2024, 2023, 2022, and 2021" /></div>
                <Asset name="news" crop={[1570, 735, 1680, 315]} alt="Newsroom Year-end Update announcement excerpt" />
              </div>
              <figcaption>Newsroom · Announcements and archives</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bt-section bt-identity" aria-labelledby="bookthing-identity">
        <div className="bt-section-intro">
          <SectionHeading id="bookthing-identity" eyebrow="Visual identity">Building a warmer, more cohesive visual identity</SectionHeading>
          <p className="bt-prose">Alongside the site structure, I developed a book-and-door logo direction and a blue-led visual language. Distinct treatments for page titles, actions, content groups, and disclosures give the desktop pages a shared direction while accommodating different amounts of information.</p>
        </div>
        <div className="bt-identity__grid">
          <div className="bt-identity__foundations">
            <figure className="bt-identity__logo">
              <h3>Logo &amp; Slogan</h3>
              <div className="bt-identity__surface"><Asset name="logo" alt="BookThing logo direction: a blue book cover becomes a door, with the Open the Door to Free Knowledge and Joy tagline" expand={false} /></div>
              <figcaption>A book opening like a doorway.</figcaption>
            </figure>
            <figure className="bt-identity__color">
              <h3>Interface colors</h3>
              <ul className="bt-identity__swatches" aria-label="BookThing interface color palette">
              {interfaceColors.map(color => <li key={color}><span style={{ backgroundColor: color }} /><code>{color}</code></li>)}
              </ul>
              <figcaption>Sky blue for emphasis, lighter blues for content surfaces, near-white backgrounds, and fresh green for dividers.</figcaption>
            </figure>
          </div>
          <figure className="bt-identity__type">
            <h3>Typography</h3>
            <Asset name="typography" alt="BookThing typography specimen showing NTR for navigation, Arima Madurai for headings, and Archivo Narrow for body copy" expand={false} />
            <figcaption>Three typefaces create distinct roles for navigation, editorial hierarchy, and dense informational content.</figcaption>
          </figure>
          <figure className="bt-identity__application">
            <h3>Business card design</h3>
            <div className="bt-identity__card-faces">
              <Asset name="businessCard" crop={[20, 25, 422, 242]} alt="Business-card concept front applying the BookThing book-and-door logo, blue field, and colorful circular accents" expand={false} />
              <Asset name="businessCard" crop={[20, 309, 422, 242]} alt="Business-card concept back applying the palette and circular accents around sample contact details" expand={false} />
            </div>
          </figure>
        </div>
      </section>

      <section className="bt-section bt-final" aria-labelledby="bookthing-final">
        <div className="bt-section-intro">
          <SectionHeading id="bookthing-final" eyebrow="Final design">One system, different tasks</SectionHeading>
          <p className="bt-prose">The final screens apply a shared hierarchy and visual language to pages with very different content needs.</p>
        </div>
        <div className="bt-final__exhibition">
          <div className="bt-gallery">
            <figure className="bt-gallery__donate"><Asset name="donate" caption="Donate page" alt="Complete Donate desktop design with parallel donation columns and footer" /></figure>
            <div className="bt-gallery__planning">
              <figure className="bt-gallery__calendar"><Asset name="calendar" caption="Calendar page" alt="Complete Calendar desktop design with schedule view and footer" /></figure>
              <figure className="bt-gallery__news"><Asset name="news" caption="Newsroom page" alt="Complete Newsroom desktop design with archive navigation, updates, and footer" /></figure>
            </div>
          </div>
          <div className="bt-support">
            <figure><Asset name="wishlist" caption="Wishlist page" crop={[35, 235, 930, 680]} alt="Wishlist design with donation guidance and categories for volunteer support, gift cards, cleaning supplies, and office tools" /></figure>
            <figure><Asset name="faq" caption="FAQ page" crop={[35, 230, 930, 680]} alt="FAQ design grouping About Books and Other Questions, with donation receipt guidance expanded" /></figure>
          </div>
        </div>
      </section>

      <section className="bt-section bt-outcome" aria-labelledby="bookthing-outcome">
        <div className="bt-outcome__summary">
          <SectionHeading id="bookthing-outcome" eyebrow="Outcome and next validation">Designed, with understanding still to test</SectionHeading>
          <div className="bt-outcome__copy"><h3>Outcome</h3><p>The Donate concept brings both ways to give into the first content row, making financial giving visible alongside book donations. Calendar pairs opening dates with separate giveaway and donation hours, while Newsroom keeps announcements and archives distinct. Across five desktop prototype pages, a shared visual identity reinforces these content roles and gives the nonprofit a cohesive presence. These changes clarify the intended paths to visiting and contributing; their effectiveness remains unverified by formal user research, usability testing, or launch metrics.</p></div>
        </div>
        <div className="bt-outcome__reflection"><h3>Next validation</h3><p>Ask visitors to find the next opening, donors to identify a payment option, and book donors to locate acceptance requirements. Observe missed navigation and overlooked disclosures, then test reading order when donation columns stack on narrow screens.</p></div>
        <Link className="back-link" to="/?section=projects"><span aria-hidden="true">←</span> Back to projects</Link>
      </section>
    </article>
  </Layout>;
}
