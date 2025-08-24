import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Utilities/animation";

const Hero = () => {
  return (
    <motion.div
      className="items-center justify-center p-9 mt-15 overflow-hidden"
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
    >
      <h3 className="text-5xl text-center  font-display font-light  text-black">
        Where business dream become reality
      </h3>
      <p className="mt-5 px-9 text-center text-xl m-11 text-gray-600  font-secondary">
        We believe every great business starts with a bold dream. Our mission is
        to turn those dreams into tangible success by combining innovation,
        strategic insight and relentless dedication. We’re committed to
        empowering entrepreneurs and businesses to break boundaries, seize
        opportunities and build a future they’ve always envisioned, Together!
        <br />
        Let’s transform your vision into reality.
      </p>
    </motion.div>
  );
};

export default Hero;
