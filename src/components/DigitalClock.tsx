import React from "react";

type DigitalClockTypes = {
  minutes: number;
  seconds: number;
  isBreak: boolean;
  pause: React.Dispatch<React.SetStateAction<boolean>>;
};

const DigitalClock = ({
  minutes,
  seconds,
  isBreak,
  pause,
}: DigitalClockTypes) => {
  return (
    <div
      className={`text-center text-5xl group ${
        isBreak ? "text-green-500" : "text-white"
      } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono`}
      style={{ width: "8ch" }}
    >
      <p className="group-hover:hidden">
        {minutes.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        :
        {seconds.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </p>

      <div
        className="w-full h-full justify-center items-center hidden group-hover:flex"
        onClick={() => pause(false)}
      >
        <svg className="fill-white w-24 h-24" viewBox="0 0 512 512">
          <g>
            <g>
              <polygon
                points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 
              512,452.922 315.076,256 		"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default DigitalClock;
