"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TestimonialTypes } from "../../../types/componentTypes";
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: TestimonialTypes[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };
  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const isActive = (index: number) => {
    return index === active;
  };
  useEffect(() => {
    if (autoplay) {
        const interval = setInterval(handleNext, 5000);
        return () => clearInterval(interval);
    }
}, [autoplay, handleNext]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="max-w-[320px] xl:max-w-6xl md:max-w-4xl  mx-auto antialiased font-inter px-4 md:px-8 lg:px-12 xl:py-20 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-9 xl:gap-0">
        <div>
          <div className="relative h-96 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index
                  }
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 -z-50 xl:left-[100px] left-0"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="xl:max-h-[50vh] max-h-[48vh] md:max-w-[50vh] lg:max-h-[60vh]  lg:max-w-xs w-full rounded-3xl object-cover shadow-2xl"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex xl:justify-center flex-col xl:mt-[-10%] xl:py-4 md:mt-[13%] mt-[-34%]">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="xl:text-[23px] md:text-[1.6rem] text-[18px] font-bold dark:text-white text-gray-600">
              {testimonials[active].name}
            </h3>
            <p className="xl:text-[13px] text-[10px]  text-gray-500 dark:text-neutral-500 ">
              {testimonials[active].designation}
            </p>
            <motion.p className="xl:text-[13px] text-[11px] text-gray-500 mt-2 xl:mt-4 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex justify-center gap-4 pt-3 ">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowLeft className="xl:h-6 xl:w-6 h-4 w-4 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowRight className="xl:h-6 xl:w-6 h-4 w-4 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
