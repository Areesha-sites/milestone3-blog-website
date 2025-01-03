import React from "react";
import Image from "next/image";
const FooterBanner = () => {
  return (
    <>
      <section className="bg-[#4D4D4D] md:h-[450px] lg:h-[400px] h-[550px] w-full mx-auto text-white flex justify-center items-center md:flex-row flex-col">
        <div className="flex justify-center lg:gap-[30px] items-center lg:flex-row flex-col gap-y-[10px]">
          <Image
            src="/footer-banner.png"
            alt="footer-image"
            height={330}
            width={450}
            quality={90}
            priority
            className="lg:h-[330px] lg:w-[450px] w-full sm:w-[400px] h-[200px] object-cover"
          />
          <div className="flex justify-center items-center flex-col gap-y-[10px]">
            <p className="md:text-[20px] text-[14px] font-bebasNeue text-bgbuttonColor">
              Yet It Now
            </p>
            <p className="md:text-[25px] text-[18px] text-white font-inter font-bold">
              Pinch of Yum Cookbook
            </p>
            <p className="text-white font-normal font-sans md:text-[15px] px-6 text-[12px] lg:w-[400px] text-center w-full">
              The eBook includes our most popular 25 recipes in a beautiful,
              easy to download format. Enter your email and we will send it
              right over!
            </p>
            <div className="flex justify-start gap-[10px] md:flex-row flex-col">
              <input
                type="text"
                placeholder="First Name"
                className="bg-white text-[12px] md:text-[14px] w-[200px] h-[40px] px-4 py-2 text-black/50 font-lato border-none outline-none"
              />
              <input
                type="mail"
                placeholder="Email"
                className="bg-white text-[12px] md:text-[14px] w-[200px] h-[40px] px-4 py-2 text-black/50 font-lato border-none outline-none"
              />
              <button className="bg-bgbuttonColor md:w-[40px] md:h-[40px] w-full h-[30px] flex justify-center items-center text-[18px] font-sans text-white font-bold hover:bg-bgButtonHover ">
                Go
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterBanner;
