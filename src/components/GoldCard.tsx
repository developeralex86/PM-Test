import React from "react";
import gold from "../assets/gold.png";
import ArrowDownLeft from "./ui/arrow-down-left";
import ArrowUpRight from "./ui/arrow-up-right";
import ExpandIcon from "./ui/expand-icon";

const GoldCard: React.FC = () => {
  return (
    <div className="flex-1 bg-[linear-gradient(262.27deg,#940006_10.82%,#220001_125.85%)] rounded-[20px] shadow-md p-[30px] flex gap-6 relative overflow-hidden">
      <div className="absolute left-[-41px] top-0 w-40 h-full opacity-20">
        <img
          src={gold}
          alt="Gold"
          className="h-[198px] w-[250px] object-cover"
        />
      </div>

      <div className="relative z-10">
        <h3 className="text-[24px] leading-[25px] font-bold text-white !font-gilroy">
          Gold
        </h3>
      </div>

      <div className="red-box relative z-10 rounded-[20px] px-[19px] py-[13px] flex items-center gap-4 cursor-pointer transition-transform">
        <div>
          <div className="text-white text-sm font-medium">Buy</div>
          <div className="text-white text-[24px] leading-[25px] font-bold flex items-center gap-2">
            3773.31
            <ArrowDownLeft className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="white-box relative z-10 bg-white rounded-[20px] px-[19px] py-[13px] flex items-center gap-4 cursor-pointer transition-transform">
        <div>
          <div className="text-primary text-sm font-medium">Sell</div>
          <div className="text-primary text-[24px] leading-[25px] font-bold flex items-center gap-2">
            3773.61
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-4 z-20">
        <ExpandIcon />
      </div>
    </div>
  );
};

export default GoldCard;
