import CommendSlider from "@/components/hero/CommendSlider";
import Hero from "@/components/hero/Hero";
import TopWriter from "@/components/hero/TopWriter";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container py-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Top Writer for last month
        </h2>
        {/* top writer card */}
        <TopWriter />
      </div>

      {/*  commend slider */}
      <CommendSlider />
    </div>
  );
}
