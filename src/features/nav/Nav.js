import DayNightToggle from "./components/DayNightToggle";
import Menu from "./components/Menu";

export default function Nav() {
  return (
    <div className="shadow-bottom sticky top-0 z-50 mb-5 bg-[#f0ead6] py-3 max-h-[60px] sm:max-h-[64px] md:max-h-[78px]">
      <div className="relative flex items-start md:mb-10 md:items-center">
        <button className="google-font z-10 text-nowrap text-3xl sm:text-4xl md:text-[2.87rem]">
          Jonathan Gomez
        </button>
        <DayNightToggle />
        <Menu />
      </div>
    </div>
  );
}
