import { ImageWithFallback } from "./ImageWithFallback";

export function AboutSection() {
  return (
    <section className="about-section page-shell" id="about">
      <div className="about-section__heading">
        <p className="section-label">UI/UX Design · HCI · Web Experiences</p>
        <h1>Thoughtful digital work, shaped around how people actually live.</h1>
      </div>

      <div className="about-section__portrait">
        <ImageWithFallback
          src="/images/profile-placeholder.jpg"
          alt="Portrait of Shuyue Ge"
          label="Add your portrait"
          eager
        />
        <span className="about-section__portrait-note">
          Designer, researcher, and front-end collaborator
        </span>
      </div>

      <div className="about-section__copy">
        <p>
          I'm a UI/UX and web designer with a background in human-centered
          computing, visual communication, and product thinking. I care about
          making digital experiences feel clear, useful, and alive, especially
          for projects that involve real people, messy information, and
          meaningful services.
        </p>
        <a className="text-link" href="mailto:hello@example.com">
          hello@example.com
        </a>
      </div>
    </section>
  );
}

