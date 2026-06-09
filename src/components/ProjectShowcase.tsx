import type { CSSProperties, SyntheticEvent } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import type { Project } from "../types/project";
import { ProjectNameList } from "./ProjectNameList";

const projectArtworkPaths: Record<string, string> = {
  "ngo-website-redesign": "/images/projects/ngo-hover.webp",
  "ai-health-web-app-upgrade": "/images/projects/ai-health-hover.webp",
  "restaurant-website-redesign": "/images/projects/restaurant-hover.webp",
  "church-ngo-website-redesign-implementation":
    "/images/projects/church-hover.webp",
};

interface ProjectArtworkProps {
  project: Project;
  index: number;
}

function ProjectArtwork({ project, index }: ProjectArtworkProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const style = {
    "--artwork-theme": project.themeColor,
    "--artwork-muted": project.mutedColor,
  } as CSSProperties;

  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.hidden = true;
  };

  return (
    <div
      className={`project-artwork ${imageLoaded ? "has-image" : ""}`}
      data-variant={index + 1}
      style={style}
      aria-hidden="true"
    >
      <div className="project-artwork__fallback">
        <span className="project-artwork__wash" />
        <span className="project-artwork__orbit" />
        <span className="project-artwork__arc" />
        <span className="project-artwork__glyph">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <img
        className="project-artwork__image"
        src={projectArtworkPaths[project.slug]}
        alt=""
        onLoad={() => setImageLoaded(true)}
        onError={handleImageError}
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
          <div className="project-artwork-layer" aria-live="polite">
            {selectedProject ? (
              <ProjectArtwork
                project={selectedProject}
                index={activeProjectIndex}
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
