import React from "react";

const App = () => {
  return (
    <main>
      <div className="pattern absolute z-1 h-[27.75rem] w-[27.75rem] ml-[-6.25rem] mt-[-11.875rem]">
        <img className="relative" src="./Gradient.svg" alt="gradient" />
      </div>
      <div className="wrapper">
        <header className="flex gap-4 justify-left mt-[5.5rem] mb-[1rem]">
          <h1>SUBHANKAR.</h1>
          <h2>👨🏻‍💻</h2>
        </header>
        <div className="skill-dets text-white text-2xl flex justify-between">
          <h4>Front-End & Blockchain</h4>
          <h4>Design Professional & UX .</h4>
          <h4>
            BASED IN <span className="font-bold">INDIA</span>
          </h4>
        </div>
        <div className="social-icons flex gap-[1.7rem] mt-[2rem] ">
          <a href="https://dribbble.com/subhankarchoudhury" target="_blank">
            <img src="./dribbble.svg" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/subh-choudhury/" target="_blank">
            <img src="./linkedin.svg" alt="" />
          </a>
          <a href="https://github.com/anynomousfriend" target="_blank">
            <img src="./github.svg" alt="" />
          </a>
          <a
            href="https://x.com/SsubhankarX?t=S2s-0mx5Vex7yhfwe5iUng&s=09"
            target="_blank"
          >
            <img src="./x.svg" alt="" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default App;
