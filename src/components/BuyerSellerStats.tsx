import React from "react";
import ChevronRight from "./ui/chevron-right";

const BuyerSellerStats: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col px-[22px] py-[12px] gap-[9px] bg-[#F9F9F9] rounded-[20px]  p-4 min-w-[187px]">
        <div className="flex gap-2 justify-between items-center">
          <div className="flex items-center gap-1 items-center w-[66px] justify-between">
            <div className="text-black text-[10px] font-semibold !font-gilroy min-w-[31px]">
              Buyers
            </div>
            <div className="text-[10px] text-black leading-tight rounded px-1 py-[1px] bg-[#EDEEF2] font-bold !font-gilroy">
              66.93%
            </div>
          </div>
          <div className="text-green-600 text-[10px] !font-gilroy">
            Low: 3686.38
          </div>
        </div>
        <div className="flex gap-2 justify-between items-center">
          <div className="flex items-center gap-1 items-center w-[66px] justify-between">
            <div className="text-black text-[10px] font-semibold !font-gilroy min-w-[31px]">
              Seller
            </div>
            <div className="text-[10px] text-black rounded leading-tight px-1 py-[1px] bg-[#EDEEF2] font-bold !font-gilroy">
              66.93%
            </div>
          </div>
          <div className="text-gray-500 text-primary text-[10px] !font-gilroy">
            High: 3788.96
          </div>
        </div>
      </div>
      <button className="text-black font-semibold flex items-center gap-2  transition-all mx-auto group">
        <span>Browse all markets</span>
        <ChevronRight className="group-hover:translate-x-1 transition-transform text-primary" />
      </button>
    </div>
  );
};

export default BuyerSellerStats;
