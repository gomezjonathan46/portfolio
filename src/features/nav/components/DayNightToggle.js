import { useState } from "react";

const Sun = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="svg1"
    width="100%"
    height="100%"
    version="1.1"
    viewBox="0 0 50 49.899"
  >
    <g id="layer1" transform="matrix(.3107 0 0 .3107 -9.744 -8.205)">
      <g
        id="g6"
        fill="#fff"
        fillOpacity="1"
        stroke="none"
        strokeDasharray="none"
        strokeWidth="0.457"
      >
        <path
          id="path3-7"
          d="M142.866 125.874a67 67 0 0 0 .018-1.989 57 57 0 0 0-.046-2 62 62 0 0 0-.536-6.066l-.076-.538a59 59 0 0 1 2.374.892 62 62 0 0 1 4.715 2.111 65 65 0 0 1 2.767 1.46l.052.03a68 68 0 0 1 3.567 2.122 72 72 0 0 1 3.528 2.392 75 75 0 0 1 2.229 1.671 79 79 0 0 1-3.142 2.147 76 76 0 0 1-4.654 2.78 72 72 0 0 1-2.816 1.469 70 70 0 0 1-4.723 2.128 68 68 0 0 1-4.41 1.614 63 63 0 0 0 .55-3.21 62 62 0 0 0 .597-6.843m-9.21 30.498a64 64 0 0 0 3.918-7.551 63 63 0 0 0 .566-1.337 74 74 0 0 1 2.12 2.76 78 78 0 0 1 2.875 4.197 82 82 0 0 1 1.088 1.75l.03.05a84 84 0 0 1 2.54 4.484 88 88 0 0 1 2.59 5.333 93 93 0 0 1-1.497.07 83 83 0 0 1-5.244.027 78 78 0 0 1-3.105-.143 81 81 0 0 1-1.027-.073l-.117-.01a79 79 0 0 1-7.947-1.01 78 78 0 0 1-2.597-.51 68 68 0 0 0 1.405-1.72 65 65 0 0 0 4.316-6.18m-22.37 21.878a64 64 0 0 0 6.994-4.793 65 65 0 0 0 1.12-.901 86 86 0 0 1 .275 1.446 79 79 0 0 1 1.098 9.062l.004.059a81 81 0 0 1 .157 7.209 88 88 0 0 1-.073 2.106 82 82 0 0 1-.097 1.677 96 96 0 0 1-2.327-1.112 89 89 0 0 1-4.654-2.484 85 85 0 0 1-2.678-1.602q-.05-.03-.1-.063a82 82 0 0 1-4.173-2.776 79 79 0 0 1-4.01-3.054l-.495-.408a57 57 0 0 0 1.196-.485 63 63 0 0 0 5.978-2.87 64 64 0 0 0 1.646-.93m-30.742 8.508q.337.009.675.015l.315-.01a62 62 0 0 0 4.905-.345 62 62 0 0 0 4.354-.642 67 67 0 0 1-2.015 5.174 69 69 0 0 1-2.262 4.693l-.029.054a72 72 0 0 1-2.633 4.595 76 76 0 0 1-2.635 3.961 77 77 0 0 1-.836 1.09 79 79 0 0 1-2.711-4.068 75 75 0 0 1-2.672-4.668 72 72 0 0 1-.484-.94l-.054-.107a71 71 0 0 1-2.135-4.611 69 69 0 0 1-1.989-5.362 63 63 0 0 0 3.205.555 61 61 0 0 0 4.86.512 62 62 0 0 0 1.971.098m-30.466-9.246a64 64 0 0 0 7.549 3.923 63 63 0 0 0 1.335.566 72 72 0 0 1-1.953 1.521 78 78 0 0 1-4.147 2.92 82 82 0 0 1-2.61 1.648l-.051.03a84 84 0 0 1-4.483 2.544 88 88 0 0 1-5.331 2.594 80 80 0 0 1-.1-2.555 83 83 0 0 1 .225-8.328l.01-.118a81 81 0 0 1 1.01-7.953 79 79 0 0 1 .51-2.598 63 63 0 0 0 2.462 1.982 65 65 0 0 0 5.436 3.739m-21.876-22.37a64 64 0 0 0 4.791 6.994 65 65 0 0 0 .902 1.12 77 77 0 0 1-4.423.753 78 78 0 0 1-4.034.464 81 81 0 0 1-2.043.156q-.03 0-.058.004a81 81 0 0 1-10.983-.021 91 91 0 0 1 2.074-4.218 87 87 0 0 1 2.574-4.56q.27-.445.543-.884l.062-.1a82 82 0 0 1 2.774-4.171 78 78 0 0 1 3.052-4.007q.203-.249.408-.495a63 63 0 0 0 3.35 7.178 64 64 0 0 0 .93 1.646m-8.458-30.776q-.015.45-.023.901l.002.09a61 61 0 0 0 .97 9.276 67 67 0 0 1-6.11-2.458 70 70 0 0 1-3.749-1.86l-.053-.028a72 72 0 0 1-4.594-2.657 76 76 0 0 1-3.542-2.363 75 75 0 0 1-1.477-1.138 80 80 0 0 1 3.152-2.117 76 76 0 0 1 4.67-2.739 72 72 0 0 1 1.882-.978l.108-.054a71 71 0 0 1 4.62-2.115 69 69 0 0 1 5.368-1.963 61.3 61.3 0 0 0-1.217 10.033m9.42-30.413a64 64 0 0 0-3.578 6.66 63 63 0 0 0-.966 2.195 75 75 0 0 1-2.69-3.597 79 79 0 0 1-2.802-4.267 83 83 0 0 1-.564-.934 84 84 0 0 1-2.511-4.5 88 88 0 0 1-2.556-5.349 80 80 0 0 1 3.606-.096 83 83 0 0 1 5.21.142 81 81 0 0 1 2.057.148l.118.01a81 81 0 0 1 6.95.887 79 79 0 0 1 3.584.704 65 65 0 0 0-4.75 6.274 64 64 0 0 0-1.022 1.586M51.15 72.074a64 64 0 0 0-7.026 4.746 65 65 0 0 0-1.127.894A79 79 0 0 1 41.696 67.2l-.003-.06a81 81 0 0 1-.07-8.26 83 83 0 0 1 .159-2.73 91 91 0 0 1 4.203 2.103 87 87 0 0 1 4.543 2.607 83 83 0 0 1 .98.613 82 82 0 0 1 4.154 2.803 78 78 0 0 1 3.99 3.081l.492.411a62 62 0 0 0-4.669 2.019 64 64 0 0 0-4.183 2.207m30.82-8.276a62 62 0 0 0-1.125-.03 61 61 0 0 0-5.749.416 61 61 0 0 0-3.392.503 67 67 0 0 1 1.646-4.221 69 69 0 0 1 2.221-4.689q.243-.466.494-.932l.028-.053a72 72 0 0 1 2.674-4.581 76 76 0 0 1 2.078-3.113 76 76 0 0 1 1.436-1.87 79 79 0 0 1 2.674 4.083 75 75 0 0 1 2.63 4.682 72 72 0 0 1 .53 1.05 71 71 0 0 1 2.096 4.624 69 69 0 0 1 1.945 5.373 62 62 0 0 0-5.127-.84 62 62 0 0 0-4.89-.395m30.382 9.454a64 64 0 0 0-6.657-3.58 63 63 0 0 0-2.194-.968 76 76 0 0 1 4.432-3.27 80 80 0 0 1 4.319-2.761l.05-.03a84 84 0 0 1 4.5-2.515 88 88 0 0 1 5.347-2.56 82 82 0 0 1 .092 3.609q.002.525-.002 1.05a77 77 0 0 1-.086 3.129 82 82 0 0 1-.204 3.095l-.01.117a82 82 0 0 1-.568 4.958 79 79 0 0 1-1.022 5.585 68 68 0 0 0-1.71-1.416 65 65 0 0 0-6.149-4.357m21.726 22.516a64 64 0 0 0-3.613-5.523 65 65 0 0 0-2.026-2.632 78 78 0 0 1 6.437-.966 80 80 0 0 1 4.129-.339 81 81 0 0 1 7.203-.103 82 82 0 0 1 3.778.2 88 88 0 0 1-3.114 6.052 85 85 0 0 1-3.258 5.309 80 80 0 0 1-2.951 4.148 76 76 0 0 1-2.283 2.85 64 64 0 0 0-1.612-3.813 63 63 0 0 0-2.61-5.042"
          display="inline"
          transform="translate(30.812 -18.74)"
        ></path>
        <path
          id="path3-7-6"
          d="M262.852 207.496a44 44 0 0 1-.287 4.964 44 44 0 0 1-.836 4.872 46 46 0 0 1-1.354 4.746 48 48 0 0 1-1.431 3.683 50 50 0 0 1-2.198 4.435 52 52 0 0 1-2.62 4.215 54 54 0 0 1-3.007 3.962 54.5 54.5 0 0 1-4.798 5.059 55 55 0 0 1-5.399 4.406 54 54 0 0 1-4.174 2.697 52 52 0 0 1-4.4 2.285 50 50 0 0 1-4.59 1.838 48 48 0 0 1-4.75 1.36 46 46 0 0 1-4.874.845 44 44 0 0 1-5.963.291 46 46 0 0 1-1.991-.085 44 44 0 0 1-4.92-.602 46 46 0 0 1-3.858-.864 48 48 0 0 1-4.698-1.528 49 49 0 0 1-4.53-1.997 51 51 0 0 1-4.324-2.431 53 53 0 0 1-4.088-2.832 54 54 0 0 1-5.26-4.576 55 55 0 0 1-5.24-5.996 54 54 0 0 1-3.312-4.955 52 52 0 0 1-2.308-4.381 50 50 0 0 1-1.861-4.577 48 48 0 0 1-1.144-3.779 47 47 0 0 1-.82-3.865 45 45 0 0 1-.476-3.934 44 44 0 0 1-.118-3.986 45 45 0 0 1 .08-1.99 44 44 0 0 1 .591-4.919 45 45 0 0 1 .857-3.856 47 47 0 0 1 1.18-3.768 49 49 0 0 1 1.904-4.56 51 51 0 0 1 2.348-4.362 53 53 0 0 1 2.757-4.131 54 54 0 0 1 3.803-4.606 55 55 0 0 1 8.997-7.839 54 54 0 0 1 4.21-2.64 52 52 0 0 1 4.429-2.22 50 50 0 0 1 3.68-1.455 48 48 0 0 1 3.782-1.148 47 47 0 0 1 4.845-.98 45 45 0 0 1 3.95-.398 43.4 43.4 0 0 1 7.95.29 45 45 0 0 1 3.9.673 47 47 0 0 1 4.765 1.305 48 48 0 0 1 4.61 1.788 51 51 0 0 1 4.422 2.238 52 52 0 0 1 4.2 2.654 54 54 0 0 1 4.698 3.688 55 55 0 0 1 8.059 8.8 54 54 0 0 1 2.742 4.141 52 52 0 0 1 2.331 4.37 50 50 0 0 1 1.886 4.568 48 48 0 0 1 1.166 3.772 46 46 0 0 1 1 4.837 45 45 0 0 1 .412 3.945 43 43 0 0 1 .071 1.992"
          transform="translate(-100.801 -101.894)"
        ></path>
      </g>
    </g>
  </svg>
);

