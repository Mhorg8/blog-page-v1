import React from 'react';
import Image from "next/image";
import {LuStar} from "react-icons/lu";
import Link from "next/link";
import {FaLongArrowAltRight} from "react-icons/fa";

const BestWriter = () => {
    return (
        <div
            className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3 h-[320px] md:h-[300px] bg-zinc-200 rounded-xl shadow-md p-2 relative cursor-pointer group">
            {/* User profile image */}
            <Image src='/banner-1.jpg' fill sizes="fill" alt="user immage"
                   className="object-cover rounded-xl"/>

            {/* User info  */}
            <div
                className="absolute p-3 text-white inset-0 bg-black/60 rounded-xl  justify-between hidden group-hover:flex  items-start flex-col hoverEffect">
                <div>
                    <h3 className="font-bold tracking-wide">Mohammad hosein</h3>

                    <ul className="list-decimal p-3 text-sm">
                        <li className="mt-2">200 blog posts in the past month</li>
                        <li>Toke most of likes in last month</li>
                    </ul>
                    <div className="flex items-center gap-1 text-gold mt-2">
                        <LuStar size={16} fill="gold"/>
                        <LuStar size={16} fill="gold"/>
                        <LuStar size={16} fill="gold"/>
                        <LuStar size={16} fill="gold"/>
                        <LuStar size={16} fill="gold"/>
                    </div>
                </div>

                <Link href='/'
                      className="text-sm underline  hover:scale-110 flex items-center gap-1 hoverEffect">Show
                    more <FaLongArrowAltRight size={18}/></Link>

            </div>
        </div>
    );
};

export default BestWriter;