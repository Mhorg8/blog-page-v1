"use client";
import { LuHeartOff } from "react-icons/lu";

const LikesModal = () => {
  return (
    <div className="w-[300px] h-fit bg-zinc-200 py-2  absolute top-full mt-3 right-5 z-50 rounded-md shadow-lightCream shadow-sm">
      <div className="">
        <div
          className="hover:bg-brown hover:bg-opacity-45 hoverEffect cursor-pointer px-2 py-3 text-opacity-80
        border-b border-zinc-500"
        >
          <h3 className="line-clamp-1 tracking-tight font-semibold leading-none select-none text-neutral-900 ">
            How we can create React app in 2025, Complete Tutorial
          </h3>
          <div className="flex items-center justify-between mt-1  ">
            <p className="text-sm text-neutral-700 ">
              By{" "}
              <span className="text-black font-medium">
                &quot;Mohammad&quot;
              </span>
            </p>
            <LuHeartOff
              cursor="pointer"
              className="mr-3 hover:text-red hover:scale-105 hoverEffect"
            />
          </div>
        </div>
        <div className="hover:bg-brown  hover:bg-opacity-45 hoverEffect cursor-pointer px-2 py-3 ">
          <h3 className="line-clamp-1 tracking-tight font-semibold leading-none select-none text-neutral-900">
            How we can create React app in 2025, Complete Tutorial
          </h3>
          <div className="flex items-center justify-between mt-1  ">
            <p className="text-sm text-neutral-700 ">
              By{" "}
              <span className="text-black font-medium">
                &quot;Mohammad&quot;
              </span>
            </p>
            <LuHeartOff
              cursor="pointer"
              className="mr-3 hover:text-red hover:scale-105 hoverEffect"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikesModal;
