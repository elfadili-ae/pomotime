"use client";
import { ReactNode, createContext, useState } from "react";

type contextValueType = {
  times: {
    focus: number;
    breakTime: number;
  };
  setTimes: React.Dispatch<
    React.SetStateAction<{ focus: number; breakTime: number }>
  >;
};

const defaultValue: contextValueType = {
  times: {
    focus: 25,
    breakTime: 5,
  },
  setTimes: () => {},
};

export const TimeContext = createContext(defaultValue);

type TimeContextProviderType = {
  children: ReactNode;
};

export const TimeContextProvider = ({ children }: TimeContextProviderType) => {
  const [times, setTimes] = useState(defaultValue.times);
  return (
    <TimeContext.Provider value={{ times, setTimes }}>
      {children}
    </TimeContext.Provider>
  );
};
