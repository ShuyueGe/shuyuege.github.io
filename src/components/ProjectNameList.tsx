import { Link } from "react-router-dom";
import type { Project } from "../types/project";

interface ProjectNameListProps {
  projects: readonly (Pick<Project, "slug" | "title"> & {
    tags: readonly string[];
  })[];
  activeProject: string | null;
  onActivate: (slug: string) => void;
  onDeactivate: () => void;
}

export function ProjectNameList({
  projects,
  activeProject,
  onActivate,
  onDeactivate,
}: ProjectNameListProps) {
  return (
    <ol className="project-name-list">
      {projects.map((project, index) => (
        <li
          className={activeProject === project.slug ? "is-active" : ""}
          key={project.slug}
        >
          <Link
            to={`/projects/${project.slug}`}
            onMouseEnter={() => onActivate(project.slug)}
            onFocus={() => onActivate(project.slug)}
            onBlur={onDeactivate}
          >
            <span className="project-name-list__number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="project-name-list__content">
              <strong>{project.title}</strong>
              <small>{project.tags.join(" · ")}</small>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
