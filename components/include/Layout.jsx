import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
