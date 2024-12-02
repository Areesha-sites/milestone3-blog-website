import React from "react";
import { RxCross1 } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { SignupCardPropTypes } from "../../../types/componentTypes";
const SignupCard = ({ isOpen, onClose }: SignupCardPropTypes) => {
  return (
    <>
      <section
        className={`fixed top-0 left-0 h-full w-full flex justify-center items-center ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center justify-center px-6 mx-auto h-auto lg:py-0 l:mt-24">
          <div className="bg-black w-[30rem] z-50 rounded-lg shadow dark:border sm:max-w-sm xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end items-center">
              <RxCross1
                className="text-white h-5 w-5 m-2 cursor-pointer"
                onClick={onClose}
              />
            </div>
            <div className="p-4 space-y-4 sm:p-6">
              <h1 className="text-[16px] font-bold text-gray-200 dark:text-white">
                Log in to your account
              </h1>
              <form className="space-y-3" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-[12px] font-medium text-gray-200 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 text-[12px] block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-1 text-[12px] font-medium text-gray-200 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 text-[12px] block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-4">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-2 text-[12px]">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-[12px] font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <span className="border-[0.5px] opacity-30 w-[40%] border-gray-300"></span>
                  <span className="text-white text-[12px]">or</span>
                  <span className="border-[0.5px] opacity-30 w-[40%] border-gray-300"></span>
                </div>
                <div className="flex justify-center items-center cursor-pointer">
                  <span className="flex border-gray-600 text-white py-2 px-3 text-[12px]">
                    <FcGoogle className="h-4 w-4 mr-2" /> Continue With Google
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-slate-700 hover:bg-slate-600 font-medium rounded-lg text-[14px] px-4 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Log in
                </button>
                <p className="text-[12px] font-light text-white opacity-75 dark:text-gray-400">
                  Don&apos;t have an account yet?
                  <a
                    href="#"
                    className="font-medium text-white opacity-100 hover:underline dark:text-primary-500"
                  >
                    Sign up
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
