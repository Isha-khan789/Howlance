import React from "react";

const Position = () => {
  const data = [
    { year: "2016", title: "Year Founded" },
    { year: "50+", title: "Employees" },
    { year: "90%", title: "Growth" },
    { year: "4.9+", title: "Rating on Upwork" },
  ];

  return (
    <div className="bg-black py-12 px-4">
      <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-10 text-center">
        Unlock Your Potential With Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-8 bg-neutral-800 rounded-xl shadow-md"
          >
            <div className="text-4xl font-extrabold text-white">
              {item.year}
            </div>
            <div className="text-lg mt-3 bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Position;
