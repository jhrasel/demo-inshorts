import { Banner } from "./banner";
import { ClientFeedback } from "./client-feedback";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 pb-10">
      <Banner />
      <ClientFeedback />
    </div>
  );
}
