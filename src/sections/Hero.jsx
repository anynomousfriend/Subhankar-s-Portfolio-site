import React from "react";
import { hero } from "../constants";
import RevealText from "../components/RevealText";

const Hero = () => {
  const heroData = hero[0];

  const renderSkill = (skill, index) => {
    if (skill.toLowerCase().includes("based in india")) {
      return (
        <RevealText key={index} className="transition-all duration-700 delay-[800ms]">
          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-center lg:text-left text-white">
            Based in <span className="font-bold">INDIA</span>
          </h4>
        </RevealText>
      );
    }
    return (
      <RevealText key={index} className={`transition-all duration-700 delay-[${600 + (index * 200)}ms]`}>
        <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-center lg:text-left text-white">
          {skill}
        </h4>
      </RevealText>
    );
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 py-4 sm:py-6 md:py-8 mb-4 min-h-screen flex items-center"
    >
      <div className="pattern absolute z-1 h-[10rem] w-[10rem] sm:h-[15rem] sm:w-[15rem] md:h-[20rem] md:w-[20rem] lg:h-[27.75rem] lg:w-[27.75rem] left-[-2rem] sm:left-[-3rem] md:left-[-4rem] lg:left-[-6.25rem] top-[-3rem] sm:top-[-5rem] md:top-[-8rem] lg:top-[-11.875rem]">
        <img
          className="relative w-full h-full"
          src="./Gradient.svg"
          alt="gradient"
          loading="lazy"
        />
      </div>
      <div className="wrapper relative z-10 w-full max-w-7xl mx-auto">
        <header className="w-full flex flex-col mt-4 sm:mt-6 md:mt-9 items-center lg:mt-[100px] lg:mb-[1rem]">
          <RevealText className="transition-all duration-700 delay-[200ms] w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wide text-center sm:text-left px-2 sm:px-0 text-white">
              {heroData.title}
            </h1>
          </RevealText>
          <RevealText className="transition-all duration-700 delay-[400ms] w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 sm:mt-3 w-full text-center sm:text-left">
              {heroData.emoji}
            </h2>
          </RevealText>
        </header>
        <div className="skill-dets text-white gap-3 sm:gap-4 md:gap-5 flex flex-col items-center sm:items-center md:items-center lg:items-start lg:flex-row lg:justify-between mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          {heroData.skills.map((skill, index) => renderSkill(skill, index))}
        </div>
        <div className="social-icons flex justify-center lg:justify-start gap-5 sm:gap-6 md:gap-8 lg:gap-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          {heroData.socialLinks.map((social, index) => (
            <RevealText key={index} className={`transition-all duration-700 delay-[${1000 + (index * 200)}ms]`}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-transform hover:scale-110"
              >
                <img
                  src={`./${social.label.toLowerCase()}.svg`}
                  alt={social.label}
                  className="w-full h-full"
                  loading="lazy"
                />
              </a>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
