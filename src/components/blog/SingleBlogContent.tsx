import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuStar } from "react-icons/lu";
import { Button } from "../ui/button";
import { IoChevronBackOutline } from "react-icons/io5";

const SingleBlogContent = () => {
  return (
    <div className="w-full max-w-[80%] flex flex-col items-start justify-start space-y-4 mt-4">
      <div>
        <h1 className="text-2xl  md:text-3xl font-extrabold">
          How we can create E-commerce app in 2025 with react and redux
        </h1>
        <p>
          By <span className="font-bold">&quot;Mohammad&quot;</span>
        </p>
      </div>

      <div className="w-[80%] text-wrap space-y-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          eius, exercitationem vitae atque in velit. Deserunt et dignissimos ex
          doloremque ipsum nostrum, doloribus quaerat tenetur natus accusamus
          magnam voluptatem, obcaecati maiores amet ab consequatur suscipit
          recusandae atque est a beatae sint adipisci repellendus. Culpa, enim.
          Dolor rerum ullam corrupti fugiat voluptatibus, enim vel aut et
          reiciendis similique, sunt libero totam sint eius natus delectus
          repellat a maxime nihil eveniet voluptates? Error rem velit quo earum
          ex sed totam? Totam natus quibusdam, unde esse voluptatem sit quisquam
          distinctio, soluta in aut vitae accusantium. Amet velit dolore alias
          possimus ipsa saepe ipsum?{" "}
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          eius, exercitationem vitae atque in velit. Deserunt et dignissimos ex
          doloremque ipsum nostrum, doloribus quaerat tenetur natus accusamus
          magnam voluptatem, obcaecati maiores amet ab consequatur suscipit
          recusandae atque est a beatae sint adipisci repellendus. Culpa, enim.
          Dolor rerum ullam corrupti fugiat voluptatibus, enim vel aut et
          reiciendis similique, sunt libero totam sint eius natus delectus
          repellat a maxime nihil eveniet voluptates? Error rem velit quo earum
          ex sed totam? Totam natus quibusdam, unde esse voluptatem sit quisquam
          distinctio, soluta in aut vitae accusantium. Amet velit dolore alias
          possimus ipsa saepe ipsum?{" "}
        </p>
      </div>

      <div>
        <p className="text-sm">
          Created At: <span className="font-medium">9/2025</span>
        </p>
        <p className="text-sm">
          Time need for read: <span className="font-medium">5 min</span>
        </p>
        <p className="text-sm">
          Author:{" "}
          <Link href="/" className="font-medium">
            Mohammad
          </Link>
        </p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <h4 className="text-sm">Give rate</h4>
            <FaArrowRightLong />
          </div>
          <div className="flex items-center gap-1">
            <LuStar />
            <LuStar />
            <LuStar />
            <LuStar />
            <LuStar />
          </div>
        </div>
      </div>

      <Button variant={"default"} className="gap-0">
        <IoChevronBackOutline size={12} />
        Back
      </Button>
    </div>
  );
};

export default SingleBlogContent;
