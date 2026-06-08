import type { Project } from "../types/project";

interface ProjectMetaProps {
  project: Project;
}

export function ProjectMeta({ project }: ProjectMetaProps) {
  const items = [
    ["Role", project.role],
    ["Tools", project.tools.join(", ")],
    ["Timeline", project.timeline],
    ["Project type", project.projectType],
  ];

  return (
    <dl className="project-meta page-shell">
      {items.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

