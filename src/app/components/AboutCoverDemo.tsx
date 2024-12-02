import React from "react";
import Cover from "./AboutCover";
export function AboutCoverDemo() {
  return (
    <div>
      <h1 className="md:text-[40px] md:leading-[50px] lg:leading-[50px] lg:text-[45px] font-semibold xl:max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-gray-600 via-gray-700 to-gray-600 dark:from-neutral-800 uppercase xl:text-[55px] text-[25px] leading-[30px] font-anton tracking-wide dark:via-white dark:to-white">
        Discover The Story Behind <br />
        <Cover>
          Aspire <span className="text-orange-500">Hub</span>
        </Cover>
      </h1>
    </div>
  );
}
