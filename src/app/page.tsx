"use client";
import Settings from "@/components/Settings";
import Timer from "@/components/Timer";
import { TimeContextProvider } from "@/context/TimeContext";
import { useState } from "react";

export default function Home() {
  const [play, setPlay] = useState(false);
  return (
    <TimeContextProvider>
      <div className="relative w-full h-screen bg-black font-[family-name:var(--font-geist-sans)]">
        <Timer play={play} setPlay={setPlay} />
        {!play && <Settings />}
      </div>
    </TimeContextProvider>
  );
}
