import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar"; // layout’s own navbar
import Footer from "./Footerr";
import HomeNavbar from "../../../Components/Navbar"; // homepage navbar

const Dash_layout = () => {
  const location = useLocation();
  const isRealEstate = location.pathname.startsWith("/real-estate");

  return (
    <div>
      {isRealEstate ? <HomeNavbar /> : <Navbar />}
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Dash_layout;
