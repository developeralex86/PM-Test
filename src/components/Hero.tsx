import React from "react";
import heroPhone from "../assets/hero-image.png";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[linear-gradient(102.87deg,#320002_-27.78%,#900006_2.52%)] overflow-hidden">
      <div className="rectangleGradient w-[1200px] h-[677px] right-0 left-[auto] z-[1]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-[3] lg:px-8 py-20 lg:pt-[91px] lg:pb-0 grid lg:grid-cols-2 gap-6">
        <div className="text-white max-w-[515px]">
          <h1 className="text-5xl lg:text-6xl max-w-[415px] flex flex-wrap w-full font-bold tracking-[-0.04rem] !leading-[1.12] !font-gilroy mb-5">
            Trade Forex with Premier Markets
          </h1>

          <p className="text-lg lg:text-xl max-w-[413px] text-white/90 !leading-tight !mt-0 !mb-0">
            Access global markets with advanced trading tools, competitive
            spreads, and institutional grade execution.
          </p>

          <div className="flex flex-wrap gap-9 pt-[46px]">
            <button className="!px-[34px] hover:transform-none !py-[17px] border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white bg-white text-primary font-semibold text-base leading-[15px] rounded-full hover:bg-gray-200 transition-all shadow-md">
              Start Trading
            </button>

            <button className="!px-[34px] hover:transform-none !py-[17px] border-2 border-white text-white text-base leading-[15px] rounded-full hover:bg-white hover:font-semibold hover:text-primary transition-all">
              Try Demo Account
            </button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-start">
          <img
            src={heroPhone}
            alt="Back Phone"
            className="w-[250px] lg:w-[423px] translate-x-12 mt-8"
          />
        </div>
      </div>

      <div className="absolute bottom-[-1px] left-0 right-0 z-[2] hidden">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
