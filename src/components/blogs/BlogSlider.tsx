"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BlogItem from "./BlogItem";

const BlogSlider = () => {
  return (
    <div className="mt-10">
      <Swiper
        spaceBetween={10}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <BlogItem />
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem />
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem />
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BlogSlider;
