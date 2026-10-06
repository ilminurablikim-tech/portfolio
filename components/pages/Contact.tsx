import { Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function ContactLeft({ fill = true }: { fill?: boolean }) {
  return (
    <div className={`flex items-center ${fill ? "md:min-h-[28rem]" : ""}`}>
      <div className="w-full overflow-hidden rounded-xl bg-note shadow-[0_14px_34px_rgba(0,0,0,.25)] ring-1 ring-black/5">
        <div className="flex items-center gap-2 border-b border-ink/10 bg-paper-2 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ec6a5e]" />
          <span className="h-3 w-3 rounded-full bg-[#f4bf4f]" />
          <span className="h-3 w-3 rounded-full bg-[#61c554]" />
          <span className="mx-auto font-sans text-xs text-ink/60">contact_me.txt</span>
        </div>
        <div className="px-7 py-9">
          <p className="text-xs tracking-[0.22em] text-muted uppercase">get in touch</p>
          <h2 className="mt-2 font-display text-4xl leading-[1.02]">
            let&apos;s make something <em>together.</em>
          </h2>
          <a href={`mailto:${portfolio.email}`} className="mt-7 inline-flex items-center gap-3 border-b border-ink pb-1 text-sm transition-colors hover:text-accent">
            <Mail aria-hidden className="h-4 w-4" /> {portfolio.email}
          </a>
          <p className="mt-6 text-xs text-muted">{portfolio.location}</p>
        </div>
      </div>
    </div>
  );
}

export function Folder({ label, href }: { label: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group flex w-24 flex-col items-center gap-2 text-center">
      <span className="relative block h-14 w-20 transition-transform duration-300 group-hover:-translate-y-1">
        <span className="absolute top-0 left-0 h-3 w-9 rounded-t-md bg-[#b3b3b2]" />
        <span className="absolute inset-x-0 top-2 bottom-0 rounded-md bg-gradient-to-b from-[#e0e0df] to-[#a9a9a8] shadow-[0_4px_8px_rgba(0,0,0,.3)]" />
      </span>
      <span className="text-xs text-white/90">{label}</span>
    </a>
  );
}

export function ContactRight() {
  return (
    <div className="relative flex h-full min-h-[14rem] items-center justify-center bg-[#4b4b4d]">
      <div aria-hidden className="absolute inset-0 opacity-30 [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" />
      <ul className="relative flex flex-wrap justify-center gap-8 p-6">
        <li><Folder label="LinkedIn" href={portfolio.links.linkedin} /></li>
        <li><Folder label="GitHub" href={portfolio.links.github} /></li>
        <li><Folder label="Scholar" href={portfolio.links.scholar} /></li>
      </ul>
    </div>
  );
}
