"use client";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";
import { PeoplePropTypes } from "../../../types/componentTypes";
const people: PeoplePropTypes[] = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "/team1.jpg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
    "/team2.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
    "/team3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
    "/team4.jpg",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Web Developer",
    image:
    "/team5.jpg",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
    "/team6.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
