"use client";
import React from "react";
import TimePicker from "./TimePicker";

const Settings = () => {
  return (
    <div className="text-black absolute bottom-2 w-full h-16 flex  justify-around items-center">
      {/* <div className="flex justify-center items-center flex-col">
        <p className="text-white">Focus</p>
        <div className="flex gap-2">
          <Image
            className="object-contain"
            width="20"
            height="20"
            src={LeftArrow}
            alt="change focus time"
          />
          <p className="bg-white font-semibold w-8 h-8 border-2 p-3 flex justify-center items-center">
            {times.focus}
          </p>
          <Image
            className="object-contain"
            width="20"
            height="20"
            src={RightArrow}
            alt="change focus time"
          />
        </div>
      </div> */}
      <TimePicker title="Focus" timeType="focus" floor={15} max={50} />
      <TimePicker title="Break" timeType="breakTime" floor={5} max={15} />
    </div>
  );
};

export default Settings;
