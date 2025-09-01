import React from "react";
import img from "../../assets/Real_canva.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../Utilities/animation.js";

const Sec4 = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="text-left"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <span className="inline-block text-xs font-light tracking-wide uppercase px-3 py-1 border border-gray-400 rounded-full mb-4">
            We Deliver
          </span>
          <h2 className="text-2xl md:text-3xl font-light mb-4">
            Fully Verified Leads You Can Trust{" "}
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-lg">
            Every prospect we deliver is ISA screened, verified, and
            double-checked to ensure quality. Realtors can focus on closing
            deals with confidence, knowing that only genuine, high-intent buyers
            and sellers are connected to them.
          </p>
        </motion.div>
        <motion.div
          className="flex justify-center"
          variants={fadeIn("left", 0.2)}
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
      </div>
    </section>
  );
};

export default Sec4;
