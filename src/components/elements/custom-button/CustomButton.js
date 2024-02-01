import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useInView } from "react-intersection-observer";
import "./CustomButton.css";

const CustomButton = ({
  label = "Submit",
  small = false,
  mode = "dark",
  style = "solid",
  className = "",
  type = "submit",
  sectionId = "",
  href = "", // Added href prop
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-20px",
  });

  const orderClasses = "md:flex-row";
  const animationClass = inView ? "animate-rotateRight" : "";

  let modeStyles = "";
  if (mode === "dark") {
    modeStyles = style === "outline" ? "text-black border border-black" : "bg-black text-white";
  } else {
    modeStyles = style === "outline" ? "text-white border border-white" : "bg-white text-black border border-black";
  }

  const handleClick = (event) => {
    if (sectionId) {
      scrollToSection(event, sectionId);
    }
  };

  // Conditional rendering based on href prop
  if (href) {
    return (
      <a
        href={href}
        ref={ref}
        className={`${orderClasses} ${small ? "text-lg py-3" : "text-lg md:text-2xl py-5"} tilt-button ${modeStyles} rounded-full font-medium px-12 inline-flex items-center justify-center cursor-pointer outline-none focus:outline-none hover:opacity-80 ${animationClass} ${className}`}
        target="_blank" // Open in new tab. Remove this or set to '_self' to open in the same tab.
        rel="noopener noreferrer" // For security reasons
      >
        <span>{label}</span>
        <ArrowRightIcon className="w-5 h-5 ml-2" aria-hidden="true" />
      </a>
    );
  } else {
    return (
      <button
        type={type}
        onClick={handleClick}
        className={`${orderClasses} ${small ? "text-lg py-3" : "text-lg md:text-2xl py-5"} tilt-button ${modeStyles} rounded-full font-medium px-12 inline-flex items-center justify-center cursor-pointer outline-none focus:outline-none hover:opacity-80 ${animationClass} ${className}`}>
        <span>{label}</span>
        <ArrowRightIcon className="w-5 h-5 ml-2" aria-hidden="true" />
      </button>
    );
  }
};

export default CustomButton;

const scrollToSection = (event, sectionId) => {
  event.preventDefault();
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
