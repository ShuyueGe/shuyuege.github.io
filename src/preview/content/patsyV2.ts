export const patsyV2 = {
  project: "Patsy’s Restaurant",
  label: "Patsy’s · Mobile concept",
  title: "From menu browsing to a complete pickup path",
  intro: "Research prioritized menu access; exploratory testing exposed a missing pickup path.",
  meta: [
    { label: "Role", value: "Research planning · Test design and observation · Focused UI refinement" },
    { label: "Team", value: "Four-person academic project" },
    { label: "Delivery", value: "Mobile Figma prototype · Unlaunched" },
  ],
  sections: [
    { id: "patsy-v2-research", label: "Research" },
    { id: "patsy-v2-ordering", label: "Pickup iteration" },
    { id: "patsy-v2-reservation", label: "Reservation review" },
    { id: "patsy-v2-boundary", label: "Outcome" },
  ],
  research: {
    title: "Make the menu useful for a dining decision",
    counts: [
      { lead: "21 of 21", text: "survey respondents selected View menu as a likely website use; multiple selections were allowed." },
    ],
    decision: "Stated intentions prioritized menu access. Small-text feedback and product review prompted more space for menu categories, descriptions, and prices.",
    tradeoff: "The landing export still omits hours and seasonal closures.",
    sample: "Convenience sample: UMBC students and team members’ families; none lived in Bethany Beach, and one had visited Patsy’s. Intentions were not observed behavior.",
  },
  ordering: {
    title: "Testing exposed the gap between browsing and ordering",
    intro: "Two participants tested the initial prototype with reservation, crab-cake lookup, and pickup tasks.",
    observation: "One searched for a cart: browsing had no pickup path.",
    hotspot: "Separately, a crab-cake tap failed because its prototype hotspot was unsupported.",
    revision: "The revision added homepage pickup, menu cart/plus cues, order review, checkout with pickup information, and confirmation.",
    testedLabel: "Initial prototype · Tested",
    revisedLabel: "Revised prototype · Not retested",
    sequenceLabel: "Proposed pickup sequence",
    sequence: [
      { title: "Review", asset: "cart" },
      { title: "Checkout + pickup", asset: "checkout" },
      { title: "Confirm", asset: "confirmation" },
    ],
    limitation: "Next-step buttons advance through preset states; add-to-cart and dynamic updates remain nonfunctional. The revision was not retested.",
  },
  reservation: {
    title: "Review, edit, then confirm",
    text: "Both participants completed the initial reservation task. An unclear, nonworking X was removed; Make Edits and Reserve retained correction before commitment.",
  },
  boundary: {
    title: "Delivered prototype; effectiveness unverified",
    text: "Testing prompted revision; it did not demonstrate improved task success. The concept remains unlaunched.",
  },
  assets: {
    landing: {
      src: "/images/projects/patsy/after-Landing Page.png", width: 804, height: 1758,
      alt: "Revised team mobile homepage with separate reservation, menu, and pickup entry points",
      caption: "Revised concept: separate menu, reservation, and pickup actions.",
    },
    original: {
      src: "/images/projects/patsy/report-original-phone.jpg", width: 992, height: 2048,
      alt: "Original Patsy’s website phone capture with small text and a dense desktop composition",
      caption: "Original phone view: dense, desktop-style content.",
    },
    testedMenu: {
      src: "/images/projects/patsy/report-tested-menu.png", width: 584, height: 638,
      alt: "Tested low-fidelity menu with categories and item placeholders, without a cart or pickup route",
      caption: "Categories without an ordering path.",
    },
    revisedMenu: {
      src: "/images/projects/patsy/after-Menu 2.png", width: 804, height: 1758,
      alt: "Revised team Entrées screen with a cart indicator and plus controls beside menu items including Crab Cakes",
      caption: "Ordering cues; item selection remains nonfunctional.",
    },
    cart: {
      src: "/images/projects/patsy/after-Cart step2.png", width: 804, height: 1758,
      alt: "Preset cart screen containing example dishes, an order summary, and a Continue action",
      caption: "Review amount, tax, and total.",
    },
    checkout: {
      src: "/images/projects/patsy/after-Cart step3.png", width: 804, height: 1758,
      alt: "Preset checkout screen showing payment choices, the pickup address, and Place Order",
      caption: "Pickup requirements beside payment choices.",
    },
    confirmation: {
      src: "/images/projects/patsy/after-Cart step4.png", width: 804, height: 1758,
      alt: "Preset order-confirmation overlay containing a sample pickup estimate and Return to Home",
      caption: "Example pickup estimate after ordering.",
    },
    reservation: {
      src: "/images/projects/patsy/after-Reservation step3.png", width: 804, height: 1758,
      alt: "Revised reservation review with guest count, date and location, plus Make Edits and Reserve actions",
      caption: "Revised review: edit or reserve.",
    },
  },
} as const;