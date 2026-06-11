import { useEffect } from "react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Layout } from "../components/Layout";

const visualDesignImages = Array.from({ length: 3 }, (_, index) => ({
  src: `/images/about/visual-design-${index + 1}.png`,
  label: `Visual design placeholder ${index + 1}`,
}));

const photographyImages = Array.from({ length: 9 }, (_, index) => ({
  src: `/images/about/photo-${index + 1}.png`,
  label: `Photography placeholder ${index + 1}`,
}));

export function AboutPage() {
  useEffect(() => {
    document.title = "About Me | Shuyue Ge";
  }, []);

  const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <Layout className="about-page">
      <section className="about-page__intro page-shell">
        <h1 className="about-page__heading">About Me</h1>
        <div className="about-page__copy">
          <p>
            Placeholder: Add a short introduction about my design background
            here.
          </p>
          <p>
            Placeholder: Describe the kinds of problems, people, or contexts I
            enjoy designing for.
          </p>
          <p>
            Placeholder: Share a brief note about how I work and what I hope to
            explore next.
          </p>
        </div>
        <a
          className="about-page__resume"
          href={resumeHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
          <span aria-hidden="true">↗</span>
        </a>
      </section>

      <AboutGallery
        title="VISUAL DESIGN"
        images={visualDesignImages}
        variant="visual"
      />
      <AboutGallery
        title="PHOTOGRAPHY"
        images={photographyImages}
        variant="photography"
      />
    </Layout>
  );
}

interface AboutGalleryProps {
  title: string;
  images: Array<{
    src: string;
    label: string;
  }>;
  variant: "visual" | "photography";
}

function AboutGallery({ title, images, variant }: AboutGalleryProps) {
  return (
    <section className="about-gallery page-shell">
      <h2>{title}</h2>
      <div
        className={`about-gallery__grid about-gallery__grid--${variant}`}
      >
        {images.map((image) => (
          <ImageWithFallback
            key={image.src}
            src={image.src}
            alt={image.label}
            label={image.label}
            className="about-gallery__image"
          />
        ))}
      </div>
    </section>
  );
}
