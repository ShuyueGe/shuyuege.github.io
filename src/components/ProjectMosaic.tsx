import type { Project } from "../types/project";
import { ProjectTile } from "./ProjectTile";

interface ProjectMosaicProps {
  projects: Project[];
  activeProject: string | null;
  onActivate: (slug: string) => void;
  onDeactivate: () => void;
}

const placement = [
  [0, 0],
  [1, 0],
  [2, 0],
  [3, 0],
  [0, 1],
  [1, 1],
  [2, 1],
  [3, 1],
] as const;

export function ProjectMosaic({
  projects,
  activeProject,
  onActivate,
  onDeactivate,
}: ProjectMosaicProps) {
  return (
    <div className="project-mosaic" aria-label="Project preview mosaic">
      {placement.map(([projectIndex, imageIndex], positionIndex) => {
        const project = projects[projectIndex];

        return (
          <ProjectTile
            key={`${project.slug}-${imageIndex}`}
            project={project}
            image={project.previewImages[imageIndex]}
            imageIndex={imageIndex}
            position={positionIndex + 1}
            isActive={activeProject === project.slug}
            onActivate={onActivate}
            onDeactivate={onDeactivate}
          />
        );
      })}
    </div>
  );
}

