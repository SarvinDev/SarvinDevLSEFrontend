"use client";

import React from "react";

const Chips = ({ text, img }) => {
  return (
    <div>
      <div
        data-te-chip-init
        data-te-ripple-init
        class="[word-wrap: break-word] my-[5px] mr-4 flex h-[42px] cursor-pointer items-center justify-between rounded-[21px] bg-[transparent] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose border border-[#3b71ca] px-[12px] py-0 text-[13px]  transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#4185f4] dark:bg-[transparent] dark:text-[#4185f4]"
      >
        <img
          class="my-0 -ml-[12px] mr-[8px] h-[inherit] w-[inherit] rounded-[100%]"
          src={img}
          alt="Contact Person"
        />
        {text}
      </div>
    </div>
  );
};

export default Chips;
