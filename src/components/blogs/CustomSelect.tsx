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
    className: string;
    bgColor?: string;
    placeholder?: string;
    values?: string[];
    label?: string | 'Writer';
    placeHolder: string;
}

const CustomSelect = ({bgColor, className, label, placeHolder}: Props) => {
    return (
        <Select>
            <SelectTrigger style={{backgroundColor: bgColor}} className={`${className} w-full`}>
                <SelectValue placeholder={placeHolder}/>
            </SelectTrigger>
            <SelectContent className="bg-white">
                <SelectGroup>
                    <SelectLabel>{label}</SelectLabel>
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
