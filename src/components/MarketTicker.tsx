import React from "react";
import { marketTickerData } from "../constants";
import greenVector from "../assets/green-vector.png";
import redVector from "../assets/red-vector.png";
import curv from "../assets/curv.png";

const MarketTicker: React.FC = () => {
  return (
    <div className="relative items-center flex min-h-[182px] -mt-[57px] pt-[57px] z-[3] relative overflow-hidden">
      <img
        src={curv}
        alt="curv"
        className="w-full h-auto absolute top-0 left-0 object-contain object-top"
      />
      <div className="bg-white grid grid-cols-4 gap-[29px] z-[1] pb-[46px] relative w-full max-w-[1226px] mx-auto">
        {marketTickerData.map((m, i) => (
          <div
            key={i}
            className=" h-fit
              bg-white shadow-[0_4px_15px_rgba(0,0,0,0.08)]
              rounded-full px-6 py-[13px]
              flex items-center gap-3
              min-w-max mx-auto
            "
          >
            <img
              src={m.icon}
              alt={m.pair}
              className="w-[28px] h-[28px] object-contain"
            />

            <span className="text-base font-semibold text-gray-800">
              {m.pair}
            </span>

            <img
              src={m.isPositive ? greenVector : redVector}
              alt="trend"
              className="w-12 h-6 object-contain"
            />

            <div className="flex flex-col items-end gap-1">
              <span className="text-base font-bold text-gray-900">
                {m.price}
              </span>

              <span
                className={`text-base font-semibold ${
                  m.isPositive ? "text-green-600" : "text-[#ED1D25]"
                }`}
              >
                {m.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketTicker;
