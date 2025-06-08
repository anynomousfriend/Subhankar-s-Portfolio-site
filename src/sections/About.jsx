import React, { useEffect, useRef } from "react";
import { about } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const description = descriptionRef.current;

    // Initial state
    gsap.set([title, subtitle, description], {
      opacity: 0,
      y: 20,
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "center center",
        toggleActions: "play none none reverse",
        scrub: 1, // Smoother scrubbing
        markers: false,
        smoothChildTiming: true,
      },
    });

    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power4.out",
    })
      .to(
        subtitle,
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
        },
        "-=1.3"
      )
      .to(
        description,
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
        },
        "-=1.3"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about px-4 sm:px-5 mt-0 sm:mt-8 md:mt-16 lg:mt-[17.66rem] md:ml-0 lg:ml-[4rem] max-w-full"
    >
      {about &&
        about.map((item, index) => (
          <div key={index}>
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
            >
              {item.title || "About Me."}
            </h1>
            <p
              ref={subtitleRef}
              className="!text-sm sm:!text-base md:!text-lg lg:!text-[18px] font-bold text-neutral-400 mt-3 sm:mt-4"
            >
              <span className="font-bold">{item.subtitle}</span>
            </p>
            <p
              ref={descriptionRef}
              className="text-white mt-3 sm:mt-6 md:mt-8 lg:mt-9 text-base sm:text-base md:text-xl lg:text-2xl leading-relaxed w-full md:w-4/5 lg:w-3/5 xl:w-[60%]"
            >
              {item.description || "Description loading..."}
            </p>
          </div>
        ))}
    </section>
  );
};

export default About;
