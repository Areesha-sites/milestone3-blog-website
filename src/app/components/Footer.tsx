import React from "react";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FooterLinksTypes } from "../../../types/componentTypes";
import { FooterSocialIconsTypes } from "../../../types/componentTypes";
const Footer = () => {
  const footerCategoryLinks: FooterLinksTypes[] = [
    {
      path: "/",
      name: "News",
    },
    {
      path: "/",
      name: "World",
    },
    {
      path: "/",
      name: "Games",
    },
    {
      path: "/",
      name: "  References",
    },
  ];
  const footerApplesLinks: FooterLinksTypes[] = [
    {
      path: "/",
      name: "Web",
    },
    {
      path: "/",
      name: "E-commerce",
    },
    {
      path: "/",
      name: "Business",
    },
    {
      path: "/",
      name: "Entertainment",
    },
    {
      path: "/",
      name: "Portfolio",
    },
  ];
  const footerCherryLinks: FooterLinksTypes[] = [
    {
      path: "/",
      name: "Media",
    },
    {
      path: "/",
      name: "Brochure",
    },
    {
      path: "/",
      name: "Nonprofite",
    },
    {
      path: "/",
      name: "Education",
    },
    {
      path: "/",
      name: "Projects",
    },
  ];
  const footerSocialIcons: FooterSocialIconsTypes[] = [
    {
      adrress: "/",
      icons: <FaTwitter className="xl:h-6 xl:w-6 h-6 w-6 " />,
    },
    {
      adrress: "/",
      icons: <AiFillInstagram className="xl:h-6 xl:w-6 h-6 w-6" />,
    },
    {
      adrress: "/",
      icons: <FaFacebook className="xl:h-5 xl:w-5 h-5 w-5" />,
    },
    {
      adrress: "/",
      icons: <AiFillLinkedin className="xl:h-6 xl:w-6 h-6 w-6" />,
    },
  ];
  return (
    <>
      <div className="bg-slate-100 ">
        <div className="px-4 xl:pt-9 pt-6 xl:mx-[8.5%] mx-[3%]  sm:max-w-xl md:max-w-full lg:max-w-screen-auto md:px-24 lg:px-4">
          <div className="flex items-start justify-start mb-8">
            <div className="text-[18px] md:text-[1.5rem] italic flex font-bold items-center">
              <p className="text-hoverTextColor">
                <span className="text-bgbuttonColor">F</span>lavor
                <span className="text-bgbuttonColor">F</span>usion
              </p>
            </div>
          </div>
          <div className=" grid mb-8 lg:grid-cols-6">
            <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
              <div className="">
                <p className="font-medium xl:text-[17px] text-[17px] 2xl:text-[19px] tracking-wide text-black/80">
                  Category
                </p>
                <ul className="mt-2 xl:space-y-1 space-y-1">
                  {footerCategoryLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        key={index}
                        href={link.path}
                        className="text-black/65 text-[11px] xl:text-[12px] 2xl:text-[16px] transition-colors duration-300 hover:text-hoverTextColor"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <p className="font-medium tracking-wide xl:text-[17px] 2xl:text-[19px] text-[17px] text-black/80">
                  Apples
                </p>

                <ul className="mt-2 xl:space-y-1 space-y-1">
                  {footerApplesLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        key={index}
                        href={link.path}
                        className="text-black/65 text-[11px] xl:text-[12px] 2xl:text-[16px] transition-colors duration-300 hover:text-hoverTextColor"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <p className="font-medium xl:text-[17px] text-[17px] 2xl:text-[19px] tracking-wide text-black/80 ">
                  Cherry
                </p>
                <ul className="mt-2 xl:space-y-1 space-y-1">
                  {footerCherryLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        key={index}
                        href={link.path}
                        className="text-black/65 text-[11px] xl:text-[12px] 2xl:text-[16px] transition-colors duration-300 hover:text-hoverTextColor"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="xl:w-[550px] lg:w-[490px] md:w-[500px] mx-auto md:h-[150px] h-[300px] bg-textColor relative lg:left-[-170px] flex justify-center items-center px-3 py-2 flex-col mt-6 w-full">
              <div className="flex justify-center gap-[7px] items-center">
                <span className="md:text-[18px] text-[16px] font-light text-bgbuttonColor uppercase font-anton text-center">
                  signup
                </span>
                <p className="md:text-[20px] text-[18px] font-bold text-white font-sans uppercase">
                  for Email Updates
                </p>
              </div>
              <p className="text-white/70 font-sans font-normal italic text-[12px] md:text-[14px]">
                Get a Free eCookbook with our top 25 recipes
              </p>
              <div className="flex justify-start md:flex-row flex-col gap-[10px] mt-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-white text-[14px] w-[200px] h-[40px] px-4 py-2 text-black/50 font-lato border-none outline-none"
                />
                <input
                  type="mail"
                  placeholder="Email"
                  className="bg-white text-[14px] w-[200px] h-[40px] px-4 py-2 text-black/50 font-lato border-none outline-none"
                />
                <button className="bg-bgbuttonColor md:w-[40px] w-full h-[40px] flex justify-center items-center text-[18px] font-sans text-white font-bold hover:bg-bgButtonHover">
                  Go
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-black/30 sm:flex-row ">
            <p className="text-gray-500 text-[13px] 2xl:text-[15px]">
              ©Copyright 2024 | All right Reserved.
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              {footerSocialIcons.map((link, index) => (
                <Link
                  key={index}
                  className="text-gray-500 transition-all duration-300 hover:text-hoverTextColor"
                  href={link.adrress}
                >
                  {link.icons}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
