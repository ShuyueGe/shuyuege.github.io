export function CaseStudyNav({ sections }: { sections: { id: string; label: string }[] }) {
  return <nav className="case-nav" aria-label="Case study sections">
    {sections.map(section => <button type="button" key={section.id} onClick={() => {
      const heading = document.getElementById(section.id);
      if (!heading) return;
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
      heading.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    }}>{section.label}</button>)}
  </nav>;
}
