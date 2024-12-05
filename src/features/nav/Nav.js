import DayNightToggle from "./components/DayNightToggle";
import Menu from "./components/Menu";

export default function Nav({
  aboutLink,
  projectsLink,
  experienceLink,
  contactLink,
  lightDarkMode,
  lightDarkModeChange,
  scroll,
}) {
  function handleClick() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div
      className={`${scroll > 0 && "shadow-bottom"} sticky top-0 z-50 max-h-[60px] ${lightDarkMode === "light" ? "bg-[#f9f7f0]" : "bg-[#202124] text-white"} py-3 sm:max-h-[64px] md:max-h-[78px]`}
    >
      <div className="relative mx-[5%] flex items-start md:mb-10 md:items-center">
        <button
          className="google-font-fleur z-10 text-nowrap text-3xl sm:text-4xl md:text-[2.87rem]"
          onClick={handleClick}
        >
          Jonathan Gomez
        </button>
        <DayNightToggle
          lightDarkMode={lightDarkMode}
          lightDarkModeChange={lightDarkModeChange}
        />
        <Menu
          aboutLink={aboutLink}
          projectsLink={projectsLink}
          experienceLink={experienceLink}
          contactLink={contactLink}
          lightDarkMode={lightDarkMode}
        />
      </div>
    </div>
  );
}
