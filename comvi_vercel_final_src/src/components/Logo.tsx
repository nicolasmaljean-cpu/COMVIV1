import { ImageWithFallback } from "./ImageWithFallback";

type Props = {
  className?: string;
  variant?: "mark" | "full";
};

export function Logo({ className, variant = "mark" }: Props) {
  const src = variant === "full" ? "/images/logo-comvi.png" : "/images/logo-comvi.png";
  return (
    <ImageWithFallback
      src={src}
      alt="COMVI"
      className={className ?? "imgContain"}
      fallback={
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 14,
            display: "grid",
            placeItems: "center",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.06)",
            color: "rgba(255,255,255,0.85)",
            fontWeight: 900
          }}
        >
          COMVI
        </div>
      }
    />
  );
}
