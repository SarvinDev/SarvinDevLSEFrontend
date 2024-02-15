"use client";

import React from "react";

const LocationSearch = () => {
  return (
    <div>
      <form>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M11.7533 21.815C11.9229 21.935 12.1256 21.9995 12.3333 21.9995C12.5411 21.9995 12.7438 21.935 12.9133 21.815C13.2173 21.598 20.3623 16.44 20.3333 10C20.3333 5.589 16.7443 2 12.3333 2C7.92234 2 4.33334 5.589 4.33334 9.996C4.30434 16.44 11.4493 21.598 11.7533 21.815ZM12.3333 4C15.6423 4 18.3333 6.691 18.3333 10.004C18.3543 14.442 13.9453 18.427 12.3333 19.735C10.7223 18.427 6.31234 14.442 6.33334 10C6.33334 6.691 9.02434 4 12.3333 4Z"
                fill="#008ECC"
              />
              <path
                d="M11.3334 14H13.3334V11H16.3334V9H13.3334V6H11.3334V9H8.33337V11H11.3334V14Z"
                fill="#008ECC"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#F3F9FB] focus:ring-blue-500 focus:border-blue-500 dark:bg-[#F3F9FB] dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:gray-500 dark:focus:gray-500"
            placeholder="Locations"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default LocationSearch;
