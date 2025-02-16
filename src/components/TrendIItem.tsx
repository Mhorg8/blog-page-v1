"use client"
import React, {useState} from 'react';
import {LuStar} from "react-icons/lu";
import TrendItemCommends from "@/app/trends/TrendItemCommends";
import TrendItemActions from "@/app/trends/TrendItemActions";


const TrendIItem = () => {

    const [showAllText, setshowAllText] = useState(false);
    const [showCommends, setShowCommends] = useState(false);
    const tempText = `
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.
    `

    const isLongText = (text: string) => {
        const textLength = text.length
        if (textLength >= 150) {
            return text.split(" ").slice(0, 25).join(" ")
        }
    }

    return (
        <>
            {/* post cart*/}
            <div className="bg-white rounded-lg shadow p-4 space-y-3">
                {/*  username and profile image*/}
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-full bg-yellow-400"/>
                        <div className="text-black">
                            <h3 className="font-semibold leading-none">Mohammad</h3>
                            <p className="text-sm ">writer</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-1 cursor-pointer">
                        <LuStar fill="gold" size={16} className="text-gold"/>
                        <LuStar fill="gold" size={16} className="text-gold"/>
                        <LuStar fill="gold" size={16} className="text-gold"/>
                        <LuStar fill="gold" size={16} className="text-gold"/>
                    </div>
                </div>

                {/*  text   */}
                <div className="flex items-center justify-between w-full">
                    <div className="w-[300px] md:max-w-[400px] md:w-full text-black/80 text-sm tracking-wide">
                        <p className="text-wrap break-words">
                            {!showAllText ? `${isLongText(tempText)}...` : tempText}
                        </p>
                    </div>
                </div>
                {/*actions*/}
                <TrendItemActions setShowAllText={setshowAllText} setShowCommends={setShowCommends} showAllText={showAllText}/>
                {/*  commends  */}
                {showCommends && <TrendItemCommends setShowCommends={setShowCommends} showCommends={showCommends}/>}
            </div>
        </>
    );
};

export default TrendIItem;