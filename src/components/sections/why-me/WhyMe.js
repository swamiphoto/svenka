import React from "react";
import "./WhyMe.css";
import SectionHeader from "../section-header/SectionHeader";
import CustomButton from "../../../components/elements/custom-button/CustomButton";

const WhyMe = () => {
  const imageUrl = "images/me/profile2.jpeg";
  const title = "Hi, I'm Swami.";

  return (
    <div className="py-20 rounded-lg shadow-lg relative border">
      <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true">
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <SectionHeader title="Let's bring your vision to life." description="A word from our founder" className="border-t-0" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row mb-3 md:mb-10 items-start">
          <div className="text-right lg:mr-4 p-3">
            <div className="overflow-hidden w-64 rounded-lg inline-block align-top">
              <img className="w-full h-full object-cover rounded border border-gray-200" src={imageUrl} alt={title} />
            </div>
            <div className="mt-4">
              <ul className="text-sm mx-auto mt-2 text-right text-gray-600">
                <li className="p-1 border-b border-gray-200">Microsoft Imagine Cup U.S. Nationals Winner</li>
                <li className="p-1 border-b border-gray-200">Two-time TechCrunch Disrupt Hackathon Winner</li>
                <li className="p-1 border-b border-gray-200">SVIEF Top 30 Entrepreneur Award</li>
                <li className="p-1">Published Photographer</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 lg:mt-0 lg:flex-1 text-left">
            <h3 className="text-2xl font-semibold mt-2">{title}</h3>
            <p className="mt-7">I'm the designer behind the airport kiosk for US Airways (now American Airlines), used by millions of passengers.</p>

            <p>
              20 years ago, I started my career as an animator for PBS News. I've since built hundreds of web apps for Fortune 500 companies, government, startups, banks, hospitals, and universities. I created one of the world's first mobile apps, which won a U.S. Nationals award from Microsoft.
            </p>

            <p>I have three partners who are world-class engineers in frontend, backend, and devops. Together with my unusual skillset as a UX designer + frontend engineer, we build products with a finesse seldom found in the industry.</p>
            <p>We are a dynamic and efficient team, intentionally small, and you'll find we're nice people to work with. </p>
          </div>
        </div>
      </div>

      <CustomButton label="Send me a message" sectionId="#contact" />
    </div>
  );
};

export default WhyMe;
