import { Defs } from "@/components/Defs";
import { Desktop } from "@/components/desktop/Desktop";
import { VersionSwitch } from "@/components/VersionSwitch";

export default function DesktopPage() {
  return (
    <>
      <Defs />
      <main>
        <Desktop />
      </main>
      <VersionSwitch current="desktop" />
    </>
  );
}
