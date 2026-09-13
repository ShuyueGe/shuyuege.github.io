# MORI — Final Case Study

## Page-level narrative / implementation notes

One diagnosis—minimal UI with multiple interaction rules—connects a short principle transition to three shipped decisions. Navigation carries the deepest reasoning; health recording is the shortest comparison; conversational modes receive medium depth. Logo work is a brief interlude before the shipped closing.

PUBLIC blocks contain page copy. Figure labels and annotations specified below are also public; field names, image markers, layouts, source notes and [NEED: ...] items are internal. Use one H1 and the supplied H2/H3 hierarchy.

**W** is the portfolio’s existing wide content rail; if undefined, use approximately 1,200 px within a 1,440 px desktop viewport. Percentages divide usable width after column gaps. Preserve existing typography, colors and spacing; keep ordinary prose near 58–66 characters per line and mobile gutters at least 20–24 px. Image ratios describe presentation canvases: contain each source at its native proportion and preserve the specified evidence.

## 01 — Hero

### Final PUBLIC copy

<!-- PUBLIC:S01:START -->

**Eyebrow:** MORI · AI-native wellbeing web app

**H1:** Designing predictability into an unconventional AI-native product

**Deck:** I designed and shipped three interaction improvements with engineering, balancing existing user habits, platform constraints, and MORI’s minimal interface.

**Role:** Product Designer Intern · Only product designer  
**When:** March–July 2026  
**Team:** Me, three engineers, and Danny on product decisions  
**Product at the time:** Live, with several thousand users  
**Scope:** Three shipped redesigns, plus logo and visual design

**Ownership:** I owned UX and interaction design for these improvements. Final product and implementation decisions were collaborative.

<!-- SLOT:MORI-HERO-01 -->
<!-- CAPTION:MORI-HERO-01 -->
MORI’s shipped interface during the internship.

<!-- PUBLIC:S01:END -->

### Layout

Use a 40/60 split within W. Left: eyebrow, H1, deck, compact two-column metadata, then ownership. Right: one large product view aligned with the title; caption directly below. Keep the H1 near three lines and the deck at 40–46 characters per line. The image stays within W with no overlap. Pace: about 0.9 desktop viewport, content-led.

### Mobile

Eyebrow → H1 → deck → metadata → product image → caption → ownership. Keep metadata compact so the product appears early; preserve the source screen’s native ratio.

### [IMAGE MORI-HERO-01 — Shipped product overview]

- **Image / purpose:** an internship-period shipped screen from the return redesign, introducing MORI’s visual character. Reuse a full-context starting frame from MORI-NAV-02.
- **Format / ratio:** landscape canvas, approximately 16:10.
- **Crop / focus:** full product viewport with the cloud and identifiable content layer; remove browser chrome. Avoid an overlay-only view.
- **Annotations:** none.
- **Version label:** Shipped interface.
- **Caption:** use the S01 caption.
- **Asset:** [NEED: locate the internship-period shipped screen].

## 02 — Minimal on the surface. Complex underneath.

### Final PUBLIC copy

<!-- PUBLIC:S02:START -->

**H2:** Minimal on the surface. Complex underneath.

**Body:** MORI combined AI conversation with health-data analysis and prompts for people seeking support for their mental and physical wellbeing. Its minimal interface aimed to create a calm experience.

Through hands-on product review, I found that the sparse interface still asked people to learn different interaction rules across screens.

**Key insight:** Minimal UI does not automatically mean simple interaction.

<!-- SLOT:MORI-RULES-01 -->
**Image labels:** Visible controls · Press to reveal · Gesture or empty-space action
<!-- CAPTION:MORI-RULES-01 -->
Original interaction rules, annotated from my product review.

<!-- PUBLIC:S02:END -->

### Layout

Left 34%: H2, two short paragraphs and key insight, near 36 characters per line. Right 66%: annotated interaction collage. The largest example occupies half the image column; two smaller examples stack beside it. Number targets 1–3, with labels outside the screenshots and no obscuring overlaps. Stay within W. Pace: about 0.9 viewport.

### Mobile

Heading and product context → three examples with adjacent labels → product-review paragraph and key insight. Present each crop at readable size; replace distant leader lines with nearby callouts.

### [IMAGE MORI-RULES-01 — Original interaction-rule collage]

