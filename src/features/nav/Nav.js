import DayNightToggle from "./components/DayNightToggle";

export default function Nav() {
  return (
    <div className="mt-3 flex items-center relative">
      <span className="google-font text-nowrap text-3xl">Jonathan Gomez</span>
      <DayNightToggle/>
      <ul className="flex ml-auto z-10">
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
