import type { CSSProperties, ReactNode } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { CaseStudyNav } from "../components/CaseStudyNav";
import "./BookThingPage.css";

// Based on the read-only handoff and subsequent copy and image corrections.
// Crop rectangles use source pixels; source files are never altered.
const assets = {
  hero: { file: "banner-detail-bookthing.png", width: 3000, height: 936 },
  originalHome: { file: "bookthing-original-homepage-first-screen.png", width: 1804, height: 969 },
  originalHomeFull: { file: "bookthing-original-homepage.png", width: 1620, height: 6504 },
  originalNews: { file: "bookthing-original-news.png", width: 1620, height: 4099 },
  originalDonate: { file: "bookthing-donate-before.png", width: 1620, height: 5538 },
  // Lossless original screenshots: grid redesign.pdf and high didelity redesign
  // compare-Donate rules.pdf, respectively; page 1, image xref 8 in each (2025).
  analysisNews2025: { file: "bookthing-analysis-news-2025.png", width: 1264, height: 2740 },
  analysisDonate2025: { file: "bookthing-analysis-donate-2025.png", width: 1152, height: 4096 },
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
    <span>Image unavailable</span>
    <strong>Image unavailable: {children}</strong>
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
    {["bookthing-problem", "bookthing-donate", "bookthing-final"].includes(id) && <p className="section-label">{eyebrow.replace(/Decision \d+ · /, "")}</p>}
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
      <section className="bt-hero" aria-label="The BookThing of Baltimore">
        <div className="bt-hero__top">
          <Link className="back-link" to="/?section=projects"><span aria-hidden="true">←</span> Back to projects</Link>
        </div>
        <div className="bt-hero__statement">
          <p className="section-label">BookThing · Nonprofit website · Academic concept</p>
          <h1 id="bookthing-title">Free books.<br />Clearer ways to take part.</h1>
          <p className="bt-hero__description">Reorganizing a Baltimore nonprofit’s desktop website around visiting, donating, and participating.</p>
        </div>
        <dl className="bt-metadata">
          <div><dt>Role</dt><dd>Solo designer</dd></div>
          <div><dt>Timeline</dt><dd>September-December 2025</dd></div>
          <div><dt>Scope</dt><dd>Information architecture<br />Desktop UI · Visual design</dd></div>
          <div><dt>Status</dt><dd>Concept prototype<br />not launched</dd></div>
        </dl>
        <figure className="bt-hero__visual">
          <Asset name="calendar" crop={[590, 370, 2700, 1290]} alt="BookThing Calendar concept pairing a month and date grid with written opening and event details" eager />
          <figcaption>One place to find an opening date and the hours for giving or receiving books.</figcaption>
        </figure>
      </section>
      <CaseStudyNav sections={[{id:"bookthing-problem",label:"Site analysis"},{id:"bookthing-ia",label:"Structure"},{id:"bookthing-donate",label:"Donation choices"},{id:"bookthing-calendar",label:"Opening dates"},{id:"bookthing-outcome",label:"Outcome"}]} />

      <section className="bt-section bt-context" aria-labelledby="bookthing-context">
        <div className="bt-context__overview">
          <SectionHeading id="bookthing-context" eyebrow="Context and scope">A community mission with time-sensitive information</SectionHeading>
          <p className="bt-prose">The Book Thing of Baltimore redistributes donated books for free. Monthly openings and detailed donation policies made information organization central to the redesign. I independently developed the site analysis, information architecture, desktop interface, and visual direction with instructor and peer critique. This was a school concept, not a commissioned or launched redesign.</p>
        </div>
      </section>

      <section className="bt-section bt-problem" aria-labelledby="bookthing-problem">
        <div className="bt-section-intro">
          <SectionHeading id="bookthing-problem" eyebrow="Site analysis">Essential information competed with the page around it</SectionHeading>
          <p className="bt-prose">My review focused on where operational information appeared and what surrounded it. I also used assumption-based proto-personas to keep four planning tasks in view: visit, donate, volunteer, and stay updated. These were planning tools, not findings from user interviews.</p>
        </div>
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

      <section className="bt-section bt-ia" aria-labelledby="bookthing-ia">
        <div className="bt-section-intro">
          <SectionHeading id="bookthing-ia" eyebrow="Decision 01 · Information architecture">A place for schedules and donation guidance</SectionHeading>
          <p className="bt-prose">I combined News and Events into one navigation area and gave opening dates a dedicated Calendar within it. Donate groups rules, schedules, and the wish list. FAQ, Contact, Location, and Volunteer remain separate destinations for distinct community tasks.</p>
        </div>
        <div className="bt-ia__sequence">
          <figure className="bt-map">
            <h3>Planning the content groups</h3>
            <div className="bt-map__overview"><Asset name="sitemap" alt="Planning sitemap with Homepage and six top-level branches, including Calendar within News and Events and donation rules, schedules, and wish list within Donate" /></div>
            <figcaption>The planning sitemap documents proposed content groupings, not a tested click path.</figcaption>
          </figure>
          <div className="bt-ia__proof">
            <figure><Asset name="news" crop={[1230, 130, 610, 400]} alt="Final News and Events dropdown with Calendar, Newsroom, and Social Media" /><figcaption>Calendar gives opening dates a destination within News &amp; Events.</figcaption></figure>
            <p className="bt-prose">Calendar still sits beneath News &amp; Events. Whether a first-time visitor would look there remains a question for future navigation testing.</p>
          </div>
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
              <Asset name="originalDonate" crop={[0, 735, 1620, 1400]} alt="Upper portion of the original donation page showing book schedules, acceptance rules, and competing sidebar content; the full page opens separately" />
              <figcaption className="bt-comparison__explanation">Book guidance, acceptance rules, and side content dominated the page. Financial giving appeared much farther down, making it easy to miss when scanning.</figcaption>
            </figure>
            <figure className="bt-comparison__after">
              <h3>Concept · Two ways to give, visible together</h3>
              <Asset name="donate" crop={[20, 205, 960, 885]} alt="Opening content of the Donate concept: money donation options beside book-donation guidance and disclosures" />
              <figcaption className="bt-comparison__explanation">Both paths begin in the first content row. Money donors see payment choices; book donors get a wider column for requirements.</figcaption>
            </figure>
          </div>
          <div className="bt-comparison__details">
            <figure>
              <h3>Location cues beside payment options</h3>
              <Asset name="donate" crop={[27, 280, 392, 360]} alt="Money donation detail showing out-of-state instructions next to PayPal and Maryland residency instructions directly above Donorbox" />
            </figure>
            <figure>
              <h3>Detailed rules under descriptive labels</h3>
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
            <Asset name="calendar" crop={[1790, 682, 1440, 404]} alt="Calendar opening card listing book giveaway hours of 9am-5pm separately from donation hours of 9am-2pm" />
            <figcaption>Opening-card detail · Different hours for different tasks</figcaption>
            <div className="bt-calendar__annotations">
              <Callout number={1}>Dates connect to written schedule details.</Callout>
              <Callout number={2}>Giveaway and donation hours stay separate.</Callout>
              <p className="bt-calendar__legend">The concept still needs a clear explanation of the star marker and consistent event dates across exports.</p>
            </div>
          </figure>
          <div className="bt-calendar__secondary">
            <div className="bt-calendar__copy">
              <p>Calendar holds operational schedules; Newsroom retains announcements and archives. A live version would need a reliable publishing process to keep dates consistent across these destinations.</p>
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
        <div className="bt-identity__compact">
          <figure><Asset name="logo" alt="BookThing book-as-door identity with the Open the Door to Free Knowledge and Joy tagline" expand={false} /></figure>
          <div><h2 id="bookthing-identity">A shared visual language</h2><p className="bt-prose">The book-as-door mark and blue-led interface treatments reinforce an approachable community tone. Repeated actions, light-blue content groups, headings, and disclosures give different tasks a common visual direction.</p></div>
        </div>
      </section>

      <section className="bt-section bt-final" aria-labelledby="bookthing-final">
        <div className="bt-section-intro">
          <SectionHeading id="bookthing-final" eyebrow="Final design">One system, different tasks</SectionHeading>
          <p className="bt-prose">Two further pages carry the same hierarchy into support needs and common questions. Wishlist organizes ways to contribute; FAQ groups answers behind expandable headings.</p>
        </div>
        <div className="bt-final__exhibition">
          <div className="bt-gallery bt-gallery--supporting">
            <figure><Asset name="wishlist" caption="Wishlist · Ways to contribute" alt="Complete Wishlist concept with donation guidance and categories for volunteer support, gift cards, cleaning supplies, and office tools" /></figure>
            <figure><Asset name="faq" caption="FAQ · Answers by topic" alt="Complete FAQ concept grouping About Books and Other Questions, with donation receipt guidance expanded" /></figure>
          </div>
        </div>
      </section>

      <section className="bt-section bt-outcome" aria-labelledby="bookthing-outcome">
        <div className="bt-outcome__summary">
          <SectionHeading id="bookthing-outcome" eyebrow="Outcome and next validation">Designed, with understanding still to test</SectionHeading>
          <div className="bt-outcome__copy"><h3>What changed</h3><p>Five desktop concept pages give donation choices, opening schedules, and announcements distinct roles. A shared visual language connects them. Their effectiveness remains unverified: the project had no formal user research, usability testing, or launch metrics.</p></div>
        </div>
        <div className="bt-outcome__reflection"><h3>Next validation</h3><p>Ask visitors to find the next opening, donors to identify a payment option, and book donors to locate acceptance requirements. Observe missed navigation and overlooked disclosures, then test reading order when donation columns stack on narrow screens.</p></div>
        <Link className="back-link" to="/?section=projects"><span aria-hidden="true">←</span> Back to projects</Link>
      </section>
    </article>
  </Layout>;
}
