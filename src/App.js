import React, { useState } from "react";
import Nav from "./features/nav/Nav";
import About from "./features/about/About";
import Projects from "./features/projects/Projects";
import Header from "./components/Header";
import Experience from "./features/experience/Experience";
import Footer from "./features/footer/Footer";

function App() {
  const aboutNavLink = "about";
  const projectsNavLink = "projects";
  const experienceNavLink = "experience";
  const contactNavLink = "contact";
  const [lightDarkMode, setLightDarkMode] = useState(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    } else {
      return "light";
    }
  });

  const handleLightDarkModeChange = (newValue) => {
    setLightDarkMode(newValue);
  };

  return (
    <div
      className={`font-size-on-mobile ${lightDarkMode === "light" ? "bg-[#f9f7f0]" : "bg-[#202124]"}`}
    >
      <Nav
        aboutLink={aboutNavLink}
        projectsLink={projectsNavLink}
        experienceLink={experienceNavLink}
        contactLink={contactNavLink}
        lightDarkMode={lightDarkMode}
        lightDarkModeChange={handleLightDarkModeChange}
      />
      <Header
        text="Hello, I'm Jonathan"
        id={aboutNavLink}
        lightDarkMode={lightDarkMode}
      />
      <About lightDarkMode={lightDarkMode} />
      <Header
        text="Projects"
        id={projectsNavLink}
        lightDarkMode={lightDarkMode}
      />
      <Projects lightDarkMode={lightDarkMode} />
      <Header
        text="Experience"
        id={experienceNavLink}
        lightDarkMode={lightDarkMode}
      />
      <Experience lightDarkMode={lightDarkMode} />
      <Footer id={contactNavLink} lightDarkMode={lightDarkMode} />
    </div>
  );
}

export default App;
