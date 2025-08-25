import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "../../Utilities/animation.js";
const Statss = () => {
  const stats = [
    { end: 395, label: "Seller Matched with Buyers" },

    { end: 73685, label: "Total Sq. Ft. sold" },
    { end: 100, label: "Total Values of deals", prefix: "$", suffix: "M" },
  ];

  return (
    <motion.div
      className="w-full py-12  overflow-hidden"
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
    >
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-center">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center flex-1 min-w-[300px]"
          >
            <h2 className="text-4xl font-normal text-white">
              <CountUp
                end={stat.end}
                duration={3}
                prefix={stat.prefix || ""}
                suffix={stat.suffix || ""}
              />
              +
            </h2>
            <p className="mt-2 sm:whitespace-nowrap text-lg text-white">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Statss;
