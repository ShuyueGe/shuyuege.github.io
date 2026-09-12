# Portfolio Visual Design Guidelines

## 1. Portfolio Goal and Audience
This Product Designer / UI/UX / HCI portfolio supports hiring. Recruiters need a quick scan; Product Design hiring managers, senior designers, and Design Directors need credible evidence on close reading. Optimize for visual confidence, scanability, storytelling, clear contribution, design thinking, strong typography, polished composition, and memorable project identity. Make problem, role, evidence, decisions, final design, and limitations easy to locate.

## 2. Overall Visual Direction
The baseline used warm paper (#f8f6f0), dark green-black ink (#1f2523), muted green-gray text, Manrope, restrained teal and yellow accents, an informal watercolor homepage, and generous case-study spreads. The revised homepage leads with visible project evidence. Preserve the warmth, typographic clarity, authentic screens, and understated character; establish hierarchy before introducing decoration.

The intended direction is editorial, intentional, calm, contemporary, sophisticated, and visibly authored. Minimal does not mean empty; professional does not mean generic. Native CSS is the implementation, not an imported design system. Current design dials: DESIGN_VARIANCE 6, MOTION_INTENSITY 3, VISUAL_DENSITY 4, appropriate for calm hiring-focused evidence.

## 3. Shared Portfolio Language
- Preserve the site wordmark, primary navigation labels, and hash-based route slugs.
- Use the existing paper/ink shell, Manrope typography, consistent focus styles, and accessible image enlargement.
- Use a shared content rail around 1200–1280 px, responsive outer gutters around 20–64 px, and a narrower 60–65ch reading measure. Let genuinely explanatory media use the wider rail.
- Use compact labeled metadata, deliberate spacing, thin rules only where grouping benefits, and short transitions for interaction feedback.
- Keep one light theme throughout. Screens retain their original project colors. Avoid excessive frames, shadows, and rounded containers.

## 4. Project-Specific Identity
Allow variation in hero composition, editorial layout, accent, image composition, density, narrative rhythm, data presentation, visual motifs, transitions, diagrams, and imagery.

BookThing is an information-heavy desktop concept: blue-led screens, a large calendar/donation spread, content-order comparisons, and information architecture. Patsy is a mobile research-led concept: upright screens, orange annotations drawn from the prototype, a muted green research panel, and a pickup sequence. They share a designer, not a page template. Authentic screen colors need not be recolored to match the shell.

## 5. Typography
The core font is Manrope; DM Sans supports the existing wordmark and footer. Both are self-hosted variable fonts in `public/fonts/`, with license files, loaded through `@font-face` in `src/styles.css`. `index.html` preloads Manrope. Retain those roles rather than introducing an unrelated display serif.

- Display: a concise native-text project introduction, scaled with `clamp`, with a purposeful relationship to the preview. Do not bake the only title into a banner image.
- Section titles: normally 32–52 px desktop and 28–36 px mobile, adjusted for phrase length; avoid every section having equal display weight.
- Body: approximately 17–18 px, 1.6–1.75 line height, 60–65ch measure. Use dark enough text for comfortable long reading.
- Captions and metadata: approximately 13–15 px with clear labels, close to the relevant image. Never shrink evidence to make it fit.
- Labels: sparse, meaningful, and compact. Avoid repeating numbered micro-headings above every title.
- Keep paragraphs short enough to scan without removing factual nuance. Use typographic emphasis for the important decision; do not inflate every statement.
- Check font fallback, wrapping, and hierarchy at all three evaluation widths.

## 6. Layout and Spacing
Align headings, body, and media deliberately to a common rail. Use 24–56 px within related groups and roughly 64–120 px between major sections according to narrative weight, not as fixed prescriptions. Whitespace should connect and separate meaning. Alternate dense evidence, focused UI details, a large visual payoff, and a quieter conclusion; avoid uniform scroll rhythm or consecutive mechanically reversed split sections. Do not use empty space to compensate for missing assets. Preserve reading order when columns collapse.

## 7. Image and Mockup Treatment
Every image must introduce the concept, prove an observation, explain a decision, or show the final experience. Choose full-width media, editorial crops, annotated interfaces, paired comparisons, process artifacts, diagrams, or contextual imagery as appropriate. Do not put everything in a rounded rectangle or add device mockups simply because this is a UX portfolio.

Keep source-pixel crops proportional, contextual, labeled, and reversible. Preserve visible image/source marks. Captions sit outside images. Full screenshots should be available through keyboard-accessible enlargement; critical details must also be legible in the page. Use intrinsic dimensions/aspect ratio to reserve space and lazy loading below the first screen. Do not fabricate research artifacts or treat generated imagery as real research or client deliverables.

## 8. Case Study Storytelling
Use context → problem → evidence → reasoning → decision → design → outcome / limitation as a reasoning chain, not a rigid section template. A skimming reader should understand the contribution and strongest decision without reading every paragraph. Make that chain visible through composition, hierarchy, focused image crops, captions, and simple editable diagrams.

BookThing is a solo academic, unlaunched desktop concept without formal usability testing. Patsy is a four-person academic mobile Figma concept; preserve 21 survey responses, 12 interview sessions, participation in 3 sessions, and 2 formative-test participants. Use only the handoff-approved public counts (15/21 and 21/21). Distinguish the tested initial prototype from the revised team exports and personal refinements that still need exports. Keep prototype limitations adjacent to the relevant flow.

## 9. Patterns to Avoid
Watch for default use of rounded cards, pills, floating cards, giant serif headlines, arbitrary gradients, decorative blobs, excessive whitespace, three-column feature grids, alternating left/right sections, numbered sections everywhere, repeated statistics, identical image frames, glassmorphism, shadows, arbitrary floating mockups, repetitive Bento grids, and decorative UI with no narrative job. These are not universally forbidden; require a content-specific reason. A clean implementation alone is not evidence of good design judgment.

## 10. Reference Designs / Moodboard
These four references were already selected in `patsy-final.md`; no additional references are invented. Inspected on 2026-09-12. They are quality and presentation references, never sources of project facts, copy, or visual identity.

| Reference | Useful presentation principle |
| --- | --- |
| [Mia Eltiste, Pop Usability Evaluation](https://www.heymia.co/portfolio/pop-usability) | Findings attached to implications; explicit project scope and research evidence. |
| [Gini Choi](https://ginichoi.com/) | Research-to-design connections and cross-disciplinary project identity. The current live site may differ from the originally selected version. |
| [ZhenZhen McMahon, The Humble Dumpling](https://www.zhenzhenmcmahon.com/the-humble-dumpling) | Existing-site evidence and visible design revisions. |
| [Jane Hirsch, Susie's Delicatessen](https://www.janehirsch.com/susiescasestudy) | Concise participant voice and generous final-screen pacing. |

Capture the actual live reference rendering when possible. Record inaccessible, changed, or failed references accurately; do not substitute invented screenshots. A reference can be useful for narrative without representing the final visual quality ceiling.

## 11. Responsive Design
Inspect desktop 1440 px, tablet/narrow desktop 820 px, and mobile 390 px; additionally check 320 px for overflow. Design explicit column collapse, not proportional desktop shrinkage. Check text measure, type scale, image crops, gallery width, spacing, sticky/fixed elements, navigation, 44 px interaction targets, and first-screen hierarchy. Mobile screens stack at readable widths; desktop evidence gets focused detail crops and enlargement. Do not hide all project previews behind hover on touch devices.

## 12. Motion and Interaction
Use motion for orientation, hierarchy, comprehension, or lightweight feedback. Prefer short color/underline transitions and subtle media responses. Avoid identical scroll reveals, automatic carousels, scroll hijacking, and decorative movement. Respect `prefers-reduced-motion`, including programmatic scrolling. All links and image viewers work by keyboard; modal closing restores focus and page scrolling.

## 13. Independent Design Critic Workflow
1. Inspect source, handoffs, git status, and package scripts; run the current site and capture a baseline before visual edits.
2. Capture fresh current screenshots of each important page at desktop/mobile, plus full-page overviews and readable close-ups of important sections. Include tablet in implementation QA.
3. Start a **new independent critic context** every time, using the environment's actual separate agent invocation. Prefer the strongest appropriate vision-capable OpenAI model / reviewer configuration available in the current Codex environment. Never invent a model name or claim a specific model was used unless the runtime confirms it. Do not install external critic tooling or configure external paid APIs.
4. Supply **only** the current screenshots, actual reference screenshots if used, and the unchanged prompt below. Do not share source/CSS, architecture, rationale, technical difficulty, previous designs, reviews, scores, iteration history, effort, or the completion criterion. Do not use the implementer's full conversation context. Screenshot paths are permissible solely for opening those images.
5. Record the actual model, score, gaps, and next steps in the local review log. The implementation agent selects the highest-impact 1–5 changes. Composition feedback calls for composition changes; do not answer structural criticism with tiny token tweaks.
6. Implement, build, render, inspect, and request a new fresh critique. Inspect convergence after the first two iterations. Allow approximately five major iterations per page in a session. Stop when two consecutive iterations do not materially improve, feedback becomes contradictory, or missing truthful content/assets block progress. Report unresolved issues and next actions honestly.
7. **Implementer-only completion criterion, never send to the critic:** each page must independently score at least 9.0/10 to be complete. A lower score is unfinished under this workflow. Do not conceal plateauing or claim success from self-assessment.

If the current environment cannot spawn a separate fresh context, report that limitation, continue normal visual inspection, and label any score **self-review / not independent**. Such a score cannot satisfy the independent completion criterion. Same-context self-critique is never an independent review.

The loop is: implementer renders → captures screenshots → invokes a fresh Independent Design Critic → receives score and critique → applies the highest-impact changes → renders new screenshots → invokes another new context. Never reuse a previous critic's context.

Runtime record for 2026-09-12: accepted `collaboration.spawn_agent` calls used `model: "gpt-6-astra"`, `reasoning_effort: "high"`, and `fork_turns: "none"`. Three separate agents reviewed homepage, BookThing, and Patsy baseline screenshots with the fixed rubric and actual reference screenshots. Their valid baseline scores were 4.1, 5.1, and 6.4 respectively. No prior scores were invalidated. Future calls must record their own actual configuration.

Four fresh reviews per page used that same actual configuration. Valid score histories: homepage 4.1 → 7.3 → 7.4 → 7.3; BookThing 5.1 → 7.2 → 7.5 → 7.6; Patsy 6.4 → 7.8 → 7.8 → 7.8. The loop stopped under the user's convergence rule: scores plateaued, repeated-image advice became inconsistent, and source-export polish remained a material limitation. **None reached the 9.0 completion target.** Preserve these results accurately; do not call the redesign fully complete. The local `review-history.json`, `implementation-report.md`, and `verification.json` in `.design-review.local/` record the review summaries, remaining work, and production checks. Raw critic responses remain in the task transcript.

### Repeatable rendering
Run `npm run dev -- --host 127.0.0.1` and then `node scripts/design-review.mjs baseline` (or a new stage name). The script uses Playwright and Sharp from a tool runtime; set `PLAYWRIGHT_MODULE` and `SHARP_MODULE` to its module paths when they are not installed locally. It defaults to an installed Edge browser; override `REVIEW_BROWSER` if needed. No project dependency installation is required when the runtime provides them.

`REVIEW_URL` can target the production preview server. Output: `.design-review.local/<stage>/` with full pages, first viewports, section crops, reading-order contact sheets, and `checks.json`. The folder is git-ignored by `*.local`. Keep the exact prompt, actual critiques, score history, and final verification available for handoff; do not share the log with a critic.

### Exact critic prompt (verbatim)

```text
You are an independent senior design critic evaluating a Product Designer portfolio.

You are seeing the current rendered design as screenshots. Judge the artifact itself, not the effort that may have gone into creating it.

First, infer the aesthetic and visual direction the design is attempting to achieve.

Then imagine how a top-tier digital design studio or exceptionally strong senior Product Designer would execute the same high-level aesthetic.

Evaluate the current design against that quality bar.

If professional reference images are included, treat them as a quality and taste baseline, not as templates to copy. Compare the current design with them for polish, visual judgment, composition, and distinctiveness. When useful, state approximately where the current design ranks among the examples.

Evaluate both the big picture and the details.

Consider:

1. Overall composition and page structure
2. Visual hierarchy and attention flow
3. Typography and typographic hierarchy
4. Grid, alignment, spacing, and rhythm
5. Information density and use of whitespace
6. Image treatment and art direction
7. Color and contrast
8. Section-to-section pacing
9. Case-study storytelling and recruiter scanability
10. Visual identity and memorability
11. Interaction or responsive issues visible in the screenshots
12. Overall level of polish and taste

Pay particular attention to patterns that feel:

- formulaic
- overused
- excessively trendy
- decorative without purpose
- obviously AI-generated
- derived from generic portfolio templates

Penalize those patterns when they weaken the work.

Do not reward a design merely because it is clean, minimal, or technically competent.

A strong portfolio should demonstrate judgment.

Be bold and opinionated.

Do not default to the safest recommendation.

Do not give vague feedback such as:
"improve hierarchy,"
"make it more engaging,"
or
"add more visual interest"
without explaining exactly what should change.

Prioritize structural and compositional problems before micro-polish.

Return the critique in this exact structure:

AESTHETIC READ
A concise description of the aesthetic the design appears to be pursuing.

REFERENCE POSITION
If references are provided, explain where this design sits relative to their polish and taste level. Keep this concise.

SCORE
Give one score from 0.0 to 10.0 representing how close the current design is to top-tier studio-level execution of its intended aesthetic.

WHAT ALREADY WORKS
Maximum 3 specific strengths.

BIGGEST GAPS
Maximum 5 issues, ordered from highest to lowest impact.

For every issue:
- identify the exact visual problem;
- explain why it weakens the design;
- give a concrete directional fix.

NEXT ITERATION
Give a maximum of 5 changes that would create the largest improvement in the next design iteration.

Be concise, specific, demanding, and visually literate.
```

## 14. Image Generation Policy
Generate only when a specific visual problem warrants a new asset. Existing authentic screens and evidence take priority. Good uses include atmospheric imagery, an abstract visual system, supporting editorial illustration, texture, non-data decoration, or a presentation mockup when justified. Prefer HTML/CSS/SVG for icons, UI, editable diagrams, geometric systems, charts, and vector logos. Interface screenshots must show the actual interface.

Before generating, run `codex --version`. Do not reinstall an existing CLI. If missing, use the official Windows installer (`powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"`) or `npm install -g @openai/codex` when appropriate. Use diagnostics such as `codex doctor` only when useful and supported. Authenticate with **Sign in with ChatGPT**, never an API key. Pause only for necessary interactive sign-in and provide precise instructions.

Use built-in Codex image generation / `$imagegen` / `image_gen` from the ChatGPT-authenticated, subscription-backed environment. Never ask for, configure, or silently use `OPENAI_API_KEY`; never call a separately billed image API or `scripts/image_gen.py` as fallback. Billing changes require explicit authorization. If built-in generation is unavailable, report that limitation and continue with existing assets, HTML, CSS, SVG, typography, and layout; identify any deferred asset need.

Generate the minimum useful variants, evaluate them inside the actual page, and let the next independent critic judge the composition. Store assets under `public/images/projects/<project>/` with clear names. Never invent evidence, edit source marks away, simulate a delivered client artifact, or present generated venue imagery as real photography. Patsy concept imagery, if generated, requires the exact disclosure “AI-generated concept imagery”.
