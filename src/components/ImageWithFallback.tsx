import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  label: string;
  className?: string;
  eager?: boolean;
}

export function ImageWithFallback({
  src,
  alt,
  label,
  className = "",
  eager = false,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`media-frame ${className}`.trim()}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="media-fallback" role="img" aria-label={alt}>
          <span className="media-fallback__line" aria-hidden="true" />
          <span className="media-fallback__label">{label}</span>
          <span className="media-fallback__path">{src}</span>
        </div>
      )}
    </div>
  );
}

