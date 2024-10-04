"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaPinterestP, FaSave } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import Modal from "../../../commons/modal";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Coins from "../../../commons/icons/coin.png";
import SuccessModal from "../../../SuccessModal";

const BrandDetail = ({
  id = "0",
  heading = "Naman Agarwal",
  subheading = "CEO and Founder",
  img = "https://tse1.mm.bing.net/th?id=OIP.K7lG3005eY-tEHwlxf61qgHaFx&pid=Api&P=0&w=300&h=300",
  last_update = "21st March 2024",
  tags = 0,
  cardType = "Deals",
  openModal,
  setOpenModal = () => {},
}) => {
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [branddealsdetails, setBranddealsdetails] = useState({});
  const [loading, setLoading] = useState(false);
  if (cardType == "Cracked") {
    return (
      <>
        {" "}
        <div className="relative rounded-lg mb-10" style={{ display: "flex" }}>
          <div className="pb-3 px-3 mx-3" style={{ flex: 2 }}>
            <div class="flex justify-between align-middle">
              <div class=" flex text-black text-xl font-medium">
                {" "}
                <div class="mt-2 mr-2 rounded">
                  <Image alt="alt text." src={img} width={40} height={42} />
                </div>
                <div>
                  <div class="mt-4 mx-2 text-left">{heading}</div>
                  <div class="text-gray-400 text-sm mx-2">{subheading}</div>
                </div>
              </div>
            </div>
            <div class="flex gap-4">
              <div>
                <div class="mt-4 text-gray-400 text-left">Category</div>
                <div className="font-600 text-left">Food</div>
              </div>
              <div>
                <div class="mt-4 text-gray-400 text-left">Platforms</div>
                <div className="font-600 text-left">Instagram,Youtube</div>
              </div>
            </div>
            <div>
              <div class="text-left mt-4 text-gray-400">Overview</div>
              <div class="text-left">
                <div>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Campaign Type - Shoutout
                  </span>
                </div>
                <div class="mt-4 w-70">
                  <div class=" text-xs font-sm me-2  px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-100 border border-gray-400">
                    <div class="font-medium">Campaign Description</div>
                    <div>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words. The task description will have the target
                      audience and influencer requirement.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="text-left mt-4 text-gray-400">Target Audience</div>
              <div class="text-left">
                <div CLASS="FLEX GAP-4">
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Audience Location - Civil Lines,Bareilly
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Audience Age - 24-50
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Audience Gender - Any
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Target Audience - 10k
                  </span>
                </div>
              </div>
              <div class="text-left mt-4 text-gray-400">
                Delivery Information
              </div>
              <div class="text-left">
                <div CLASS="FLEX GAP-4">
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Delivery Type - Shipped By Brand
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Shipping Zone - Bareilly
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div class="text-left mt-4 text-gray-400">
                Influencer Requirement
              </div>
              <div class="text-left">
                <div CLASS="FLEX GAP-4">
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Influencer Size-10k
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Categories-Food,Health
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Influencer Age - 25
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Influencer Gender - Female
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <div class=" text-xs font-sm me-2 px-2 w-70 py-0.5 rounded dark:bg-gray-700 dark:text-gray-100 border border-gray-400">
                <div class="font-medium text-left">Task Description</div>
                <div class="text-left">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words. The task
                  description will have the target audience and influencer
                  requirement.
                </div>
              </div>
            </div>
          </div>

          <div class="m-4 flex flex-col" style={{ flex: 1 }}>
            <div class="flex justify-end">
              <span class="bg-blue-100  text-blue-800 text-xs pt-1.5 font-medium px-2.5 h-7 rounded-full dark:bg-blue-900 dark:text-blue-300">
                Last Updated:<b>{last_update}</b>
              </span>
            </div>
            <div className="space-x-3 mt-2">
              <div class="text-right font-medium mt-4 mx-2">You'll receive</div>
              <div class="flex mx-2 my-2 justify-end">
                <span class=" bg-[#ccdfff] text-[#3858f9] text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Fixed Cost- TBD
                </span>
                <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                  Sales Commission - 3%
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-3 mt-4 align-middle justify-end">
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaFacebookF className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
              </div>
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaTwitter className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
              </div>
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaPinterestP className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
              </div>
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaInstagram className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
              </div>
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaSave className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
              </div>
            </div>
            <div className="flex mt-4 align-center justify-around">
              <div className="flex mt-4 align-center justify-end"></div>
              <div class="mt-4">
                <ol class=" text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
                  <li class="flex mb-10 align-middle gap-4">
                    <span class=" flex gap-4 items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                      <svg
                        class="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5.917 5.724 10.5 15 1.5"
                        />
                      </svg>
                    </span>
                    <div class="flex flex-col justify-center text-xs">
                      Accepted By Author
                    </div>
                  </li>
                  <li class=" flex mb-10 align-middle gap-4">
                    <span class=" flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                      <svg
                        class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                      </svg>
                    </span>
                    <div class="flex flex-col justify-center text-xs">
                      Deal Posted on Social Media
                    </div>
                  </li>
                  <li class="flex mb-10 align-middle gap-4">
                    <span class=" flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                      <svg
                        class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 20"
                      >
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                      </svg>
                    </span>
                    <div class="flex flex-col justify-center text-xs">
                      Target Completion
                    </div>
                  </li>
                  <li class="flex align-middle gap-4">
                    <span class=" flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                      <svg
                        class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 20"
                      >
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                      </svg>
                    </span>
                    <div class="flex flex-col justify-center text-xs">
                      Prize Money Recieved
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 text-gray-400 text-md mt-2 mr-2">
          <button
            type="submit"
            class="flex w-full justify-center border-2  border-gray-200 rounded-md bg-gray-0  py-1 text-sm font-medium leading-6 text-gray-200 bg-[#F27430] shadow border-1 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setOpenSuccessModal(!openSuccessModal)}
          >
            Respond to Deal
            <div
              data-te-chip-init
              data-te-ripple-init
              class="[word-wrap: break-word] mr-4 flex -mt-0.5 cursor-pointer items-center justify-between rounded-[21px] bg-[transparent] px-[12px] py-0  font-normal normal-case leading-loose px-[12px] py-0  transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#4185f4] dark:bg-[transparent] dark:text-[#4185f4]"
            >
              <Image
                class="my-0 h-5 w-5 mr-[4px] rounded-[100%]"
                src={Coins}
                alt="Contact Person"
              />
              1
            </div>
          </button>
          <button
            type="submit"
            class="flex w-full justify-center border-2 border-gray-200 b rounded-md bg-gray-0 px-3 py-1.5 text-sm font-medium leading-6 text-gray-900 shadow border-1 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={setOpenModal(false)}
          >
            Not Interested
          </button>
        </div>
      </>
    );
  } else if (cardType == "Deals") {
    useEffect(() => {
      const token = localStorage.getItem("token");
      axios
        .get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/single_deal/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setBranddealsdetails(response.data?.data);

          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
          // Set loading to false in case of error
        });
    }, [id]);

    const handleRespondClick = () => {
      setLoading(true);
      const responsePayload = {
        deal_id: "66479d4921dbbda6d02f7e86",
        brand_id: "657420767e396baaaa094c13",
        amount: 1000,
      };

      const token = localStorage.getItem("token");
      axios
        .post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/response`,
          responsePayload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setLoading(false);
          setOpenSuccessModal(!openSuccessModal);
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error submitting response:", error);
        });
    };
    return (
      <>
        {" "}
        <div className="relative rounded-lg mb-10" style={{ display: "flex" }}>
          <div className="pb-3 px-3 mx-3" style={{ flex: 2 }}>
            <div class="flex justify-between align-middle">
              <div class=" flex text-black text-xl font-medium">
                {" "}
                <div class="mt-2 mr-2 rounded">
                  <Image alt="alt text." src={img} width={40} height={42} />
                </div>
                <div>
                  <div class="mt-4 mx-2 text-left">{heading}</div>
                  <div class="text-gray-400 text-sm mx-2">{subheading}</div>
                </div>
              </div>
            </div>
            <div class="flex gap-4">
              <div>
                <div class="mt-4 text-gray-400 text-left">Category</div>
                <div className="font-600 text-left">
                  {branddealsdetails.category || "Food"}
                </div>
              </div>
              <div>
                <div class="mt-4 text-gray-400 text-left">Platforms</div>
                <div className="font-600 text-left">
                  {branddealsdetails.instagram_show && "Instagram"},
                  {branddealsdetails.youtube_show && "Youtube"},
                  {branddealsdetails.facebook_show && "Facebook"}
                  {branddealsdetails.twitter_show && "Twitter/X"}
                  {branddealsdetails.twitch_show && "Twitch"}
                  {branddealsdetails.reddit_show && "Reddit"}
                </div>
              </div>
            </div>
            <div>
              <div class="text-left mt-4 text-gray-400">Overview</div>
              <div class="text-left">
                <div>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Campaign Type -{" "}
                    {branddealsdetails.promotion_type || "ShoutOut"}
                  </span>
                </div>
                <div class="mt-4 w-70">
                  <div class=" text-xs font-sm me-2  px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-100 border border-gray-400">
                    <div class="font-medium">Campaign Description</div>
                    <div>
                      {branddealsdetails.campaign_description ||
                        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words. The task description will have the target audience and influencer requirement."}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="text-left mt-4 text-gray-400">Target Audience</div>
              <div class="text-left">
                <div CLASS="FLEX GAP-4">
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Audience Location -{" "}
                    {branddealsdetails.audience_location || "India"}
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Audience Age -{" "}
                    {branddealsdetails.audience_target_age || "10-50"}
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Audience Language -{" "}
                    {branddealsdetails.audience_target_language || "Hindi"}
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Target Audience -{" "}
                    {branddealsdetails.audience_target_number || "10k"}
                  </span>
                </div>
              </div>
              <div class="text-left mt-4 text-gray-400">
                Delivery Information
              </div>
              <div class="text-left">
                <div CLASS="FLEX GAP-4">
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Delivery Type - Shipped By Brand
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Shipping Zone - Bareilly
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div class="text-left mt-4 text-gray-400">
                Influencer Requirement
              </div>
              <div class="text-left">
                <div CLASS="FLEX GAP-4">
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Influencer Size-{branddealsdetails.influencer_size || "10k"}
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Categories-{branddealsdetails.category || "Any"}
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Influencer Age -{" "}
                    {branddealsdetails.influencer_age || "10-50"}
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Influencer Gender -{" "}
                    {branddealsdetails.influencer_gender || "Any"}
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <div class=" text-xs font-sm me-2 px-2 w-70 py-0.5 rounded dark:bg-gray-700 dark:text-gray-100 border border-gray-400">
                <div class="font-medium text-left">Task Description</div>
                <div class="text-left">
                  {branddealsdetails.task_description ||
                    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature  from 45 BC, making it over 2000 years old. Richard McClintock,  a Latin professor at Hampden-Sydney College in Virginia,  looked up one of the more obscure Latin words. The task  description will have the target audience and influencer  requirement."}
                </div>
              </div>
            </div>
          </div>

          <div class="m-4 flex flex-col" style={{ flex: 1 }}>
            <div class="flex justify-end">
              <span class="bg-blue-100  text-blue-800 text-xs pt-1.5 font-medium px-2.5 h-7 rounded-full dark:bg-blue-900 dark:text-blue-300">
                Last Updated:<b>{branddealsdetails.last_updated || "NA"}</b>
              </span>
            </div>
            <div className="space-x-3 mt-2">
              <div class="text-right font-medium mt-4 mx-2">You'll receive</div>
              <div class="flex mx-2 my-2 justify-end">
                <span class=" bg-[#ccdfff] text-[#3858f9] text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Fixed Cost Reward- {branddealsdetails.fixed_price || "TBD"}
                </span>
                <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                  Sales Commission -{" "}
                  {branddealsdetails.sales_compensation || "0"}%
                </span>
                <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                  Gift Product - {String(branddealsdetails.gift_product)}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-3 mt-4 align-middle justify-end">
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaFacebookF className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
              </div>
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaTwitter className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
              </div>
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaPinterestP className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
              </div>
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaInstagram className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
              </div>
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaSave className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 text-gray-400 text-md mt-2 mr-2">
          <button
            type="submit"
            class="flex w-full justify-center border-2  border-gray-200 rounded-md bg-gray-0  py-1 text-sm font-medium leading-6 text-gray-200 bg-[#F27430] shadow border-1 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400"
            onClick={() => handleRespondClick()}
            disabled={loading}
          >
            {loading ? "Application is Sending.." : "Respond to Deal"}
            <div
              data-te-chip-init
              data-te-ripple-init
              class="[word-wrap: break-word] mr-4 flex -mt-0.5 cursor-pointer items-center justify-between rounded-[21px] bg-[transparent] px-[12px] py-0  font-normal normal-case leading-loose px-[12px] py-0  transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#4185f4] dark:bg-[transparent] dark:text-[#4185f4]"
            >
              <Image
                class="my-0 h-5 w-5 mr-[4px] rounded-[100%]"
                src={Coins}
                alt="Contact Person"
              />
              1
            </div>
          </button>
          <button
            type="submit"
            class="flex w-full justify-center border-2 border-gray-200 b rounded-md bg-gray-0 px-3 py-1.5 text-sm font-medium leading-6 text-gray-900 shadow border-1 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setOpenModal(!openModal)}
          >
            Not Interested
          </button>
        </div>
        <SuccessModal
          openModal={openSuccessModal}
          setOpenModal={setOpenSuccessModal}
          role="Deals"
        />
      </>
    );
  } else if (cardType == "Bid") {
    return (
      <>
        {" "}
        <div className="relative rounded-lg mb-10" style={{ display: "flex" }}>
          <div className="pb-3 px-3 mx-3" style={{ flex: 2 }}>
            <div class="flex justify-between align-middle">
              <div class=" flex text-black text-xl font-medium">
                {" "}
                <div class="mt-2 mr-2 rounded">
                  <Image alt="alt text." src={img} width={40} height={42} />
                </div>
                <div>
                  <div class="mt-4 mx-2 text-left">{heading}</div>
                  <div class="text-gray-400 text-sm mx-2">{subheading}</div>
                </div>
              </div>
            </div>
            <div class="flex gap-4">
              <div>
                <div class="mt-4 text-gray-400 text-left">Category</div>
                <div className="font-600 text-left">Food</div>
              </div>
              <div>
                <div class="mt-4 text-gray-400 text-left">Platforms</div>
                <div className="font-600 text-left">Instagram,Youtube</div>
              </div>
            </div>
            <div>
              <div class="text-left mt-4 text-gray-400">Overview</div>
              <div class="text-left">
                <div>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Campaign Type - Shoutout
                  </span>
                </div>
                <div class="mt-4 w-70">
                  <div class=" text-xs font-sm me-2  px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-100 border border-gray-400">
                    <div class="font-medium">Campaign Description</div>
                    <div>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words. The task description will have the target
                      audience and influencer requirement.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="text-left mt-4 text-gray-400">Target Audience</div>
              <div class="text-left">
                <div CLASS="FLEX GAP-4">
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Audience Location - Civil Lines,Bareilly
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Audience Age - 24-50
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Audience Gender - Any
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Target Audience - 10k
                  </span>
                </div>
              </div>
              <div class="text-left mt-4 text-gray-400">
                Delivery Information
              </div>
              <div class="text-left">
                <div CLASS="FLEX GAP-4">
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Delivery Type - Shipped By Brand
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Shipping Zone - Bareilly
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div class="text-left mt-4 text-gray-400">
                Influencer Requirement
              </div>
              <div class="text-left">
                <div CLASS="FLEX GAP-4">
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Influencer Size-10k
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Categories-Food,Health
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Influencer Age - 25
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Influencer Gender - Female
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <div class=" text-xs font-sm me-2 px-2 w-70 py-0.5 rounded dark:bg-gray-700 dark:text-gray-100 border border-gray-400">
                <div class="font-medium text-left">Task Description</div>
                <div class="text-left">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words. The task
                  description will have the target audience and influencer
                  requirement.
                </div>
              </div>
            </div>
          </div>

          <div class="m-4 flex flex-col" style={{ flex: 1 }}>
            <div class="flex justify-end">
              <span class="bg-blue-100  text-blue-800 text-xs pt-1.5 font-medium px-2.5 h-7 rounded-full dark:bg-blue-900 dark:text-blue-300">
                Last Updated:<b>{last_update}</b>
              </span>
            </div>
            <div className="space-x-3 mt-2">
              <div class="text-right font-medium mt-4 mx-2">You'll receive</div>
              <div class="flex mx-2 my-2 justify-end">
                <span class=" bg-[#ccdfff] text-[#3858f9] text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Fixed Cost- TBD
                </span>
                <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                  Sales Commission - 3%
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-3 mt-4 align-middle justify-end">
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaFacebookF className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
              </div>
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaTwitter className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
              </div>
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaPinterestP className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
              </div>
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaInstagram className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
              </div>
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaSave className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
              </div>
            </div>
            <div className="flex items-center space-x-3 mt-4 gap-2 align-middle justify-end text-red-500 font-semibold">
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "red",
                  borderRadius: 50,
                  opacity: 1 /* Initially transparent */,
                  transition: "opacity 0.5s ease",
                }}
              ></div>
              Deal is Live Right Now
            </div>
            <div className="flex items-center space-x-3 mt-4 align-middle justify-end text-red">
              <div class="block p-2 w-64 bg-[#f8f9ff] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                  Enter Your Bid Price
                </h5>
                <input
                  type="number"
                  name="bid_amount"
                  id="bid_amount"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Min 1000 -- Max 5000"
                  required
                />
                <div class="font-thin mt-4 text-xs text-gray-700 dark:text-gray-400">
                  Lesser you bid for prize money more the brand is attract to
                  fix a deal with you
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3 mt-4 align-middle justify-end text-red">
              <div class="block p-2 w-64 bg-[#f8f9ff] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                  Current Bid
                </h5>
                <h2 class="flex w-full justify-center">
                  <FaIndianRupeeSign />
                  5000
                </h2>
                <div class="font-thin mt-4 text-xs text-gray-700 dark:text-gray-400">
                  This is the current bid right now if you want to increase your
                  probability to get deal you can raise a bid for 4500.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 text-gray-400 text-md mt-2 mr-2">
          <button
            type="submit"
            class="flex w-full justify-center border-2 border-gray-200 b rounded-md bg-gray-0  py-1.5 text-sm font-medium leading-6 text-gray-200 bg-[#F27430] shadow border-1 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setOpenSuccessModal(!openSuccessModal)}
          >
            Bid to Deal
            <div
              data-te-chip-init
              data-te-ripple-init
              class="[word-wrap: break-word] mr-4 flex -mt-0.5 cursor-pointer items-center justify-between rounded-[21px] bg-[transparent] px-[12px] py-0  font-normal normal-case leading-loose px-[12px] py-0  transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#4185f4] dark:bg-[transparent] dark:text-[#4185f4]"
            >
              <Image
                class="my-0 h-5 w-5 mr-[4px] rounded-[100%]"
                src={Coins}
                alt="Contact Person"
              />
              1
            </div>
          </button>
          <button
            type="submit"
            class="flex w-full justify-center border-2 border-gray-200 b rounded-md bg-gray-0 px-3 py-1.5 text-sm font-medium leading-6 text-gray-900 shadow border-1 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setOpenModal(!openModal)}
          >
            Not Interested
          </button>
        </div>
        <SuccessModal
          openModal={openSuccessModal}
          setOpenModal={setOpenSuccessModal}
          role="Deals"
        />
      </>
    );
  } else {
    <>
      {" "}
      <div className="relative rounded-lg mb-10" style={{ display: "flex" }}>
        <div className="pb-3 px-3 mx-3" style={{ flex: 2 }}>
          <div class="flex justify-between align-middle">
            <div class=" flex text-black text-xl font-medium">
              {" "}
              <div class="mt-2 mr-2 rounded">
                <Image alt="alt text." src={img} width={40} height={42} />
              </div>
              <div>
                <div class="mt-4 mx-2 text-left">{heading}</div>
                <div class="text-gray-400 text-sm mx-2">{subheading}</div>
              </div>
            </div>
          </div>
          <div class="flex gap-4">
            <div>
              <div class="mt-4 text-gray-400 text-left">Category</div>
              <div className="font-600 text-left">Food</div>
            </div>
            <div>
              <div class="mt-4 text-gray-400 text-left">Platforms</div>
              <div className="font-600 text-left">Instagram,Youtube</div>
            </div>
          </div>
          <div>
            <div class="text-left mt-4 text-gray-400">Overview</div>
            <div class="text-left">
              <div>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Campaign Type - Shoutout
                </span>
              </div>
              <div class="mt-4 w-70">
                <div class=" text-xs font-sm me-2  px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-100 border border-gray-400">
                  <div class="font-medium">Campaign Description</div>
                  <div>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words. The
                    task description will have the target audience and
                    influencer requirement.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="text-left mt-4 text-gray-400">Target Audience</div>
            <div class="text-left">
              <div CLASS="FLEX GAP-4">
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Audience Location - Civil Lines,Bareilly
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Audience Age - 24-50
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Audience Gender - Any
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Target Audience - 10k
                </span>
              </div>
            </div>
            <div class="text-left mt-4 text-gray-400">Delivery Information</div>
            <div class="text-left">
              <div CLASS="FLEX GAP-4">
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Delivery Type - Shipped By Brand
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Shipping Zone - Bareilly
                </span>
              </div>
            </div>
          </div>
          <div>
            <div class="text-left mt-4 text-gray-400">
              Influencer Requirement
            </div>
            <div class="text-left">
              <div CLASS="FLEX GAP-4">
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Influencer Size-10k
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Categories-Food,Health
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Influencer Age - 25
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Influencer Gender - Female
                </span>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <div class=" text-xs font-sm me-2 px-2 w-70 py-0.5 rounded dark:bg-gray-700 dark:text-gray-100 border border-gray-400">
              <div class="font-medium text-left">Task Description</div>
              <div class="text-left">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words. The task description will
                have the target audience and influencer requirement.
              </div>
            </div>
          </div>
        </div>

        <div class="m-4 flex flex-col" style={{ flex: 1 }}>
          <div class="flex justify-end">
            <span class="bg-blue-100  text-blue-800 text-xs pt-1.5 font-medium px-2.5 h-7 rounded-full dark:bg-blue-900 dark:text-blue-300">
              Last Updated:<b>{last_update}</b>
            </span>
          </div>
          <div className="space-x-3 mt-2">
            <div class="text-right font-medium mt-4 mx-2">You'll receive</div>
            <div class="flex mx-2 my-2 justify-end">
              <span class=" bg-[#ccdfff] text-[#3858f9] text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                Fixed Cost- TBD
              </span>
              <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                Sales Commission - 3%
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-3 mt-4 align-middle justify-end">
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaFacebookF className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
            </div>
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaTwitter className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
            </div>
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaPinterestP className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
            </div>
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaInstagram className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
            </div>
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaSave className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 text-gray-400 text-md mt-2 mr-2">
        <button
          type="submit"
          class="flex w-full justify-center border-2  border-gray-200 rounded-md bg-gray-0  py-1 text-sm font-medium leading-6 text-gray-200 bg-[#F27430] shadow border-1 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => setOpenSuccessModal(!openSuccessModal)}
        >
          Respond to Deal
          <div
            data-te-chip-init
            data-te-ripple-init
            class="[word-wrap: break-word] mr-4 flex -mt-0.5 cursor-pointer items-center justify-between rounded-[21px] bg-[transparent] px-[12px] py-0  font-normal normal-case leading-loose px-[12px] py-0  transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#4185f4] dark:bg-[transparent] dark:text-[#4185f4]"
          >
            <Image
              class="my-0 h-5 w-5 mr-[4px] rounded-[100%]"
              src={Coins}
              alt="Contact Person"
            />
            1
          </div>
        </button>
        <button
          type="submit"
          class="flex w-full justify-center border-2 border-gray-200 b rounded-md bg-gray-0 px-3 py-1.5 text-sm font-medium leading-6 text-gray-900 shadow border-1 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => setOpenModal(!openModal)}
        >
          Not Interested
        </button>
      </div>
    </>;
  }
};
export default BrandDetail;
