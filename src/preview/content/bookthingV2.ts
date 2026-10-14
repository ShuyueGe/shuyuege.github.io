// V2-only manuscript. Facts checked against current source and final handoff.
const original = "/images/projects/bookthing/";
const preview = "/images/preview/bookthing-v2/";

export const bookthingV2 = {
  projectName: "BookThing",
  sections: [
    { id: "bookthing-v2-ia", label: "IA" },
    { id: "bookthing-v2-donation", label: "Donation" },
    { id: "bookthing-v2-calendar", label: "Calendar" },
    { id: "bookthing-v2-boundaries", label: "Scope" },
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
      "The original sitemap distributed opening information across Home, News, and FAQ; Events led to Facebook. A visit-planning task therefore spanned dates, announcements, and location information across destinations.",
      "Assumption-based proto-personas and task paths supplied planning criteria, rather than findings from a user study: visitors need to distinguish public openings from special events and find the address; money donors need a Donate destination with payment options near the top; volunteers need sign-up and location information.",
    ],
    decision: "The revised News & Events branch separates Calendar’s operational schedule from Newsroom’s announcements, while retaining Social media. Donate groups Donation Rules, Donation Schedule, and Wish List as named destinations. Volunteer and Location stay directly accessible. These groupings guided the prototype’s dropdown menus.",
    originalLabel: "Original",
    revisedLabel: "Revised",
    fullEvidenceLabel: "Complete sitemaps & task paths",
  },
  donation: {
    title: "Showing both ways to donate before the detailed rules",
    body: [
      "The original Donate page placed financial giving after lengthy book-donation rules. Readers encountered detailed instructions for one method before seeing the other.",
      "The revision puts Money Donations and Book Donations in the first content row, making the method choice visible before its requirements. A compact financial-giving area keeps the existing PayPal Giving Fund and Donorbox options; the wider book-giving column holds preparation, schedules, and rules.",
    ],
    originalLabel: "Original donation ordering",
    revisedLabel: "Revised donation hierarchy",
    detail: "Books We Accept and Other rules group the long guidance under descriptive labels. The drop-off warning stays visible outside them. Payment methods and book policies were retained; this was a content-order change, not a new checkout.",
    moneyLabel: "Money donations",
    booksLabel: "Book donations",
    tradeoff: "Giving method choice priority over the full rule list risks overlooked restrictions inside disclosures. Whether visitors notice quantity limits, acceptance rules, and donation hours still needs testing.",
  },
  calendar: {
    title: "Make visit planning a schedule, not a news search",
    body: [
      "Opening dates were scattered across News and Events. A dedicated Calendar was chosen over relying on a News feed or homepage announcement so dates could sit beside the operational details needed to plan a visit. Newsroom retains announcements and archives.",
      "The calendar design includes month/year browsing and filtering. A star marks BookThing’s public openings, distinguishing them from other events; highlighted dates connect the month grid to a date-detail panel. That panel separates giveaway hours from book-donation hours, rather than presenting one opening time for both tasks.",
    ],
  },
  outcome: {
    title: "Prototype delivered; usability remains unvalidated",
    body: [
      "The concept comprises revised IA, five desktop prototype pages, and supporting visual identity. It was not implemented or formally usability-tested, so findability and comprehension remain unvalidated.",
      "Next, test whether a visitor can find the next opening and its correct hours, a money donor can identify an applicable payment option, and a book donor can locate acceptance requirements and quantity limits. Observe missed navigation and overlooked disclosures, including when donation columns stack on narrow screens.",
    ],
    supportingLabel: "Additional pages & visual identity",
    supportingBody: "The remaining page exports and identity studies document the concept’s scope. They provide supplementary context rather than evidence of usability or impact.",
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
