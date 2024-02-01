import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";

const Header = ({ options = {} }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { showLogo = true, mode = "dark" } = options;

  const showLogoClasses = showLogo ? "md:block" : "md:hidden";

  // Adjust as needed
  const backgroundColorClass = mode === "light" ? "bg-white" : "bg-gray-900";
  const linkColorClass = mode === "light" ? "text-gray-800 hover:text-gray-600" : "text-gray-300 hover:text-gray-100";
  const menuBgColorClass = mode === "light" ? "bg-white" : "bg-black";
  const closeIconColorClass = mode === "light" ? "text-gray-800" : "text-gray-500";

  const linkStyle = (path) => {
    const activeStyle = location.pathname === path ? "font-bold underline" : "";
    return `cursor-pointer transition ${activeStyle} ${linkColorClass}`;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();

    // Close the mobile menu
    setIsMenuOpen(false);
    navigate("/" + sectionId);
  };

  return (
    <header className={`w-full ${backgroundColorClass}`}>
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 w-full">
        <a className="block text-teal-600" href="/">
          <img src="logo.png" alt="Logo" className={`h-4 block ${showLogoClasses}`} />
        </a>
        <div className="flex items-center">
          <nav aria-label="Global" className={`${isMenuOpen ? "block" : "hidden"} nav fixed inset-0 z-40 ${menuBgColorClass} md:relative md:block md:bg-transparent`}>
            <TfiClose onClick={toggleMenu} className={`h-5 w-5 ${closeIconColorClass} absolute top-5 right-5 transition-opacity md:hidden ${isMenuOpen ? "opacity-100" : "opacity-0"}`} />
            <ul className="flex flex-col items-center justify-center h-full space-y-4 md:flex-row md:space-y-0 md:space-x-6 md:h-auto">
              <li>
                <a className={`cursor-pointer transition hover:text-gray-100 font-medium ${linkStyle("/whyus")}`} onClick={(e) => scrollToSection(e, "#whyus")}>
                  Why Us
                </a>
              </li>
              <li>
                <a className={`cursor-pointer transition hover:text-gray-100 font-medium ${linkStyle("/examples")}`} onClick={(e) => scrollToSection(e, "#examples")}>
                  Examples
                </a>
              </li>
              <li>
                <a className={`cursor-pointer transition hover:text-gray-100 font-medium ${linkStyle("/testimonials")}`} onClick={(e) => scrollToSection(e, "#testimonials")}>
                  Testimonials
                </a>
              </li>
              <li>
                <a className={`cursor-pointer transition hover:text-gray-100 font-medium ${linkStyle("/contact")}`} onClick={(e) => scrollToSection(e, "#contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button onClick={toggleMenu} className={`block rounded p-2.5 text-gray-600 transition md:hidden ${isMenuOpen ? "open" : ""}`}>
            <span className="sr-only">Toggle menu</span>
            <RxHamburgerMenu className={`h-5 w-5 transition-transform ${isMenuOpen ? "hidden" : ""}`} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
