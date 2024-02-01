import React, { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ImageText = ({ title, imageUrl, children, bio, achievements, links }) => {
  const [imageHeight, setImageHeight] = useState(0);
  const textRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-20px",
  });

  const animationClass = inView ? "animate-rotateLeft" : "";

  // Function to update image height
  const updateImageHeight = (event) => {
    setImageHeight(event.target.offsetHeight);
  };

  useEffect(() => {
    if (textRef.current) {
      setImageHeight(textRef.current.offsetHeight);
    }
  }, [textRef]);

  return (
    <div className="mb-6 md:mb-20 text-center lg:text-left">
      <div ref={ref} className={`${animationClass} mx-auto lg:mx-0 w-48 h-48 rounded-full overflow-hidden`}>
        <img className="w-full h-full object-cover" src={imageUrl} alt={title} onLoad={updateImageHeight} />
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2">{bio}</p>
        <ul className="mt-2">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
        <div className="mt-2">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="text-blue-600 hover:text-blue-800">
              {link.text}
            </a>
          ))}
        </div>
      </div>
      <div ref={textRef} className="lg:flex-1 p-10">
        {children}
      </div>
    </div>
  );
};

export default ImageText;
