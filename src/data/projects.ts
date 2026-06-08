import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "ngo-website-redesign",
    title: "NGO Website Redesign",
    shortTitle: "NGO Redesign",
    subtitle: "Clarifying a nonprofit's story and path to action",
    summary:
      "A desktop-first redesign that reorganizes complex content into a clearer, more welcoming experience.",
    description:
      "A website redesign project for an NGO, focused on information architecture, nonprofit communication, and content clarity.",
    role: "UX/UI Designer",
    tools: ["Figma", "FigJam", "Adobe Illustrator"],
    timeline: "8 weeks",
    projectType: "Nonprofit website redesign",
    themeColor: "#74B8B2",
    accentColor: "#F5C84B",
    mutedColor: "#B8C8B2",
    previewImages: [
      "/images/projects/ngo-1.jpg",
      "/images/projects/ngo-2.jpg",
    ],
    heroImage: "/images/projects/ngo-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        lead:
          "The organization had valuable programs and stories, but visitors had to work too hard to understand how everything connected.",
        paragraphs: [
          "The redesign began by mapping the existing content and identifying the questions a first-time visitor would bring to the site. The goal was not to reduce the organization's story, but to give it a clearer sequence.",
          "The resulting direction balances credibility with warmth. Program information, impact stories, and ways to participate are easier to scan without making the experience feel transactional.",
        ],
      },
      {
        id: "challenge",
        title: "Challenge",
        lead:
          "Dense navigation and competing messages made the site feel less approachable than the organization itself.",
        paragraphs: [
          "Important content was distributed across overlapping pages, while calls to donate, volunteer, and learn more competed at the same visual level.",
          "The design challenge was to establish a calm hierarchy that could serve multiple audiences and remain practical for a small team to maintain.",
        ],
      },
      {
        id: "process",
        title: "Process",
        lead:
          "A content-first process helped the visual system grow from the organization's actual communication needs.",
        paragraphs: [
          "I audited the page inventory, grouped content by visitor intent, and explored navigation models before moving into page composition.",
          "Low-fidelity wireframes were used to test hierarchy and content order. The visual design was added only after the core paths felt direct.",
        ],
      },
      {
        id: "solution",
        title: "Design solution",
        lead:
          "A simpler navigation system and editorial page rhythm make complex work feel understandable and human.",
        paragraphs: [
          "The homepage introduces the mission through a concise story, then gives programs, impact, and participation distinct roles. Reusable content patterns help future pages stay consistent.",
          "Large image moments support emotional connection, while quiet typography and restrained color keep the focus on the organization's work.",
        ],
        images: [
          "/images/projects/ngo-1.jpg",
          "/images/projects/ngo-2.jpg",
        ],
      },
    ],
    structuredVisuals: [
      {
        type: "insight-table",
        title: "Research insights",
        intro:
          "Early findings were translated into concrete design responses that the organization could evaluate.",
        columns: ["Observation", "Design response", "Expected effect"],
        rows: [
          [
            "Visitors could not quickly explain the NGO's focus.",
            "Lead with one plain-language mission statement and three program paths.",
            "Faster orientation for first-time visitors.",
          ],
          [
            "Action links competed across every page.",
            "Create a consistent participation area with clear priority.",
            "Less decision friction and stronger calls to action.",
          ],
          [
            "Long pages lacked visual landmarks.",
            "Use editorial section shifts, summaries, and reusable headings.",
            "Better scanning without stripping useful detail.",
          ],
        ],
      },
    ],
    reflection: {
      learned:
        "Content structure is a visual design decision. The most useful improvements happened before color or typography entered the work.",
      next:
        "I would validate the revised language with donors, volunteers, and program participants, then extend the system into mobile layouts.",
      approach:
        "This project shows my preference for making complexity feel calm without flattening the people and purpose behind it.",
    },
  },
  {
    slug: "ai-health-web-app-upgrade",
    title: "AI + Health Web App Upgrade",
    shortTitle: "AI + Health App",
    subtitle: "Making a real health product easier to understand and use",
    summary:
      "A product UX upgrade for a web-based AI health app used in real business contexts and installable on mobile home screens.",
    description:
      "A real AI and health product focused on product UX, user flow improvement, and implementation-aware design.",
    role: "Product Designer",
    tools: ["Figma", "FigJam", "HTML/CSS", "JavaScript"],
    timeline: "12 weeks",
    projectType: "Implemented health web app",
    themeColor: "#8CCBC3",
    accentColor: "#F5C84B",
    mutedColor: "#AFC7D8",
    previewImages: [
      "/images/projects/ai-health-1.jpg",
      "/images/projects/ai-health-2.jpg",
    ],
    heroImage: "/images/projects/ai-health-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        lead:
          "This upgrade focused on a working product where design decisions had immediate consequences for real users and business operations.",
        paragraphs: [
          "The web app helps users move through an AI-supported health workflow. It can be added to a phone home screen, so the experience needed to feel coherent across desktop and compact mobile contexts.",
          "The work combined product thinking, interface design, and implementation awareness. Every proposal had to fit the realities of an existing system.",
        ],
      },
      {
        id: "challenge",
        title: "Challenge",
        lead:
          "Users needed stronger guidance through a sensitive process without adding friction or making the interface feel clinical.",
        paragraphs: [
          "The original flow placed too much explanatory and action content at the same level. Users could continue, but they were not always sure what the product was doing or what would happen next.",
          "The challenge was to improve clarity and trust while preserving speed, existing business logic, and technical feasibility.",
        ],
      },
      {
        id: "process",
        title: "Process",
        lead:
          "Flow mapping and close implementation feedback kept the redesign grounded in product behavior.",
        paragraphs: [
          "I mapped entry points, decision moments, system feedback, and completion states. Friction points were ranked by user impact and implementation effort.",
          "Prototypes tested revised sequence, language, and status communication. Design reviews with implementation constraints helped narrow the solution.",
        ],
      },
      {
        id: "solution",
        title: "Design solution",
        lead:
          "The upgraded flow uses clearer steps, quieter hierarchy, and more explicit system feedback.",
        paragraphs: [
          "Primary actions are visually consistent, supporting explanations appear at the moment they are needed, and progress is communicated without creating a heavy wizard interface.",
          "Responsive patterns treat the installed mobile experience as a first-class product surface rather than a compressed desktop screen.",
        ],
        images: [
          "/images/projects/ai-health-1.jpg",
          "/images/projects/ai-health-2.jpg",
        ],
      },
    ],
    structuredVisuals: [
      {
        type: "text-chart",
        title: "Decision priorities",
        intro:
          "Potential improvements were assessed by user value, product risk, and implementation effort.",
        items: [
          {
            label: "Clarify the next action",
            detail:
              "Standardize primary actions and explain the immediate outcome.",
            emphasis: "High user value",
          },
          {
            label: "Improve system feedback",
            detail:
              "Replace ambiguous waiting states with useful progress language.",
            emphasis: "High trust impact",
          },
          {
            label: "Reduce repeated explanation",
            detail:
              "Move help content closer to the decisions it supports.",
            emphasis: "Medium effort",
          },
        ],
      },
    ],
    reflection: {
      learned:
        "Designing for a live product means balancing ideal experience with system behavior, business needs, and the cost of change.",
      next:
        "I would add longer-term product analytics and moderated usability sessions around the highest-stakes decision points.",
      approach:
        "The project reflects an implementation-aware approach: simplify the user's experience without pretending the product has no constraints.",
    },
  },
  {
    slug: "restaurant-website-redesign",
    title: "Restaurant Website Redesign",
    shortTitle: "Restaurant Redesign",
    subtitle: "Turning a content-rich restaurant site into a useful service",
    summary:
      "A research-led redesign that helps guests find practical information while preserving the restaurant's character.",
    description:
      "A detailed restaurant website redesign using surveys, interviews, content strategy, and service experience thinking.",
    role: "UX Researcher and UI Designer",
    tools: ["Figma", "Miro", "Google Forms"],
    timeline: "10 weeks",
    projectType: "Research-led website redesign",
    themeColor: "#B8C8B2",
    accentColor: "#F5C84B",
    mutedColor: "#D8C9BE",
    previewImages: [
      "/images/projects/restaurant-1.jpg",
      "/images/projects/restaurant-2.jpg",
    ],
    heroImage: "/images/projects/restaurant-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        lead:
          "Restaurant websites sit between brand storytelling and immediate service questions. This project treats both as essential.",
        paragraphs: [
          "Guests often arrive with a concrete task: check the menu, understand dietary options, find hours, or decide whether the atmosphere fits an occasion.",
          "The redesign uses research to organize those tasks without losing the personality and visual richness that make a restaurant memorable.",
        ],
      },
      {
        id: "challenge",
        title: "Challenge",
        lead:
          "Useful details were present, but scattered presentation made simple questions harder to answer.",
        paragraphs: [
          "Menus, reservations, hours, events, and story content each used different patterns. On mobile, key information could be buried beneath decorative content.",
          "The design needed to preserve a sense of place while giving practical content a dependable structure.",
        ],
      },
      {
        id: "process",
        title: "Process",
        lead:
          "Surveys and interviews helped separate assumed priorities from the information guests actually seek.",
        paragraphs: [
          "Research prompts explored how people choose restaurants, what they verify before visiting, and which website details influence confidence.",
          "Findings informed a task-based content model, page hierarchy, and prototype that could be evaluated against realistic visit scenarios.",
        ],
      },
      {
        id: "solution",
        title: "Design solution",
        lead:
          "A practical information layer supports the visual story instead of competing with it.",
        paragraphs: [
          "Hours, location, booking, and menu access remain dependable across pages. Editorial photography and story content are given room where they add meaning.",
          "The visual system uses repeatable content modules, making seasonal updates easier without turning every page into the same template.",
        ],
        images: [
          "/images/projects/restaurant-1.jpg",
          "/images/projects/restaurant-2.jpg",
        ],
      },
    ],
    structuredVisuals: [
      {
        type: "process-timeline",
        title: "Research to design",
        intro:
          "The project moved from broad behavior questions toward specific interface decisions.",
        steps: [
          {
            title: "Listen",
            detail:
              "Survey potential guests and interview frequent restaurant visitors.",
          },
          {
            title: "Organize",
            detail:
              "Group needs into planning, deciding, arriving, and returning.",
          },
          {
            title: "Prototype",
            detail:
              "Test menu access, reservation paths, and practical information.",
          },
          {
            title: "Refine",
            detail:
              "Balance service clarity with photography and restaurant voice.",
          },
        ],
      },
    ],
    reflection: {
      learned:
        "Service websites are strongest when practical details are treated as part of the brand experience, not as secondary utility.",
      next:
        "I would run task-based mobile testing with real menu content and observe how the site supports decisions immediately before a visit.",
      approach:
        "This project demonstrates how I use research to protect both usability and personality instead of treating them as opposing goals.",
    },
  },
  {
    slug: "church-ngo-website-redesign-implementation",
    title: "Church / NGO Website Redesign and Implementation",
    shortTitle: "Church / NGO Site",
    subtitle: "Designing and building a practical responsive website",
    summary:
      "A real client project combining web design and front-end implementation for desktop and mobile.",
    description:
      "A redesign and implementation project shaped by real client needs, responsive behavior, and a simple maintainable structure.",
    role: "Web Designer and Front-End Developer",
    tools: ["Figma", "React", "CSS", "GitHub"],
    timeline: "14 weeks",
    projectType: "Client website design and build",
    themeColor: "#AFC7D8",
    accentColor: "#F5C84B",
    mutedColor: "#D8C9BE",
    previewImages: [
      "/images/projects/church-ngo-1.jpg",
      "/images/projects/church-ngo-2.jpg",
    ],
    heroImage: "/images/projects/church-ngo-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        lead:
          "This project connected design decisions directly to code, content updates, and the day-to-day needs of a real organization.",
        paragraphs: [
          "The client needed a welcoming website that could serve current members, introduce the organization to new visitors, and remain simple to operate.",
          "I designed desktop and mobile layouts, created a small visual system, and implemented the responsive front end.",
        ],
      },
      {
        id: "challenge",
        title: "Challenge",
        lead:
          "A broad audience and limited maintenance capacity required a clear, durable structure.",
        paragraphs: [
          "Announcements, events, community information, and organizational background all needed a place without overwhelming the main navigation.",
          "The solution also had to perform well on phones and avoid patterns that would be difficult for the client to update.",
        ],
      },
      {
        id: "process",
        title: "Process",
        lead:
          "Client conversations, content modeling, and incremental implementation shaped the final site together.",
        paragraphs: [
          "I translated stakeholder requests into visitor tasks, then built a page model around the content that changed most often.",
          "Responsive prototypes exposed layout issues early. Implementation happened in small sections so design and browser behavior could be reviewed together.",
        ],
      },
      {
        id: "solution",
        title: "Design solution",
        lead:
          "A compact page system gives recurring content a consistent home across desktop and mobile.",
        paragraphs: [
          "The finished structure prioritizes welcome information, upcoming activity, and clear contact paths. Shared styles reduce one-off decisions and make future pages easier to add.",
          "The responsive implementation preserves hierarchy instead of merely stacking desktop sections in the same order.",
        ],
        images: [
          "/images/projects/church-ngo-1.jpg",
          "/images/projects/church-ngo-2.jpg",
        ],
      },
    ],
    structuredVisuals: [
      {
        type: "insight-table",
        title: "Need and response",
        intro:
          "Stakeholder needs were paired with maintainable design and implementation choices.",
        columns: ["Client need", "Design choice", "Implementation effect"],
        rows: [
          [
            "Make weekly information easy to find.",
            "Give current events a predictable position and visual pattern.",
            "Content can change without restructuring the page.",
          ],
          [
            "Welcome first-time visitors.",
            "Separate introductory guidance from member-focused updates.",
            "Different audiences can enter through clearer paths.",
          ],
          [
            "Support phones and older devices.",
            "Use a lightweight responsive layout with limited dependencies.",
            "Faster loading and fewer maintenance risks.",
          ],
        ],
      },
    ],
    reflection: {
      learned:
        "Implementation reveals which design decisions are truly systematic. Reusable patterns matter most when content changes after launch.",
      next:
        "I would document the content workflow in more detail and add lightweight analytics to understand which visitor paths are used most.",
      approach:
        "This project shows how I connect visual thinking with practical front-end decisions and real stakeholder constraints.",
    },
  },
];

export const getProjectBySlug = (slug: string | undefined) =>
  projects.find((project) => project.slug === slug);

