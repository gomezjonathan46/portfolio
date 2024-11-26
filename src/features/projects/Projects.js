import { useState } from "react";

export default function Projects() {
  return (
    <div className="custom-grid mx-auto mt-[15%] justify-evenly gap-5 sm:mt-[5%]">
      <Project
        link={
          "http://staging.brownstein.group/clients/career-wardrobe/website/"
        }
        image={"cw"}
        title={"Career Wardrobe Website"}
        alt={"Career Wardrobe"}
      />
      <Project
        link={"https://www.njm.com/quote/76ers"}
        image={"njm-quiz"}
        title={"NJM Sixers Quiz"}
        alt={"NJM Sixers Quiz"}
      />
      <Project
        link={"https://www.speedpay.com/"}
        image={"speedpay"}
        title={"Speedpay Events Page"}
        alt={"Speedpay Events Page"}
      />
      <Project
        link={"http://intexar.brownstein.group/health.html"}
        image={"intexar"}
        title={"Intexar Health Page"}
        alt={"Intexar Health Page"}
      />
      {/* <Project
        link={}
        image={}
        title={}
        alt={}
      /> */}
    </div>
  );
}

function Project({ link, image, title, alt }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="project-responsive-width rounded-md bg-white/50 shadow-md"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <a href={link} target="_blank" rel="noreferrer">
        <div className="relative h-auto overflow-hidden">
          <div
            className={`absolute inset-0 rounded-t-md bg-black/25 ${isHovering ? "block" : "hidden"}`}
          ></div>
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
