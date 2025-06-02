import React from "react";
import { hero } from "../constants";

const Hero = () => {
  const heroData = hero[0]; // Since hero is an array with one object

  const renderSkill = (skill, index) => {
    if (skill.toLowerCase().includes("based in india")) {
      return (
        <h4 key={index} className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-center lg:text-left">
          Based in <span className="font-bold">INDIA</span>
        </h4>
      );
    }
    return (
      <h4 key={index} className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-center lg:text-left">
        {skill}
      </h4>
    );
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 py-4 sm:py-6 md:py-8 mb-4"
    >
      <div className="pattern absolute z-1 h-[10rem] w-[10rem] sm:h-[15rem] sm:w-[15rem] md:h-[20rem] md:w-[20rem] lg:h-[27.75rem] lg:w-[27.75rem] left-[-2rem] sm:left-[-3rem] md:left-[-4rem] lg:left-[-6.25rem] top-[-3rem] sm:top-[-5rem] md:top-[-8rem] lg:top-[-11.875rem]">
        <img
          className="relative w-full h-full"
          src="./Gradient.svg"
          alt="gradient"
        />
      </div>
      <div className="wrapper relative z-10">
        <header className="w-full flex flex-col mt-4 sm:mt-6 md:mt-9 items-center lg:mt-[169px] lg:mb-[1rem]">
          <h1 className="text-[5.75rem] sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-8xl font-bold tracking-wide text-center sm:text-left px-2 sm:px-0">
            {heroData.title}
          </h1>
          <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-1 sm:mt-2 w-full text-center sm:text-left">
            {heroData.emoji}
          </h2>
        </header>
        <div className="skill-dets text-white gap-2.5 sm:gap-3 md:gap-4 flex flex-col items-center sm:items-center md:items-center lg:items-start lg:flex-row lg:justify-between mt-4 sm:mt-6 md:mt-8 lg:mt-10">
          {heroData.skills.map((skill, index) => renderSkill(skill, index))}
        </div>
        <div className="social-icons flex justify-center lg:justify-start gap-6 sm:gap-8 md:gap-10 lg:gap-[2.5rem] mt-3 sm:mt-4 md:mt-6 lg:mt-[2rem]">
          {heroData.socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-14 lg:h-14 transition-transform hover:scale-110"
            >
              <img
                src={`./${social.label.toLowerCase()}.svg`}
                alt={social.label}
                className="w-full h-full"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
