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
  "ai-health-web-app-upgrade": "#E3EEF2",
  "restaurant-website-redesign": "#F3EAD5",
  "church-ngo-website-redesign-implementation": "#EADCD8",
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
