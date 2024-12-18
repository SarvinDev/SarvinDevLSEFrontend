"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import CreaterCard from "../../commons/CreaterCard/CreaterCard";
const RisingCreators = ({ text = null, children }) => {
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/get_all_influencers_list`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setInfluencers(response?.data || []); // Update if API response structure differs
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  return (
    <div style={{ margin: "0px 20px" }}>
      <div style={{ fontSize: 30, fontWeight: 600, margin: 20 }}>
        Rising Creators
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 20,
          justifyContent: "space-around",
        }}
      >
        <CreaterCard
          name="Naman Agarwal"
          img="https://t4.ftcdn.net/jpg/02/61/52/95/360_F_261529596_YZWJaMnYFSCM0FSCrxs71o6RrZ9MpP4D.jpg"
        />
        <CreaterCard
          name="Mayank Gupta"
          img="https://media.istockphoto.com/id/1296158947/photo/portrait-of-creative-trendy-black-african-male-designer-laughing.jpg?s=612x612&w=0&k=20&c=1Ws_LSzWjYvegGxHYQkkgVytdpDcnmK0upJyGOzEPcg="
        />
        <CreaterCard
          name="Sahil Rohera"
          img="https://img.freepik.com/free-photo/close-up-portrait-curly-haired-young-woman-isolated_273609-48309.jpg"
        />
        <CreaterCard
          name="Sahil Arora"
          img="https://media.istockphoto.com/id/1126844596/photo/young-male-with-a-smartphone.jpg?s=612x612&w=is&k=20&c=WlOq3mLDXOl_C3SJcnUKBy-VMmFvLfR2VK0OZZWFJyo="
        />
      </div>
    </div>
  );
};

export default RisingCreators;
