"use client";

import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.439 19C13.2139 18.9996 14.9378 18.4054 16.336 17.312L20.732 21.708L22.146 20.294L17.75 15.898C18.844 14.4997 19.4385 12.7754 19.439 11C19.439 6.589 15.85 3 11.439 3C7.02797 3 3.43896 6.589 3.43896 11C3.43896 15.411 7.02797 19 11.439 19ZM11.439 5C14.748 5 17.439 7.691 17.439 11C17.439 14.309 14.748 17 11.439 17C8.12996 17 5.43896 14.309 5.43896 11C5.43896 7.691 8.12996 5 11.439 5Z"
                fill="#4285F4"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#F3F9FB] focus:ring-blue-500 focus:border-blue-500 dark:bg-[#F3F9FB] dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:gray-500 dark:focus:gray-500"
            placeholder="Search for products, services and creators nearby"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
