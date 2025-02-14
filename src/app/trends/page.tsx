import TrendBanner from "@/components/trends/TrendBanner";

const TrendsPage = () => {
    return (
        <div className="container ">
            {/*banner*/}
            <TrendBanner/>

            <div className="grid grid-cols-12 mt-10">
                {/*    sidebar*/}
                <div className="col-span-3">sdiebar</div>
                {/* content */}
                <div className="col-span-9">main content</div>
            </div>
        </div>
    );
};

export default TrendsPage;