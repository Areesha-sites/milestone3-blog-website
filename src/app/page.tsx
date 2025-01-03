import Banner from "./components/Banner";
import BlogCard from "./components/blogComponents/BlogCard";
import BlogsData from "./components/blogComponents/BlogData";
import BlogSection from "./components/blogComponents/BlogSection";
import BlogPage from "./components/BlogPage";
import BlogsSanityData from "./components/BlogsSanityData";
export default function Home() {
  return (
    <div className=" bg-slate-100">
      <Banner />
      <div className="xl:w-[95%] w-[95%] mx-auto mt-[3%]">

     <div className="">
     <BlogsData/>
     </div>
      </div>
    </div>
  );
}
