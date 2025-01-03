"use client";
import React, { useState } from "react";
import { AboutCoverDemo } from "../components/AboutCoverDemo";
import { FlipWordsDemo } from "../components/AboutFlipWordDemo";
import { FaHandPointDown } from "react-icons/fa";
import { AnimatedTestimonialsDemo } from "../components/AnimatedTestimonialsDemo";
import { TimelineDemo } from "../components/TimelineDemo";
import ContactCardSliderItems from "../components/ContactCardSliderItems";
const About = () => {
  const [isStoryVisible, setIsStoryVisible] = useState(false);
  const toggleStoryVisibility = () => {
    setIsStoryVisible(!isStoryVisible);
  };
  return (
    <div className="xl:py-16 xl:pt-28 pt-14 text-center min-h-screen text-gray-700 px-4 bg-slate-100">
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
          className="text-white flex justify-center items-center bg-gradient-to-r from-textColor via-btnBgColor to-textColor hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-btnBgColor dark:focus:ring-gray-800 font-medium rounded-lg text-[11px] xl:text-[12px] xl:px-3 xl:py-2  px-4 py-1 text-center me-2 mb-2"
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
        <ContactCardSliderItems />
      </div>
    </div>
  );
};

export default About;
