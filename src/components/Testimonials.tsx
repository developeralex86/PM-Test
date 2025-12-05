import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { testimonials } from "../constants";
import TestimonialCard from "./TestimonialCard";
import TestimonialsBg from "./ui/testimonials-bg";

import "swiper/swiper-bundle.css";

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-10 relative">
      <div className="absolute top-0 left-0">
        <TestimonialsBg />
      </div>
      <div className="max-w-[1224px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-[48px] max-w-[494px] mx-auto !font-gilroy font-bold mb-2 leading-none tracking-[-0.02em]">
            What <span className="text-primary">Premier</span> Traders are
            saying about us
          </h2>
          <p className="text-base text-[#A8A6B1] max-w-[502px] mx-auto leading-[20px]">
            Join a growing community of professionals who rely on our platform
            to trade smarter every day.
          </p>
        </div>

        <div className="hidden md:block">
          <div
            className="masonry-grid"
            style={{ columnCount: 3, columnGap: "30px" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="masonry-item mb-[30px]"
                style={{
                  breakInside: "avoid",
                  display: "inline-block",
                  width: "100%",
                }}
              >
                <TestimonialCard testimonial={testimonial} variant="desktop" />
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} variant="mobile" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
