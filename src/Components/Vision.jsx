import React from "react";
import { FaHandshake, FaTools, FaStopwatch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../Utilities/animation";

const Vision = () => {
  const steps = [
    {
      icon: <FaHandshake size={60} />,
      title: "Share your Vision",
      description:
        "Tell us what you want to achieve. Whether you’re starting something new, scaling up, or improving what you already have, we help you define the best starting point.",
    },
    {
      icon: <FaTools size={60} />,
      title: "Plan the Way Forward",
      description:
        "Together, we create a simple and practical plan that matches your vision, removes obstacles, and sets you up for success.",
    },
    {
      icon: <FaStopwatch size={60} />,
      title: "Make It Happen",
      description:
        "We put the plan into action. Soon, you’ll start seeing real progress as your ideas turn into results and your dream begins to take shape.",
    },
  ];

  return (
    <motion.div
      className="py-12 px-4"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold font-display text-center mb-10">
        Your 3 Steps to Turn Vision into Reality
      </h2>

      <div className="flex flex-col md:flex-row p-5 border-gray-400 rounded-x3l shadow-md items-stretch justify-center gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-start relative w-full md:w-1/3"
          >
            <div className="flex items-center justify-between w-full mb-4">
              <span className="text-black">{step.icon}</span>
              <button className="rounded-full px-5 py-1 text-sm font-semibold bg-white text-black hover:bg-black transition hover:text-white">
                STEP {index + 1}
              </button>
            </div>

            <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-600 text-base">{step.description}</p>

            {index < steps.length - 1 && (
              <div className="hidden md:flex absolute right-[-10px] top-1/2 -translate-y-1/2">
                <div className="bg-white rounded-full p-3">
                  <FaArrowRight size={18} className="text-black" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-black flex mt-7 text-white cursor-pointer font-medium rounded-full px-13 py-3 items-center justify-center gap-2 hover:bg-black hover:text-white transition">
          Book a Call
        </button>
      </div>
    </motion.div>
  );
};

export default Vision;
