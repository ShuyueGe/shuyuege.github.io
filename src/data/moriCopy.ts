// Public copy supplied by the user on 2026-09-29 and mirrored in mori-final.md.
// Preserve every word and punctuation mark during visual changes.
export const moriCopy = {
  "hero": {
    "eyebrow": "MORI · AI-native wellbeing web app",
    "title": "Designing clearer interaction rules for an AI-native product",
    "body": [
      "As MORI’s only product designer, I redesigned three core interaction patterns for a live product with several thousand users. All three shipped with engineering.",
      "MORI used AI conversation as a primary interface rather than an add-on feature. The challenge was to make its unconventional interaction model easier to understand without turning it into a conventional app."
    ],
    "metadata": [
      {
        "label": "Role",
        "value": "Product Designer Intern"
      },
      {
        "label": "Team",
        "value": "1 Product Designer · 1 Product Manager · 3 Engineers"
      },
      {
        "label": "When",
        "value": "March–July 2026"
      },
      {
        "label": "Scope",
        "value": "Navigation · AI modes · Health recording"
      }
    ]
  },
  "diagnosis": {
    "title": "Minimal interface, unclear interaction rules",
    "body": "MORI intentionally removed many conventional menus and controls. That kept the interface lightweight, but made clear interaction cues more important.",
    "prompt": "Through product review and usability testing, I focused on three questions:",
    "questions": [
      "Navigation — How do users reliably return across screens?",
      "Conversational modes — How do users know what each AI mode is for?",
      "Health recording — How do users move naturally from viewing data to recording it?"
    ]
  },
  "navigation": {
    "eyebrow": "Decision 01 · Navigation",
    "title": "Create one return model across screens",
    "body": "The original product used the Mori cloud, arrows, and empty-space taps to return. These patterns varied by screen, and some stopped working in certain contexts.",
    "initial": {
      "heading": "Initial direction",
      "intro": "I proposed:",
      "patterns": [
        "Primary — tap the Mori cloud",
        "Secondary — swipe right"
      ],
      "body": "The cloud provided a visible anchor, while the swipe offered a fast alternative without adding UI."
    },
    "constraint": {
      "heading": "Constraint",
      "body": "Engineering flagged that a right swipe could conflict with Android’s native navigation."
    },
    "tradeoff": {
      "heading": "Trade-off",
      "intro": "We dropped the swipe and standardized two return patterns users already encountered elsewhere in MORI:",
      "patterns": [
        "Primary — tap the Mori cloud",
        "Secondary — tap empty space"
      ],
      "body": [
        "Empty-space tapping was less visible than a conventional back button, so I also introduced it in the new-user landing guidance.",
        "This kept the interaction consistent with MORI’s existing system while avoiding platform conflicts and additional navigation chrome."
      ]
    }
  },
  "modes": {
    "eyebrow": "Decision 02 · Conversational modes",
    "title": "Make different AI roles clear",
    "body": "Heart Companion and Health Guardian both used chat-style interfaces, but supported very different interactions.",
    "roles": [
      {
        "heading": "Heart Companion",
        "body": "Designed for deeper analysis and open-ended conversation."
      },
      {
        "heading": "Health Guardian",
        "body": "Designed mainly for structured health-data collection, supported by a lighter-weight model."
      }
    ],
    "observation": "Their interfaces were almost identical.",
    "key": "The UI made two different AI behaviors look interchangeable.",
    "exploration": "I explored three directions:",
    "options": [
      {
        "heading": "Different backgrounds",
        "body": "Visually different, but functionally unclear."
      },
      {
        "heading": "Different layouts",
        "body": "Clearer distinction, but weaker product consistency."
      },
      {
        "heading": "Shared structure + purposeful cues",
        "body": "Chosen"
      }
    ],
    "solution": "I kept one interaction structure and changed the cues that shaped user expectations: clearer opening guidance, a task-specific placeholder, and more structured input treatment.",
    "conclusion": "Different enough to communicate purpose. Similar enough to remain one product."
  },
  "health": {
    "eyebrow": "Decision 03 · Health recording",
    "title": "Turn health data into the recording entry point",
    "body": [
      "On the original health page, data appeared first and recording controls appeared further down. Both used similar card-based UI, taking up vertical space and often requiring scrolling.",
      "The data headings also looked actionable. In usability testing, 3 of 5 participants tried clicking a data heading to record information, but nothing happened."
    ],
    "originalHeading": "Original flow",
    "originalFlow": "View data → try to click → fail → find recording control → open form",
    "solutionHeading": "Final solution",
    "solution": "I made relevant health-data items open the existing recording form directly.",
    "newHeading": "New flow",
    "newFlow": "View data → select data item → open form",
    "result": "This matched users’ expectations, removed the separate recording-entry section, and reduced vertical space."
  },
  "outcome": {
    "heading": "Outcome",
    "body": [
      "All three redesigns shipped to MORI’s live product: a shared navigation model, clearer cues between AI modes, and a shorter health-recording flow.",
      "They remained in the product throughout my internship. I do not have formal post-launch behavioral metrics, so I do not claim measured improvements in engagement or task performance."
    ],
    "reflection": "Reducing visible UI does not remove the need for structure—it shifts that structure into interaction rules. "
  }
} as const;
