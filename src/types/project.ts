export interface ProjectSection {
  id: "overview" | "challenge" | "process" | "solution";
  title: string;
  lead: string;
  paragraphs: string[];
  images?: string[];
}

export interface InsightTableVisual {
  type: "insight-table";
  title: string;
  intro: string;
  columns: [string, string, string];
  rows: Array<[string, string, string]>;
}

export interface ProcessTimelineVisual {
  type: "process-timeline";
  title: string;
  intro: string;
  steps: Array<{
    title: string;
    detail: string;
  }>;
}

export interface TextChartVisual {
  type: "text-chart";
  title: string;
  intro: string;
  items: Array<{
    label: string;
    detail: string;
    emphasis?: string;
  }>;
}

export type StructuredVisual =
  | InsightTableVisual
  | ProcessTimelineVisual
  | TextChartVisual;

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  summary: string;
  description: string;
  role: string;
  tools: string[];
  timeline: string;
  projectType: string;
  themeColor: string;
  accentColor: string;
  mutedColor: string;
  previewImages: [string, string];
  heroImage: string;
  sections: ProjectSection[];
  structuredVisuals: StructuredVisual[];
  reflection: {
    learned: string;
    next: string;
    approach: string;
  };
}

