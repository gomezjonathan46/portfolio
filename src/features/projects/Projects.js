export default function Projects() {
  return (
    <div className="mx-[5%] mt-[15%] sm:mt-[5%] mb-10">
      <Project />
    </div>
  );
}

function Project() {
  return (
    <div className="w-80 rounded-md bg-white/50 shadow-md">
      <a href="https://gomezjonathan46.github.io/Portfolio/">
        <div className="h-56">
          <div className="absolute h-56 w-80 rounded-t-md bg-black/75"></div>
          <img
            className="h-full w-auto rounded-t-md"
            src={require(`./assets/${'cw'}.jpg`)}
            alt=""
          />
        </div>
        <p className="ml-2">hi</p>
      </a>
    </div>
  );
}
