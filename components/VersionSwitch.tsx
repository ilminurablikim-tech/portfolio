import Link from "next/link";

const versions = [
  { id: "book", label: "Book" },
  { id: "desktop", label: "Desktop" },
  { id: "site", label: "Website" },
];

export function VersionSwitch({ current, tone = "dark" }: { current: string; tone?: "dark" | "light" }) {
  return (
    <nav
      aria-label="Design versions"
      className={`fixed right-4 bottom-4 z-[300] hidden items-center gap-1 rounded-full px-1.5 py-1 text-[11px] backdrop-blur-xl md:flex ${tone === "dark" ? "bg-white/70 text-ink shadow-[0_2px_10px_rgba(0,0,0,.1)]" : "bg-black/50 text-white"}`}
    >
      <Link href="/" className="px-2 py-1 opacity-60 hover:opacity-100">versions</Link>
      {versions.map((v) => (
        <Link key={v.id} href={`/${v.id}`} aria-current={current === v.id ? "page" : undefined} className={`rounded-full px-2.5 py-1 transition-colors ${current === v.id ? "bg-ink text-white" : "hover:bg-black/5"}`}>
          {v.label}
        </Link>
      ))}
    </nav>
  );
}
