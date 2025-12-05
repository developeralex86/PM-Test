import React from "react";
import bgImage from "../assets/trading-banner-bg.png";
import RoundedNumber from "./ui/rounded-number";

const TradingBanner: React.FC = () => {
  return (
    <div className="pb-[129px] pt-[58px] relative">
      <div className="bg-gradient-to-r py-16 px-[73px] relative from-[#be050d] h-[371px] overflow-clip rounded-[32px] to-[#580000] mx-auto w-[1200px]">
        <div className="absolute flex h-[562.613px] items-center justify-center left-[629px] top-[-41px] w-[762.061px]">
            <div className="flex-none rotate-[8.121deg]">
              <div className="h-[468px] relative w-[703px]">
                <img alt="" className="inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={bgImage} />
              </div>
            </div>
        </div>
        <div className="relative z-1 max-w-[771px]">
            <ul className="flex flex-col lg:flex-row gap-10 mb-7">
              <li className="flex flex-row items-center gap-1.5">
                <span className="relative flex-[0_0_auto] [&_svg]:absolute [&_svg]:top [&_svg]:left w-[70px] h-[70px] inline-flex items-center justify-center">
                  <RoundedNumber />
                  <span className="relative z-1 text-2xl leading-none font-bold text-white">1</span>
                </span>
                <span className="text-[40px] font-bold tracking-[-1px] font-gilroy capitalize text-white leading-normal">Register</span>
              </li>
              <li className="flex flex-row items-center gap-1.5">
                <span className="relative flex-[0_0_auto] [&_svg]:absolute [&_svg]:top [&_svg]:left w-[70px] h-[70px] inline-flex items-center justify-center">
                  <RoundedNumber />
                  <span className="relative z-1 text-2xl leading-none font-bold text-white">2</span>
                </span>
                <span className="text-[40px] font-bold tracking-[-1px] font-gilroy capitalize text-white leading-normal">Fund</span>
              </li>
              <li className="flex flex-row items-center gap-1.5">
                <span className="relative flex-[0_0_auto] [&_svg]:absolute [&_svg]:top [&_svg]:left w-[70px] h-[70px] inline-flex items-center justify-center">
                  <RoundedNumber />
                  <span className="relative z-1 text-2xl leading-none font-bold text-white">3</span>
                </span>
                <span className="text-[40px] font-bold tracking-[-1px] font-gilroy capitalize text-white leading-normal">Start Trading</span>
              </li>
            </ul>
            <p className="font-normal leading-normal text-2xl text-white w-[600px] mb-[27px]">Ready to trade smarter? Get instant access to global markets with reliable tools and 24/5 support.</p>
            <button className="bg-white hover:bg-premier-primary hover:text-white box-border content-stretch flex gap-2.5 items-start px-12 py-4 rounded-[64px] font-bold leading-tight relative shrink-0 text-premier-primary text-2xl text-nowrap whitespace-pre">
              Get Started
            </button>
        </div>
      </div>
    </div>
  );
};

export default TradingBanner;
