import { useState } from "react";

export default function Projects({ lightDarkMode }) {
  return (
    <div className="project-custom-grid mx-auto justify-evenly gap-5">
      <Project
        link={
          "http://staging.brownstein.group/clients/career-wardrobe/website/"
        }
        image={"cw"}
        title={"Career Wardrobe Website"}
        alt={"Career Wardrobe"}
        lightDarkMode={lightDarkMode}
      />
      <Project
        link={"https://www.njm.com/quote/76ers"}
        image={"njm-quiz"}
        title={"NJM Sixers Quiz"}
        alt={"NJM Sixers Quiz"}
        lightDarkMode={lightDarkMode}
      />
      <Project
        link={"https://www.speedpay.com/"}
        image={"speedpay"}
        title={"Speedpay Events Page"}
        alt={"Speedpay Events Page"}
        lightDarkMode={lightDarkMode}
      />
      <Project
        link={"http://intexar.brownstein.group/health.html"}
        image={"intexar"}
        title={"Intexar Health Page"}
        alt={"Intexar Health Page"}
        lightDarkMode={lightDarkMode}
      />
      <Project
        link={"https://www.saint-gobain-northamerica.com/careers"}
        image={"SG-statistics"}
        title={"Saint Gobain Statistics"}
        alt={"Saint Gobain Statistics"}
        lightDarkMode={lightDarkMode}
      />
      <Project
        link={"https://gomezjonathan46.github.io/Memory-Game-Project/"}
        image={"matching"}
        title={"Matching Game"}
        alt={"Matching Game"}
        lightDarkMode={lightDarkMode}
      />
      <Project
        link={"https://gomezjonathan46.github.io/Pixel-Art-Maker/"}
        image={"pixel"}
        title={"Pixel Art Maker"}
        alt={"Pixel Art Maker"}
        lightDarkMode={lightDarkMode}
      />
      <Project
        link={"https://gomezjonathan46.github.io/BG-Newsletter/"}
        image={"bg-newsletter"}
        title={"BG Newsletter Email"}
        alt={"BG Newsletter Email"}
        lightDarkMode={lightDarkMode}
      />
      <Project
        link={"https://gomezjonathan46.github.io/speedpay-email/"}
        image={"speedpay-email"}
        title={"Speedpay Email"}
        alt={"Speedpay Email"}
        lightDarkMode={lightDarkMode}
      />
      <Project
        link={"https://gomezjonathan46.github.io/BG-Talk/"}
        image={"bg-talk"}
        title={"BG Talk Email"}
        alt={"BG Talk Email"}
        lightDarkMode={lightDarkMode}
      />
      <Project
        link={"https://gomezjonathan46.github.io/IKEA-email/"}
        image={"ikea-email"}
        title={"IKEA Email"}
        alt={"IKEA Email"}
        lightDarkMode={lightDarkMode}
      />
      <Project
        link={"https://gomezjonathan46.github.io/NJM-5404/"}
        image={"banner-1"}
        title={"NJM Banner"}
        alt={"NJM Banner"}
        lightDarkMode={lightDarkMode}
      />
      <Project
        link={"https://gomezjonathan46.github.io/NJM-1028/"}
        image={"banner-2"}
        title={"NJM Banner"}
        alt={"NJM Banner"}
        lightDarkMode={lightDarkMode}
      />
      <Project
        link={"https://gomezjonathan46.github.io/NJM-5202/"}
        image={"banner-3"}
        title={"NJM Banner"}
        alt={"NJM Banner"}
        lightDarkMode={lightDarkMode}
      />
      <Project
        link={"https://gomezjonathan46.github.io/NJM-1654/"}
        image={"banner-4"}
        title={"NJM Banner"}
        alt={"NJM Banner"}
        lightDarkMode={lightDarkMode}
      />
      <Project
        link={"https://gomezjonathan46.github.io/Inspira-1092/"}
        image={"banner-5"}
        title={"NJM Banner"}
        alt={"NJM Banner"}
        lightDarkMode={lightDarkMode}
      />
    </div>
  );
}

function Project({ link, image, title, alt, lightDarkMode }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`project-responsive-width rounded-md ${lightDarkMode === "light" ? "bg-white/50" : "bg-black/50 text-white"} shadow-around`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="project-responsive-width block"
      >
        <div className="project-responsive-width relative h-48 overflow-hidden">
          <img
            className="absolute min-h-full rounded-t-md"
            src={require(`./assets/${image}.jpg`)}
            alt={alt}
          />
          <div
            className={`absolute inset-0 rounded-t-md bg-black/25 ${isHovering ? "block" : "hidden"}`}
          ></div>
        </div>
        <p className="ml-2 py-1">{title}</p>
      </a>
    </div>
  );
}
