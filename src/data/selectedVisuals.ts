export const visualClusters = ["left", "center", "right"] as const;

export interface SelectedVisual {
  /** Public path, with the original filename and spaces left intact. */
  src: string;
  title?: string;
  category: "Graphic Design" | "Photography";
  year?: string;
  alt: string;
  /** Original display dimensions, also used by the uncropped lightbox. */
  width: number;
  height: number;
  /** Curated homepage footprint; independent of the original image ratio. */
  size: "small" | "medium" | "large";
  thumbnail: "original" | "portrait" | "landscape" | "wide";
  /** Editorial grouping and a shared local-grid role, independent of filename. */
  cluster: (typeof visualClusters)[number];
  placement: "lead" | "upper" | "detail" | "lower";
}

// Add an image to public/images/home/Selected Visuals/, then add one entry here.
// Array order remains lightbox order. Cluster/placement determines gallery reading order.
// Each cluster uses shared layout roles rather than individual coordinates.
// An empty array hides the section.
// Photography has no verified titles or dates, so only its category is shown.
// Dimensions follow browser orientation (including EXIF rotation), not JPEG storage order.
export const selectedVisuals: SelectedVisual[] = [
  {
    src: "/images/home/Selected Visuals/FLYER.png",
    size: "medium",
    thumbnail: "original",
    cluster: "left",
    placement: "lead",
    title: "Flyer",
    category: "Graphic Design",
    alt: "Blue research recruitment flyer with a phone illustration and information about interviews and workshops for mental health app decision tools.",
    width: 1224,
    height: 1584,
  },
  {
    src: "/images/home/Selected Visuals/photo-t1 (3).jpg",
    size: "medium",
    thumbnail: "landscape",
    cluster: "left",
    placement: "upper",
    category: "Photography",
    alt: "A goose walks along the waterfront beneath leafy branches, with sailboats on blue water.",
    width: 3963,
    height: 2642,
  },
  {
    src: "/images/home/Selected Visuals/photo-t1 (2).jpg",
    size: "large",
    thumbnail: "portrait",
    cluster: "center",
    placement: "lead",
    category: "Photography",
    alt: "A view down an angular stairwell with white railings, dark steps, and warm wooden handrails.",
    width: 4000,
    height: 6000,
  },
  {
    src: "/images/home/Selected Visuals/concert flyer.png",
    size: "medium",
    thumbnail: "original",
    cluster: "right",
    placement: "lead",
    title: "Concert flyer",
    category: "Graphic Design",
    alt: "Pink and orange concert flyer with musical notes and a Summer Patio Concert Series schedule.",
    width: 1224,
    height: 1584,
  },
  {
    src: "/images/home/Selected Visuals/photo-t1 (1).jpg",
    size: "medium",
    thumbnail: "wide",
    cluster: "right",
    placement: "lower",
    category: "Photography",
    alt: "Sunlit green leaves curve around the blue rim of a planter against deep shadows.",
    width: 6000,
    height: 4000,
  },
  {
    src: "/images/home/Selected Visuals/photo-t1 (8).jpg",
    size: "small",
    thumbnail: "portrait",
    cluster: "left",
    placement: "lower",
    category: "Photography",
    alt: "Sunlight filters through patterned curtains beside wooden chairs, tables, and glowing pendant lamps.",
    width: 4000,
    height: 6000,
  },
  {
    src: "/images/home/Selected Visuals/warning sign.png",
    size: "small",
    thumbnail: "original",
    cluster: "center",
    placement: "upper",
    title: "Warning sign",
    category: "Graphic Design",
    alt: "Red, black, and white warning sign with a mongoose photograph and instructions to avoid contact with the animals.",
    width: 1224,
    height: 1584,
  },
  {
    src: "/images/home/Selected Visuals/photo-t1 (5).jpg",
    size: "medium",
    thumbnail: "portrait",
    cluster: "center",
    placement: "lower",
    category: "Photography",
    alt: "An orange table lamp lights a striped green cup, an open notebook, and a yellow illustrated wall card.",
    width: 2166,
    height: 2888,
  },
  {
    src: "/images/home/Selected Visuals/photo-t1 (4).jpg",
    size: "medium",
    thumbnail: "portrait",
    cluster: "right",
    placement: "detail",
    category: "Photography",
    alt: "Pink clouds cross a pale-blue sky above diagonal power lines and dark treetops.",
    width: 2600,
    height: 3900,
  },
  {
    src: "/images/home/Selected Visuals/photo-t1 (7).jpg",
    size: "small",
    thumbnail: "landscape",
    cluster: "right",
    placement: "upper",
    category: "Photography",
    alt: "Bright orange sparks and illuminated castle-like towers reflect in dark water at night.",
    width: 3900,
    height: 2600,
  },
  {
    src: "/images/home/Selected Visuals/photo-t1 (6).jpg",
    size: "small",
    thumbnail: "landscape",
    cluster: "left",
    placement: "detail",
    category: "Photography",
    alt: "Orange and blue lights ripple across water beneath a dark diagonal walkway.",
    width: 5184,
    height: 3456,
  },
];

export function visualImageUrl(src: string) {
  // Encode each path segment, including spaces, #, and non-ASCII filenames.
  return `${import.meta.env.BASE_URL}${src.replace(/^\//, "").split("/").map(encodeURIComponent).join("/")}`;
}

export function visualTitle(item: SelectedVisual) {
  return item.title ?? item.category;
}

export function visualMetadata(item: SelectedVisual) {
  return [item.title ? item.category : undefined, item.year].filter(Boolean).join(" · ");
}
