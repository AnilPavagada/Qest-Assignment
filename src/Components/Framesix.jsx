import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const FrameSix = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "What is RMax?",
      answer:
        "Qest, is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily.",
    },
    {
      question: "How does it work?",
      answer: "Details about how RMax works will go here.",
    },
    {
      question: "How much does it cost?",
      answer: "Details about the pricing of RMax will go here.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black flex items-center justify-center py-8">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
        <p className="text-center text-gray-400 mb-8">
          Find answers to common questions about our services and features. For more details, contact our support team.
        </p>{/*Search box  */}
         <div className="flex items-center justify-center bg-white text-black px-0 py-0 rounded-full shadow-md mb-15">
                  <span className="font-bold text-sm"></span>
                  <span className="ml-2 text-gray-600 text-sm">
                    Ask Q!e.g Tell me about key Feautures
                  </span><div className="bg-[#F54F35] inline-block p-1">
                          <img src={assets.search} alt="" />
                            </div>

                </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg overflow-hidden shadow-md"
            >
              <button
                className="w-full text-left px-4 py-3 flex justify-between items-center font-medium hover:bg-gray-100"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="ml-2">
                  {open === index ? '▲' : '▼'}
                </span>
              </button>
              {open === index && (
                <div className="px-4 py-3 border-t border-gray-200 text-sm text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 mt-6">
          Haven't got your answer?{' '}
          <a href="/contact" className="text-blue-500 underline">
            Contact our support now
          </a>
        </p>
      </div>
    </div>
  );
};

export default FrameSix;
