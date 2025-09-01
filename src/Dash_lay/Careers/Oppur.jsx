import { IoBookOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { RiExchangeDollarLine } from "react-icons/ri";
import { motion } from "framer-motion";
import React, { useState } from "react";

const itemData = [
  {
    icon: <IoBookOutline size={40} />,
    title: "Learning Opportunities",
    description:
      "Referral Program: Earn bonuses by referring talented individuals to join our team. Your network can help shape our company, and we reward those who contribute to our growth!",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: <CiGlobe size={40} />,
    title: "Flexible Work Environment",
    description:
      "Continuous Learning Opportunities: We prioritize professional development by offering access to training programs, workshops, and conferences. Enhance your skills and stay ahead in the ever-evolving tech landscape.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <RiExchangeDollarLine size={40} />,
    title: "Referral Program",
    description:
      "Flexible Work Environment: Enjoy the freedom of remote work or flexible hours that fit your lifestyle. We believe in work-life balance, empowering you to perform at your best while maintaining personal well-being.",
    gradient: "from-pink-500 to-orange-500",
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 10, height: 0 },
  visible: { opacity: 1, y: 0, height: "auto" },
};

const Oppur = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div className="bg-black min-h-[500px] flex justify-center items-center px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-white max-w-6xl w-full">
        {itemData.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col items-center relative cursor-pointer px-6 py-6
              ${
                i !== itemData.length - 1
                  ? "border-b sm:border-b-0 sm:border-r border-gray-700"
                  : ""
              }
            `}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            {/* Icon circle with gradient border */}
            <div
              className={`rounded-full mb-4 border-2 border-transparent bg-gradient-to-tr  text-white`}
            >
              <div className="bg-black rounded-full p-2">{item.icon}</div>
            </div>

            <h3 className="text-lg font-medium mb-2 text-center">
              {item.title}
            </h3>

            {/* Description inside border */}
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              animate={hoveredIndex === i ? "visible" : "hidden"}
              transition={{ duration: 0.3 }}
              className="overflow-hidden text-center"
            >
              <p className="text-sm">{item.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Oppur;
