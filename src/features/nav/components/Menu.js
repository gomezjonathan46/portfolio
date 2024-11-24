import { useState, useEffect } from "react";

export default function Menu() {
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
      className={`z-10 ml-auto flex flex-col rounded-sm ${isSmallScreen ? (menuOpen ? "bg-white/100 shadow-sm" : "bg-white/0") : "bg-white/0"} items-center p-3 transition-all duration-75`}
    >
      <div className="float-right ml-auto md:hidden hover:cursor-pointer" onClick={handleClick}>
        <div className="h-[1px] w-[25px] bg-black"></div>
        <div className="my-1 h-[1px] w-[20px] bg-black"></div>
        <div className="h-[1px] w-[25px] bg-black"></div>
      </div>
      <ul
        className={`visible mt-3 flex flex-col transition-all duration-75 md:mt-0 md:flex-row md:pt-0 ${isSmallScreen ? (menuOpen ? "block opacity-100" : `${hiddenClassTimer} opacity-0`) : "block"}`}
      >
        <li>
          <button className="float-right hover:underline">About</button>
        </li>
        <li className="md:ml-2">
          <button className="float-right hover:underline">Projects</button>
        </li>
        <li className="md:ml-2">
          <button className="float-right hover:underline">Experience</button>
        </li>
        <li className="md:ml-2">
          <button className="float-right hover:underline">Contact</button>
        </li>
      </ul>
    </div>
  );
}
