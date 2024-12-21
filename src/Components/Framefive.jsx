import React from "react";
import { assets } from "../assets/assets";

const FrameFive = () => {
  return (
    <div className="bg-[#FAFAFA] text-black flex flex-col items-center justify-center py-12 px-4">
      {/* Title Section */}
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Manage Your Business On the Go
      </h1>
      <p className="text-gray-400 text-center max-w-xl mb-8">
        With free Business Mobile App, you can manage your entire service business from anywhere. Stay connected and stay in control, no matter where your day takes you.
      </p>

      {/* App Store and Google Play Buttons */}
      <div className="flex space-x-4">
        {/* App Store Button */}
        <a
          href="#"
          className="flex items-center bg-white text-black rounded-lg shadow-md px-4 py-2 space-x-2 hover:shadow-lg"
        >
          <img
            src={assets.Apps}
            alt="App Store"
            className="h-8"
          />
          <span className="text-sm font-medium"></span>
        </a>
        {/* Google Play Button */}
        <a
          href="#"
          className="flex items-center bg-white text-black rounded-lg shadow-md px-4 py-2 space-x-2 hover:shadow-lg"
        >
          <img
            src={assets.Google}
            alt="Google Play"
            className="h-8"
          />
          <span className="text-sm font-medium"></span>
        </a>
      </div>
    </div>
  );
};

export default FrameFive;
