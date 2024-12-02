"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { HiXMark } from "react-icons/hi2";
import Modal from "./Modal";
import SignupCard from "./SignupCard";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const openModel = () => {
    setIsModelOpen(true);
  };
  const closeModel = () => {
    setIsModelOpen(false);
  };
  const openSignupModal = () => {
    setIsSignup(true);
  };
  const closeSignupModal = () => {
    setIsSignup(false);
  };
  const navLinks = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];
  return (
    <>
      <header className="bg-black text-white fixed left-0 top-0 right-0 z-50">
        <nav className="px-4 py-4 max-w-[100rem] mx-auto flex justify-between items-center">
          <div className="text-[18px] md:text-[1.5rem] italic flex font-medium items-center">
            <span className="md:text-[2rem] text-[1.5rem] font-bold text-orange-500">A</span>spire
            <span className="md:text-[2rem] text-[1.5rem] font-bold text-orange-500">H</span>ub
          </div>
          <ul className="lg:flex lg:gap-[18px] xl:gap-7 text-lg hidden mt-[10px]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="mr-4 xl:text-[17px] 2xl:text-[21px] text-[16px] flex hover:font-semibold text-white font-[500] hover:text-orange-500 w-fit items-center after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-500 after:w-full after:scale-x-0 after:hover:scale-100 after:transition after:duration-300 after:origin-right relative after:bottom-[-1px]"
                >
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-white lg:flex gap-4 items-center hidden">
            <Link href="/" className="hover:text-orange-500">
              <FaFacebook className="xl:h-[23px] xl:w-[23px] h-[20px] w-[20px] 2xl:h-[27px] 2xl:w-[27px]" />
            </Link>
            <Link href="/" className="hover:text-orange-500">
              <AiFillInstagram className="xl:h-[23px] xl:w-[23px] h-[20px] w-[20px] 2xl:h-[27px] 2xl:w-[27px]" />
            </Link>
            <Link href="/" className="hover:text-orange-500">
              <FaTwitter className="xl:h-[23px] xl:w-[23px] h-[20px] w-[20px] 2xl:h-[27px] 2xl:w-[27px]" />
            </Link>
            <button
              onClick={openModel}
              className="rounded-md bg-orange-500 py-1 px-2 xl:py-1  xl:px-4 border border-transparent text-center xl:text-[16px] text-[14px]  2xl:text-[19px] text-white transition-all font-semibold shadow-md hover:shadow-lg focus:bg-orange-500 focus:shadow-none active:bg-orange-500 hover:bg-orange-600"
            >
              Log in
            </button>
            <button
              onClick={openSignupModal}
              className="rounded-md bg-orange-500 py-1 px-2 xl:py-1  xl:px-4 border border-transparent text-center xl:text-[16px] text-[14px] 2xl:text-[19px] text-white transition-all font-semibold shadow-md hover:shadow-lg focus:bg-orange-500 focus:shadow-none active:bg-orange-500 hover:bg-orange-600"
            >
              Sign In
            </button>
          </div>
          <Modal isOpen={isModelOpen} onClose={closeModel} />
          <SignupCard isOpen={isSignup} onClose={closeSignupModal} />
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="cursor-pointer">
              {isMenuOpen ? (
                <HiXMark className="h-5 w-5 text-white" />
              ) : (
                <FiMenu className="h-5 w-5 text-white" />
              )}
            </button>
          </div>
        </nav>
        <ul
          className={`lg:hidden gap-7 text-lg block space-y-2 px-4 py-6 mt-14 bg-black  ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-200"
              : "hidden"
          }`}
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                onClick={toggleMenu}
                href={link.path}
                className="mr-4 text-[15px] hover:font-semibold text-white font-[500] hover:text-orange-500 w-fit flex items-center gap-2"
              >
                {link.link}
              </Link>
            </li>
          ))}
          <div className="text-white flex gap-4 items-center lg:hidden">
            <Link href="/" className="hover:text-orange-500">
              <FaFacebook className="h-[20px] w-[20px]" />
            </Link>
            <Link href="/" className="hover:text-orange-500">
              <AiFillInstagram className="h-[20px] w-[20px]" />
            </Link>
            <Link href="/" className="hover:text-orange-500">
              <FaTwitter className="h-[20px] w-[20px]" />
            </Link>
            <button
              onClick={openModel}
              className="rounded-md bg-orange-500 py-0 px-3 border border-transparent text-center text-[15px] text-white transition-all font-semibold shadow-md hover:shadow-lg focus:bg-orange-500 focus:shadow-none active:bg-orange-500 hover:bg-orange-600"
            >
              Log in
            </button>
            <button
              onClick={openSignupModal}
              className="rounded-md bg-orange-500 py-0 px-3 border border-transparent text-center text-[15px] text-white transition-all font-semibold shadow-md hover:shadow-lg focus:bg-orange-500 focus:shadow-none active:bg-orange-500 hover:bg-orange-600"
            >
              Sign In
            </button>
          </div>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
