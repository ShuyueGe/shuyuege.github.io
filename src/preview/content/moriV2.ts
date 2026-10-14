// V2 editing source. Reasoning restored from moriCopy.ts / mori-final.md;
// authentic supplied exports substantiate layout and input details, not measured outcomes.
export const moriV2 = {
  title: "Designing clearer interaction rules for an AI-native product",
  eyebrow: "MORI · AI-native wellbeing web app",
  intro: "MORI uses AI conversation as its primary interface, with few conventional menus or controls. I redesigned navigation, health recording, and AI modes so its interaction rules could support this minimal interface without turning it into a conventional app.",
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
      "The original product mixed cloud taps, arrows, and empty-space taps. Their behavior varied across screens, and some stopped working in certain contexts. The problem was an inconsistent return model within an otherwise lightweight interface.",
      "My initial proposal paired a Mori-cloud tap with a right swipe. The cloud provided a visible anchor; swiping offered a fast alternative without adding UI. Engineering flagged that a right swipe could conflict with Android’s native navigation.",
      "We dropped the swipe and standardized two tap actions users already encountered elsewhere in MORI. Reusing those actions preserved the product’s interaction language without adding navigation chrome.",
    ],
    rules: [
      { label: "Primary", action: "Tap the Mori cloud" },
      { label: "Secondary", action: "Tap empty space" },
    ],
    tradeoff: "The cost was discoverability: empty-space tapping is less visible than a conventional back button. I introduced this secondary action in new-user landing guidance; consistency did not remove the need to teach it.",
    videoLabel: "Product context · Shared recording",
    videoCaption: "The same unedited recording accompanies both return rules. It shows product context rather than isolated cloud-tap and empty-space demonstrations.",
  },
  health: {
    title: "Make the data item the recording entry point",
    context: "The original health page separated viewing from recording. Data cards appeared first; similarly styled recording cards sat further down. Keeping both groups took up vertical space and often required scrolling to reach a working control.",
    finding: "In usability testing, 3 of 5 participants tried clicking a data heading to record information, but nothing happened. The headings looked actionable, even though the working recording controls were elsewhere on the page.",
    decision: "I made relevant data items open the existing recording form directly and removed the separate recording-entry section. This followed the action participants had attempted and reduced the vertical space occupied by separate recording cards. The form itself was reused.",
    beforeLabel: "Original design",
    afterLabel: "Revised design",
    beforeAlt: "Original Rhythm screen: Sleep and other data headings above separate Sleep Check, Symptoms Check, and Daily Exercise recording controls",
    afterAlt: "Revised Rhythm screen: Sleep, Exercise, Symptoms, and Days to Period data items contain Record actions",
    beforeCaption: "Data headings above; separate Sleep Check, Symptoms Check, and Daily Exercise controls below.",
    afterCaption: "Record actions now sit inside the relevant data items, above Today’s Focus.",
    originalFlowLabel: "Original path",
    originalFlow: "View data → try a heading → no response → find recording control → open form",
    revisedFlowLabel: "Revised path",
    revisedFlow: "View data → select data item → open existing form",
    flowNote: "Different-date captures show the two layouts. These paths explain the entry-point change; they are not a continuous test or timed task results.",
  },
  modes: {
    title: "Shared structure, distinct purposes",
    body: "Heart Companion supported deeper analysis and open-ended conversation. Health Guardian mainly collected structured health data using a lighter-weight model. Nearly identical chat interfaces made these different behaviors look interchangeable: the UI needed to explain purpose, not simply distinguish appearance.",
    alternatives: "I explored different backgrounds, but visual separation left function unclear. Different layouts made the roles more distinct but weakened product consistency. Shared structure with purposeful cues retained one interaction model while addressing the difference in use.",
    decision: "I kept the shared structure and changed the cues that shaped expectations: clearer opening guidance, task-specific placeholders, and more structured input treatment. The details below show how conversation and collection ask for different inputs.",
    companion: {
      heading: "Heart Companion",
      caption: "“Tell Mori…” invites an open-ended message within the shared chat structure.",
      alt: "Heart Companion with a conversational response and Tell Mori input",
    },
    guardian: {
      heading: "Health Guardian",
      caption: "“Start today’s log” names the recording task; Supplement Record and Confirm expose a structured record for review.",
      alt: "Health Guardian with Supplement Record, Confirm action, suggested entries, and Start today’s log input",
    },
  },
  ending: {
    title: "Shipped; impact remains unmeasured",
    body: "All three redesigns shipped with engineering and remained live through my internship. The available records do not include a retest of the revised interactions or formal post-launch behavioral metrics, so I do not claim measured improvements in engagement or task performance.",
    reflection: "Minimal UI still needs consistent, teachable interaction rules.",
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
