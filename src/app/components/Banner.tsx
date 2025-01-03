"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import HomeMarquee from "./HomeMarquee";
import HomeMainImage from "./HomeMainImage";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <>
      <section className="px-4 min-h-screen pt-[100px] 2xl:pt-40">
        <div className="flex justify-between xl:flex-row sm:flex-row flex-col md:flex-row items-center xl:w-[90%] mx-auto text-gray-800 w-[90%]">
          <div className="ml-11">
            {["Discover", "Flavors", "Beyond Borders"].map((item, index) => (
              <div key={index} className="masker">
                <div className="w-fit flex items-end overflow-hidden">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "8vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                      className="xl:mr-3 mr-2 xl:w-[8vw] xl:h-[5vw] w-[20vw] h-[10vw] md:w-[18vw] md:h-[6vw] rounded-md xl:-top-[0.6vw] relative top-[-1.7vw] md:top-[-0.3vw] lg:top-[-0.4vw] lg:w-[15vw] lg:h-[5vw] 2xl:top-[-0.3vw] sm:w-[20vw] sm:h-[5vw] sm:-top-[-3vw]"
                      style={{
                        backgroundImage: "url('/recipe.jpg')",
                        backgroundSize: "cover",
                      }}
                    ></motion.div>
                  )}
                  <h1 className="uppercase xl:text-[76px] xl:leading-[75px] text-[35px] leading-[40px] md:text-[47px] lg:leading-[60px] lg:text-[60px] md:leading-[50px] font-anton tracking-wide 2xl:text-[100px] 2xl:leading-[100px] w-[250px] md:w-[320px] lg:w-[500px] xl:w-[600px]">
                    {item}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            <HomeMainImage />
          </div>
        </div>
        <div className="border-t-[1px] w-[90%] xl:mt-[1.5rem]  border-zinc-400 font-inter  mt-7 xl:flex xl:justify-between items-center grid grid-cols-1 md:grid-cols-3  gap-x-14 xl:ml-0 ml-[6px] md:ml-[20px] 2xl:w-[95%] mx-[5%]">
          {[
            "Savor the art of cokking every day",
            "Explore recipes that inspire creativity.",
          ].map((item, index) => (
            <p
              key={index}
              className=" xl:text-[12px] 2xl:text-[15px] mt-1 whitespace-nowrap  md:ml-[30px]  text-[10px] font-medium text-gray-700"
            >
              {item}
            </p>
          ))}
          <div className="flex justify-center relative left-[0%] mt-2">
            <div className="px-4 py-2 border-zinc-400 font-semibold flex cursor-pointer hover:font-bold hover:underline hover:text-orange-500  items-center xl:text-[11px]  text-[10px] whitespace-nowrap text-gray-500 underline">
              <Link href="/blogs">Start Exploring Recipes</Link>{" "}
              <BsArrowRight className="xl:ml-2 ml-1 xl:h-5 xl:w-5 h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="lg:mt-12 md:-mt-7 ">
          <HomeMarquee />
        </div>
      </section>
    </>
  );
};

export default Banner;
