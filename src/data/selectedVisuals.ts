export interface SelectedVisual {
  /** Public path, with the original filename and spaces left intact. */
  src: string;
  title: string;
  category?: string;
  year?: string;
  alt: string;
  /** Original pixel dimensions reserve the correct space before loading. */
  width: number;
  height: number;
}

// Add an image to public/images/home/Selected Visuals/, then add one entry here.
// Array order is display order. An empty array hides the entire section.
// Titles are neutral; category/year are omitted until confirmed by the owner.
export const selectedVisuals: SelectedVisual[] = [
  {
    src: "/images/home/Selected Visuals/concert flyer.png",
    title: "Concert flyer",
    alt: "Pink and orange concert flyer with musical notes and a Summer Patio Concert Series schedule.",
    width: 1224,
    height: 1584,
  },
  {
    src: "/images/home/Selected Visuals/FLYER.png",
    title: "Flyer",
    alt: "Blue research recruitment flyer with a phone illustration and information about interviews and workshops for mental health app decision tools.",
    width: 1224,
    height: 1584,
  },
  {
    src: "/images/home/Selected Visuals/warning sign.png",
    title: "Warning sign",
    alt: "Red, black, and white warning sign with a mongoose photograph and instructions to avoid contact with the animals.",
    width: 1224,
    height: 1584,
  },
];

export function visualImageUrl(src: string) {
  // Encode each path segment, including spaces, #, and non-ASCII filenames.
  return `${import.meta.env.BASE_URL}${src.replace(/^\//, "").split("/").map(encodeURIComponent).join("/")}`;
}

export function visualMetadata(item: SelectedVisual) {
  return [item.category, item.year].filter(Boolean).join(" · ");
}
