import React from "react";
import graph from "../assets/graph.png";
import balance from "../assets/balance.png";
import clock from "../assets/clock.png";
import Dollarbell from "../assets/dollar-bell.png";

const EmpowerSection: React.FC = () => {
  const features = [
    {
      icon: <img src={graph} />,
      title: "Charting tools and indicators",
      description:
        "Sophisticated charts plus over 100+ technical indicators and 50+ drawing tools.",
    },
    {
      icon: <img src={balance} />,
      title: "Get flexible leverage",
      description:
        "Trade larger positions with leverage. Margin requirements vary based on your account.",
    },
    {
      icon: <img src={clock} />,
      title: "Round-the-clock support",
      description:
        "Our dedicated team is available 24/5 to guide you every step of the way.",
    },
    {
      icon: <img src={Dollarbell} />,
      title: "Customizable price alerts",
      description:
        "Set real-time alerts to quick client movements and stay ahead of your strategy.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-dark to-dark-lighter text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Empower Your Trading
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Unlock advanced tools designed to enhance your trading journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6 group-hover:bg-primary/30 transition-colors">
                <div className="text-primary">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpowerSection;
