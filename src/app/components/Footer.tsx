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
  const footerBussinessLinks: FooterLinksTypes[] = [
    {
      path: "/",
      name: "Infopreneur",
    },
    {
      path: "/",
      name: "Personal",
    },
    {
      path: "/",
      name: "Wiki",
    },
    {
      path: "/",
      name: "Forum",
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
      <div className="bg-black">
        <div className="px-4 xl:pt-9 pt-6 xl:mx-[8.5%] mx-[3%]  sm:max-w-xl md:max-w-full lg:max-w-screen-auto md:px-24 lg:px-4">
          <div className="flex items-start justify-start mb-8">
            <div className="text-[18px] md:text-[1.5rem] italic flex font-medium items-center text-white">
              <span className="md:text-[2rem] text-[1.5rem] font-bold text-orange-500">
                A
              </span>
              spire
              <span className="md:text-[2rem] text-[1.5rem] font-bold text-orange-500">
                H
              </span>
              ub
            </div>
          </div>
          <div className=" grid mb-8 lg:grid-cols-6">
            <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
              <div className="">
                <p className="font-medium xl:text-[17px] text-[17px] 2xl:text-[19px] tracking-wide text-gray-300 ">
                  Category
                </p>
                <ul className="mt-2 xl:space-y-1 space-y-1">
                  {footerCategoryLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        key={index}
                        href={link.path}
                        className="text-gray-500 text-[11px] xl:text-[12px] 2xl:text-[16px] transition-colors duration-300 hover:text-orange-500"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <p className="font-medium tracking-wide xl:text-[17px] 2xl:text-[19px] text-[17px] text-gray-300 ">
                  Apples
                </p>

                <ul className="mt-2 xl:space-y-1 space-y-1">
                  {footerApplesLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        key={index}
                        href={link.path}
                        className="text-gray-500 text-[11px] xl:text-[12px]  2xl:text-[16px] transition-colors duration-300 hover:text-orange-500"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <p className="font-medium xl:text-[17px] text-[17px] 2xl:text-[19px] tracking-wide text-gray-300 ">
                  Cherry
                </p>
                <ul className="mt-2 xl:space-y-1 space-y-1">
                  {footerCherryLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        key={index}
                        href={link.path}
                        className="text-gray-500 text-[11px] xl:text-[12px]  2xl:text-[16px] transition-colors duration-300 hover:text-orange-500"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <p className="font-medium xl:text-[17px] text-[17px] 2xl:text-[19px] tracking-wide text-gray-300 ">
                  Business
                </p>
                <ul className="mt-2 xl:space-y-1 space-y-1">
                  {footerBussinessLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        key={index}
                        href={link.path}
                        className="text-gray-500 text-[11px] xl:text-[12px]  2xl:text-[16px] transition-colors duration-300 hover:text-orange-500"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
              <p className="font-medium xl:text-[18px] 2xl:text-[23px] text-[17px] tracking-wide text-gray-300 ">
                Subscribe for updates
              </p>
              <form
                action=""
                className="xl:mt-4 mt-2 flex flex-col md:flex-row  "
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="flex-grow w-full xl:h-10 h-8 text-[12px] 2xl:text-[16px] 2xl:h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center xl:h-10 h-8 2xl:h-12 2xl:text-[16px] text-[14px] px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none border "
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-4 xl:text-[12px] text-[12px] 2xl:text-[16px] text-gray-500">
                Subscribe to our newsletter and join a community dedicated to
                personal growth and self-improvement. Be the first to receive
                motivational tips, exclusive self-help resources, and actionable
                advice directly in your inbox. Take the first step toward
                becoming the best version of yourself-sign up now!
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row ">
            <p className="text-gray-500 text-[13px] 2xl:text-[15px]">
              ©Copyright 2024 | All right Reserved.
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              {footerSocialIcons.map((link, index) => (
                <Link
                  key={index}
                  className="text-gray-500 transition-all duration-300 hover:text-orange-500"
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
