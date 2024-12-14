"use client";

import React, { useState } from "react";

import { FaCopy } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import ListCard from "../commons/Profilecard/ListCard";

import LocationInputModal from "../LocationInputModal";
import { useMediaQuery } from "react-responsive";

const OTPScreens = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          background: `url(
          "https://thesulfurgroup.com/wp-content/uploads/2017/12/collage-std.png"
        )`,
          backgroundColor: "#FFF",
          opacity: 0.1,
          position: "absolute",
        }}
      ></div>
      <div style={{ position: "relative", opacity: 1, overflow: "hidden" }}>
        {!isTabletOrMobile && (
          <div>
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
          </div>
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
                  Open the instagram post by clicking on the link below and
                  leave comment with 4 digit confirmation code to it from
                  @userID{" "}
                </div>

                <div
                  class="flex items-center justify-center"
                  style={{ gap: 20 }}
                >
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
                  type="button"
                  class="flex w-full justify-center rounded-sm bg-[#F27430] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => setOpenModal(!openModal)}
                >
                  I have left the comment. Continue
                </button>
              </div>
            </form>
            {openModal && (
              <LocationInputModal
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OTPScreens;
