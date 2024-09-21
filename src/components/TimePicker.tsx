"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { TimeContext } from "@/context/TimeContext";
import LeftArrow from "../icons/leftArrow.png";
import RightArrow from "../icons/rightArrow.png";

type TimePickerPropTypes = {
  title: "Focus" | "Break";
  timeType: "focus" | "breakTime";
  floor: number;
  max: number;
};

const TimePicker = ({ title, timeType, floor, max }: TimePickerPropTypes) => {
  const { times, setTimes } = useContext(TimeContext);

  const leftButton = () => {
    if (times[timeType] <= floor) {
      setTimes((prev) => ({
        ...prev,
        [timeType]: max,
      }));
    } else {
      setTimes((prev) => ({
        ...prev,
        [timeType]: prev[timeType] - 5,
      }));
    }
  };

  const rightButton = () => {
    if (times[timeType] >= max) {
      setTimes((prev) => ({
        ...prev,
        [timeType]: floor,
      }));
    } else {
      setTimes((prev) => ({
        ...prev,
        [timeType]: prev[timeType] + 5,
      }));
    }
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-white">{title}</p>
      <div className="flex gap-2">
        <Image
          onClick={() => {
            leftButton();
          }}
          className="object-contain cursor-pointer"
          width="20"
          height="20"
          src={LeftArrow}
          alt="change focus time"
        />
        <p className="bg-white font-semibold w-8 h-8 border-2 p-3 flex justify-center items-center">
          {times[timeType]}
        </p>
        <Image
          onClick={() => {
            rightButton();
          }}
          className="object-contain cursor-pointer"
          width="20"
          height="20"
          src={RightArrow}
          alt="change focus time"
        />
      </div>
    </div>
  );
};

export default TimePicker;
