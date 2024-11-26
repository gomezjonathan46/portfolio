import { useState } from "react";

export default function Projects() {
  return (
    <div className="mx-auto mb-10 mt-[15%] flex flex-wrap justify-around sm:mt-[5%]">
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
      className="mx-3 mb-5 w-72 rounded-md bg-white/50 shadow-md sm:w-80"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <a href={link} target="_blank" rel="noreferrer">
        <div className="h-auto overflow-hidden relative">
          <div
            className={`h-full absolute w-72 rounded-t-md bg-black/25 sm:w-80 ${isHovering ? "block" : "hidden"}`}
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
