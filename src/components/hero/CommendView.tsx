import React from 'react';
import {RiDislikeLine, RiHeartLine, RiSave2Line} from "react-icons/ri";
import Link from "next/link";

const CommendView = () => {
    return (
        <div className="w-full space-y-4 bg-white p-2 border border-gray-300 rounded-xl p-3">
            {/* top card */}
            <div className="flex items-center justify-between w-full">
                <div className="w-9 h-9 rounded-full bg-red shadow-md hover:scale-110 cursor-pointer hoverEffect"></div>
                <p className="font-medium text-darkGray text-sm">Writer</p>
            </div>
            {/* bottom card */}
            <div className="space-y-3">
                <p className="line-clamp-2 text-sm text-darkGray">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloremque eos inventore aut!
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xl">
                        <button className="icon-button ">
                            <RiHeartLine className="text-xl  text-red fill-red"/>
                        </button>
                        <button className="icon-button">
                            <RiDislikeLine className="text-xl text-yellow-400"/>
                        </button>
                        <button className="icon-button">
                            <RiSave2Line className="text-xl text-green"/>
                        </button>
                    </div>

                    <Link className="text-xs hover:underline hover:scale-105 hoverEffect" href={'/'}>Show more</Link>
                </div>
            </div>
        </div>
    );
};

export default CommendView;