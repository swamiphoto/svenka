import React from "react";
import SectionHeader from "../section-header/SectionHeader";
import { useInView } from "react-intersection-observer";

const Example = ({ title, description, imageUrl, reverse }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Lower the threshold
    rootMargin: "-20px", // Adjust this value to trigger the animation a bit earlier or later
  });

  // Decide the order and animation class of elements based on `reverse` prop and inView status
  const orderClasses = reverse ? "md:flex-row-reverse" : "md:flex-row";
  const animationClass = inView ? (reverse ? "animate-rotateRight" : "animate-rotateLeft") : "";

  const imageComponent = (
    <div ref={ref} className={`${animationClass} ${orderClasses} flex-1 p-4 ${reverse ? "lg:order-2" : ""}`} style={{ flexBasis: "70%" }}>
      <img className="rounded-lg w-full h-auto" src={imageUrl} alt={title} />
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
      {imageComponent}
    </div>
  );
};

const Examples = () => {
  return (
    <div>
      {/* <SectionHeader title="Responsive, pixel-perfect, intuitive designs" description="" /> */}
      <SectionHeader title="Our designs have a finesse you won't get from outsourcing." description="" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Example title="Goergeous" description="We obsess over every pixel, creating visuals that are as sharp as they are stunning." imageUrl="images/examples/1.png" reverse={true} />
        <Example title="Intuitive" description="We build complex things that feel simple in the user's hands" imageUrl="images/examples/2.png" reverse={false} />
        <Example title="Responsive" description="Our designs fluidly adjust to different screens and devices, ensuring your message is delivered effectively, no matter where or how it’s viewed." imageUrl="images/examples/3.png" reverse={true} />
      </div>
    </div>
  );
};

export default Examples;
