import React from "react";
import { useInView } from "react-intersection-observer";

const SingleTestimonial = ({ imageSrc, altText, testimony, name, role, reverse = false }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Lower the threshold
    rootMargin: "-20px", // Adjust this value to trigger the animation a bit earlier or later
  });

  // Decide the order and animation class of elements based on `reverse` prop and inView status
  const orderClasses = reverse ? "md:flex-row-reverse" : "md:flex-row";
  const animationClass = inView ? (reverse ? "animate-rotateRight" : "animate-rotateLeft") : "";

  return (
    <div ref={ref} className={`${animationClass} flex flex-col md:flex-row w-full md:w-8/12 mx-auto items-center bg-white rounded-2xl overflow-hidden p-4 md:p-6 mb-8 border border-gray-300 ${orderClasses}`}>
      {/* Image container */}
      <div className={`flex-shrink-0 mx-4 mb-4 md:mb-0`} style={{ width: "100%", maxWidth: "280px", height: "auto" }}>
        <img src={imageSrc} alt={altText} className="w-full h-auto object-cover rounded-full" />
      </div>

      {/* Text content */}
      <div className={`flex-grow text-center md:text-left ${reverse ? "md:pl-5" : "md:pr-5"}`}>
        <p className="text-lg">{testimony}</p>
        <p className="mt-4 font-bold text-xl mb-0">{name}</p>
        <p className="text-gray-500 text-lg">{role}</p>
      </div>
    </div>
  );
};

export default SingleTestimonial;
