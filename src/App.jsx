import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import Logoscroll from "./Components/Logoscroll";
import Stage from "./Components/Stage";
import Vision from "./Components/Vision";
import Accordion from "./Components/Accordion";
import Client from "./Components/Client";
import Footeer from "./Components/Footeer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dash_layout from "./Dash_lay/Real_estate/Layout/Dash_layout";
import Real from "./Dash_lay/Real_estate/Real";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="pt-28">
        <Hero />
      </div>
      <Stats />
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

        {/* Real Estate Routes */}
        <Route path="/real-estate" element={<Dash_layout />}>
          <Route index element={<Real />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
