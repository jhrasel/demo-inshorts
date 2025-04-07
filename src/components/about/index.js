import { Cryptic } from "../home/cryptic";
import AboutBanner from "./banner";
import { ProjectCount } from "./projectCount";
import { Team } from "./team";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <AboutBanner />
      <Cryptic />
      <ProjectCount />
      <Team />
    </div>
  );
}
