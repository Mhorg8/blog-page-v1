import React from 'react';
import {AiOutlineLoading3Quarters} from "react-icons/ai";

const Loading = () => {

    return (
        <div className="w-full  h-[calc(100dvh-50px)] bg-zinc-200 relative">
            <div className="container flex flex-col items-center justify-center w-full h-full gap-7">
                <h1 className="text-4xl md:text-5xl font-semibold md:font-bold text-center">
                    We&apos;re working on it.<br/>
                    Please wait.
                </h1>

                <div className="">
                    <AiOutlineLoading3Quarters className="animate-spin" size={32}/>
                </div>
            </div>
        </div>
    );
};

export default Loading;