import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { selectedVisuals, visualImageUrl, visualMetadata, visualTitle } from "../data/selectedVisuals";
import type { SelectedVisual } from "../data/selectedVisuals";
import { VisualLightbox } from "./VisualLightbox";
import "./SelectedVisuals.css";

export function SelectedVisuals({ items = selectedVisuals }: { items?: readonly SelectedVisual[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [edges, setEdges] = useState({ start: true, end: true });
  const railRef = useRef<HTMLUListElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const updateEdges = () => setEdges({
      start: rail.scrollLeft <= 1,
      end: rail.scrollWidth - rail.clientWidth - rail.scrollLeft <= 1,
    });
    updateEdges();
    const observer = new ResizeObserver(updateEdges);
    observer.observe(rail);
    for (const child of rail.children) observer.observe(child);
    rail.addEventListener("scroll", updateEdges, { passive: true });
    const onWheel = (event: WheelEvent) => {
      // Native horizontal/shift scrolling and browser zoom keep their normal behavior.
      if (event.ctrlKey || event.metaKey || event.shiftKey || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return;
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? rail.clientWidth : 1;
      const delta = event.deltaY * unit;
      const maxScroll = rail.scrollWidth - rail.clientWidth;
      const canScroll = delta > 0 ? rail.scrollLeft < maxScroll - 1 : rail.scrollLeft > 1;
      // At either end the wheel continues scrolling the page, avoiding a scroll trap.
      if (!canScroll) return;
      event.preventDefault();
      rail.scrollBy({ left: delta, behavior: "instant" });
    };
    rail.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      observer.disconnect();
      rail.removeEventListener("scroll", updateEdges);
      rail.removeEventListener("wheel", onWheel);
    };
  }, [items]);

  if (!items.length) return null;

  const scroll = (direction: number) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({
      left: direction * rail.clientWidth * 0.8,
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };
  const close = () => {
    setActiveIndex(null);
    openerRef.current?.focus({ preventScroll: true });
  };

  return (
    <section className="selected-visuals page-shell" id="selected-visuals" aria-labelledby="selected-visuals-title">
      <div className="selected-visuals__heading">
        <h2 id="selected-visuals-title">Selected Visuals</h2>
        {!(edges.start && edges.end) && <div className="selected-visuals__controls" aria-label="Gallery scrolling">
          <button type="button" disabled={edges.start} onClick={() => scroll(-1)} aria-label="Scroll visuals left" aria-controls="selected-visuals-rail">←</button>
          <button type="button" disabled={edges.end} onClick={() => scroll(1)} aria-label="Scroll visuals right" aria-controls="selected-visuals-rail">→</button>
        </div>}
      </div>
      <ul className="selected-visuals__rail" id="selected-visuals-rail" ref={railRef}>
        {items.map((item, index) => (
          <li className="selected-visuals__item" key={item.src} style={{ "--visual-ratio": item.width / item.height } as CSSProperties}>
            <button className="selected-visuals__work" type="button" aria-haspopup="dialog" aria-label={`View ${visualTitle(item)}: ${item.alt}`} onClick={event => {
              openerRef.current = event.currentTarget;
              setActiveIndex(index);
            }}>
              <img src={visualImageUrl(item.src)} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" draggable={false} />
              <span className="selected-visuals__caption" aria-hidden="true">
                <span className="selected-visuals__title">{visualTitle(item)}</span>
                {visualMetadata(item) && <span className="selected-visuals__meta">{visualMetadata(item)}</span>}
              </span>
            </button>
          </li>
        ))}
      </ul>
      {activeIndex !== null && items[activeIndex] && <VisualLightbox
        items={items}
        index={activeIndex}
        onChange={setActiveIndex}
        onClose={close}
      />}
    </section>
  );
}
