import React from "react";
import { about } from "../constants";

const About = () => {
  return (
    <section
      id="about"
      className="about px-4 sm:px-5 mt-0 sm:mt-8 md:mt-16 lg:mt-[17.66rem] md:ml-0 lg:ml-[4rem] max-w-full"
    >
      {about &&
        about.map((item, index) => (
          <div key={index}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              {item.title || "About Me"}
            </h1>
            <p className="text-white mt-3 sm:mt-6 md:mt-8 lg:mt-9 text-base sm:text-base md:text-xl lg:text-2xl leading-relaxed w-full md:w-4/5 lg:w-3/5 xl:w-[60%]">
              {item.description || "Description loading..."}
            </p>
          </div>
        ))}
    </section>
  );
};

export default About;
