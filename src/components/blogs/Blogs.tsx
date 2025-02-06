import HeaderTitle from "../HeaderTitle";
import BlogSlider from "./BlogSlider";

const Blogs = () => {
  return (
    <div className="container mt-20">
      <HeaderTitle text="New Blogs" />

      <div className="">
        <BlogSlider />
      </div>
    </div>
  );
};

export default Blogs;
