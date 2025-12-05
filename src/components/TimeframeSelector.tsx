import React from "react";
import { timeframes } from "../constants";

const TimeframeSelector: React.FC = () => {
  return (
    <div className="flex flex-col gap-1.5 z-20">
      {timeframes.map((t) => (
        <button
          key={t}
          className="bg-black text-white w-[37px] h-[37px] text-sm hover:bg-primary hover:text-white flex items-center justify-center !font-gilroy font-bold rounded-[12px] hover:bg-premier-primary transition"
        >
          {t}
        </button>
      ))}
    </div>
  );
};

export default TimeframeSelector;
