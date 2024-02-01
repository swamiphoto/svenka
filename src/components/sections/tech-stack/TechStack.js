import React from "react";
import "./TechStack.css";
import SectionHeader from "../section-header/SectionHeader";

const techStack = ["ReactJS", "JavaScript", "NodeJS", "Angular", "Swift", "NextJS", "MongoDB", "Figma", "Flutter", "TypeScript", "Tailwind"];

const TechStack = () => {
  return (
    <div className="text-center">
      <SectionHeader title="We write clean code and leverage the latest tech stack" description="" className="border-t-0" />

      <div className="mx-auto md:max-w-3xl flex flex-wrap justify-center items-center">
        {techStack.map((tech, index) => (
          <div key={index} className="tech-card">
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
