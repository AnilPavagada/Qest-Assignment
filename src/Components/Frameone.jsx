import React from "react";
import { assets } from "../assets/assets";

const FrameOne = () => {
  return (
    <section className="bg-[#FAFAFA] text-gray-800 py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">Onboard business in 3 simple steps</h2>
        <p className="text-gray-600 mb-12">
          Quick assisted onboarding with 30-day free trial. No credit card needed.
        </p>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 flex items-center justify-center bg-gray-200 rounded-full">
              <span className="absolute top-0 left-0 bg-white text-gray-800 w-8 h-8 flex items-center justify-center rounded-full font-bold shadow-md">
                1
              </span>
              <div className="w-12 h-12 bg-red-100 flex items-center justify-center rounded-full">
                <svg
                
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM12 14.001c-2.166 0-5 1.082-5 3.246v1.254h10v-1.254c0-2.164-2.834-3.246-5-3.246z"
                  />
                </svg>
              </div>
            </div>
            <p className="mt-6 font-semibold">Claim your preset profile</p>
            <p className="text-gray-600 mt-2">
              Unlock tailored service and seamlessly elevate your experience by claiming your preset profile today.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 flex items-center justify-center bg-gray-200 rounded-full">
              <span className="absolute top-0 left-0 bg-white text-gray-800 w-8 h-8 flex items-center justify-center rounded-full font-bold shadow-md">
                2
              </span>
              <div className="w-12 h-12 bg-red-100 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6h6v6M12 14.001V9m-6 2l6-6 6 6"
                  />
                </svg>
              </div>
            </div>
            <p className="mt-6 font-semibold">Add services</p>
            <p className="text-gray-600 mt-2">
              Make use of multiple scheduling, pricing options to add services. Choose from pre-created scheduling
              templates.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 flex items-center justify-center bg-gray-200 rounded-full">
              <span className="absolute top-0 left-0 bg-white text-gray-800 w-8 h-8 flex items-center justify-center rounded-full font-bold shadow-md">
                3
              </span>
              <div className="w-12 h-12 bg-red-100 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M12 4v16"
                  />
                </svg>
              </div>
            </div>
            <p className="mt-6 font-semibold">Build Website</p>
            <p className="text-gray-600 mt-2">
              Build your online storefront your way, seamlessly integrating all services for a cohesive and efficient
              client experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameOne;
