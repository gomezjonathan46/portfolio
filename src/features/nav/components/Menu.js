import { useState, useEffect } from "react";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [hiddenClassTimer, setHiddenClassTimer] = useState('hidden');


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
        setHiddenClassTimer('hidden');
      }, 75);
    } else {
      setMenuOpen(true);
      setHiddenClassTimer('');
    }
  }

  return (
    <div
      className={`z-10 ml-auto flex flex-col rounded-sm ${isSmallScreen ? menuOpen ? "bg-white/50" : "bg-white/0" : "bg-white/0"} p-3 transition-all duration-75`}
    >
      <div className="float-right mb-3 ml-auto md:hidden" onClick={handleClick}>
        <div className="h-[1px] w-[25px] bg-black"></div>
        <div className="my-1 h-[1px] w-[20px] bg-black"></div>
        <div className="h-[1px] w-[25px] bg-black"></div>
      </div>
      <ul
        className={`flex flex-col md:mt-0 md:flex-row md:pt-0 transition-all visible duration-75 ${isSmallScreen ? (menuOpen ? "block opacity-100" : `${hiddenClassTimer} opacity-0`) : "block"}`}
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
