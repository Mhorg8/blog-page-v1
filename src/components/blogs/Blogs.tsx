import HeaderTitle from "../HeaderTitle";
import Pagination from "../Pagination";
import { Button } from "../ui/button";
import BlogItem from "./BlogItem";
import CustomSelect from "./CustomSelect";

const Blogs = () => {
  return (
    <div className="container mt-20">
      <HeaderTitle text="New Blogs" />

      <div className="grid grid-cols-12 gap-6 mt-10 relative">
        <div className="lg:col-span-9 col-span-12 space-y-2">
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />

          <div className="">
            <Pagination />
          </div>
        </div>
        <div className="hidden md:block col-span-3 p-3 h-fit max-h-[250px] rounded-xl w-full bg-zinc-200 sticky top-20">
          <h3 className="text-xl font-semibold">Filter Option</h3>
          <div className="flex flex-col mt-5 items-center justify-start gap-2">
            <CustomSelect bgColor={"#fff"} />
            <CustomSelect bgColor={"#fff"} />
            <Button className="bg-white w-full text-black" variant={"outline"}>
              Filter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
