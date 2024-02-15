import React from "react";
import MapIntegration from "../commons/MapIntegration";
import NavBar from "../commons/Navbar";
import GlobalSearch from "../commons/GlobalSearch";
import LocationSearch from "../commons/LocationSearch";
import CardList from "./CardsList";
import Listing from "./Listing";
import SortByComponent from "../commons/SortByComponent/SortByComponent";
export default function Desktop2() {
  return (
    <div className="bg-white">
      <NavBar />
      <MapIntegration h={"20vh"} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-5vh",
        }}
      >
        <div style={{ width: "35vw", justifyContent: "center", margin: 10 }}>
          <GlobalSearch />
        </div>

        <div style={{ width: "10vw", margin: 10 }}>
          <LocationSearch />
        </div>
      </div>

      <div className="w-[835px]  m-auto mt-20">
        {/* <Filters /> */}
        <div className=" flex justify-end w-[820px]">
          <SortByComponent />
        </div>

        <CardList />
        <br />
        <br />
        <br />
        <Listing />
      </div>
    </div>
  );
}
