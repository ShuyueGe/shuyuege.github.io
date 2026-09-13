import type { CSSProperties } from "react";
import { useRef, useState } from "react";
import { selectedVisuals, visualClusters, visualImageUrl, visualMetadata, visualTitle } from "../data/selectedVisuals";
import type { SelectedVisual } from "../data/selectedVisuals";
import { VisualLightbox } from "./VisualLightbox";
import "./SelectedVisuals.css";

const placementOrder = { lead: 0, upper: 1, detail: 2, lower: 3 };

export function SelectedVisuals({ items = selectedVisuals }: { items?: readonly SelectedVisual[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  if (!items.length) return null;

  const close = () => {
    setActiveIndex(null);
    openerRef.current?.focus({ preventScroll: true });
  };

  return (
    <section className="selected-visuals page-shell" id="selected-visuals" aria-labelledby="selected-visuals-title">
      <div className="selected-visuals__frame">
        <div className="selected-visuals__heading">
          <h2 id="selected-visuals-title">Selected Visuals</h2>
        </div>
        <div className="selected-visuals__wall">
          {visualClusters.map(cluster => {
            // Retain each source-array index when grouping for display, so the
            // existing lightbox continues opening/cycling through the originals.
            const works = items.map((item, index) => ({ item, index }))
              .filter(({ item }) => item.cluster === cluster)
              .sort((a, b) => placementOrder[a.item.placement] - placementOrder[b.item.placement]);
            if (!works.length) return null;
            const pairs = cluster === "center" ? [works] : [works.slice(0, 2), works.slice(2)];
            return <div className={`selected-visuals__cluster selected-visuals__cluster--${cluster}`} key={cluster}>
              {pairs.filter(pair => pair.length).map((pair, pairIndex) => <ul className="selected-visuals__pair" key={pairIndex} role="list">
              {pair.map(({ item, index }) => (
                <li className="selected-visuals__item" key={item.src}
                  data-placement={item.placement} data-size={item.size} data-thumbnail={item.thumbnail}
                  style={{ "--source-ratio": item.width / item.height } as CSSProperties}>
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
              </ul>)}
            </div>;
          })}
        </div>
      </div>
      {activeIndex !== null && items[activeIndex] && <VisualLightbox
        items={items}
        index={activeIndex}
        onChange={setActiveIndex}
        onClose={close}
      />}
    </section>
  );
}
