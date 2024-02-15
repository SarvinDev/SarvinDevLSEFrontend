import React from "react";
import Image from "next/image";

export default function ListCard() {
  return (
    <div className="  w-[27vw] h-[6vh] px-[33px] py-[36px]  rounded-md flex border-[1px] border-[#E7E7E7] ">
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0  ">
          <Image
            className="w-[50px] h-[50px] rounded-full"
            src="/Images/man2.jpeg"
            alt="logo"
            width={500}
            height={900}
          />
        </div>
        <div className="flex items-center justify-between min-w-0 ms-4   w-[22vw] h-[6vh]">
          <div>
            <p className="text-[12px] font-[500] text-[#2D4050] truncate dark:text-white ">
              @username
            </p>
            <p className="text-[10px] font-[400] text-gray-400 truncate dark:text-gray-400">
              User Name|Follower Count
            </p>
          </div>
          <div style={{ fontSize: 12, fontWeight: 600 }}>Change Account</div>
        </div>
      </div>
    </div>
  );
}
