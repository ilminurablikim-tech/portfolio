"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Battery, Briefcase, FlaskConical, Mail, StickyNote, Wifi, type LucideIcon } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { AboutApp, ContactApp, ExperienceApp, ResearchApp } from "./apps";

type AppId = "about" | "research" | "experience" | "contact";
type Win = { open: boolean; min: boolean; max: boolean; z: number; x: number; y: number };

const MENU_H = 32;

const apps: { id: AppId; title: string; icon: LucideIcon; from: string; to: string; w: number; h: number; body: ReactNode; folder: string }[] = [
  { id: "about", title: "About me", icon: StickyNote, from: "#a6a6a5", to: "#6c6c6b", w: 800, h: 560, body: <AboutApp />, folder: "About me" },
  { id: "research", title: "Research", icon: FlaskConical, from: "#9d9d9c", to: "#646463", w: 760, h: 440, body: <ResearchApp />, folder: "Research" },
  { id: "experience", title: "Experience", icon: Briefcase, from: "#afafae", to: "#777776", w: 760, h: 500, body: <ExperienceApp />, folder: "Experience" },
  { id: "contact", title: "contact_me.txt", icon: Mail, from: "#989897", to: "#5d5d5c", w: 520, h: 400, body: <ContactApp />, folder: "Contact" },
];

const closed: Win = { open: false, min: false, max: false, z: 0, x: 0, y: 0 };

