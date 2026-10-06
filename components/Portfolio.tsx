"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Page } from "./pages/ui";

export type Spread = { id: string; label: string; left: ReactNode; right: ReactNode; flushRight?: boolean };
type Flip = { to: number; dir: 1 | -1; run: boolean };

const FLIP_MS = 850;

export function Portfolio({ name, spreads }: { name: string; spreads: Spread[] }) {
  const [cur, setCur] = useState(0);
  const [flip, setFlip] = useState<Flip | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const N = spreads.length;

  const go = useCallback(
    (to: number) => {
      if (flip || to === cur || to < 0 || to >= N) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setCur(to);
        return;
      }
      setFlip({ to, dir: to > cur ? 1 : -1, run: false });
      timer.current = setTimeout(() => {
        setCur(to);
        setFlip(null);
      }, FLIP_MS + 60);
    },
    [cur, flip, N],
  );

  useEffect(() => {
    if (flip && !flip.run) {
      const t = setTimeout(() => setFlip((f) => (f ? { ...f, run: true } : f)), 30);
      return () => clearTimeout(t);
    }
  }, [flip]);

  useEffect(() => () => clearTimeout(timer.current), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(cur + 1);
      if (e.key === "ArrowLeft") go(cur - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cur, go]);

  const navClick = (e: React.MouseEvent, i: number) => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      e.preventDefault();
      go(i);
    }
  };

  const leftIdx = flip && flip.dir === -1 ? flip.to : cur;
  const rightIdx = flip && flip.dir === 1 ? flip.to : cur;
  const page = (idx: number, side: "left" | "right") => (
    <Page side={side} flush={side === "right" && !!spreads[idx].flushRight}>{side === "left" ? spreads[idx].left : spreads[idx].right}</Page>
  );
  const active = flip ? flip.to : cur;

  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5">
        <a href="#about" onClick={(e) => navClick(e, 0)} className="font-display text-xl whitespace-nowrap sm:text-2xl">{name}</a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 text-[11px] tracking-[0.18em] uppercase sm:gap-9 sm:text-xs">
            {spreads.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={(e) => navClick(e, i)}
                  aria-current={active === i ? "page" : undefined}
                  className={`border-b py-1 transition-colors ${active === i ? "border-ink" : "border-transparent text-ink/60 hover:text-ink"}`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Desktop: the book */}
      <div className="hidden px-5 pb-8 md:block">
        <div
          className="relative mx-auto h-[min(41rem,calc(100svh-9rem))] min-h-[30rem] w-[min(74rem,94vw)]"
          style={{ perspective: "2600px" }}
          role="group"
          aria-roledescription="book"
          aria-label={`Page ${active + 1} of ${N}`}
        >
          <div className="absolute inset-0 rounded-md shadow-[0_30px_60px_rgba(0,0,0,.22),0_4px_10px_rgba(0,0,0,.12)]" />
          <div className="absolute inset-y-0 left-0 w-1/2">{page(leftIdx, "left")}</div>
          <div className="absolute inset-y-0 right-0 w-1/2">{page(rightIdx, "right")}</div>

          {flip && (
            <div
              aria-hidden
              className={`absolute inset-y-0 z-20 w-1/2 ${flip.dir === 1 ? "left-1/2 origin-left" : "left-0 origin-right"}`}
              style={{
                transformStyle: "preserve-3d",
                transition: `transform ${FLIP_MS}ms cubic-bezier(.5,.05,.25,1)`,
                transform: flip.run ? `rotateY(${flip.dir === 1 ? -180 : 180}deg)` : "rotateY(0deg)",
              }}
            >
              <div className="absolute inset-0 [backface-visibility:hidden]">
                {flip.dir === 1 ? page(cur, "right") : page(cur, "left")}
              </div>
              <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                {flip.dir === 1 ? page(flip.to, "left") : page(flip.to, "right")}
              </div>
            </div>
          )}

          {/* binder rings */}
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-1/2 z-30 flex -translate-x-1/2 flex-col justify-around py-10">
            {[0, 1, 2].map((r) => (
              <span key={r} className="block h-6 w-9 -translate-x-0 rounded-full border-[3px] border-zinc-400 bg-gradient-to-b from-zinc-50 to-zinc-300 shadow-[inset_0_-2px_3px_rgba(0,0,0,.25),0_2px_4px_rgba(0,0,0,.25)]" />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-5 flex w-[min(74rem,94vw)] items-center justify-center gap-6">
          <button type="button" onClick={() => go(cur - 1)} disabled={cur === 0 || !!flip} aria-label="Previous page" className="grid h-9 w-9 place-items-center rounded-full border border-ink/20 transition-colors hover:bg-ink hover:text-paper disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-inherit">
            <ChevronLeft aria-hidden className="h-4 w-4" />
          </button>
          <span className="font-pen text-2xl">{active + 1} / {N}</span>
          <button type="button" onClick={() => go(cur + 1)} disabled={cur === N - 1 || !!flip} aria-label="Next page" className="grid h-9 w-9 place-items-center rounded-full border border-ink/20 transition-colors hover:bg-ink hover:text-paper disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-inherit">
            <ChevronRight aria-hidden className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Mobile: pages stack and scroll */}
      <div className="space-y-4 px-4 pb-12 md:hidden">
        {spreads.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-4 space-y-4">
            {[s.left, s.right].map((p, k) => (
              <div key={k} className={`overflow-hidden rounded-md bg-[#fafafa] shadow-[0_8px_24px_rgba(0,0,0,.14)] ${k === 1 && s.flushRight ? "" : "px-6 py-8"}`}>{p}</div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
