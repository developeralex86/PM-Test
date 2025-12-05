import React from "react";
import Facebook from "./ui/facebook";
import LinkedIn from "./ui/linkedIn";
import Instagram from "./ui/instagram";
import Youtube from "./ui/youtube";
import Twitter from "./ui/twitter";
import { paymentMethods } from "../constants";
import logo from "../assets/logo-white.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="h-8 w-full bg-premier-primary" />

      <div className="max-w-7xl mx-auto px-6 pt-[67px] pb-[46px] flex flex-wrap items-center justify-center gap-[60px] border-b border-white/10">
        {paymentMethods.map((item, i) => (
          <div key={i}>
            <img
              src={item.src}
              alt={item.name}
              className="h-8 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-24">
        <div className="w-full md:max-w-[425px]">
          <img src={logo} height={42} width={160} />

          <p className="text-white/60 text-base leading-normal font-normal mb-7 mt-[47px] max-w-md">
            CFDs are complex instruments and come with a high risk of losing
            money rapidly due to leverage. 21.38% of retail investor accounts
            generate profits when trading CFDs with this provider. You should
            consider whether you understand how CFDs work and whether you can
            afford to take the high risk of losing your money.
          </p>

          <div className="flex gap-4">
            {[Facebook, LinkedIn, Instagram, Youtube, Twitter].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-premier-primary cursor-pointer"
                >
                  <Icon />
                </div>
              )
            )}
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-12 lg:gap-[120px] items-start justify-center lg:pt-[92px]">
          <div>
            <h3 className="font-semibold mb-5 md:text-lg">Quick links</h3>
            <ul className="space-y-4 text-white/60 text-base">
              <li className="hover:text-premier-primary cursor-pointer">
                About Us
              </li>
              <li className="hover:text-premier-primary cursor-pointer">
                Our Markets
              </li>
              <li className="hover:text-premier-primary cursor-pointer">
                Platforms
              </li>
              <li className="hover:text-premier-primary cursor-pointer">
                Pricing
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5 md:text-lg">Support</h3>
            <ul className="space-y-4 text-white/60 text-base">
              <li className="hover:text-premier-primary cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-premier-primary cursor-pointer">
                FAQs
              </li>
              <li className="hover:text-premier-primary cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-premier-primary cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5 md:text-lg">Company</h3>
            <ul className="space-y-4 text-white/60 text-base">
              <li className="hover:text-premier-primary cursor-pointer">
                Careers
              </li>
              <li className="hover:text-premier-primary cursor-pointer">
                News & Updates
              </li>
              <li className="hover:text-premier-primary cursor-pointer">
                Partnerships
              </li>
              <li className="hover:text-premier-primary cursor-pointer">
                Legal Documents
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl border-t border-white/20 mx-auto px-6 py-12 text-white/60 text-base leading-normal">
        <div className="max-w-[1170px] w-full mx-auto space-y-6 text-center">
          <p>
            CFDs are complex instruments and come with a high risk of losing
            money rapidly due to leverage. 21.38% of retail investor accounts
            generate profits when trading CFDs with this provider. You should
            consider whether you understand how CFDs work and whether you can
            afford to take the high risk of losing your money.
          </p>

          <p>
            Premier Markets Ltd, trading as Premier Markets is a company
            incorporated under company number: A000003075 in Anguilla. Our
            registered office is located at Anguilla, The Valley, Kismet House,
            Sandy Hill, PO Box P.O.Box 174. The information on this site is not
            directed at residents of Russia, Afghanistan, Belgium, Canada,
            India, United States or any country or jurisdiction where such
            distribution or use would be contrary to local law, sanctions or
            regulation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/20 py-6 text-center text-white/60 text-base leading-normal">
        Copyright © 2025 Premier Markets - All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
