import React from "react";
import CTA from "../../elements/cta/CTA";
import "./Hero.css";
import CustomButton from "../../../components/elements/custom-button/CustomButton";

const Hero = () => {
  return (
    <div className="absolute inset-0 z-10 w-full h-screen flex flex-col justify-center items-center bg-gray-800 px-10 md:px-0">
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
