import React from "react";
import { FlipWords } from "./AboutFlipWords";
export function FlipWordsDemo() {
  const words = ["growth", "confidence", "motivation", "success"];
  return (
    <div className="h-auto flex justify-center items-center xl:py-0 xl:w-[100%] mx-auto">
      <div className="xl:text-[14px] md:text-[13px] text-[12px] mt-[-5px] font-inter text-gray-600 dark:text-neutral-300 text-center txl:racking-wide ">
        Welcome to our self-improvement blog where we help you achieve{" "}
        <FlipWords words={words} /> and live your best life.
        Join us on a journey of self-discovery, personal growth, and achieving your dreams!
      </div>
    </div>
  );
}
