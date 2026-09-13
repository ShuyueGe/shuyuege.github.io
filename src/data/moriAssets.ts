import type { MoriAsset } from "../components/MoriMedia";

// Suffixes identify separate frames/crops within the handoff's asset groups.
// No product imagery is supplied or verified. Add an `image` object only after
// checking version, evidence, native dimensions, and image-specific alt text.
export const moriAssets = {
  hero: { id: "MORI-HERO-01", state: "Product overview", status: "Shipped interface", description: "Internship-period shipped product viewport with the Mori cloud and its content layer; reuse a verified navigation start frame" },
  visible: { id: "MORI-RULES-01A", state: "Visible controls", status: "Original", description: "Original visible control with surrounding screen context" },
  pressBefore: { id: "MORI-RULES-01B", state: "Before press", status: "Original", description: "Original screen before pressing to reveal a control" },
  pressAfter: { id: "MORI-RULES-01C", state: "After press", status: "Original", description: "Matching original screen after pressing to reveal a control" },
  gesture: { id: "MORI-RULES-01D", state: "Gesture / empty space", status: "Original", description: "Original gesture or empty-space action with identifiable page context" },
  proposalCloud: { id: "MORI-NAV-01A", state: "Cloud tap", status: "Not shipped", description: "Initial cloud-tap proposal before engineering feedback" },
  proposalSwipe: { id: "MORI-NAV-01B", state: "Swipe right", status: "Not shipped", description: "Initial right-swipe proposal before engineering feedback" },
  cloudStart: { id: "MORI-NAV-02A", state: "Cloud tap · Start", status: "Shipped", description: "Starting layer for the shipped Mori cloud return interaction" },
  cloudDestination: { id: "MORI-NAV-02B", state: "Cloud tap · Previous layer", status: "Shipped", description: "Previous layer reached by the shipped Mori cloud tap" },
  emptyStart: { id: "MORI-NAV-02C", state: "Empty-space tap · Start", status: "Shipped", description: "Starting layer for the shipped empty-space return interaction" },
  emptyDestination: { id: "MORI-NAV-02D", state: "Empty-space tap · Previous layer", status: "Shipped", description: "Previous layer reached by the shipped empty-space tap" },
  healthInformation: { id: "MORI-HEALTH-01A", state: "Health information", status: "Original", description: "Original passive 2 × 2 health-data display with its own screen context" },
  healthControls: { id: "MORI-HEALTH-01B", state: "Recording controls", status: "Original", description: "Original separate 1 × 3 recording controls with their own context; not stitched to the data display" },
  healthShipped: { id: "MORI-HEALTH-02", state: "Data-item entry", status: "Shipped", description: "Shipped health-data surface with a confirmed recording entry point" },
  healthForm: { id: "MORI-HEALTH-03", state: "Recording form", status: "Existing form — reused", description: "Complete existing recording form with underlying page context, shared by both entry patterns" },
  companionOriginal: { id: "MORI-MODES-01A", state: "Heart Companion", status: "Original", description: "Original Heart Companion conversation interface at a comparable state to Health Guardian" },
  guardianOriginal: { id: "MORI-MODES-01B", state: "Health Guardian", status: "Original", description: "Original Health Guardian conversation interface at a comparable state to Heart Companion" },
  companionShipped: { id: "MORI-MODES-02A", state: "Heart Companion", status: "Shipped", description: "Internship-period shipped Heart Companion interface with conversation context and input" },
  guardianShipped: { id: "MORI-MODES-02B", state: "Health Guardian", status: "Shipped", description: "Same-release shipped Health Guardian interface with revised guidance and input cues" },
  guidance: { id: "MORI-MODES-03A", state: "Opening guidance", status: "Shipped · Detail crop", description: "Verified detail crop of complete Health Guardian opening guidance from the shipped release" },
  inputPlaceholder: { id: "MORI-MODES-03B", state: "Revised placeholder", status: "Shipped · Detail crop", description: "Verified Health Guardian input placeholder detail from the shipped release" },
  inputHeight: { id: "MORI-MODES-03C", state: "Taller input area", status: "Shipped · Detail crop", description: "Verified Health Guardian input boundary detail showing height" },
  inputRadius: { id: "MORI-MODES-03D", state: "Smaller corner radius", status: "Shipped · Detail crop", description: "Verified Health Guardian input boundary detail showing corner radius" },
  logo: { id: "MORI-VISUAL-01", state: "Logo artwork", status: "Logo design", description: "Actual MORI logo artwork, complete and at native proportions; production use is unconfirmed" },
} satisfies Record<string, MoriAsset>;
