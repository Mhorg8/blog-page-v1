import React from "react";

const WriterCard = () => {
  return (
    <div className="w-full col-span-1 h-[300px] bg-zinc-200 rounded-xl shadow-sm cursor-pointer hover:shadow-lg hover:scale-105 hoverEffect">
      {/* user image info */}
      <div className="h-2/3  bg-zinc-100 rounded-t-xl"></div>
      {/* user information */}

      <div className="py-2 px-4 h-1/3">
        <div className="flex items-center justify-between w-full">
          <h3 className="capitalize font-semibold text-black">
            Mohammad hosein
          </h3>
          <p className="text-xs uppercase font-semibold text-darkGray">
            writer
          </p>
        </div>

        <div className="">
          <p className="text-sm text-darkGray">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
            voluptate?
          </p>
        </div>
      </div>
    </div>
  );
};

export default WriterCard;
