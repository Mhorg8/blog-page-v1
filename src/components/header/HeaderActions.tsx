"use client";
import React, { useEffect, useRef, useState } from "react";
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
import LikesModal from "../modals/LikesModal";
import NotificationsModal from "../modals/NotificationsModal";

const HeaderActions = () => {
  const [sidebarStatus, setSidebarStatus] = useState<"open" | "close">("close");
  const [openModal, setOpenModal] = useState<"likes" | "commends" | null>(null);
  const [dropdownStatus, setDropdownStatus] = useState<"open" | "close">(
    "close"
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleMenuStatus = (status: "likes" | "commends" | null) => {
    setOpenModal(status === openModal ? null : status);
  };
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
    <div className="flex items-center gap-1 md:gap-2 relative">
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
          <RiUser2Line className="text-xl" />
        </Button>
        {dropdownStatus === "open" && (
          <HeaderActionDropdown
            setDropdownStatus={() => setDropdownStatus("close")}
          />
        )}
      </div>

      <Button
        variant={"secondary"}
        className="border-none p-2 text-xl relative"
        onClick={() => toggleMenuStatus("likes")}
      >
        <RiHeart2Line className="text-xl" />
        <p className="absolute -bottom-1 -right-1 bg-red text-white w-5 h-5 rounded-full z-10 text-sm">
          0
        </p>
      </Button>
      <Button
        onClick={() => toggleMenuStatus("commends")}
        variant={"secondary"}
        className="border-none p-2 text-xl relative"
      >
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
          setOpenModal(null);
        }}
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

      {openModal === "likes" ? (
        <LikesModal />
      ) : openModal === "commends" ? (
        <NotificationsModal />
      ) : null}
    </div>
  );
};

export default HeaderActions;
