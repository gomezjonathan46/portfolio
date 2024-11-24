import DayNightToggle from "./components/DayNightToggle";
import Menu from "./components/Menu";

export default function Nav() {
  return (
    <div className="relative mt-3 flex items-start md:items-center">
      <button className="google-font z-10 text-nowrap text-3xl sm:text-4xl md:text-[2.87rem]">
        Jonathan Gomez
      </button>
      <DayNightToggle />
      <Menu />
    </div>
  );
}
