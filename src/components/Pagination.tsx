"use client";
import { Button } from "./ui/button";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const Pagination = () => {
  return (
    <div className="flex  items-center justify-center gap-1.5 mt-5">
      <Button size={"sm"} variant={"secondary"}>
        <IoChevronBackOutline />
        Prev{" "}
      </Button>
      <Button variant={"secondary"} size="sm">1</Button>
      <Button variant={"secondary"}  size="sm">2</Button>
      <Button variant={"secondary"}  size="sm">3</Button>
      <Button variant={"secondary"}  size="sm">...</Button>
      <Button variant={"secondary"}  size="sm">
        Next
        <IoChevronForwardOutline />
      </Button>
    </div>
  );
};

export default Pagination;
