import { Banner } from "./banner";
import { ClientFeedback } from "./client-feedback";
import { Cryptic } from "./cryptic";
import { Price } from "./price";
import Services from "./service";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <Banner />
      <ClientFeedback />
      <Cryptic />
      <Services />
      <Price />
    </div>
  );
}
