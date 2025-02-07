import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  bgColor: string;
  placeholder?: string;
  values?: string[];
}

const CustomSelect = ({ bgColor }: Props) => {
  return (
    <Select>
      <SelectTrigger style={{ backgroundColor: bgColor }} className={`w-full`}>
        <SelectValue placeholder="Select by categories" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectLabel>Writer</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
