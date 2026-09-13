import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { MoriMedia } from "../components/MoriMedia";
import type { MoriAsset } from "../components/MoriMedia";
import { moriAssets as a } from "../data/moriAssets";
import "./MoriPage.css";

function ReturnSequence({ label, start, destination }: {
  label: string; start: MoriAsset; destination: MoriAsset;
}) {
  return <div className="mori-sequence" role="group" aria-label={label}>
    <p className="mori-sequence__label">{label}</p>
    <div className="mori-sequence__frames">
      <MoriMedia asset={start} />
      <span className="mori-sequence__arrow" aria-hidden="true">→</span>
      <MoriMedia asset={destination} />
    </div>
  </div>;
}

function ModePair({ shipped = false }: { shipped?: boolean }) {
  return <figure className={`mori-mode-pair${shipped ? " mori-mode-pair--shipped" : ""}`}>
    <p className="mori-version">{shipped ? "Shipped implementation" : "Original interfaces"}</p>
    <div className="mori-mode-pair__screens">
      <div>
        <p className="mori-figure-label">Heart Companion</p>
        <MoriMedia asset={shipped ? a.companionShipped : a.companionOriginal} />
      </div>
      <div>
        <p className="mori-figure-label">Health Guardian</p>
        <MoriMedia asset={shipped ? a.guardianShipped : a.guardianOriginal} />
      </div>
    </div>
    <figcaption>{shipped
      ? "The shipped modes share a structure, with different cues for purpose."
      : "Different purposes, similar original conversation interfaces."}</figcaption>
  </figure>;
}

