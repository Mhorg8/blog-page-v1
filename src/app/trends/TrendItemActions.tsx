import React from 'react';
import {BsChatSquareText} from "react-icons/bs";
import {LuBookmark, LuHeart} from "react-icons/lu";


interface Props {
    setShowCommends: React.Dispatch<React.SetStateAction<boolean>>;
    setShowAllText: React.Dispatch<React.SetStateAction<boolean>>;
    showAllText: boolean
}

const TrendItemActions = ({setShowCommends, setShowAllText, showAllText}: Props) => {
    return (
        <div className="flex items-center justify-between w-full">
            <button onClick={() => setShowAllText(prev => !prev)}
                    className="text-black font-semibold underline text-sm">
                {showAllText ? "show less" : "show more"}
            </button>
            <div className="flex items-center gap-2">
                <button
                    onClick={() => setShowCommends(prev => !prev)}
                    className="p-2 bg-zinc-100 hover:text-blue hover:scale-110 hoverEffect rounded-full">
                    <BsChatSquareText/>
                </button>
                <button
                    className="p-2 bg-zinc-100 hover:text-red hover:scale-110 hoverEffect rounded-full">
                    <LuHeart size={18}/>
                </button>
                <button
                    className="p-2 bg-zinc-100 hover:text-green hover:scale-110 hoverEffect rounded-full">
                    <LuBookmark size={18}/>
                </button>
            </div>
        </div>
    );
};

export default TrendItemActions;