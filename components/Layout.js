import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="max-w-[1280px] w-[90%] 2xl:w-full mx-auto">{children}</div>
      </section>
      <Footer />
    </>
  );
};

export default Layout;
