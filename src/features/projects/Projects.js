import { useState } from "react";

export default function Projects() {
  return (
    <div className="custom-grid mx-auto justify-evenly gap-5">
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
      <Project
        link={"https://www.saint-gobain-northamerica.com/careers"}
        image={"SG-statistics"}
        title={"Saint Gobain Statistics"}
        alt={"Saint Gobain Statistics"}
      />
      <Project
        link={"https://gomezjonathan46.github.io/Memory-Game-Project/"}
        image={"matching"}
        title={"Matching Game"}
        alt={"Matching Game"}
      />
      <Project
        link={"https://gomezjonathan46.github.io/Pixel-Art-Maker/"}
        image={"pixel"}
        title={"Pixel Art Maker"}
        alt={"Pixel Art Maker"}
      />
      <Project
        link={"https://gomezjonathan46.github.io/BG-Newsletter/"}
        image={"bg-newsletter"}
        title={"BG Newsletter Email"}
        alt={"BG Newsletter Email"}
      />
      <Project
        link={"https://gomezjonathan46.github.io/speedpay-email/"}
        image={"speedpay-email"}
        title={"Speedpay Email"}
        alt={"Speedpay Email"}
      />
      <Project
        link={"https://gomezjonathan46.github.io/BG-Talk/"}
        image={"bg-talk"}
        title={"BG Talk Email"}
        alt={"BG Talk Email"}
      />
      <Project
        link={"https://gomezjonathan46.github.io/IKEA-email/"}
        image={"ikea-email"}
        title={"IKEA Email"}
        alt={"IKEA Email"}
      />
      <Project
        link={"https://gomezjonathan46.github.io/NJM-5404/"}
        image={"banner-1"}
        title={"NJM Banner"}
        alt={"NJM Banner"}
      />
      <Project
        link={"https://gomezjonathan46.github.io/NJM-1028/"}
        image={"banner-2"}
        title={"NJM Banner"}
        alt={"NJM Banner"}
      />
      <Project
        link={"https://gomezjonathan46.github.io/NJM-5202/"}
        image={"banner-3"}
        title={"NJM Banner"}
        alt={"NJM Banner"}
      />
      <Project
        link={"https://gomezjonathan46.github.io/NJM-1654/"}
        image={"banner-4"}
        title={"NJM Banner"}
        alt={"NJM Banner"}
      />
      <Project
        link={"https://gomezjonathan46.github.io/Inspira-1092/"}
        image={"banner-5"}
        title={"NJM Banner"}
        alt={"NJM Banner"}
      />
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
