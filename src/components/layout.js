import Menu from "./commons/menu";

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      <main>{children}</main>
      {/* footer */}
    </>
  );
}
