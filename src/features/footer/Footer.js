export default function Footer({ id, lightDarkMode, screenSize }) {
  return (
    <div
      className={`shadow-top mt-10 ${lightDarkMode === "light" ? "bg-[#7fd1ae]" : "bg-[#1310d9] text-white"} pb-2 pt-3`}
      id={id}
    >
      <div className="mx-auto flex w-[95%] justify-between">
        <div className="flex flex-col">
          <a href="tel:+1-215-609-5952">(215) 609-5952</a>
          <a href="mailto:gomez.e.jonathan@gmail.com">
            gomez.e.jonathan@gmail.com
          </a>
        </div>
        <div className="flex flex-row items-center">
          <a
            href="https://www.linkedin.com/in/jonathangomeze/"
            target="_blank"
            rel="noreferrer"
            className="mr-2"
          >
            <LinkedInIcon
              width={screenSize.width > 375 ? "50" : "25"}
              height={screenSize.width > 375 ? "50" : "25"}
              fill={lightDarkMode === "light" ? "#000" : "#fff"}
            />
          </a>
          <a
            href="https://github.com/gomezjonathan46"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon
              width={screenSize.width > 375 ? "50" : "25"}
              height={screenSize.width > 375 ? "50" : "25"}
              fill={lightDarkMode === "light" ? "#000" : "#fff"}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

const LinkedInIcon = ({ fill = "#000", width = "25", height = "25" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="svg1"
    width={width}
    height={height}
    fill="none"
    version="1.1"
    viewBox="0 0 1.5 1.5"
  >
    <path
      id="path1"
      fill={fill}
      strokeWidth="0.094"
      d="M1.38 0H.128A.123.123 0 0 0 0 .117v1.255a.13.13 0 0 0 .128.128H1.38a.126.126 0 0 0 .12-.128V.117A.115.115 0 0 0 1.38 0M.469 1.25H.25V.583H.47ZM.365.482A.11.11 0 0 1 .25.366.11.11 0 0 1 .367.25.11.11 0 0 1 .48.366.11.11 0 0 1 .365.48m.886.77h-.22V.885c0-.087-.03-.147-.109-.147a.12.12 0 0 0-.11.079.1.1 0 0 0-.007.053v.38H.59V.583h.215v.094a.22.22 0 0 1 .197-.113c.142 0 .249.093.249.293z"
    ></path>
  </svg>
);

const GitHubIcon = ({ fill = "#000", width = "25", height = "25" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="svg1"
    width={width}
    height={height}
    version="1.1"
    viewBox="0 0 1.25 1.25"
  >
    <g
      id="Page-1"
      fill="none"
      fillRule="evenodd"
      stroke="none"
      strokeWidth="1"
      transform="scale(.0625)"
    >
      <g
        id="Dribbble-Light-Preview"
        fill={fill}
        transform="translate(-140 -7559)"
      >
        <g id="icons" transform="translate(56 160)">
          <path
            id="github-[#142]"
            d="M94 7399c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051a9.4 9.4 0 0 0-2.505-.345c-.85 0-1.705.118-2.503.345-1.911-1.326-2.751-1.051-2.751-1.051-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493-3.974-1.355-6.839-5.199-6.839-9.729 0-5.663 4.478-10.253 10-10.253"
          ></path>
        </g>
      </g>
    </g>
  </svg>
);
