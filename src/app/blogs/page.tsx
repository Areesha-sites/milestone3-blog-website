import React from "react";
import { TfiWrite } from "react-icons/tfi";
import BlogsData from "../components/blogComponents/BlogData";
const Blogs = () => {
  return (
    <>
      <div className="">
        <div className="xl:py-32 py-24 pt-28 md:pt-36 bg-slate-100 text-center px-4 lg:py-28 xl:pt-44 h-auto">
          <h1 className="text-gray-600 uppercase font-anton xl:text-5xl text-3xl tracking-wider md:text-4xl lg:text-[42px]">
            Discover Delicious Recipes
          </h1>
          <p className="text-gray-500 xl:text-[13px] md:text-[12px] text-[11px] font-inter py-3 xl:w-[70%] w-[95%] md:w-[80%] lg:w-[70%] mx-auto">
            Dive into a world of mouth-watering recipes, from quick bites to
            gourmet meals. Explore culinary tips, creative twists, and flavorful
            ideas tailored to your taste.
          </p>
          <div className="flex justify-center items-center">
            <button className="xl:text-[13px] text-[11px] flex text-gray-500 font-semibold hover:underline hover:text-hoverTextColor px-3 py-1 bg-gray-300 rounded-lg transition duration-300 ease-in-out opacity-80">
              Share Your Recipe
              <TfiWrite className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
        <div className=" xl:mt-[-6%] mt-[-15%] md:mt-[-8%] bg-slate-100">
          <BlogsData />
        </div>
      </div>
    </>
  );
};

export default Blogs;
