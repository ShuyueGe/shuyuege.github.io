// V2-only manuscript. Facts checked against current source and final handoff.
const original = "/images/projects/bookthing/";
const preview = "/images/preview/bookthing-v2/";

export const bookthingV2 = {
  projectName: "BookThing",
  sections: [
    { id: "bookthing-v2-ia", label: "Information architecture" },
    { id: "bookthing-v2-donation", label: "Donation" },
    { id: "bookthing-v2-calendar", label: "Calendar" },
    { id: "bookthing-v2-supporting", label: "Pages & identity" },
    { id: "bookthing-v2-boundaries", label: "Outcome" },
  ],
  hero: {
    eyebrow: "BookThing · Nonprofit website",
    title: "Reorganizing BookThing around visiting, donating, and participating",
    intro: "A desktop concept for a Baltimore nonprofit giving donated books away free.",
    metadata: [
      { label: "Role", value: "Solo designer" },
      { label: "Timeline", value: "September–December 2025" },
      { label: "Focus", value: "IA · Content hierarchy · Desktop UI" },
      { label: "Status", value: "Academic concept · Not implemented" },
    ],
  },
  ia: {
    title: "Separate schedules from news, group donation resources",
    body: [
      "The original sitemap scattered opening information across Home, News, and FAQ; Events linked to Facebook.",
      "Assumption-based proto-personas and task paths supplied planning criteria, not user-study findings: distinguish openings from events, surface payment options, and keep volunteer sign-up and location accessible.",
    ],
    decision: "News & Events now separates Calendar schedules from Newsroom announcements. Donate groups Donation Rules, Donation Schedule, and Wish List; these branches guided prototype dropdowns.",
    originalLabel: "Original",
    revisedLabel: "Revised",
    fullEvidenceLabel: "Complete sitemaps & task paths",
  },
  donation: {
    title: "Showing both ways to donate before the detailed rules",
    body: [
      "Financial giving followed lengthy book rules. The revision puts Money Donations and Book Donations first: a compact payment area beside wider book guidance.",
    ],
    originalLabel: "Original donation ordering",
    revisedLabel: "Revised donation hierarchy",
    detail: "Books We Accept and Other rules group requirements; the drop-off warning stays visible. Existing payment methods and policies remain.",
    moneyLabel: "Money donations",
    booksLabel: "Book donations",
    tradeoff: "Collapsed rules may be overlooked. Whether visitors notice acceptance requirements, quantity limits, and hours needs testing.",
  },
  calendar: {
    title: "Make visit planning a schedule, not a news search",
    body: [
      "Calendar puts dates beside visit details instead of relying on news posts. Stars identify public openings; the date panel separates giveaway and book-donation hours.",
    ],
  },
  supporting: {
    label: "Additional pages & visual identity",
    body: "Supplementary concept exports, not evidence of usability.",
    prototypeLabel: "Five desktop prototype pages",
    identityLabel: "Supporting visual identity",
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
  outcome: {
    title: "Prototype delivered; usability remains unvalidated",
    body: [
      "The academic concept includes revised IA and five desktop prototype pages. It was not implemented or usability-tested; navigation and disclosure findability remain unvalidated.",
    ],
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
    caption: "Original: opening announcements share News with updates; Events leads to Facebook.",
  },
  // bookthing-ia-revised-sitemap.png, 3628×1408; [620,330,1095,650].
  revisedBranches: {
    src: preview + "ia-revised-schedule-donate.png", fullSrc: original + "bookthing-ia-revised-sitemap.png", width: 1095, height: 650,
    alt: "Revised sitemap detail: Calendar, Newsroom and Social media under News & Events; Rules, Schedule and Wish List under Donate.",
    caption: "Revised: Calendar gets a schedule destination; Donate names rules, timing, and Wish List.",
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
    caption: "Both giving options precede detailed rules.",
  },
  // Same Donate source; [210,290,930,1130]. The entire money column is retained.
  donationMoney: {
    src: preview + "donation-money.png", fullSrc: original + "bookthing-final-donate-page.png", width: 930, height: 1130,
    alt: "Money Donations detail with the complete PayPal Giving Fund and Donorbox options.",
    caption: "Existing payment options.",
  },
  // Same Donate source; [1225,395,1130,1145]. Cleanly excludes the open menu.
  donationBooks: {
    src: preview + "donation-books.png", fullSrc: original + "bookthing-final-donate-page.png", width: 1130, height: 1145,
    alt: "Book-donation introduction, complete disclosure labels, expanded Other rules and the donation-hours warning.",
    caption: "Disclosures; hours warning stays visible.",
  },
  // Authentic 2025 source; [20,2070,730,515] shows the rules-to-money ordering.
  originalDonation: {
    src: original + "bookthing-analysis-donate-2025.png", width: 1152, height: 4096,
    alt: "Original Donate page excerpt showing book-donation rules immediately before Money Donations.",
    caption: "Original: financial giving follows book-donation rules.",
  },
  // bookthing-final-calendar-page.png, 3840×2496; [560,380,2680,1270].
  calendarContext: {
    src: preview + "calendar-content.png", fullSrc: original + "bookthing-final-calendar-page.png", width: 2680, height: 1270,
    alt: "Calendar prototype with December 2025 dates, an opening star, highlighted dates and separate giveaway and donation hours.",
    caption: "Opening dates and separate hours.",
  },
  // Same Calendar source; [650,650,810,890].
  calendarGrid: {
    src: preview + "calendar-date-grid.png", fullSrc: original + "bookthing-final-calendar-page.png", width: 810, height: 890,
    alt: "December 2025 calendar grid with the public-opening star and highlighted scheduled dates.",
    caption: "Public opening marked.",
  },
  // Same Calendar source; [1790,682,1440,404].
  calendarHours: {
    src: preview + "calendar-opening-hours.png", fullSrc: original + "bookthing-final-calendar-page.png", width: 1440, height: 404,
    alt: "December opening detail showing giveaway hours from 9am to 5pm and book-donation hours from 9am to 2pm.",
    caption: "Separate giveaway and donation hours.",
  },
} as const;
