import React from "react";

const Section = ({ children, id = undefined, mode = "light", topBorder = false, bottomBorder = false }) => {
  const backgroundColor = mode === "dark" ? "bg-black" : "";
  const borderTopClass = topBorder ? "border-t border-gray-300" : "";
  const borderBottomClass = bottomBorder ? "border-b border-gray-300" : "";

  return (
    <section id={id} className={`px-3 py-20 md:px-0  ${backgroundColor} ${borderTopClass} ${borderBottomClass}`}>
      {children}
    </section>
  );
};

export default Section;
