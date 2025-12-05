import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";
import flag from "../assets/uae.png";
import NavDropdownButton from "./NavDropdownButton";
import ArrowRightLong from "./ui/arrow-right-long";
import RegisterIcon from "./ui/register-icon";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-[9999]">
      <div className="border-b border-gray-100 w-full">
        <div className="max-w-[1300px] w-full mx-auto">
          <div className="flex items-center justify-between py-[5px] text-sm ">
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="tab-link text-black font-semibold text-sm leading-[19.98px] tracking-[-0.2px] align-middle hover:text-primary transition-colors"
              >
                Personal
              </a>
              <span className="text-[#d6d6d6] text-sm font-semibold">|</span>
              <a
                href="#"
                className="tab-link text-black font-semibold text-sm leading-[19.98px] tracking-[-0.2px] align-middle hover:text-primary transition-colors"
              >
                Institutional
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="tab-link text-black font-semibold text-sm leading-[19.98px] tracking-[-0.2px] align-middle hover:text-primary transition-colors"
              >
                WebTrader
              </a>
              <span className="text-[#d6d6d6] text-sm font-semibold">|</span>
              <a
                href="#"
                className="tab-link text-black font-semibold text-sm leading-[19.98px] tracking-[-0.2px] align-middle hover:text-primary transition-colors"
              >
                Support
              </a>
              <span className="text-[#d6d6d6] text-sm font-semibold">|</span>
              <a
                href="#"
                className="tab-link text-black font-semibold text-sm leading-[19.98px] tracking-[-0.2px] align-middle hover:text-primary transition-colors"
              >
                Open Demo
              </a>
              <span className="text-[#d6d6d6] text-sm font-semibold">|</span>
              <div className="flex items-center gap-2">
                <img src={flag} alt="UAE Flag" className="w-[30px] h-[30px]" />
                <span className="text-black font-semibold">
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1300px] w-full mx-auto">
        <div className="flex items-center justify-between w-full py-4">
          <div className="flex items-center gap-8 w-full justify-between">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="Premier Markets"
                className="h-[45px] w-auto"
              />
            </a>

            <nav className="hidden lg:flex items-center gap-[33px]">
              <NavDropdownButton label="Trading" />
              <NavDropdownButton label="Discover" />
              <NavDropdownButton label="Promotions" />
              <NavDropdownButton label="Company" />
              <a
                href="#"
                className="flex items-center gap-2 font-semibold text-base leading-[100%] tracking-[0px] text-primary hover:text-primary-dark transition-colors font-medium"
              >
                Partner with us
                <ArrowRightLong />
              </a>
            </nav>

            <div className="flex items-center gap-4 h-[39px] w-fit">
              <div className="flex items-center gap-6">
                <button className="hidden lg:block btn-primary hover:transform-none !px-5 !py-2.5 shadow-[0px_4px_4px_0px_#00000040]">
                  Register
                </button>
                <div>
                  <RegisterIcon />
                </div>
              </div>

              <button
                className="lg:hidden text-2xl text-black"
                font-semibold
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-4">
          <nav className="flex flex-col gap-4 px-4">
            <a
              href="#"
              className="text-black font-semibold hover:text-primary transition-colors"
            >
              Trading
            </a>
            <a
              href="#"
              className="text-black font-semibold hover:text-primary transition-colors"
            >
              Discover
            </a>
            <a
              href="#"
              className="text-black font-semibold hover:text-primary transition-colors"
            >
              Promotions
            </a>
            <a
              href="#"
              className="text-black font-semibold hover:text-primary transition-colors"
            >
              Company
            </a>
            <a
              href="#"
              className="text-primary hover:text-primary-dark transition-colors font-medium"
            >
              Partner with us
            </a>
            <button className="btn-primary w-full mt-4">Register</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
