export default function Projects() {
  return (
    <div className="mx-[5%] mt-[15%] sm:mt-[5%]">
      <Project />
    </div>
  );
}

function Project() {
  return (
    <div className="bg-white/50 w-56 rounded-md">
      <div className="h-56">
        <div className="bg-black/75 w-56 h-56 absolute"></div>
        <img className="h-full w-auto" src={require("./assets/cw.jpg")} alt="" />
      </div>
      <p className="ml-2">hi</p>
    </div>
  );
}
