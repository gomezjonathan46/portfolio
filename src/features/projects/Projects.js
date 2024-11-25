export default function Projects() {
  return (
    <div className="mx-[5%] mb-10 mt-[15%] sm:mt-[5%]">
      <Project 
        link={"http://staging.brownstein.group/clients/career-wardrobe/website/"}
        image={"cw"}
        title={"Career Wardrobe Website"}
        alt={"Career Wardrobe"}
      />
    </div>
  );
}

function Project({ link, image, title, alt }) {
  return (
    <div className="w-80 rounded-md bg-white/50 shadow-md">
      <a href={link} target="_blank">
        <div className="h-56">
          <div className="absolute h-56 w-80 rounded-t-md bg-black/75"></div>
          <img
            className="h-full w-auto rounded-t-md"
            src={require(`./assets/${image}.jpg`)}
            alt={alt}
          />
        </div>
        <p className="ml-2 py-1">{title}</p>
      </a>
    </div>
  );
}
