"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Chips from "../../commons/Chips";
import GlobalSearch from "../../commons/GlobalSearch";
import LocationSearch from "../../commons/LocationSearch";
import Dropdown from "../../commons/Dropdown";
import BrandsDealCards from "../commons/BrandsDealCards";
import Filters from "../../commons/Filters";
import Instagram from "../../commons/icons/instagram.png";
import Youtube from "../../commons/icons/youtube.png";
import Facebook from "../../commons/icons/facebook.png";
import X from "../../commons/icons/x.png";

import Lottie from "react-lottie-player";
import Handwave from "../../commons/icons/404Notfound.json";
const SavedDeals = () => {
  const [branddeals, setBranddeals] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/get_saved_deal`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setBranddeals(response.data?.data);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
        // Set loading to false in case of error
      });
  }, []);
  const FILTERS = [
    {
      filterCategory: "Social Platforms",
      filterOptions: [
        <div
          data-te-chip-init
          data-te-ripple-init
          class="[word-wrap: break-word] my-[5px] mr-4 flex h-[42px] cursor-pointer items-center justify-between rounded-[21px] bg-[transparent] px-[12px] py-0 text-[13px] font-semibold normal-case leading-loose border border-[#3b71ca] px-[12px] py-0 text-[13px]  transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#4185f4] dark:bg-[transparent] dark:text-[#4185f4]"
        >
          <Image
            class="my-0 -ml-[12px] mr-[8px] h-[inherit] w-[inherit] rounded-[100%]"
            src={Instagram}
            alt="Contact Person"
          />
          Instagram
        </div>,
        <div
          data-te-chip-init
          data-te-ripple-init
          class="[word-wrap: break-word] my-[5px] mr-4 flex h-[42px] cursor-pointer items-center justify-between rounded-[21px] bg-[transparent] px-[12px] py-0 text-[13px] font-semibold normal-case leading-loose border border-[#3b71ca] px-[12px] py-0 text-[13px]  transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#4185f4] dark:bg-[transparent] dark:text-[#4185f4]"
        >
          <Image
            class="my-0 -ml-[12px] mr-[8px] h-[inherit] w-[inherit] rounded-[100%]"
            src={Youtube}
            alt="Contact Person"
          />
          Youtube
        </div>,
        <div
          data-te-chip-init
          data-te-ripple-init
          class="[word-wrap: break-word] my-[5px] mr-4 flex h-[42px] cursor-pointer items-center justify-between rounded-[21px] bg-[transparent] px-[12px] py-0 text-[13px] font-semibold normal-case leading-loose border border-[#3b71ca] px-[12px] py-0 text-[13px]  transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#4185f4] dark:bg-[transparent] dark:text-[#4185f4]"
        >
          <Image
            class="my-0 -ml-[12px] mr-[8px] h-[inherit] w-[inherit] rounded-[100%]"
            src={Facebook}
            alt="Contact Person"
          />
          Facebook
        </div>,
        <div
          data-te-chip-init
          data-te-ripple-init
          class="[word-wrap: break-word] my-[5px] mr-4 flex h-[42px] cursor-pointer items-center justify-between rounded-[21px] bg-[transparent] px-[12px] py-0 text-[13px] font-semibold normal-case leading-loose border border-[#3b71ca] px-[12px] py-0 text-[13px]  transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#4185f4] dark:bg-[transparent] dark:text-[#4185f4]"
        >
          <Image
            class="my-0 -ml-[12px] mr-[8px] h-[inherit] w-[inherit] rounded-[100%]"
            src={X}
            alt="Contact Person"
          />
          Twitter
        </div>,

        // <div
        //   style={{
        //     display: "flex",
        //     justifyContent: "center",
        //     width: "100%",
        //     alignItems: "center",
        //     gap: 8,
        //   }}
        // >
        //   <Image
        //     style={{
        //       display: "flex",
        //       justifyContent: "center",
        //       width: "4.5%",
        //     }}
        //     src={Instagram}
        //   />{" "}
        //   Instagram
        // </div>,
        // <div
        //   style={{
        //     display: "flex",
        //     justifyContent: "center",
        //     width: "100%",
        //     alignItems: "center",
        //     gap: 8,
        //   }}
        // >
        //   <Image
        //     style={{
        //       display: "flex",
        //       justifyContent: "center",
        //       width: "4.5%",
        //     }}
        //     src={Youtube}
        //   />{" "}
        //   Youtube
        // </div>,
        // <div
        //   style={{
        //     display: "flex",
        //     justifyContent: "center",
        //     width: "100%",
        //     alignItems: "center",
        //     gap: 8,
        //   }}
        // >
        //   <Image
        //     style={{
        //       display: "flex",
        //       justifyContent: "center",
        //       width: "4.5%",
        //     }}
        //     src={Facebook}
        //   />{" "}
        //   Facebook
        // </div>,
        // <div
        //   style={{
        //     display: "flex",
        //     justifyContent: "center",
        //     width: "100%",
        //     alignItems: "center",
        //     gap: 8,
        //   }}
        // >
        //   <Image
        //     style={{
        //       display: "flex",
        //       justifyContent: "center",
        //       width: "4.5%",
        //     }}
        //     src={X}
        //   />{" "}
        //   X(Twitter)
        // </div>,
      ],
      filterSelectedOptions: ["Instagram", "Youtube", "Facebook", "Twitter"],
    },
    {
      filterCategory: "Audience Age",
      filterOptions: [
        <div
          data-te-chip-init
          data-te-ripple-init
          class="[word-wrap: break-word] my-[5px] mr-4 flex h-[42px] cursor-pointer items-center justify-center rounded-[21px] bg-[transparent] px-[12px] py-0 text-[13px] font-semibold normal-case leading-loose border border-[#3b71ca] px-[12px] py-0 text-[13px]  transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#4185f4] dark:bg-[transparent] dark:text-[#4185f4]"
        >
          04 Yrs.-18 Yrs.
        </div>,
        <div
          data-te-chip-init
          data-te-ripple-init
          class="[word-wrap: break-word] my-[5px] mr-4 flex h-[42px] cursor-pointer items-center justify-center rounded-[21px] bg-[transparent] px-[12px] py-0 text-[13px] font-semibold normal-case leading-loose border border-[#3b71ca] px-[12px] py-0 text-[13px]  transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#4185f4] dark:bg-[transparent] dark:text-[#4185f4]"
        >
          18 Yrs.-35 Yrs.
        </div>,
        <div
          data-te-chip-init
          data-te-ripple-init
          class="[word-wrap: break-word] my-[5px] mr-4 flex h-[42px] cursor-pointer items-center justify-center rounded-[21px] bg-[transparent] px-[12px] py-0 text-[13px] font-semibold normal-case leading-loose border border-[#3b71ca] px-[12px] py-0 text-[13px]  transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#4185f4] dark:bg-[transparent] dark:text-[#4185f4]"
        >
          35 Yrs.-60 Yrs.
        </div>,
        <div
          data-te-chip-init
          data-te-ripple-init
          class="[word-wrap: break-word] my-[5px] mr-4 flex h-[42px] cursor-pointer items-center justify-center rounded-[21px] bg-[transparent] px-[12px] py-0 text-[13px] font-semibold normal-case leading-loose border border-[#3b71ca] px-[12px] py-0 text-[13px]  transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#4185f4] dark:bg-[transparent] dark:text-[#4185f4]"
        >
          60 Yrs. Above
        </div>,
      ],
      filterSelectedOptions: [
        { minValue: 4, maxValue: 18 },
        { minValue: 18, maxValue: 35 },
        { minValue: 35, maxValue: 60 },
        { minValue: 60, maxValue: 100 },
      ],
    },
    {
      filterCategory: "Audience Gender",
      filterOptions: [
        <Chips
          text={"Male"}
          img="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
        />,
        <Chips
          text={"Female"}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQdb3b5E6XD4t2GeELeZgts9AvuTKtYK23g&usqp=CAU"
        />,

        <Chips
          text={"Others"}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQdb3b5E6XD4t2GeELeZgts9AvuTKtYK23g&usqp=CAU"
        />,
      ],
      filterSelectedOptions: ["Male", "Female", "Others"],
    },
    {
      filterCategory: "Promotion Type",
      filterOptions: [
        <Chips
          text={"ShoutOut on Reels"}
          img="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
        />,
        <Chips
          text={"Story"}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQdb3b5E6XD4t2GeELeZgts9AvuTKtYK23g&usqp=CAU"
        />,

        <Chips
          text={"Video on Reels"}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQdb3b5E6XD4t2GeELeZgts9AvuTKtYK23g&usqp=CAU"
        />,
        <Chips
          text={"Video on Post"}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQdb3b5E6XD4t2GeELeZgts9AvuTKtYK23g&usqp=CAU"
        />,
        <Chips
          text={"Youtube Video"}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQdb3b5E6XD4t2GeELeZgts9AvuTKtYK23g&usqp=CAU"
        />,
        <Chips
          text={"Pamphlate Post"}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQdb3b5E6XD4t2GeELeZgts9AvuTKtYK23g&usqp=CAU"
        />,
      ],
      filterSelectedOptions: [
        "Shoutout",
        "Story",
        "Reels",
        "Post",
        "Youtube_Video",
        "Pamplet_Post",
      ],
    },
    {
      filterCategory: "Influencer Gender",
      filterOptions: [
        <Chips
          text={"Male"}
          img="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
        />,
        <Chips
          text={"Female"}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQdb3b5E6XD4t2GeELeZgts9AvuTKtYK23g&usqp=CAU"
        />,

        <Chips
          text={"Others"}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQdb3b5E6XD4t2GeELeZgts9AvuTKtYK23g&usqp=CAU"
        />,
      ],
      filterSelectedOptions: ["Male", "Female", "Others"],
    },
    {
      filterCategory: "Reward Cost Range",
      filterOptions: [],
      filterSelectedOptions: [],
    },
    {
      filterCategory: "Brand Category",
      filterOptions: [
        <Chips
          text={"Actors"}
          img="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
        />,
        <Chips
          text={"Artist"}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQdb3b5E6XD4t2GeELeZgts9AvuTKtYK23g&usqp=CAU"
        />,
        <Chips
          text={"Musicians"}
          img="https://st4.depositphotos.com/1077687/29907/v/450/depositphotos_299073292-stock-illustration-men-with-musicals-instruments-on.jpg"
        />,
        <Chips
          text={"Singer"}
          img="https://w7.pngwing.com/pngs/305/570/png-transparent-singer-singing-free-singing-s-microphone-fictional-character-cartoon.png"
        />,
        <Chips
          text={"Designer"}
          img="https://img.freepik.com/premium-photo/creative-colorful-abstract-human-brain-dark-background-knowledge-concept-generative-ai_58409-32417.jpg"
        />,
        <Chips
          text={"Coders"}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9iVHFERvJNWy35cSvxSyp79AIHYc08OaXrsaU2sfkE2THiuIKJOxEqxioeXtELpQqY-E&usqp=CAU"
        />,
      ],
      filterSelectedOptions: [
        "Actors",
        "Artist",
        "Musicians",
        "Singer",
        "Designer",
        "Coders",
      ],
    },
  ];
  return (
    <>
      {branddeals ? (
        <div class="mx-4">
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div class="flex justify-between gap-2 m-5 ">
              {/* <Dropdown text="Audience Size" />
          <Dropdown text="Audience Gender" />
          <Dropdown text="Audience Age" /> */}
            </div>

            {/* <div class="flex gap-2 align-center">
          {" "}
          <Select
            styles={customStyles}
            className="multi"
            classNamePrefix="Audience Gender"
            isClearable
            isMulti
            isSearchable
            name="color"
            options={[
              {
                value: "ocean",
                label: "Ocean",
                color: "#00B8D9",
              },
              {
                value: "blue",
                label: "Blue",
                color: "#0052CC",
              },
              { value: "purple", label: "Purple", color: "#5243AA" },
              { value: "red", label: "Red", color: "#FF5630" },
              { value: "orange", label: "Orange", color: "#FF8B00" },
              { value: "yellow", label: "Yellow", color: "#FFC400" },
              { value: "green", label: "Green", color: "#36B37E" },
            ]}
          />
        </div> */}
            <div>
              <div class="flex justify-center">
                <div style={{ width: "35vw", margin: 30 }}>
                  <GlobalSearch placeholder="Search for Brands,Business and Services for Marketing" />
                </div>

                <div style={{ width: "10vw", margin: 30 }}>
                  <LocationSearch />
                </div>
              </div>{" "}
            </div>

            <div class="flex justify-between m-11 gap-2">
              <Dropdown text="All Filters" modalView>
                <Filters filters={FILTERS} />
              </Dropdown>
            </div>
          </div>
          <BrandsDealCards
            branddeals={branddeals}
            setBranddeals={setBranddeals}
            loading={loading}
            setLoading={setLoading}
            type={2}
          />
        </div>
      ) : (
        <div class="flex w-full justify-center m-6">
          <div class="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="p-5 bg-slate-200 rounded-md">
              <Lottie
                loop
                animationData={Handwave}
                play
                style={{
                  marginLeft: 4,
                  marginTop: 4,
                }}
              />
            </div>
            <div class="px-5 pb-5  ">
              <div class="text-2xl flex justify-center my-2 font-normal tracking-tight text-gray-700 dark:text-white">
                Nothing is Here For Now...
              </div>
              <div class="text-lg flex justify-center my-1 font-thin tracking-tight text-gray-700 dark:text-white">
                only on
              </div>
              <div
                class="text-4xl flex justify-center my-1 font-thin tracking-tight"
                style={{
                  color: "#E65C55",
                  transition: "color 2s",
                }}
              >
                SARVIN
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default SavedDeals;
