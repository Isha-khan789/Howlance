import React from "react";
import Vid from "../../assets/vid_fro.mp4";
import Statss from "./Statss";

const Heroo = () => {
  const scrollTocard = () => {
    document.getElementById("subscriptions")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="relative w-full h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={Vid}
      ></video>

      <div className="flex flex-col items-center justify-center h-full bg-black/50 px-4 text-center">
        <h1
          className="text-white font-normal font-display 
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
        >
          YOUR PATHWAY TO REAL ESTATE
        </h1>

        <p
          className="text-white font-normal font-display mt-4
          text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl"
        >
          Connecting Investors, Realtors, Buyers & Sellers Under One Roof
        </p>

        <button
          onClick={scrollTocard}
          className="bg-white font-display text-black rounded-full mt-6
          py-2 px-6 sm:px-8 md:px-12 lg:px-16 flex items-center gap-2 
          text-sm sm:text-base md:text-lg shadow-md hover:bg-gray-100 transition"
        >
          See Subscription
        </button>
        <div className="mt-5">
          <Statss />
        </div>
      </div>
    </div>
  );
};

export default Heroo;
