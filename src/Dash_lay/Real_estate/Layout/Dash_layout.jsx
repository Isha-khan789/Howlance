import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footerr";
import { Outlet } from "react-router-dom";

const Dash_layout = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Dash_layout;
