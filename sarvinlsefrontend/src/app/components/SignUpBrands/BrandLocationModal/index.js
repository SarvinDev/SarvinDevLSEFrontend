"use client";

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import Modal from "../../commons/modal";
import PartyEmoji from "../../commons/icons/celebrateconfetti.json";
import Image from "next/image";
import Confetti from "react-confetti";
import Lottie from "react-lottie-player";
import { FooterDivider } from "flowbite-react";
import Toast from "../../commons/toast/index";
import Select from "react-select";

// Array of Indian cities (You can use a more extensive dataset if needed)
const cities = [
  { label: "Mumbai", value: "Mumbai" },
  { label: "Delhi", value: "Delhi" },
  { label: "Bangalore", value: "Bangalore" },
  // Add more cities as needed
];
const States = [
  { label: "Uttar Pradesh", value: "UP" },
  { label: "Delhi", value: "Delhi" },
  { label: "Madhya Pradesh", value: "MP" },
  // Add more cities as needed
];
const Category = [
  { label: "Food", value: "food" },
  { label: "Beauty Product", value: "beauty" },
  { label: "Tech", value: "tech" },
  { label: "Fashion", value: "fashion" },
  // Add more Category's as needed
];
const API_ENDPOINT = "https://api.geoapify.com/v1/geocode/reverse?";

const API_KEY = "apiKey=1b2a1437b0d24b1db3eef34e3768d5fd";

const BrandLocationModal = ({
  openModal = False,
  setOpenModal = () => {},
  handleSubmit,
  setLat,
  setLong,
  setCategory,
  signUp,
}) => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [responseText, setResponseText] = useState({});
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (!isFirstRender.current) {
      setLoading(true);
      axios
        .get(`${API_ENDPOINT}lat=${latitude}&lon=${longitude}&${API_KEY}`)
        .then((response) => {
          setResponseText(JSON.parse(response?.request?.responseText));
          setLoading(false);
          setLocation(String(responseText?.features?.[0]?.properties?.formatted));
          setDisable(true);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false); // Set loading to false in case of error
        });
    } else {
      // Set the flag to false after the first render
      isFirstRender.current = false;
    }
  }, [latitude, longitude]);

  const getLocation = async () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position?.coords?.latitude);
      setLongitude(position?.coords?.longitude);
      setLat(position?.coords?.latitude);
      setLong(position?.coords?.longitude);
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!latitude || !longitude) {
      setShowToast(true);
      return;
    }
    setSubmitLoading(true);
    try {
      const response = await signUp();
      handleSubmit(response.flag,response.response);
      setOpenModal(false);
    } catch (error) {
      console.error("Error during sign-up process:", error);
    }
    setSubmitLoading(false);
  };

  return (
    <>
      <div style={{ maxWidth: "50%" }}>
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          <div class="flex align-middle gap-2">
            <h2 class=" text-2xl font-semibold mt-2  text-gray-900">Your account is confirmed!</h2>
            <Lottie loop animationData={PartyEmoji} play style={{ width: "5%", height: "5%", marginTop: 0 }} />
          </div>
          <div class="mt-4 text-gray-900 flex justify-start">
            We need just a few more details so we can deliver a more personalized experience for you.
          </div>
          <div class="mt-4">
            <FooterDivider />
          </div>
          <form class="max-w-full mx-auto mt-4" onSubmit={(e) => onSubmit(e)}>
            <label for="Location" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
              Locations
            </label>{" "}
            <div className="w-full flex justify-center gap-2">
              <Select
                options={States}
                isDisabled={disable}
                placeholder="Select a State"
                isClearable={true}
                isSearchable={true}
                className="w-full px-4 py-2 text-sm leading-tight text-gray-700 border rounded-lg appearance-none flex justify-center focus:outline-none focus:border-blue-500"
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    boxShadow: "none",
                    borderColor: state.isFocused ? "#4F46E5" : "#E5E7EB",
                    "&:hover": {
                      borderColor: "#f27430",
                    },
                  }),
                }}
              />
              <Select
                options={cities}
                isDisabled={disable}
                placeholder="Select a city"
                isClearable={true}
                isSearchable={true}
                className="w-full px-4 py-2 text-sm leading-tight text-gray-700 border rounded-lg appearance-none flex justify-center focus:outline-none focus:border-blue-500"
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    boxShadow: "none",
                    borderColor: state.isFocused ? "#4F46E5" : "#E5E7EB",
                    "&:hover": {
                      borderColor: "#f27430",
                    },
                  }),
                }}
              />
            </div>
            <div>OR</div>
            {loading && (
              <div role="status" class="flex justify-center">
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#F27430]"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            )}
            {responseText?.features?.[0]?.properties?.formatted}
            <div class="mt-2">
              <button
                type="button"
                class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-600 focus:outline-none bg-gray-100 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#F27430] focus:z-10 focus:ring-4 focus:ring-gray-100 "
                onClick={() => getLocation()}
              >
                Click Me For Getting Your Location
              </button>
              <div class="font-thin">(If the location is incorrect, click on it again.)</div>
            </div>
            <label for="countries" class="block mb-2 mt-5 text-sm font-semibold text-gray-900 dark:text-white">
              Category
            </label>{" "}
            <div className="w-full flex justify-center gap-2">
              <Select
                options={Category}
                placeholder="Which Type of Influencer You Are?"
                onChange={(selectedOptions) => {
                  if (selectedOptions && selectedOptions.length > 0) {
                    const selectedValues = selectedOptions.map(option => option.value); // Extract the values
                    setCategory(selectedValues.join(',')); 
                  } else {
                    setCategory(""); 
                  }
                }}
                isClearable={true}
                isSearchable={true}
                isMulti
                className="w-full px-4 py-2 text-sm leading-tight text-gray-700 border rounded-lg appearance-none flex justify-center focus:outline-none focus:border-blue-500"
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    boxShadow: "none",
                    borderColor: state.isFocused ? "#4F46E5" : "#E5E7EB",
                    "&:hover": {
                      borderColor: "#f27430",
                    },
                  }),
                }}
                required
              />
            </div>
            <div class="sm:mx-auto mt-6 flex gap-4 justify-end">
              <button
                type="submit"
                class="rounded-lg bg-[#F27430] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {submitLoading ? (
                  <svg
                    aria-hidden="true"
                    class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#F27430]"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
                  "Submit"
                )}
              </button>
              <button
                type="button"
                class="rounded-lg bg-[#412c0e] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  setOpenModal(!openModal);
                }}
              >
                Close
              </button>
            </div>
            {showToast && (
              <div className="w-full flex justify-end mt-4">
                <div className="w-1/2">
                  <Toast text="Enter your location." type={2} setShowToast={setShowToast} />
                </div>
              </div>
            )}
          </form>
        </Modal>
      </div>
    </>
  );
};

export default BrandLocationModal;
