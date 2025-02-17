import TrendBanner from "@/components/trends/TrendBanner";
import FilterOptions from "@/components/FilterOptions";
import HeaderTitle from "@/components/HeaderTitle";
import BestWriter from "@/app/trends/BestWriter";
import TrendsItemList from "@/app/trends/TrendsItemList";
import SmallProfileView from "@/components/SmallProfileView";


const TrendsPage = () => {

    return (
        <div className="container ">
            {/*banner*/}
            <TrendBanner/>
            {/*Mapping on Trend Items and displayed here */}
            <div
                className="flex flex-col md:flex-row w-full h-full items-center md:items-start justify-start gap-x-5 mt-10 relative">
                <TrendsItemList/>
                <div className="hidden h-full md:block w-[250px]  sticky top-20">
                    <FilterOptions/>
                </div>
            </div>
            {/* Best Writer on month */}
            <div className="mt-14">
                <HeaderTitle text="Best writer of month"/>

                <div className="grid grid-cols-12 gap-5 justify-center mt-5">
                    <BestWriter/>
                    <BestWriter/>
                    <BestWriter/>
                    <BestWriter/>
                </div>
            </div>


            <div
                className="flex flex-col md:flex-row w-full h-full items-center md:items-start justify-start gap-x-5 mt-10 relative">
                <div className="w-full mt-10">
                    <HeaderTitle text="New in Technology" customStyle="mb-5"/>
                    <TrendsItemList/>
                </div>
                <div className="hidden h-full md:block w-[300px] p-2 mt-24 bg-zinc-200 rounded-xl space-y-2">
                  <SmallProfileView />
                  <SmallProfileView />
                  <SmallProfileView />
                </div>
            </div>
        </div>
    );
};

export default TrendsPage;