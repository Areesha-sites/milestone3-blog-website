"use client";
import Link from "next/link";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { TimelineEntryTypes } from "../../../types/componentTypes";
const Timeline = ({ data }: { data: TimelineEntryTypes[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  return (
    <div
      className="w-full bg-gradient-to-bl from-gray-100 to-gray-200 dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto xl:py-6 py-5 px-4 md:px-8 lg:px-10">
        <h2 className="xl:text-[27px] text-[19px] font-anton md:text-[25px] uppercase tracking-wide mb-4 text-gray-600 dark:text-white">
          From a Dreamer to a Blogger {" "}
          <span className="text-orange-500 ">My Story</span>
        </h2>
        <h3 className="text-gray-500 uppercase dark:text-neutral-300 font-inter font-bold  text-[14px] xl:text-[18px] mt-5">
          1. The beginning : A Love for Words.
        </h3>
        <p className=" text-gray-500 italic text-[12px] xl:text-[15px] mb-2 xl:mb-0 xl:mt-7 mt-4 underline ">
          Every big journey start with a small step, and mine began with a
          notebook and pen.
        </p>
        <div className="flex justify-between flex-col items-center xl: w-[80%] mx-auto">
          <p className="xl:text-[15px] text-[12px]  text-gray-500 xl:w-[65%]">
            Growing up, I always had a deep passion for writing. Whether it was
            scribbling in journals or drafting poems, words became my way to
            express emotions and ideas. However, I never thought these small
            scribbles would one day transform into something much bigger — a
            blog that connects me with people worldwide.
          </p>
          <img
            src="/book1'.jpg"
            alt="my-book"
            className="xl:w-[270px] xl:h-[220px] xl:mt-10 h-[200px] w-[200px] md:h-[200px] md:w-[220px] mt-4 rounded-2xl shadow-xl cursor-pointer"
          />
        </div>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 mt-[-7%]">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="xl:h-10 absolute left-3 md:left-3 xl:w-10 h-8 w-8 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="xl:h-4 xl:w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-[25px] font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block xl:text-2xl text-[20px]  mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-gray-400 via-gray-400 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>

      <div className="xl:max-w-7xl mx-auto xl:py-10 px-[43px] md:px-8 lg:px-10 ">
        <h3 className="text-gray-500 uppercase dark:text-neutral-300 font-inter font-bold xl:mt-5 text-[14px] -mt-7 xl:text-[18px]">
          5. A Note to My Readers: Thank You for Being Here.
        </h3>
        <p className=" text-gray-500 text-[12px] italic  xl:text-[15px]  xl:mt-7 mt-3 underline ">
          This blog wouldn&apos;t be what it is today without your love and
          support.
        </p>
        <div className="flex justify-center items-center xl:w-[80%] mx-auto pb-8">
          <p className=" xl:text-[15px] text-[12px] mt-3 text-gray-500 xl:w-[80%] xl:mt-5">
            To everyone who reads, comments, or shares my content — thank you
            from the bottom of my heart. You are the reason I keep pushing
            forward, learning, and growing. Let&apos;s continue this journey
            together!
            <br />
            <br />
            If you&apos;d like to connect, feel free to{" "}
            <Link href="/contact" className="text-blue-500 underline hover:text-blue-700">
              Let&apos;s Connect
            </Link>
            .
          </p>
         
        </div>
      </div>
    </div>
  );
};
export default Timeline;
