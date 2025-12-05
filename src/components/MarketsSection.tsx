import React from "react";
import ArrowUp from "./ui/arrow-up";
import { marketFeatures, marketCards } from "../constants";
import bgImage from "../assets/markets-bg.png";

const MarketsSection: React.FC = () => {
  return (
    <section
      className="bg-gradient-to-b from-dark to-dark-lighter text-white pt-[60px] pb-[95px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[42px] max-w-[655px] mx-auto lg:text-[62px] font-bold !font-gilroy leading-[1.25] mb-5">
            Access <span className="text-primary">17,000+ </span>
            markets all in one
          </h2>
          <p className="text-lg text-gray-300 max-w-[664px] mx-auto mb-10 leading-snug !font-sans">
            Trade forex, shares, indices, and commodities with competitive
            spreads, deep liquidity, and seamless execution.
          </p>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-[41px] mb-[62px]">
            {marketFeatures.map((feature, index) => (
              <div key={index} className="icon-button max-h-[56px]">
                <div className="icon-button-inner flex items-center gap-[10px] px-[30px] py-[15px] h-[54px]">
                  <span className="text-white text-xl">{feature.icon}</span>
                  <span className="font-medium text-white leading-none">
                    {feature.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[26px]">
          {marketCards.map((card, index) => (
            <div
              key={index}
              className="market-card bg-white text-gray-900 rounded-[40px] py-[23px] px-[37px] hover:-translate-y-[23px] group"
            >
              <div className="mb-[18px]">{card.icon}</div>
              <h3 className="text-[26px] font-bold pb-1 border-b border-dark-darker leading-tight mb-[20px]">
                {card.title}
              </h3>
              <p className="text-dark text-sm mb-[14px] leading-tight">
                {card.description}
              </p>
              <div className="w-10 h-10 rounded-full bg-dark-darkest/15 group-hover:bg-primary flex items-center cursor-pointer justify-center transition-colors duration-300">
                <ArrowUp className="text-white group-hover:text-white transition-colors duration-300 " />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketsSection;
