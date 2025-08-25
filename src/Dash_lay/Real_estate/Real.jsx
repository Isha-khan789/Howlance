import React from "react";
import Heroo from "./Heroo";
import Card from "./Card";
import Vision from "../../Components/Vision";
import Accordion from "../../Components/Accordion";
import Client from "../../Components/Client";

const Real = () => {
  return (
    <div>
      <Heroo />
      <div id="subscriptions">
        <Card />
      </div>
      <Vision />
      <Accordion />
      <Client />
    </div>
  );
};

export default Real;
