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
      <div className="card flex flex-col md:grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16 mb-8">
        <div className="image-container w-full overflow-hidden">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src={imgPath}
            alt={alt}
          />
        </div>
        <div className="content-container w-full">
          <div className="text-white">
            <p className="text-sm sm:text-base md:text-lg font-medium tracking-wide text-gray-400">
              ROLE
            </p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-2">
              {position.split(" ")[0]}
              <br className="block" />
              {position.split(" ").slice(1).join(" ")}
            </h3>

            <div className="btn-icons flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 md:mt-8">
              {buildAttributes.map((attribute, index) => (
                <div
                  key={index}
                  className="icon-btns border border-white rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base"
                >
                  <h4>{attribute}</h4>
                </div>
              ))}
              <div className="icon-btns-link rounded-full border border-white px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm md:text-base flex items-center gap-2 hover:bg-white/10 transition-colors">
                <a
                  href={visitSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap"
                >
                  Visit Site
                </a>
                <img
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  src="./Arrow.svg"
                  alt="arrow icon"
                />
              </div>
            </div>
            <div className="overview flex flex-col gap-3 sm:gap-4 md:gap-5">
              <h3 className="mt-8 sm:mt-10 md:mt-12 text-xl sm:text-2xl md:text-3xl font-medium">
                Overview
              </h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-left opacity-90">
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
