// V2 editing source. Verified against moriCopy.ts and authentic supplied exports.
export const moriV2 = {
  title: "Designing clearer interaction rules for an AI-native product",
  eyebrow: "MORI · AI-native wellbeing web app",
  intro: "I redesigned navigation, health recording, and AI modes, making actions explicit within MORI’s minimal conversational interface.",
  meta: [
    { label: "Status", value: "Live web app · Three redesigns shipped" },
    { label: "Role", value: "Sole product designer · Intern" },
    { label: "Team", value: "1 PM · 3 engineers" },
    { label: "When", value: "March–July 2026" },
  ],
  heroCaption: "V1 product recording.",
  heroAlt: "MORI product interface at dusk",
  sections: [
    { id: "mori-v2-navigation", label: "Return rules" },
    { id: "mori-v2-health", label: "Health recording" },
    { id: "mori-v2-modes", label: "AI modes" },
    { id: "mori-v2-delivery", label: "Delivery" },
  ],
  navigation: {
    title: "Replace swiping with shared tap-to-return rules",
    paragraphs: ["I proposed cloud taps plus right swipes. Engineering flagged Android gesture conflicts; I replaced swiping with an existing empty-space action."],
    rules: [
      { label: "Primary", action: "Tap the Mori cloud" },
      { label: "Secondary", action: "Tap empty space" },
    ],
    tradeoff: "Empty-space taps were less discoverable, so I introduced them through new-user landing guidance.",
    videoLabel: "Shared recording",
    videoCaption: "Unedited V1 context for both rules; isolated return demonstrations are not available.",
  },
  health: {
    title: "Make the data item the recording entry point",
    finding: "In usability testing, 3 of 5 participants tapped data headings expecting to record; nothing happened.",
    decision: "I made data items open the existing form and removed the separate recording section.",
    beforeLabel: "Before",
    afterLabel: "After",
    beforeAlt: "Original Rhythm screen: Sleep and other data headings above separate Sleep Check, Symptoms Check, and Daily Exercise recording controls",
    afterAlt: "Revised Rhythm screen: Sleep, Exercise, Symptoms, and Days to Period data items contain Record actions",
    beforeCaption: "Attempted headings; working controls below.",
    afterCaption: "Record now belongs to each item.",
    flowNote: "Different-date captures show layouts, not measured efficiency.",
  },
  modes: {
    title: "Shared structure, distinct purposes",
    body: "I kept shared layouts, adding opening guidance, task-specific placeholders, and structured inputs to distinguish open conversation from health collection.",
    companion: {
      heading: "Heart Companion",
      caption: "“Tell Mori…” invites open conversation and deeper analysis.",
      alt: "Heart Companion with a conversational response and Tell Mori input",
    },
    guardian: {
      heading: "Health Guardian",
      caption: "“Start today’s log” and Confirm structure collection with a lighter model.",
      alt: "Health Guardian with Supplement Record, Confirm action, suggested entries, and Start today’s log input",
    },
  },
  ending: {
    title: "Shipped; impact remains unmeasured",
    body: "All three redesigns remained live through my internship. No documented retest or post-launch metrics establish improvements in task performance.",
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
