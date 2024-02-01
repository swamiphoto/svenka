import React from "react";
import "./Logos.css";

const prefix = "/images/logos/";
const logos = ["aa.png", "asu.png", "dimaag.jpeg", "intel.png", "kbb.jpeg", "mayo.jpeg", "mtbank.jpeg", "oracle.jpeg", "reputation.svg"];

const Logos = () => {
  return (
    <div className="text-center">
      <h2 className="mx-auto md:max-w-3xl text-xl font-medium text-gray-500 mb-10 tracking-tight">Trusted by Fortune 500 companies and other top brands</h2>
      <div className="flex flex-wrap justify-center items-center md:max-w-4xl mx-auto">
        {logos.map((logo, index) => (
          <div key={index} className="logo-card">
            <img src={prefix + logo} alt={`Logo ${index}`} className="logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;
