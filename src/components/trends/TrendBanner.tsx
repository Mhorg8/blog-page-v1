import React from 'react';
import {FaArrowRightLong} from "react-icons/fa6";
import Image from "next/image";


interface Props {
    ImageSrc: string
    title: string;
    subtitle: string;
}

const TrendBanner = ({ImageSrc, title, subtitle}: Props) => {
    return (
        <div className="w-full h-[50dvh] mt-5">
            <div className="w-full h-full relative flex items-center justify-center">
                <div
                    className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 text-white  text-center flex flex-col items-center justify-center">
                    <h1 className=" font-bold text-3xl md:text-4xl">{title}</h1>
                    <p>{subtitle}</p>
                    <button className="bg-black px-5 py-2 mt-2 hover:text-green flex items-center gap-2">
                        <span>Get start</span>
                        <FaArrowRightLong/>
                    </button>
                </div>
                <Image src={ImageSrc} alt="trend banner" fill sizes="fill"
                       className="rounded-xl shadow-md object-cover"/>
            </div>
        </div>
    );
};

export default TrendBanner;