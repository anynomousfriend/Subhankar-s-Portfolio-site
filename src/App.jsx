import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";

import Hero from "./sections/Hero";
import WorkExp from "./sections/WorkExp";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <WorkExp />
    </>
  );
};

export default App;
