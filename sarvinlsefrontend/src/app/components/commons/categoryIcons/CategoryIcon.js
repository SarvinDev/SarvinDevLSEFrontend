import React from "react";
import { FaHotel } from "react-icons/fa6";

export default function CategoryIcon() {
  return (
    <div className="w-20 ">
      <div className="w-16 h-16 border-slate-300 border-2 rounded-xl hover:shadow-lg transition duration-300 ease-in-out cursor-pointer m-auto">
        <FaHotel size={30} className="m-auto mt-4" />
      </div>
      <p className="mt-2 m-auto text-center">Hotels</p>
    </div>
  );
}