export function Desktop() {
  const [wins, setWins] = useState<Record<AppId, Win>>({ about: closed, research: closed, experience: closed, contact: closed });
  const [mobile, setMobile] = useState(false);
  const [selected, setSelected] = useState<AppId | null>(null);
  const [clock, setClock] = useState("");
  const zTop = useRef(10);
  const drag = useRef<{ id: AppId; dx: number; dy: number } | null>(null);

  const focus = useCallback((id: AppId) => {
    zTop.current += 1;
    const z = zTop.current;
    setWins((w) => ({ ...w, [id]: { ...w[id], z } }));
  }, []);

  const open = useCallback((id: AppId) => {
    zTop.current += 1;
    const z = zTop.current;
    setWins((w) => {
      const cur = w[id];
      if (cur.open) return { ...w, [id]: { ...cur, min: false, z } };
      const n = Object.values(w).filter((x) => x.open).length;
      const app = apps.find((a) => a.id === id)!;
      const width = Math.min(app.w, window.innerWidth - 32);
      const x = Math.max(16, Math.min(window.innerWidth - width - 16, (window.innerWidth - width) / 2 + 50 + n * 36));
      const y = MENU_H + 28 + n * 30;
      return { ...w, [id]: { open: true, min: false, max: false, z, x, y } };
    });
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const set = () => setMobile(mq.matches);
    set();
    mq.addEventListener("change", set);
    open("about");
    const tick = () => setClock(new Date().toLocaleString("en-US", { weekday: "short", hour: "numeric", minute: "2-digit" }));
    tick();
    const t = setInterval(tick, 30000);
    return () => {
      mq.removeEventListener("change", set);
      clearInterval(t);
    };
  }, [open]);

  const patch = (id: AppId, p: Partial<Win>) => setWins((w) => ({ ...w, [id]: { ...w[id], ...p } }));

  const topOpen = (Object.entries(wins) as [AppId, Win][]).filter(([, w]) => w.open && !w.min).sort((a, b) => b[1].z - a[1].z)[0]?.[0];
  const topApp = apps.find((a) => a.id === topOpen);

  const onDown = (e: React.PointerEvent, id: AppId) => {
    focus(id);
    if (mobile || wins[id].max) return;
    drag.current = { id, dx: e.clientX - wins[id].x, dy: e.clientY - wins[id].y };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const x = Math.max(-300, Math.min(window.innerWidth - 90, e.clientX - d.dx));
    const y = Math.max(MENU_H, Math.min(window.innerHeight - 70, e.clientY - d.dy));
    patch(d.id, { x, y });
  };
  const onUp = () => {
    drag.current = null;
  };

  const coarse = () => window.matchMedia("(pointer: coarse)").matches;

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#e0e0df] select-none">
      {/* wallpaper */}
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_15%_10%,#f6f6f5,transparent),radial-gradient(50rem_40rem_at_90%_90%,#cdcdcc,transparent),linear-gradient(160deg,#e8e8e7,#d6d6d5)]" />

      {/* menu bar */}
      <header className="absolute inset-x-0 top-0 z-[250] flex h-8 items-center justify-between bg-white/55 px-4 text-[13px] backdrop-blur-xl">
        <div className="flex items-center gap-5">
          <span className="font-semibold">{portfolio.name}</span>
          <span className="hidden text-ink/70 sm:inline">{topApp?.title ?? "Desktop"}</span>
        </div>
        <div className="flex items-center gap-3 text-ink/80">
          <Wifi aria-hidden className="h-4 w-4" />
          <Battery aria-hidden className="h-4 w-4" />
          <span className="tabular-nums">{clock}</span>
        </div>
      </header>

      {/* notes widget */}
      <aside aria-label="About me note" className="absolute top-14 left-6 hidden w-64 rounded-2xl bg-white/85 p-5 shadow-[0_10px_30px_rgba(0,0,0,.14)] backdrop-blur-xl lg:block">
        <p className="text-[10px] font-medium tracking-[0.16em] text-muted uppercase">notes</p>
        <p className="mt-1 text-lg font-semibold">About me</p>
        <ul className="mt-2 space-y-1 text-sm text-ink/85">
          {portfolio.facts.map((f) => (
            <li key={f} className="flex gap-2"><span aria-hidden>•</span>{f}</li>
          ))}
        </ul>
      </aside>

      {/* desktop folders */}
      <ul className="absolute top-14 right-6 hidden flex-col items-center gap-6 md:flex">
        {apps.map((a) => (
          <li key={a.id}>
            <button
              type="button"
              onClick={() => (coarse() ? open(a.id) : setSelected(a.id))}
              onDoubleClick={() => open(a.id)}
              onKeyDown={(e) => e.key === "Enter" && open(a.id)}
              onBlur={() => setSelected((s) => (s === a.id ? null : s))}
              aria-label={`Open ${a.folder}`}
              className="group flex w-24 flex-col items-center gap-1.5 text-center outline-none"
            >
              <span className={`relative block h-14 w-[4.5rem] rounded-md transition-all ${selected === a.id ? "bg-black/10 ring-4 ring-black/10" : ""}`}>
                <span className="absolute top-0 left-0 h-3 w-8 rounded-t-md bg-[#b9b9b8]" />
                <span className="absolute inset-x-0 top-2 bottom-0 rounded-md bg-gradient-to-b from-[#dedede] to-[#b5b5b4] shadow-[0_4px_8px_rgba(0,0,0,.25)]" />
              </span>
              <span className={`rounded px-1.5 text-xs ${selected === a.id ? "bg-[#555554] text-white" : "text-ink/90"}`}>{a.folder}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* windows */}
      {apps.map((a) => {
          const w = wins[a.id];
          if (!w.open) return null;
          const style: React.CSSProperties = mobile
            ? { zIndex: w.z, left: 8, right: 8, top: MENU_H + 8, bottom: 92 }
            : w.max
              ? { zIndex: w.z, left: 0, right: 0, top: MENU_H, bottom: 0 }
              : { zIndex: w.z, left: w.x, top: w.y, width: Math.min(a.w, window.innerWidth - 32), height: `min(${a.h}px, calc(100vh - ${w.y + 96}px))` };
          const hidden = w.min || (mobile && a.id !== topOpen);
          return (
            <section
              key={a.id}
              role="dialog"
              aria-label={a.title}
              onPointerDown={() => focus(a.id)}
              style={{ ...style, display: hidden ? "none" : undefined }}
              className="absolute flex animate-[winIn_.22s_ease-out] flex-col overflow-hidden rounded-xl border border-black/10 bg-[#fafafa] shadow-[0_24px_60px_rgba(0,0,0,.28),0_2px_8px_rgba(0,0,0,.12)]"
            >
              <div
                onPointerDown={(e) => onDown(e, a.id)}
                onPointerMove={onMove}
                onPointerUp={onUp}
                onDoubleClick={() => !mobile && patch(a.id, { max: !w.max })}
                className="relative flex h-10 shrink-0 cursor-default items-center border-b border-black/5 bg-gradient-to-b from-[#f4f4f3] to-[#e8e8e7] px-4"
              >
                <div className="flex gap-2" onPointerDown={(e) => e.stopPropagation()}>
                  <button type="button" aria-label="Close" onClick={() => patch(a.id, { open: false, max: false, min: false })} className="h-3 w-3 rounded-full bg-[#ec6a5e] ring-1 ring-black/10 hover:brightness-90" />
                  <button type="button" aria-label="Minimize" onClick={() => patch(a.id, { min: true })} className="h-3 w-3 rounded-full bg-[#f4bf4f] ring-1 ring-black/10 hover:brightness-90" />
                  <button type="button" aria-label="Zoom" onClick={() => patch(a.id, { max: !w.max })} className="h-3 w-3 rounded-full bg-[#61c554] ring-1 ring-black/10 hover:brightness-90" />
                </div>
                <span className="pointer-events-none absolute inset-x-0 text-center text-[13px] text-ink/70">{a.title}</span>
              </div>
              <div className="min-h-0 flex-1 overflow-auto select-text">{a.body}</div>
            </section>
          );
      })}

      {/* dock */}
      <nav aria-label="Dock" className="absolute inset-x-0 bottom-3 z-[260] flex justify-center">
        <ul className="flex items-end gap-3 rounded-[1.4rem] border border-white/60 bg-white/45 px-3 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,.18)] backdrop-blur-2xl">
          {apps.map((a) => {
            const Icon = a.icon;
            const w = wins[a.id];
            return (
              <li key={a.id} className="group relative flex flex-col items-center">
                <span className="pointer-events-none absolute -top-9 rounded-md bg-black/70 px-2 py-1 text-[11px] whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100">{a.title}</span>
                <button
                  type="button"
                  onClick={() => open(a.id)}
                  aria-label={`Open ${a.title}`}
                  className="grid h-12 w-12 place-items-center rounded-xl text-white shadow-[0_3px_8px_rgba(0,0,0,.3)] transition-transform duration-200 hover:-translate-y-2 hover:scale-125 active:scale-110"
                  style={{ background: `linear-gradient(160deg, ${a.from}, ${a.to})` }}
                >
                  <Icon aria-hidden className="h-6 w-6" strokeWidth={1.7} />
                </button>
                <span aria-hidden className={`mt-1 h-1 w-1 rounded-full ${w.open ? "bg-ink/60" : "bg-transparent"}`} />
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
