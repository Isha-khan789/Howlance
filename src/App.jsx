import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Logoscroll from "./Components/Logoscroll";
import Stage from "./Components/Stage";
import Vision from "./Components/Vision";
import Accordion from "./Components/Accordion";
import Client from "./Components/Client";
import Footeer from "./Components/Footeer";

import Dash_layout from "./Dash_lay/Real_estate/Layout/Dash_layout";
import Real from "./Dash_lay/Real_estate/Real";
import Car from "./Dash_lay/Careers/Car";

function HomePage() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Logoscroll />
      <Stage />
      <Vision />
      <Accordion />
      <Client />
      <Footeer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Real Estate → Homepage Navbar */}
        <Route path="/real-estate" element={<Dash_layout />}>
          <Route index element={<Real />} />
        </Route>

        {/* Careers → Layout Navbar */}
        <Route path="/careers" element={<Dash_layout />}>
          <Route index element={<Car />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
