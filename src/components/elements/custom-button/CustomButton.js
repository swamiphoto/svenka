import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useInView } from "react-intersection-observer";
import "./CustomButton.css";

const CustomButton = ({ label = "Submit", small = false, mode = "dark", className = "", type = "submit", sectionId = "" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-20px",
  });

  const orderClasses = "md:flex-row";
  const animationClass = inView ? "animate-rotateRight" : "";
  const modeStyles = mode === "dark" ? "bg-black text-white" : "bg-white text-black border border-black";

  const handleClick = (event) => {
    if (sectionId) {
      scrollToSection(event, sectionId);
    }
  };

  return (
    <button
      ref={ref}
      type={type}
      onClick={handleClick} // Add the click event handler
      className={`${orderClasses} ${small ? "text-lg py-3" : "text-lg md:text-2xl py-5"} tilt-button ${modeStyles} font-geist-mono px-10 inline-flex items-center justify-center cursor-pointer outline-none focus:outline-none hover:opacity-80 ${className}`}>
      <span>{label}</span>
      <ArrowRightIcon className="w-5 h-5 ml-2" aria-hidden="true" />
    </button>
  );
};

export default CustomButton;

const scrollToSection = (event, sectionId) => {
  event.preventDefault();
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
