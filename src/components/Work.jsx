import React from "react";

const Work = ({
  imgPath,
  alt,
  position,
  buildAttributes,
  visitSite,
  comment,
}) => {
  return (
    <>
      <div className="card flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 p-5 md:p-4 md:mt-[4.125rem] md:mb-4 md:ml-[4rem] mb-8">
        <div className="image-container w-full overflow-hidden">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src={imgPath}
            alt={alt}
          />
        </div>
        <div className="content-container w-full">
          <div className="text-white">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">
              ROLE
            </p>
            <h3 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold leading-tight md:leading-[1.1] lg:leading-[1.2]">
              {position.split(" ")[0]}
              <br className="block" />
              {position.split(" ").slice(1).join(" ")}
            </h3>

            <div className="btn-icons flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4 md:mt-5 lg:mt-6">
              {buildAttributes.map((attribute, index) => (
                <div
                  key={index}
                  className="icon-btns border-[1px] sm:border-2 p-1 sm:p-1.5 md:p-2 lg:p-2.5 rounded-[8px] md:rounded-[10px] border-white text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl whitespace-nowrap"
                >
                  <h4>{attribute}</h4>
                </div>
              ))}
              <div className="icon-btns-link border-[1px] sm:border-2 p-1 sm:p-1.5 md:p-2 lg:p-2.5 rounded-[8px] md:rounded-[10px] border-white font-thin text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl flex items-center gap-1 sm:gap-2">
                <a
                  href={visitSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap"
                >
                  Visit Site
                </a>
                <img
                  className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-auto lg:h-auto"
                  src="./Arrow.svg"
                  alt="arrow icon"
                />
              </div>
            </div>
            <div className="overview flex flex-col gap-1 sm:gap-2 md:gap-3">
              <h3 className="mt-4 sm:mt-6 md:mt-8 lg:mt-[4rem] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
                Overview
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-snug sm:leading-normal md:leading-relaxed text-left opacity-90">
                {comment}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
