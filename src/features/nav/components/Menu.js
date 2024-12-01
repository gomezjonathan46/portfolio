import { useState, useEffect } from "react";

export default function Menu({
  aboutLink,
  projectsLink,
  experienceLink,
  contactLink,
  lightDarkMode,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [hiddenClassTimer, setHiddenClassTimer] = useState("hidden");

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleClick() {
    if (menuOpen) {
      setMenuOpen(false);
      setTimeout(() => {
        setHiddenClassTimer("hidden");
      }, 75);
    } else {
      setMenuOpen(true);
      setHiddenClassTimer("");
    }
  }

  return (
    <div
      className={`z-10 ml-auto flex flex-col rounded-sm ${isSmallScreen ? (menuOpen ? (lightDarkMode === "light" ? "shadow-around bg-[#f9f7f0]" : "shadow-around bg-[#202124]") : "bg-white/0") : "bg-white/0"} items-center p-3 transition-all duration-75`}
    >
      <div
        className="float-right ml-auto hover:cursor-pointer md:hidden"
        onClick={handleClick}
      >
        <div
          className={`h-[1px] w-[25px] ${lightDarkMode === "light" ? "bg-black" : "bg-white"}`}
        ></div>
        <div
          className={`my-1 h-[1px] w-[20px] ${lightDarkMode === "light" ? "bg-black" : "bg-white"}`}
        ></div>
        <div
          className={`h-[1px] w-[25px] ${lightDarkMode === "light" ? "bg-black" : "bg-white"}`}
        ></div>
      </div>
      <ul
        className={`visible mt-3 flex flex-col transition-all duration-75 md:mt-0 md:flex-row md:pt-0 ${isSmallScreen ? (menuOpen ? "block opacity-100" : `${hiddenClassTimer} opacity-0`) : "block"}`}
      >
        <li>
          <a className="float-right hover:underline" href={`#${aboutLink}`}>
            About
          </a>
        </li>
        <li className="md:ml-2">
          <a className="float-right hover:underline" href={`#${projectsLink}`}>
            Projects
          </a>
        </li>
        <li className="md:ml-2">
          <a
            className="float-right hover:underline"
            href={`#${experienceLink}`}
          >
            Experience
          </a>
        </li>
        <li className="md:ml-2">
          <a className="float-right hover:underline" href={`#${contactLink}`}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
