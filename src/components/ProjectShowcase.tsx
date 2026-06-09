import type { CSSProperties, SyntheticEvent } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import type { Project } from "../types/project";
import { ProjectNameList } from "./ProjectNameList";

interface ProjectPreviewProps {
  project: Project;
  index: number;
  compact?: boolean;
}

function ProjectPreview({
  project,
  index,
  compact = false,
}: ProjectPreviewProps) {
  const style = {
    "--preview-theme": project.themeColor,
    "--preview-muted": project.mutedColor,
  } as CSSProperties;

  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.hidden = true;
  };

  return (
    <div
      className={`project-preview ${compact ? "project-preview--compact" : ""}`}
      style={style}
      data-variant={index + 1}
    >
      <div className="project-preview__placeholder" aria-hidden="true">
        <span className="project-preview__shape project-preview__shape--one" />
        <span className="project-preview__shape project-preview__shape--two" />
        <span className="project-preview__shape project-preview__shape--three" />
        <span className="project-preview__screen project-preview__screen--one" />
        <span className="project-preview__screen project-preview__screen--two" />
      </div>
      <img
        className="project-preview__image"
        src={project.heroImage}
        alt={`${project.title} feature preview`}
        onError={handleImageError}
      />
      <div className="project-preview__meta">
        <span>{project.projectType}</span>
        <strong>{project.shortTitle}</strong>
      </div>
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
          <div className="project-feature" aria-live="polite">
            {selectedProject ? (
              <Link
                className="project-feature__link"
                to={`/projects/${selectedProject.slug}`}
                key={selectedProject.slug}
                aria-label={`View ${selectedProject.title} case study`}
              >
                <ProjectPreview
                  project={selectedProject}
                  index={activeProjectIndex}
                />
              </Link>
            ) : (
              <div className="project-feature__idle" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            )}
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
                <ProjectPreview project={project} index={index} compact />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
