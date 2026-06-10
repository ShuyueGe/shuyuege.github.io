export function AboutSection() {
  const focusAreas = [
    "Product Design",
    "UX Research",
    "Information Architecture",
    "Responsive Web Design",
    "AI-assisted Prototyping",
    "Visual Systems",
  ];

  return (
    <section className="about-section about-hero page-shell" id="about">
      <div className="about-hero__watercolor" aria-hidden="true">
        <svg
          className="about-hero__blob about-hero__blob--green-large"
          viewBox="0 0 200 170"
        >
          <path
            d="M22 94C17 58 43 32 79 29C109 27 119 7 145 15C174 24 190 58 185 91C181 126 157 152 123 159C85 167 49 151 31 123C25 113 23 104 22 94Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="about-hero__blob about-hero__blob--blue"
          viewBox="0 0 200 170"
        >
          <path
            d="M18 77C22 43 55 21 88 28C113 33 130 12 158 30C185 48 194 83 177 112C160 142 126 159 92 153C57 147 23 127 17 98C15 91 16 84 18 77Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="about-hero__blob about-hero__blob--yellow"
          viewBox="0 0 200 170"
        >
          <path
            d="M25 63C42 28 79 22 109 29C137 35 163 25 179 53C195 81 180 119 156 139C130 160 91 161 58 143C26 126 8 96 25 63Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="about-hero__blob about-hero__blob--green-small"
          viewBox="0 0 200 170"
        >
          <path
            d="M31 50C53 20 91 23 117 31C143 39 171 38 180 67C190 98 166 132 136 147C104 163 63 151 41 127C19 104 12 76 31 50Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="about-hero__blob about-hero__blob--pink"
          viewBox="0 0 200 170"
        >
          <path
            d="M24 89C20 55 43 29 76 24C107 20 120 38 147 36C174 34 190 60 184 90C178 122 151 149 116 155C81 161 47 145 31 118C26 109 23 99 24 89Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="about-hero__blob about-hero__blob--left"
          viewBox="0 0 200 170"
        >
          <path
            d="M22 82C27 48 56 26 88 29C117 32 133 18 159 35C185 53 190 87 174 114C157 143 121 157 88 151C53 145 23 124 18 98C17 93 19 87 22 82Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="about-hero__content">
        <p className="about-hero__intro">
          Hi, I&apos;m <mark className="about-hero__name">Shu</mark>.
        </p>
        <h1 className="about-hero__title">
          <span className="about-hero__title-primary">Product Designer</span>
          <span className="about-hero__title-secondary">
            for clear, usable digital experiences.
          </span>
        </h1>
        <p className="about-hero__description">
          I turn complex content and user needs into structured interfaces and
          working prototypes across web and mobile, using AI-assisted workflows
          to move from research to implementation.
        </p>

        <ul className="about-hero__focus" aria-label="Design focus areas">
          {focusAreas.map((focusArea) => (
            <li key={focusArea}>{focusArea}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
