"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { RiDislikeLine, RiHeartLine, RiSave2Line } from "react-icons/ri";

const CommendSlider = () => {
  return (
    <div className="container mt-10  rounded-md shadow-md border border-black">
      <Swiper
        className="px-2 w-full space-x-3"
        spaceBetween={50}
        breakpoints={{
          320: { slidesPerView: 1 }, // Mobile
          640: { slidesPerView: 2 }, // Small screens
          1024: { slidesPerView: 3 }, // Medium screens
          1280: { slidesPerView: 4 }, // Large screens
        }}
      >
        <SwiperSlide>
          <div className="w-full bg-white">
            {/* top card */}
            <div className="flex items-center justify-between w-full">
              <div>imageContainer</div>
              <p className="font-medium text-darkGray">Writer</p>
            </div>
            {/* bottom card */}
            <div className="space-y-4">
              <p className="line-clamp-2 text-sm text-darkGray">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloremque eos inventore aut!
              </p>
              <div className="flex items-center gap-3 text-xl">
                <RiHeartLine />
                <RiDislikeLine />
                <RiSave2Line />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full bg-white">
            {/* top card */}
            <div className="flex items-center justify-between w-full">
              <div>imageContainer</div>
              <p className="font-medium text-darkGray">Writer</p>
            </div>
            {/* bottom card */}
            <div className="space-y-4">
              <p className="line-clamp-2 text-sm text-darkGray">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloremque eos inventore aut!
              </p>
              <div className="flex items-center gap-3 text-xl">
                <RiHeartLine />
                <RiDislikeLine />
                <RiSave2Line />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full bg-white">
            {/* top card */}
            <div className="flex items-center justify-between w-full">
              <div>imageContainer</div>
              <p className="font-medium text-darkGray">Writer</p>
            </div>
            {/* bottom card */}
            <div className="space-y-4">
              <p className="line-clamp-2 text-sm text-darkGray">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloremque eos inventore aut!
              </p>
              <div className="flex items-center gap-3 text-xl">
                <RiHeartLine />
                <RiDislikeLine />
                <RiSave2Line />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CommendSlider;
