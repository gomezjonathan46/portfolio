export default function Sections() {
  return (
    <div className="z-10 ml-auto">
      <div className="ml-auto md:hidden">
        <div className="h-[1px] w-[30px] bg-black"></div>
        <div className="my-1 h-[1px] w-[25px] bg-black"></div>
        <div className="h-[1px] w-[30px] bg-black"></div>
      </div>
      <ul className="hidden md:flex">
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
