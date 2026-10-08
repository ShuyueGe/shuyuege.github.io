import { useLayoutEffect, useRef } from "react";

export function AboutSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const title = titleRef.current;
    const description = descriptionRef.current;
    if (!title || !description) return;
    let active = true;

    // Align the introduction to the longest rendered title line at every width.
    const updateWidth = () => {
      if (!active) return;
      const bounds = title.getBoundingClientRect();
      const textNodes = document.createTreeWalker(title, NodeFilter.SHOW_TEXT);
      let right = bounds.left;
      while (textNodes.nextNode()) {
        if (!textNodes.currentNode.textContent?.trim()) continue;
        const range = document.createRange();
        range.selectNodeContents(textNodes.currentNode);
        for (const line of range.getClientRects()) right = Math.max(right, line.right);
      }
      const width = Math.min(bounds.width, right - bounds.left);
      description.style.setProperty("--about-description-width", width + "px");
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(title);
    for (const line of title.children) observer.observe(line);
    title.addEventListener("transitionend", updateWidth);
    void document.fonts.ready.then(updateWidth);
    return () => {
      active = false;
      observer.disconnect();
      title.removeEventListener("transitionend", updateWidth);
    };
  }, []);
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
        <img
          className="about-hero__watercolor-image"
          src="/images/home/homepage-watercolor-bg.png"
          alt=""
          decoding="async"
        />
      </div>

      <div className="about-hero__content">
        <p className="about-hero__intro">
          Hi, I&apos;m <mark className="about-hero__name">Shu</mark>.
        </p>
        <h1 className="about-hero__title" ref={titleRef}>
          <span className="about-hero__title-primary">Product Designer</span>
          <span className="about-hero__title-secondary">
            for clear, usable digital experiences.
          </span>
        </h1>
        <p className="about-hero__description" ref={descriptionRef}>
          I have experience shipping improvements to an AI-native product and translating qualitative user research into interaction design decisions.
          <br />
          My work focuses on how people understand, use, and trust technology.
          <br />
          I’m graduating from UMBC in December 2026 with an M.S. in Human-Centered Computing.
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
