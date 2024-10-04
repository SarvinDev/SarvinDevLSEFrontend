"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import GlobalSearch from "../../commons/GlobalSearch";
import LocationSearch from "../../commons/LocationSearch";

import Dropdown from "../../commons/Dropdown";
import BrandDealsFilters from "../SearchInfluencers/SearchInfluencerFilters";
import CrackedCards from "./CrackedCards";
import Podium from "../../commons/icons/podium.png";

const CrackedDeals = ({ id = "0" }) => {
  const [branddeals, setBranddeals] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/get_closed_deals/${id}`
      )
      .then((response) => {
        setBranddeals(response.data?.data);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
        // Set loading to false in case of error
      });
  }, []);
  console.log(branddeals, "clos");
  return (
    <div class="mx-8">
      {" "}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div class="flex justify-between gap-2 m-5 ">
          {/* <Dropdown text="Audience Size" />
          <Dropdown text="Audience Gender" />
          <Dropdown text="Audience Age" /> */}
        </div>

        {/* <div class="flex gap-2 align-center">
          {" "}
          <Select
            styles={customStyles}
            className="multi"
            classNamePrefix="Audience Gender"
            isClearable
            isMulti
            isSearchable
            name="color"
            options={[
              {
                value: "ocean",
                label: "Ocean",
                color: "#00B8D9",
              },
              {
                value: "blue",
                label: "Blue",
                color: "#0052CC",
              },
              { value: "purple", label: "Purple", color: "#5243AA" },
              { value: "red", label: "Red", color: "#FF5630" },
              { value: "orange", label: "Orange", color: "#FF8B00" },
              { value: "yellow", label: "Yellow", color: "#FFC400" },
              { value: "green", label: "Green", color: "#36B37E" },
            ]}
          />
        </div> */}
        <div>
          <div class="flex justify-center">
            <div style={{ width: "35vw", margin: 30 }}>
              <GlobalSearch placeholder="Search for Brands,Business and Services for Marketing" />
            </div>

            <div style={{ width: "10vw", margin: 30 }}>
              <LocationSearch />
            </div>
          </div>{" "}
        </div>

        <div class="flex justify-between m-11 gap-2">
          <Dropdown text="All Filters" modalView>
            <BrandDealsFilters />
          </Dropdown>
        </div>
      </div>
      <div
        style={{
          fontSize: 30,
          fontWeight: 400,
          margin: "0px 20px",
          display: "flex",
          gap: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div>Closed Deals </div>
          <Image src={Podium} alt="podium" width={34} height={34} />
        </div>
      </div>
      <div style={{ fontSize: 14, fontWeight: 200, margin: "0px 20px" }}>
        Past Successful Deals{" "}
      </div>{" "}
      <div
        style={{
          display: "flex",
          marginTop: 20,
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {branddeals.map((brand) => (
          <CrackedCards props={brand} />
        ))}
      </div>
    </div>
  );
};
export default CrackedDeals;
