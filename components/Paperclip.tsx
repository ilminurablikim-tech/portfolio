/** Thin wire paperclip, as in the About reference. */
export function Paperclip({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 30 100" className={className} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 70V18a7 7 0 0 1 14 0v56a11 11 0 0 1-22 0V26" stroke="#2c2c2e" strokeWidth="2.2" />
      <path d="M8 70V18a7 7 0 0 1 14 0v56a11 11 0 0 1-22 0V26" stroke="rgba(255,255,255,.35)" strokeWidth=".7" transform="translate(-.6 -.6)" />
    </svg>
  );
}
