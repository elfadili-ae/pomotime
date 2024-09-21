import Settings from "@/components/Settings";
import Timer from "@/components/Timer";
import { TimeContextProvider } from "@/context/TimeContext";

export default function Home() {
  return (
    <TimeContextProvider>
      <div className="relative w-full h-screen bg-black font-[family-name:var(--font-geist-sans)]">
        <Timer />
        <Settings />
      </div>
    </TimeContextProvider>
  );
}
