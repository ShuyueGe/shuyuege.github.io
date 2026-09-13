import { useState } from "react";

export interface MoriAsset {
  id: string;
  state: string;
  status: string;
  description: string;
  // Add only verified historical exports; alt must describe the supplied image.
  image?: { src: string; alt: string; width: number; height: number };
}

/** Neutral evidence slot, never a simulated product screen. */
export function MoriMedia({ asset, kind = "phone", eager = false }: {
  asset: MoriAsset;
  kind?: "phone" | "detail" | "artwork";
  eager?: boolean;
}) {
  const [failedSource, setFailedSource] = useState<string>();
  const image = asset.image;
  const showImage = image && failedSource !== image.src;
  const placeholder = <div className={`mori-media mori-media--${kind}`} data-asset-id={asset.id}
    role="img" aria-label={`Placeholder: ${asset.description}. ${asset.status}.`}>
    <div className="mori-media__identity" aria-hidden="true">
      <span className="mori-media__id">{asset.id}</span>
      <span className="mori-media__state">{asset.state}</span>
      <span className="mori-media__status">{asset.status}</span>
    </div>
  </div>;

  if (!showImage) return placeholder;

  // Same accessible full-size link convention as BookThing. Real screens keep
  // their native proportions; detail exports must be verified source crops.
  return <a className="mori-media-link" href={image.src} target="_blank" rel="noopener noreferrer"
    aria-label={`View full-size image: ${image.alt} (new tab)`}>
    <div className={`mori-media mori-media--${kind}`} data-asset-id={asset.id}
      style={{ aspectRatio: `${image.width} / ${image.height}` }}>
      <img src={image.src} alt={image.alt} width={image.width} height={image.height}
        loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : undefined}
        decoding="async" onError={() => setFailedSource(image.src)} />
    </div>
  </a>;
}