- **Image / purpose:** three original-state examples demonstrating visible, press-revealed and gesture/empty-space actions from the product review.
- **Format / ratio:** landscape composite, about 4:3.
- **Crop / focus:** retain a visible control and its context; a matched before/after-press pair; and a gesture origin or empty tappable region with identifiable page context. Keep separate states visibly separate.
- **Annotations:** the three S02 labels, numbered 1–3; tap/gesture arrows where needed.
- **Version label:** Original interface · Product-review examples.
- **Caption:** use the S02 caption.
- **Asset:** [NEED: locate original examples of the three documented rule types].

## 03 — Make the rules consistent. Keep MORI’s character.

### Final PUBLIC copy

<!-- PUBLIC:S03:START -->

**H2 / principle:** Make the rules consistent. Keep MORI’s character.

**Support line:** A shared way back. Recording where the information is. Distinct conversation cues within one product.

<!-- PUBLIC:S03:END -->

### Layout

Center a left-aligned block at roughly 75% W. Set the principle above body size but below the H1; keep the support line to one or two quieter lines. Use generous vertical space, about 0.3 viewport in total. This is a short typographic break with no image.

### Mobile

Let the principle wrap naturally; keep its support line directly below, followed by navigation. Use natural content height.

## 04 — Making navigation predictable without adding more UI.

### Final PUBLIC copy

<!-- PUBLIC:S04:START -->

**Eyebrow:** Decision 01 · Navigation

**H2:** Making navigation predictable without adding more UI.

**Deck:** A shared return model had to work across screens and real devices.

**Body:** Return controls varied by screen: the Mori cloud, a downward triangle, empty space, or gestures. I proposed a shared model with the cloud as the primary anchor and a right swipe as the secondary path.

<!-- SLOT:MORI-NAV-01 -->
**Proposal label:** Initial direction — not shipped
**Proposal action labels:** Tap the Mori cloud · Swipe right
<!-- CAPTION:MORI-NAV-01 -->
The initial model paired a shared anchor with a gesture alternative.

**H3:** Android made the swipe unreliable.

**Body:** Engineering pointed out that a right swipe could conflict with Android’s native navigation on some devices. That made it unreliable as an in-product return action.

**Key decision:** Platform behavior took priority over an elegant in-product gesture.

**H3:** What shipped: two ways back to the previous layer.

**Body:** The final design used cloud taps and empty-space taps across the redesigned screens, avoiding the proposed swipe conflict.

<!-- SLOT:MORI-NAV-02 -->
**Shipped action labels:** Primary — tap the Mori cloud · Secondary — tap empty space
<!-- CAPTION:MORI-NAV-02 -->
Both shipped actions return to the previous layer.

**Trade-off:** Empty space can be difficult to find on content-heavy screens, while sparse screens leave room for accidental taps. We accepted those limitations to keep a return model that fit the implementation and MORI’s character.

**Optional detail heading:** Another direction explored

**Optional detail body:** I also explored revealing the previous layer during a pull-down gesture, completing the return on release past a threshold. This direction did not ship.

<!-- SLOT:MORI-NAV-03 -->
**Optional detail label:** Exploration — not shipped

<!-- PUBLIC:S04:END -->

### Layout

Keep the four beats connected, with about 2–2.5 desktop viewports overall:

1. **Inconsistency and proposal:** H2, deck and opening paragraph above a split row. Left 55% holds MORI-NAV-01 and its caption; the original-rule evidence remains in S02.
2. **Engineering constraint:** right 45% of that row holds the Android H3, explanation and key decision, near 40–46 characters per line. Align this text with the proposal’s swipe panel.
3. **Shipped behavior:** H3 and short introduction above MORI-NAV-02. Its stage widens to about 1.1W, bounded by viewport gutters—the page’s only intentional bleed. Two rows show cloud tap first and empty-space tap second; each pairs start and destination states with an arrow between them. A manually controlled recording may use the same stage.
4. **Accepted limitation:** place the trade-off directly below the shipped visual, left aligned and capped at 65 characters per line. It stays visible. Beneath it, a single collapsed disclosure contains “Another direction explored,” its text and optional MORI-NAV-03.

### Mobile