// Public text follows the eight PUBLIC blocks in mori-final.md verbatim.
// Responsive grids follow that handoff's explicit desktop/mobile reading order.
export function MoriPage() {
  useEffect(() => { document.title = "MORI | Shuyue Ge"; }, []);

  return <Layout className="mori-page">
    <article className="mori-case page-shell" aria-labelledby="mori-title">
      <div className="mori-back">
        <Link className="back-link" to="/?section=projects"><span aria-hidden="true">←</span> Back to projects</Link>
      </div>

      <section className="mori-hero" aria-labelledby="mori-title" data-copy-section="S01">
        <div className="mori-hero__intro">
          <p className="mori-eyebrow">MORI · AI-native wellbeing web app</p>
          <h1 id="mori-title">Designing predictability into an unconventional AI-native product</h1>
          <p className="mori-deck">I designed and shipped three interaction improvements with engineering, balancing existing user habits, platform constraints, and MORI’s minimal interface.</p>
        </div>
        <dl className="mori-metadata">
          <div><dt>Role</dt><dd>Product Designer Intern · Only product designer</dd></div>
          <div><dt>When</dt><dd>March–July 2026</dd></div>
          <div><dt>Team</dt><dd>Me, three engineers, and Danny on product decisions</dd></div>
          <div><dt>Product at the time</dt><dd>Live, with several thousand users</dd></div>
          <div><dt>Scope</dt><dd>Three shipped redesigns, plus logo and visual design</dd></div>
        </dl>
        <figure className="mori-hero__visual">
          <div className="mori-stage mori-hero__stage"><MoriMedia asset={a.hero} eager /></div>
          <figcaption>MORI’s shipped interface during the internship.</figcaption>
        </figure>
        <p className="mori-hero__ownership">I owned UX and interaction design for these improvements. Final product and implementation decisions were collaborative.</p>
      </section>

      <section className="mori-diagnosis mori-section" aria-labelledby="mori-diagnosis" data-copy-section="S02">
        <div className="mori-diagnosis__intro">
          <h2 id="mori-diagnosis">Minimal on the surface. Complex underneath.</h2>
          <p className="mori-prose">MORI combined AI conversation with health-data analysis and prompts for people seeking support for their mental and physical wellbeing. Its minimal interface aimed to create a calm experience.</p>
        </div>
        <figure className="mori-rules">
          <p className="mori-version">Original interface · Product-review examples.</p>
          <div className="mori-rules__collage">
            <div className="mori-rules__visible">
              <p className="mori-annotation"><span aria-hidden="true">1</span>Visible controls</p>
              <MoriMedia asset={a.visible} />
            </div>
            <div className="mori-rules__press">
              <p className="mori-annotation"><span aria-hidden="true">2</span>Press to reveal</p>
              <div className="mori-rules__press-pair"><MoriMedia asset={a.pressBefore} /><MoriMedia asset={a.pressAfter} /></div>
            </div>
            <div className="mori-rules__gesture">
              <p className="mori-annotation"><span aria-hidden="true">3</span>Gesture or empty-space action</p>
              <MoriMedia asset={a.gesture} />
            </div>
          </div>
          <figcaption>Original interaction rules, annotated from my product review.</figcaption>
        </figure>
        <div className="mori-diagnosis__insight">
          <p className="mori-prose">Through hands-on product review, I found that the sparse interface still asked people to learn different interaction rules across screens.</p>
          <p className="mori-key">Minimal UI does not automatically mean simple interaction.</p>
        </div>
      </section>

      <section className="mori-principle" aria-labelledby="mori-principle" data-copy-section="S03">
        <h2 id="mori-principle">Make the rules consistent. Keep MORI’s character.</h2>
        <p>A shared way back. Recording where the information is. Distinct conversation cues within one product.</p>
      </section>

      <section className="mori-navigation" aria-labelledby="mori-navigation" data-copy-section="S04">
        <header className="mori-heading">
          <p className="mori-eyebrow">Decision 01 · Navigation</p>
          <h2 id="mori-navigation">Making navigation predictable without adding more UI.</h2>
          <p className="mori-deck">A shared return model had to work across screens and real devices.</p>
        </header>
        <p className="mori-prose">Return controls varied by screen: the Mori cloud, a downward triangle, empty space, or gestures. I proposed a shared model with the cloud as the primary anchor and a right swipe as the secondary path.</p>

        <div className="mori-proposal">
          <figure>
            <p className="mori-version">Initial direction — not shipped</p>
            <div className="mori-proposal__screens">
              <div><p className="mori-figure-label">Tap the Mori cloud</p><MoriMedia asset={a.proposalCloud} /></div>
              <div><p className="mori-figure-label">Swipe right <span aria-hidden="true">→</span></p><MoriMedia asset={a.proposalSwipe} /></div>
            </div>
            <figcaption>The initial model paired a shared anchor with a gesture alternative.</figcaption>
          </figure>
          <div className="mori-constraint">
            <h3>Android made the swipe unreliable.</h3>
            <p className="mori-prose">Engineering pointed out that a right swipe could conflict with Android’s native navigation on some devices. That made it unreliable as an in-product return action.</p>
            <p className="mori-key">Platform behavior took priority over an elegant in-product gesture.</p>
          </div>
        </div>

        <div className="mori-shipped-intro">
          <h3>What shipped: two ways back to the previous layer.</h3>
          <p className="mori-prose">The final design used cloud taps and empty-space taps across the redesigned screens, avoiding the proposed swipe conflict.</p>
        </div>
        <figure className="mori-return">
          <div className="mori-return__stage mori-stage">
            <p className="mori-version">Shipped implementation.</p>
            <ReturnSequence label="Primary — tap the Mori cloud" start={a.cloudStart} destination={a.cloudDestination} />
            <ReturnSequence label="Secondary — tap empty space" start={a.emptyStart} destination={a.emptyDestination} />
          </div>
          <figcaption>Both shipped actions return to the previous layer.</figcaption>
        </figure>
        <p className="mori-tradeoff">Empty space can be difficult to find on content-heavy screens, while sparse screens leave room for accidental taps. We accepted those limitations to keep a return model that fit the implementation and MORI’s character.</p>
        <details className="mori-exploration">
          <summary><span>Another direction explored</span><span className="mori-exploration__status">Exploration — not shipped</span></summary>
          <p>I also explored revealing the previous layer during a pull-down gesture, completing the return on release past a threshold. This direction did not ship.</p>
          {/* MORI-NAV-03 is optional. No historical artifact was supplied. */}
        </details>
      </section>

      <section className="mori-health mori-section" aria-labelledby="mori-health" data-copy-section="S05">
        <header className="mori-heading">
          <p className="mori-eyebrow">Decision 02 · Health recording</p>
          <h2 id="mori-health">Make the information the entry point.</h2>
          <p className="mori-prose">The original 2 × 2 health-data display was passive. A separate 1 × 3 control area opened the recording form.</p>
        </header>
        <div className="mori-health__comparison">
          <figure>
            <p className="mori-figure-label">Before · Separate information and recording access</p>
            <div className="mori-stage mori-health__before">
              <div><p className="mori-annotation">Health information</p><MoriMedia asset={a.healthInformation} /></div>
              <div><p className="mori-annotation">Recording controls</p><MoriMedia asset={a.healthControls} /></div>
            </div>
          </figure>
          <figure>
            <p className="mori-figure-label">Shipped · Record directly from the data item</p>
            <div className="mori-stage mori-health__after">
              <div><p className="mori-annotation">Data item opens recording</p><MoriMedia asset={a.healthShipped} /></div>
            </div>
          </figure>
        </div>
        <div className="mori-health__result">
          <div>
            <p className="mori-prose">I made the relevant data items entry points to the existing form.</p>
            <p className="mori-key">The redesign connected the information people were viewing with the action of recording it.</p>
          </div>
          <figure className="mori-health__form">
            <MoriMedia asset={a.healthForm} />
            <figcaption>Both entry patterns opened this existing form.</figcaption>
          </figure>
        </div>
      </section>

      <section className="mori-modes mori-section" aria-labelledby="mori-modes" data-copy-section="S06">
        <div className="mori-modes__original">
          <header className="mori-heading">
            <p className="mori-eyebrow">Decision 03 · Conversational modes</p>
            <h2 id="mori-modes">How different should two conversations feel?</h2>
            <p className="mori-prose">Heart Companion supported open-ended, emotional conversation; Health Guardian was more structured and health-focused. In my review, their similar interfaces did little to express that distinction.</p>
          </header>
          <ModePair />
        </div>
        <div className="mori-options">
          <div><h3>Different backgrounds</h3><p>MORI already used several backgrounds. Another color change would add variation without explaining purpose.</p></div>
          <div><h3>Completely different layouts</h3><p>A stronger distinction, but at the cost of consistency and familiarity.</p></div>
          <div className="mori-options__chosen"><h3>Shared structure + purposeful cues</h3><p>Chosen</p></div>
        </div>
        <div className="mori-modes__principle">
          <h3>Different enough to communicate purpose. Similar enough to remain one product.</h3>
          <p className="mori-prose">For Health Guardian, I used guidance and input cues to suggest a more structured tone.</p>
        </div>
        <ModePair shipped />
        <div className="mori-details">
          <p className="mori-version">Shipped Health Guardian · Detail crops.</p>
          <div className="mori-details__strip">
            {[{ label: "Opening guidance", asset: a.guidance }, { label: "Revised placeholder", asset: a.inputPlaceholder }, { label: "Taller input area", asset: a.inputHeight }, { label: "Smaller corner radius", asset: a.inputRadius }].map(({ label, asset }) =>
              <figure key={label}>
                <MoriMedia asset={asset} kind="detail" />
                <figcaption>{label}</figcaption>
              </figure>)}
          </div>
        </div>
      </section>

      <section className="mori-visual mori-section" aria-labelledby="mori-visual" data-copy-section="S07">
        <div><h2 id="mori-visual">Logo &amp; visual design</h2><p className="mori-prose">Alongside the product improvements, I created logo and visual design work for MORI.</p></div>
        <figure><MoriMedia asset={a.logo} kind="artwork" /><figcaption>MORI logo design.</figcaption></figure>
      </section>

      <section className="mori-closing mori-section" aria-labelledby="mori-closing" data-copy-section="S08">
        <h2 id="mori-closing">Three targeted changes, shipped.</h2>
        <div className="mori-closing__outcomes">
          <dl>
            <div><dt>Navigation</dt><dd>a shared return model using cloud and empty-space taps.</dd></div>
            <div><dt>Health recording</dt><dd>data items that open the existing recording form.</dd></div>
            <div><dt>Conversation modes</dt><dd>distinct guidance and input cues within a shared structure.</dd></div>
          </dl>
          <p className="mori-key">All three were implemented and shipped to the live product.</p>
        </div>
        <div className="mori-closing__reflection">
          <p className="mori-prose">I don’t have formal post-launch usability results or quantitative behavioral analysis for these changes.</p>
          <p>Minimal UI still needs a learnable interaction model. Choosing what to ship meant balancing existing habits, platform behavior, implementation constraints, and MORI’s character.</p>
        </div>
      </section>
    </article>
  </Layout>;
}
