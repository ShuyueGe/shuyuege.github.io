# Working on this portfolio

## Required reading
Before significant visual, layout, interaction, responsive, typography, or case-study work, read `case-study-handoff/visual-design-guidelines.md`.
For BookThing also read `case-study-handoff/bookthing-final.md`; for Patsy read `case-study-handoff/patsy-final.md`. For future projects, read the corresponding final handoff.

## Sources of truth
Final handoff documents contain factual project content. Do not invent research, quotes, metrics, findings, outcomes, client requirements, usability-test results, or process steps. Separate academic concepts from launched work, team contributions from personal contributions, observations from assumptions, and future validation from completed testing. Preserve source images and their provenance. Do not edit a handoff to rationalize a visual change.

## Visual work
Significant redesigns must use the **Independent Design Critic Workflow** in `case-study-handoff/visual-design-guidelines.md`. For substantial visual changes, use a fresh-context independent design critic when the current Codex environment supports one. Prefer a strong vision-capable OpenAI model / reviewer configuration available in the environment. The critic must receive only screenshots, reference imagery when applicable, and the fixed critic rubric. Never claim that a specific critic model was used unless the runtime actually confirms that model.

The implementer must not label same-context self-assessment as independent review. If a fresh separate critic is unavailable, perform a normal visual audit, label its score "self-review / not independent", report the limitation, and do not count it toward independent completion. Do not install external critic tooling or configure paid external API access.

## Implementation
Inspect `git status`, relevant source, routing, and `package.json` before editing. Preserve unrelated and pre-existing user work. Preserve working hash routes, accessibility, semantic HTML, responsive behavior, reasonable performance, and factual accuracy. Do not silently change navigation labels, the portfolio wordmark, or route slugs.

Run available build, lint, and type-check commands after meaningful changes. Currently `npm run build` runs `tsc -b && vite build`; there is no lint script. Never manually edit generated `dist/` output or modify `node_modules/`. Rebuild from source.

Capture and inspect desktop (1440 px), narrow desktop/tablet (820 px), and mobile (390 px) output. Test image enlargement, focus, reduced motion, navigation, image loading, and overflow. Use `scripts/design-review.mjs` for repeatable screenshot evidence; its output is ignored in `.design-review.local/`.

## Design consistency
Keep navigation, core typography, grid logic, spacing rhythm, metadata, accessibility, and interaction quality coherent. Project content determines composition. Individual projects must not become the same hero → summary cards → statistics → two columns → three cards → mockup → reflection template. BookThing's information architecture and desktop content hierarchy need different art direction from Patsy's mobile research and task-flow story.

## Image generation
Use only ChatGPT-authenticated, subscription-backed built-in image generation when it solves a specific visual problem. Never use an API-key fallback, silently consume `OPENAI_API_KEY`, or call `scripts/image_gen.py`. Keep authentic evidence authentic; see the full policy in the visual guidelines.