Heading/deck → original inconsistency → proposal → Android explanation → key decision → shipped introduction → cloud sequence → empty-space sequence → limitation → collapsed exploration. Stack start and destination frames when needed, retaining action labels beside their sequences. Keep the disclosure accessible by keyboard.

### [IMAGE MORI-NAV-01 — Initial cloud and swipe proposal]

- **Image / purpose:** the initial two-path proposal before engineering feedback; use the historical design export or a labeled retrospective schematic.
- **Format / ratio:** two-panel landscape sequence, approximately 2:1.
- **Crop / focus:** cloud and nearby content in one panel; intended rightward gesture path and page boundary in the other. Preserve context without implying a documented edge hitbox.
- **Annotations:** the S04 proposal action labels, one tap marker and one rightward arrow. Keep the Android explanation in adjacent portfolio text.
- **Version label:** use the S04 proposal label; add Retrospective schematic if newly drawn.
- **Caption:** use the S04 proposal caption.
- **Asset:** [NEED: locate the initial proposal or prepare a source-based retrospective schematic].

### [IMAGE MORI-NAV-02 — Shipped return interactions]

- **Image / purpose:** internship-period shipped cloud-tap and empty-space-tap returns; the main navigation result and source for the hero.
- **Format / ratio:** landscape stage, about 16:10; two labeled start/destination rows, or a short recording with manual controls.
- **Crop / focus:** retain the cloud, actual empty tap region, identifiable starting layer and destination. Show covered pages; preserve enough context to establish the previous-layer relationship.
- **Annotations:** the S04 shipped action labels, a tap locator on each start frame and an arrow to its destination.
- **Version label:** Shipped implementation.
- **Caption:** use the S04 shipped caption.
- **Asset:** [NEED: locate shipped recordings or corresponding start/destination screenshots].

### [IMAGE MORI-NAV-03 — Pull-down reveal exploration]

- **Image / purpose:** the documented unshipped pull-down reveal, shown only inside the optional disclosure.
- **Format / ratio:** landscape sequence, about 3:1: resting layer → partial reveal → release beyond threshold.
- **Crop / focus:** moving layer boundary and revealed previous layer. No invented threshold value or easing curve.
- **Annotations:** Pull down · Release past threshold.
- **Version label:** use the S04 exploration label; add Retrospective schematic if reconstructed from the account.
- **Caption:** none; the disclosure text and state annotations explain the concept.
- **Asset:** optional; [NEED: locate the exploration artifact]. The supplied text can stand alone if no artifact is available.

## 05 — Make the information the entry point.

### Final PUBLIC copy

<!-- PUBLIC:S05:START -->

**Eyebrow:** Decision 02 · Health recording

**H2:** Make the information the entry point.

**Body:** The original 2 × 2 health-data display was passive. A separate 1 × 3 control area opened the recording form.

<!-- SLOT:MORI-HEALTH-01 -->
**Before label:** Before · Separate information and recording access

<!-- SLOT:MORI-HEALTH-02 -->
**After label:** Shipped · Record directly from the data item

**Body:** I made the relevant data items entry points to the existing form.

**Outcome:** The redesign connected the information people were viewing with the action of recording it.

<!-- SLOT:MORI-HEALTH-03 -->
<!-- CAPTION:MORI-HEALTH-03 -->
Both entry patterns opened this existing form.

<!-- PUBLIC:S05:END -->

### Layout

Place the heading and original description above a 50/50 Before / Shipped comparison within W. Align matching 4:3 canvases and corresponding data areas where possible, preserving the actual relationship between original crops.

Below, left 62% holds the change and outcome, near 60 characters per line; right 38% holds the existing-form inset and caption. Keep the form smaller than the comparison. No bleed or overlap. Pace: about one desktop viewport, the shortest redesign.

### Mobile

Heading/original description → Before → Shipped → change and outcome → existing form → caption. Stack the images without a draggable comparison slider; the form can use the full available width.

### [IMAGE MORI-HEALTH-01 — Original display and recording entry]

- **Image / purpose:** original passive 2 × 2 data display and separate 1 × 3 recording controls; establish the starting separation.
- **Format / ratio:** landscape composite, about 4:3; use separate crops if needed.
- **Crop / focus:** include both complete groups with enough context to identify their locations and order. Do not stitch separate views into a fictional screen or assume they were separate pages.
- **Annotations:** Health information · Recording controls. Visibly divide separate crops.
- **Version label:** use the S05 Before label.
- **Caption:** none; the comparison label and annotations carry the explanation.
- **Asset:** [NEED: locate original views of both areas].

