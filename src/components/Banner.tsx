import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="bg-zinc-200 mt-20">
      <div className="container flex flex-col items-center justify-center gap-2  h-[20dvh]">
        <h3 className="text-2xl tracking-wide font-extrabold uppercase">
          Join our newsletter to get fresh blogs
        </h3>
        <button
          className="text-base bg-black text-white px-8 py-2 border-none
         hover:text-green hoverEffect flex items-center gap-2"
        >
          JOIN NOW <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Banner;
