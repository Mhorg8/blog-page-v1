import SingleBlogContent from "@/components/blog/SingleBlogContent";
import Image from "next/image";
import React from "react";

const blogPage = () => {
  return (
    <div className="container min-h-[100dvh] bg-zinc-100 flex flex-col items-center justify-start py-4">
      <div className="relative w-[80%] h-[50dvh] ">
        <Image
          src="/banner-1.jpg"
          fill
          className="object-cover"
          alt=""
          sizes="fill"
        />
      </div>

      {/* Text contents */}
      <SingleBlogContent />
    </div>
  );
};

export default blogPage;
