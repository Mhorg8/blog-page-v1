import HeaderTitle from "../HeaderTitle";
import Pagination from "../Pagination";
import BlogItem from "./BlogItem";
import FilterOptions from "@/components/FilterOptions";

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
        <FilterOptions />
      </div>
    </div>
  );
};

export default Blogs;
