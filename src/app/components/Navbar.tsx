"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { HiXMark } from "react-icons/hi2";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navLinks = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];
  return (
    <>
      <header
        className={`fixed left-0 top-[35px] right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav className="px-4 py-4 max-w-[100rem] mx-auto flex justify-between items-center">
          <div className="text-[18px] md:text-[1.5rem] italic flex font-bold items-center">
            <p className="text-hoverTextColor">
              <span className="text-bgbuttonColor">F</span>lavor
              <span className="text-bgbuttonColor">F</span>usion
            </p>
          </div>
          <ul className="md:flex lg:gap-[18px] xl:gap-7 text-lg hidden mt-[10px]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`mr-4 xl:text-[15px] md:text-[13px] 2xl:text-[21px] text-[16px] flex hover:font-semibold uppercase font-semibold w-fit items-center after:block after:content-[''] after:absolute after:h-[3px] after:w-full after:scale-x-0 after:hover:scale-100 after:transition after:duration-300 after:origin-right relative after:bottom-[-1px] ${
                    isScrolled
                      ? "text-white hover:text-hoverTextColor"
                      : "text-black/55 hover:text-hoverTextColor"
                  }`}
                >
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-gray-600 md:flex gap-4 items-center hidden">
            <Link
              href="/"
              className={`hover:text-hoverTextColor ${isScrolled ? "text-white" : "text-black/55"}`}
            >
              <FaFacebook className="xl:h-[23px] xl:w-[23px] h-[20px] w-[20px] 2xl:h-[27px] 2xl:w-[27px]" />
            </Link>
            <Link
              href="/"
              className={`hover:text-hoverTextColor ${isScrolled ? "text-white" : "text-black/55"}`}
            >
              <AiFillInstagram className="xl:h-[23px] xl:w-[23px] h-[20px] w-[20px] 2xl:h-[27px] 2xl:w-[27px]" />
            </Link>
            <Link
              href="/"
              className={`hover:text-hoverTextColor ${isScrolled ? "text-white" : "text-black/55"}`}
            >
              <FaTwitter className="xl:h-[23px] xl:w-[23px] h-[20px] w-[20px] 2xl:h-[27px] 2xl:w-[27px]" />
            </Link>
            <button className="rounded-md bg-hoverTextColor py-1 px-2 xl:py-1 xl:px-4 border border-transparent text-center xl:text-[16px] text-[14px] 2xl:text-[19px] text-white transition-all font-semibold shadow-md hover:shadow-lg focus:bg-hoverTextColor focus:shadow-none active:bg-hoverTextColor hover:bg-hoverTextColor">
              Log in
            </button>
            <button className="rounded-md bg-hoverTextColor py-1 px-2 xl:py-1 xl:px-4 border border-transparent text-center xl:text-[16px] text-[14px] 2xl:text-[19px] text-white transition-all font-semibold shadow-md hover:shadow-lg focus:bg-hoverTextColor focus:shadow-none active:bg-hoverTextColor hover:bg-hoverTextColor">
              Sign In
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="cursor-pointer z-50 relative"
            >
              {isMenuOpen ? (
                <HiXMark className="h-5 w-5 text-white" />
              ) : (
                <FiMenu className="h-5 w-5 text-black/70" />
              )}
            </button>
            <div
              className={`fixed top-0 left-0 h-screen w-[80%] bg-textColor bg-opacity-50 backdrop-blur-md shadow-lg z-40 transform transition-transform duration-500 ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-white"
              >
                <HiXMark className="h-6 w-6" />
              </button>
              <ul className="flex flex-col items-start gap-6 mt-16 px-6">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path}
                      className="text-white text-[16px] font-semibold hover:text-hoverTextColor"
                      onClick={toggleMenu}
                    >
                      {link.link}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-row items-start gap-4 mt-8 px-6">
                <button className="rounded-md bg-hoverTextColor py-2 px-4 text-center text-white text-sm font-semibold w-full">
                  Log in
                </button>
                <button className="rounded-md bg-hoverTextColor text-center py-2 px-4 text-white text-sm font-semibold w-full ">
                  Sign In
                </button>
              </div>
              <div className="flex gap-4 mt-8 px-6">
                <Link href="/" className="text-white hover:text-hoverTextColor">
                  <FaFacebook className="h-5 w-5" />
                </Link>
                <Link href="/" className="text-white hover:text-hoverTextColor">
                  <AiFillInstagram className="h-5 w-5" />
                </Link>
                <Link href="/" className="text-white hover:text-hoverTextColor">
                  <FaTwitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
