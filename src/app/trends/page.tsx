import TrendBanner from "@/components/trends/TrendBanner";
import FilterOptions from "@/components/FilterOptions";
import HeaderTitle from "@/components/HeaderTitle";
import BestWriter from "@/app/trends/BestWriter";
import TrendsItemList from "@/app/trends/TrendsItemList";


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

                <div className="flex flex-wrap flex-col md:flex-row items-center gap-5 justify-between mt-5">
                    <BestWriter/>
                    <BestWriter/>
                    <BestWriter/>
                    <BestWriter/>
                </div>
            </div>
        </div>
    );
};

export default TrendsPage;