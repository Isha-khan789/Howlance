import React from "react";
import Vid from "../assets/white_backk.mp4";
import Stats from "./Stats";
import { motion } from "framer-motion";
import { fadeIn } from "../Utilities/animation";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col  items-center justify-center text-center px-[5vw] overflow-hidden">
      {/* Background video (sits under everything, including navbar) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={Vid}
      />

      {/* <div className="absolute inset-0 bg-black/25 z-0" /> */}

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto">
        <h3 className="text-md sm:text-xl md:text-xl lg:text-3xl font-display font-light text-[#2F2C2B] leading-tight  mt-28 whitespace-nowrap">
          Where business dreams become reality
        </h3>

        <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-xl text-[#2F2C2B] font-secondary  mx-auto">
          We believe every great business starts with a bold dream. Our mission
          is to turn those dreams into tangible success by combining innovation,
          strategic insight and relentless dedication. We’re committed to
          empowering entrepreneurs and businesses to break boundaries, seize
          opportunities and build a future they’ve always envisioned, together!
          <br />
          Let’s transform your vision into reality.
        </p>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="mt-10"
        >
          <Stats />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
