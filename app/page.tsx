import Link from "next/link";
import { portfolio } from "@/data/portfolio";

const versions = [
  { href: "/desktop", no: "01", title: "Desktop", text: "A Mac-style desktop. Double-click folders or use the dock to open windows you can drag around." },
  { href: "/book", no: "02", title: "Book", text: "A binder notebook. Flip through About, Research, Experience and Contact page by page." },
  { href: "/site", no: "03", title: "Website", text: "A clean, scrolling site with the same scrapbook details. The simplest to read and share." },
];

export default function Choose() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-16">
      <p className="text-xs tracking-[0.22em] text-muted uppercase">{portfolio.name} — portfolio</p>
      <h1 className="mt-3 font-display text-4xl leading-tight sm:text-6xl">
        three ways to <em className="text-accent">look at it</em>
      </h1>
      <ul className="mt-12 grid gap-4 sm:grid-cols-3">
        {versions.map((v) => (
          <li key={v.href}>
            <Link href={v.href} className="group block h-full rounded-2xl border border-ink/10 bg-white/60 p-6 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_30px_rgba(0,0,0,.12)]">
              <span className="font-pen text-2xl text-navy">{v.no}</span>
              <h2 className="mt-2 font-display text-3xl">{v.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{v.text}</p>
              <span className="mt-5 inline-block text-xs tracking-[0.18em] uppercase transition-[letter-spacing] group-hover:tracking-[0.26em]">open →</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
