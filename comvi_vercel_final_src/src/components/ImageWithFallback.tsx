import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallback?: React.ReactNode;
};

export function ImageWithFallback({ src, alt, className, fallback }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={className} aria-label={alt}>
        {fallback ?? (
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.12)",
              background:
                "linear-gradient(135deg, rgba(245,158,11,0.18), rgba(207,199,188,0.12))"
            }}
          />
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
