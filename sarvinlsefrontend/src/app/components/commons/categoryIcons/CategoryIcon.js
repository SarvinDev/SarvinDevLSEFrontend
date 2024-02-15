import React from "react";
import { FaHotel } from "react-icons/fa6";

export default function CategoryIcon({ name = "Title", icon = null }) {
  return (
    <div>
      <div className="w-16 h-16 border-slate-300 border-2 rounded-xl hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
        {icon}
      </div>
      <p className="text-center mt-1 w-16 h-16" style={{ fontSize: 12 }}>
        {name}
      </p>
    </div>
  );
}
