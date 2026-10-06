// Generates grainy, film-like placeholder photos so the page feels real before you add your own.
import { writeFileSync } from "node:fs";
const tones = [
  ["portrait", "#cdbfb2", "#6f625a", "#2a2320"],
  ["project-1", "#c5ced9", "#6d7f93", "#222b35"],
  ["project-2", "#dcc6cc", "#9a7480", "#32222a"],
  ["project-3", "#cdd1bd", "#7c846a", "#242a1d"],
  ["project-4", "#e0d2b6", "#a38a5c", "#33291a"],
  ["project-5", "#c9c9cd", "#74747c", "#1f1f25"],
  ["project-6", "#e2cbbf", "#a97d6b", "#33211a"],
];
for (const [name, a, b, c] of tones) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" preserveAspectRatio="xMidYMid slice">
<defs>
<radialGradient id="l" cx=".3" cy=".2" r="1"><stop offset="0" stop-color="${a}"/><stop offset=".6" stop-color="${b}"/><stop offset="1" stop-color="${c}"/></radialGradient>
<filter id="blur"><feGaussianBlur stdDeviation="28"/></filter>
<filter id="grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="3" seed="4"/><feColorMatrix values="0 0 0 0 .5  0 0 0 0 .5  0 0 0 0 .5  0 0 0 .55 0"/></filter>
</defs>
<rect width="800" height="1000" fill="url(#l)"/>
<g filter="url(#blur)" opacity=".85"><ellipse cx="400" cy="380" rx="130" ry="150" fill="${c}"/><path d="M90 1000c0-250 130-400 310-400s310 150 310 400z" fill="${c}"/><ellipse cx="620" cy="140" rx="160" ry="90" fill="${a}" opacity=".7"/></g>
<rect width="800" height="1000" filter="url(#grain)" style="mix-blend-mode:overlay"/>
<rect width="800" height="1000" filter="url(#grain)" opacity=".35"/>
</svg>`;
  writeFileSync(`public/img/${name}.svg`, svg);
}
