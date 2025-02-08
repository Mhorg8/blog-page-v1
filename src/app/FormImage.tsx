"use client";

import { easeIn, motion } from "framer-motion";
import Image from "next/image";
const FormImage = () => {
  return (
    <div className="w-full h-1/3 flex items-center justify-center bg-zinc-100 rounded-lg">
      <motion.div
        // initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: easeIn }}
        className="w-28 h-28 rounded-full bg-green bg-opacity-60 relative overflow-hidden"
      >
        <Image
          src={"/bearImage.png"}
          alt=""
          fill
          sizes="fill"
          className="object-center object-cover scale-125"
        />
      </motion.div>
    </div>
  );
};

export default FormImage;
