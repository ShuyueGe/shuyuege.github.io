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
        <svg className="about-hero__filters" width="0" height="0">
          <defs>
            <filter
              id="watercolor-edge"
              x="-15%"
              y="-15%"
              width="130%"
              height="130%"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.018 0.032"
                numOctaves="2"
                seed="11"
                result="watercolorNoise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="watercolorNoise"
                scale="4"
                xChannelSelector="R"
                yChannelSelector="G"
                result="displacedShape"
              />
              <feGaussianBlur in="displacedShape" stdDeviation="0.65" />
            </filter>
          </defs>
        </svg>

        <svg
          className="about-hero__blob about-hero__blob--green-large"
          viewBox="0 0 200 170"
        >
          <path
            d="M18 93C13 70 27 49 52 42C76 35 89 17 113 21C137 24 146 44 169 51C190 57 194 79 184 101C175 122 154 129 142 148C130 165 102 163 80 154C57 145 45 130 28 118C20 112 18 102 18 93Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="about-hero__blob about-hero__blob--blue"
          viewBox="0 0 200 170"
        >
          <path
            d="M20 65C31 36 61 21 88 30C110 39 128 19 154 28C181 37 190 64 176 87C164 106 171 129 149 145C128 160 105 148 84 153C57 159 29 140 21 116C15 98 13 83 20 65Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="about-hero__blob about-hero__blob--yellow"
          viewBox="0 0 200 170"
        >
          <path
            d="M23 61C34 34 58 24 83 29C105 33 121 21 145 27C171 33 187 55 181 79C176 100 188 117 165 137C142 158 111 151 88 158C62 165 32 145 21 120C12 99 13 82 23 61Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="about-hero__blob about-hero__blob--green-small"
          viewBox="0 0 200 170"
        >
          <path
            d="M30 48C47 24 71 20 94 30C113 38 131 23 153 34C177 46 185 70 172 91C161 109 169 128 145 143C121 158 99 147 77 151C52 154 26 137 20 113C15 91 16 68 30 48Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="about-hero__blob about-hero__blob--pink"
          viewBox="0 0 200 170"
        >
          <path
            d="M22 88C18 62 34 39 59 34C81 29 92 12 116 21C138 30 150 25 169 42C187 59 190 83 176 102C163 120 165 139 139 151C114 162 92 148 70 151C45 154 26 133 21 112C19 103 19 96 22 88Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="about-hero__blob about-hero__blob--left"
          viewBox="0 0 200 170"
        >
          <path
            d="M18 79C24 49 48 32 76 35C101 38 115 18 140 27C166 36 184 59 177 83C171 104 185 120 163 140C141 160 112 151 88 157C61 164 31 146 20 123C13 108 12 94 18 79Z"
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
