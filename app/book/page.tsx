import { Defs } from "@/components/Defs";
import { Portfolio, type Spread } from "@/components/Portfolio";
import { AboutLeft, AboutRight } from "@/components/pages/About";
import { ResearchLeft, ResearchRight } from "@/components/pages/Research";
import { ExperienceLeft, ExperienceRight } from "@/components/pages/Experience";
import { ContactLeft, ContactRight } from "@/components/pages/Contact";
import { portfolio } from "@/data/portfolio";
import { VersionSwitch } from "@/components/VersionSwitch";

const spreads: Spread[] = [
  { id: "about", label: "About", left: <AboutLeft />, right: <AboutRight /> },
  { id: "research", label: "Research", left: <ResearchLeft />, right: <ResearchRight /> },
  { id: "experience", label: "Experience", left: <ExperienceLeft />, right: <ExperienceRight /> },
  { id: "contact", label: "Contact", left: <ContactLeft />, right: <ContactRight />, flushRight: true },
];

export default function Home() {
  return (
    <>
      <Defs />
      <main>
        <Portfolio name={portfolio.name} spreads={spreads} />
      </main>
      <VersionSwitch current="book" />
    </>
  );
}
