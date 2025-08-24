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

function App() {
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

export default App;
