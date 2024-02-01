import React from "react";
import CTA from "../../elements/cta/CTA";
import "./Hero.css";
import CustomButton from "../../../components/elements/custom-button/CustomButton";

const Hero = () => {
  return (
    <div className="absolute inset-0 z-10 w-full h-screen flex flex-col justify-center items-center bg-gray-800 px-10 md:px-0">
      <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[rgb(27,29,61)] to-[#060287]"
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true">
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#3e2354] to-[#07051c] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <img src="logo.png" alt="Svenka Studios logo" className="h-12 md:h-16 mb-10" />
      <h1 className="animate-fadeDown text-5xl md:text-7xl text-white font-bold mb-2 tracking-tight text-center md:max-w-4xl">We design & build modern, high-end web apps.</h1>

      <p className="animate-fadeIn max-w-2xl md:text-2xl text-xl text-gray-400 mb-8 mt-5 font-medium text-center">From simple landing pages to sophisticated web and mobile apps, we'll design & build your product with a finesse you won't find in outsourced work.</p>

      <CustomButton mode="light" label="Let's talk" sectionId="#contact" />

      {/* <div className="mt-12 md:mt-16 w-full">
        <img src="images/hero/hero.png" alt="Hero" className="animate-flipUp w-full h-full object-cover" />
      </div> */}
    </div>
  );
};

export default Hero;
