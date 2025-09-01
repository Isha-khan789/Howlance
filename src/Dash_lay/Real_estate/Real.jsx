import React from "react";
import Heroo from "./Heroo";
import Card from "./Card";
import Client from "../../Components/Client";
import Accordiann from "./Accordiann";
import Sec3 from "./Sec3";
import Sec4 from "./Sec_4";
import Logoscroll from "../../Components/Logoscroll";
const Real = () => {
  return (
    <div>
      <Heroo />
      <Logoscroll />
      <Sec3 />
      <Sec4 />
      <div id="subscriptions">
        <Card />
      </div>
      <Accordiann />
      <Client />
    </div>
  );
};

export default Real;
