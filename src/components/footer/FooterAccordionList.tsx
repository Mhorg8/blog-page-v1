"use client";
import { footerLinks } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

const FooterAccordionList = () => {
  const [activeField, setActiveField] = useState<null | number>(null);

  const handleClick = (index: number) => {
    if (activeField === index) {
      setActiveField(null);
    } else {
      setActiveField(index);
    }
  };

  return (
    <div className="block md:hidden w-full space-y-2 cursor-pointer">
      {footerLinks.map((link, index) => {
        return (
          <div key={link.title} className="w-full">
            {/* title and icon */}
            <div
              onClick={() => handleClick(index)}
              className="flex items-center justify-between w-full border-b"
            >
              <h3 className="text-xl font-bold hover:text-black/70 hoverEffect">
                {link.title}
              </h3>
              {activeField === index ? <LuChevronUp /> : <LuChevronDown />}
            </div>
            {/* List of elements */}
            <ul className={activeField === index ? "flex flex-col" : "hidden"}>
              {link.subLinks.map((subLink) => {
                return (
                  <Link
                    className="hover:font-bold hoverEffect"
                    href={subLink.href}
                    key={subLink.href}
                  >
                    {subLink.title}
                  </Link>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default FooterAccordionList;
