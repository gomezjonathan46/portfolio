import React from "react";
import Nav from "./features/nav/Nav";
import About from "./features/about/About";

function App() {
  return (
    <div className="font-size-on-mobile">
      <Nav />
      <About />
    </div>
  );
}

export default App;
