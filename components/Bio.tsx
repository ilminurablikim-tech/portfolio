import { Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons";
import { linkCls } from "./pages/ui";

export function Bio({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-4 text-[0.9rem] leading-[1.7] text-ink/90 ${className}`}>
      <p>
        I am a master&apos;s student in data science at{" "}
        <a className={linkCls} href="https://www.mtsu.edu" target="_blank" rel="noreferrer">Middle Tennessee State University</a>{" "}
        (GPA 3.95), where I work as a research assistant in the Smart Sensing and Robotics Lab and the Neuromarketing &amp; AI Lab, and as a
        graduate assistant in the Jones College of Business IT Services. I also do research at{" "}
        <a className={linkCls} href="https://www.vumc.org" target="_blank" rel="noreferrer">Vanderbilt University Medical Center</a>.
        Before MTSU, I earned my bachelor&apos;s degree in data journalism at Shanghai University of Finance and Economics.
      </p>
      <p className="text-ink/80">
        My research combines machine learning with physical and biological data. Recent work includes a physics-informed digital twin of a
        piezoelectric actuator that pairs calibrated hysteresis modeling with a Mamba-based network, a Transformer-based classifier that
        identifies actuator motion from heterodyne-interferometry measurements with nanometer-level precision, and a TF-informed TWAS study
        built on single-cell chromatin accessibility data. A co-authored paper from this work appears at ASME MSEC 2026. For more detail, see my{" "}
        <span className={linkCls}>CV</span>.
      </p>
      <p className="text-ink/80">I speak {portfolio.languages}.</p>
    </div>
  );
}

export function LinkButtons() {
  const iconBtn = "grid h-10 w-10 place-items-center rounded-full border border-ink/15 bg-white/60 transition-colors hover:bg-ink hover:text-paper";
  return (
    <div className="flex items-center gap-3">
      <a href={`mailto:${portfolio.email}`} className="inline-flex h-10 items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-5 text-sm transition-colors hover:bg-ink hover:text-paper">
        <Mail aria-hidden className="h-4 w-4" /> Email
      </a>
      <a href={portfolio.links.github} aria-label="GitHub" target="_blank" rel="noreferrer" className={iconBtn}><GithubIcon /></a>
      <a href={portfolio.links.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className={iconBtn}><LinkedinIcon /></a>
    </div>
  );
}
