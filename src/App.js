import React from "react";
import Nav from "./features/nav/Nav";
import About from "./features/about/About";
import Projects from "./features/projects/Projects";
import Header from "./components/Header";
import Experience from "./features/experience/Experience";

function App() {
  return (
    <div className="font-size-on-mobile">
      <Nav />
      <Header text="Hello, I'm Jonathan" />
      <About />
      <Header text="Projects" />
      <Projects />
      <Header text="Experience" />
      <Experience />
    </div>
  );
}

export default App;