### [IMAGE MORI-HEALTH-02 — Shipped actionable data surface]

- **Image / purpose:** the shipped health-data surface providing access to recording.
- **Format / ratio:** landscape canvas, about 4:3, matched to the Before canvas.
- **Crop / focus:** relevant data items and surrounding context. Mark a confirmed entry point; do not assume all four items behave identically.
- **Annotations:** Data item opens recording; one tap locator on that item.
- **Version label:** use the S05 Shipped label.
- **Caption:** none.
- **Asset:** [NEED: locate the internship-period shipped data surface].

### [IMAGE MORI-HEALTH-03 — Existing recording form]

- **Image / purpose:** the existing overlay shared by the old controls and new data-item entry; show what was reused.
- **Format / ratio:** landscape canvas, about 16:10, with the overlay inside its parent viewport.
- **Crop / focus:** complete form boundary, visible field structure and some underlying page. The user described roughly three-quarters of the page; preserve the source rather than inventing dimensions.
- **Annotations:** none.
- **Version label:** Existing form — reused.
- **Caption:** use the S05 form caption.
- **Asset:** [NEED: locate a representative form state and confirm its relationship to both entry patterns].

## 06 — How different should two conversations feel?

### Final PUBLIC copy

<!-- PUBLIC:S06:START -->

**Eyebrow:** Decision 03 · Conversational modes

**H2:** How different should two conversations feel?

**Body:** Heart Companion supported open-ended, emotional conversation; Health Guardian was more structured and health-focused. In my review, their similar interfaces did little to express that distinction.

<!-- SLOT:MORI-MODES-01 -->
**Original mode labels:** Heart Companion · Health Guardian
<!-- CAPTION:MORI-MODES-01 -->
Different purposes, similar original conversation interfaces.

**Option 1 heading:** Different backgrounds

**Option 1 text:** MORI already used several backgrounds. Another color change would add variation without explaining purpose.

**Option 2 heading:** Completely different layouts

**Option 2 text:** A stronger distinction, but at the cost of consistency and familiarity.

**Option 3 heading:** Shared structure + purposeful cues

**Option 3 label:** Chosen

**H3 / principle:** Different enough to communicate purpose. Similar enough to remain one product.

**Body:** For Health Guardian, I used guidance and input cues to suggest a more structured tone.

<!-- SLOT:MORI-MODES-02 -->
**Shipped mode labels:** Heart Companion · Health Guardian
<!-- CAPTION:MORI-MODES-02 -->
The shipped modes share a structure, with different cues for purpose.

<!-- SLOT:MORI-MODES-03 -->
**Detail labels:** Opening guidance · Revised placeholder · Taller input area · Smaller corner radius

<!-- PUBLIC:S06:END -->

### Layout

Start with a 42/58 split: question and context on the left, compact original-mode pair on the right. Below, place the three options in equal, unboxed columns, each with its heading and supplied text. The third uses only its heading and the small “Chosen” label. Keep the row editorial: whitespace and typographic emphasis, without table headers, status badges or matrix styling.

Follow with the principle and short rationale, then the large equal shipped pair spanning W. Place mode labels above their panels. Add the Health Guardian detail strip below, with the four labels tied to the relevant crops. Keep prose near 60–65 characters per line. No overlap or bleed; about 1.5 viewports overall.

### Mobile

Question/context → original modes in sequence → three options in order → principle/rationale → shipped modes in sequence → detail crops. Stack options as ordinary text, keeping the chosen direction third. Keep every mode and detail label adjacent to its image.

### [IMAGE MORI-MODES-01 — Original conversation modes]

- **Image / purpose:** original Heart Companion and Health Guardian at comparable states, showing the similarity identified in product review.
- **Format / ratio:** landscape pair, about 3:2; contain each full-height source.
- **Crop / focus:** mode identity, conversation structure and input area. Use equivalent states rather than unrelated welcome/completed conversations.
- **Annotations:** the S06 original mode labels.
- **Version label:** Original interfaces.
- **Caption:** use the S06 original caption.
- **Asset:** [NEED: locate both original conversation states].

