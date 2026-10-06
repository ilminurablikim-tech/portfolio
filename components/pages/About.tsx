import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { Paperclip } from "../Paperclip";
import { Bio, LinkButtons } from "../Bio";

export function AboutLeft() {
  return (
    <div className="flex min-h-[32rem] flex-col">
      <div className="relative mx-auto w-full max-w-sm flex-1 pb-4">
        <div className="photo-shadow relative ml-auto aspect-[4/5] w-[56%]">
          <Image src="/img/portrait.svg" alt="Placeholder portrait of Ilminur" fill priority sizes="220px" className="object-cover grayscale" />
        </div>
        <div className="absolute top-[6%] left-0 w-[58%] -rotate-1 drop-shadow-[0_5px_8px_rgba(0,0,0,.2)]">
          <div className="relative">
            <div aria-hidden className="deckle paper-fibre absolute -inset-1 bg-note" />
            <div className="relative px-5 py-6">
              <p className="inline-block border-b border-navy/50 pb-0.5 font-handlee text-xl text-navy">about me</p>
              <ul className="mt-3 grid gap-0.5 font-handlee text-sm text-navy">
                {portfolio.facts.map((f, i) => (
                  <li key={f} className={`before:mr-2 before:content-['•'] ${i === 3 ? "mt-2" : ""}`}>{f}</li>
                ))}
              </ul>
              <p className="mt-3 pl-3 font-pen text-xl text-navy">and still building...</p>
            </div>
          </div>
          <Paperclip className="absolute -top-7 right-5 h-14 w-6" />
        </div>
      </div>

      <div className="mt-4 border-t border-ink/15 pt-4">
        <p className="font-pen text-3xl leading-none text-navy">{portfolio.name.toLowerCase()}</p>
        <p className="mt-1 text-xs text-muted">
          Uyghur name · legal name on Chinese documents: <span className="text-ink">{portfolio.legalName}</span>
        </p>
      </div>
    </div>
  );
}

export function AboutRight() {
  return (
    <div>
      <p className="font-pen text-4xl leading-none sm:text-5xl">hi, I&apos;m Ilminur</p>
      <Bio className="mt-6" />
      <div className="mt-7"><LinkButtons /></div>
    </div>
  );
}