const Moon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="svg1"
    width="100%"
    height="100%"
    version="1.1"
    viewBox="0 0 49.586 49.586"
  >
    <defs id="defs1">
      <clipPath id="clipPath4" clipPathUnits="userSpaceOnUse">
        <path
          id="lpe_path-effect4"
          fill="#fff"
          strokeWidth="0.265"
          d="M30.014 28.492H89.6v59.586H30.014Zm45.759 16.22a24.793 24.793 0 0 0-28.807-17.848 24.793 24.793 0 0 0-19.707 27.568 24.793 24.793 0 0 0 26.21 21.48 24.793 24.793 0 0 0 23.16-24.739"
          className="powerclip"
        ></path>
      </clipPath>
    </defs>
    <g
      id="layer1"
      fill="#fff"
      fillOpacity="1"
      strokeWidth="0.265"
      transform="translate(-35.014 -33.492)"
    >
      <path
        id="path1"
        d="M84.6 58.285a24.793 24.793 0 0 1-23.16 24.739 24.793 24.793 0 0 1-26.21-21.48 24.793 24.793 0 0 1 19.706-27.569 24.793 24.793 0 0 1 28.807 17.848"
        clipPath="url(#clipPath4)"
      ></path>
      <path
        id="path3"
        d="m54.37 58.72-2.13-4.115-3.96-2.41 4.116-2.13 2.41-3.959 2.13 4.115 3.959 2.41-4.116 2.13z"
      ></path>
      <path
        id="path3-0"
        d="m52.195 55.893-1.27-2.584-2.427-1.548 2.584-1.27 1.548-2.428 1.27 2.584 2.428 1.548-2.584 1.27z"
        transform="translate(10.986 8.663)"
      ></path>
      <path
        id="path3-0-9"
        d="m43.714 47.41-.846-1.546-1.547-.845 1.547-.846.846-1.547.846 1.547 1.546.846-1.546.845z"
        transform="translate(4.948 15.966)"
      ></path>
    </g>
  </svg>
);

export default function DayNightToggle() {
  const light = "bg-[#f60]";
  const dark = "bg-[#18171e]";
  const [background, setBackground] = useState(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return dark;
    } else {
      return light;
    }
  });

  function handleClick() {
    if (background === light) {
      setBackground(dark);
    } else {
      setBackground(light);
    }
  }

  return (
    <div className="hideOnMobile absolute right-32 z-20 mx-auto text-center sm:left-0 sm:right-0 sm:z-0">
      <div
        className={`${background} relative mx-auto flex h-[30px] w-[56px] rounded-full border-2 ${background === light ? "border-[#F0EAD6]" : "border-white"} px-1`}
        onClick={handleClick}
      >
        <div className="py-1 pr-1">
          <Sun />
        </div>
        <div className="py-1 pl-1">
          <Moon />
        </div>
        <div
          className={`absolute shadow-1 ${background === light ? "left-[29px]" : "left-[3px]"} top-[3px] h-[20px] w-[20px] rounded-full bg-white transition-all duration-200 ease-in-out`}
        ></div>
      </div>
    </div>
  );
}
