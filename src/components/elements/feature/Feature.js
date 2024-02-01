import React from "react";
import { useInView } from "react-intersection-observer";
import Slideshow from "../slideshow/Slideshow";

const Feature = ({ title, description, imageUrl = null, videoUrl = null, slideshowImages = null, reverse }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-20px",
  });

  const orderClasses = reverse ? "md:flex-row-reverse" : "md:flex-row";
  const animationClass = inView ? (reverse ? "animate-rotateRight" : "animate-rotateLeft") : "";

  const mediaComponent = imageUrl ? (
    <img className="rounded-lg w-full h-auto" src={imageUrl} alt={title} />
  ) : videoUrl ? (
    <video className="rounded-lg w-full h-auto" autoPlay loop muted>
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : slideshowImages ? (
    <Slideshow images={slideshowImages} />
  ) : null;

  const imageVideoOrSlideshowComponent = (
    <div ref={ref} className={`${animationClass} ${orderClasses} flex-1 p-4 ${reverse ? "lg:order-2" : ""}`} style={{ flexBasis: "70%" }}>
      {mediaComponent}
    </div>
  );

  const textComponent = (
    <div className={`flex-1 text-left p-3 ${reverse ? "lg:order-1 mt-0 lg:mt-28" : "mt-0 lg:mt-28"}`} style={{ flexBasis: "30%" }}>
      <h3 className="text-3xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  );

  return (
    <div className={`flex flex-col lg:flex-row mb-6 md:mb-20 ${reverse ? "lg:flex-row-reverse" : ""}`}>
      {textComponent}
      {imageVideoOrSlideshowComponent}
    </div>
  );
};

export default Feature;
