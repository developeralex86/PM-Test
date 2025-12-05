import React from "react";
import type { Testimonial } from "../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  variant?: "desktop" | "mobile";
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  className = "",
  variant = "desktop",
}) => {
  const baseClasses = `${testimonial.bgColor} rounded-2xl transition-shadow`;

  const desktopClasses =
    "px-[30px] py-[30px] hover:shadow-xl border border-[#FFC4C6]";
  const mobileClasses = "p-6 shadow-lg mb-12";

  const textClasses =
    variant === "desktop"
      ? "text-black pb-4 mb-4 border-b border-[#FFC4C6] text-base leading-[19px] tracking-[-0.2px]"
      : "text-gray-700 mb-6 leading-relaxed";

  return (
    <div
      className={`${baseClasses} ${
        variant === "desktop" ? desktopClasses : mobileClasses
      } ${className}`}
    >
      <p className={textClasses}>{testimonial.text}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[32px] h-[32px] bg-[#1E1E1E] text-white rounded-full flex text-sm items-center justify-center font-bold">
            {testimonial.initials}
          </div>
          <span className="font-semibold">{testimonial.name}</span>
        </div>
        <div className="text-xl">{testimonial.icon}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
