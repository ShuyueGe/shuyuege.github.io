import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import type { Project } from "../types/project";
import { ImageWithFallback } from "./ImageWithFallback";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const style = {
    "--project-theme": project.themeColor,
    "--project-muted": project.mutedColor,
  } as CSSProperties;

  return (
    <section className="project-hero page-shell" style={style}>
      <div className="project-hero__copy">
        <Link className="back-link" to="/?section=projects">
          <span aria-hidden="true">←</span> Back to projects
        </Link>
        <p className="project-hero__type">{project.projectType}</p>
        <h1>{project.title}</h1>
        <h2>{project.subtitle}</h2>
        <p>{project.summary}</p>
      </div>
      <ImageWithFallback
        src={project.heroImage}
        alt={`${project.title} hero presentation`}
        label={`${project.shortTitle} hero image`}
        className="project-hero__image"
        eager
      />
    </section>
  );
}

