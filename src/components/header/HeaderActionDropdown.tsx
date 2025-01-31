import React, { useEffect } from "react";
import {
  RiLogoutCircleLine,
  RiProfileLine,
  RiSettings2Line,
} from "react-icons/ri";

interface Props {
  setDropdownStatus: (status: string) => void;
}

const HeaderActionDropdown = ({ setDropdownStatus }: Props) => {
  useEffect(() => {
    window.addEventListener("click", () => {
      setDropdownStatus("close");
    });

    // return () => {
    //   window.removeEventListener("click", () => {
    //     s
    //   });
    // };
  }, []);
  return (
    <div className="absolute top-100 right-0 bg-zinc-100 min-w-[100px] text-center rounded-md text-sm capitalize mt-1">
      <div className="flex items-center justify-between w-full border-b border-zinc-300 cursor-pointer hover:bg-zinc-200/80 p-1 rounded-t-md">
        Profile
        <RiProfileLine />
      </div>
      <div className="flex items-center justify-between w-full border-b border-zinc-300 cursor-pointer hover:bg-zinc-200/80 p-1">
        Setting
        <RiSettings2Line />
      </div>
      <div className="flex items-center justify-between w-full cursor-pointer hover:bg-zinc-200/80 p-1 rounded-b-md">
        Logout
        <RiLogoutCircleLine />
      </div>
    </div>
  );
};

export default HeaderActionDropdown;
