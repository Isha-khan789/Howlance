import React from "react";
import pic1 from "../../assets/Canvalogoo.png";

const Heroo = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center text-center px-[5vw] overflow-hidden">
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center mt-[96px]">
        {/* Text Block */}
        <div className="px-4 text-center mb-10">
          <h1
            className="text-[#2F2C2B] font-light font-display 
            text-3xl sm:text-4xl md:text-5xl lg:text-3xl drop-shadow-lg lg:max-w-3xl mt-30 sm:mt-20 lg:mt-8"
          >
            Your Pathway To Real Estate
          </h1>

          <p
            className="text-gray-600 font-light font-display mt-4
            text-base sm:text-lg md:text-xl lg:text-md max-w-2xl drop-shadow-md"
          >
            Connecting Investors, Realtors, Buyers & Sellers Under One Roof
          </p>
        </div>

        {/* Logo */}
        <img
          src={pic1}
          alt="Logo"
          className="w-full sm:w-full md:w-[350px] lg:w-[350px] 
          h-auto object-contain mx-auto 
          transform-gpu origin-center 
          scale-[2] sm:scale-[2.2] md:scale-[4] lg:scale-[3]
          -mt-8 sm:-mt-16 md:-mt-1 lg:-mt-3 
          sm:mb-0"
        />
      </div>
    </div>
  );
};

export default Heroo;
