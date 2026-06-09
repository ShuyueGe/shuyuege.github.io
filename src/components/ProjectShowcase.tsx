import type { CSSProperties } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ProjectNameList } from "./ProjectNameList";

const projectArtworkPaths: Record<string, string> = {
  "ngo-website-redesign": "/images/projects/ngo-hover.png",
  "ai-health-web-app-upgrade": "/images/projects/ai-health-hover.png",
  "restaurant-website-redesign": "/images/projects/restaurant-hover.png",
  "church-ngo-website-redesign-implementation":
    "/images/projects/church-hover.png",
};

export function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const clearActiveProject = () => setActiveProject(null);
  const activeProjectIndex = projects.findIndex(
    (project) => project.slug === activeProject,
  );
  const selectedProject =
    activeProjectIndex >= 0 ? projects[activeProjectIndex] : null;
  const previewStyle = {
    "--projects-active-color":
      selectedProject?.mutedColor ?? "var(--color-primary-soft)",
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
          <h2>Projects</h2>
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
            {projects.map((project) => (
              <img
                className={`project-artwork__image ${
                  activeProject === project.slug ? "is-active" : ""
                }`}
                src={projectArtworkPaths[project.slug]}
                alt=""
                decoding="async"
                key={project.slug}
              />
            ))}
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
