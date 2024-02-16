import React from "react";
import Image from "next/image";

import { FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const UserProfile = () => {
  return (
    <div className="flex justify-between bg-white w-[98%] ml-4 p-2 mt-4 relative">
      <div className="w-[70%] flex gap-20">
        <div className="flex flex-col items-center mr-8 p-4">
          <div className="relative overflow-hidden rounded-lg mb-4 w-[300px] h-80 bg-gray-500">
            {/* <Image
            alt="alt text."
            src="https://tse1.mm.bing.net/th?id=OIP.K7lG3005eY-tEHwlxf61qgHaFx&pid=Api&P=0&w=300&h=300"
            width={300}
            height={320}
          /> */}
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-[88px] h-[50px]">
              Call
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-[88px] h-[50px]">
              Chat
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-[88px] h-[50px]">
              Email
            </button>
          </div>
        </div>

        <div className="p-8">
          <h1 className="text-[32px] font-bold mb-2">Naman Aggarwal</h1>

          <p className="mb-4 text-[24px]">Bareilly, Uttar Pradesh</p>

          <div className="flex items-center space-x-3">
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaFacebookF className="text-blue text-xl opacity-80 group-hover:opacity-100" />
            </div>
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaTwitter className="text-blue text-xl opacity-80 group-hover:opacity-100" />
            </div>
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaPinterestP className="text-blue text-xl opacity-80 group-hover:opacity-100" />
            </div>
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaInstagram className="text-blue text-xl opacity-80 group-hover:opacity-100" />
            </div>
          </div>

          <div className="flex space-x-2 mt-4">
            <div className="px-3 py-1 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
              Primary
            </div>
            <div className="px-3 py-1 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
            Primary
            </div>
            <div className="px-3 py-1 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
            Primary
            </div>
            <div className="px-3 py-1 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
            Primary
            </div>
          </div>
        </div>
      </div>

      <div className="w-[30%] flex  justify-end pr-5 pt-2">
        <CiHeart className="w-8 h-8" />
      </div>
    </div>
  );
};

export default UserProfile;
