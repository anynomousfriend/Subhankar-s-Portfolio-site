import React from "react";
import { hero } from "../constants";
import RevealText from "../components/RevealText";
import AnimatedLetters from "../components/AnimatedLetters";

const Hero = () => {
  const heroData = hero[0];

  const renderSkill = (skill, index) => {
    if (skill.toLowerCase().includes("based in india")) {
      return (
        <RevealText key={index} delay={0.8} waitForScroll={true}>
          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-center lg:text-left text-white">
            Based in <span className="font-bold">INDIA</span>
          </h4>
        </RevealText>
      );
    }
    return (
      <RevealText key={index} delay={0.4 + index * 0.2} waitForScroll={true}>
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
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 w-full">
            <RevealText delay={0.2} className="w-full sm:w-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wide text-center sm:text-left px-2 sm:px-0 text-white">
                <AnimatedLetters text={heroData.title} />
              </h1>
            </RevealText>
            <div className="w-full sm:w-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center sm:text-left opacity-0 animate-[fadeIn_0.5s_ease-in_1.2s_forwards]">
                {heroData.emoji}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 mt-4 sm:mt-6 md:mt-8 lg:mt-10 w-full">
            {heroData.skills.map(renderSkill)}
          </div>
          <div className="flex justify-center sm:justify-start gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10 lg:mt-12 w-full">
            {heroData.socialLinks.map((link, index) => (
              <RevealText
                key={index}
                delay={1 + index * 0.1}
                waitForScroll={true}
                className="social-link"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src={`./${link.label.toLowerCase()}.svg`}
                    alt={link.label}
                    className="w-6 h-6 sm:w-8 sm:h-8 transition-transform hover:scale-110"
                  />
                </a>
              </RevealText>
            ))}
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
