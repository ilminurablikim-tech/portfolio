import { portfolio } from "@/data/portfolio";
import { Heading } from "./ui";

export function ResearchLeft() {
  return (
    <div>
      <Heading sub="what I'm working on">research</Heading>
      <p className="text-[0.9rem] leading-[1.65] text-ink/85">
        I am interested in learning from data that comes from physical and biological systems, where models should respect the underlying science.
      </p>

      <p className="mt-8 font-pen text-2xl text-navy">interests</p>
      <ul className="mt-1 grid gap-1 font-handlee text-base">
        {portfolio.interests.map((t) => (
          <li key={t} className="before:mr-2 before:text-navy before:content-['•']">{t}</li>
        ))}
      </ul>

      <div className="relative mt-10 -rotate-1 drop-shadow-[0_5px_8px_rgba(0,0,0,.18)]">
        <div aria-hidden className="deckle paper-fibre absolute -inset-1 bg-note" />
        <div className="relative px-6 py-6">
          <span aria-hidden className="tape absolute -top-5 left-8 h-6 w-20 -rotate-3" />
          <p className="font-pen text-2xl text-navy">published</p>
          <p className="mt-1 font-handlee text-sm leading-relaxed text-ink/85">{portfolio.publication.citation}</p>
          <p className="mt-2 font-handlee text-sm text-navy">{portfolio.publication.venue}</p>
        </div>
      </div>
    </div>
  );
}

export function ResearchRight() {
  return (
    <ol className="space-y-7">
      {portfolio.research.map((r, i) => (
        <li key={r.title} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-ink/10 pb-7 last:border-0">
          <span className="font-pen text-3xl leading-none text-navy">0{i + 1}</span>
          <div>
            <h3 className="font-display text-2xl leading-none">{r.title}</h3>
            <p className="mt-1.5 text-xs text-muted">{r.lab} · {r.period}</p>
            <p className="mt-3 text-[0.85rem] leading-relaxed text-ink/85">{r.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
