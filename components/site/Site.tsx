import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { Bio, LinkButtons } from "../Bio";
import { Paperclip } from "../Paperclip";
import { Folder, ContactLeft } from "../pages/Contact";

const label = "text-xs tracking-[0.22em] text-muted uppercase";

export function Site() {
  const nav = [
    ["About", "#about"],
    ["Research", "#research"],
    ["Experience", "#experience"],
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
          <div className="relative mx-auto w-full max-w-xs pb-6">
            <div className="photo-shadow relative ml-auto aspect-[4/5] w-[68%]">
              <Image src="/img/portrait.svg" alt="Placeholder portrait of Ilminur" fill priority sizes="240px" className="object-cover grayscale" />
            </div>
            <div className="absolute top-[8%] left-0 w-[66%] -rotate-1 drop-shadow-[0_6px_10px_rgba(0,0,0,.18)]">
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
            <p className="mt-2 text-xs text-muted">Legal name on Chinese documents: {portfolio.legalName}</p>
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
                <p className="text-[0.92rem] leading-[1.7] text-ink/85">{r.text}</p>
              </li>
            ))}
          </ol>
          <div className="relative mt-14 max-w-xl -rotate-1 drop-shadow-[0_6px_10px_rgba(0,0,0,.15)]">
            <div aria-hidden className="deckle paper-fibre absolute -inset-1 bg-note" />
            <div className="relative px-7 py-7">
              <span aria-hidden className="tape absolute -top-5 left-8 h-6 w-20 -rotate-3" />
              <p className="font-pen text-2xl text-navy">published</p>
              <p className="mt-1 font-handlee text-sm leading-relaxed text-ink/85">{portfolio.publication.citation}</p>
              <p className="mt-2 font-handlee text-sm text-navy">{portfolio.publication.venue}</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-16 border-t border-ink/10 py-20 md:py-24">
          <p className={label}>(02) experience</p>
          <h2 className="mt-3 font-pen text-5xl leading-none sm:text-6xl">where I&apos;ve been</h2>
          <div className="mt-12 grid gap-14 md:grid-cols-2">
            <div>
              <h3 className="font-display text-3xl">Education</h3>
              <ul className="mt-6 space-y-6">
                {portfolio.education.map((e) => (
                  <li key={e.school} className="border-l-2 border-navy/30 pl-4">
                    <p className="font-medium">{e.school}</p>
                    <p className="text-sm text-ink/80">{e.degree}</p>
                    <p className="text-xs text-muted">{e.period} · {e.note}</p>
                  </li>
                ))}
              </ul>
              <h3 className="mt-12 font-display text-3xl">Skills</h3>
              <dl className="mt-5 space-y-4 text-sm">
                {portfolio.skills.map((s) => (
                  <div key={s.label}>
                    <dt className="font-pen text-xl text-navy">{s.label}</dt>
                    <dd className="leading-relaxed text-ink/85">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3 className="font-display text-3xl">Work &amp; projects</h3>
              <ol className="mt-6 space-y-6">
                {portfolio.experience.map((x) => (
                  <li key={x.role}>
                    <p className="font-medium">{x.role}</p>
                    <p className="text-xs text-muted">{x.org} · {x.period}</p>
                    <p className="mt-1 text-[0.88rem] leading-relaxed text-ink/85">{x.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-16 py-16 md:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-[#4a4a4a] px-5 py-10 sm:px-12 sm:py-14">
            <div aria-hidden className="absolute inset-0 opacity-25 [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" />
            <div className="relative mx-auto max-w-xl">
              <ContactLeft fill={false} />
            </div>
            <ul className="relative mt-6 flex flex-wrap justify-center gap-8">
              <li><Folder label="LinkedIn" href={portfolio.links.linkedin} /></li>
              <li><Folder label="GitHub" href={portfolio.links.github} /></li>
              <li><Folder label="Scholar" href={portfolio.links.scholar} /></li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-5xl justify-between px-6 pt-4 pb-12 text-[11px] tracking-[0.22em] text-muted uppercase">
        <span>{portfolio.name}</span>
        <span>2026</span>
      </footer>
    </div>
  );
}
