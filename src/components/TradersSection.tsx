import React from "react";
import traderStatue from "../assets/trust-us-bg.png";
import coins from "../assets/trust-us-coins.png";

const TradersSection: React.FC = () => {
  return (
    <section className="bg-white pt-[90px] pb-[105px]">
      <div className=" max-w-full lg:max-w-[1164px] mx-auto max-lg:px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:max-w-[515px]">
            <h2 className="text-[42px] max-w-[455px] tracking-[-0.04rem] leading-[70px] mx-auto lg:text-[72px] font-bold !font-gilroy">
              Join <span className="text-primary">50,000+ </span>
              traders who trust us
            </h2>
          </div>
          <div className="lg:max-w-[515px]">
            <p className="text-lg text-gray-600 mb-[37px] leading-tight">
              Experience advanced trading tools, transparent and competitive
              pricing, lightning-fast execution, and dedicated support trusted
              by traders worldwide.
            </p>
            <div className="flex flex-wrap gap-[37px]">
              <button className="!px-[34px] hover:transform-none !py-[17px] !bg-primary border-2 border-primary text-white font-semibold text-base leading-[15px] rounded-full hover:!bg-white hover:!text-primary transition-all">
                Start Trading
              </button>
              <button className="!px-[34px] hover:transform-none !py-[17px] border-2 border-primary !text-[#151515] text-base font-semibold leading-[15px] rounded-full hover:!bg-primary hover:!text-white transition-all">
                Try Demo Account
              </button>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-primary via-primary-dark to-primary rounded-3xl overflow-hidden shadow-2xl hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="p-12 lg:p-16">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Everything you need to
                <br />
                trade the markets
              </h3>
              <button className="bg-dark hover:bg-dark-lighter text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl">
                Explore Accounts
              </button>
            </div>
            <div className="relative h-full min-h-[300px]">
              <img src={coins} />
              <img
                src={traderStatue}
                alt="Trader Success"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradersSection;
