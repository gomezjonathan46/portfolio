import React from "react";
import Nav from "./features/nav/Nav";
import About from "./features/about/About";
import Projects from "./features/projects/Projects";

function App() {
  return (
    <div className="font-size-on-mobile">
      <Nav />
      <About />
      <Projects />
    </div>
  );
}

export default App;
