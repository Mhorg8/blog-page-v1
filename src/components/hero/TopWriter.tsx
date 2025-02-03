"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WriterCard from "./writerCard";

const TopWriter = () => {
  return (
    <>
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5">
        <WriterCard />
        <WriterCard />
        <WriterCard />
        <WriterCard />
      </div>

      <div className="mt-10 block md:hidden">
        <Swiper
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile
            640: { slidesPerView: 2 }, // Small screens
            1024: { slidesPerView: 3 }, // Medium screens
            1280: { slidesPerView: 4 }, // Large screens
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <WriterCard />
          </SwiperSlide>
          <SwiperSlide>
            <WriterCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default TopWriter;
