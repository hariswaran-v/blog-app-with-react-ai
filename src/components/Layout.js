import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6 bg-white border border-zinc-200 rounded-lg shadow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
