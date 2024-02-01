import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Popover } from "antd";
import CTAPopup from "./CTAPopup";
import { useInView } from "react-intersection-observer";
import "./CTA.css"; // Ensure this is correctly imported

const CTA = ({ label = "Book a call", small = false, className = "", lightTheme = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (newOpenState) => {
    setIsOpen(newOpenState);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-20px",
  });

  const orderClasses = "md:flex-row";
  const animationClass = inView ? "animate-rotateRight" : "";
  const buttonStyle = lightTheme ? "bg-white text-black" : "bg-black text-white"; // Switching styles based on lightTheme prop

  return (
    <div>
      <Popover content={<CTAPopup onClose={() => setIsOpen(false)} />} placement="right" trigger="click" open={isOpen} onOpenChange={handleOpenChange}>
        <button
          ref={ref}
          className={`${animationClass} ${orderClasses} ${
            small ? "text-lg py-3" : "text-2xl py-5"
          } tilt-button ${buttonStyle} font-geist-mono  px-10 inline-flex items-center justify-center cursor-pointer outline-none focus:outline-none transition-transform duration-300 ease-in-out hover:-rotate-6 ${className}`}>
          <span>{label}</span>
          <ArrowRightIcon className="w-5 h-5 ml-2" aria-hidden="true" />
        </button>
      </Popover>
    </div>
  );
};

export default CTA;
