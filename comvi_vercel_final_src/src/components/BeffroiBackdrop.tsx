export function BeffroiBackdrop() {
  // SVG inline (pas un fichier image)
  return (
    <svg viewBox="0 0 1200 600" width="1200" height="600" aria-hidden="true">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(245,158,11,0.25)" />
          <stop offset="1" stopColor="rgba(245,158,11,0)" />
        </linearGradient>
      </defs>
      <rect width="1200" height="600" fill="none" />
      <path d="M140 520h920v18H140z" fill="url(#g)" />
      <path
        d="M560 520V340h-30v-40h30v-40h-18v-40h18v-60h80v60h18v40h-18v40h30v40h-30v180z"
        fill="rgba(207,199,188,0.25)"
      />
      <path d="M600 140l-22 22h44z" fill="rgba(207,199,188,0.25)" />
      <g stroke="rgba(245,158,11,0.35)" strokeWidth="2" fill="none">
        <path d="M120 500c160-60 320-60 480 0s320 60 480 0" />
      </g>
    </svg>
  );
}
