import { useState, useRef, useLayoutEffect } from "react";

export default function Experience() {
  return (
    <>
      <Container
        title={"Application Engineer - I"}
        date={"2021-2022"}
        location={"Malvern, PA"}
        url={"vanguard.com"}
        description={
          "Some random details about the job I performed and blah blah blah afgwrbstbwrnbwrbgwebveargfeefbvsdfbwaefgbwrgbvfa"
        }
        skillsArray={["test2", "test", "data"]}
      />
      <Container
        title="Software Engineer Intern"
        date="2020-2021"
        location="New York, NY"
        url="example.com"
        description="Worked on cool projects as an intern."
        skillsArray={["Python", "Flask", "SQL"]}
      />
    </>
  );
}

function Container({ title, date, location, url, description, skillsArray }) {
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
          {/* location and link */}
          <div className="flex">
            <div>
              {/* <img
            src={require(`location icon`)}
            alt={alt}
          /> */}
              <p>{location}</p>
            </div>
            <div>
              {/* <img
            src={require(`link icon`)}
            alt={alt}
          /> */}
              {/* <a href={link} target="_blank" rel="noreferrer"> */}
              {url}
              {/* </a> */}
            </div>
          </div>
          <p>{description}</p>
          {/* Skills */}
          <div className="flex flex-wrap">
            {skillsArray.map((skill, index) => (
              <p key={index} className="mb-2 mr-2 rounded bg-gray-200 p-2">
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// function Skills({ data }) {
//   return data.map((item, index) => (
//     <p key={index} className="mr-1">
//       {item}
//     </p>
//   ));
// }
