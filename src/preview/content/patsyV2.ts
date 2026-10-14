export const patsyV2 = {
  project: "Patsy’s Restaurant",
  label: "Patsy’s · Mobile concept",
  title: "From menu browsing to a complete pickup path",
  intro: "A mobile restaurant concept shaped by research and exploratory testing. The initial prototype supported browsing and reservations; the revision added the missing steps toward pickup.",
  meta: [
    { label: "Role", value: "Research planning · Product analysis · Test design and observation · Focused UI refinement" },
    { label: "Team", value: "Four-person academic project" },
    { label: "Delivery", value: "Mobile Figma prototype · Unlaunched" },
  ],
  sections: [
    { id: "patsy-v2-research", label: "Menu priority" },
    { id: "patsy-v2-ordering", label: "Pickup iteration" },
    { id: "patsy-v2-reservation", label: "Reservation" },
    { id: "patsy-v2-boundary", label: "Boundary" },
  ],
  research: {
    title: "Make the menu useful for a dining decision",
    text: "The project collected 21 survey responses and conducted 12 semi-structured interview sessions. Interviewees described discovering restaurants through maps, reviews, or social media, then using restaurant websites to confirm dishes, prices, location, and hours.",
    counts: [
      { lead: "15 of 21", text: "were somewhat or very likely to view a restaurant’s website before visiting." },
      { lead: "21 of 21", text: "selected View menu when asked what they would most likely use Patsy’s website for; multiple selections were allowed." },
    ],
    decision: "These stated intentions made menu access a priority. Product review and survey comments identified small text and manual zooming, so the initial concept retained familiar menu categories while giving item names, descriptions, prices, and image placeholders distinct space. Separate homepage actions made menu browsing and reservations visible; repeated contact details moved to a compact footer.",
    tradeoff: "That emphasis displaced practical information: the revised landing export omits hours and seasonal closures, despite their importance in the survey. Their placement still needs work.",
    sample: "Sample: UMBC students and team members’ families; no survey respondent lived in Bethany Beach, and only one had visited Patsy’s. Intentions were not observed usage.",
  },
  ordering: {
    title: "Testing exposed the gap between browsing and ordering",
    intro: "The initial prototype grouped dishes into Starters, Specials, Entrées, and Desserts, but stopped at browsing. Two participants tested it while thinking aloud: reserve dinner for two, find crab cakes and their price, and place a pickup order.",
    observation: "During the assigned pickup task, one participant searched for a cart and wondered whether menu items could be selected before reserving. There was no ordering path to discover. The problem was missing task coverage: browsing dishes did not lead to selecting an order or learning how pickup would work.",
    hotspot: "Separately, another participant tapped the crab-cake item and received no response. That exposed an unsupported prototype interaction; it does not show that a working route was hidden or difficult to find.",
    revision: "The revision added Order Pickup on the homepage and cart and plus cues on the menu. Rather than stop at a cart icon, it extended the proposed task into order review, checkout with payment choices and pickup information, then confirmation. These screens addressed the omitted next steps and pickup instructions; they did not establish that people could complete a real order.",
    menuRefinement: "The four categories stayed. Food images replaced placeholders, and spacing separated descriptions from prices. Confusion over market price also led to a hover explanation; making that explanation accessible on touch devices remains unfinished.",
    testedLabel: "Initial prototype · Tested",
    revisedLabel: "Revised prototype · Not retested",
    sequenceLabel: "Proposed pickup sequence",
    sequence: [
      { title: "Review", asset: "cart" },
      { title: "Checkout + pickup", asset: "checkout" },
      { title: "Confirm", asset: "confirmation" },
    ],
    limitation: "These are preset states. Next-step buttons advance, but add-to-cart and dynamic cart updates do not work. The revised flow has not been retested and is not a working checkout.",
  },
  reservation: {
    title: "Review details, then edit or confirm",
    text: "The original site linked to Tock; the concept kept selection, review, and confirmation within the proposed site. Both participants completed the initial reservation task without major difficulty. On review, the X control was unclear and did not work, while edit and confirm actions already existed.",
    revision: "The revision removed X and retained Make Edits and Reserve, keeping correction separate from commitment. Time-selection hesitation remained unresolved: stronger feedback was deferred while ordering and menu changes took priority. Reservation can be clicked through, but the revision has not been retested.",
  },
  boundary: {
    title: "Prototype delivered; effectiveness unverified",
    text: "The exploratory test found problems and prompted a revised mobile Figma concept. It did not measure improved task success. This redesign was not implemented or launched.",
    next: "Next, item selection and cart updates need to work before pickup is retested with local and returning diners. Hours visibility, reservation feedback, touch-based pricing explanations, and real booking and checkout requirements also remain open.",
  },
  assets: {
    landing: {
      src: "/images/projects/patsy/after-Landing Page.png", width: 804, height: 1758,
      alt: "Revised team mobile homepage with separate reservation, menu, and pickup entry points",
      caption: "Revised concept: separate task entries, including the added pickup action.",
    },
    original: {
      src: "/images/projects/patsy/report-original-phone.jpg", width: 992, height: 2048,
      alt: "Original Patsy’s website phone capture with small text and a dense desktop composition",
      caption: "Original phone view: useful information competed in a dense desktop layout.",
    },
    testedMenu: {
      src: "/images/projects/patsy/report-tested-menu.png", width: 584, height: 638,
      alt: "Tested low-fidelity menu with categories and item placeholders, without a cart or pickup route",
      caption: "Categories supported browsing; no pickup path followed.",
    },
    revisedMenu: {
      src: "/images/projects/patsy/after-Menu 2.png", width: 804, height: 1758,
      alt: "Revised team Entrées screen with a cart indicator and plus controls beside menu items including Crab Cakes",
      caption: "Cart and plus controls signal ordering intent; item selection is still nonfunctional.",
    },
    cart: {
      src: "/images/projects/patsy/after-Cart step2.png", width: 804, height: 1758,
      alt: "Preset cart screen containing example dishes, an order summary, and a Continue action",
      caption: "Review the sample amount, tax, and total before continuing.",
    },
    checkout: {
      src: "/images/projects/patsy/after-Cart step3.png", width: 804, height: 1758,
      alt: "Preset checkout screen showing payment choices, the pickup address, and Place Order",
      caption: "State the pickup address and in-person requirement before Place Order.",
    },
    confirmation: {
      src: "/images/projects/patsy/after-Cart step4.png", width: 804, height: 1758,
      alt: "Preset order-confirmation overlay containing a sample pickup estimate and Return to Home",
      caption: "An example pickup estimate completes the proposed sequence.",
    },
    reservation: {
      src: "/images/projects/patsy/after-Reservation step3.png", width: 804, height: 1758,
      alt: "Revised reservation review with guest count, date and location, plus Make Edits and Reserve actions",
      caption: "Revised review: check the details, then make edits or reserve.",
    },
  },
} as const;