"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BlogItem from "./BlogItem";

const BlogSlider = () => {
  return (
    <div className="mt-10 ">
      <Swiper className="" spaceBetween={30} slidesPerView={1}>
        <SwiperSlide className="border-b-4 border-b-black pb-4 last:border-b-0">
          <BlogItem />
        </SwiperSlide>
        {/* <SwiperSlide>
          <BlogItem />
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem />
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default BlogSlider;
