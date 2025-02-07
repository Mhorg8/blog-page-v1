"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegHeart, FaRegBookmark } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogItem = () => {
  return (
    <div className="w-full max-w-4xl max-h-[200px] h-fit  flex items-start justify-between gap-4  md:gap-5 lg:gap-7 border-b-4 border-black py-2 md:py-0">
      {/* image container */}
      <Link href={`/blog/${231231}`} className="w-[170px] h-[170px] relative">
        <Image
          src="/banner-1.jpg"
          fill
          alt="blog image"
          className="object-cover rounded-md"
        />
      </Link>

      {/* text container */}
      <div className="flex flex-col justify-start flex-1">
        <div>
          <h2 className="text-xl line-clamp-2 md:text-2xl lg:text-3xl font-semibold">
            How we can create E-commerce shop with react in 2025
          </h2>
          <p className="text-sm line-clamp-2 text-neutral-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe et
            minus sint omnis, distinctio voluptatem cumque minima velit est
            exercitationem modi pariatur voluptates eveniet sapiente.
          </p>
          <div className="text-sm mt-1 font-medium text-neutral-700">
            By{" "}
            <span className="text-black font-semibold">
              &quot;Mohammad hosein&quot;
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            className="text-sm md:text-lg font-semibold group flex items-center gap-1  cursor-pointer"
          >
            <Link href={`blog/${2312312}`} className="">
              Read More
            </Link>
            <FaArrowRightLong className="" />
          </motion.div>

          <div className="flex items-center gap-2">
            <ActionButton>
              <FaRegHeart size={18} />
            </ActionButton>
            <ActionButton>
              <FaRegBookmark size={18} />
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;

const ActionButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileTap={{ scale: [1.5, 1, 1.2] }}
      transition={{ duration: 1.2 }}
      className="bg-transparent"
    >
      {children}
    </motion.button>
  );
};
