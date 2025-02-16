import React from 'react';
import {BsChatSquareText} from "react-icons/bs";
import {LuHeart} from "react-icons/lu";
import CustomInput from "@/components/CustomInput";

interface Props {
    setShowCommends: (status: boolean) => void;
    showCommends: boolean
}

const TrendItemCommends = ({setShowCommends, showCommends}: Props) => {
    return (
        <div className="max-w-[40%]">
            {/* adding commend input */}
            <div className="">
                <CustomInput labelColor="text-darkGray" label="Commend" name="commend" type="text"/>
            </div>

            <div className=" mt-4 border p-2 rounded-md space-y-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-start gap-2">
                        <div className="w-9 h-9 rounded-full bg-gold"/>
                        <div className="">
                            <h4 className="text-sm font-medium">Mohamamd</h4>
                            <p className="text-xs text-darkGray">writer</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setShowCommends(!showCommends)}
                            className="p-2 bg-zinc-100 hover:text-blue hover:scale-110 hoverEffect rounded-full">
                            <BsChatSquareText/>
                        </button>
                        <button
                            className="p-2 bg-zinc-100 hover:text-red hover:scale-110 hoverEffect rounded-full">
                            <LuHeart size={18}/>
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-start gap-2">
                        <div className="w-9 h-9 rounded-full bg-gold"/>
                        <div className="">
                            <h4 className="text-sm font-medium">Mohamamd</h4>
                            <p className="text-xs text-darkGray">this is good pratice for learning react,</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setShowCommends(!showCommends)}
                            className="p-2 bg-zinc-100 hover:text-blue hover:scale-110 hoverEffect rounded-full">
                            <BsChatSquareText/>
                        </button>
                        <button
                            className="p-2 bg-zinc-100 hover:text-red hover:scale-110 hoverEffect rounded-full">
                            <LuHeart size={18}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendItemCommends;