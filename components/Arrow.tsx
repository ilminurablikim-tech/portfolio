/** Hand-drawn curved arrow, like the ones linking items in the references. */
export function Arrow({ className = "", flip = false, down = true }: { className?: string; flip?: boolean; down?: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 90 110"
      className={`text-ink ${className}`}
      style={{ transform: `${flip ? "scaleX(-1)" : ""} ${down ? "" : "rotate(180deg)"}` }}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 6C60 4 82 34 70 62c-3 8-7 16-10 24" />
      <path d="M52 76l9 12 13-10" />
    </svg>
  );
}
