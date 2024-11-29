import { useState, useRef, useLayoutEffect } from "react";

export default function Experience() {
  return (
    <>
      <Container />
      <Container />
    </>
  );
}

function Container() {
  const ref = useRef(null);
  const [experienceDetailsHeight, setExperienceDetailsHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    if (ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      setExperienceDetailsHeight(height); // Save the actual height of the details div
    }
  }, []);

  function handleHeightChange() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="shadow-around mx-auto mb-1 w-[575px] rounded-md bg-[#7fd1ae]/50 px-4 py-3">
      {/* Title Bar */}
      <div className="flex justify-between" onClick={handleHeightChange}>
        <p>Application Engineer - I</p>
        <div className="flex items-center">
          <p className="mr-7">2021 - 2022</p>
          <div className="relative h-3 w-3">
            <div className="absolute top-2/4 h-[1px] w-3 -translate-y-1/2 bg-black"></div>
            <div className="absolute left-2/4 h-3 w-[1px] -translate-x-1/2 bg-black"></div>
          </div>
        </div>
      </div>

      {/* Position Details */}
      <div
        className={`${isOpen ? "h-" + experienceDetailsHeight : "h-0"} overflow-hidden transition-all duration-1000 ease-in-out`}
        style={{
          height: isOpen ? `${experienceDetailsHeight}px` : "0px", // Dynamically set height
        }}
      >
        <div ref={ref}>
          {/* location and link */}
          <div className="flex">
            <div>
              {/* <img
            src={require(`location icon`)}
            alt={alt}
          /> */}
              <p>Malvern, PA</p>
            </div>
            <div>
              {/* <img
            src={require(`link icon`)}
            alt={alt}
          /> */}
              {/* <a href={link} target="_blank" rel="noreferrer"> */}
              vanguard.com
              {/* </a> */}
            </div>
          </div>
          <p>Details</p>
          {/* Skills */}
          <div className="flex">
            <Skills data={["test2", "test", "data"]} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Skills({ data }) {
  return data.map((item, index) => (
    <p key={index} className="mr-1">
      {item}
    </p>
  ));
}
