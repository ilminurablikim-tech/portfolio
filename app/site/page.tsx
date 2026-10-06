import { Defs } from "@/components/Defs";
import { Site } from "@/components/site/Site";
import { VersionSwitch } from "@/components/VersionSwitch";

export default function SitePage() {
  return (
    <>
      <Defs />
      <Site />
      <VersionSwitch current="site" />
    </>
  );
}
