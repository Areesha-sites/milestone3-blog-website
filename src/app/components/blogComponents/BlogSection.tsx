import React from "react";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <>
      <section className="">
        <div className="flex justify-start items-center px-20">
          <h4 className="font-inter font-bold xl:text-[30px] text-[18px] text-gray-700 2xl:text-[30px]">
            Trending Categories
          </h4>
        </div>
        <div className="">
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default BlogSection;