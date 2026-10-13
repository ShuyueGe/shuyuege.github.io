// V2-only manuscript. Facts checked against the current page, final handoff,
// visual guidelines, and actual source diagrams. No project research is inferred.
const original = "/images/projects/bookthing/";
const preview = "/images/preview/bookthing-v2/";

export const bookthingV2 = {
  projectName: "BookThing",
  sections: [
    { id: "bookthing-v2-ia", label: "Information architecture" },
    { id: "bookthing-v2-donation", label: "Donation hierarchy" },
    { id: "bookthing-v2-calendar", label: "Calendar" },
    { id: "bookthing-v2-boundaries", label: "Scope & validation" },
  ],
  hero: {
    eyebrow: "BookThing · Nonprofit website",
    title: "Reorganizing BookThing around visiting, donating, and participating",
    intro: "For a Baltimore nonprofit that gives donated books away for free, I designed a desktop concept around visiting, donating, and participating. Opening dates were scattered across pages, and financial giving followed lengthy book-donation rules. My focus was to give those tasks clearer destinations and make essential information easier to scan.",
    metadata: [
      { label: "Role", value: "Solo designer" },
      { label: "Timeline", value: "September–December 2025" },
      { label: "Focus", value: "IA · Content hierarchy · Desktop UI" },
      { label: "Status", value: "Academic concept · Not implemented" },
    ],
  },
  ia: {
    kicker: "Information architecture",
    title: "Separate schedules from news, group donation resources",
    body: "Persona goals and recurring task paths guided the regrouping. I moved opening schedules into Calendar and organizational updates into Newsroom, both under News & Events. Under Donate, I grouped Donation Rules, Donation Schedule, and Wish List. Volunteer and Location remained direct destinations.",
    originalLabel: "Original · News and Events",
    revisedLabel: "Revised · schedules and donation guidance",
    taskLabel: "How the regrouping supports tasks",
    taskPaths: [
      { task: "Plan a visit", path: "Calendar + Location", reason: "Find an opening date and the place to go." },
      { task: "Donate", path: "Donate → rules, schedule, Wish List", reason: "Keep giving options and book guidance together." },
      { task: "Participate", path: "Volunteer + Location", reason: "Retain direct destinations for sign-up and location information." },
    ],
    fullEvidenceLabel: "View the complete IA diagrams and task-path rationale",
  },
  donation: {
    kicker: "Content hierarchy",
    title: "Showing both ways to donate before the detailed rules",
    body: [
      "The original page placed financial giving below a long sequence of book-donation rules. I made Money Donations and Book Donations visible together at the top, with a compact payment area beside the more detailed book guidance.",
      "I kept the existing payment options: PayPal Giving Fund and Donorbox. Book requirements sit under labeled disclosures, including Books We Accept and Other rules, while the donation-hours warning remains visible below them.",
    ],
    originalLink: "View the original donation page ↗",
    moneyLabel: "Financial giving",
    booksLabel: "Book-donation guidance",
    tradeoff: "The tradeoff is less text at first glance, but closed disclosures may hide restrictions. Whether people notice quantity limits and donation hours still needs testing.",
  },
  calendar: {
    kicker: "Supporting decision",
    title: "Make visit planning a schedule, not a news search",
    body: "The calendar gives visit planning a dedicated destination within News & Events. Public openings are marked with a star, and scheduled dates are highlighted. Month and year controls support browsing, while a detail panel distinguishes openings from events and lists book-giveaway and book-donation hours separately. This is a desktop prototype; the captured controls are static evidence here.",
  },
  outcome: {
    kicker: "Scope & validation",
    title: "The structure is designed. Its impact is unvalidated.",
    body: [
      "I completed a revised sitemap, five desktop prototype pages, and a supporting visual identity. The concept was not implemented or formally tested, so improved findability and comprehension remain design intentions.",
      "Next I would test whether visitors can find the next opening date, choose a donation method, and notice important book-donation restrictions. Those tasks would also guide further mobile design and validation; the current screens are desktop concepts.",
    ],
    supportingLabel: "Additional prototype pages & visual identity",
    supportingBody: "The remaining page exports and identity studies document the concept’s scope. They provide supplementary context rather than additional evidence of usability or impact.",
    prototypeLabel: "Five desktop prototype pages",
    identityLabel: "Supporting visual identity",
  },
  supportingFiles: {
    prototype: [
      { label: "Donate", src: original + "bookthing-final-donate-page.png" },
      { label: "Calendar", src: original + "bookthing-final-calendar-page.png" },
      { label: "Newsroom", src: original + "bookthing-final-news.png" },
      { label: "Wishlist", src: original + "bookthing-final-wishlist.png" },
      { label: "FAQ", src: original + "bookthing-final-FAQ-page.png" },
    ],
    identity: [
      { label: "Typography specimen", src: original + "typography.png" },
      { label: "Color exploration", src: original + "bookthing-visual-system-support-color platte.png" },
      { label: "Book-as-door mark", src: original + "bookthing-visual-system-support-logo.png" },
      { label: "Concept business card", src: original + "bookthing-visual-system-support-business card.png" },
    ],
    newTab: "opens an original image in a new tab",
  },
} as const;

