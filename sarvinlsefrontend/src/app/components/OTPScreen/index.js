"use client";

import React from "react";
import NavBar from "../commons/Navbar";
import Instagram from "../commons/icons/instagram.png";
import Image from "next/image";
import { FaCopy } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import ListCard from "../commons/Profilecard/ListCard";

const OTPScreens = () => {
  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
      <NavBar />
      <div class="flex flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="m-4 w-100 text-center text-2xl font-semibold  text-gray-900">
            Verify your creator account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST">
            <div class="flex justify-between ">
              <span class="text-base font-medium text-blue-700 dark:text-white"></span>
              <span class="text-sm font-semibold text-[#E86C2F] dark:text-white">
                Almost There :)
              </span>
            </div>

            <div
              class="w-full bg-gray-200 rounded-full dark:bg-gray-700"
              style={{ marginTop: 10 }}
            >
              <div
                class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0 leading-none rounded-full"
                style={{ width: "95%" }}
              >
                {" "}
                95%
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900 mb-2"
                >
                  Confirm your account
                </label>
              </div>
              <ListCard />
              <br />
              <div style={{ fontSize: 12 }}>
                Open the instagram post by clicking on the link below and leave
                comment with 4 digit confirmation code to it from @userID{" "}
              </div>

              <div class="flex items-center justify-center" style={{ gap: 20 }}>
                <div
                  class="flex block w-40 h-10 border-2 items-center justify-center text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  style={{ marginTop: "4vh", fontSize: 24, letterSpacing: 4 }}
                >
                  7742
                </div>
                <div class="flex items-end h-10 text-xs " style={{ gap: 6 }}>
                  <FaCopy /> Copy to Clipboard
                </div>
              </div>
            </div>
            <div style={{ borderWidth: "0px 0px 2px 0px" }}></div>
            <div
              class="flex items-center justify-center text-sm"
              style={{ fontWeight: 600, gap: 10, marginTop: 10 }}
            >
              www.instagram.com/Fjkjn2214444ioo <FaArrowUpRightFromSquare />
            </div>
            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-sm bg-[#F27430] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                I have left the comment. Continue
              </button>
            </div>
            <div class="flex justify-center">
              <button
                type="submit"
                class="flex w-80 justify-center rounded-sm bg-[#FF965E] px-3 py-1.5 text-sm font-semibold leading-6 text-gray-100 shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Verifying..
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTPScreens;
