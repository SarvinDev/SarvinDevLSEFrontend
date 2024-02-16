import React from "react";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaPinterestP, FaFacebookF } from "react-icons/fa";

const CreaterCard = ({
  name = "Naman Agarwal",
  profession = "CEO and Founder",
  img = "https://tse1.mm.bing.net/th?id=OIP.K7lG3005eY-tEHwlxf61qgHaFx&pid=Api&P=0&w=300&h=300",
}) => {
  return (
    <div className="max-w-sm bg-black relative group">
      <a
        href="#"
        className="relative block  group-hover:opacity-70 transition-opacity duration-300"
      >
        <div className="relative overflow-hidden">
          <Image alt="alt text." src={img} width={300} height={200} />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
          <div className="flex items-center space-x-3">
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaFacebookF className="text-white text-xl opacity-80 group-hover:opacity-100" />
            </div>
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaTwitter className="text-white text-xl opacity-80 group-hover:opacity-100" />
            </div>
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaPinterestP className="text-white text-xl opacity-80 group-hover:opacity-100" />
            </div>
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaInstagram className="text-white text-xl opacity-80 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </a>
      <div className="p-5 bg-white">
        <div className="text-black text-xl font-bold">{name}</div>
        <div className="text-gray-400 text-lg">{profession}</div>
      </div>
    </div>
  );
};

export default CreaterCard;
