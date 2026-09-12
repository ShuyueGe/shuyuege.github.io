**Internal implementation note — do not publish**

This is the final Patsy portfolio case-study content and webpage blueprint, edited from `outputs/patsy-new.md` with selective prose replacements from `outputs/patsy-old.md`. Facts come from Patsy source materials, with confirmed role and interaction details from `inputs/projects/patsy/project-brief.md`. Asset filenames refer to existing project assets under `inputs/projects/patsy/raw-materials/`; Patsy has no `selected-assets/` folder. References to `patsy-full-project-report.docx → word/media/...` identify actual embedded files inside that document, not standalone exports. Extract those entries during later implementation without changing the report. No image files are changed by this blueprint.

Publish only the Eyebrow, Headline, Public copy, and explicitly quoted captions/labels below. Everything else is implementation guidance. The eight-section architecture and asset guidance follow `patsy-new.md`; existing team screenshots are presentation placeholders where personal refinements or image sourcing remain pending. Keep all `[NEED: ...]` notes internal.

Use an eight-section page with three decision deep dives. At desktop widths, use a 1,200 px maximum content rail, 48 px outer gutters, 48 px column gaps, and 96–120 px between sections; below 768 px use 20 px gutters, 24 px gaps, and 64 px section spacing. Body text: approximately 18 px with 1.6 line height and a 60–65-character measure. Inherit the portfolio's typography and colors. Keep approximately 55% of the page's content area visual, including research graphics and comparisons. Screens remain mobile designs even when displayed on a desktop portfolio page. Keep captions outside images; offer keyboard-accessible image enlargement with a close control. No automatic carousels, decorative device mockups, or simulated working restaurant controls.

