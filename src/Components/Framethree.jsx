import React from "react";
import { assets } from '../assets/assets'

const FrameThree = () => {
  return (
    <div className="bg-[#FAFAFA] text-black py-12">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          Empowering Service Providers Across Industries
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Whether you're in sports, education, wellness, household services, or
          niche markets, our technology simplifies your business operations,
          making it easier for you to focus on what you do best.
        </p>
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-center gap-8">
        {/* Sports Card */}
        <div className="bg-[#FAFAFA] rounded-lg p-4 shadow-lg text-center max-w-sm">
          <img
            src={assets.Sports}
            alt="Sports"
            className="w-full rounded-lg"
          />
          <h3 className="text-xl font-bold mt-4">Sports</h3>
          <p className="text-gray-400 mt-2">
            From fitness studios to sports academies, Rmax empowers sports
            businesses{" "}
            <a
              href="#"
              className="text-blue-400 hover:text-blue-600 underline"
            >
              Know more...
            </a>
          </p>
        </div>

        {/* Healthcare & Wellness Card */}
        <div className="bg-[#FAFAFA] rounded-lg p-4 shadow-lg text-center max-w-sm">
          <img
            src={assets.Medical}
            alt="Healthcare & Wellness"
            className="w-full rounded-lg"
          />
          <h3 className="text-xl font-bold mt-4">Healthcare & Wellness</h3>
          <p className="text-gray-400 mt-2">
            Health and wellness service providers—from yoga instructors to gyms{" "}
            <a
              href="#"
              className="text-blue-400 hover:text-blue-600 underline"
            >
              Know more...
            </a>
          </p>
        </div>

        {/* Learning Activities Card */}
        <div className="bg-[#FAFAFA] rounded-lg p-4 shadow-lg text-center max-w-sm">
          <img
            src={assets.Learning}
            alt="Learning Activities"
            className="w-full rounded-lg"
          />
          <h3 className="text-xl font-bold mt-4">Learning Activities</h3>
          <p className="text-gray-400 mt-2">
            Tutors, educators, and learning centers—from music schools to art
            studios{" "}
            <a
              href="#"
              className="text-blue-400 hover:text-blue-600 underline"
            >
              Know more...
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrameThree;
