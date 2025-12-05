import React from "react";
import BitCoin from "./ui/bit-coin";
import type { CryptoCardProps } from "../types";

const CryptoCard: React.FC<CryptoCardProps> = ({ item, isActive, onClick }) => {
  return (
    <div
      className={`crypto-card group ${isActive ? "active" : ""} cursor-pointer`}
      onClick={onClick}
    >
      <div className="crypto-card-inner group flex items-center justify-between transition-all">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full transition-all flex items-center justify-center`}
          >
            <BitCoin />
          </div>
          <div className="transition-all">
            <div className="font-medium text-lg transition-all mb-1 leading-none">
              {item.name}
            </div>
            <div
              className={`text-sm font-normal leading-snug group-hover:text-white transition-all ${
                isActive ? "text-white" : "text-gray-500"
              }`}
            >
              {item.fullName}
            </div>
          </div>
        </div>

        <div className="text-right flex items-center gap-2 transition-all">
          <div className="font-semibold text-base">{item.price}</div>
          <div
            className={`font-semibold text-base group-hover:text-white transition-all ${
              isActive ? "text-white" : "text-green-600"
            }`}
          >
            {item.change}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
