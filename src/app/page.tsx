import BestWriter from "@/components/BestWriter";
import Blogs from "@/components/blogs/Blogs";
import CommendSlider from "@/components/hero/CommendSlider";
import Hero from "@/components/hero/Hero";
import TopWriter from "@/components/hero/TopWriter";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* top writer card */}
      <div className="container py-4">
        <h2 className="text-2xl md:text-4xl font-bold">
          Top Writer for last month
        </h2>
        <TopWriter />
      </div>
      <CommendSlider />
      <BestWriter />
      <Blogs />
    </div>
  );
}