Presentation principles only: findings with implications from [Mia Eltiste](https://www.heymia.co/portfolio/pop-usability), research-to-design connections from [Gini Choi](https://ginichoi.com/), existing-site evidence and visible revisions from [ZhenZhen McMahon](https://www.zhenzhenmcmahon.com/the-humble-dumpling), and concise quotes with generous final-screen pacing from [Jane Hirsch](https://www.janehirsch.com/susiescasestudy). Their project facts, wording, and visual identities are not part of Patsy.

# Section 01 — Hero

**Purpose**

Establish the research-driven project, the resulting mobile concept, and my contribution immediately.

**Eyebrow**

PATSY’S RESTAURANT · MOBILE WEBSITE CONCEPT

**Headline**

Making the path from browsing to action clearer on mobile

**Public copy**

Our team explored how Patsy’s mobile website could help people evaluate a restaurant and take the next step. Research shaped the initial concept; formative testing exposed a missing pickup path and guided the revision.

**Role:** Research planning · Product analysis · Usability-test design & observation · Focused UI refinement  
**Team:** Four-person academic project  
**Scope:** Mobile menu, reservations, and pickup concept  
**Report submitted:** May 3, 2026  
**Status:** Figma prototype

I helped design the questionnaire, asked questions in 3 of 12 interview sessions, and identified mobile readability and navigation issues through product review.

**Desktop layout**

40/60 split. Left: eyebrow, headline, opening paragraph, then compact metadata in two columns; place the contribution paragraph beneath the metadata. Right: two upright screen crops, landing page left and menu right, with a 24 px gap. Offset the menu downward by 64 px. Give the headline the strongest text hierarchy; let the screens occupy the larger area. Leave 48 px of open space above the right-hand composition. Do not overlay images or cover controls with text.

**Primary asset**

`after-Landing Page.png` — 804 × 1758.

**Supporting asset**

`after-Menu 2.png` — 804 × 1758.

**Crop / presentation**

- Landing: show the full width from y=0 to approximately y=1035, retaining the header, building image, and all three task buttons. Stop before Featured Menu.
- Menu: show the full width from y=0 to approximately y=1160, retaining the header, category tabs, and the complete Crab Cakes row. Preserve the image edges and any visible source marks.
- Display each crop at roughly 280–310 px wide. Use a thin neutral outline; do not stretch either image into a desktop website mockup.
- These are team-version previews. [NEED: replace affected previews with personal-refinement exports and cleared imagery before publication; recheck crops against replacement dimensions].

**Caption / annotation**

“Team mobile prototype: menu browsing, reservations, and a proposed pickup path.”

**Mobile**

Order: heading and introduction → metadata → landing preview → menu preview → contribution paragraph. Stack previews vertically at up to 340 px wide; do not shrink both into miniature side-by-side phones. Keep the caption immediately after the previews.

**Evidence basis — internal**

Project brief: confirmed contributions, team, date, and interaction scope; report Sections 4, 7, and 8. The submission date is not the full project timeline.

# Section 02 — Context and the original experience

**Purpose**

Make the specific problem visible while acknowledging what the original site already did well.

**Eyebrow**

THE STARTING POINT

**Headline**

The information was there. Reading it on a phone was the problem.

**Public copy**

Patsy’s is a restaurant in Bethany Beach, Delaware. Its website provided menus, hours, seasonal closures, contact details, and a reservation link. Familiar navigation labels were worth retaining, but small text and crowded content required manual zooming on mobile.

Useful information was present without a clear visual order. Respondents were relatively positive about finding hours; readability and perceived currency were weaker. The redesign needed to preserve that practical value while making the page easier to scan.

**Desktop layout**

Place the eyebrow and headline above a 60/40 composition. Left: a wide original-homepage crop, approximately 650 px wide. Right: public copy, then a smaller original-menu detail, approximately 360 px wide. Top-align the first paragraph with the homepage's main content. Keep 32 px between the right-hand text and menu detail. This is an evidence spread, with the old website carrying the visual weight.

**Primary asset**

`before-landing page.jpg` — 1179 × 2101.

**Supporting asset**

`before-menu.jpg` — 1179 × 2282.

**Crop / presentation**

- Homepage: approximately x=18–1138, y=160–1800. Retain the sidebar, promotional badge, restaurant description, hours, and repeated contact information in the white footer; omit the large masthead and bottom orange surplus. The relationship between competing regions matters, so do not isolate only the worst-looking text.
- Menu: approximately x=360–1025, y=320–1145. Show Dinner Starters and several consecutive item descriptions/prices. This crop demonstrates dense menu content; do not describe the entire website as having no photographs, since the source has a sidebar food photo.
- Add two small numbered markers outside the homepage, connected to the sidebar and main information block. Add the third beside the menu detail. Do not imply these static crops demonstrate a measured zoom level; the actual phone capture appears in Section 04.

**Caption / annotation**

- Homepage label: “Original website”
- Sidebar: “Familiar categories gave the redesign a useful starting point.”
- Main content: “Restaurant details competed with promotional content and repeated contact information.”
- Menu: “Item names, descriptions, and prices ran together in dense text.”

**Mobile**

Order: heading → public copy → homepage crop and its two annotations → menu crop and caption. Render annotations as text beneath their images, not tiny overlays. Allow enlargement of the homepage evidence.

**Evidence basis — internal**

Report Sections 2, 4.1, 5.1, and 5.2; original screenshots. Do not use the report's unverified dissatisfaction percentage.

# Section 03 — What research changed

**Purpose**

Connect a small set of research findings to concrete priorities, combining methods around the decisions they informed.

**Eyebrow**

EVIDENCE THAT SET THE DIRECTION

**Headline**

The website often confirmed a dining decision already in progress

**Public copy**

Our team collected 21 survey responses and conducted 12 semi-structured interview sessions. Interviewees described discovering restaurants through Google Maps, reviews, or social media, then checking the restaurant website for practical details.

**15 of 21** respondents were somewhat or very likely to visit a restaurant’s website before going.

**21 of 21** selected viewing the menu as a reason to use Patsy’s website.

> “I check the menu to see if there’s anything I would like to eat and also check prices.”
>
> — Interview participant

**Confirm the essentials**  
Interviews emphasized menu options, prices, location, and hours. This suggested the site should support quick confirmation. We prioritized direct access to menu browsing and reservation tasks.

**Make information readable**  
Survey comments and our product review identified small type, crowding, and mobile friction. We translated these findings into a mobile layout with clearer spacing and prominent actions.

**Help people evaluate dishes**  
Open-ended feedback requested food images; interviews emphasized food options and price clarity. We organized menu items into categories with images, descriptions, and prices.

The sample included UMBC students and team members’ families; no survey respondent lived in Bethany Beach, and only one had previously visited Patsy’s.

**Desktop layout**

Use a compact research panel in two tiers. Upper tier: 40% left for the heading and introductory paragraph; 60% right for two stacked, separately labeled stat modules, followed by the quote. Lower tier: three equal columns for the three named findings. Within each column, distinguish the evidence sentence from the design-response sentence with spacing and a short connector rule. Put the sample limitation in a full-width note beneath the row. Keep 40 px between tiers. Use subtle dividers rather than three oversized decorative cards.

**Primary asset**

`patsy-full-project-report.docx` — Figure 6, embedded `word/media/image12.png` (2048 × 972); Figure 7, embedded `word/media/image14.png` (2048 × 972).

**Supporting asset**

Same report, Appendix B, embedded `word/media/image46.png` (1388 × 651), the thematic-analysis table. Use the Menu Accessibility, External Discovery, Visual Readability, and Visual Content rows as evidence sources.

**Crop / presentation**

- Rebuild the two supported results as native text and simple horizontal bars, not screenshots of Google Forms. First module: 15 filled units and 6 unfilled units, denominator 21. Second: 21 filled units, denominator 21. The two modules answer different questions; do not connect them as a funnel or conversion comparison.
- Use the exact public sentences above as the stat labels. Figure 6 supports 6 somewhat-likely plus 9 very-likely responses. Figure 7 supports 21 menu selections; it was a multiple-selection question.
- Typeset the interview quotation and the three synthesized findings as page text. Do not display the full thematic table or recreate it as a fake affinity board. These are a portfolio synthesis of existing evidence, not newly conducted research.
- Do not reproduce Figure 7's inconsistent hours percentage or create percentages for unquantified interview themes.

**Caption / annotation**

“Survey counts describe this project sample. The menu question allowed multiple selections.”

**Mobile**

Order: heading → introduction → the two stat modules → quote → findings one at a time → sample note. Keep finding titles attached to their evidence and design response. Bars should fit the reading width without horizontal scrolling.

**Evidence basis — internal**

Report Section 4.1, Figures 6–7, Section 4.2, and Appendix B. Twelve interview sessions is confirmed in the project brief; it is not a verified count of unique interviewees.

# Section 04 — Decision 1: Mobile priorities

**Purpose**

Show how readability evidence changed the page hierarchy, including the remaining content tradeoff.

**Eyebrow**

DECISION 01 · MAKE THE NEXT ACTION VISIBLE

**Headline**

Give the main tasks room on a small screen

**Public copy**

My product review identified manual zooming and crowded content. The problem went beyond font size: the page needed to distinguish what someone could do from the information they could read.

Our team separated reservations and menu browsing into distinct homepage actions; the revised version added Order Pickup. Contact links moved into a compact footer.

The tradeoff was less emphasis on practical information. Hours and seasonal closures mattered in the survey but are absent from the exported landing screen. I would revisit their placement.

**Desktop layout**

35/65 split. Left: heading and public copy in a narrow reading column. Right: an actual original phone capture at approximately 230 px wide beside a larger revised-homepage detail at approximately 360 px wide. Align their top edges and leave a 24 px gutter. The narrower original is context; the revised task buttons are the focal point. Place the footer detail beneath the revised crop only, separated by 24 px of white space and an explicit detail label.

**Primary asset**

`after-Landing Page.png` — 804 × 1758.

**Supporting asset**

`patsy-full-project-report.docx` — Appendix D, embedded `word/media/image57.jpg` (992 × 2048), the original phone-view capture associated with the mobile-readability review.

**Crop / presentation**

- Original phone: show x=0–992, y=0–1685, removing the Safari controls at the bottom. Preserve the website's small scale and surrounding orange page area; do not enlarge just its text and imply that was the default phone experience.
- Revised homepage: show x=50–754, y=205–1030, including the building image and all three primary buttons. Do not add hours or other content absent from the file.
- Footer detail: from the same revised export, show full width, approximately y=1635–1758. Keep it visibly separate from the upper crop; do not splice the two into a fabricated contiguous screen.
- [NEED: replace affected team homepage imagery with the personal-refinement version and cleared image sources before publication]. An AI-generated replacement must be labeled as concept imagery, never as verified restaurant photography.

**Caption / annotation**

- Original: “Original phone view: the page retained a dense, desktop-style composition.”
- Revised: “Revised team prototype: reservations, menu browsing, and pickup have separate entry points.”
- Detail label: “Footer detail”
- Footer: “Contact links moved below the main tasks; hours still need a visible home.”

**Mobile**

Order: public copy → original phone capture → revised homepage crop → footer detail. Use captions to preserve the comparison without forcing adjacent images onto a narrow screen. Keep the original screenshot uncropped horizontally.

**Evidence basis — internal**

Report Sections 4.1, 5.2, 6, 7.1.1, 7.2.2, and 8.1; Appendix D; visible landing export. The hours observation is a current design critique, not a recorded usability-test finding.

# Section 05 — Decision 2: Menu to pickup

**Purpose**

Show the strongest evidence-to-iteration chain: a readable menu still lacked the path needed for an assigned pickup task.

**Eyebrow**

DECISION 02 · FOLLOW THE TASK BEYOND THE MENU

**Headline**

Testing exposed the gap between browsing and ordering

**Public copy**

Menu access was already a research priority. The first prototype grouped dishes into four categories with names, prices, and image placeholders. It supported browsing but lacked a pickup path.

We ran formative think-aloud testing with two participants. I designed the protocol, observed sessions, and took notes. Tasks were to reserve dinner for two, find crab cakes and their price, and attempt pickup.

During the assigned pickup task, one participant searched for a cart without finding an ordering path. Another expected the crab-cake item to be clickable. Earlier research had raised online ordering; testing exposed the omitted path.

Extending the menu into a pickup sequence was our clearest testing-informed change. We added cart cues, an order summary, checkout with pickup information, and confirmation. Showing the sequence made the full path more explicit than a cart icon alone.

Next-step buttons advance through preset states, but add-to-cart does not work. The revised flow has not yet been retested.

My smaller menu refinement removed the redundant Menu heading to give categories more room—a design judgment, separate from the test findings.

**Desktop layout**

Use two visual bands inside this section. Top band: 52% left for the V1/V2 menu comparison, 48% right for the heading and first three paragraphs. Place the two menu screens at equal visible height, approximately 480 px, with version labels directly above them. Put the task/issue annotation directly below the pair.

Below, after 56 px of white space, place the revision, prototype limitation, and personal-refinement paragraphs in a 720 px reading block aligned left. Follow with a full-width, three-column sequence: order summary left, checkout/pickup center, confirmation right. Display full screens at equal width, approximately 280 px, with generous gutters. Use small arrows in the gutters labeled as an intended sequence, not an interactive demonstration. The version comparison shows the added ordering cues; the larger flow makes the proposed path visible.

**Primary assets**

- `patsy-full-project-report.docx` — Figure 14, embedded `word/media/image28.png` (584 × 638), tested initial menu.
- `after-Menu 2.png` — 804 × 1758, revised team menu.
- `after-Cart step2.png` — 804 × 1758, populated cart and order summary.
- `after-Cart step3.png` — 804 × 1758, checkout and pickup address.
- `after-Cart step4.png` — 804 × 1758, confirmation overlay.

**Crop / presentation**

- V1: crop the right-hand Entrées screen from the embedded figure, approximately x=305–562, y=55–615. Retain its header with phone icon, categories, and all menu items. Remove the gray report surround and the left-hand duplicate category screen. Display no larger than approximately 220 px wide; the source is low resolution.
- V2: preserve the complete `after-Menu 2.png` screen, scaled to match V1's visible height. Annotate the top cart cue and the plus beside Crab Cakes without calling them functional. Do not conceal “Mkt price”; its mobile explanation remains unresolved.
- Cart sequence: preserve all three complete screenshots, including item examples, totals, pickup details, and the confirmation overlay. Do not turn the sample amount or estimated pickup time into a result metric. Do not redraw the screens to hide nonfunctional controls.
- [NEED: replace the team menu export with the personal-refinement version before publication]. The current screenshot still includes MENU, so it does not visually prove my heading-removal refinement. Keep its version label accurate until the replacement is supplied.
- [NEED: replace stock-preview food imagery with appropriately sourced assets in later exports]. Preserve visible source marks in review; cropping them away is not image clearance.

**Caption / annotation**

- Left version label: “Tested V1 · Menu browsing”
- Right version label: “Revised team prototype · Ordering cues”
- Comparison: “Assigned pickup task → a missing cart path → a proposed ordering sequence.”
- Cart screen: “Review the intended order before checkout.”
- Checkout screen: “Pickup information appears beside payment choices.”
- Confirmation screen: “Show what happens after the proposed order.”
- Sequence label: “Preset prototype screens · Not a working checkout”

**Mobile**

Order: heading and first three paragraphs → V1 with label → V2 with label → comparison annotation → revision and personal-refinement paragraphs → prototype limitation → cart sequence. Stack each full screen and its caption. Replace horizontal arrows with a simple vertical sequence; do not require swiping to discover a step. Keep the prototype limitation next to the flow.

**Evidence basis — internal**

Report Sections 4.1, 7.1.3, 7.2, 8.3–8.4, and Appendix E; Figure 14; project brief's confirmed interaction scope and personal refinement. Pickup was assigned, not spontaneous evidence of universal customer demand.

# Section 06 — Decision 3: Reservation review

**Purpose**

Show a smaller, targeted iteration while preserving positive evidence and an unresolved interaction issue.

**Eyebrow**

DECISION 03 · CLARIFY THE COMMITMENT

**Headline**

Keep reservation review focused on editing or confirming

**Public copy**

Reservation needed clarification, not a response to widespread failure: survey feedback was relatively positive. The original page linked to Tock; our team proposed an in-site selection, review, and confirmation flow.

Both test participants completed the initial reservation task without major difficulty. One appreciated reserving without an account. Testing revealed smaller uncertainties: hesitation over time selection and confusion around an X control on the review screen.

The team removed the confusing control and retained explicit edit and reserve actions. The prototype can be clicked through to completion, but time-selection feedback remains unresolved. My confirmation-screen hierarchy refinement was a design judgment, not a tested improvement.

**Desktop layout**

40/60 split, reversing the visual emphasis of Section 05. Left: heading, the original external-link crop, and public copy. Right: a large revised reservation-review detail, approximately 410 px wide, centered within its column. Align the detail's title with the testing paragraph. Put the revision annotation immediately below the two action buttons. Leave substantial white space around this single focused UI example; no four-screen reservation gallery here.

**Primary asset**

`after-Reservation step3.png` — 804 × 1758.

**Supporting asset**

`before-reservation.jpg` — 1179 × 2061.

**Crop / presentation**

- Original: approximately x=305–1150, y=365–545. Retain the sentence explaining Tock and the full external link. Render as a small evidence strip with its own label, not as a screenshot of the tested prototype.
- Revised: approximately x=50–760, y=850–1725. Retain the full Confirm Reservation panel and both MAKE EDITS and RESERVE buttons. Omit the repeated restaurant interior image so the decision receives attention.
- Do not manufacture an X-control before/after. The report text records the confusing X and its removal, but Figure 13's available initial-review screenshot does not visibly establish that X control. Use the observation in text beside the revised UI.
- The personal refinement refers to the confirmation screen shown in Section 07, not this review panel. [NEED: replace `after-Reservation step4.png` with the personal confirmation-hierarchy refinement before publication].

**Caption / annotation**

- Original label: “Original website · External booking link”
- Revised label: “Revised team prototype · Reservation review”
- Revision: “Two explicit choices: make edits or reserve.”

**Mobile**

Order: heading → first paragraph → original-link evidence → testing and revision paragraphs → review detail and caption. Keep the buttons inside the image, not as live portfolio controls. Move captions below the image; use no sticky column.

**Evidence basis — internal**

Original reservation capture; report Sections 4.1, 7.2, and 8.2; project brief. The more specific Section 8.2 says time feedback was not fully implemented, despite stronger overview language elsewhere.

# Section 07 — Final experience

**Purpose**

Give the resulting mobile interface generous space after the research and decision details.

**Eyebrow**

THE RESULTING CONCEPT

**Headline**

The revised mobile experience, together

**Public copy**

Selected team-prototype screens bring homepage actions, menu browsing, and reservation confirmation into one mobile experience.

**Desktop layout**

Make this the widest, quietest visual section. Put the heading and short paragraph at the left edge, maximum 650 px wide. Below, leave 48 px of white space, then display three full mobile screens across the rail: landing left, starters menu center, reservation confirmation right. Use approximately 340 px screen widths and equal top alignment; the center screen may sit 48 px lower for a subtle rhythm. Do not use a colored panel behind each screen. A shared neutral canvas with 40–56 px padding is enough. Captions are short and subordinate.

**Primary assets**

- `after-Landing Page.png` — 804 × 1758.
- `after-Menu 1.png` — 804 × 1758.
- `after-Reservation step4.png` — 804 × 1758.

**Crop / presentation**

Preserve all three full mobile frames, including status bars, page endings, and action buttons. This is the only full landing-screen presentation; earlier sections used task-specific crops. The starters screen adds a different menu view from the Entrées decision example. Do not add a desktop design that does not exist.

[NEED: replace affected team exports with personal-refinement exports, align the version caption, and resolve image sourcing before publication]. The current menu heading and confirmation typography do not show the confirmed personal refinements. Do not cosmetically erase these details in the portfolio layer. The menu and featured-food images contain source marks; new cleared exports are required for public presentation. If the replacement homepage uses the confirmed AI-generated hero, place the exact disclosure “AI-generated concept imagery” directly below that screen.

**Caption / annotation**

- Landing: “Choose a task from the homepage.”
- Menu: “Browse dishes by category.”
- Reservation: “Review the reservation confirmation.”
- Gallery: “Team mobile prototype · Concept screens”

**Mobile**

Stack landing → menu → reservation, each at the full content width up to 380 px. Reset the center-screen offset. Preserve complete frames and place captions immediately beneath. Use 40 px between screens so the gallery feels deliberate, not like a compressed contact sheet.

**Evidence basis — internal**

Report Section 8 and the named after exports; project brief's version agreement. This gallery presents the team concept, not a documented retest or live service.

# Section 08 — Outcome, limits, and reflection

**Purpose**

Separate delivery, testing, and open questions, ending on a concrete research judgment.

**Eyebrow**

WHAT THE WORK ESTABLISHED

**Headline**

A clear-looking interface and a supported task are different things

**Public copy**

**Designed:** A revised mobile concept for menu browsing, reservations, and a proposed pickup sequence.

**Tested:** Three tasks on the initial prototype with two participants, revealing missing ordering steps and ambiguous controls.

**Still unvalidated:** The revised pickup flow, broader usability, and restaurant acceptance. The concept remained unlaunched; no desktop design or measured post-redesign results were produced.

Participants could respond positively to the layout while still being unable to complete the pickup task. For me, that made task coverage a more meaningful checkpoint than favorable impressions alone.

I would make item selection and cart updates functional, then retest pickup with a broader sample including local diners and returning customers. Further work would address hours visibility, time-selection feedback, touch-based price explanations, and the restaurant’s booking and checkout requirements.

**Desktop layout**

Use a text-led close with generous white space. Left 40%: eyebrow and headline. Right 60%: three compact rows labeled Designed, Tested, and Still unvalidated, separated by thin rules. Below, place the reflection and next-step paragraphs in a 720 px reading column aligned with the left rail. Leave 48 px between the evidence rows and the reflection. No repeated screenshots or metric counters.

**Primary asset**

No displayed image. Content source: `patsy-full-project-report.docx`, Sections 7.2, 8.2, and 9, plus the confirmed scope in `inputs/projects/patsy/project-brief.md`.

**Crop / presentation**

Render the three scope statements as native text. Do not turn two test participants into a success-rate chart or add illustrative research portraits. Keep the remaining work visibly separate from delivered work.

**Caption / annotation**

None. The three explicit scope labels provide the annotation.

**Mobile**

Stack heading → three scope rows → reflection → next steps. Preserve 24 px between blocks and keep the closing text within the normal reading measure.

**Evidence basis — internal**

Report Sections 7–9 and project brief. The reflection is a retrospective interpretation; the next paragraph is proposed future work, not completed research.

## Asset usage map

All standalone image names resolve under `inputs/projects/patsy/raw-materials/`. Embedded paths below resolve inside `patsy-full-project-report.docx`.

| Existing filename or embedded entry | Section | Treatment | Purpose |
|---|---|---|---|
| `after-Landing Page.png` | 01, 04, 07 | Top crop; task/footer details; full | Preview, homepage decision, final context |
| `before-landing page.jpg` | 02 | Sidebar and main-content crop | Existing hierarchy and information |
| `before-menu.jpg` | 02 | Menu-text crop | Dense item presentation |
| Report → `word/media/image12.png` | 03 | Redraw verified 15/21 result | Pre-visit website use |
| Report → `word/media/image14.png` | 03 | Redraw verified 21/21 menu result | Menu priority; multiple selection |
| Report → `word/media/image46.png` | 03 | Typeset selected quote and synthesize themes | Interview reasoning and implications |
| Report → `word/media/image57.jpg` | 04 | Original phone capture, browser controls removed | Actual mobile context |
| Report → `word/media/image28.png` | 05 | Right-hand menu screen crop | Tested initial state |
| `after-Menu 2.png` | 01, 05 | Upper crop; full comparison screen | Menu preview and ordering cues |
| `after-Cart step2.png` | 05 | Full | Intended cart and summary |
| `after-Cart step3.png` | 05 | Full | Intended checkout and pickup details |
| `after-Cart step4.png` | 05 | Full | Intended confirmation state |
| `before-reservation.jpg` | 06 | External-link crop | Original booking context |
| `after-Reservation step3.png` | 06 | Review panel and both buttons | Explicit commitment choices |
| `after-Menu 1.png` | 07 | Full | Final menu presentation |
| `after-Reservation step4.png` | 07 | Full | Confirmation presentation |

## Factual / validation cautions

- Keep this a four-person academic mobile Figma concept. Do not imply commission, restaurant adoption, deployment, desktop delivery, business impact, or sole ownership. May 3, 2026 is the report submission date; [NEED: full timeline only if replacing that metadata with a duration].
- Use 21 survey responses, 12 interview **sessions**, participation in 3 sessions, and 2 formative-test participants. My testing role was protocol design and observation/note-taking, not moderation. Findings describe this limited sample.
- Use the two verified counts only. Do not import 65% dissatisfaction, the report's rounded website-use percentage, or Figure 7's inconsistent hours percentage. No time savings, conversion figures, or post-revision success rates exist here.
- Original-site `before-*` screenshots are not the tested prototype. Figure 14 supplies that initial menu. Figure 13 does not visibly substantiate an X-control before image; its removal is supported by report text. Do not invent a comparison or rejected alternative.
- Pickup was an assigned task, and online ordering had already appeared in earlier research. The added flow is a response to a missing task path, not proof of spontaneous demand. Add-to-cart is nonfunctional; subsequent buttons traverse preset screens. Prices, quantities, dates, totals, and the 30-minute pickup estimate are prototype content, not verified restaurant policies or outcomes.
- A complete reservation click-through does not settle time-selection feedback. Market-price touch behavior, a revised-flow retest, accessibility compliance, and security improvements remain unestablished. New photos or an in-site flow do not prove trust increased.
- [NEED: personal-refinement exports and cleared image sources before publication]. Current after images are the team version. Do not imply those screens show my heading or confirmation-hierarchy refinements, or that personal refinements were tested or team-approved. Keep timing unspecified. Preserve source marks during review; replace stock previews through proper sourcing, not watermark removal. Label any AI-generated replacement as concept imagery, not a real venue photograph.
