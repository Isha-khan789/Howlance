import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Utilities/animation";

const Hero = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center px-4 md:px-12 lg:px-20 py-12 mt-10 text-center overflow-hidden"
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.5 }}
    >
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-light text-black leading-snug max-w-4xl">
        Where business dreams <br /> become reality
      </h3>

      <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-secondary max-w-7xl">
        We believe every great business starts with a bold dream. Our mission is
        to turn those dreams into tangible success by combining innovation,
        strategic insight and relentless dedication. We’re committed to
        empowering entrepreneurs and businesses to break boundaries, seize
        opportunities and build a future they’ve always envisioned, together!
        <br />
        Let’s transform your vision into reality.
      </p>
    </motion.div>
  );
};

export default Hero;
