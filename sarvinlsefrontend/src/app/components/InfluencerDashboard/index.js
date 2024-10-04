"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./Navbar";
import LocationSearch from "../commons/LocationSearch";
import GlobalSearch from "../commons/GlobalSearch";

import Dropdown from "../commons/Dropdown";

import Footer from "../commons/Footer";

import styles from "./styles.module.css";
import Lottie from "react-lottie-player";
import Handwave from "../commons/icons/handwave.json";

import MetricCards from "../commons/MetricCard";
import Follower from "../commons/icons/follower.png";
import Engagement from "../commons/icons/engagmentrate.png";
import Score from "../commons/icons/score.png";
import Image from "next/image";
import BottomNavbar from "./BottomNavbar";
import BrandSearch from "./BrandSearch";
import Analytics from "./Analytics";
import BidDeals from "./BidDeals";
import BrandDeals from "./BrandDeals";
import DealMatch from "./DealMatch";
import EventDeals from "./EventDeals";
import CrackedDeals from "./Cracked Deals";
import SavedDeals from "./SavedDeals";
import YourContent from "./YourContent";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
import Overview from "./Overview";
import ReelsInspiration from "./ReelsInspiration";
import Following_Brands from "./FollowingBrands";
import { stringify } from "querystring";

const InfluencerDashboard = () => {
  const router = useRouter();
  const { brandView = false, id } = router.query;
  const [selectedContent, setSelectedContent] = useState("Brand_Search");
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const DASHBOARD_CONTENT = {
    Following_Brands: <Following_Brands isTabletOrMobile={isTabletOrMobile} />,
    Brand_Search: <BrandSearch isTabletOrMobile={isTabletOrMobile} />,
    Analytics: <Analytics />,
    Your_Content: <YourContent isTabletOrMobile={isTabletOrMobile} />,
    Bid_Deals: <BidDeals isTabletOrMobile={isTabletOrMobile} />,
    Brand_Deals: <BrandDeals />,
    Deal_Match: <DealMatch />,
    Event_Deals: <EventDeals isTabletOrMobile={isTabletOrMobile} />,
    Cracked_Deals: <CrackedDeals isTabletOrMobile={isTabletOrMobile} />,
    Saved_Deals: <SavedDeals isTabletOrMobile={isTabletOrMobile} />,
    Overview: <Overview />,
    ReelsInspiration: <ReelsInspiration />,
  };
  const [branddeals, setBranddeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/get_user_details`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setBranddeals(response.data);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
        // Set loading to false in case of error
      });
  }, [id]);
  console.log(branddeals, "das");
  return (
    <div>
      <NavBar isTabletOrMobile={isTabletOrMobile} />
      {!isTabletOrMobile ? (
        <div className={styles.profile_container}>
          <div style={{ flex: 0.5, marginLeft: 10 }}>
            <img
              class="w-20 h-20  rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Rounded avatar"
            ></img>
          </div>
          <div style={{ flex: 2 }}>
            <div
              className={styles.complete_your_profile_text}
              style={{ display: "flex" }}
            >
              Hi! {branddeals?.full_name}{" "}
              <Lottie
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
              />
            </div>
            <div className={styles.contact_info}>
              Username: {branddeals?.user_name}
            </div>
          </div>
          <div style={{ flex: 5 }}>
            <div class="flex gap-3">
              <div style={{ flex: 2 }}>
                <MetricCards
                  value={216}
                  valueStyle="font-light mb-2 font-sans text-xl text-gray-700 dark:text-gray-400"
                  title="Followers"
                  icon={
                    <Image src={Follower} width={48} height={0} alt="Icon" />
                  }
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
                {brandView ? (
                  <MetricCards
                    valueStyle="font-light mb-2 font-sans text-xl text-gray-700 dark:text-gray-400"
                    value={branddeals?.engagement_matric}
                    title="Engagement Rate"
                    icon={
                      <Image
                        src={Engagement}
                        width={48}
                        height={0}
                        alt="Icon"
                      />
                    }
                    trend={{
                      slope: -1,
                      description: "Compared to last week",
                      value: "0.5%",
                    }}
                  />
                ) : (
                  <MetricCards
                    value={branddeals?.coins}
                    valueStyle="font-light mb-2 font-sans text-xl text-gray-700 dark:text-gray-400"
                    title="Sarvin Credits"
                    icon={
                      <Image src={Score} width={48} height={0} alt="Icon" />
                    }
                    trend={{
                      slope: -1,
                      description: "Compared to last week",
                      value: "1.5%",
                    }}
                  />
                )}
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
      ) : (
        <div>
          <div class="mt-16">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                class="w-20 h-20  rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Rounded avatar"
              ></img>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className={styles.complete_your_profile_text}
                style={{ display: "flex", justifyContent: "center" }}
              >
                Hi! Naman Agarwal{" "}
              </div>
              <div className={styles.contact_info}>
                Software Engineer,Akamai Technologies
              </div>
            </div>
            <div class="flex gap-2 justify-center mx-2">
              <div style={{ flex: 2 }}>
                <MetricCards
                  value={216}
                  valueStyle="font-light mb-2 font-sans text-md text-gray-700 dark:text-gray-400"
                  title="Followers"
                  icon={
                    <Image src={Follower} width={30} height={0} alt="Icon" />
                  }
                  isTabletOrMobile={isTabletOrMobile}
                />
              </div>
              <div style={{ flex: 2 }}>
                <MetricCards
                  value={"27.5"}
                  valueStyle="font-light mb-2 font-sans text-md text-gray-700 dark:text-gray-400"
                  title="Quality Score"
                  icon={
                    <Image src={Engagement} width={30} height={0} alt="Icon" />
                  }
                  isTabletOrMobile={isTabletOrMobile}
                />
              </div>
              <div style={{ flex: 2 }}>
                <MetricCards
                  value={"87"}
                  valueStyle="font-light mb-2 font-sans text-md text-gray-700 dark:text-gray-400"
                  title="Sarvin Credits"
                  icon={<Image src={Score} width={30} height={0} alt="Icon" />}
                  isTabletOrMobile={isTabletOrMobile}
                />
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
        </div>
      )}
      <BottomNavbar
        selectedContent={selectedContent}
        setSelectedContent={setSelectedContent}
        isTabletOrMobile={isTabletOrMobile}
        brandView={brandView}
      />

      {DASHBOARD_CONTENT[selectedContent]}

      <Footer />
    </div>
  );
};

export default InfluencerDashboard;
