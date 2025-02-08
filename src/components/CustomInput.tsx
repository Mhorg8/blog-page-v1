import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface Props {
  label: string;
  placeHolder?: string;
  containerStyle?: string;
  name: string;
  type: "text" | "password" | "email" | "number";
  disable?: boolean;
}

const CustomInput = ({
  label,
  placeHolder,
  containerStyle,
  type,
  name,
  disable,
}: Props) => {
  return (
    <div className={`flex flex-col ${containerStyle} gap-1.5`}>
      <Label htmlFor={name} className="text-zinc-800 capitalize">
        {label}
      </Label>
      <Input
        className=""
        id={name}
        name={name}
        type={type}
        placeholder={placeHolder}
        disabled={disable}
      />
    </div>
  );
};

export default CustomInput;
