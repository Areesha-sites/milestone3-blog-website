import React from "react";
import Link from "next/link";
const TopHeader = () => {
  return (
    <header className="h-[35px] w-full flex justify-center items-center px-4 py-2 bg-textColor fixed left-0 top-0 right-0 z-50">
      <div className="flex justify-center items-center gap-x-[5px]">
        <p className="md:text-[12px] text-[8px] font-sans uppercase text-bgbuttonColor font-bold">
          Download a Free 7-Day Meal Plan Sample{" "}
        </p>
        <Link
          href="/"
          className="md:text-[12px] text-[8px] font-sans uppercase text-bgbuttonColor font-bold underline"
        >
          Yes Please!
        </Link>
      </div>
    </header>
  );
};

export default TopHeader;
