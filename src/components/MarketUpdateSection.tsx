import React from "react";
import { FiArrowRight } from "react-icons/fi";
import news from "../assets/news.png";
import videoBg from "../assets/media-bg.png";
import bgImage from "../assets/bkp-bg.png";

const MarketUpdatesSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
          <div>
            <p className="text-primary font-semibold mb-2">Daily Updates</p>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Everything you need to trade the markets
            </h2>
          </div>

          <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View all <FiArrowRight />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-10">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <img src={news} />

            <div className="p-6 flex flex-col h-full">
              <p className="text-xs text-gray-400 mb-2">03 October 2025</p>

              <h3 className="font-bold text-lg mb-3 leading-snug">
                Gulf markets end mixed on Ukraine ceasefire hopes, tariff fears
              </h3>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Stock markets in the Gulf ended mixed on Wednesday, buoyed by
                Ukraine's readiness to support a proposal for...
              </p>

              <button className="mt-auto text-primary font-semibold text-sm">
                Read more
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-xl">
            <img src={videoBg} className="h-full w-full" />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition">
                <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[16px] border-t-transparent border-b-transparent border-l-white ml-1" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img src={bgImage} />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

          <div className="relative z-10 p-8 lg:p-12 max-w-2xl">
            <h3 className="text-white text-2xl font-bold mb-4">
              Premier Market – Market Cap Weighted PR (BKP)
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Stay ahead of the latest tech trends with our algorithmically
              selected portfolio of the 15 top tech stocks each month.
            </p>

            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>Google</span>
              <span>Trending</span>
              <span>investing.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketUpdatesSection;
