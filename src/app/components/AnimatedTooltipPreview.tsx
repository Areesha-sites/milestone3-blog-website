"use client";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";
import { PeoplePropTypes } from "../../../types/componentTypes";

const people: PeoplePropTypes[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Head Chef & Recipe Developer",
    image: "/team1.jpg",
  },
  {
    id: 2,
    name: "Robert Green",
    designation: "Food Photographer",
    image: "/team2.jpg",
  },
  {
    id: 3,
    name: "Emily Lee",
    designation: "Culinary Content Writer",
    image: "/team3.jpg",
  },
  {
    id: 4,
    name: "David Brown",
    designation: "Nutrition Expert & Blogger",
    image: "/team4.jpg",
  },
  {
    id: 5,
    name: "Tyler Simmons",
    designation: "Recipe Tester & Reviewer",
    image: "/team5.jpg",
  },
  {
    id: 6,
    name: "Mia Williams",
    designation: "Food Styling & Creative Director",
    image: "/team6.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
