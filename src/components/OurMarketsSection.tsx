import React, { useState } from "react";
import { marketChartData, marketTabs, cryptoData } from "../constants";
import TooltipIcon from "./ui/tooltip-icon";
import MarketChart from "./MarketChart";
import CryptoCard from "./CryptoCard";
import TimeframeSelector from "./TimeframeSelector";
import GoldCard from "./GoldCard";
import BuyerSellerStats from "./BuyerSellerStats";

const OurMarketsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("most-traded");
  const [activeCrypto, setActiveCrypto] = useState(0); // Track which crypto card is active

  return (
    <section className="bg-white pt-[175px] pb-[186px]">
      <div className="max-w-[1028px] mx-auto">
        <div className="text-center">
          <h2 className="tracking-[-0.04rem] leading-[70px] mx-auto mb-5 lg:text-[72px] font-bold !font-gilroy">
            Our Markets
          </h2>
          <p className="text-[#A8A6B1] text-[18px] leading-[22px] max-w-[651px] mx-auto mb-5">
            Stay informed with the data that matters, on 17,000+ markets. Get
            the latest news, trader sentiment, spreads, price action and much
            more.
          </p>
        </div>

        <div className="flex justify-center gap-5 mb-[46px] flex-wrap py-2.5">
          {marketTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`!px-[30px] py-2.5 rounded-full text-base font-normal leading-[16px] border transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-white border-red-500 shadow-md"
                  : "bg-white border-[#ED1D25] text-gray-700 hover:bg-primary hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-[30px] w-full">
          <div className="space-y-[23px] flex-[0_0_auto] w-full max-w-[286px]">
            {cryptoData.map((item, index) => (
              <CryptoCard
                key={index}
                item={item}
                isActive={index === activeCrypto}
                onClick={() => setActiveCrypto(index)}
              />
            ))}
          </div>

          <div className="max-w-[calc(100%_-_316px)] min-w-[713px]">
            <div className="flex gap-6 items-start mb-[25px] pr-[50px]">
              <GoldCard />

              <BuyerSellerStats />
            </div>

            <div className="relative flex items-start gap-[13px]">
              <MarketChart data={marketChartData} title="XAU/USD" />

              <TimeframeSelector />
            </div>

            <p className="text-xs flex items-center gap-2 text-grey mt-7">
              <TooltipIcon /> Past performance is not a reliable indicator of
              future results.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMarketsSection;
