// V2 editing source. Facts: moriCopy.ts + supplied current exports. Do not infer metrics from flows.
export const moriV2 = {
  title: "Designing clearer interaction rules for an AI-native product",
  eyebrow: "MORI · AI-native wellbeing web app",
  intro: "MORI uses AI conversation as its primary interface. With few conventional menus and controls, the product needed clear interaction rules without losing its lightweight character.",
  meta: [
    { label: "Product & delivery", value: "Live web app · Three redesigns shipped" },
    { label: "My role", value: "Sole product designer · Product Designer Intern" },
    { label: "Collaborators", value: "1 PM · 3 engineers" },
    { label: "Internship", value: "March–July 2026" },
  ],
  overview: "I worked across navigation, health recording, and conversational modes, from reviewing the product and observing usability problems to defining changes with engineering. MORI already served several thousand users; that scale describes the product, not growth caused by my work.",
  heroCaption: "The supplied MORI dusk recording shows the product’s interface and atmosphere.",
  heroAlt: "MORI product interface at dusk",
  sections: [
    { id: "mori-v2-navigation", label: "Return rules" },
    { id: "mori-v2-health", label: "Health recording" },
    { id: "mori-v2-modes", label: "AI modes" },
    { id: "mori-v2-delivery", label: "Delivery" },
  ],
  navigation: {
    kicker: "Main decision · Navigation",
    title: "One return rule, shaped by a platform constraint",
    paragraphs: [
      "The original product mixed cloud taps, arrows, and empty-space taps. Their behavior varied across screens, and some patterns stopped working in particular contexts. A minimal interface still needed a dependable way to return.",
      "I initially proposed tapping the Mori cloud as the visible primary action, with a right swipe as a faster alternative. Engineering flagged a conflict with Android’s native navigation. We dropped the swipe and standardized click-based rules already present elsewhere in MORI.",
    ],
    rules: [
      { label: "Primary", action: "Tap the Mori cloud", explanation: "A visible anchor for returning to the previous layer." },
      { label: "Secondary", action: "Tap empty space", explanation: "A second way to return without adding navigation chrome." },
    ],
    tradeoff: "The compromise was discoverability. Empty-space tapping is less obvious than a back button, so I introduced it in new-user landing guidance. Keeping the product’s existing interaction language meant accepting that this secondary action needed teaching.",
    videoLabel: "Shared V1 recording · Product context",
    videoCaption: "The same unedited V1 recording accompanies both return rules. It shows the product context rather than isolated return actions; separate cloud-tap and empty-space cuts have not been prepared.",
  },
  health: {
    kicker: "Second decision · Health recording",
    title: "Make the data item the recording entry point",
    finding: "In usability testing, 3 of 5 participants tried clicking a data heading to record information. Nothing happened. The headings looked actionable, while the actual recording controls sat further down the page.",
    decision: "I made relevant data items open the existing recording form directly and removed the separate recording-entry section. The decision followed the action participants already attempted: move from viewing a health item into recording it.",
    beforeLabel: "Before · Data and recording were separate",
    afterLabel: "After · Record actions sit within the data items",
    beforeAlt: "Original Rhythm screen: Sleep and other data headings above separate Sleep Check, Symptoms Check, and Daily Exercise recording controls",
    afterAlt: "Revised Rhythm screen: Sleep, Exercise, Symptoms, and Days to Period data items contain Record actions",
    beforeCaption: "The attempted target was the data heading. The working Record controls were below the data and Today’s Focus.",
    afterCaption: "Record now appears inside the relevant data item, beside the information it belongs to.",
    oldFlow: "View data → try heading → no response → find Record → open form",
    newFlow: "View data → select data item → open existing form",
    flowNote: "These paths explain the entry-point change; they are not timed task results. The supplied before and after captures have different dates and show the two layouts, not a continuous test session.",
  },
  modes: {
    kicker: "Supporting decision · AI modes",
    title: "Keep a shared structure; make each purpose explicit",
    body: "Heart Companion supported deeper analysis and open-ended conversation. Health Guardian focused on structured health-data collection using a lighter-weight model. Nearly identical chat interfaces made those roles look interchangeable.",
    decision: "Different backgrounds changed appearance without explaining function. Different layouts created a stronger distinction but weakened consistency. I chose shared structure with purposeful cues: opening guidance, a task-specific placeholder, and more structured input treatment.",
    companion: {
      heading: "Heart Companion · Open conversation",
      caption: "“Tell Mori…” invites an open-ended message. The visible response remains conversational.",
      alt: "Heart Companion with a conversational response and Tell Mori input",
    },
    guardian: {
      heading: "Health Guardian · Structured recording",
      caption: "“Start today’s log” names the task; the Supplement Record and Confirm control expose a structured record.",
      alt: "Health Guardian with Supplement Record, Confirm action, suggested entries, and Start today’s log input",
    },
  },
  ending: {
    title: "Shipped changes, with a clear evidence boundary",
    body: "Engineering shipped all three redesigns to the live product, and they remained in use throughout my internship. I do not have formal post-launch behavioral metrics or a documented retest of the revised interactions, so I do not claim measured gains in engagement or task performance.",
    reflection: "This work changed how I approached minimal interfaces: removing visible controls makes consistent interaction rules more important. The most useful design was one the product could implement and explain, including the less discoverable parts.",
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
