import React from "react";
import ChevronDown from "./ui/chevron-down";

interface NavDropdownButtonProps {
  label: string;
}

const NavDropdownButton: React.FC<NavDropdownButtonProps> = ({ label }) => {
  return (
    <div className="relative group">
      <button className="flex items-center gap-2 group">
        <div className="font-normal text-base leading-[100%] tracking-[0px] text-[#010205] hover:text-primary transition-colors">
          {label}
        </div>
        <ChevronDown className="group-hover:rotate-180 transition-transform duration-300 group-hover:text-primary text-[#A4A4A4]" />
      </button>
    </div>
  );
};

export default NavDropdownButton;
