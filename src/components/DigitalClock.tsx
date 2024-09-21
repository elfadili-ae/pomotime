import React from "react";

type DigitalClockTypes = {
  minutes: number;
  seconds: number;
  isBreak: boolean;
};

const DigitalClock = ({ minutes, seconds, isBreak }: DigitalClockTypes) => {
  return (
    <div
      className={`text-center text-5xl ${
        isBreak ? "text-green-500" : "text-white"
      } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono`}
      style={{ width: "8ch" }}
    >
      <p>
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
    </div>
  );
};

export default DigitalClock;
