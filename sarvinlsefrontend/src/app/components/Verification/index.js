"use client";

import React, { useState } from "react";
import Instagram from "../commons/icons/instagram.png";
import Image from "next/image";
import ListCard from "../commons/Profilecard/ListCard";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

const Verification = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const router = useRouter();

  // Access the current URL
  const appendText = (e) => {
    e.preventDefault();
    // Modify the appended text as needed
    router.push("/account-verification-otp");
  };
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          background: `url(
          "https://www.shape.com/thmb/wOxuLyW367JXtBvr62qYth23Uc4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Best-Black-Natural-Hair-Influencers-1-1e01e7bfefb84010b3d599151d806166.png"
        )`,
          opacity: 0.08,
          position: "absolute",
        }}
      ></div>
      <div style={{ position: "relative", opacity: 1, overflow: "hidden" }}>
        {!isTabletOrMobile && (
          <a href="/">
            <span
              style={{
                boxSizing: "border-box",
                display: "inline-block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "relative",
                maxWidth: "100%",
              }}
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "transparent",
                  opacity: 1,
                  border: 0,
                  margin: "34px 34px 2px 34px",
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "baseline", gap: 4 }}
                >
                  <div
                    style={{
                      color: "#E65C55",

                      fontSize: 30,
                    }}
                  >
                    SARVIN
                  </div>
                  <i style={{ fontSize: 14 }}>For Influencers</i>
                </div>
              </span>
            </span>
            {/* Your logo */}
          </a>
        )}
        <div class="flex flex-col justify-center px-6 py-12 lg:px-8">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            {isTabletOrMobile && (
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "center",
                  gap: 4,
                }}
              >
                <div
                  style={{
                    color: "#E65C55",

                    fontSize: 30,
                  }}
                >
                  SARVIN
                </div>
                <i style={{ fontSize: 14 }}>For Influencers</i>
              </div>
            )}
            <h2 class="m-4 text-center text-2xl font-semibold  text-gray-900">
              Connect your creator account
            </h2>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" onSubmit={appendText} method="POST">
              <div class="flex justify-between ">
                <span class="text-base font-medium text-blue-700 dark:text-white"></span>
                <span class="text-sm font-semibold text-[#E86C2F] dark:text-white">
                  Just Few More Steps
                </span>
              </div>

              <div
                class="w-full bg-gray-200 rounded-full dark:bg-gray-700"
                style={{ marginTop: 10 }}
              >
                <div
                  class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0 leading-none rounded-full"
                  style={{ width: "45%" }}
                >
                  {" "}
                  45%
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    class="block text-sm font-medium leading-6 text-gray-900 mb-2"
                  >
                    Choose a Platform
                  </label>
                  <div class="text-sm">
                    {/* <a
                    href="#"
                    class="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a> */}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="mb-2 flex rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal border text-[#2D2D2D] shadow-sm transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:border-[#E86C2F] focus:outline-none focus:ring-0 active:shadow-lg"
                    style={{ backgroundColor: "#fff", gap: 10 }}
                  >
                    <Image src={Instagram} width={18} height={10} />
                    Instagram
                  </button>
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="mb-2 flex rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal border text-[#2D2D2D] shadow-sm transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:border-[#E86C2F] focus:outline-none focus:ring-0 active:shadow-lg"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="28"
                      height="18"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#FF3D00"
                        d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                      ></path>
                      <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                    </svg>
                    Youtube
                  </button>
                </div>
                <br />
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter your profile URL
                </label>
                <div class="mt-2">
                  <input
                    id="username"
                    name="fullname"
                    type="text"
                    autocomplete="name"
                    placeholder="www.instagram.com/userID"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <ListCard />
              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-[#F27430] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verification;
