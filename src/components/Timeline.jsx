import React, { useEffect, useState } from "react";

export const Timeline = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".timeline-item");
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isVisible =
          rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        if (isVisible) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="max-container px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-12">
        My Work Experience
      </h2>

      <div className="relative">
        {data.map((item, index) => (
          <div
            key={index}
            className={`timeline-item flex flex-col md:flex-row gap-6 md:gap-10 mb-12 md:mb-16 relative pl-8 md:pl-12 transition-opacity duration-1000 ${
              activeIndex >= index ? "opacity-100" : "opacity-50"
            }`}
          >
            {/* Timeline dot and line */}
            <div
              className={`absolute left-0 top-0 h-full w-0.5 transition-all duration-1000 ${
                activeIndex >= index
                  ? "bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                  : "bg-white/20"
              }`}
            >
              <div
                className={`absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full transition-all duration-1000 ${
                  activeIndex >= index
                    ? "bg-white border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.9)]"
                    : "bg-white/20 border-2 border-white"
                }`}
              />
            </div>

            {/* Date and title container */}
            <div className="md:w-1/3">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {item.date}
              </h3>
              <h4 className="text-lg md:text-xl text-white/70 mb-1">
                {item.title}
              </h4>
              <p className="text-base md:text-lg text-white/60">{item.job}</p>
            </div>

            {/* Content container */}
            <div className="md:w-2/3">
              {item.contents.map((content, contentIndex) => (
                <p
                  key={contentIndex}
                  className="text-base md:text-lg text-white/80 mb-4 leading-relaxed"
                >
                  {content}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
