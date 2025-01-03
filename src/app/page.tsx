import Banner from "./components/Banner";
import BlogsData from "./components/blogComponents/BlogData";
export default function Home() {
  return (
    <div className=" bg-slate-100">
      <Banner />
      <div className="xl:w-[95%] w-[95%] mx-auto mt-[3%]">
        <div className="">
          <BlogsData />
        </div>
      </div>
    </div>
  );
}
