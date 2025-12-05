import React from "react";
import traderImage from "../assets/trader-statue01.png";
import coinsImage from "../assets/vector-coin.png";

const CTASection: React.FC = () => {
  return (
    <section className="">
      <div className="max-w-[1200px] mx-auto">
        <div className="cta-banner relative rounded-[30px] h-[259px] flex items-center justify-end">
          <div
            className="absolute z-10 w-fit h-[339px]"
            style={{
              left: "242px",
              bottom: "40px",
              zIndex: 30,
            }}
          >
            <img
              src={traderImage}
              alt="Trader"
              className="min-w-[255px] min-h-[339px] object-contain object-center"
            />
          </div>

          <div
            className="!absolute z-20"
            style={{
              width: "auto",
              height: "259px",
              zIndex: 20,
              left: "128px",
            }}
          >
            <img
              src={coinsImage}
              alt="Currency Coins"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative !z-[30] ml-auto w-full lg:w-[45%] px-6 lg:px-12 py-8 lg:py-[46px]">
            <h2 className="text-white font-gilroy font-bold text-[28px] lg:text-[36px] leading-tight tracking-[-0.03em] mb-5">
              Everything you need to trade the markets
            </h2>

            <button className="hover:transform-none explore-btn px-6 lg:px-8 py-3 lg:py-4 rounded-full text-white font-semibold text-sm lg:text-base transition-all hover:scale-105">
              Explore Accounts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
