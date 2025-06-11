import React from "react";
import Nav from "./components/Nav";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Hero from "./sections/Hero";
import WorkExp from "./sections/WorkExp";
import Footer from "./sections/Footer";
import CursorFollower from "./components/CursorFollower";
import Experiences from "./sections/Experience";

const App = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CursorFollower />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <WorkExp />
      <Experiences />
      <Footer />
    </>
  );
};

export default App;
