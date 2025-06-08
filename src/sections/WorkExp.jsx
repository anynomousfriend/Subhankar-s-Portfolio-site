import React, { useEffect, useRef } from "react";
import Work from "../components/Work";
import { experience } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkExp = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;

    // Initial state
    gsap.set([title, cards], {
      opacity: 0,
      y: 30,
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        end: "center center",
        toggleActions: "play none none reverse",
        scrub: 1,
      },
    });

    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    }).to(
      cards,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="max-container">
      <div className="work px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16 text-white">
        <h1
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold opacity-0"
        >
          Work Experience.
        </h1>
      </div>
      <div ref={cardsRef} className="card opacity-0">
        {experience.map((exp) => (
          <Work key={exp.visitSite} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default WorkExp;
