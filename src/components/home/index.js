import { Banner } from "./banner";
import { ClientFeedback } from "./client-feedback";
import { Cryptic } from "./cryptic";
import Services from "./service";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 pb-10">
      <Banner />
      <ClientFeedback />
      <Cryptic />
      <Services />
    </div>
  );
}
