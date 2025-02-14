import TrendBanner from "@/components/trends/TrendBanner";
import FilterOptions from "@/components/FilterOptions";
import TrendIItem from "@/components/TrendIItem";


const TrendsPage = () => {

    return (
        <div className="container ">
            {/*banner*/}
            <TrendBanner/>

            <div className="flex flex-col md:flex-row w-full items-center justify-start gap-5 mt-10 relative">
                <div className="w-full h-full bg-zinc-200 py-3 rounded-xl shadow-md px-3 min-h-[200px]">
                    <TrendIItem/>
                </div>
                <div className="w-[250px] h-[250px] sticky top-0 right-0">
                    <FilterOptions/>
                </div>
            </div>
        </div>
    );
};

export default TrendsPage;