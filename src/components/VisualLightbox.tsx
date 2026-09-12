import { useEffect, useId, useRef } from "react";
import type { SelectedVisual } from "../data/selectedVisuals";
import { visualImageUrl, visualMetadata, visualTitle } from "../data/selectedVisuals";

interface VisualLightboxProps {
  items: readonly SelectedVisual[];
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
}

export function VisualLightbox({ items, index, onChange, onClose }: VisualLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const backdropPress = useRef(false);
  const titleId = useId();
  const item = items[index];
  const move = (direction: number) => onChange((index + direction + items.length) % items.length);
  const close = () => {
    // Release modal inertness before the parent restores thumbnail focus.
    dialogRef.current?.close();
    onClose();
  };

  useEffect(() => {
    const dialog = dialogRef.current!;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog className="visual-lightbox" ref={dialogRef} aria-labelledby={titleId}
      onCancel={event => { event.preventDefault(); close(); }}
      onPointerDown={event => { backdropPress.current = event.target === event.currentTarget; }}
      onClick={event => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
        if (outside && backdropPress.current) close();
      }}
      onKeyDown={event => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
        if (event.key === "Tab") {
          const controls = [...event.currentTarget.querySelectorAll<HTMLButtonElement>("button:not(:disabled)")];
          const first = controls[0];
          const last = controls.at(-1);
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
        }
      }}>
      <div className="visual-lightbox__toolbar">
        <button type="button" ref={closeRef} onClick={close} aria-label="Close image">Close <span aria-hidden="true">×</span></button>
      </div>
      <div className="visual-lightbox__stage">
        <img key={item.src} src={visualImageUrl(item.src)} alt={item.alt} width={item.width} height={item.height} decoding="async" />
      </div>
      <div className="visual-lightbox__footer">
        <div className="visual-lightbox__caption" aria-live="polite" aria-atomic="true">
          <h3 id={titleId}>{visualTitle(item)}</h3>
          {visualMetadata(item) && <p>{visualMetadata(item)}</p>}
        </div>
        <div className="visual-lightbox__controls">
          <button type="button" onClick={() => move(-1)} disabled={items.length < 2} aria-label="Previous visual">←</button>
          <button type="button" onClick={() => move(1)} disabled={items.length < 2} aria-label="Next visual">→</button>
        </div>
      </div>
    </dialog>
  );
}
