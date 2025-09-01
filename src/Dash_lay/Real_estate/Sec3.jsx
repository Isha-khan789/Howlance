import React from "react";
import img from "../../assets/logo_canva.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../Utilities/animation.js";
const Sec3 = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <motion.div
          className="flex justify-center order-2 md:order-1"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img
            src={img}
            alt="Buyers and Sellers illustration"
            className="w-full max-w-md object-contain"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="text-left order-1 md:order-2"
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <span className="inline-block text-xs font-light tracking-wide uppercase px-3 py-1 border border-gray-400 rounded-full mb-4">
            We Deliver
          </span>
          <h2 className="text-2xl md:text-3xl font-light mb-4">
            Right Buyers & Sellers, Every Time
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-lg">
            Finding the right buyer or seller shouldn’t be a gamble. Our
            platform connects realtors and investors with profiles that truly
            fit, streamlining deals and maximizing value. Smart matches, faster
            closings, real results.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Sec3;