### [IMAGE MORI-MODES-02 — Shipped conversation modes]

- **Image / purpose:** shipped Heart Companion and revised Health Guardian, showing shared structure and different guidance/input cues.
- **Format / ratio:** landscape pair, about 3:2; larger than the original pair.
- **Crop / focus:** retain mode identity, conversation context and input areas. Match the internship-period release and comparable states.
- **Annotations:** the S06 shipped mode labels; reserve detailed pointers for MORI-MODES-03.
- **Version label:** Shipped implementation.
- **Caption:** use the S06 shipped caption.
- **Asset:** [NEED: locate the shipped pair and confirm version alignment].

### [IMAGE MORI-MODES-03 — Health Guardian guidance and input details]

- **Image / purpose:** readable same-release details from MORI-MODES-02, carrying the four specific changes.
- **Format / ratio:** landscape strip, about 8:3; separate guidance and input crops when needed.
- **Crop / focus:** retain complete opening guidance, full input boundary and placeholder. Preserve enough scale/context to read the height and corners; do not fabricate missing product text.
- **Annotations:** the four S06 detail labels, with short leader lines to their visible targets.
- **Version label:** Shipped Health Guardian · Detail crops.
- **Caption:** none; the four labels carry the detail.
- **Asset:** [NEED: locate the guidance and input state at readable resolution].

## 07 — Logo & visual design

### Final PUBLIC copy

<!-- PUBLIC:S07:START -->

**H2:** Logo & visual design

**Body:** Alongside the product improvements, I created logo and visual design work for MORI.

<!-- SLOT:MORI-VISUAL-01 -->
<!-- CAPTION:MORI-VISUAL-01 -->
MORI logo design.

<!-- PUBLIC:S07:END -->

### Layout

Left 28%: heading and sentence. Right 72%: complete logo centered in a generous artwork field, using its source background or the portfolio’s neutral surface. Keep clear space and native proportions. No bleed; about 0.4 viewport, substantially shorter than any decision section.

### Mobile

Heading/sentence → logo → caption. Preserve clear space without creating a full blank viewport around the mark.

### [IMAGE MORI-VISUAL-01 — MORI logo artwork]

- **Image / purpose:** the user-designed logo, showing supporting visual craft.
- **Format / ratio:** landscape artwork canvas, about 3:2.
- **Crop / focus:** complete mark and wordmark if both exist in the source. Do not construct a missing lockup or invented brand application.
- **Annotations:** none.
- **Version label:** Logo design.
- **Caption:** use the S07 caption.
- **Asset:** [NEED: locate the logo file or export]. Production use remains unconfirmed.

## 08 — Three targeted changes, shipped.

### Final PUBLIC copy

<!-- PUBLIC:S08:START -->

**H2:** Three targeted changes, shipped.

**Outcome rows:**

- **Navigation:** a shared return model using cloud and empty-space taps.
- **Health recording:** data items that open the existing recording form.
- **Conversation modes:** distinct guidance and input cues within a shared structure.

**Status:** All three were implemented and shipped to the live product.

**Limit:** I don’t have formal post-launch usability results or quantitative behavioral analysis for these changes.

**Reflection:** Minimal UI still needs a learnable interaction model. Choosing what to ship meant balancing existing habits, platform behavior, implementation constraints, and MORI’s character.

<!-- PUBLIC:S08:END -->

### Layout

Left 30%: H2. Right 70%: three outcome rows with subtle dividers, followed by shipped status. Below, center the limitation and reflection at about 64 characters per line. Keep the limitation at normal body size. No new imagery or metrics cards; about 0.7 viewport.

### Mobile

Heading → three outcome rows → shipped status → limitation → reflection. Keep each bold topic with its explanation. The limitation remains visible.

## Asset Checklist

No images have been supplied or verified. The user expects historical screenshots to be recoverable; locate the internship-period shipped states first. Keep neutral placeholders until replacement assets are checked.

