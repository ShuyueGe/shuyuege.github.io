// Public text transcribed verbatim from the latest bookthing-final.md.
// Layout work must preserve these strings.
export const bookthingCopy = {
  "navigation": [
    { "id": "bookthing-problem", "label": "Problem" },
    { "id": "bookthing-ia", "label": "Decisions" },
    { "id": "bookthing-final", "label": "Final Interface" },
    { "id": "bookthing-identity", "label": "Visual identity" },
    { "id": "bookthing-outcome", "label": "Outcome" }
  ],
  "hero": {
    "eyebrow": "Nonprofit website",
    "title": "Reorganizing BookThing around visiting, donating, and participating",
    "body": [
      "A desktop website concept for a Baltimore nonprofit that redistributes donated books to the community for free."
    ],
    "metadata": [
      "Role: Solo designer",
      "Timeline: September-December 2025",
      "Scope: Information architecture · Desktop UI · Visual direction",
      "Status: Concept prototype"
    ],
    "caption": "Prototype for Calendar and Newsroom page."
  },
  "problem": {
    "eyebrow": "Problem Identified",
    "title": "Important information was hard to locate and scan",
    "findings": [
      {
        "title": "01 · The structure did not match user tasks",
        "body": "Information needed for common tasks was split across multiple pages, forcing visitors to piece together what they needed."
      },
      {
        "title": "02 · Financial giving was easy to miss",
        "body": "Money-donation options came after lengthy book-donation rules."
      },
      {
        "title": "03 · Opening dates were hard to find",
        "body": "Visitors had to find specific News or/and Events posts to confirm upcoming opening dates."
      },
      {
        "title": "04 · Dense content was difficult to scan",
        "body": "Long blocks of rules and instructions had little grouping or visual hierarchy."
      }
    ]
  },
  "structure": {
    "eyebrow": "Decision 01 · Information architecture",
    "title": "Reorganizing the site around user tasks",
    "body": [
      "I reorganized the sitemap based on persona goals and common tasks, grouping related content into clearer sections. The revised sitemap then guided the final navigation and dropdown menu structure."
    ],
    "captions": {
      "original": "The original site relied mainly on top-level destinations, with related information distributed across multiple pages.",
      "tasks": "Persona goals and recurring tasks helped define which information needed a clearer, more predictable destination.",
      "revised": "The revised structure separates schedules from news, keeps donation resources together, and carries those groupings into the final navigation."
    }
  },
  "donate": {
    "eyebrow": "Decision 02 · Donation",
    "title": "Showing both ways to donate before the detailed rules",
    "body": [
      "Financial giving was buried beneath detailed book-donation rules.",
      "I brought both donation options to the top of the page, using a compact action area for financial donations and more space for book-donation schedules and guidance.",
      "Detailed book rules were grouped under labeled sections to keep the page scannable, with the tradeoff that some collapsed details could be missed."
    ]
  },
  "calendar": {
    "eyebrow": "Decision 03 · Calendar",
    "title": "Making visit planning a schedule, not a news search",
    "body": [
      "Specific dates were scattered across News and Events, making visit planning difficult.",
      "I created a filterable calendar that marks public openings with a star, highlights scheduled openings and events, and lets visitors browse by month and year. A detail panel shows separate giveaway and book-donation hours for each date."
    ]
  },
  "final": {
    "eyebrow": "Final interface",
    "title": "Bringing the experience together",
    "body": [
      "The final prototype brought the redesigned information architecture, donation flows, and scheduling system into one consistent experience. Each page kept the layout best suited to its task while sharing the same interaction and visual patterns."
    ]
  },
  "identity": {
    "eyebrow": "Visual identity & system",
    "title": "Building a consistent visual language",
    "body": [
      "I developed a visual identity that felt approachable and community-focused while giving the organization a clearer digital presence. The system combined typography, a blue-led color palette, a book-as-door mark, and supporting print materials including a business card."
    ]
  },
  "outcome": {
    "eyebrow": "Outcome & next steps",
    "title": "The structure is clear. Validation comes next.",
    "body": [
      "The project resulted in a revised sitemap, five desktop prototype pages, and a supporting visual identity. The concept was not implemented or formally tested, so its impact on findability and comprehension remains unvalidated.",
      "Next, I would test three core tasks: finding the next opening date, choosing a donation method, and locating book-donation requirements. Those results would guide refinements to navigation, labels, disclosures, and mobile layout."
    ]
  }
} as const;
