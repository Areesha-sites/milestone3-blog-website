import React from "react";
import { RxCross1 } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { SignupCardPropTypes } from "../../../types/componentTypes";
const SignupCard = ({ isOpen, onClose }: SignupCardPropTypes) => {
  return (
    <>
      <section
        className={`fixed top-0 left-0 h-full w-full z-50 flex justify-center items-center ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center justify-center px-4 py-6 mx-auto h-auto lg:py-0">
          <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[30rem] bg-black z-50 rounded-lg shadow dark:border md:mt-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end items-center">
              <RxCross1
                className="text-white h-5 w-5 m-2 cursor-pointer"
                onClick={onClose}
              />
            </div>
            <div className="p-4 space-y-3 md:space-y-4 sm:p-6">
              <h1 className="text-[12px] font-semibold tracking-tight text-gray-200 dark:text-white">
                Sign Up to Get Started
              </h1>
              <form className="space-y-3 md:space-y-4" action="#">
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-1 text-[10px] font-medium text-gray-200 dark:text-white"
                  >
                    Enter Your Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2 text-[10px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-[10px] font-medium text-gray-200 dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2 text-[10px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-2">
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="password"
                      className="block mb-1 text-[10px] font-medium text-gray-200 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2 text-[10px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
                      required
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="confirm-password"
                      className="block mb-1 text-[10px] font-medium text-gray-200 dark:text-white"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2 text-[10px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <input
                      id="remember"
                      type="checkbox"
                      className="w-3 h-3 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:ring-offset-gray-800"
                      required
                    />
                    <label
                      htmlFor="remember"
                      className="ml-2 text-[10px] text-gray-400 dark:text-gray-300"
                    >
                      I agree to the{" "}
                      <span className="text-gray-200 hover:underline cursor-pointer">
                        Terms and Conditions
                      </span>
                    </label>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="border-[0.5px] opacity-30 w-[40%] border-gray-300"></span>
                  <span className="text-white text-[12px]">or</span>
                  <span className="border-[0.5px] opacity-30 w-[40%] border-gray-300"></span>
                </div>
                <div className="flex justify-center items-center cursor-pointer">
                  <span className="flex border-gray-600 text-white py-2 px-3 text-[10px]">
                    <FcGoogle className="h-4 w-4 mr-1" /> Continue With Google
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-slate-700 hover:bg-slate-600 font-medium rounded-md text-[10px] px-4 py-2"
                >
                  Sign in
                </button>
                <p className="text-[10px] text-gray-400 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="/modal"
                    className="text-gray-200 hover:underline dark:text-primary-500"
                  >
                    Log in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupCard;
