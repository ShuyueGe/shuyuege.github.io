// Approved public text extracted verbatim from bookthing-final.md.
// Update from the handoff only; visual review must not rewrite these strings.
export const bookthingCopy = [
  {
    "id": "S01",
    "eyebrow": "Nonprofit website redesign · Academic concept",
    "title": "Reorganizing BookThing around visiting, donating, and participating",
    "body": [
      "A desktop website concept for a Baltimore nonprofit that redistributes donated books to the community for free."
    ],
    "findings": [],
    "captions": [
      "Solo designer · Sep-Dec 2025 · Academic concept · Figma",
      "Calendar and Newsroom concept screens."
    ],
    "annotations": []
  },
  {
    "id": "S02",
    "eyebrow": "Context and scope",
    "title": "A community mission with time-sensitive information",
    "body": [
      "The Book Thing of Baltimore connects people who donate books, find free books, volunteer, and follow community events. Because public openings are generally monthly and book-donation policies include schedules, limits, and acceptance rules, information organization was central to the redesign.",
      "I worked independently on the site analysis, information architecture, content hierarchy, desktop interface, visual direction, and Figma prototype. This was a school concept developed with instructor and peer critique, not a commissioned or launched redesign."
    ],
    "findings": [],
    "captions": [
      "Role: Solo designer",
      "Timeline: September-December 2025",
      "Scope: Information architecture · Content organization · Desktop UI · Visual direction",
      "Status: Concept prototype; not adopted or launched"
    ],
    "annotations": []
  },
  {
    "id": "S03",
    "eyebrow": "Site analysis",
    "title": "Essential information competed with the page around it",
    "body": [
      "My review focused on where operational information appeared and what surrounded it. I also used assumption-based proto-personas to keep four planning tasks in view: visit, donate, volunteer, and stay updated. These were planning tools, not findings from user interviews."
    ],
    "findings": [
      {
        "title": "Practical information had overlapping destinations",
        "body": "Opening dates appeared through News, while Events remained a separate navigation destination and book-donation schedules lived on Donate. The structure gave announcements, events, and operational information overlapping roles instead of a clear place for each type of content."
      },
      {
        "title": "Financial giving followed lengthy book-donation rules",
        "body": "The Donate page presented book-donation dates, limits, and acceptance rules before the Money Donations section. Reaching the financial-giving options meant scrolling past detailed instructions for a different type of contribution."
      },
      {
        "title": "Limited openings made the exact date essential",
        "body": "Public openings were generally monthly, typically alternating between Saturdays and Sundays, with occasional extra openings. The homepage explained the general frequency, but specific dates were presented through individual News announcements, making the relevant update necessary for planning a visit."
      }
    ],
    "captions": [],
    "annotations": [
      "① News carries opening and event announcements; book-donation schedules sit on Donate.",
      "② Book-donation dates and rules precede Money Donations.",
      "③ Specific opening dates appear in individual News summaries, including extra openings."
    ]
  },
  {
    "id": "S04",
    "eyebrow": "Decision 01 · Information architecture",
    "title": "Giving schedules and donation guidance distinct places",
    "body": [
      "I combined News and Events into one navigation area and gave opening dates a dedicated Calendar within it. Under Donate, I grouped donation rules, the donation schedule, and the wish list. FAQ, Contact, Location, and Volunteer remained separate destinations for distinct community tasks.",
      "The planning sitemap established these content groups; the final dropdowns translated them into interface labels. Calendar still sits beneath News & Events, so whether a first-time visitor would look there remains an important question for future navigation testing."
    ],
    "findings": [],
    "captions": [
      "The sitemap documents proposed content groupings, not a tested click path."
    ],
    "annotations": [
      "① Calendar gives opening dates a destination inside News & Events.",
      "② Donate groups rules, schedules, and additional ways to contribute."
    ]
  },
  {
    "id": "S05",
    "eyebrow": "Decision 02 · Donation choices",
    "title": "Showing both ways to donate before the detailed rules",
    "body": [
      "The project-era page placed book-donation guidance, schedules, and detailed rules before financial giving. Monetary donations needed short explanations and visible actions; book donations needed detail about timing, accepted items, limits, and receipts. An assumption-based donor journey helped me focus on locating the financial option, but it did not represent tested behavior.",
      "I reorganized them into two unequal, parallel areas. A compact money-donation column placed PayPal and Donorbox near their location-based instructions, while a wider book-donation column held the longer guidance. Removing the banner and repeated side boxes let both donation types share the first content row.",
      "I grouped detailed book rules under labeled disclosures and emphasized priority instructions in the introduction. The tradeoff is that a donor might overlook a requirement inside a section they never open. The payment options and policies came from the source website; the concept reorganized them rather than defining new policy or building a checkout."
    ],
    "findings": [],
    "captions": [
      "Before: book-donation instructions precede financial giving.",
      "Concept: two donation types share the first content row.",
      "Assumption-based task flow used to focus the financial-giving path."
    ],
    "annotations": [
      "① Two donation types visible in parallel.",
      "② Location cues placed beside payment options.",
      "③ Detailed rules grouped under descriptive labels."
    ]
  },
  {
    "id": "S06",
    "eyebrow": "Decision 03 · Opening dates",
    "title": "Making visit planning a schedule, not a news search",
    "body": [
      "In the project materials, public openings were generally monthly, with dates changing between weekends. I considered retaining the News feed, relying on a homepage announcement, or creating a dedicated schedule view. I chose Calendar to place highlighted dates beside operational details, including separate times for book giveaways and book donations.",
      "Calendar and Newsroom then served different content roles. Calendar held opening and event schedules, while Newsroom retained announcements, event promotion, and archived updates. A live version would require a reliable publishing process so dates stay consistent across the homepage, Calendar, and Newsroom."
    ],
    "findings": [],
    "captions": [
      "Calendar: operational schedule information.",
      "Newsroom: announcements, promotion, and archived updates."
    ],
    "annotations": [
      "① Highlighted dates connect to written schedule details.",
      "② Giveaway and donation hours remain separate operational information."
    ]
  },
  {
    "id": "S07",
    "eyebrow": "Final experience",
    "title": "A shared visual language across different tasks",
    "body": [
      "The final concept included Donate, Wishlist, Calendar, Newsroom, and FAQ desktop pages. Repeated blue actions, light-blue content groups, heading treatments, and disclosures created a common visual direction without forcing different content into the same layout.",
      "Wishlist extended the grouping approach through four labeled categories, but remains supporting evidence rather than a primary decision. The book-as-door mark and blue-led interface treatments reinforced an approachable community tone while keeping actions visually distinct from dense informational content."
    ],
    "findings": [],
    "captions": [
      "Donate · Calendar · Newsroom: selected desktop concept screens.",
      "Supporting details: Wishlist categories · Book-as-door identity · CTA treatment · Repeated disclosure pattern."
    ],
    "annotations": []
  },
  {
    "id": "S08",
    "eyebrow": "Outcome and next validation",
    "title": "The structure is visible; understanding still needs testing",
    "body": [
      "I completed a revised sitemap, five desktop prototype pages, and a supporting visual direction. The artifacts show that donation choices were placed together, opening schedules received a Calendar, and supporting needs were grouped by purpose. They do not show that visitors or donors understand the content more easily. The concept was not implemented, and no formal user research, usability testing, or launch metrics were part of the project.",
      "My first validation tasks would be concrete. I would ask a first-time visitor to find the next opening date, ask a donor to identify the relevant payment option, and ask a book donor to locate acceptance requirements. I would observe whether Calendar navigation is missed and whether collapsed rules are overlooked before changing labels or disclosure behavior.",
      "Because the work is desktop-only, I would also test the reading order created when the donation columns stack on narrow screens. The project reinforced a specific judgment: for an information-heavy nonprofit website, visual polish becomes useful only after operational content has a deliberate place and its tradeoffs are visible."
    ],
    "findings": [],
    "captions": [
      "Next priority: test what people notice before adding more content or visual polish."
    ],
    "annotations": []
  }
] as const;
