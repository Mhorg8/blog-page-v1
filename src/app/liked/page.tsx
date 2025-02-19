import React from 'react';
import TrendBanner from "@/components/trends/TrendBanner";
import HeaderTitle from "@/components/HeaderTitle";
import TrendsItemList from "@/app/trends/TrendsItemList";
import SmallProfileView from "@/components/SmallProfileView";
import {LuHeart} from "react-icons/lu";

const favoriteCategories = [
    {id: 1, name: 'Tech'},
    {id: 2, name: 'Mobile'},
    {id: 3, name: 'Books'},
    {id: 6, name: 'Science'},
    {id: 5, name: 'Trends'},
    {id: 4, name: 'Others'},

]

const LikedPage = () => {
    return (
        <div className="container">
            <TrendBanner ImageSrc="/trendBanner2.jpg" title="You have access to blogs, anywhere."
                         subtitle="You can like every thing you liked."/>

            <div className="mt-10 w-100">
                <div>
                    <HeaderTitle text="Preferred Category."/>
                    <p>Delve into what captivates your interest the most</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-2 mt-5">
                    {favoriteCategories.map((category) => {
                        return <div key={category.id}
                                    className="border-b-2 py-1 border-black font-semibold hover:border-b-4 cursor-pointer transition-all duration-200">
                            <span className="">{category.id}</span>- <span className="">{category.name}</span>
                        </div>
                    })}
                </div>
            </div>


            <div
                className="flex flex-col md:flex-row w-full h-full items-center md:items-start justify-start gap-x-5 mt-10 relative">
                <div className="w-full mt-10 ">
                    <HeaderTitle text="You Liked" icon={<LuHeart/>} customStyle="mb-5 text-red"/>
                    <TrendsItemList/>
                </div>
                <div className="hidden h-full md:block w-[300px] p-2 mt-24 bg-zinc-200 rounded-xl space-y-2">
                    <SmallProfileView/>
                    <SmallProfileView/>
                    <SmallProfileView/>
                </div>
            </div>
        </div>
    );
};

export default LikedPage;