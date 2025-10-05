import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-1 w-11/12 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