// All previews below are deterministic Sharp source-pixel crops. No marks, text,
// colors or UI states were modified. Bounds are [x, y, width, height]. fullSrc
// preserves access to the complete original. Transparent diagrams display on white.
export const bookthingV2Assets = {
  // bookthing-ia-original-sitemap.png, 4320×1382; [600,275,1030,735].
  originalBranches: {
    src: preview + "ia-original-news-events.png", fullSrc: original + "bookthing-ia-original-sitemap.png", width: 1030, height: 735,
    alt: "Original sitemap detail: News contains opening and event announcements; Events leads to Facebook.",
    caption: "Original sitemap detail: schedules shared space with announcements and an external event link.",
  },
  // bookthing-ia-revised-sitemap.png, 3628×1408; [620,330,1095,650].
  revisedBranches: {
    src: preview + "ia-revised-schedule-donate.png", fullSrc: original + "bookthing-ia-revised-sitemap.png", width: 1095, height: 650,
    alt: "Revised sitemap detail: Calendar, Newsroom and Social media under News & Events; Rules, Schedule and Wish List under Donate.",
    caption: "Revised sitemap detail: a dedicated Calendar and a grouped set of donation resources.",
  },
  fullOriginal: {
    src: original + "bookthing-ia-original-sitemap.png", width: 4320, height: 1382,
    alt: "Complete original information architecture with eight top-level destinations and their page contents.",
    caption: "Original sitemap",
  },
  fullTasks: {
    src: original + "bookthing-ia-task-paths.png", width: 3126, height: 1408,
    alt: "Persona-informed task paths for planning a visit, donating money and participating.",
    caption: "Persona-informed key task paths",
  },
  fullRevised: {
    src: original + "bookthing-ia-revised-sitemap.png", width: 3628, height: 1408,
    alt: "Complete revised sitemap, including the News & Events and Donate branches.",
    caption: "Revised sitemap",
  },
  // bookthing-final-donate-page.png, 2560×1960; [0,0,2560,1620].
  donationContext: {
    src: preview + "donation-context.png", fullSrc: original + "bookthing-final-donate-page.png", width: 2560, height: 1620,
    alt: "Redesigned Donate page with both giving headings, the full captured Donate menu, both payment methods and book-rule disclosures.",
    caption: "Desktop prototype: both donation paths appear before the detailed book rules.",
  },
  // Same Donate source; [210,290,930,1130]. The entire money column is retained.
  donationMoney: {
    src: preview + "donation-money.png", fullSrc: original + "bookthing-final-donate-page.png", width: 930, height: 1130,
    alt: "Money Donations detail with the complete PayPal Giving Fund and Donorbox options.",
    caption: "Desktop detail: financial giving has its own compact action area.",
  },
  // Same Donate source; [1225,395,1130,1145]. Cleanly excludes the open menu.
  donationBooks: {
    src: preview + "donation-books.png", fullSrc: original + "bookthing-final-donate-page.png", width: 1130, height: 1145,
    alt: "Book-donation introduction, complete disclosure labels, expanded Other rules and the donation-hours warning.",
    caption: "Desktop detail: labeled book requirements and a visible donation-hours warning.",
  },
  originalDonation: original + "bookthing-analysis-donate-2025.png",
  // bookthing-final-calendar-page.png, 3840×2496; [560,380,2680,1270].
  calendarContext: {
    src: preview + "calendar-content.png", fullSrc: original + "bookthing-final-calendar-page.png", width: 2680, height: 1270,
    alt: "Calendar prototype with December 2025 dates, an opening star, highlighted dates and separate giveaway and donation hours.",
    caption: "Desktop prototype: date selection and opening details sit together.",
  },
  // Same Calendar source; [650,650,810,890].
  calendarGrid: {
    src: preview + "calendar-date-grid.png", fullSrc: original + "bookthing-final-calendar-page.png", width: 810, height: 890,
    alt: "December 2025 calendar grid with the public-opening star and highlighted scheduled dates.",
    caption: "Desktop detail: month context, opening star and scheduled dates.",
  },
  // Same Calendar source; [1790,682,1440,404].
  calendarHours: {
    src: preview + "calendar-opening-hours.png", fullSrc: original + "bookthing-final-calendar-page.png", width: 1440, height: 404,
    alt: "December opening detail showing giveaway hours from 9am to 5pm and book-donation hours from 9am to 2pm.",
    caption: "Desktop detail: giveaway and book-donation hours are listed separately.",
  },
} as const;
