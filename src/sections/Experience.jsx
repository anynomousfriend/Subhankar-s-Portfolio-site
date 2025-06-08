import React, { useEffect, useRef } from "react";
import { Timeline } from "../components/Timeline";
import { timelineData } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experiences = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="w-full opacity-0">
      <Timeline data={timelineData} />
    </div>
  );
};

export default Experiences;
