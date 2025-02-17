import Image from "next/image";
import React from "react";
import BestWriterImage from "../../public/banner-1.jpg";

const BestWriter = () => {
  return (
    <div className=" mt-20 bg-zinc-100 py-5">
      <div className="relative container w-full h-[50dvh] flex flex-col md:flex-row items-center justify-evenly">
        <div className="relative w-[350px] h-full order-2 md:order-1">
          <Image
            src={BestWriterImage}
            className="object-cover rounded-lg"
            fill
            sizes="fill"
            alt=""
          />
        </div>

        <div className="order-1 md:order-2 py-5 md:py-0">
          <div>
            <h1 className="text-3xl lg:text-4xl tracking-wide font-bold uppercase">
              Best Writer of month
            </h1>
            <p className="text-xl">Paulo Maldini</p>
          </div>
          <p className="max-w-[350px] text-sm">
            &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            accusamus earum quasi doloremque dolorum repellendus.&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestWriter;
