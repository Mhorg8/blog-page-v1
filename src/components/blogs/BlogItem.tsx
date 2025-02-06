import Image from "next/image";
import React from "react";
import { FaRegHeart, FaRegBookmark, FaEye } from "react-icons/fa";

const BlogItem = () => {
  return (
    <div className="h-[350px] w-[350px] rounded-xl overflow-hidden p-2 shadow-md bg-zinc-200">
      {/* image container */}
      <div className="w-full h-2/3 relative">
        <Image
          src="/banner-2.jpg"
          className="object-contain rounded-lg hover:scale-110 hoverEffect cursor-pointer"
          alt="Banner"
          fill
          sizes="fill"
        />
      </div>
      {/* text container */}
      <div className="mt-3 flex flex-col gap-3">
        <div className="">
          <h3 className="text-lg leading-none font-medium">
            How we can use React to create single page applications{" "}
          </h3>
          <p className="text-sm text-neutral-600 font-medium">By John Doe</p>
        </div>

        <div className="flex items-center justify-between ">
          {/* action container */}
          <div className="flex items-center gap-3">
            <button className="hover:scale-125 text-red  hoverEffect ">
              <FaRegHeart size={18} />
            </button>

            <button className="hover:scale-125  text-green  hoverEffect ">
              <FaRegBookmark size={18} />
            </button>
          </div>
          {/* view count */}
          <p className="text-sm text-neutral-600 flex items-center gap-1">
            <FaEye size={18} />
            100
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
