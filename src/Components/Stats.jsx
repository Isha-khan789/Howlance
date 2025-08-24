import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "../Utilities/animation";

const Stats = () => {
  const stats = [
    { end: 10, label: "Years Experiences" },
    { end: 25, label: "Industries Served" },
    { end: 100, label: "Worldwide Clients" },
  ];

  return (
    <motion.div
      className="w-full py-12 bg-white overflow-hidden"
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 text-center">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center flex-1 min-w-[200px]"
          >
            <h2 className="text-4xl font-normal text-gray-800">
              <CountUp end={stat.end} duration={3} />+
            </h2>
            <p className="mt-2 text-lg text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Stats;
