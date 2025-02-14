import React from 'react';
import CustomSelect from "@/components/blogs/CustomSelect";
import {Button} from "@/components/ui/button";

const FilterOptions = () => {
    return (
        <div className="hidden md:block col-span-3 p-3 h-fit max-h-[250px] rounded-xl w-full bg-zinc-200 sticky top-20">
            <h3 className="text-xl font-semibold">Filter Option</h3>
            <div className="flex flex-col mt-5 items-center justify-start gap-2">
                <CustomSelect placeHolder="Category" bgColor={"#fff"}/>
                <CustomSelect bgColor={"#fff"} placeHolder="Language"/>
                <Button className="bg-white w-full text-black" variant={"outline"}>
                    Filter
                </Button>
            </div>
        </div>
    );
};

export default FilterOptions;