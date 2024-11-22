import DayNightToggle from "./components/DayNightToggle";

export default function Nav() {
  return (
    <div className="relative mt-3 flex items-center">
      <button className="google-font z-10 text-nowrap text-3xl">
        Jonathan Gomez
      </button>
      <DayNightToggle />
      <ul className="z-10 ml-auto flex">
        <li>
          <button className="hover:underline">About</button>
        </li>
        <li className="ml-2">
          <button className="hover:underline">Projects</button>
        </li>
        <li className="ml-2">
          <button className="hover:underline">Experience</button>
        </li>
        <li className="ml-2">
          <button className="hover:underline">Contact</button>
        </li>
      </ul>
    </div>
  );
}
