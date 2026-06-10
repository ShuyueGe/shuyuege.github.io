import type { CSSProperties } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import type { Project } from "../types/project";
import { ProjectNameList } from "./ProjectNameList";

const projectArtworkPaths: Record<string, string> = {
  "ngo-website-redesign": "/images/projects/ngo-hover.png",
  "ai-health-web-app-upgrade": "/images/projects/ai-health-hover.png",
  "restaurant-website-redesign": "/images/projects/restaurant-hover.png",
  "church-ngo-website-redesign-implementation":
    "/images/projects/church-hover.png",
};

const projectHoverBackgrounds: Partial<Record<string, string>> = {
  "ai-health-web-app-upgrade": "#B7C8D8",
  "restaurant-website-redesign": "#FAEDCB",
  "church-ngo-website-redesign-implementation": "#D0ADA7",
};

const projectActiveTitleColors: Record<string, string> = {
  "ngo-website-redesign": "#3F5A3D",
  "ai-health-web-app-upgrade": "#2B4157",
  "restaurant-website-redesign": "#473927",
  "church-ngo-website-redesign-implementation": "#492A28",
};

interface ProjectArtworkProps {
  project: Project;
}

function ProjectArtwork({ project }: ProjectArtworkProps) {
  return (
    <div className="project-artwork" aria-hidden="true">
      <img
        className="project-artwork__image"
        src={projectArtworkPaths[project.slug]}
        alt=""
        decoding="async"
      />
    </div>
  );
}

export function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const clearActiveProject = () => setActiveProject(null);
  const activeProjectIndex = projects.findIndex(
    (project) => project.slug === activeProject,
  );
  const selectedProject =
    activeProjectIndex >= 0 ? projects[activeProjectIndex] : null;
  const selectedProjectBackground = selectedProject
    ? (projectHoverBackgrounds[selectedProject.slug] ??
      `color-mix(in srgb, ${selectedProject.mutedColor} 22%, var(--color-bg))`)
    : "var(--color-bg)";
  const previewStyle = {
    "--projects-active-color": selectedProjectBackground,
    "--projects-active-title-color": selectedProject
      ? projectActiveTitleColors[selectedProject.slug]
      : "var(--color-text)",
  } as CSSProperties;

  return (
    <section
      className={`projects-section projects-section--editorial ${
        selectedProject ? "has-active-project" : ""
      }`}
      id="projects"
      style={previewStyle}
    >
      <svg
        className="projects-section__background"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <filter
            id="projects-watercolor-edge"
            x="-6%"
            y="-22%"
            width="112%"
            height="144%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.009 0.022"
              numOctaves="3"
              seed="19"
              result="edgeNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="edgeNoise"
              scale="19"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacedBackground"
            />
            <feGaussianBlur in="displacedBackground" stdDeviation="8" />
          </filter>
          <filter
            id="projects-wash-soften"
            x="-15%"
            y="-30%"
            width="130%"
            height="160%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.03"
              numOctaves="2"
              seed="29"
              result="washNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="washNoise"
              scale="12"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacedWash"
            />
            <feGaussianBlur in="displacedWash" stdDeviation="5" />
          </filter>
        </defs>

        <g className="projects-section__background-fill">
          <path
            className="projects-section__background-bleed projects-section__background-bleed--left"
            d="M-70 155C38 81 147 164 255 129C353 98 416 144 486 179C360 211 220 218 85 203C13 195-40 184-70 155Z"
            filter="url(#projects-wash-soften)"
          />
          <path
            className="projects-section__background-bleed projects-section__background-bleed--center"
            d="M390 146C503 82 616 160 722 126C818 95 902 138 980 177C839 213 690 213 556 198C483 190 425 174 390 146Z"
            filter="url(#projects-wash-soften)"
          />
          <path
            className="projects-section__background-bleed projects-section__background-bleed--right"
            d="M1040 147C1153 84 1269 157 1376 122C1470 92 1552 124 1652 169C1518 211 1368 214 1230 199C1148 190 1081 173 1040 147Z"
            filter="url(#projects-wash-soften)"
          />
          <path
            className="projects-section__background-base"
            d="M-30 226C66 188 146 231 247 215C351 198 423 228 521 209C627 188 707 225 808 207C916 188 1005 229 1111 205C1224 180 1308 224 1413 198C1495 178 1551 190 1630 176V1000H-30Z"
            filter="url(#projects-watercolor-edge)"
          />
        </g>
        <g
          className="projects-section__background-wash"
          filter="url(#projects-wash-soften)"
        >
          <path
            d="M-62 126C20 77 105 91 164 127C222 163 185 205 106 203C28 202-39 170-62 126Z"
            fill="#B8C8B2"
          />
          <path
            d="M655 112C724 72 804 88 850 131C896 175 850 208 778 199C707 190 663 165 655 112Z"
            fill="#FAEDCB"
          />
          <path
            d="M1284 125C1360 76 1455 91 1511 128C1567 166 1534 205 1451 202C1367 199 1300 174 1284 125Z"
            fill="#AFC7D8"
          />
          <path
            d="M1511 105C1550 80 1594 88 1625 113C1657 140 1637 170 1594 169C1550 168 1518 145 1511 105Z"
            fill="#D0ADA7"
          />
        </g>
      </svg>

      <div className="page-shell">
        <div className="projects-section__intro">
          <h2 className="projects-section__heading">Recent Work</h2>
        </div>

        <div
          className="project-showcase__desktop project-editorial"
          onMouseLeave={clearActiveProject}
        >
          <ProjectNameList
            projects={projects}
            activeProject={activeProject}
            onActivate={setActiveProject}
            onDeactivate={clearActiveProject}
          />
          <div className="project-artwork-layer" aria-hidden="true">
            {selectedProject ? (
              <ProjectArtwork
                project={selectedProject}
                key={selectedProject.slug}
              />
            ) : null}
          </div>
        </div>

        <div className="project-editorial__mobile">
          {projects.map((project, index) => (
            <article className="project-mobile-entry" key={project.slug}>
              <Link to={`/projects/${project.slug}`}>
                <div className="project-mobile-entry__heading">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.tools.join(" · ")}</p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
