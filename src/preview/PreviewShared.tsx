import { useEffect, useId, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "../components/Layout";
import "./PreviewV2.css";

export function PreviewShell({ project, title, sections, children }: {
  project: "mori" | "patsy" | "bookthing"; title: string;
  sections: readonly { id: string; label: string }[]; children: ReactNode;
}) {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const priorTitle = document.title;
    document.title = `${title} · Preview v2 | Shuyue Ge`;
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    robots.dataset.previewV2 = "true";
    document.head.append(robots);
    return () => { robots.remove(); document.title = priorTitle; };
  }, [title]);
  useEffect(() => {
    const id = decodeURIComponent(hash.slice(1));
    if (!sections.some(section => section.id === id)) return;
    const heading = document.getElementById(id);
    if (!heading) return;
    heading.focus({ preventScroll: true });
    heading.scrollIntoView({ behavior: "instant", block: "start" });
  }, [hash, sections]);
  return <Layout className={`preview-v2 preview-v2--${project}`}>
    <article className="v2-article" aria-label={`${title} case study preview`}>
      <div className="v2-utility">
        <Link className="back-link" to="/?section=projects">← Back to projects</Link>
        <span className="v2-preview-label">Preview v2</span>
      </div>
      <nav className="v2-section-nav" aria-label="Case study sections">
        {sections.map(section => <Link key={section.id} to={{ pathname, hash: `#${section.id}` }}
          aria-current={hash === `#${section.id}` ? "location" : undefined}
          onClick={event => {
            if (hash === `#${section.id}` && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
              event.preventDefault();
              const heading = document.getElementById(section.id);
              heading?.focus({ preventScroll: true });
              heading?.scrollIntoView({ behavior: "instant", block: "start" });
            }
          }}
        >{section.label}</Link>)}
      </nav>
      {children}
    </article>
  </Layout>;
}

export function PreviewMeta({ items }: { items: readonly { label: string; value: string }[] }) {
  return <dl className="v2-meta">{items.map(item => <div key={item.label}>
    <dt>{item.label}</dt><dd>{item.value}</dd>
  </div>)}</dl>;
}

export function SectionHeading({ id, kicker, title, children }: {
  id: string; kicker?: string; title: string; children?: ReactNode;
}) {
  return <header className="v2-section-heading">
    {kicker && <p className="v2-label">{kicker}</p>}
    <h2 id={id} tabIndex={-1}>{title}</h2>
    {children}
  </header>;
}

export function assetUrl(src: string) {
  return `${import.meta.env.BASE_URL}${src.replace(/^\//, "").split("/").map(encodeURIComponent).join("/")}`;
}

export function EvidenceImage({ src, fullSrc, alt, caption, width, height, className = "", crop, regions }: {
  src: string; fullSrc?: string; alt: string; caption?: string; width: number; height: number;
  className?: string; crop?: { ratio: string; position?: string };
  regions?: readonly { left: number; top: number; width: number; height: number }[];
}) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const captionId = useId();
  const url = assetUrl(src);
  const fullUrl = assetUrl(fullSrc || src);
  useEffect(() => {
    if (!open) return;
    const modal = dialog.current!;
    const previousOverflow = document.body.style.overflow;
    modal.showModal();
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    return () => {
      modal.close();
      document.body.style.overflow = previousOverflow;
      trigger.current?.focus({ preventScroll: true });
    };
  }, [open]);
  return <figure className={`v2-evidence ${className}`}>
    <button ref={trigger} className="v2-image-trigger" type="button" onClick={() => setOpen(true)}
      aria-label={`View full image: ${alt}`}>
      {regions ? <span className="v2-source-regions">{regions.map((region, index) =>
        <span className="v2-source-window" key={`${region.left}-${region.top}`} style={{ aspectRatio: `${region.width} / ${region.height}` }}>
          <img src={url} alt={index === 0 ? alt : ""} aria-hidden={index > 0 ? true : undefined}
            width={width} height={height} loading="lazy" decoding="async"
            style={{ position: "absolute", width: `${width / region.width * 100}%`, maxWidth: "none", height: "auto", left: `${-region.left / region.width * 100}%`, top: `${-region.top / region.height * 100}%` }} />
        </span>)}</span> : <img src={url} alt={alt} width={width} height={height} loading="lazy" decoding="async"
          style={crop ? { aspectRatio: crop.ratio, objectFit: "cover", objectPosition: crop.position ?? "top", height: "auto" } : undefined} />}
      <span className="v2-image-hint">View full image ↗</span>
    </button>
    {caption && <figcaption>{caption}</figcaption>}
    {open && <dialog className="v2-dialog" ref={dialog} aria-labelledby={captionId}
      onCancel={event => { event.preventDefault(); setOpen(false); }}
      onClick={event => { if (event.target === event.currentTarget) {
        const box = event.currentTarget.getBoundingClientRect();
        if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) setOpen(false);
      } }}>
      <div className="v2-dialog-toolbar"><p id={captionId}>{caption || alt}</p>
        <button ref={closeButton} type="button" onClick={() => setOpen(false)}>Close ×</button></div>
      <img src={fullUrl} alt={alt} />
      <a className="v2-source-link" href={fullUrl} target="_blank" rel="noopener noreferrer">Open original image in a new tab ↗</a>
    </dialog>}
  </figure>;
}
