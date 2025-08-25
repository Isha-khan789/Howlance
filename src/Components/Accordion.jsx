import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../Utilities/animation";

// Accordion Item Component
const AccordionItem = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="p-4 bg-white mb-6 rounded max-w-2xl w-full mx-auto">
      <div
        className="flex items-center justify-between cursor-pointer text-black"
        onClick={() => setToggle(!toggle)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        {toggle ? <FaMinus /> : <FaPlus />}
      </div>
      {toggle && <p className="mt-4 text-black">{answer}</p>}
    </div>
  );
};

const Accordion = () => {
  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We do a bit of everything to keep your biz moving: sales, lead gen, marketing, customer support, Virtual Assistants (VAs), and even software development. Doesn’t matter if you’re just starting out, leveling up, or already running big, we’ve got options that fit your grind.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "No flat tag here. You can roll with a subscription plan, sign up and start getting results, or keep it chill with an hourly setup if that fits better. Price depends on what you need, but we keep it straight-up and transparent.",
    },
    {
      question: "Can I try before committing long-term?",
      answer:
        "Yeah, no stress. We offer a 7-day paid trial where we show you what we can do. You see the work, check the results, and then decide if you wanna keep rolling with us. Simple as that.",
    },
    {
      question: "What makes your approach different?",
      answer:
        "We keep things practical and straightforward. No overpromising, just clear strategies and consistent support built around your business needs.",
    },
    {
      question: "How do I get started?",
      answer:
        "Easy move. Book a call or grab a service plan, and one of our account managers will hit you back within a couple hours to set up your onboarding. Quick and smooth.",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleFAQs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <motion.div
      className="mt-12 px-4 max-w-4xl font-display mx-auto text-center"
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
    >
      <h3 className="text-5xl font-bold mb-10">FAQ</h3>

      <div className="flex flex-col items-center gap-2 text-left">
        {visibleFAQs.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>

      {faqs.length > 3 && (
        <button
          className="mt-6 px-6 py-2 rounded-full cursor-pointer bg-black text-white font-semibold hover:bg-white hover:text-black transition-all"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </motion.div>
  );
};

export default Accordion;
