import type { CSSProperties } from "react";
import { useRef, useState } from "react";
import { selectedVisuals, visualImageUrl, visualMetadata, visualTitle } from "../data/selectedVisuals";
import type { SelectedVisual } from "../data/selectedVisuals";
import { VisualLightbox } from "./VisualLightbox";
import "./SelectedVisuals.css";

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
      <div className="selected-visuals__heading">
        <h2 id="selected-visuals-title">Selected Visuals</h2>
      </div>
      <ul className="selected-visuals__wall">
        {items.map((item, index) => (
          <li className={`selected-visuals__item selected-visuals__item--${item.layout}`} key={item.src}
            data-size={item.size} data-thumbnail={item.thumbnail}
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
