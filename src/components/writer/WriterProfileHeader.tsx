"use client"
import React, {useState} from 'react';
import {LuClipboard, LuPencil, LuTwitter, LuUsers} from "react-icons/lu";
import Link from "next/link";
import {GrFacebookOption, GrInstagram, GrYoutube} from "react-icons/gr";
import Image from "next/image";
import {MdClose} from "react-icons/md";

const WriterProfileHeader = () => {
    const [showMore, setShowMore] = useState(false);
    const [scaleUpProfileImg, setScaleUpProfileImg] = useState(false);
    return (
        <div className="w-full flex items-center justify-end  bg-darkCream h-[40dvh] rounded-xl px-5 ">

            <div className="flex items-start gap-8">
                <div className="text-end">
                    <h1 className="text-2xl lg:text-3xl font-bold text-white">Nickname</h1>
                    <p className="text-white text-sm md:text-lg">Mohammad hosein alirezaie</p>

                    <div className="flex items-center gap-3 justify-end mt-2 ">
                        <div className="text-sm md:text-base text-white">
                            <p className="font-semibold">Followers</p>
                            <div className="flex items-center gap-1">
                                <span>200K</span><LuUsers/>
                            </div>
                        </div>

                        <div className="text-sm text-white">
                            <p className="font-semibold">Following</p>
                            <div className="flex items-center gap-1">
                                <span>200K</span><LuUsers/>
                            </div>
                        </div>

                        <div className="text-sm text-white">
                            <p className="font-semibold">Posts</p>
                            <div className="flex items-center gap-1">
                                <span>100</span><LuClipboard/>
                            </div>
                        </div>
                    </div>
                    <div className="text-sm text-white  space-y-1 mt-2">
                        <button className="" onClick={() => setShowMore(!showMore)}>...more</button>
                        {showMore && <div className="flex items-center justify-end gap-2 text-lg">
                            <Link className="hover:scale-125 hoverEffect" href={'/'}><GrInstagram/></Link>
                            <Link className="hover:scale-125 hoverEffect" href={'/'}><GrYoutube/></Link>
                            <Link className="hover:scale-125 hoverEffect" href={'/'}><LuTwitter/></Link>
                            <Link className="hover:scale-125 hoverEffect" href={'/'}><GrFacebookOption/></Link>
                        </div>}

                    </div>
                </div>
                <div onClick={() => setScaleUpProfileImg(true)}
                     className="w-[120px] h-[120px]  rounded-full relative border-2 border-white">
                    <Image src={'/seo.jpg'} fill sizes="fill" className="object-cover cursor-pointer p-1 rounded-full"
                           alt=""/>
                </div>
            </div>


            {scaleUpProfileImg &&
                <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 ">

                    <div className="bg-white w-[300px] h-[300px] rounded-full relative">
                        <button onClick={() => setScaleUpProfileImg(false)} className="absolute top-0 left-0">
                            <MdClose size={24} color="white"/>
                        </button>
                        <Image src='/seo.jpg' fill sizes="fill" className="object-cover rounded-full select-none"
                               alt=""/>
                    </div>
                </div>}
        </div>
    );
};

export default WriterProfileHeader;