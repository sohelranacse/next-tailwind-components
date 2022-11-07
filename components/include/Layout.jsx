import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto my-5">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
