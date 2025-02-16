import React from 'react';
import TrendItem from "@/components/TrendIItem";
import Pagination from "@/components/Pagination";

const TrendsItemList = () => {
    return (
        <div className="space-y-3 w-full h-full bg-zinc-200 py-3 rounded-xl shadow-md px-3 min-h-[200px]">
            <TrendItem/>
            <TrendItem/>
            <TrendItem/>
            <TrendItem/>

            <div className="w-full flex  items-center justify-center">
                <Pagination/>
            </div>
        </div>
    );
};

export default TrendsItemList;