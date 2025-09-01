import React from "react";
import { TfiLocationArrow } from "react-icons/tfi";

const Herro = () => {
  return (
    <div className="relative bg-black w-full min-h-screen flex flex-col justify-center items-center text-center px-4">
      {/* Text + Button block */}
      <div className="z-10 max-w-3xl flex flex-col items-center">
        <h2 className="text-white text-2xl md:text-5xl lg:text-6xl font-normal ">
          We're On The Lookout
        </h2>
        <h3 className="text-2xl md:text-5xl lg:text-6xl font-normal mt-2">
          <span className="bg-gradient-to-r from-gray-700 to-white bg-clip-text text-transparent">
            For Extraordinary Talent
          </span>{" "}
        </h3>

        {/* Paragraph + button grouped */}
        <div className="mt-6 flex flex-col items-center">
          <p className="text-gray-400 text-sm md:text-lg lg:text-xl md:max-w-3xl mb-4 ">
            If you're motivated, intelligent, passionate and looking for a
            meaningful work environment, Howlance may just be the last place you
            send your resume to
          </p>

          <button className="px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-gray-500 to-gray-700 text-white font-medium rounded-full shadow-lg transition duration-300 hover:opacity-90">
            Join the team
          </button>
        </div>
      </div>

      {/* Floating Job Tags with arrow */}
      <div className="absolute inset-0">
        {/* Top Left */}
        <div className="absolute left-10 top-20 sm:left-39 sm:top-39 md:left-55 md:top-55 lg:left-55 lg:top-68 flex flex-col items-start">
          <TfiLocationArrow className="hidden xl:inline-flex text-gray-600 text-lg mb-1" />
          <span className="hidden xl:inline-flex border-2 border-gray-600 text-gray-300 px-3 py-1 md:px-4 md:py-2 rounded-lg items-center gap-2 text-sm md:text-base">
            Sales Closer
          </span>
        </div>

        {/* Top Right */}
        <div className="absolute right-10 top-24 sm:right-39 sm:top-39 md:right-50 md:top-55 lg:right-39 lg:top-70 flex flex-col items-start">
          <TfiLocationArrow className="hidden xl:inline-flex text-gray-600  text-lg mb-1" />
          <span className="hidden xl:inline-flex border-2 border-gray-600 text-gray-300 px-3 py-1 md:px-4 md:py-2 rounded-lg items-center gap-2 text-sm md:text-base">
            Bidding Specialist
          </span>
        </div>

        {/* Bottom Left */}
        <div className="absolute left-10 bottom-20 sm:left-39 sm:bottom-39 md:left-50 md:bottom-50 lg:left-50 lg:bottom-55 flex flex-col items-start">
          <TfiLocationArrow className="hidden xl:inline-flex text-gray-600 text-lg mb-1" />
          <span className="hidden xl:inline-flex border-2 border-gray-600 text-gray-300 px-3 py-1 md:px-4 md:py-2 rounded-lg items-center gap-2 text-sm md:text-base">
            Quality Specialist
          </span>
        </div>

        {/* Bottom Right */}
        <div className="absolute right-10 bottom-20 sm:right-39 sm:bottom-39 md:right-50 md:bottom-50 lg:right-60 lg:bottom-55 flex flex-col items-start">
          <TfiLocationArrow className="hidden xl:inline-flex text-gray-600 text-lg mb-1" />
          <span className="hidden xl:inline-flex border-2 border-gray-600 text-gray-300  px-3 py-1 md:px-4 md:py-2 rounded-lg items-center gap-2 text-sm md:text-base">
            Email Marketing Specialist
          </span>
        </div>
      </div>
    </div>
  );
};

export default Herro;
