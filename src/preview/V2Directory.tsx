import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./V2Directory.css";

export function V2Directory({ sections }: { sections: readonly { id: string; label: string }[] }) {
  const rail = useRef<HTMLDivElement>(null);
  const nav = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<string>();
  const { pathname, search, hash } = useLocation();
  const sectionIds = JSON.stringify(sections.map(section => section.id));
  const syncOverflow = useCallback(() => {
    const element = nav.current;
    if (element) element.toggleAttribute("data-overflow-end", element.scrollWidth - element.clientWidth - element.scrollLeft > 1);
  }, []);
  const scrollToSection = useCallback((id: string) => {
    const heading = document.getElementById(id);
    if (!heading) return;
    const offset = Number.parseFloat(getComputedStyle(rail.current!).getPropertyValue("--v2-directory-top")) || 100;
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
    window.scrollTo({ top: heading.getBoundingClientRect().top + scrollY - offset,
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }, []);
  useEffect(() => {
    const article = rail.current?.closest<HTMLElement>(".v2-article");
    if (!article || !rail.current) return;
    const targets: { id: string; element: HTMLElement }[] = (JSON.parse(sectionIds) as string[]).flatMap(id => {
      const heading = document.getElementById(id);
      return heading ? [{ id, element: heading.closest<HTMLElement>("section") ?? heading }] : [];
    });
    const header = document.querySelector(".site-header");
    let offset = 100, frame = 0;
    const updateActive = () => {
      frame = 0;
      let current: string | undefined = targets[0]?.id;
      for (const target of targets) if (target.element.getBoundingClientRect().top <= offset + 1) current = target.id;
      if (scrollY + innerHeight >= document.documentElement.scrollHeight - 1) current = targets.at(-1)?.id;
      setActiveId(current);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(updateActive); };
    const measure = () => {
      offset = Math.min((header?.getBoundingClientRect().height ?? 76) + 24, innerHeight / 3);
      rail.current?.style.setProperty("--v2-directory-top", offset + "px");
      rail.current?.style.setProperty("--v2-directory-start", (targets[0]?.element.getBoundingClientRect().top ?? 0) - article.getBoundingClientRect().top + "px");
      syncOverflow(); updateActive();
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(article);
    if (header) observer.observe(header);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", measure); };
  }, [sectionIds, syncOverflow]);
  useEffect(() => {
    const id = (JSON.parse(sectionIds) as string[]).find(id => hash === "#" + id || hash === "#" + encodeURIComponent(id));
    let secondFrame = 0;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => { if (id) scrollToSection(id); });
    });
    return () => { cancelAnimationFrame(firstFrame); cancelAnimationFrame(secondFrame); };
  }, [pathname, hash, sectionIds, scrollToSection]);
  useEffect(() => {
    const element = nav.current, active = element?.querySelector<HTMLElement>('[aria-current="location"]');
    if (!element || !active) return;
    const item = active.getBoundingClientRect(), bounds = element.getBoundingClientRect();
    element.scrollBy({ top: item.top < bounds.top ? item.top - bounds.top : Math.max(0, item.bottom - bounds.bottom),
      left: item.left < bounds.left ? item.left - bounds.left : Math.max(0, item.right - bounds.right + (element.hasAttribute("data-overflow-end") ? 16 : 0)), behavior: "instant" });
  }, [activeId]);
  return <div ref={rail} className="v2-directory"><nav ref={nav} className="v2-section-nav" aria-label="Case study sections" onScroll={syncOverflow}>
    {sections.map(section => <Link key={section.id} to={{ pathname, search, hash: "#" + section.id }}
      aria-current={activeId === section.id ? "location" : undefined} onClick={event => {
        if (hash === "#" + section.id && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
          event.preventDefault(); scrollToSection(section.id);
        }
      }}>{section.label}</Link>)}
  </nav></div>;
}
