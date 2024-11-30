import { useState, useRef, useLayoutEffect } from "react";

export default function Container({
  title,
  date,
  location,
  url,
  href,
  description,
  skillsArray,
  logo,
  company,
}) {
  const ref = useRef(null);
  const [experienceDetailsHeight, setExperienceDetailsHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    if (ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      setExperienceDetailsHeight(height);
    }
  }, []);

  function handleHeightChange() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="shadow-around mx-auto mb-1 w-[575px] rounded-md bg-[#7fd1ae]/50">
      {/* Title Bar */}
      <div
        className="flex justify-between px-4 py-3 hover:cursor-pointer"
        onClick={handleHeightChange}
      >
        <p>{title}</p>
        <div className="flex items-center">
          <p className="mr-7">{date}</p>
          <div
            className={`relative h-3 w-3 ${isOpen ? "rotate-45" : "rotate-0"} transition-all duration-500 ease-in-out`}
          >
            <div className="absolute top-2/4 h-[1px] w-3 -translate-y-1/2 bg-black"></div>
            <div className="absolute left-2/4 h-3 w-[1px] -translate-x-1/2 bg-black"></div>
          </div>
        </div>
      </div>

      {/* Position Details */}
      <div
        className={`${isOpen ? "h-" + experienceDetailsHeight : "h-0"} overflow-hidden px-4 transition-all duration-500 ease-in-out`}
        style={{
          height: isOpen ? `${experienceDetailsHeight}px` : "0px", // Dynamically set height
        }}
      >
        <div ref={ref} className="pb-1">
          <img className="h-20"
            src={require(`../assets/${logo}`)}
            alt={company + "Logo"}
          />
          {/* location and link */}
          <div className="flex mt-1">
            <div className="mr-3 flex items-center">
              <LocationIcon />
              <p className="ml-1">{location}</p>
            </div>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              <LinkIcon />
              <p className="ml-1">{url}</p>
            </a>
          </div>
          <p>{description}</p>
          {/* Skills */}
          <div className="mb-2 mt-1 flex flex-wrap">
            {skillsArray.map((skill, index) => (
              <p key={index} className="mr-2 rounded-lg bg-[#f9f7f0] px-2 py-1">
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const LocationIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Capa_1"
    width="8.329"
    height="12"
    fill="#000"
    version="1.1"
    viewBox="0 0 4.12 5.936"
  >
    <g id="g1" transform="translate(-.908)scale(.015)">
      <path
        id="path1"
        d="M197.849 0C122.131 0 60.531 61.609 60.531 137.329c0 72.887 124.591 243.177 129.896 250.388l4.951 6.738a3.06 3.06 0 0 0 2.471 1.255 3.08 3.08 0 0 0 2.486-1.255l4.948-6.738c5.308-7.211 129.896-177.501 129.896-250.388C335.179 61.609 273.569 0 197.849 0m0 88.138c27.13 0 49.191 22.062 49.191 49.191 0 27.115-22.062 49.191-49.191 49.191-27.114 0-49.191-22.076-49.191-49.191 0-27.129 22.076-49.191 49.191-49.191"
      ></path>
    </g>
  </svg>
);

const LinkIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="svg1"
    width="16"
    height="11.633"
    fill="none"
    version="1.1"
    viewBox="0 0 0.48 0.349"
  >
    <path
      id="path1"
      stroke="#000"
      strokeLinecap="round"
      strokeWidth="0.046"
      d="M.174.305.16.317a.07.07 0 0 1-.07 0Q.082.31.06.289T.032.26a.07.07 0 0 1 0-.07.2.2 0 0 1 .028-.03L.125.092C.141.077.148.07.156.065a.07.07 0 0 1 .07 0C.234.07.24.077.256.093c.016.015.023.022.028.03a.07.07 0 0 1-.011.084M.207.142l-.01.014a.07.07 0 0 0 0 .07.2.2 0 0 0 .027.03c.015.016.022.023.03.028a.07.07 0 0 0 .07 0C.332.279.339.272.354.256L.42.191Q.442.17.448.16a.07.07 0 0 0 0-.07A.2.2 0 0 0 .42.06Q.4.038.39.032a.07.07 0 0 0-.084.012"
    ></path>
  </svg>
);
