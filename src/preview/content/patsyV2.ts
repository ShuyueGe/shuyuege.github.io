export const patsyV2 = {
  project: "Patsy’s Restaurant",
  label: "Patsy’s · Mobile concept",
  title: "From menu browsing to a complete pickup path",
  intro: "Research prioritized menu browsing; exploratory testing exposed a missing pickup path.",
  meta: [
    { label: "Team", value: "Four-person academic project" },
    { label: "Delivery", value: "Mobile Figma prototype · Unlaunched" },
  ],
  contributionTitle: "My contribution",
  contribution: "I helped design the questionnaire, asked questions in 3 of 12 interview sessions, reviewed mobile readability, and designed, observed, and documented think-aloud testing. Interfaces are team work.",
  sections: [
    { id: "patsy-v2-research", label: "Menu priority" },
    { id: "patsy-v2-ordering", label: "Pickup iteration" },
    { id: "patsy-v2-reservation", label: "Reservation" },
    { id: "patsy-v2-boundary", label: "Boundary" },
  ],
  research: {
    title: "Make the menu useful for a dining decision",
    text: "Across 21 survey responses and 12 interview sessions, 21/21 survey respondents selected menu viewing in a multi-select intended-use question. This informed readable categories, descriptions, and prices; it did not measure behavior.",
    sample: "Survey sample: students and families; no Bethany Beach residents and one prior Patsy’s diner.",
  },
  ordering: {
    title: "Testing exposed the gap between browsing and ordering",
    observation: "Two exploratory participants attempted reserving dinner for two, finding crab cakes/prices, and pickup. One sought a cart, but pickup was absent. Separately, a nonresponsive crab-cake hotspot exposed an unsupported interaction, not an undiscoverable working route.",
    revision: "The team added homepage pickup, cart and item cues, then order review, checkout with pickup details, and confirmation.",
    testedLabel: "Tested: browsing",
    revisedLabel: "Revised: ordering cues",
    sequenceLabel: "Proposed pickup sequence",
    sequence: [
      { title: "Review", asset: "cart" },
      { title: "Checkout + pickup", asset: "checkout" },
      { title: "Confirm", asset: "confirmation" },
    ],
    limitation: "Preset states; add-to-cart is nonfunctional. Revised flows were not retested.",
  },
  reservation: {
    title: "Review details, then edit or confirm",
    text: "Both completed reservation tasks. After confusion around X, the team removed it, retaining Make Edits and Reserve. Time-selection feedback remained unresolved.",
  },
  boundary: {
    title: "Prototype delivered; effectiveness unverified",
    text: "Testing identified problems and prompted iteration; it did not establish higher task success.",
  },
  assets: {
    landing: {
      src: "/images/projects/patsy/after-Landing Page.png", width: 804, height: 1758,
      alt: "Revised team mobile homepage with separate reservation, menu, and pickup entry points",
      caption: "Revised team prototype.",
    },
    original: {
      src: "/images/projects/patsy/report-original-phone.jpg", width: 992, height: 2048,
      alt: "Original Patsy’s website phone capture with small text and a dense desktop composition",
      caption: "Original mobile crowding.",
    },
    testedMenu: {
      src: "/images/projects/patsy/report-tested-menu.png", width: 584, height: 638,
      alt: "Tested low-fidelity menu with categories and item placeholders, without a cart or pickup route",
    },
    revisedMenu: {
      src: "/images/projects/patsy/after-Menu 2.png", width: 804, height: 1758,
      alt: "Revised team Entrées screen with a cart indicator and plus controls beside menu items including Crab Cakes",
    },
    cart: {
      src: "/images/projects/patsy/after-Cart step2.png", width: 804, height: 1758,
      alt: "Preset cart screen containing example dishes, an order summary, and a Continue action",
    },
    checkout: {
      src: "/images/projects/patsy/after-Cart step3.png", width: 804, height: 1758,
      alt: "Preset checkout screen showing payment choices, the pickup address, and Place Order",
    },
    confirmation: {
      src: "/images/projects/patsy/after-Cart step4.png", width: 804, height: 1758,
      alt: "Preset order-confirmation overlay containing a sample pickup estimate and Return to Home",
    },
    reservation: {
      src: "/images/projects/patsy/after-Reservation step3.png", width: 804, height: 1758,
      alt: "Revised reservation review with guest count, date and location, plus Make Edits and Reserve actions",
    },
  },
} as const;