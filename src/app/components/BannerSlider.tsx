"use client"
import React, { useEffect, useState } from "react";
import { blogsSliderData } from "../../../public/sliderData/BlogData";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { SlideRight } from "../utility/animation";
const BannerSlider = () => {
  const [activeData, setActiveData] = useState(blogsSliderData[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blogsSliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setActiveData(blogsSliderData[currentIndex]);
  }, [currentIndex]);
  return (
    <motion.section transition={{ duration: 0.8 }} className="text-black pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 max-h-screen md:h-[900px] w-[80%] mx-auto items-center gap-4">
        <div className="flex justify-center rounded-3xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={`image-${activeData.id}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: easeInOut }}
              exit={{ opacity: 0, x: -100 }}
              src={activeData.image}
              alt={activeData.title}
              className="w-[220px] h-[200px] md:w-[450px] xl:w-[400px] xl:h-[320px] rounded-3xl shadow-2xl shadow-gray-400 md:h-[250px] lg:h-[270px] lg:w-[350px] 2xl:h-[450px] 2xl:w-[600px]"
            />
          </AnimatePresence>
        </div>
        <div className="flex flex-col justify-start xl:space-y-2 gap-y-2 md:space-y-3 text-center md:text-left">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${activeData.id}`}
              variants={SlideRight(0.2)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="xl:text-[27px] text-[13px] lg:text-[25] xl:leading-[30px] font-bold text-gray-600 max-w-[45rem] truncate-lines font-inter md:text-[17px] 2xl:text-[40px]2xl:leading-[36px]"
            >
              {activeData.title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`subTitle-${activeData.id}`}
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="xl:text-[13px] text-[11px] 2xl:text-[18px] md:text-[12px] text-gray-600"
            >
              {activeData.subTitle}
            </motion.p>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={`button-${activeData.id}`}
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <button className="xl:px-5 xl:py-1 py-1 px-2 bg-slate-200 rounded-md xl:text-[12px] text-[10px] md:text-[11px] 2xl:text-[17px] 2xl:py-2 2xl:px-5   text-gray-600 hover:text-gray-900 font-inter font-semibold">
                Read More
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default BannerSlider;
