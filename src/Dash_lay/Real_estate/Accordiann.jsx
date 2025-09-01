import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../Utilities/animation.js";

// Accordion Item Component
const AccordionItem = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="p-4   mb-4  w-full md:w-3/4 lg:w-2/3 mx-auto">
      <div
        className="flex items-center cursor-pointer  text-[#2F2C2B] w-full justify-between" // Added justify-between
        onClick={() => setToggle(!toggle)}
      >
        <h3 className="text-lg font-normal flex-grow truncate">{question}</h3>
        <span className="ml-4 lg:shrink-0">
          {" "}
          {/* Adjusted margin */}
          {toggle ? <FaMinus /> : <FaPlus />}
        </span>
      </div>
      {toggle && <p className="mt-4 text-gray-600 text-left">{answer}</p>}
    </div>
  );
};

const Accordiann = () => {
  const faqs = [
    {
      question: "How does the platform work?",
      answer: `We generate verified buyer and seller leads through cold calling, ads, and skip tracing. These leads are distributed to Realtors and Investors based on their subscription plans. Realtors close deals, Investors buy or flip properties, and Sellers/Buyers get faster transactions.`,
    },
    {
      question: "How do Realtors earn here?",
      answer: `Realtors connect sellers with buyers and close deals. They keep 100% of their standard commission (2–3%). Our platform doesn’t take a cut from Realtor earnings.`,
    },
    {
      question: "How do Investors earn here?",
      answer: `Investors get direct access to motivated sellers and buyers. They can buy properties at the right price and profit through resale, flipping, or rental income. All ROI (5–15% on average) stays 100% with the Investor.`,
    },
    {
      question: "How do Sellers benefit?",
      answer: `Sellers don’t pay to list. Their property is directly placed in front of serious Realtors and Investors, which means faster sales and verified buyers.`,
    },
    {
      question: "How do Buyers benefit?",
      answer: `Buyers save time and hassle. They’re connected with verified Realtors and Investors who already have the right listings and offers, with no hidden buyer fees.`,
    },
    {
      question: "How does the platform make money?",
      answer: ` We monetize through: Subscription plans (Starter, Growth, Elite). 1% success fee on closed deals (optional). This ensures Realtors and Investors keep 100% of their commissions and profits, while we grow through recurring revenue. `,
    },
    {
      question: "Are the leads exclusive?",
      answer: `Yes. Depending on the plan you choose, you’ll receive exclusive or high-volume verified leads filtered by budget, location, and property type.  `,
    },
    {
      question: "Can you guarantee deals on every lead?",
      answer: ` No platform can guarantee a 100% close rate. But since all our leads are verified and motivated, your closing chances are much higher than traditional prospecting. `,
    },
    {
      question: "Do I need to pay hidden fees?",
      answer: `No. Realtors and Investors only pay subscriptions (and a success fee if chosen). Sellers and Buyers pay nothing extra beyond standard market transactions  `,
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleFAQs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <div className=" max-w-8xl bg-white mt-3  sm:max-w-8xl  font-display mx-auto text-center">
      <h3 className="text-5xl font-normal mb-10">FAQ</h3>

      <motion.div
        className="flex flex-col items-between lg:px-1   text-left"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        {visibleFAQs.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </motion.div>

      {faqs.length > 3 && (
        <button
          className="mt-6 px-6 py-2 rounded-full cursor-pointer bg-[#2F2C2B] text-white font-semibold hover:bg-white hover:text-[#2F2C2B] transition-all"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default Accordiann;
