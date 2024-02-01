import React from "react";

const SectionHeader = ({ title, description, className = "" }) => {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="mx-auto md:max-w-3xl text-5xl font-bold tracking-tight text-gray-900">{title}</h2>
      <h4 className="text-2xl mt-2 max-w-2xl mx-auto tracking-tight">{description}</h4>
    </div>
  );
};

export default SectionHeader;
