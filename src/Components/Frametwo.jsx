import React from "react";
import { assets } from '../assets/assets'

const FrameTwo = () => {
  const features = [
    {
      title: "Scheduling",
      description: "Manage appointments, classes, and events, workshops with...",
      
        icon:( <img
            src={assets.Brief}
            alt="Billing Icon"
            className="w-30 h-30 mx-auto"
          />
           ),
         
      
    },
    {
      title: "Client Management & CRM",
      description: "Keep track of customer data, preferences, and interactions to...",
    },
    {
      title: "AI Powered Insights",
      description: "Know exactly what is happening in business and get actionable...",
      icon:( <img
        src={assets.Star}
        alt="Billing Icon"
        className="w-30 h-30 mx-auto"
      />
       ),
    },
    {
      title: "Billing & Payments",
      description:
        "Streamline invoicing and payments with automated workflows, reducing ...",
       icon:( <img
        src={assets.Billing}
        alt="Billing Icon"
        className="w-30 h-30 mx-auto"
      />
       ),
    },
    {
      title: "Marketing & Engagement Tools",
      description:
        "Boost client retention and grow your business with integrated...",
        icon:( <img
            src={assets.Calender}
            alt="Billing Icon"
            className="w-30 h-30 mx-auto"
          />
           ),
    },
    
       

    {
      title: "Custom Branded Website",
      description:
        "Qest’s Custom Branded Website Builder allows you to create a fully personalized...",
        icon:( <img
            src={assets.Custom}
            alt="Custom Icon"
            className="w-30 h-30 mx-auto"
          />
           ),
    },
  ];

  return (
    <section className="bg-[#FAFAFA] py-16 px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Why Rmax?</h2>
        <p className="text-gray-600 mt-2">
          Rmax is designed to simplify and transform the way service businesses
          operate. From onboarding, scheduling and billing to client management,
          payments and growth, Rmax integrates everything in one easy-to-use
          platform connecting all the stakeholders.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-6 text-center hover:shadow-lg transition duration-200"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <a
              href="#"
              className="text-red-500 font-medium hover:underline flex items-center justify-center"
            >
              View details <span className="ml-1 text-lg">&rarr;</span>
            </a>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default FrameTwo;
