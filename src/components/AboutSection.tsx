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
                baseFrequency="0.012 0.026"
                numOctaves="3"
                seed="11"
                result="watercolorNoise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="watercolorNoise"
                scale="7"
                xChannelSelector="R"
                yChannelSelector="G"
                result="displacedShape"
              />
              <feGaussianBlur in="displacedShape" stdDeviation="0.4" />
            </filter>
          </defs>
        </svg>

        <svg
          className="about-hero__blob about-hero__blob--green-large"
          viewBox="0 0 200 170"
        >
          <path
            d="M12 94C7 73 17 52 42 43C66 34 77 13 105 18C130 22 140 43 166 45C188 47 198 68 188 93C179 116 158 126 149 146C138 169 105 166 82 158C56 149 49 132 28 122C17 116 13 104 12 94Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="about-hero__blob about-hero__blob--blue"
          viewBox="0 0 200 170"
        >
          <path
            d="M14 67C25 36 55 16 86 28C109 37 124 14 153 23C181 31 196 58 179 84C166 104 177 128 151 147C128 164 104 148 80 157C50 168 24 145 17 119C11 99 7 84 14 67Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="about-hero__blob about-hero__blob--yellow"
          viewBox="0 0 200 170"
        >
          <path
            d="M17 62C27 35 51 17 80 25C103 31 119 16 146 22C176 29 193 52 184 78C177 99 194 117 167 140C143 161 111 151 86 161C58 172 28 149 17 122C8 100 7 82 17 62Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="about-hero__blob about-hero__blob--green-small"
          viewBox="0 0 200 170"
        >
          <path
            d="M24 48C41 21 70 16 94 27C114 36 132 17 157 30C183 44 190 69 175 92C163 110 174 131 147 147C122 162 98 147 74 154C47 161 20 140 15 113C10 89 10 67 24 48Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="about-hero__blob about-hero__blob--pink"
          viewBox="0 0 200 170"
        >
          <path
            d="M16 89C11 61 28 37 55 32C79 28 88 8 116 18C140 27 151 20 173 40C193 58 195 83 178 104C165 121 169 143 140 155C112 167 91 148 67 156C40 164 20 137 16 113C14 104 14 96 16 89Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="about-hero__blob about-hero__blob--left"
          viewBox="0 0 200 170"
        >
          <path
            d="M10 80C16 47 42 28 75 33C101 37 114 13 144 23C174 34 192 58 182 85C174 107 191 124 165 145C141 165 110 151 84 162C54 174 23 150 13 124C7 108 6 94 10 80Z"
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
