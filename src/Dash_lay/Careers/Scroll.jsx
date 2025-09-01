import React from "react";
import Service from "../../assets/Service.png";
import New from "../../assets/York.png";
import Jets from "../../assets/Jets.png";
import Brand from "../../assets/Brand.png";
import Gone from "../../assets/Hexagon.png";
import Toyota from "../../assets/Toyota.png";
import Holman from "../../assets/Holman.png";
import rov from "../../assets/rov.png";
import htx from "../../assets/HTX.png";
import sam from "../../assets/sam.png";
import str from "../../assets/str.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../../Utilities/animation.js";

const Scrolll = () => {
  const logos = [
    Service,
    New,
    Jets,
    Brand,
    rov,
    sam,
    Gone,
    htx,
    Toyota,
    Holman,
    str,
  ];

  return (
    <motion.div
      className="relative bg-black mb-3 py-6 mt-8 overflow-hidden"
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
    >
      {/* First line: left-to-right */}
      <div className="overflow-hidden whitespace-nowrap mb-4 ">
        <div className="flex animate-scroll space-x-16">
          {logos.concat(logos).map((logo, index) => (
            <img
              src={logo}
              key={index}
              alt="logo"
              className="h-16 w-auto object-contain grayscale text-white "
            />
          ))}
        </div>
      </div>

      {/* Second line: right-to-left */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex animate-scroll-reverse space-x-16">
          {logos.concat(logos).map((logo, index) => (
            <img
              src={logo}
              key={index + logos.length}
              alt="logo"
              className="h-16 w-auto object-contain grayscale "
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Scrolll;
