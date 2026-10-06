import type { ReactNode } from "react";

export const linkCls = "underline decoration-ink/35 decoration-[1.5px] underline-offset-4 transition-colors hover:decoration-ink";

/** One paper page. `side` only controls the shading toward the spine. */
export function Page({ side, children, className = "", flush = false }: { side: "left" | "right"; children: ReactNode; className?: string; flush?: boolean }) {
  return (
    <div className={`relative h-full w-full overflow-y-auto bg-[#fafafa] [scrollbar-width:none] ${side === "left" ? "rounded-l-md" : "rounded-r-md"} ${className}`}>
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 w-14 ${side === "left" ? "right-0 bg-gradient-to-l" : "left-0 bg-gradient-to-r"} from-black/[0.07] to-transparent`}
      />
      <div className={flush ? "relative h-full" : "relative px-7 py-8 sm:px-10 sm:py-10"}>{children}</div>
    </div>
  );
}

export function Heading({ children, sub }: { children: ReactNode; sub?: string }) {
  return (
    <header className="mb-6">
      <h2 className="font-pen text-4xl leading-none sm:text-5xl">{children}</h2>
      {sub && <p className="mt-1 font-handlee text-sm text-muted">{sub}</p>}
    </header>
  );
}
