import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./CaseStudyNav.css";

export function CaseStudyNav({ sections }: { sections: { id: string; label: string }[] }) {
  const navRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<string>();
  const { pathname, search, hash } = useLocation();
  // Pages may pass inline arrays; only a change to the actual IDs restarts tracking.
  const sectionIds = JSON.stringify(sections.map(section => section.id));

  const syncOverflow = useCallback(() => {
    const nav = navRef.current;
    if (nav) nav.toggleAttribute("data-overflow-end", nav.scrollWidth - nav.clientWidth - nav.scrollLeft > 1);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const heading = document.getElementById(id);
    if (!heading) return;
    const offset = Number.parseFloat(getComputedStyle(navRef.current!).getPropertyValue("--case-nav-top"));
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
    window.scrollTo({
      top: heading.getBoundingClientRect().top + window.scrollY - offset,
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    const layout = nav?.closest<HTMLElement>(".case-study-layout");
    const content = layout?.querySelector<HTMLElement>(".case-study-layout__content");
    if (!nav || !layout || !content) return;
    const ids: string[] = JSON.parse(sectionIds);
    const targets = ids.flatMap(id => {
      const heading = document.getElementById(id);
      return heading ? [{ id, element: heading.closest("section") ?? heading }] : [];
    });
    const header = document.querySelector(".site-header");
    let observer: IntersectionObserver;
    let endObserver: IntersectionObserver;
    let offset = 0;

    const updateActive = () => {
      // Keep the preceding entry through gaps and unlisted supporting sections.
      let current: string | undefined = targets[0]?.id;
      for (const target of targets) {
        if (target.element.getBoundingClientRect().top <= offset + 1) current = target.id;
      }
      // A short final section may never reach the reading line before page end.
      if (content.getBoundingClientRect().bottom <= window.innerHeight + 1) current = targets.at(-1)?.id;
      setActiveId(current);
    };

    const observe = () => {
      offset = Math.min((header?.getBoundingClientRect().height ?? 76) + 24, window.innerHeight / 3);
      layout.style.setProperty("--case-nav-top", `${offset}px`);
      syncOverflow();
      observer?.disconnect();
      endObserver?.disconnect();
      // A one-pixel reading line detects section entry in either scroll direction,
      // including sections much taller than the viewport and rapid anchor jumps.
      observer = new IntersectionObserver(updateActive, {
        rootMargin: `-${offset}px 0px -${Math.max(0, window.innerHeight - offset - 1)}px 0px`,
        threshold: 0,
      });
      targets.forEach(target => observer.observe(target.element));
      observer.observe(content);
      endObserver = new IntersectionObserver(updateActive, { threshold: [0, 1] });
      if (content.lastElementChild) endObserver.observe(content.lastElementChild);
      updateActive();
    };

    observe();
    const resizeObserver = new ResizeObserver(observe);
    resizeObserver.observe(content);
    if (header) resizeObserver.observe(header);
    window.addEventListener("resize", observe);
    return () => {
      observer.disconnect();
      endObserver.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("resize", observe);
      layout.style.removeProperty("--case-nav-top");
    };
  }, [sectionIds, syncOverflow]);

  useEffect(() => {
    const ids: string[] = JSON.parse(sectionIds);
    // HashRouter keeps the route and the section fragment separate.
    const id = ids.find(value => `#${value}` === hash || `#${encodeURIComponent(value)}` === hash);
    if (id) scrollToSection(id);
  }, [pathname, hash, sectionIds, scrollToSection]);

  useEffect(() => {
    const nav = navRef.current;
    const active = nav?.querySelector<HTMLElement>('[aria-current="location"]');
    if (!nav || !active) return;
    const item = active.getBoundingClientRect();
    const bounds = nav.getBoundingClientRect();
    const trailingInset = nav.hasAttribute("data-overflow-end") ? 16 : 0;
    // Reveal the active entry inside a long list without scrolling the article.
    nav.scrollBy({
      top: item.top < bounds.top ? item.top - bounds.top : Math.max(0, item.bottom - bounds.bottom),
      left: item.left < bounds.left ? item.left - bounds.left : Math.max(0, item.right - bounds.right + trailingInset),
      behavior: "instant",
    });
  }, [activeId]);

  return <nav ref={navRef} className="case-study-nav" aria-label="Case study sections" onScroll={syncOverflow}>
    {sections.map(section => <Link
      key={section.id}
      to={{ pathname, search, hash: `#${section.id}` }}
      aria-current={activeId === section.id ? "location" : undefined}
      onClick={event => {
        if (hash === `#${section.id}` && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
          event.preventDefault();
          scrollToSection(section.id);
        }
      }}
    >{section.label}</Link>)}
  </nav>;
}
