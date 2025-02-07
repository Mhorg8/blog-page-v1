"use client";
import Link from "next/link";
import NavMenu from "./NavMenu";
import HeaderActions from "./HeaderActions";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  const getScrollHeight = () => {
    const scrollHeight = window.scrollY;
    setScrollHeight(scrollHeight);
  };

  // useEffect for call function on every time scroll height change
  useEffect(() => {
    document.addEventListener("scroll", getScrollHeight);

    return () => window.removeEventListener("scroll", getScrollHeight);
  }, [scrollHeight]);

  return (
    <header
      className={`${
        scrollHeight > 100 ? "sticky top-0 right-0 bg-white z-50 shadow-sm" : ""
      }  w-full`}
    >
      <div className="py-2 container flex items-center justify-between">
        <div>
          <Link href="/" className="font-bold text-2xl">
            Daily blog
          </Link>
        </div>
        <NavMenu />
        <HeaderActions />
      </div>
    </header>
  );
};

export default Header;
