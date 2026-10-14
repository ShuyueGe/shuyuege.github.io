// V2 editing source. Reasoning selected from moriCopy.ts / mori-final.md;
// authentic supplied exports show interface details, not measured outcomes.
export const moriV2 = {
  title: "Designing clearer interaction rules for an AI-native product",
  eyebrow: "MORI · AI-native wellbeing web app",
  intro: "MORI centers AI conversation, with few conventional menus. I redesigned three interaction patterns while preserving this minimal interface.",
  meta: [
    { label: "Status", value: "Live web app · Three redesigns shipped" },
    { label: "Role", value: "Sole product designer · Intern" },
    { label: "Team", value: "1 PM · 3 engineers" },
    { label: "When", value: "March–July 2026" },
  ],
  heroCaption: "Existing product recording.",
  heroAlt: "MORI product interface at dusk",
  sections: [
    { id: "mori-v2-navigation", label: "Return rules" },
    { id: "mori-v2-health", label: "Health recording" },
    { id: "mori-v2-modes", label: "AI modes" },
    { id: "mori-v2-delivery", label: "Delivery" },
  ],
  navigation: {
    title: "Unify return taps without adding navigation controls",
    paragraphs: [
      "The original product mixed cloud taps, arrows, and empty-space taps; behavior varied across screens and sometimes failed.",
      "I proposed a Mori-cloud tap as a visible anchor, plus a right swipe for speed without added UI. Engineering flagged a possible conflict with Android’s native navigation.",
      "We dropped swiping and standardized two taps already used elsewhere in MORI, preserving its interaction language without navigation chrome.",
    ],
    rules: [
      { label: "Primary", action: "Tap the Mori cloud" },
      { label: "Secondary", action: "Tap empty space" },
    ],
    tradeoff: "Empty-space tapping is less discoverable than a back button. I introduced it in new-user landing guidance; consistency still required teaching.",
    videoLabel: "Product context · Shared recording",
    videoCaption: "Shared, unedited product recording; it does not isolate the cloud-tap and empty-space return actions.",
  },
  health: {
    title: "Make the data item the recording entry point",
    context: "Data cards appeared above similarly styled recording controls, using extra vertical space and often requiring scrolling to reach a working control.",
    finding: "In testing, 3 of 5 participants tried clicking a data heading to record information; nothing happened. The working controls were lower down.",
    decision: "Relevant data items now open the existing form directly. Removing the separate recording section matched the attempted action and reduced space; the form was reused.",
    beforeLabel: "Original design",
    afterLabel: "Revised design",
    beforeAlt: "Original Rhythm screen: Sleep and other data headings above separate Sleep Check, Symptoms Check, and Daily Exercise recording controls",
    afterAlt: "Revised Rhythm screen: Sleep, Exercise, Symptoms, and Days to Period data items contain Record actions",
    beforeCaption: "Data headings above; separate recording controls below.",
    afterCaption: "Record actions within data items replace the separate controls.",
    originalFlowLabel: "Original path",
    originalFlow: "View data → try a heading → no response → find recording control → open form",
    revisedFlowLabel: "Revised path",
    revisedFlow: "View data → select data item → open existing form",
    flowNote: "Different-date captures compare layouts; paths illustrate the change, not measured task-time improvements.",
  },
  modes: {
    title: "Shared structure, distinct purposes",
    body: "Heart Companion supported open-ended conversation; Health Guardian collected structured health data. Nearly identical chat interfaces made different purposes look interchangeable.",
    alternatives: "Different backgrounds separated appearance without explaining function. Different layouts distinguished roles but weakened consistency. I kept shared structure, using opening guidance, task-specific placeholders, and structured inputs to communicate purpose.",
    companion: {
      heading: "Heart Companion",
      caption: "“Tell Mori…” invites an open-ended message.",
      alt: "Heart Companion with a conversational response and Tell Mori input",
    },
    guardian: {
      heading: "Health Guardian",
      caption: "“Start today’s log” names the task; Supplement Record and Confirm support structured review.",
      alt: "Health Guardian with Supplement Record, Confirm action, suggested entries, and Start today’s log input",
    },
  },
  ending: {
    title: "Shipped; impact remains unmeasured",
    body: "All three redesigns shipped and remained live through my internship. No revised-interaction retest or formal post-launch behavioral metrics are available.",
  },
} as const;
// Reversible crops are derived from the authentic sources; fullSrc opens the source.
export const moriV2Assets = {
  heroVideo: "/images/projects/mori/黄昏-hero-web.mp4",
  healthBefore: { src: "/images/preview/mori-v2/health-before-detail.png", fullSrc: "/images/projects/mori/旧-身心节律.png", width: 724, height: 1400 }, // Source crop [0,385,724,1400].
  healthAfter: { src: "/images/preview/mori-v2/health-after-detail.png", fullSrc: "/images/projects/mori/新-身心节律.png", width: 930, height: 1005 }, // Source crop [125,655,930,1005].
  companion: { src: "/images/projects/mori/新-聊天-黄昏.png", width: 1179, height: 2556 },
  guardian: { src: "/images/projects/mori/新-记录-黄昏.png", width: 1179, height: 2556 },
} as const;
