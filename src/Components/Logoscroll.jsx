import React from "react";
import Service from "../assets/Service.png";
import New from "../assets/York.png";
import Jets from "../assets/Jets.png";
import Brand from "../assets/Brand.png";
import Gone from "../assets/Hexagon.png";
import Toyota from "../assets/Toyota.png";
import Holman from "../assets/Holman.png";
// import { motion } from "framer-motion";
// import { fadeIn } from "../Utilities/animation";
const Logoscroll = () => {
  const logos = [Service, New, Jets, Brand, Gone, Toyota, Holman];
  return (
    <div
      className="relative  bg-white py-6   overflow-x-scroll no-scrollbar"
      // variants={fadeIn("right", 0.2)}
      // initial="hidden"
      // whileInView={"show"}
      // viewport={{ once: false, amount: 0.7 }}
    >
      <div className="flex animate-scroll space-x-16">
        {logos.concat(logos).map((logo, index) => (
          <img
            src={logo}
            key={index}
            alt="logo"
            className="h-16 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Logoscroll;
