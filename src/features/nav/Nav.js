import DayNightToggle from "./components/DayNightToggle";
import Sections from "./components/Sections";

export default function Nav() {
  return (
    <div className="relative mt-3 flex items-center">
      <button className="google-font z-10 text-nowrap text-3xl sm:text-4xl md:text-[2.87rem]">
        Jonathan Gomez
      </button>
      <DayNightToggle />
      <Sections />
    </div>
  );
}
