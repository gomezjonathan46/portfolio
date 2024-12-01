import React from "react";
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

  return (
    <div className="font-size-on-mobile">
      <Nav
        aboutLink={aboutNavLink}
        projectsLink={projectsNavLink}
        experienceLink={experienceNavLink}
        contactLink={contactNavLink}
      />
      <Header text="Hello, I'm Jonathan" id={aboutNavLink} />
      <About />
      <Header text="Projects" id={projectsNavLink}/>
      <Projects />
      <Header text="Experience" id={experienceNavLink}/>
      <Experience />
      <Footer id={contactNavLink}/>
    </div>
  );
}

export default App;
