import DayNightToggle from "./components/DayNightToggle";
import Menu from "./components/Menu";

export default function Nav({
  aboutLink,
  projectsLink,
  experienceLink,
  contactLink,
}) {
  return (
    <div className="shadow-bottom sticky top-0 z-50 max-h-[60px] bg-[#f9f7f0] py-3 sm:max-h-[64px] md:max-h-[78px]">
      <div className="relative mx-[5%] flex items-start md:mb-10 md:items-center">
        <button className="google-font-fleur z-10 text-nowrap text-3xl sm:text-4xl md:text-[2.87rem]">
          Jonathan Gomez
        </button>
        <DayNightToggle />
        <Menu
        aboutLink={aboutLink}
        projectsLink={projectsLink}
        experienceLink={experienceLink}
        contactLink={contactLink}
        />
      </div>
    </div>
  );
}
