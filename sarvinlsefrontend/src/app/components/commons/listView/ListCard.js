import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";

export default function ListCard({ name, id, img }) {
  return (
    <div className="w-[603px] h-[172px] px-[33px] py-[36px] flex border-b-[1px] border-[#E7E7E7] m-auto">
      <div className="flex items-center justify-between    w-[449px] h-[100px]">
        <div className="flex-shrink-0  ">
          <Image
            className="w-[100px] h-[100px] rounded-full"
            src={img}
            alt="logo"
            width={500}
            height={900}
          />
        </div>
        <div className="flex items-center justify-between min-w-0 ms-4   w-[309px] h-[48px]">
          <div>
            <p className="text-[20px] font-[500] text-[#2D4050] truncate dark:text-white ">
              {name}
            </p>
            <p className="text-[16px] font-[400] text-[#2D4050] truncate dark:text-gray-400">
              {id}
            </p>
          </div>
          <div className="w-[108px] h-[20px] flex justify-between  ">
            <p>Call</p>
            <p>Chat</p>
          </div>
        </div>
      </div>
      <div className="inline-flex items-center  text-[#2D4050] ml-12 mt-1 dark:text-white">
        <CiHeart size={25} />
      </div>
    </div>
  );
}
