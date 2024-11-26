import React from "react";
import Nav from "./features/nav/Nav";
import About from "./features/about/About";
import Projects from "./features/projects/Projects";
import Header from "./components/Header";

function App() {
  return (
    <div className="font-size-on-mobile">
      <Nav />
      <Header 
        text="Hello"
      />
      <About />
      <Projects />
    </div>
  );
}

export default App;
