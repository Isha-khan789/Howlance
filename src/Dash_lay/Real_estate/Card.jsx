import React, { useState } from "react";

const Card = () => {
  const [activeTab, setActiveTab] = useState("Realtors");
  const Realtors = [
    {
      title: "Starter",
      duration: "2 Months",
      pricing: "$1,000",
      commission: "1%",
      features: [
        "5 exclusive homeowner or commercial leads",
        "Verified buyer and seller connections",
        "Location and budget targeting",
      ],
    },
    {
      title: "Growth",
      duration: "3 Months",
      pricing: "$3,000",
      commission: "1%",
      features: [
        "20 exclusive homeowner or commercial leads",
        "Property insights and analytics",
        "Increased closing opportunities",
        "Time-saving prospecting tools",
      ],
      highlight: true,
    },
    {
      title: "Elite",
      duration: "6 Months",
      pricing: "$5,000",
      commission: "1%",
      features: [
        "100+ mixed leads (buyers, sellers, homeowners, commercial)",
        "Advanced data-driven analytics",
        "Dedicated account manager",
        "Unlimited targeting & market insights",
      ],
    },
  ];
  const investorPlans = [
    {
      title: "Starter",
      duration: "2 Months",
      pricing: "$1,000",
      commission: "2%",
      features: [
        "5+ off-market property leads",
        "Verified seller connections",
        "Location and budget targeting",
        "Property insights",
      ],
    },
    {
      title: "Growth",
      duration: "3 Months",
      pricing: "$3,000",
      commission: "2%",
      features: [
        "15+ property opportunities",
        "Data-driven ROI insights",
        "Subscription-based lead flow",
        "Access to serious sellers",
      ],
      highlight: true,
    },
    {
      title: "Elite",
      duration: "6 Months",
      pricing: "$5,000",
      commission: "1%",
      features: [
        "100+ mixed leads (sellers, homeowners, buyers)",
        "High-ROI investment opportunities",
        "Advanced analytics dashboard",
        "Dedicated account manager",
      ],
    },
  ];
  const plan = activeTab === "Realtors" ? Realtors : investorPlans;
  return (
    <div className="py-16 px-6 flex flex-col items-center font-display">
      <div className="flex bg-gray-300 rounded-full p-1 mb-10">
        <button
          onClick={() => setActiveTab("Realtors")}
          className={`px-6 py-2 rounded-full font-medium transition ${
            activeTab === "Realtors"
              ? "bg-black text-white"
              : "text-black hover:bg-gray-700"
          }`}
        >
          Realtors
        </button>
        <button
          onClick={() => setActiveTab("Investors")}
          className={`px-6 py-2 rounded-full font-medium transition ${
            activeTab === "Investors"
              ? "bg-black text-white"
              : "text-black hover:bg-gray-300"
          }`}
        >
          Investors
        </button>
      </div>
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {plan.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition ${
              plan.highlight ? "bg-black text-white scale-105" : "bg-white"
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
            <p className="text-lg font-bold">
              {plan.duration} | {plan.price} | {plan.commission}
            </p>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-sm">
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-8 px-6 py-2 rounded-full font-semibold transition ${
                plan.highlight
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Buy Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
