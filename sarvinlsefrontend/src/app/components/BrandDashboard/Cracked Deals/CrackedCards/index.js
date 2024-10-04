"use client";

import React, { useState } from "react";
import Image from "next/image";
import Podium from "../../../commons/icons/podium.png";
import BrandListCard from "../../commons/BrandListCards";

const CrackedCards = ({ text = null, children }) => {
  const [branddeals, setBranddeals] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/response/fetch/cracked_deals`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
  return (
    <div style={{ margin: "0px 20px" }}>
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
          <div>Cracked Deals </div>
          <Image src={Podium} alt="podium" width={34} height={34} />
        </div>
      </div>

      <div style={{ fontSize: 14, fontWeight: 200, margin: "0px 20px" }}>
        Lets Start Earning By Cracking The Best Suitable Deals For You{" "}
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 20,
          paddingRight: 14,
          paddingLeft: 14,
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <BrandListCard
          heading="Comedy Night"
          subheading="Creme's Castle"
          img="https://cdn3.vectorstock.com/i/1000x1000/02/47/stand-up-comedy-open-mic-vector-20050247.jpg"
          cardType="Cracked"
        />
        <BrandListCard
          heading="Open Mic in Bareilly"
          subheading="Cafe Coffee Day"
          img="https://www.aacpl.net/sites/default/files/2023-11/180119-052021_open-mic.jpg"
          cardType="Cracked"
        />
      </div>
    </div>
  );
};

export default CrackedCards;
