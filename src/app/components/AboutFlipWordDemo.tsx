import React from "react";
import { FlipWords } from "./AboutFlipWords";
export function FlipWordsDemo() {
  const words = ["flavor", "creativity", "inspiration", "deliciousness"];
  return (
    <div className="h-auto flex justify-center items-center xl:py-0 xl:w-[100%] mx-auto">
      <div className="xl:text-[14px] md:text-[13px] text-[12px] mt-[-5px] font-inter text-gray-600 dark:text-neutral-300 text-center tracking-wide">
        Welcome to our recipe blog where we help you discover new{" "}
        <FlipWords words={words} /> in the kitchen. Whether you are looking to
        spice up your meals, explore unique ingredients, or find the perfect
        recipe, we are here to inspire you! Join us on a journey of culinary
        creativity and let is make every meal a memorable one!
      </div>
    </div>
  );
}
