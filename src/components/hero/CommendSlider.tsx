"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CommendView from "@/components/hero/CommendView";

const CommendSlider = () => {
  return (
    <div className="container mt-10  rounded-md  ">
      <h2 className="text-2xl md:text-4xl font-bold">Trendy Commends</h2>
      <Swiper
        className="px-2 w-full space-x-3 mt-10"
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 }, // Mobile
          640: { slidesPerView: 2 }, // Small screens
          1024: { slidesPerView: 4 }, // Medium screens
          1280: { slidesPerView: 4 }, // Large screens
        }}
      >
        <SwiperSlide>
          <CommendView />
        </SwiperSlide>
        <SwiperSlide>
          <CommendView />
        </SwiperSlide>
        <SwiperSlide>
          <CommendView />
        </SwiperSlide>
        <SwiperSlide>
          <CommendView />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CommendSlider;
