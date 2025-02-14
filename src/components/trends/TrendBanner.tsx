import React from 'react';
import {FaArrowRightLong} from "react-icons/fa6";
import Image from "next/image";
import TrendBannerImage from '../../../public/trendBanner2.jpg'


const TrendBanner = () => {
    return (
        <div className="w-full h-[50dvh] mt-5">
            <div className="w-full h-full relative flex items-center justify-center">
                <div
                    className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 text-white  text-center flex flex-col items-center justify-center">
                    <h1 className=" font-bold text-3xl md:text-4xl">New way for Reading
                        anything.</h1>
                    <p>You can find everything you want here.</p>
                    <button className="bg-black px-5 py-2 mt-2 hover:text-green flex items-center gap-2">
                        <span>Get start</span>
                        <FaArrowRightLong/>
                    </button>
                </div>
                <Image src={TrendBannerImage} alt="trend banner" fill sizes="fill"
                       className="rounded-xl shadow-md object-cover"/>
            </div>
        </div>
    );
};

export default TrendBanner;