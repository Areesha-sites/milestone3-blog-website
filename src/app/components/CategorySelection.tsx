import React from "react";
import { CategorySelectionTypes } from "../../../types/componentTypes";
import { CategorySelectionPropTypes } from "../../../types/componentTypes";
import Image from "next/image";
const CategorySelection = ({
  onSelectCategory,
  activeCategory,
}: CategorySelectionPropTypes) => {
  const categories: CategorySelectionTypes[] = [
    { name: "All", bgColor: "#E0E0E0", imgSrc: "/category8.jpg" },
    { name: "Lunch", bgColor: "#FFEBCC", imgSrc: "/category7.jpg" },
    { name: "Breakfast", bgColor: "#E0F7FA", imgSrc: "/category6.jpg" },
    { name: "Beverages", bgColor: "#FCE4EC", imgSrc: "/category5.jpg" },
    { name: "Vegetarian", bgColor: "#FFF9C4", imgSrc: "/category4.jpg" },
    { name: "Snacks", bgColor: "#D1C4E9", imgSrc: "/category3.jpg" },
    {
      name: "Quick Meals",
      bgColor: "#C8E6C9",
      imgSrc: "/category2.jpg",
    },
    { name: "Healthy Food", bgColor: "#FFE0B2", imgSrc: "/category1.jpg" },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center py-4">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() =>
            onSelectCategory(category.name === "All" ? null : category.name)
          }
          className={`flex items-center px-4 py-2 rounded-md text-[12px] ${
            activeCategory === category.name ? "active-button" : ""
          }`}
          style={{
            backgroundColor: category.bgColor,
          }}
        >
          <Image
            src={category.imgSrc}
            alt={category.name}
            height={20}
            width={20}
            className="w-5 h-5 rounded-full mr-2"
          />
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;
