import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { CaseStudyNav } from "../components/CaseStudyNav";
import { Tradeoff } from "../components/Tradeoff";
import "./PatsyPage.css";
import "../components/CaseStudyHero.css";

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

function Heading({ id, eyebrow, children }: { id: string; eyebrow: string; children: ReactNode }) {
  return <header className="ps-heading">{["patsy-research", "patsy-pickup", "patsy-final"].includes(id) && <p className="section-label">{eyebrow}</p>}<h2 id={id}>{children}</h2></header>;
}

function Note({ number, children }: { number: number; children: ReactNode }) {
  return <p className="ps-annotation"><span className="ps-annotation__number">{number}</span><span>{children}</span></p>;
}

function SurveyCount({ count, children }: { count: number; children: ReactNode }) {
  return <div className="ps-stat">
    <p><strong>{count} <span>of 21</span></strong> {children}</p>
    <div className="ps-stat__units" aria-hidden="true">
      {Array.from({ length: 21 }, (_, index) => <span key={index} className={index < count ? "is-filled" : ""} />)}
    </div>
  </div>;
}

export function PatsyPage() {
  useEffect(() => { document.title = "Patsy’s Restaurant | Shuyue Ge"; }, []);

  return <Layout className="patsy-page">
    <article className="ps-case" aria-labelledby="patsy-title">
      <section className="ps-hero case-study-hero" aria-labelledby="patsy-title">
        <div className="ps-back"><Link className="back-link" to="/?section=projects"><span aria-hidden="true">←</span> Back to projects</Link></div>
        <div className="ps-hero__content">
          <header className="ps-hero__intro case-study-hero__intro">
            <p className="section-label">Patsy’s Restaurant · Mobile website concept</p>
            <h1 id="patsy-title">Making the path from browsing<br />to action clearer on mobile</h1>
            <p>Our team explored how Patsy’s mobile website could help people evaluate a restaurant and take the next step. Research shaped the initial concept; formative testing exposed a missing pickup path and guided the revision.</p>
          </header>
          <div className="ps-hero__details">
            <dl className="ps-metadata case-study-info case-study-info--five">
              <div className="ps-metadata__role"><dt>Role</dt><dd>Research planning · Product analysis · Usability-test design &amp; observation · Focused UI refinement</dd></div>
              <div><dt>Team</dt><dd>Four-person academic project</dd></div>
              <div><dt>Scope</dt><dd>Mobile menu, reservations, and pickup concept</dd></div>
              <div><dt>Report submitted</dt><dd>May 3, 2026</dd></div>
              <div><dt>Status</dt><dd>Figma prototype</dd></div>
            </dl>
            <p className="ps-hero__contribution">I helped design the questionnaire, asked questions in 3 of 12 interview sessions, and identified mobile readability and navigation issues through product review.</p>
          </div>
          <figure className="ps-hero__visual">
            <div className="ps-hero__screens">
              <Screen name="landing" crop={[0, 0, 804, 1035]} alt="Team mobile landing preview with restaurant image and separate reservation, menu, and pickup entry points" eager />
              <Screen name="entrees" crop={[0, 0, 804, 1160]} alt="Team mobile menu preview with categories and complete Crab Cakes row" eager />
            </div>
            <figcaption>Team mobile prototype: menu browsing, reservations, and a proposed pickup path.</figcaption>
          </figure>
        </div>
      </section>
      <div className="case-study-layout">
      <CaseStudyNav sections={[{id:"patsy-research",label:"Research"},{id:"patsy-priorities",label:"Mobile priorities"},{id:"patsy-pickup",label:"Pickup iteration"},{id:"patsy-reservation",label:"Reservation review"},{id:"patsy-outcome",label:"Outcome"}]} />
      <div className="case-study-layout__content">

      <section className="ps-section ps-start" aria-labelledby="patsy-start">
        <Heading id="patsy-start" eyebrow="The starting point">The information was there. Reading it on a phone was the problem.</Heading>
        <div className="ps-start__spread">
          <div className="ps-start__copy ps-prose">
            <p>Patsy’s is a restaurant in Bethany Beach, Delaware. Its website provided menus, hours, seasonal closures, contact details, and a reservation link. Familiar navigation labels were worth retaining, but small text and crowded content required manual zooming on mobile.</p>
            <p>Useful information was present without a clear visual order. Respondents were relatively positive about finding hours; readability and perceived currency were weaker. The redesign needed to preserve that practical value while making the page easier to scan.</p>
          </div>
          <figure className="ps-start__home">
            <h3>Original website</h3>
            <Screen name="originalHome" crop={[18, 160, 1120, 1640]} alt="Original Patsy’s website showing sidebar categories, promotional badge, restaurant information, opening hours, and repeated contact details" />
            <figcaption><Note number={1}>Familiar categories gave the redesign a useful starting point.</Note><Note number={2}>Restaurant details competed with promotional content and repeated contact information.</Note></figcaption>
          </figure>
          <figure className="ps-start__menu">
            <Screen name="originalMenu" crop={[360, 320, 665, 825]} alt="Original Dinner Starters menu showing consecutive names, descriptions, and prices in dense text" />
            <figcaption><Note number={3}>Item names, descriptions, and prices ran together in dense text.</Note></figcaption>
          </figure>
        </div>
      </section>

      <section className="ps-section ps-research" aria-labelledby="patsy-research">
        <div className="ps-research__data-band">
          <div className="ps-research__opening"><Heading id="patsy-research" eyebrow="Evidence that set the direction">The website often confirmed a dining decision already in progress</Heading>
            <p className="ps-prose">Our team collected 21 survey responses and conducted 12 semi-structured interview sessions. Interviewees described discovering restaurants through Google Maps, reviews, or social media, then checking the restaurant website for practical details.</p>
          </div>
          <div className="ps-research__results">
            <SurveyCount count={15}>respondents were somewhat or very likely to visit a restaurant’s website before going.</SurveyCount>
            <SurveyCount count={21}>selected viewing the menu as a reason to use Patsy’s website.</SurveyCount>
            <p className="ps-small">Survey counts describe this project sample. The menu question allowed multiple selections.</p>
          </div>
        </div>
        <div className="ps-research__quote-band">
          <blockquote><p>“I check the menu to see if there’s anything I would like to eat and also check prices.”</p><cite>Interview participant</cite></blockquote>
        </div>
        <div className="ps-research__synthesis">
          <div className="ps-findings">
            <div><h3>Confirm the essentials</h3><p>Interviews emphasized menu options, prices, location, and hours.</p><p>This suggested the site should support quick confirmation. We prioritized direct access to menu browsing and reservation tasks.</p></div>
            <div><h3>Make information readable</h3><p>Survey comments and our product review identified small type, crowding, and mobile friction.</p><p>We translated these findings into a mobile layout with clearer spacing and prominent actions.</p></div>
            <div><h3>Help people evaluate dishes</h3><p>Open-ended feedback requested food images; interviews emphasized food options and price clarity.</p><p>We organized menu items into categories with images, descriptions, and prices.</p></div>
          </div>
          <p className="ps-research__limit ps-small">The sample included UMBC students and team members’ families; no survey respondent lived in Bethany Beach, and only one had previously visited Patsy’s.</p>
        </div>
      </section>

      <section className="ps-section ps-priorities" aria-labelledby="patsy-priorities">
        <div className="ps-priorities__opening">
          <Heading id="patsy-priorities" eyebrow="Decision 01 · Make the next action visible">Give the main tasks room on a small screen</Heading>
          <div className="ps-priorities__copy ps-prose">
            <p>My product review identified manual zooming and crowded content. The problem went beyond font size: the page needed to distinguish what someone could do from the information they could read.</p>
            <p>Our team separated reservations and menu browsing into distinct homepage actions; the revised version added Order Pickup. Contact links moved into a compact footer.</p>
            <Tradeoff text="The tradeoff was less emphasis on practical information. Hours and seasonal closures mattered in the survey but are absent from the exported landing screen. I would revisit their placement." />
          </div>
        </div>
        <div className="ps-priorities__comparison">
          <figure className="ps-priorities__before">
            <p className="ps-comparison-label">BEFORE</p>
            <Screen name="originalPhone" crop={[0, 0, 992, 1685]} alt="Original phone capture preserving the desktop-style website at its small scale within a large orange page" />
            <figcaption>Original phone view: the page retained a dense, desktop-style composition.</figcaption>
          </figure>
          <figure className="ps-priorities__after">
            <p className="ps-comparison-label">AFTER</p>
            <Screen name="landing" crop={[0, 0, 804, 1040]} alt="Revised landing detail with the building image and all three task buttons" />
            <figcaption>Revised team prototype: reservations, menu browsing, and pickup have separate entry points.</figcaption>
            <div className="ps-footer-detail"><h3>Footer detail</h3><Screen name="landing" crop={[0, 1635, 804, 123]} alt="Separate footer detail with contact and location links" /><p className="ps-small">Contact links moved below the main tasks; hours still need a visible home.</p></div>
          </figure>
        </div>
      </section>

      <section className="ps-section ps-pickup" aria-labelledby="patsy-pickup">
        <div className="ps-pickup__opening">
          <Heading id="patsy-pickup" eyebrow="Decision 02 · Follow the task beyond the menu">Testing exposed the gap between browsing and ordering</Heading>
          <p className="ps-pickup__observation">During the assigned pickup task, one participant searched for a cart without finding an ordering path. Another expected the crab-cake item to be clickable. Earlier research had raised online ordering; testing exposed the omitted path.</p>
          <div className="ps-pickup__intro ps-prose">
            <p>Menu access was already a research priority. The first prototype grouped dishes into four categories with names, prices, and image placeholders. It supported browsing but lacked a pickup path.</p>
            <p>We ran formative think-aloud testing with two participants. I designed the protocol, observed sessions, and took notes. Tasks were to reserve dinner for two, find crab cakes and their price, and attempt pickup.</p>
          </div>
        </div>
        <div className="ps-pickup__comparison-stage">
          <div className="ps-menu-comparison">
            <figure><h3>Tested V1 · Menu browsing</h3><Screen name="testedMenu" crop={[305, 55, 257, 220]} alt="Initial menu detail with navigation and the first dish, but no ordering entry" /><figcaption>No ordering entry: participants could browse, but could not reach pickup.</figcaption></figure>
            <figure><h3>Revised team prototype · Ordering cues</h3><Screen name="entrees" crop={[0, 0, 804, 695]} alt="Revised menu detail showing the cart at the top and the plus beside the first dish" /><figcaption>Cart at the top; a plus beside each dish. Add-to-cart remains nonfunctional.</figcaption></figure>
            <p className="ps-menu-comparison__caption ps-small">Assigned pickup task → a missing cart path → a proposed ordering sequence.</p>
          </div>
        </div>
        <div className="ps-pickup__finding">
          <div className="ps-pickup__revision ps-prose">
            <p>Extending the menu into a pickup sequence was our clearest testing-informed change. We added cart cues, an order summary, checkout with pickup information, and confirmation. Showing the sequence made the full path more explicit than a cart icon alone.</p>
            <p>My smaller menu refinement removed the redundant Menu heading to give categories more room, a design judgment, separate from the test findings.</p>
            <p>Next-step buttons advance through preset states, but add-to-cart does not work. The revised flow has not yet been retested.</p>
          </div>
        </div>
        <div className="ps-pickup__flow-stage">
          <div className="ps-flow-intro"><h3>The proposed pickup path</h3><p className="ps-flow-label">Preset prototype screens · Not a working checkout</p></div>
          <ol className="ps-flow" aria-label="Intended pickup sequence">
            <li><h4>1. Review the order</h4><figure><Screen name="cart" crop={[35, 1150, 730, 575]} alt="Cart detail: sample order totals and the Continue action" /><figcaption>Review the intended order before checkout.</figcaption></figure></li>
            <li><h4>2. Arrange pickup</h4><figure><Screen name="checkout" crop={[35, 720, 730, 1005]} alt="Checkout detail: pickup address, in-person collection instructions, order summary, and Place Order action" /><figcaption>Pickup information appears beside payment choices.</figcaption></figure></li>
            <li><h4>3. Confirm the next step</h4><figure><Screen name="orderConfirmation" crop={[35, 1180, 735, 555]} alt="Confirmation detail: sample pickup estimate and Return to Home action" /><figcaption>Show what happens after the proposed order.</figcaption></figure></li>
          </ol>
        </div>
      </section>

      <section className="ps-section ps-reservation" aria-labelledby="patsy-reservation">
        <div className="ps-reservation__strip">
          <div className="ps-reservation__copy ps-prose">
            <Heading id="patsy-reservation" eyebrow="Decision 03 · Clarify the commitment">Keep reservation review focused on editing or confirming</Heading>
            <p>Reservation needed clarification, not a response to widespread failure: survey feedback was relatively positive. The original page linked to Tock; our team proposed an in-site selection, review, and confirmation flow.</p>
            <p>Both test participants completed the initial reservation task without major difficulty. One appreciated reserving without an account. Testing revealed smaller uncertainties: hesitation over time selection and confusion around an X control on the review screen.</p>
            <p>The team removed the confusing control and retained explicit edit and reserve actions. The prototype can be clicked through to completion, but time-selection feedback remains unresolved. My confirmation-screen hierarchy refinement was a design judgment, not a tested improvement.</p>
            <figure className="ps-reservation__original"><h3>Original website · External booking link</h3><Screen name="originalReservation" crop={[305, 365, 845, 180]} alt="Original reservation page sentence and complete external Tock booking link" /></figure>
          </div>
          <figure className="ps-reservation__review"><h3>Revised team prototype · Reservation review</h3><Screen name="reservationReview" crop={[50, 850, 710, 875]} alt="Revised Confirm Reservation panel with guest count, date, address, and both Make Edits and Reserve buttons" /><figcaption>Two explicit choices: make edits or reserve.</figcaption></figure>
        </div>
      </section>

      <section className="ps-section ps-final" aria-labelledby="patsy-final">
        <div className="ps-final__opening">
          <Heading id="patsy-final" eyebrow="The resulting concept">The revised mobile experience, together</Heading>
          <p className="ps-prose">Selected team-prototype screens bring homepage actions, menu browsing, and reservation confirmation into one mobile experience.</p>
        </div>
        <div className="ps-final__stage">
          <div className="ps-gallery">
            <figure><Screen name="starters" crop={[0, 175, 804, 690]} alt="Starters menu detail with category navigation, dish descriptions, prices, and ordering cues" /><figcaption>Browse dishes by category.</figcaption></figure>
            <figure><Screen name="reservationConfirmation" crop={[35, 950, 735, 775]} alt="Reservation confirmation detail with guest count, date, address, and Return to Home action" /><figcaption>Review the reservation confirmation.</figcaption></figure>
          </div>
          <p className="ps-small ps-gallery__caption">Team mobile prototype · Concept screens</p>
        </div>
      </section>

      <section className="ps-section ps-outcome" aria-labelledby="patsy-outcome">
        <div className="ps-outcome__spread">
          <Heading id="patsy-outcome" eyebrow="What the work established">A clear-looking interface and a supported task are different things</Heading>
          <div className="ps-outcome__content">
            <dl className="ps-outcome__scope">
              <div><dt>Designed</dt><dd>A revised mobile concept for menu browsing, reservations, and a proposed pickup sequence.</dd></div>
              <div><dt>Tested</dt><dd>Three tasks on the initial prototype with two participants, revealing missing ordering steps and ambiguous controls.</dd></div>
              <div><dt>Still unvalidated</dt><dd>The revised pickup flow, broader usability, and restaurant acceptance. The concept remained unlaunched; no desktop design or measured post-redesign results were produced.</dd></div>
            </dl>
            <div className="ps-outcome__reflection ps-prose">
              <p>Participants could respond positively to the layout while still being unable to complete the pickup task. For me, that made task coverage a more meaningful checkpoint than favorable impressions alone.</p>
              <p>I would make item selection and cart updates functional, then retest pickup with a broader sample including local diners and returning customers. Further work would address hours visibility, time-selection feedback, touch-based price explanations, and the restaurant’s booking and checkout requirements.</p>
            </div>
          </div>
        </div>
        <Link className="back-link" to="/?section=projects"><span aria-hidden="true">←</span> Back to projects</Link>
      </section>
      </div>
      </div>
    </article>
  </Layout>;
}
