import React, { useEffect, useState } from "react";
import dash from "../assets/Dash.png";
import Iq from "../assets/IQ.svg";
import Dop from "../assets/Dopamine.webp";
import Un from "../assets/Bright.jpg";
import pay from "../assets/pay.svg";
import ok from "../assets/Okex.png";
import bull from "../assets/Bull.png";
import pro from "../assets/Pro.png";
import hy from "../assets/Hy.png";
import hello from "../assets/hell.jpg";
import hub from "../assets/Hub.png";
import bit from "../assets/Bit.png";
import force from "../assets/sale.png";
import b2b from "../assets/b2b.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../Utilities/animation";
import Foc from "../assets/focal.webp";

const Client = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  const logos = [
    dash,
    Iq,
    Dop,
    Un,
    pay,
    ok,
    bull,
    pro,
    hy,
    hello,
    hub,
    bit,
    force,
    b2b,
    Foc,
    pay,
    Foc,
    Un,
  ];
  const getBorderStyles = (index) => {
    if (width >= 1024) {
      return {
        borderTop: index >= 6 ? "1px solid #d1d5db" : "none",
        borderLeft: index % 6 !== 0 ? "1px solid #d1d5db" : "none",
      };
    } else if (width >= 768) {
      return {
        borderTop: index >= 4 ? "1px solid #d1d5db" : "none",
        borderLeft: index % 4 !== 0 ? "1px solid #d1d5db" : "none",
      };
    } else if (width >= 640) {
      return {
        borderTop: index >= 3 ? "1px solid #d1d5db" : "none",
        borderLeft: index % 3 !== 0 ? "1px solid #d1d5db" : "none",
      };
    } else {
      return {
        borderTop: index >= 2 ? "1px solid #d1d5db" : "none",
        borderLeft: index % 2 !== 0 ? "1px solid #d1d5db" : "none",
      };
    }
  };
  return (
    <motion.section
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="py-10 bg-white mt-6"
    >
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-display font-normal mb-8">
        Join our growing list of happy clients.
      </h2>

      {/* Responsive Grid */}
      <div
        className="max-w-7xl mx-auto grid mt-5 mb-6 px-5 py-6 
                      grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            style={getBorderStyles(i)}
            className="flex items-center justify-center p-6 border-gray-300"
          >
            <img
              src={logo}
              alt="logo"
              className={`
    max-h-16 object-contain
    filter grayscale
    hover:grayscale-0
    focus:grayscale-0
    active:grayscale-0
    transition duration-300
  `}
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Client;
