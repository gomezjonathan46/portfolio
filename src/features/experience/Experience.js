export default function Experience() {
  return (
    <div className="mx-[5%] mb-[10%]">
      {/* Title Bar */}
      <div className="flex justify-between">
        <p>Application Engineer - I</p>
        <div className="flex items-center">
          <p className="mr-7">2021 - 2022</p>
          <div className="relative h-4 w-4">
            <div className="absolute top-2/4 h-[1px] w-4 -translate-y-1/2 bg-black"></div>
            <div className="absolute left-2/4 h-4 w-[1px] -translate-x-1/2 bg-black"></div>
          </div>
        </div>
      </div>

      {/* Position Details */}
      <div>
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
  );
}

function Skills({ data }) {
  return data.map((item) => {
    return <div className="mr-1">{item}</div>;
  });
}
