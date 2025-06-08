import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedLetters = ({ text, className }) => {
  const lettersRef = useRef([]);

  useEffect(() => {
    const letters = lettersRef.current;

    gsap.set(letters, { y: 50, opacity: 0 });

    gsap.to(letters, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.7)",
      delay: 0.2,
    });
  }, []);

  return (
    <span className={className}>
      {text.split("").map((letter, index) => (
        <span
          key={index}
          ref={(el) => (lettersRef.current[index] = el)}
          className="inline-block"
        >
          {letter}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
