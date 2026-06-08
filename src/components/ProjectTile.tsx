import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import type { Project } from "../types/project";
import { ImageWithFallback } from "./ImageWithFallback";

interface ProjectTileProps {
  project: Project;
  image: string;
  imageIndex: number;
  position?: number;
  isActive: boolean;
  alwaysReveal?: boolean;
  onActivate: (slug: string) => void;
  onDeactivate: () => void;
}

export function ProjectTile({
  project,
  image,
  imageIndex,
  position,
  isActive,
  alwaysReveal = false,
  onActivate,
  onDeactivate,
}: ProjectTileProps) {
  const style = {
    "--tile-color": project.mutedColor,
    "--tile-theme": project.themeColor,
  } as CSSProperties;

  return (
    <Link
      className={[
        "project-tile",
        position ? `project-tile--${position}` : "",
        isActive ? "is-active" : "",
        alwaysReveal ? "is-revealed" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
      to={`/projects/${project.slug}`}
      aria-label={`View ${project.title}, preview ${imageIndex + 1}`}
      onMouseEnter={() => onActivate(project.slug)}
      onMouseLeave={onDeactivate}
      onFocus={() => onActivate(project.slug)}
      onBlur={onDeactivate}
    >
      <span className="project-tile__color" aria-hidden="true" />
      <ImageWithFallback
        src={image}
        alt={`${project.title} interface preview ${imageIndex + 1}`}
        label={`${project.shortTitle} preview ${imageIndex + 1}`}
        className="project-tile__image"
      />
      <span className="project-tile__index" aria-hidden="true">
        0{imageIndex + 1}
      </span>
    </Link>
  );
}

