import { FileText, Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Marks } from "./Marks";

const linkCls = "underline decoration-ink/35 decoration-[1.5px] underline-offset-4 transition-colors hover:decoration-ink";

const M = Marks;
const Ext = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a className={linkCls} href={href} target="_blank" rel="noreferrer">{children}</a>
);

export function Bio({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-4 text-[0.9rem] leading-[1.75] text-ink/90 ${className}`}>
      <p>
        <M>
          I am a master&apos;s student in data science at <Ext href="https://www.mtsu.edu">Middle Tennessee State University</Ext>, where I work as
          a research assistant in the Smart Sensing and Robotics Lab and as a graduate assistant in the Jones College of Business IT Services.
          I also do research at <Ext href="https://www.vumc.org">Vanderbilt University Medical Center</Ext>. Before MTSU, I earned my bachelor&apos;s
          degree in data journalism at <Ext href="https://www.sufe.edu.cn">Shanghai University of Finance and Economics</Ext>, with an exchange term
          at <Ext href="https://www.neoma-bs.com">NEOMA Business School</Ext> in Paris.
        </M>
      </p>
      <p className="text-ink/80">
        <M>
          I am interested in how we evaluate AI systems, and in what a system&apos;s performance really tells us about how it understands. I am
          especially drawn to the intersection of AI and other fields, such as philosophy and cognitive science, and to evaluation that takes
          seriously the people who use these systems and why. My current work is in applied machine learning, including a co-authored full paper on classifying actuator
          motion with large language models, presented at ASME MSEC 2026. For more detail, see my{" "}
          <a className={linkCls} href={portfolio.links.cv} target="_blank" rel="noreferrer">CV</a>.
        </M>
      </p>
      <p className="text-ink/80">
        <M>I speak {portfolio.languages}.</M>
      </p>
    </div>
  );
}

/** Top of the page: only the two things a reader needs right away. */
export function LinkButtons() {
  return (
    <div className="flex items-center gap-3">
      <a href={portfolio.links.cv} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center gap-2 rounded-full bg-ink px-5 text-sm text-paper transition-opacity hover:opacity-85">
        <FileText aria-hidden className="h-4 w-4" /> CV
      </a>
      <a href={`mailto:${portfolio.email}`} className="inline-flex h-10 items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-5 text-sm transition-colors hover:bg-ink hover:text-paper">
        <Mail aria-hidden className="h-4 w-4" /> Email
      </a>
    </div>
  );
}
