"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import {
  RiHeart2Line,
  RiMenu3Fill,
  RiMessage2Line,
  RiUser2Line,
} from "react-icons/ri";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion";
import HeaderActionDropdown from "./HeaderActionDropdown";

const HeaderActions = () => {
  const [sidebarStatus, setSidebarStatus] = useState<"open" | "close">("close");
  const [dropdownStatus, setDropdownStatus] = useState<"open" | "close">(
    "close"
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setDropdownStatus("close");
        setSidebarStatus("close");
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center gap-1 md:gap-2">
      {/* dropdown icon */}
      <div ref={dropdownRef} className="relative">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            setDropdownStatus(dropdownStatus === "open" ? "close" : "open");
          }}
          variant={"secondary"}
          className="border-none p-2 text-xl"
        >
          <RiUser2Line />
        </Button>
        {dropdownStatus === "open" && (
          <HeaderActionDropdown
            setDropdownStatus={() => setDropdownStatus("close")}
          />
        )}
      </div>

      <Button size={"icon"} variant={"secondary"} className="relative">
        <RiHeart2Line className="text-xl" />
        <p className="absolute -bottom-1 -right-1 bg-red text-white w-5 h-5 rounded-full z-10 text-sm">
          0
        </p>
      </Button>
      <Button size={"icon"} variant={"secondary"} className="relative">
        <RiMessage2Line className="text-xl" />
        <p className="absolute -bottom-1 -right-1 bg-red text-white w-5 h-5 rounded-full z-10 text-sm">
          0
        </p>
      </Button>

      {/* open mobile menu trigger */}
      <Button
        onClick={(e) => {
          e.stopPropagation();
          setDropdownStatus("close");
          setSidebarStatus("open");
        }}
        size={"icon"}
        className="border-none p-2 text-xl md:hidden"
        variant={"secondary"}
      >
        <RiMenu3Fill className="text-xl" />
      </Button>

      {/* display mobile menu */}
      {sidebarStatus === "open" && (
        <AnimatePresence key={"sidebar"}>
          <div ref={sidebarRef}>
            <MobileMenu toggleMenuStatus={() => setSidebarStatus("close")} />
          </div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default HeaderActions;
