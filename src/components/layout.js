import Footer from "./commons/footer";
import Menu from "./commons/menu";

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer/>
    </>
  );
}
