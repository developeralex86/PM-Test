import React from "react";
import mobile from "../assets/phone-hand.png";
import { withdrawalFeatures } from "../constants";

const WithdrawalsSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-primary font-semibold mb-2">
            Access your funds anytime, anywhere
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-12">
            Seamless Withdrawals
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {withdrawalFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12  rounded-2xl flex items-center justify-center  shadow-lg shadow-primary/40">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex justify-center">
            <div className="relative max-w-xl w-full">
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[130%] h-[130%] rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 blur-3xl opacity-50 pointer-events-none" />

              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/30 via-transparent to-red-500/20 blur-2xl pointer-events-none" />

              <img
                src={mobile}
                alt="Mobile trading analytics"
                className="relative z-10 w-full max-w-sm mx-auto drop-shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              />

              <div className="hidden md:flex items-center gap-3 bg-white rounded-2xl shadow-lg px-5 py-3 absolute right-6 top-1/3 z-20">
                <div className="flex items-center gap-1">
                  <span className="w-5 h-5 rounded-full bg-premier-primary" />
                  <span className="w-5 h-5 rounded-full bg-orange-400 -ml-2" />
                </div>
                <span className="text-sm font-semibold text-gray-800">
                  Mastercard
                </span>
              </div>

              <div className="bg-white rounded-3xl shadow-xl px-6 py-4 flex items-center gap-4 absolute left-3 md:left-8 bottom-0 md:-bottom-6 z-20">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">Premier Markets</p>
                  <p className="text-sm font-semibold text-gray-900">
                    John Smith
                  </p>
                  <p className="text-xs">
                    <span className="text-red-500 font-semibold">
                      100% withdrawal
                    </span>{" "}
                    completed
                  </p>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-red-500 via-orange-400 to-green-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WithdrawalsSection;
