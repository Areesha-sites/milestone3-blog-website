import React from "react";
import { CategorySelectionTypes } from "../../../types/componentTypes";
import { CategorySelectionPropTypes } from "../../../types/componentTypes";
import Image from "next/image";
const CategorySelection = ({ onSelectCategory, activeCategory }: CategorySelectionPropTypes) => {
  const categories: CategorySelectionTypes[] = [
    { name: "Mindfulness", bgColor: "#FFEBCC", imgSrc: "/mindfulness.jpg" },
    { name: "Leadership", bgColor: "#E0F7FA", imgSrc: "/leadership.jpg" },
    { name: "Motivation", bgColor: "#FCE4EC", imgSrc: "/motivation.jpg" },
    { name: "Health", bgColor: "#FFF9C4", imgSrc: "/health.jpg" },
    { name: "Emotional IQ", bgColor: "#D1C4E9", imgSrc: "/emotional-iq.jpg" },
    {
      name: "Financial Freedom",
      bgColor: "#C8E6C9",
      imgSrc: "/financial-freedom.jpg",
    },
    { name: "Journaling", bgColor: "#FFE0B2", imgSrc: "/journaling.jpg" },
  ];
  return (
    <div className="w-[100%] mx-auto px-2 mb-8 space-x-4 xl:flex xl:flex-row flex-col gap-y-6 xl:justify-center items-center border-b-2 py-1 text-gray-900 font-semibold font-inter text-[11px] grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
      <button
        onClick={() => onSelectCategory(null)}
        className={`xl:ml-4 xl:px-4 xl:py-2 2xl:py-3 2xl:text-[17px] 2xl:px-7 py-1 px-0 rounded-md ${
          activeCategory ? "" : "active-button"
        }`}
        style={{ backgroundColor: "#E0E0E0" }}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onSelectCategory(category.name)}
          className={` flex items-center xl:px-4 xl:py-2 2xl:py-3 2xl:px-7 py-1 px-2 whitespace-nowrap xl:text-[11px] 2xl:text-[17px] rounded-md mr-4`}
          style={{
            backgroundColor: category.bgColor,
          }}
        >
          <Image
            src={category.imgSrc}
            alt={category.name}
            height={20}
            width={20}
            className="w-5 h-5 2xl:h-8 2xl:w-8 rounded-full mr-2"
          />
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;
