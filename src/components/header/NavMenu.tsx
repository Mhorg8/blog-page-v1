"use client";
import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  className?: string;
}
const NavMenu = ({ className }: Props) => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className={cn("hidden md:flex items-center gap-2 ", className)}>
      {navItems.map((item) => (
        <Link
          className={`${
            pathname === item.href ? "underline" : ""
          } font-medium hover:text-brown hoverEffect`}
          href={item.href}
          key={item.title}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavMenu;
