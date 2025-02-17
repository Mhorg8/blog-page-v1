import React from 'react';
import Image from "next/image";
import {LuUserPlus, LuUsers} from "react-icons/lu";
import CustomTooltip from "@/components/CustomTooltip";
import Link from "next/link";

const SmallProfileView = () => {
    return (
        <div className=" h-full bg-white p-2 rounded-lg flex items-center justify-between shadow-sm md:hover:shadow-md ">
            <Link href={'/'} className="flex items-center gap-2 ">
                <div className="flex relative w-12 h-12 ">
                    <Image src='/banner-1.jpg' alt='' fill sizes="fill"
                           className="rounded-full object-cover object-center select-none"/>
                </div>
                <div>
                    <h3 className="text-sm font-semibold tracking-wide">Mohammd</h3>
                    <p className="flex items-center gap-1 text-xs text-darkGray">
                        200k <LuUsers/>
                    </p>
                </div>
            </Link>
            <CustomTooltip Icon={<LuUserPlus/>} contentText="Follow"/>
        </div>
    );
};

export default SmallProfileView;