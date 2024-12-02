import React from "react";
import BlogPage from "../components/BlogPage";
import { TfiWrite } from "react-icons/tfi";
const Blogs = () => {
  return (
    <>
      <div className="">
        <div className="xl:py-32 py-24 bg-slate-100 text-center px-4 lg:py-28">
          <h1 className="text-gray-600 uppercase font-anton xl:text-5xl text-3xl  tracking-wider md:text-4xl lg:text-[42px]">Uncover Stories That Inspire</h1>
          <p className=" text-gray-500 xl:text-[13px] md:text-[12px] text-[11px] font-inter py-3 xl:w-[70%] w-[95%] md:w-[80%] lg:w-[70%]  mx-auto ">Dive into a curated collection of blogs spanning Health, personal development, work-balane and more. Discover ideas, insights, and inspiration tailored just for you</p>
          <div className="flex justify-center items-center">
          <button className="xl:text-[13px] text-[11px] flex text-gray-500 font-semibold hover:underline hover:text-orange-500 px-3 py-1 bg-gray-300 rounded-lg transition duration-300 ease-in-out opacity-80">Write Your Blog <TfiWrite className="h-4 w-4 ml-2"/></button>
        </div>
        </div>
        <div className="max-w-[1440px] 2xl:max-w-[1800px] bg-slate-100 xl:mt-[-6%] mt-[-15%] md:mt-[-8%]">
          <BlogPage />
        </div>
      </div>
    </>
  );
};

export default Blogs;
