"use client";
import React from "react";
import Timeline from "./Timeline";
import Image from "next/image";
export function TimelineDemo() {
  const data = [
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-gray-500 uppercase dark:text-neutral-300 font-inter font-bold text-[14px] mt-5 mb-5 xl:text-[18px]">
            2. The Spark: How I Fell in Love with Cooking.
          </p>

          <p className=" text-gray-500 xl:text-[15px] text-[12px] italic xl:mt-7 underline ">
            My kitchen became my sanctuary, and I wanted to share the magic with
            you.
          </p>
          <p className=" xl:text-[15px] text-[12px] text-gray-500 w-[90%] mx-auto xl:mt-5 mt-2">
            My love for food has always been deep-rooted, but it was in early
            2023 that I realized I could share my passion with the world. I
            wanted to create a space where food lovers could discover new
            recipes, try simple yet delicious meals, and dive into the flavors
            that bring people together.
            <br />
            <br />
            Starting this blog was not easy I was unsure if people would connect
            with my recipes. But one click at a time, I decided to put my
            creations out there. And that is when the culinary journey began.
          </p>
          <div className="flex justify-center items-center mt-5 ">
            <Image
              src="/kitchen.jpg"
              alt="kitchen"
              height={300}
              width={300}
              className="xl:h-[250px] xl:w-[400px] h-[150px] w-[180px] md:h-[200px] md:w-[250px] rounded-2xl shadow-xl cursor-pointer object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: "End of 2023",
      content: (
        <div>
          <p className="text-gray-500 uppercase dark:text-neutral-300 font-inter font-bold text-[14px] mt-5 xl:mb-5 xl:text-[18px]">
            3. The Vision: Bringing Flavors to Every Home.
          </p>
          <p className=" text-gray-500 italic text-[12px] xl:text-[15px] mt-3 underline ">
            Food is love. Let is make every meal unforgettable.
          </p>
          <p className=" xl:text-[15px] text-[12px] text-gray-500 xl:w-[90%] mx-auto mt-5">
            The blog grew beyond just recipes it became a place of inspiration.
            My vision was clear: to bring easy-to-make, flavorful dishes that
            anyone could recreate in their own kitchen. I wanted to show that
            cooking could be fun, simple, and accessible to all.
            <br />
            <br />
            Looking ahead, my goal is to feature even more diverse cuisines,
            bring in guest chefs, and share cooking tips to elevate every dish.
            This journey is just beginning!
          </p>
          <div className="flex justify-center items-center mt-5 ">
            <Image
              src="/recipe-vision.jpg"
              alt="vision"
              height={300}
              width={300}
              className="xl:h-[250px] xl:w-[400px] h-[150px] w-[180px] md:h-[200px] md:w-[250px] rounded-2xl shadow-xl cursor-pointer object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-gray-500 uppercase dark:text-neutral-300 font-inter xl:text-[18px] font-bold mt-5 xl:mb-5 text-[14px]">
            4. The Journey Continues: From Kitchen to Blog Stardom!
          </p>
          <p className=" text-gray-500 text-[12px] italic xl:text-[15px] mt-3 underline ">
            Every dish is a milestone. Each flavor brings us closer to
            perfection.
          </p>
          <p className=" xl:text-[15px] text-[12px] text-gray-500 w-[90%] mx-auto mt-5">
            As the blog grew, so did my confidence. From sharing family
            favorites to creating original dishes, it was amazing to see how the
            recipes resonated with readers. Each milestone from the first blog
            post to reaching thousands of hungry food lovers reaffirmed my
            belief in this journey.
          </p>
          <div className="flex justify-center items-center mt-5 ">
            <Image
              src="/about2.jpg"
              alt="milestone"
              height={300}
              width={300}
              className="xl:h-[250px] xl:w-[300px] h-[150px] w-[180px] md:h-[200px] md:w-[250px] rounded-2xl shadow-xl cursor-pointer object-cover"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
