"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import DigitalClock from "./DigitalClock";
import { TimeContext } from "@/context/TimeContext";

const Timer = () => {
  const { focus, breakTime } = useContext(TimeContext).times;
  const [play, setPlay] = useState(false);
  const circleRef = useRef(null);
  const [remainingTime, setRemainingTime] = useState(focus * 60); // Convert minutes to seconds
  const [isbreakTime, setIsBreaktime] = useState(false);

  useEffect(() => {
    if (!play) {
      setRemainingTime(focus * 60);
      return;
    }

    const circle = circleRef.current;
    const radius = 122; // Radius of the circle
    const circumference = 2 * Math.PI * radius; // Circumference

    // Set strokeDasharray and strokeDashoffset for the initial state
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    const timeInterval = setInterval(() => {
      setRemainingTime((prevTime) => {
        const newTime = prevTime - 1;

        // Calculate the new strokeDashoffset based on remaining time
        const offset = circumference * (1 - newTime / (focus * 60));
        if (circle) {
          circle.style.strokeDashoffset = offset;
        }
        // Stop the timer when remainingTime reaches 0
        if (newTime <= 0) {
          circle.style.strokeDasharray = circumference;
          circle.style.strokeDashoffset = circumference;
          if (isbreakTime) {
            setIsBreaktime(false);
            setRemainingTime(focus * 60);
          } else {
            setIsBreaktime(true);
            setRemainingTime(breakTime * 60);
          }
          // clearInterval(timeInterval);
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timeInterval); // Cleanup the interval on unmount
  }, [focus, play]);

  return (
    <div className="w-full h-full flex justify-center items-center relative">
      {play ? (
        <DigitalClock
          isBreak={isbreakTime}
          minutes={Math.floor(remainingTime / 60)}
          seconds={remainingTime % 60}
        />
      ) : (
        <svg
          onClick={() => {
            setPlay(true);
          }}
          className="animate-pulse cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          fill="white"
          height="80px"
          width="80px"
          viewBox="-20 0 210 210"
        >
          <path d="M179.07,105L30.93,210V0L179.07,105z" />
        </svg>
      )}
      <svg className="w-64 h-64">
        <circle
          ref={circleRef}
          cx="128"
          cy="128"
          r="122"
          strokeWidth="6"
          stroke={isbreakTime ? "green" : "white"}
          transform="rotate(-90 128 128)" // Starts from the top
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Timer;