| ID | Required asset | Use / priority |
|---|---|---|
| MORI-HERO-01 | Full-context shipped product view | S01; reuse a MORI-NAV-02 start frame |
| MORI-RULES-01 | Three original interaction-rule examples | S02 diagnosis collage |
| MORI-NAV-01 | Initial cloud/right-swipe proposal | S04; historical export or labeled retrospective schematic |
| MORI-NAV-02 | Shipped cloud/empty-space start and destination states or recordings | S04; highest priority |
| MORI-NAV-03 | Unshipped pull-down exploration | S04; optional, collapsed; text may stand alone |
| MORI-HEALTH-01 | Original data and recording-control groups | S05 Before |
| MORI-HEALTH-02 | Shipped actionable data surface | S05 Shipped; high priority |
| MORI-HEALTH-03 | Existing recording-form overlay | S05 contextual inset |
| MORI-MODES-01 | Comparable original conversation modes | S06 original pair |
| MORI-MODES-02 | Same-release shipped conversation modes | S06 final pair; high priority |
| MORI-MODES-03 | Same-release guidance and input details | S06 detail strip; crop from MORI-MODES-02 where possible |
| MORI-VISUAL-01 | Actual logo artwork | S07 interlude |

## Evidence / Claim Guardrails

**Source:** [MORI project brief](D:/代码/CaseStudy/inputs/projects/mori/project-brief.md), using its numbered sections below. Retain the direct user corrections on return destination and form reuse.

- **Role and scale — §§1–2, 4.1, 18:** Product Designer Intern, March–July 2026; only product designer, three engineers and Danny; live product with several thousand users at the time. UX/interaction ownership does not imply coding, engineering leadership or sole product authority.
- **Diagnosis and intent — §§3–6, 9; user audience clarification:** AI conversation and health-data analysis/prompts serve mental and physical wellbeing. Interaction complexity and insufficient mode distinction came from the designer’s product review. The principle and mode rationale describe design judgment, not validated user comprehension or clinical results.
- **Navigation — §7; user return correction:** cloud and empty-space taps return to the previous layer across the redesigned screens. Do not substitute “home” or assume universal coverage. Android conflict was reported on some devices; do not invent a specific edge hitbox. The pull-down reveal did not ship, and its rejection reason is undocumented. The separate swipe-down threshold issue and Deep Dive spacing suggestion are omitted; neither establishes a rejection cause or an additional shipped change.
- **Health recording — §8; user form clarification:** the data-item entry opens the same existing form as the separate original controls. The form was reused; removal of the old controls is unconfirmed. Keep outcomes structural, without invented tap counts, time savings or space-reduction metrics.
- **Conversation changes — §9:** backgrounds and wholly different layouts were considered; the shipped direction retained a shared structure. Guidance, placeholder, input height and corner radius changes belong to Health Guardian. Do not imply both modes received those changes or that comprehension improved measurably.
- **Delivery and visual scope — §§10–13, 15, 18–19:** the three interaction redesigns shipped. Logo/visual work is confirmed; logo production use and a complete identity/design system are not. No formal post-launch usability study or quantitative behavioral analysis supports an impact claim.
- **Image evidence:** keep Original, Initial direction, Exploration — not shipped, Shipped implementation and Existing form — reused labels distinct. A new explanatory diagram must also say Retrospective schematic. Never manufacture historical screens, product text, research, user quotes or metrics. Static images illustrate controls; behavior and shipment also require the source account or matching interaction evidence.

## Implementation Notes

- Keep the eight sections and their desktop/mobile order. Use the public field contents without rendering field names or internal markers; render each figure label once even when its specification references the copy block.
- Only MORI-NAV-02 widens beyond W, to about 1.1W within outer gutters. All other compositions stay inside W; remove overflow on mobile. Viewport estimates guide pacing, not fixed heights.
- Keep before/shipped and mode labels attached to their images when stacking. Preserve native proportions and readable detail crops; no slider, carousel or hover should be needed to understand the comparison.
- Keep the navigation limitation and conversation alternatives visible. Only the pull-down supplement is collapsed. Use whitespace and type for the three conversation options, with quiet emphasis on the chosen direction.
- Keep arrows, tap locators and leader lines visibly separate from product UI. Reuse the portfolio’s existing enlargement and disclosure treatments where available; recordings use manual controls.
- Replace placeholders after checking release/version, crop context, annotation targets and caption fit. Write final alt text from the actual assets. A current screenshot cannot silently substitute for a historical state; a later diagram must retain its retrospective label.
