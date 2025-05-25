import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 py-4 sm:py-6 md:py-8 mb-0"
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
            SUBHANKAR.
          </h1>
          <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-1 sm:mt-2 w-full text-center sm:text-left">
            👨🏻‍💻
          </h2>
        </header>
        <div className="skill-dets text-white gap-2.5 sm:gap-3 md:gap-4 flex flex-col items-center sm:items-center md:items-center lg:items-start lg:flex-row lg:justify-between mt-4 sm:mt-6 md:mt-8 lg:mt-10">
          <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-center lg:text-left">
            Front-End & Blockchain
          </h4>
          <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-center lg:text-left">
            Design Professional & UX .
          </h4>
          <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-center lg:text-left">
            BASED IN <span className="font-bold">INDIA</span>
          </h4>
        </div>
        <div className="social-icons flex justify-center lg:justify-start gap-6 sm:gap-8 md:gap-10 lg:gap-[2.5rem] mt-3 sm:mt-4 md:mt-6 lg:mt-[2rem]">
          <a
            href="https://dribbble.com/subhankarchoudhury"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-14 lg:h-14 transition-transform hover:scale-110"
          >
            <img
              src="./dribbble.svg"
              alt="Dribbble"
              className="w-full h-full"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/subh-choudhury/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-14 lg:h-14 transition-transform hover:scale-110"
          >
            <img
              src="./linkedin.svg"
              alt="LinkedIn"
              className="w-full h-full"
            />
          </a>
          <a
            href="https://github.com/anynomousfriend"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-14 lg:h-14 transition-transform hover:scale-110"
          >
            <img src="./github.svg" alt="GitHub" className="w-full h-full" />
          </a>
          <a
            href="https://x.com/SsubhankarX?t=S2s-0mx5Vex7yhfwe5iUng&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-14 lg:h-14 transition-transform hover:scale-110"
          >
            <img src="./x.svg" alt="X" className="w-full h-full" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
