import React from 'react';

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-left mb-6">Get touch with us.<br/>
        We're here to assist you. </h2>

        <form className="space-y-4">
          <div className="flex flex-wrap justify-between">
            {/* Business Name */}
            <div className="w-full md:w-1/2 pr-2">
              <label className="block text-gray-700 font-medium mb-1" htmlFor="businessName">
                Business Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="businessName"
                placeholder="Searching for business listing"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Your Name */}
            <div className="w-full md:w-1/2 pl-2">
              <label className="block text-gray-700 font-medium mb-1" htmlFor="yourName">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="yourName"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-between">
            {/* Phone Number */}
            <div className="w-full md:w-1/2 pr-2">
              <label className="block text-gray-700 font-medium mb-1" htmlFor="phoneNumber">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-100 text-gray-700 rounded-l">
                  +91
                </span>
                <input
                  type="text"
                  id="phoneNumber"
                  placeholder="Enter your number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-r focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="w-full md:w-1/2 pl-2">
              <label className="block text-gray-700 font-medium mb-1" htmlFor="emailAddress">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="emailAddress"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Leave us a message"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#F54F35] text-white px-6 py-2 rounded hover:bg-[#d4422e] focus:outline-none focus:ring focus:ring-red-200"
            >
              Leave us aMessage ->
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
