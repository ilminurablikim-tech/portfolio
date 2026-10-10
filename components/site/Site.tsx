import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { Bio, LinkButtons } from "../Bio";
import { Paperclip } from "../Paperclip";
import { Marks } from "../Marks";
import { Contact } from "./Contact";

const label = "text-xs tracking-[0.22em] text-muted uppercase";

type TimelineItem = { key: string; date: string; title: string; sub: string; lines: string[]; tag?: string };

/** Date | line + dot | content, so the order in time is obvious. */
function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="mt-7">
      {items.map((it, i) => (
        <li key={it.key} className="grid grid-cols-[6.5rem_1.5rem_1fr] gap-x-3 sm:grid-cols-[10rem_1.75rem_1fr] sm:gap-x-4">
          <p className="pt-0.5 text-right text-[0.8rem] leading-snug font-medium text-ink sm:text-sm">{it.date}</p>
          <div className="relative">
            <span aria-hidden className="absolute top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-ink bg-paper" />
            {i < items.length - 1 && <span aria-hidden className="absolute top-5 bottom-[-0.5rem] left-1/2 w-px -translate-x-1/2 bg-ink/20" />}
          </div>
          <div className="pb-9">
            <p className="text-[1.05rem] leading-tight font-medium">
              {it.title}
              {it.tag && <span className="ml-2 rounded-full border border-ink/15 px-2 py-0.5 align-middle text-[10px] font-normal tracking-wider text-muted uppercase">{it.tag}</span>}
            </p>
            <p className="mt-0.5 text-xs text-muted">{it.sub}</p>
            <ul className="mt-2 space-y-1 text-[0.86rem] leading-[1.7] text-ink/85">
              {it.lines.map((l) => (
                <li key={l}><Marks text={l} /></li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Site() {
  const hasFun = portfolio.funFacts.length > 0;
  const nav = [
    ["About", "#about"],
    ["Research", "#research"],
    ["Experience", "#experience"],
    ...(hasFun ? [["Beyond", "#beyond"]] : []),
    ["Contact", "#contact"],
  ];
  return (
    <div className="scroll-smooth">
      <header className="sticky top-0 z-30 border-b border-ink/5 bg-paper/75 backdrop-blur-md">
        <nav aria-label="Primary" className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#about" className="font-display text-xl whitespace-nowrap">{portfolio.name}</a>
          <ul className="flex gap-5 text-[11px] tracking-[0.18em] uppercase sm:gap-9 sm:text-xs">
            {nav.map(([t, h]) => (
              <li key={h}>
                <a href={h} className="py-1 text-ink/65 transition-colors hover:text-ink">{t}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        {/* About */}
        <section id="about" className="grid scroll-mt-16 items-center gap-14 py-20 md:grid-cols-[0.9fr_1.2fr] md:py-28">
          <div className="relative mx-auto w-full max-w-sm pb-44">
            <div className="photo-shadow relative mx-auto aspect-[4/5] w-[86%]">
              <Image src="/img/portrait.jpg" alt="Portrait of Ilminur Ablikim" fill priority sizes="300px" className="object-cover object-[50%_30%]" />
            </div>
            <div className="absolute bottom-0 left-[-8%] w-[50%] -rotate-2 drop-shadow-[0_6px_10px_rgba(0,0,0,.18)]">
              <div className="relative">
                <div aria-hidden className="deckle paper-fibre absolute -inset-1 bg-note" />
                <div className="relative px-5 py-6">
                  <p className="inline-block border-b border-navy/50 pb-0.5 font-handlee text-xl text-navy">about me</p>
                  <ul className="mt-3 grid gap-0.5 font-handlee text-sm text-navy">
                    {portfolio.facts.map((f) => (
                      <li key={f} className="before:mr-2 before:content-['•']">{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <Paperclip className="absolute -top-7 right-5 h-14 w-6" />
            </div>
          </div>

          <div>
            <h1 className="font-display text-4xl leading-none tracking-tight sm:text-5xl">
              {portfolio.name.split(" ")[0]} <em className="text-accent">{portfolio.name.split(" ")[1]}</em>
            </h1>
            <p className="mt-2 text-base text-muted sm:text-lg">{portfolio.legalName}</p>
            <Bio className="mt-7" />
            <div className="mt-7"><LinkButtons /></div>
          </div>
        </section>

        {/* Research */}
        <section id="research" className="scroll-mt-16 border-t border-ink/10 py-20 md:py-24">
          <p className={label}>(01) research</p>
          <h2 className="mt-3 font-pen text-5xl leading-none sm:text-6xl">what I&apos;m working on</h2>
          <ol className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {portfolio.research.map((r, i) => (
              <li key={r.title} className="grid gap-3 py-8 md:grid-cols-[4rem_1fr_1.4fr] md:gap-8">
                <span className="font-pen text-3xl leading-none text-navy">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-3xl leading-none">{r.title}</h3>
                  <p className="mt-2 text-xs text-muted">{r.lab}<br />{r.period}</p>
                </div>
                <p className="text-[0.92rem] leading-[1.75] text-ink/85"><Marks text={r.text} /></p>
              </li>
            ))}
          </ol>
          <div className="relative mt-14 max-w-xl -rotate-1 drop-shadow-[0_6px_10px_rgba(0,0,0,.15)]">
            <div aria-hidden className="deckle paper-fibre absolute -inset-1 bg-note" />
            <div className="relative px-7 py-7">
              <span aria-hidden className="tape absolute -top-5 left-8 h-6 w-20 -rotate-3" />
              <p className="font-pen text-2xl text-navy">publication</p>
              <p className="mt-1 font-handlee text-sm leading-relaxed text-ink/85">{portfolio.publication.citation}</p>
              <p className="mt-2 font-handlee text-sm text-navy">{portfolio.publication.venue}</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-16 border-t border-ink/10 py-20 md:py-24">
          <p className={label}>(02) experience</p>
          <h2 className="mt-3 font-pen text-5xl leading-none sm:text-6xl">where I&apos;ve been</h2>
          <div className="mt-14">
            <h3 className="font-display text-3xl">Education</h3>
            <Timeline
              items={portfolio.education.map((e) => ({
                key: e.school,
                date: e.period,
                title: e.school,
                sub: `${e.degree} · ${e.place}`,
                lines: e.lines,
                              }))}
            />
          </div>

          <div className="mt-16">
            <h3 className="font-display text-3xl">Work &amp; projects</h3>
            <Timeline
              items={portfolio.experience.map((x) => ({
                key: x.role,
                date: x.period,
                title: x.role,
                sub: x.org,
                lines: [x.text],
                tag: x.kind !== "work" ? x.kind : undefined,
              }))}
            />
          </div>

          <div className="mt-16">
            <h3 className="font-display text-3xl">Skills</h3>
            <dl className="mt-6 grid gap-8 text-sm md:grid-cols-3">
              {portfolio.skills.map((s) => (
                <div key={s.label}>
                  <dt className="font-pen text-xl text-navy">{s.label}</dt>
                  <dd className="mt-1 leading-relaxed text-ink/85">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Beyond research: appears once portfolio.funFacts has entries */}
        {hasFun && (
          <section id="beyond" className="scroll-mt-16 border-t border-ink/10 py-20 md:py-24">
            <p className={label}>(03) beyond research</p>
            <h2 className="mt-3 font-pen text-5xl leading-none sm:text-6xl">a few things about me</h2>
            <ul className="mt-10 grid gap-x-12 gap-y-5 sm:grid-cols-2">
              {portfolio.funFacts.map((f) => (
                <li key={f} className="border-b border-ink/10 pb-4 font-handlee text-xl leading-snug">
                  <Marks text={f} />
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Contact */}
        <section id="contact" className="scroll-mt-16 py-16 md:py-24">
          <Contact />
        </section>
      </main>

      <footer className="mx-auto flex max-w-5xl justify-center px-6 pt-4 pb-12 text-[11px] tracking-[0.22em] text-muted uppercase">
        <span>{portfolio.name}</span>
      </footer>
    </div>
  );
}
