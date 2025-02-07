"use client";
import { Button } from "./ui/button";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const Pagination = () => {
  return (
    <div className="flex  items-center justify-center gap-1.5 mt-5">
      <Button size={"default"} variant={"secondary"}>
        <IoChevronBackOutline />
        Prev{" "}
      </Button>
      <Button variant={"secondary"}>1</Button>
      <Button variant={"secondary"}>2</Button>
      <Button variant={"secondary"}>3</Button>
      <Button variant={"secondary"}>...</Button>
      <Button variant={"secondary"}>
        Next
        <IoChevronForwardOutline />
      </Button>
    </div>
  );
};

export default Pagination;
