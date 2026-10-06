import { portfolio } from "@/data/portfolio";
import { Heading } from "./ui";

export function ExperienceLeft() {
  return (
    <div>
      <Heading sub="where I've studied">education</Heading>
      <ul className="space-y-6">
        {portfolio.education.map((e) => (
          <li key={e.school} className="border-l-2 border-navy/40 pl-4">
            <p className="font-handlee text-xl leading-tight">{e.school}</p>
            <p className="mt-0.5 text-sm text-ink/85">{e.degree}</p>
            <p className="font-handlee text-sm text-muted">{e.period} · {e.note}</p>
          </li>
        ))}
      </ul>

      <p className="mt-10 font-pen text-3xl">skills</p>
      <dl className="mt-2 space-y-4 text-sm">
        {portfolio.skills.map((s) => (
          <div key={s.label}>
            <dt className="font-pen text-xl text-navy">{s.label}</dt>
            <dd className="leading-relaxed text-ink/85">{s.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function ExperienceRight() {
  return (
    <div>
      <Heading sub="work and projects">experience</Heading>
      <ol className="space-y-5">
        {portfolio.experience.map((x) => (
          <li key={x.role} className="grid grid-cols-[4.5rem_1fr] gap-3">
            <span className="pt-1 font-handlee text-xs text-muted">{x.period}</span>
            <div>
              <p className="font-handlee text-lg leading-tight">{x.role}</p>
              <p className="text-xs text-muted">{x.org}</p>
              <p className="mt-1 text-[0.82rem] leading-relaxed text-ink/85">{x.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-6 font-pen text-xl text-navy">+ research roles on the previous page</p>
    </div>
  );
}
