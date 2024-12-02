"use client";
import React, { useState } from "react";
import { AboutCoverDemo } from "../components/AboutCoverDemo";
import { FlipWordsDemo } from "../components/AboutFlipWordDemo";
import { FaHandPointDown } from "react-icons/fa";
import { AnimatedTestimonialsDemo } from "../components/AnimatedTestimonialsDemo";
import { TimelineDemo } from "../components/TimelineDemo";
import { AnimatedTooltipPreview } from "../components/AnimatedTooltipPreview";
const About = () => {
  const [isStoryVisible, setIsStoryVisible] = useState(false);
  const toggleStoryVisibility = () => {
    setIsStoryVisible(!isStoryVisible);
  };
  return (
    <div className="xl:py-16 pt-14 text-center min-h-screen text-gray-700 px-4 bg-slate-100">
      <div className="flex justify-center items-center gap-5 mt-[1%] w-[100%] mx-auto ">
        <div>
          <AboutCoverDemo />
        </div>
      </div>
      <div className="flex justify-center items-center xl:w-[60%] md:w-[70%] mx-auto">
        <FlipWordsDemo />
      </div>
      <div className="flex justify-center items-center xl:w-[60%] mx-auto py-2 opacity-80">
        <button
          onClick={toggleStoryVisibility}
          className="text-white flex justify-center items-center bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-[11px] xl:text-[12px] xl:px-3 xl:py-2  px-4 py-1 text-center me-2 mb-2"
        >
          {isStoryVisible ? "Hide Our Story" : "Click and Read our Journey"}{" "}
          <FaHandPointDown className="ml-2 xl:h-4 xl:w-4 h-3 w-3" />
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isStoryVisible ? " opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="">
          <TimelineDemo />
        </div>
      </div>
      <div>
        <h1 className="xl:text-[35px] text-[20px] md:text-[29px] font-anton xl:mt-[2%] mt-[2%] text-gray-500">
          What Our Readers Say!
        </h1>
      </div>
      <div>
        <AnimatedTestimonialsDemo />
      </div>
      <div className="">
        <div className="flex justify-center items-center flex-col md:-mt-20 xl:mt-[-5%] lg:mt-0 2xl:mt-[6%]">
          <h1 className="xl:text-[35px] text-[20px] md:text-[34px] font-anton text-gray-500">
            Meet My <span className="text-orange-500">Team</span>
          </h1>
          <div className="xl:mt-7 mt-3 flex justify-between items-center xl:flex-row md:flex-row flex-col">
            <video
              className="rounded-lg shadow-md shadow-gray-500 xl:max-w-[600px] max-w-[280px] md:max-w-[400px] lg:max-w-[500px]"
              autoPlay
              muted
              loop
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="xl:ml-28 text-center mt-5 md:ml-6 lg:ml-10">
              <p className="text-gray-500 xl:text-[15px] text-[11px] mb-5">
                Here is my Team Members!
              </p>
              <AnimatedTooltipPreview />
            </div>
          </div>
          <div className="mt-7 "></div>
        </div>
      </div>
    </div>
  );
};

export default About;
