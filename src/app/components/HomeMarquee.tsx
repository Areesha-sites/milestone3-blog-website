import React from "react";
import Marquee from "react-fast-marquee";
const HomeMarquee = () => {
  return (
    <>
      <div className="w-full xl:py-10 py-10 mt-16 rounded-tl-3xl rounded-tr-3xl bg-black text-white flex items-center justify-center 2xl:py-14">
        <div className="w-full border-t-[2px] border-b-[2px] border-neutral-200 tracking-wider ">
          <Marquee speed={150}>
            <span
              className=" xl:text-[130px] 2xl:text-[160px] text-[80px] md:text-[90px] font-extrabold tracking-wide"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                marginRight: "40px",
              }}
            >
              {" "}
              Discover Delicious Recipes and Tips for a Healthy Lifestyle!
            </span>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default HomeMarquee;
