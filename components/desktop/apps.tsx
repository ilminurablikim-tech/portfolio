"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Bio, LinkButtons } from "../Bio";
import { GithubIcon, LinkedinIcon } from "../icons";

export function AboutApp() {
  return (
    <div className="grid gap-8 p-7 sm:grid-cols-[13rem_1fr] sm:p-9">
      <div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-[0_6px_18px_rgba(0,0,0,.18)]">
          <Image src="/img/portrait.svg" alt="Placeholder portrait of Ilminur" fill sizes="208px" className="object-cover grayscale" />
        </div>
        <p className="mt-4 font-pen text-3xl leading-none text-navy">{portfolio.name.toLowerCase()}</p>
        <p className="mt-1 text-[11px] leading-snug text-muted">
          Uyghur name · legal name on Chinese documents: <span className="text-ink">{portfolio.legalName}</span>
        </p>
      </div>
      <div>
        <h2 className="font-display text-4xl leading-none">hi, I&apos;m Ilminur</h2>
        <Bio className="mt-5" />
        <div className="mt-6"><LinkButtons /></div>
      </div>
    </div>
  );
}

export function ResearchApp() {
  const items = [
    ...portfolio.research.map((r) => ({ key: r.title, title: r.title, meta: `${r.lab} · ${r.period}`, text: r.text, tag: "project" })),
    { key: "pub", title: "Publication", meta: portfolio.publication.venue, text: portfolio.publication.citation, tag: "paper" },
  ];
  const [sel, setSel] = useState(0);
  const cur = items[sel];
  return (
    <div className="grid min-h-full sm:grid-cols-[13.5rem_1fr]">
      <div className="border-b border-black/5 bg-black/[0.025] p-3 sm:border-r sm:border-b-0">
        <p className="px-2 pb-2 text-[10px] font-medium tracking-[0.16em] text-muted uppercase">research</p>
        <ul className="space-y-0.5">
          {items.map((it, i) => (
            <li key={it.key}>
              <button
                type="button"
                onClick={() => setSel(i)}
                aria-current={sel === i}
                className={`w-full rounded-md px-2.5 py-1.5 text-left text-[13px] transition-colors ${sel === i ? "bg-[#dcdcdb] text-ink" : "hover:bg-black/5"}`}
              >
                {it.title}
              </button>
            </li>
          ))}
        </ul>
        <p className="mt-6 px-2 pb-2 text-[10px] font-medium tracking-[0.16em] text-muted uppercase">interests</p>
        <ul className="space-y-1 px-2 text-xs text-ink/75">
          {portfolio.interests.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
      <div className="p-7 sm:p-9">
        <p className="font-pen text-2xl text-navy">{cur.tag}</p>
        <h2 className="mt-1 font-display text-4xl leading-none">{cur.title}</h2>
        <p className="mt-3 text-xs text-muted">{cur.meta}</p>
        <p className="mt-5 max-w-md text-[0.92rem] leading-[1.7] text-ink/90">{cur.text}</p>
      </div>
    </div>
  );
}

export function ExperienceApp() {
  return (
    <div className="grid gap-10 p-7 sm:grid-cols-2 sm:p-9">
      <div>
        <h2 className="font-display text-3xl leading-none">Education</h2>
        <ul className="mt-5 space-y-5">
          {portfolio.education.map((e) => (
            <li key={e.school} className="border-l-2 border-navy/30 pl-4">
              <p className="text-[0.95rem] font-medium leading-tight">{e.school}</p>
              <p className="mt-0.5 text-sm text-ink/80">{e.degree}</p>
              <p className="text-xs text-muted">{e.period} · {e.note}</p>
            </li>
          ))}
        </ul>
        <h2 className="mt-9 font-display text-3xl leading-none">Skills</h2>
        <dl className="mt-4 space-y-3 text-sm">
          {portfolio.skills.map((s) => (
            <div key={s.label}>
              <dt className="text-[10px] font-medium tracking-[0.16em] text-muted uppercase">{s.label}</dt>
              <dd className="mt-0.5 leading-relaxed text-ink/85">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div>
        <h2 className="font-display text-3xl leading-none">Experience</h2>
        <ol className="mt-5 space-y-5">
          {portfolio.experience.map((x) => (
            <li key={x.role}>
              <p className="text-[0.95rem] font-medium leading-tight">{x.role}</p>
              <p className="text-xs text-muted">{x.org} · {x.period}</p>
              <p className="mt-1 text-[0.85rem] leading-relaxed text-ink/85">{x.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 font-pen text-xl text-navy">+ research roles in the Research folder</p>
      </div>
    </div>
  );
}

export function ContactApp() {
  const row = "flex items-center gap-3 border-t border-black/5 py-3 text-sm transition-colors hover:text-accent";
  return (
    <div className="p-7 sm:p-9">
      <p className="text-[10px] font-medium tracking-[0.2em] text-muted uppercase">get in touch</p>
      <h2 className="mt-2 font-display text-4xl leading-[1.02]">
        let&apos;s make something <em>together.</em>
      </h2>
      <div className="mt-7">
        <a href={`mailto:${portfolio.email}`} className={row}><Mail aria-hidden className="h-4 w-4" /> {portfolio.email}</a>
        <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer" className={row}><LinkedinIcon /> LinkedIn</a>
        <a href={portfolio.links.github} target="_blank" rel="noreferrer" className={row}><GithubIcon /> GitHub</a>
      </div>
      <p className="mt-4 text-xs text-muted">{portfolio.location}</p>
    </div>
  );
}
