import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    navigate("/" + sectionId);
  };

  return (
    <footer className="mx-auto p-24 pt-20 border-t">
      <div>
        <span className="font-medium mx-2">© 2024 Svenka Studio</span>
        <a className="cursor-pointer hover:underline mx-2 text-gray-700" onClick={(e) => scrollToSection(e, "#whyus")}>
          About
        </a>
        <a className="cursor-pointer hover:underline mx-2 text-gray-700" onClick={(e) => scrollToSection(e, "#contact")}>
          Contact
        </a>
        <a className="cursor-pointer hover:underline mx-2 text-gray-700" href="https://dribbble.com/swamiphoto" target="_blank" rel="noreferrer">
          Portfolio
        </a>
      </div>
      <div className="text-xs mt-2 text-gray-600">Designed by Svenka Studio</div>
    </footer>
  );
};

export default Footer;
