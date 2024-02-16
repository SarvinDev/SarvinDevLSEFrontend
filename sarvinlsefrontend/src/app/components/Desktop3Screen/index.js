"use client";

import CreaterCard from "../commons/CreaterCard";
import GlobalSearch from "../commons/GlobalSearch";
import UserProfile from "../commons/UserProfile";
import LocationSearch from "../commons/LocationSearch";
import NavBar from "../commons/Navbar";
import React, { useState } from "react";

const Desktop3 = () => {
  const [selectedTab, setSelectedTab] = useState("Products");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div style={{backgroundColor:'lightgrey'}} >
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // backgroundColor:'gray',
          marginTop: "5vh",
        }}
      >
        <div style={{ width: "35vw", justifyContent: "center", margin: 10 }}>
          <GlobalSearch />
        </div>

        <div style={{ width: "10vw", margin: 10 }}>
          <LocationSearch />
        </div>
      </div>
      
      <UserProfile />

<div className=" bg-white w-[98%] ml-4 p-2 mt-4" >
      <div className="flex mt-4 pl-4">
        <div
          className={`cursor-pointer mr-8 text-2xl font-bold ${
            selectedTab === "Products" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleTabClick("Products")}
        >
          Products
        </div>
        <div
          className={`cursor-pointer text-2xl font-bold ${
            selectedTab === "Services" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleTabClick("Services")}
        >
          Services
        </div>
      </div>
      <div className="flex mt-4 gap-6 p-4">
        {[...Array(5)].map((_, index) => (
          <div className="" key={index} >
            <CreaterCard  />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Desktop3;
