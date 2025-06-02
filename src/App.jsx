import React from "react";
import Nav from "./components/Nav";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Hero from "./sections/Hero";
import WorkExp from "./sections/WorkExp";
import Footer from "./sections/Footer";
import CursorFollower from "./components/CursorFollower";

const App = () => {
  return (
    <>
      <CursorFollower />
      <Nav />
      <Hero />
      <Skills />
      <About />
      <WorkExp />
      <Footer />
    </>
  );
};

export default App;
