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
            x="-4%"
            y="-8%"
            width="108%"
            height="116%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.006 0.025"
              numOctaves="2"
              seed="19"
              result="edgeNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="edgeNoise"
              scale="17"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacedBackground"
            />
            <feGaussianBlur in="displacedBackground" stdDeviation="4.5" />
          </filter>
          <filter
            id="projects-wash-soften"
            x="-15%"
            y="-30%"
            width="130%"
            height="160%"
          >
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>

        <path
          className="projects-section__background-fill"
          d="M0 128C112 69 210 151 330 107C451 62 564 139 692 100C817 62 925 146 1047 105C1171 64 1296 139 1415 94C1491 65 1545 88 1600 66V1000H0Z"
          filter="url(#projects-watercolor-edge)"
        />
        <g
          className="projects-section__background-wash"
          filter="url(#projects-wash-soften)"
        >
          <path
            d="M-35 92C94 26 232 133 365 88C491 46 604 127 725 93C831 63 910 90 993 124C773 166 548 151 331 157C183 161 58 145-35 92Z"
            fill="#B8C8B2"
          />
          <path
            d="M581 102C737 42 847 135 989 86C1118 41 1245 138 1380 91C1471 59 1540 68 1634 99C1511 151 1362 157 1228 146C1034 130 827 179 581 102Z"
            fill="#AFC7D8"
          />
          <path
            d="M1054 111C1162 70 1266 119 1364 91C1452 66 1532 83 1619 124C1505 161 1394 158 1288 151C1198 145 1122 153 1054 111Z"
            fill="#FAEDCB"
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
