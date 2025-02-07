import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

const NotificationsModal = () => {
  return (
    <div className="w-[300px] h-fit bg-zinc-200 py-2 bg-opacity-70 absolute top-full mt-3 right-5 z-50 rounded-md shadow-lightCream shadow-sm">
      <div className="">
        <div
          className="hover:bg-brown hover:bg-opacity-45 hoverEffect cursor-pointer px-2 py-3 text-opacity-80
          border-b border-zinc-500"
        >
          <div className="flex items-center justify-between mt-1  ">
            <h3 className="line-clamp-1 tracking-tight font-semibold leading-none select-none text-neutral-900 ">
              <span>&quot;Mohammad&quot;</span> likes you post
            </h3>
            <IoIosNotificationsOutline size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsModal;
