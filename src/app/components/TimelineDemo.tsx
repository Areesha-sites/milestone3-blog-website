import React from "react";
import Timeline from "./Timeline";
export function TimelineDemo() {
  const data = [
    {
      title: "Early  2023",
      content: (
        <div>
          <p className="text-gray-500 uppercase dark:text-neutral-300 font-inter font-bold text-[14px]  mt-5 mb-5 xl:text-[18px]">
            2. The Turning Point : Why I Started Blogging.
          </p>

          <p className=" text-gray-500  xl:text-[15px] text-[12px] italic xl:mt-7 underline ">
            The desire to share my thoughts and help others made me take the
            leap.
          </p>
          <p className=" xl:text-[15px] text-[12px] text-gray-500 w-[90%] mx-auto xl:mt-5 mt-2">
            There was a time in my life when I felt there weren&apos;t enough
            platforms that addressed topics I was passionate about — [insert
            your niche, e.g., personal growth, lifestyle, or technology]. I
            wanted to create a space where readers could find relatable stories,
            actionable tips, and inspiration.
            <br />
            <br />
            Starting this blog was a big decision. I didnt&apos; know how to
            code, and I wasn&apos;t sure if anyone would even read my posts. But
            I decided to take a chance, and that&apos;s when everything changed.
          </p>
          <div className="flex justify-center items-center mt-5 ">
            <img
              src="/laptop.jpg"
              alt="laptop"
              className="xl:h-[250px] xl:w-[400px] h-[150px] w-[180px] md:h-[200px] md:w-[250px] rounded-2xl shadow-xl cursor-pointer"
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
            3. My Vision: Inspiring Readers Across the Globe.
          </p>
          <p className=" text-gray-500 italic text-[12px] xl:text-[15px] mt-3 underline ">
            This blog isn&apos;t just about me - it&apos;s about all of us.
          </p>
          <p className=" xl:text-[15px] text-[12px] text-gray-500 xl:w-[90%] mx-auto mt-5">
            My mission is to create content that inspires, educates, and
            empowers readers. Whether you&apos;re here to find a solution, learn
            something new, or simply enjoy a good story, this blog is your
            space.
            <br />
            <br />
            In the future, I aim to expand my content, explore more diverse
            topics, and collaborate with like-minded individuals to bring even
            more value to my readers.
          </p>
          <div className="flex justify-center items-center mt-5 ">
            <img
              src="/vision.jpg"
              alt=""
              className="xl:h-[250px] xl:w-[400px] h-[150px] w-[180px] md:h-[200px] md:w-[250px] rounded-2xl shadow-xl cursor-pointer"
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
            4.The Milestones : Small Wins That Kept Me Going.
          </p>
          <p className=" text-gray-500 text-[12px] italic xl:text-[15px] mt-3 underline ">
            Every milestone was a step closer to my dream
          </p>
          <p className=" xl:text-[15px] text-[12px] text-gray-500 w-[90%] mx-auto mt-5">
            Over time, this blog started to gain traction. From getting my first
            comment to crossing [number] of readers, every milestone made me
            believe in this journey even more.
           
          </p>
         
          <div className="flex justify-center items-center mt-5 ">
            <img
              src="/like.jpg"
              alt="like-image"
              className="xl:h-[250px] xl:w-[300px]  h-[150px] w-[180px] md:h-[200px] md:w-[250px]   rounded-2xl shadow-xl cursor-pointer"
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
