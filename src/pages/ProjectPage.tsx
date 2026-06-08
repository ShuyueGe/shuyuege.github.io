import type { CSSProperties } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CaseStudySection } from "../components/CaseStudySection";
import { Footer } from "../components/Footer";
import { InsightTable } from "../components/InsightTable";
import { Navbar } from "../components/Navbar";
import { ProcessTimeline } from "../components/ProcessTimeline";
import { ProjectHero } from "../components/ProjectHero";
import { ProjectMeta } from "../components/ProjectMeta";
import { TextChart } from "../components/TextChart";
import { getProjectBySlug, projects } from "../data/projects";
import { NotFoundPage } from "./NotFoundPage";

export function ProjectPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Shuyue Ge`;
    }
  }, [project]);

  if (!project) {
    return <NotFoundPage />;
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const style = {
    "--project-theme": project.themeColor,
    "--project-muted": project.mutedColor,
  } as CSSProperties;

  return (
    <div className="project-page" style={style}>
      <Navbar />
      <main>
        <ProjectHero project={project} />
        <ProjectMeta project={project} />

        <div className="case-study page-shell">
          {project.sections.map((section) => (
            <CaseStudySection
              key={section.id}
              section={section}
              projectTitle={project.title}
            />
          ))}

          {project.structuredVisuals.map((visual) => {
            if (visual.type === "insight-table") {
              return <InsightTable key={visual.title} visual={visual} />;
            }

            if (visual.type === "process-timeline") {
              return <ProcessTimeline key={visual.title} visual={visual} />;
            }

            return <TextChart key={visual.title} visual={visual} />;
          })}

          <section className="reflection-section">
            <div>
              <p className="section-label">Reflection</p>
              <h2>What this project changed in my practice.</h2>
            </div>
            <dl>
              <div>
                <dt>What I learned</dt>
                <dd>{project.reflection.learned}</dd>
              </div>
              <div>
                <dt>What I would improve next</dt>
                <dd>{project.reflection.next}</dd>
              </div>
              <div>
                <dt>What it shows</dt>
                <dd>{project.reflection.approach}</dd>
              </div>
            </dl>
          </section>

          <nav className="next-project" aria-label="Next project">
            <span>Next case study</span>
            <Link to={`/projects/${nextProject.slug}`}>
              {nextProject.title}
              <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  );
}

