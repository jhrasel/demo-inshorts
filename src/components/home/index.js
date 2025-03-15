import { Categories } from "./categories";
import { Follow } from "./follow";
import { MyFeeds } from "./my-feeds";

export default function HomePage() {
  return (
    <>
      <MyFeeds />
      <Categories />
      <Follow />
    </>
  );
}
