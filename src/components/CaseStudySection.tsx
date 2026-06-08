import type { ProjectSection } from "../types/project";
import { ImageWithFallback } from "./ImageWithFallback";

interface CaseStudySectionProps {
  section: ProjectSection;
  projectTitle: string;
}

export function CaseStudySection({
  section,
  projectTitle,
}: CaseStudySectionProps) {
  return (
    <section className={`case-section case-section--${section.id}`}>
      <div className="case-section__heading">
        <p className="section-label">{section.title}</p>
        <h2>{section.lead}</h2>
      </div>
      <div className="case-section__body">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {section.images ? (
        <div className="case-section__media">
          {section.images.map((image, index) => (
            <ImageWithFallback
              key={image}
              src={image}
              alt={`${projectTitle} design screen ${index + 1}`}
              label={`Design screen ${index + 1}`}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}

