import React from "react";
import Heroo from "./Heroo";
import Card from "./Card";
import Client from "../../Components/Client";
import Accordiann from "./Accordiann";
const Real = () => {
  return (
    <div>
      <Heroo />
      <div id="subscriptions">
        <Card />
      </div>
      <Accordiann />
      <Client />
    </div>
  );
};

export default Real;
