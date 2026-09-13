// Exact approved public copy from case-study-handoff/patsy-final.md.
export const patsyCopy = [
  {
    "id": "S01",
    "eyebrow": "PATSY’S RESTAURANT · MOBILE WEBSITE CONCEPT",
    "headline": "Making the path from browsing to action clearer on mobile",
    "blocks": [
      "Our team explored how Patsy’s mobile website could help people evaluate a restaurant and take the next step. Research shaped the initial concept; formative testing exposed a missing pickup path and guided the revision.",
      "Role: Research planning · Product analysis · Usability-test design & observation · Focused UI refinement Team: Four-person academic project Scope: Mobile menu, reservations, and pickup concept Report submitted: May 3, 2026 Status: Figma prototype",
      "I helped design the questionnaire, asked questions in 3 of 12 interview sessions, and identified mobile readability and navigation issues through product review."
    ],
    "captions": [
      "Team mobile prototype: menu browsing, reservations, and a proposed pickup path."
    ]
  },
  {
    "id": "S02",
    "eyebrow": "THE STARTING POINT",
    "headline": "The information was there. Reading it on a phone was the problem.",
    "blocks": [
      "Patsy’s is a restaurant in Bethany Beach, Delaware. Its website provided menus, hours, seasonal closures, contact details, and a reservation link. Familiar navigation labels were worth retaining, but small text and crowded content required manual zooming on mobile.",
      "Useful information was present without a clear visual order. Respondents were relatively positive about finding hours; readability and perceived currency were weaker. The redesign needed to preserve that practical value while making the page easier to scan."
    ],
    "captions": [
      "Original website",
      "Familiar categories gave the redesign a useful starting point.",
      "Restaurant details competed with promotional content and repeated contact information.",
      "Item names, descriptions, and prices ran together in dense text."
    ]
  },
  {
    "id": "S03",
    "eyebrow": "EVIDENCE THAT SET THE DIRECTION",
    "headline": "The website often confirmed a dining decision already in progress",
    "blocks": [
      "Our team collected 21 survey responses and conducted 12 semi-structured interview sessions. Interviewees described discovering restaurants through Google Maps, reviews, or social media, then checking the restaurant website for practical details.",
      "15 of 21 respondents were somewhat or very likely to visit a restaurant’s website before going.",
      "21 of 21 selected viewing the menu as a reason to use Patsy’s website.",
      "“I check the menu to see if there’s anything I would like to eat and also check prices.” — Interview participant",
      "Confirm the essentials Interviews emphasized menu options, prices, location, and hours. This suggested the site should support quick confirmation. We prioritized direct access to menu browsing and reservation tasks.",
      "Make information readable Survey comments and our product review identified small type, crowding, and mobile friction. We translated these findings into a mobile layout with clearer spacing and prominent actions.",
      "Help people evaluate dishes Open-ended feedback requested food images; interviews emphasized food options and price clarity. We organized menu items into categories with images, descriptions, and prices.",
      "The sample included UMBC students and team members’ families; no survey respondent lived in Bethany Beach, and only one had previously visited Patsy’s."
    ],
    "captions": [
      "Survey counts describe this project sample. The menu question allowed multiple selections."
    ]
  },
  {
    "id": "S04",
    "eyebrow": "DECISION 01 · MAKE THE NEXT ACTION VISIBLE",
    "headline": "Give the main tasks room on a small screen",
    "blocks": [
      "My product review identified manual zooming and crowded content. The problem went beyond font size: the page needed to distinguish what someone could do from the information they could read.",
      "Our team separated reservations and menu browsing into distinct homepage actions; the revised version added Order Pickup. Contact links moved into a compact footer.",
      "The tradeoff was less emphasis on practical information. Hours and seasonal closures mattered in the survey but are absent from the exported landing screen. I would revisit their placement."
    ],
    "captions": [
      "Original phone view: the page retained a dense, desktop-style composition.",
      "Revised team prototype: reservations, menu browsing, and pickup have separate entry points.",
      "Footer detail",
      "Contact links moved below the main tasks; hours still need a visible home."
    ]
  },
  {
    "id": "S05",
    "eyebrow": "DECISION 02 · FOLLOW THE TASK BEYOND THE MENU",
    "headline": "Testing exposed the gap between browsing and ordering",
    "blocks": [
      "Menu access was already a research priority. The first prototype grouped dishes into four categories with names, prices, and image placeholders. It supported browsing but lacked a pickup path.",
      "We ran formative think-aloud testing with two participants. I designed the protocol, observed sessions, and took notes. Tasks were to reserve dinner for two, find crab cakes and their price, and attempt pickup.",
      "During the assigned pickup task, one participant searched for a cart without finding an ordering path. Another expected the crab-cake item to be clickable. Earlier research had raised online ordering; testing exposed the omitted path.",
      "Extending the menu into a pickup sequence was our clearest testing-informed change. We added cart cues, an order summary, checkout with pickup information, and confirmation. Showing the sequence made the full path more explicit than a cart icon alone.",
      "Next-step buttons advance through preset states, but add-to-cart does not work. The revised flow has not yet been retested.",
      "My smaller menu refinement removed the redundant Menu heading to give categories more room—a design judgment, separate from the test findings."
    ],
    "captions": [
      "Tested V1 · Menu browsing",
      "Revised team prototype · Ordering cues",
      "Assigned pickup task → a missing cart path → a proposed ordering sequence.",
      "Review the intended order before checkout.",
      "Pickup information appears beside payment choices.",
      "Show what happens after the proposed order.",
      "Preset prototype screens · Not a working checkout"
    ]
  },
  {
    "id": "S06",
    "eyebrow": "DECISION 03 · CLARIFY THE COMMITMENT",
    "headline": "Keep reservation review focused on editing or confirming",
    "blocks": [
      "Reservation needed clarification, not a response to widespread failure: survey feedback was relatively positive. The original page linked to Tock; our team proposed an in-site selection, review, and confirmation flow.",
      "Both test participants completed the initial reservation task without major difficulty. One appreciated reserving without an account. Testing revealed smaller uncertainties: hesitation over time selection and confusion around an X control on the review screen.",
      "The team removed the confusing control and retained explicit edit and reserve actions. The prototype can be clicked through to completion, but time-selection feedback remains unresolved. My confirmation-screen hierarchy refinement was a design judgment, not a tested improvement."
    ],
    "captions": [
      "Original website · External booking link",
      "Revised team prototype · Reservation review",
      "Two explicit choices: make edits or reserve."
    ]
  },
  {
    "id": "S07",
    "eyebrow": "THE RESULTING CONCEPT",
    "headline": "The revised mobile experience, together",
    "blocks": [
      "Selected team-prototype screens bring homepage actions, menu browsing, and reservation confirmation into one mobile experience."
    ],
    "captions": [
      "Choose a task from the homepage.",
      "Browse dishes by category.",
      "Review the reservation confirmation.",
      "Team mobile prototype · Concept screens"
    ]
  },
  {
    "id": "S08",
    "eyebrow": "WHAT THE WORK ESTABLISHED",
    "headline": "A clear-looking interface and a supported task are different things",
    "blocks": [
      "Designed: A revised mobile concept for menu browsing, reservations, and a proposed pickup sequence.",
      "Tested: Three tasks on the initial prototype with two participants, revealing missing ordering steps and ambiguous controls.",
      "Still unvalidated: The revised pickup flow, broader usability, and restaurant acceptance. The concept remained unlaunched; no desktop design or measured post-redesign results were produced.",
      "Participants could respond positively to the layout while still being unable to complete the pickup task. For me, that made task coverage a more meaningful checkpoint than favorable impressions alone.",
      "I would make item selection and cart updates functional, then retest pickup with a broader sample including local diners and returning customers. Further work would address hours visibility, time-selection feedback, touch-based price explanations, and the restaurant’s booking and checkout requirements."
    ],
    "captions": []
  }
] as const;
