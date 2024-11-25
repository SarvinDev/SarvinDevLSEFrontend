"use client";

import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import InfluencerNavbar from "../InfluencerDashboard/Navbar";
import axios from "axios";
import Footer from "../commons/Footer";

import styles from "./styles.module.css";
// import Lottie from "react-lottie-player";
// import Handwave from "../commons/icons/handwave.json";

import MetricCards from "../commons/MetricCard";
import Follower from "../commons/icons/follower.png";
import Engagement from "../commons/icons/engagmentrate.png";
import Score from "../commons/icons/score.png";
import Image from "next/image";
import BottomNavbar from "./BottomNavbar";
// import Analytics from "./Analytics";
import BidDeals from "./BidDeals";
import BrandDeals from "./BrandDeals";
import EventDeals from "./EventDeals";
import Overview from "./Overview";
import { useRouter } from "next/router";
import SearchInfluencers from "./SearchInfluencers";
import Analytics from "./Analytics";
import Cracked_Deals from "./Cracked Deals";
import BrandContent from "./BrandContent";
import ClosedDeals from "./Closed Deals";

const BrandDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState([]);
  const router = useRouter();
  const { influencerView = "", id = "" } = router.query;
  const [selectedContent, setSelectedContent] = useState(
    influencerView === "false" ? "Search_Influencers" : "Overview"
  );
  useEffect(() => {
    if (influencerView == "false") {
      setSelectedContent("Search_Influencers");
      if (influencerView == "true") {
        setSelectedContent("Overview");
      }
    }
  }, [influencerView]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (influencerView == "false") {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/info`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setBrands(response?.data?.data); // Adjust according to your API response structure
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    } else {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/brand?brand_id=${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setBrands(response?.data?.data); // Adjust according to your API response structure
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  }, [influencerView]);

  const DASHBOARD_CONTENT = {
    // Analytics: <Analytics />,
    Overview: <Overview />,
    Bid_Deals: <BidDeals />,
    Brand_Deals: <BrandDeals influencerView={influencerView} id={id} />,
    Event_Deals: <EventDeals />,
    Search_Influencers: <SearchInfluencers />,
    Analytics: <Analytics />,
    Cracked_Deals: <Cracked_Deals />,
    Brand_Content: <BrandContent />,
    Closed_Deals: <ClosedDeals id={id} />,
  };
  console.log(brands);

  return (
    <div>
      {influencerView == "true" ? <InfluencerNavbar /> : <NavBar id={id} />}
      <div className={styles.profile_container}>
        <div style={{ flex: 0.5, marginLeft: 10 }}>
          <img
            class="w-20 h-20  rounded-full"
            src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/07/cover-10.jpg?ssl=1&quality=80&w=f"
            alt="Rounded avatar"
          ></img>
        </div>
        <div style={{ flex: 2 }}>
          <div
            className={styles.complete_your_profile_text}
            style={{ display: "flex" }}
          >
            Hi! {brands?.brand_name}{" "}
            {/* <Lottie
              loop
              animationData={Handwave}
              play
              style={{
                width: "7%",
                height: "7%",
                marginLeft: 4,
                marginTop: 4,
                transform: "rotate(30deg)",
              }}
            /> */}
          </div>
          <div className={styles.contact_info}>
            <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              Category: {brands?.category}
            </span>
          </div>
        </div>
        <div style={{ flex: 5 }}>
          <div class="flex gap-3">
            <div style={{ flex: 2 }}>
              <MetricCards
                value={brands?.followers}
                valueStyle="font-light mb-2 font-sans text-xl text-gray-700 dark:text-gray-400"
                title="Followers"
                icon={<Image src={Follower} width={48} height={0} alt="Icon" />}
                trend={{
                  slope: -1,
                  description: "Compared to last week",
                  value: "0.5%",
                }}
              />
            </div>
            <div style={{ flex: 2 }}>
              <MetricCards
                value={"27.5"}
                valueStyle="font-light mb-2 font-sans text-xl text-gray-700 dark:text-gray-400"
                title="Quality Score"
                icon={
                  <Image src={Engagement} width={48} height={0} alt="Icon" />
                }
                trend={{
                  slope: 1,
                  description: "Compared to last week",
                  value: "5%",
                }}
              />
            </div>
            <div style={{ flex: 2 }}>
              <MetricCards
                value={
                  influencerView == "false" ? brands?.coins : "Location Rank"
                }
                valueStyle="font-light mb-2 font-sans text-xl text-gray-700 dark:text-gray-400"
                title={
                  influencerView == "false" ? "Sarvin Coins" : "Location Rank"
                }
                icon={<Image src={Score} width={48} height={0} alt="Icon" />}
                trend={{
                  slope: -1,
                  description: "Compared to last week",
                  value: "1.5%",
                }}
              />
            </div>
          </div>
        </div>
        {/* <div className={styles.status}>
          <div style={{ width: "40%" }}>
            <div style={{ padding: "0px 28px" }}>
              {" "}
              <CircularProgressbar value={66} text="66%" />
            </div>
            <div style={{ fontSize: 12, fontWeight: 700 }}>
              Profile Complete
            </div>
          </div>
        </div> */}
      </div>
      <BottomNavbar
        selectedContent={selectedContent}
        setSelectedContent={setSelectedContent}
        influencerView={influencerView}
      />

      {DASHBOARD_CONTENT[selectedContent]}

      <Footer />
    </div>
  );
};

export default BrandDashboard;
