import { div } from "framer-motion/client";
import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const Card = () => {
  const [activeTab, setActiveTab] = useState("Realtors");
  const Realtors = [
    {
      title: "Starter",
      pricing: "$800",

      features: [
        "10 exclusive leads",
        "Verified buyer and seller connections",
        "Location and budget targeting",
      ],
    },
    {
      title: "Growth",
      pricing: "$1,500",

      features: [
        "20 exclusive leads",
        "Property insights and analytics",
        "Increased closing opportunities",
        "Time-saving prospecting tools",
      ],
    },
    {
      title: "Elite",
      pricing: "$3,000 + 5% Deal Success",

      features: [
        "30 exclusive leads ",
        "Advanced data-driven analytics",
        "Dedicated account manager",
        "Unlimited targeting & market insights",
        "Fully Verified Prospects (ISA Screened & Double-Checked)",
      ],
      highlight: true,
    },
  ];
  const investorPlans = [
    {
      title: "Starter",
      pricing: "$1,000",
      features: [
        "20 exclusive leads",
        "Verified seller connections",
        "Location and budget targeting",
        "Property insights",
      ],
    },
    {
      title: "Growth",
      pricing: "$2,500",
      features: [
        "36 exclusive leads",
        "Data-driven ROI insights",
        "Subscription-based lead flow",
        "Access to serious sellers",
      ],
    },
    {
      title: "Elite",
      pricing: "$5,000  + 5% Deal Success",
      features: [
        "60 exclusive leads",
        "High-ROI investment opportunities",
        "Advanced analytics dashboard",
        "Dedicated account manager",
        "Fully Verified Prospects (ISA Screened & Double-Checked)",
      ],
      highlight: true,
    },
  ];
  const plan = activeTab === "Realtors" ? Realtors : investorPlans;
  return (
    <>
      <div className="p-8 mt-9  items-center flex flex-col justify-center  ">
        <h3 className="text-3xl font-display text-center">
          Your Pipeline. Your Profit. No Risk.
        </h3>
        <p className="font-display text-md max-w-3xl text-center  p-3 mt-1">
          We handle the hard part finding & verifying real buyers and sellers.
          You focus on closing. Plus, enjoy instant replacements and a
          guaranteed refund policy under our subscription plans.
        </p>
      </div>
      <div className="py-16 px-6 flex flex-col items-center font-display">
        <div className="flex bg-gray-300 rounded-full p-1 mb-10">
          <button
            onClick={() => setActiveTab("Realtors")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === "Realtors"
                ? "bg-[#2F2C2B] text-white"
                : "text-[#2F2C2B] hover:bg-gray-700"
            }`}
          >
            3 Months
          </button>
          <button
            onClick={() => setActiveTab("Investors")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === "Investors"
                ? "bg-[#2F2C2B] text-white"
                : "text-[#2F2C2B] hover:bg-gray-300"
            }`}
          >
            6 Months
          </button>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {plan.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-lg text-left p-8 flex flex-col items-center  transition ${
                plan.highlight
                  ? "bg-[#2F2C2B] text-white scale-105"
                  : "bg-white"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4 lg:whitespace-nowrap md:text-md sm:text-base">
                {plan.title} | {plan.pricing}
              </h3>

              <ul className="mt-6 space-y-3 w-full">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm flex items-start gap-x-3">
                    <TiTick
                      className="text-green-500 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span className="break-words">{feature}</span>
                  </li>
                ))}
              </ul>
              {/* <button
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  plan.title === "Starter" ? "mt-28" : "mt-18"
                } ${
                  plan.highlight
                    ? "bg-white text-[#2F2C2B] hover:bg-gray-200"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                Buy Plan
              </button> */}
              <button
                className={`px-5 py-1 rounded-full font-semibold transition ${
                  plan.title === "Starter" ? " mt-30" : "mt-20"
                }
  bg-white text-[#2F2C2B] hover:bg-gray-200 mt-20`}
              >
                Buy Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
