import React from 'react';
import Image from "next/image";

const NotificationMessage = () => {
    return (
        <div className="w-[48%] flex items-start  bg-zinc-200 rounded-md px-2 py-3">
            <div className="relative w-14 h-14 rounded-full">
                <Image src='/seo.jpg' className="rounded-full" alt="" fill sizes="fill"/>
            </div>
            <div className="flex-1 ml-2">
                <div className="flex items-center justify-between w-full">
                    <p className="text-md font-medium">Mohammad</p>
                    <p className="text-xs font-medium text-darkGray">20:00PM</p>
                </div>
                <p className="text-xs line-clamp-2">Amir, Follow you at 20:00Pm.</p>
            </div>
        </div>
    );
};

export default NotificationMessage;