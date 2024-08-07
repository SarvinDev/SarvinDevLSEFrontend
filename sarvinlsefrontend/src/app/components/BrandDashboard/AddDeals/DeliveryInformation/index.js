"use client";

import React, { useState } from "react";
import BackGroundImage from "../BackGroundImage/index";
import Toast from "../Toast"; // Ensure you have a Toast component for notifications

const DeliveryInformation = ({
  deliveryLocation,
  setDeliveryLocation,
  deliveryType,
  setDeliveryType,
  handleNext,
  handlePrevious,
}) => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const handleCloseError = () => {
    setError(false);
  };

  const handleNextClick = () => {
    if (!deliveryLocation) {
      setMessage("Please select a delivery location.");
      setError(true);
    } else if (!deliveryType) {
      setMessage("Please select a delivery type.");
      setError(true);
    } else {
      setError(false);
      handleNext();
    }
  };

  return (
    <>
      <BackGroundImage />
      <div style={{ position: "relative", opacity: 1, overflow: "hidden" }}>
        <div className="w-full sm:h-[70vh] flex flex-col justify-center items-center px-6 py-12 lg:px-8">
          <div className="w-2/3 h-full px-10 flex flex-col items-center justify-between">
            <div className="w-full">
              <h1 className="my-4 text-center flex justify-center  text-6xl text-gray-900">
                Delivery Information
              </h1>
              <div className="mt-10">
                <h3 className="text-start text-gray-900">
                  Enter the following details
                </h3>
                <div className="mt-2">
                  <select
                    id="location"
                    name="location"
                    value={deliveryLocation}
                    onChange={(e) => setDeliveryLocation(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 px-4 py-3 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  >
                    <option className="text-black" value="" disabled>
                      Location
                    </option>
                    <option className="text-black" value="location1">
                      Location 1
                    </option>
                    <option className="text-black" value="location2">
                      Location 2
                    </option>
                  </select>
                </div>
                <div className="mt-2">
                  <select
                    id="delivery-type"
                    name="delivery-type"
                    value={deliveryType}
                    onChange={(e) => setDeliveryType(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 px-4 py-3 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  >
                    <option className="text-black" value="" disabled>
                      Delivery type
                    </option>
                    <option className="text-black" value="type1">
                      Type 1
                    </option>
                    <option className="text-black" value="type2">
                      Type 2
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <button
                onClick={handlePrevious}
                type="button"
                className="flex justify-center rounded-md bg-gray-600 px-7 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Previous
              </button>
              <button
                onClick={handleNextClick}
                type="button"
                className="flex justify-center rounded-md bg-[#F27430] px-7 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {error && <Toast handleCloseError={handleCloseError} message={message} />}
    </>
  );
};

export default DeliveryInformation;
