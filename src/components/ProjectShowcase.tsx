import { useState } from "react";
import { projects } from "../data/projects";
import { ProjectMosaic } from "./ProjectMosaic";
import { ProjectNameList } from "./ProjectNameList";
import { ProjectTile } from "./ProjectTile";

export function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const clearActiveProject = () => setActiveProject(null);

  return (
    <section className="projects-section" id="projects">
      <div className="page-shell">
        <div className="projects-section__intro">
          <h2>Projects</h2>
        </div>

        <div className="project-showcase__desktop">
          <ProjectNameList
            projects={projects}
            activeProject={activeProject}
            onActivate={setActiveProject}
            onDeactivate={clearActiveProject}
          />
          <ProjectMosaic
            projects={projects}
            activeProject={activeProject}
            onActivate={setActiveProject}
            onDeactivate={clearActiveProject}
          />
        </div>

        <div className="project-showcase__mobile">
          {projects.map((project, index) => (
            <article className="mobile-project" key={project.slug}>
              <div className="mobile-project__heading">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.tools.join(" · ")}</p>
                </div>
              </div>
              <div className="mobile-project__images">
                {project.previewImages.map((image, imageIndex) => (
                  <ProjectTile
                    key={image}
                    project={project}
                    image={image}
                    imageIndex={imageIndex}
                    isActive
                    alwaysReveal
                    onActivate={setActiveProject}
                    onDeactivate={clearActiveProject}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

