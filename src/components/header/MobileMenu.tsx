"use client";
import { easeIn, motion } from "framer-motion";
import { Button } from "../ui/button";
import { RiMenu5Fill } from "react-icons/ri";
import NavMenu from "./NavMenu";

interface Props {
  toggleMenuStatus: (status: string) => void;
}

const MobileMenu = ({ toggleMenuStatus }: Props) => {
  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: easeIn }}
      exit={{ x: 10, opacity: 0 }}
      className="w-[68dvw] h-screen md:hidden absolute top-0 -right-8 z-[999]"
    >
      <div className="w-full h-full relative bg-zinc-200 ">
        <Button
          onClick={() => toggleMenuStatus("close")}
          className="border-none p-2 text-xl absolute top-5 right-5"
          variant={"secondary"}
        >
          <RiMenu5Fill className="text-xl" />
        </Button>

        {/* Menu items */}

        <div className="pt-10 h-full">
          <NavMenu className="flex h-full flex-col items-center justify-center " />
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
