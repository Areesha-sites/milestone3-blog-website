import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import Faqs from "../components/Faqs";
import ContactCardSliderItems from "../components/ContactCardSliderItems";
const Contact = () => {
  return (
    <div>
      <div className="xl:pt-32 pt-[100px] md:pt-[120px] bg-slate-100 text-center text-gray-600 px-4 ">
        <div className="flex justify-center items-center md:w-[88%] w-[95%] mx-auto  flex-col gap-y-4">
          <h1 className="text-[30px] md:text-[40px] leading-[38px] xl:text-[43zdpx] lg:text-[42px] font-anton  tracking-wide ">
            We Would Love to Hear{" "}
            <span className="text-hoverTextColor">From</span> You!
          </h1>
          <p className="xl:text-[14px] lg:text-[15px] 2xl:text-[17px] md:text-[14px] text-[13px] text-gray-600 font-inter xl:w-[700px]">
            Got a question, an idea, or just want to say hello? We're here to
            listen! Drop us a message using the form below and let's start a
            conversation.
          </p>

          <div className="flex justify-center items-center gap-x-6 mt-6">
            <Link href="/" className="hover:text-hoverTextColor">
              <FaFacebook className="xl:h-[27px] xl:w-[27px] h-[25px] w-[25px] md:h-[28px] md:w-[28px] 2xl:h-[35px] 2xl:w-[35px]" />
            </Link>
            <Link href="/" className="hover:text-hoverTextColor">
              <AiFillInstagram className="xl:h-[29px] xl:w-[29px] h-[27px] w-[27px] md:h-[28px] md:w-[28px] 2xl:h-[40px] 2xl:w-[40px]" />
            </Link>
            <Link href="/" className="hover:text-hoverTextColor">
              <FaTwitter className="xl:h-[27px] xl:w-[27px] h-[25px] w-[25px] md:h-[28px] md:w-[28px] 2xl:h-[35px] 2xl:w-[35px]" />
            </Link>
          </div>
          <div className="p-4 mx-auto md:max-w-[88%] max-w-[100%] shadow-lg  font-inter">
            <form className="mt-8 space-y-4">
              <input
                type="text"
                required
                placeholder="Name"
                className="w-full rounded-md xl:py-[8px] py-[6px] px-4 text-gray-900 bg-gray-300 focus:bg-gray-300 xl:text-[14px] md:text-[15px] text-[13px] outline-none 2xl:text-[18px]"
              />
              <input
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-md xl:py-[8px]  py-[6px] px-4 text-gray-900 bg-gray-300 focus:bg-gray-300 xl:text-[14px]   md:text-[15px] text-[13px] outline-none 2xl:text-[18px]"
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="w-full rounded-md xl:py-[8px]  py-[6px] px-4 text-gray-900 bg-gray-300 focus:bg-gray-300 xl:text-[14px]  md:text-[15px] text-[13px] outline-none 2xl:text-[18px]"
              />
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full rounded-md xl:py-[8px]  py-[6px] px-4 text-gray-900 bg-gray-300 focus:bg-gray-300 xl:text-[14px]  md:text-[15px] text-[13px] outline-none 2xl:text-[18px]"
              ></textarea>

              <div className="">
                <h6 className="md:text-[21px] text-[17px] xl:text-[21px] font-inter font-semibold text-gray-700 text-left">
                  Select Category
                </h6>
                <div className="flex lg:flex-row flex-col xl:gap-8 gap-5  mt-4 md:overflow-hidden">
                  <div className="flex items-center">
                    <input
                      id="radio1"
                      type="radio"
                      name="value1"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="radio1"
                      className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white md:w-4 md:h-4 h-4 w-4 cursor-pointer border-2 border-gray-600 rounded-full overflow-hidden"
                    >
                      <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                    </label>
                    <p className="xl:text-[13px] text-[13px] 2xl:text-[15px] text-gray-500 whitespace-nowrap ml-2">
                      Lunch
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="radio2"
                      type="radio"
                      name="value1"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="radio2"
                      className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white md:w-4 md:h-4 h-4 w-4  cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden"
                    >
                      <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                    </label>
                    <p className="xl:text-[13px] text-[13px] 2xl:text-[15px]  text-gray-500 whitespace-nowrap ml-2">
                      Healthy Breakfast
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="radio3"
                      type="radio"
                      name="value1"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="radio3"
                      className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white md:w-4 md:h-4 h-4 w-4  cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden"
                    >
                      <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                    </label>
                    <p className="xl:text-[13px] text-[13px] 2xl:text-[15px]  text-gray-500 whitespace-nowrap ml-2">
                      Vegetarian Food
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="radio4"
                      type="radio"
                      name="value1"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="radio4"
                      className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white md:w-4 md:h-4 h-4 w-4  cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden"
                    >
                      <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                    </label>
                    <p className="xl:text-[13px] text-[13px] 2xl:text-[15px]  text-gray-500 xl:whitespace-nowrap ml-2">
                      Quick Meals
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="radio5"
                      type="radio"
                      name="value1"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="radio5"
                      className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white md:w-4 md:h-4 h-4 w-4  cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden"
                    >
                      <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                    </label>
                    <p className="xl:text-[13px] text-[13px] 2xl:text-[15px]  text-gray-500 xl:whitespace-nowrap ml-2">
                      Beverages
                    </p>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="radio5"
                      type="radio"
                      name="value1"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="radio5"
                      className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white md:w-4 md:h-4 h-4 w-4  cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden"
                    >
                      <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                    </label>
                    <p className="xl:text-[13px] text-[13px] 2xl:text-[15px]  text-gray-500 xl:whitespace-nowrap ml-2">
                      Snacks
                    </p>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="radio5"
                      type="radio"
                      name="value1"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="radio5"
                      className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white md:w-4 md:h-4 h-4 w-4  cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden"
                    >
                      <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                    </label>
                    <p className="xl:text-[13px] text-[13px] 2xl:text-[15px]  text-gray-500 xl:whitespace-nowrap ml-2">
                      Healthy Food
                    </p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="text-white bg-hoverTextColor hover:bg-textColor tracking-wide rounded-md xl:text-[16px] md:text-[16px] px-4 xl:py-[7px] py-[6px] text-[15px] w-full"
              >
                Send
              </button>
            </form>
          </div>
          <div className="">
            <div className="bg-gray-100 xl:py-12 md:py-5">
              <div className="max-w-[88%] mx-auto px-4 sm:px-6 ">
                <div className="lg:text-center">
                  <p className="mt-2 xl:text-[39px] lg:text-[40px] md:text-[38px] text-[34px] font-anton leading-8 font-semibold tracking-wider text-gray-600 ">
                    About <span className="text-hoverTextColor"> Us</span>
                  </p>
                </div>

                <div className="mt-10 w-[100%] mx-auto">
                  <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-[3rem] xl:gap-x-[8rem] md:gap-y-10">
                    <div className="flex">
                      <div>
                        <div className="flex items-center justify-center xl:h-[37px] xl:w-[37px] 2xl:h-[42px] 2xl:w-[42px] h-[37px] w-[37px] rounded-md bg-hoverTextColor text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className=" h-6 w-6"
                          >
                            <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4 mt-[-4px] md:mt-0 ">
                        <p className="xl:text-[18px] text-[16px] 2xl:text-[23px] font-inter font-semibold leading-6 text-gray-900 opacity-70">
                          Address
                        </p>
                        <p className="xl:text-[13px] text-[12px] 2xl:text-[14px]  text-gray-500 whitespace-nowrap">
                          Gourmet Street, Flavor Town, Pakistan
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center xl:h-[37px] xl:w-[37px]  h-[35px] w-[35px] 2xl:h-[42px] 2xl:w-[42px]   rounded-md bg-hoverTextColor text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className=" h-6 w-6"
                          >
                            <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4 mt-[-4px] md:mt-0 ">
                        <p className="xl:text-[18px]  text-[15px] 2xl:text-[24px] font-inter font-semibold leading-6 text-gray-900 opacity-70 whitespace-nowrap">
                          Phone number
                        </p>
                        <p className="xl:text-[13px] 2xl:text-[14px] text-[12px] text-gray-500 ">
                          (123) 456-7890
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center xl:h-[37px] xl:w-[37px]  h-[37px] w-[37px]  2xl:h-[42px] 2xl:w-[42px]  rounded-md bg-hoverTextColor text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className=" h-6 w-6"
                          >
                            <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4 mt-[-4px] m  md:-mt-1">
                        <p className="xl:text-[18px] text-[16px] 2xl:text-[24px] font-inter font-semibold leading-6 text-gray-900 opacity-70">
                          Email
                        </p>
                        <p className="xl:text-[13px] text-[12px] 2xl:text-[14px]  text-gray-500 ">
                          flavorfusion@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faqs />
      <div className="bg-slate-100 py-5 px-4">
        <p className="text-center xl:text-[15px] text-[12px] text-gray-600 font-inter font-medium">
          {" "}
          <span className="font-bold text-gray-800 ">Note:</span> Did not find
          what you are looking for? Feel free to contact us directly!
        </p>
      </div>
    </div>
  );
};

export default Contact;
