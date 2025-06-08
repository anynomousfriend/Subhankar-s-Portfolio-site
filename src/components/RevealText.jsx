import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RevealText = ({
  children,
  className = "",
  delay = 0,
  waitForScroll = false,
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    gsap.set(element, {
      y: 50,
      opacity: 0,
    });

    const animation = {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: waitForScroll ? 0 : delay,
    };

    if (waitForScroll) {
      gsap.to(element, {
        ...animation,
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "top center",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
      });
    } else {
      gsap.to(element, animation);
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [delay, waitForScroll]);

  return (
    <div ref={elementRef} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default RevealText;
