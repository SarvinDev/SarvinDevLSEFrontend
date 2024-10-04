"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import User from "../Profile/User";
import ProfileDetails from "./ProfileDetails";
import NavBar from "../commons/Navbar";
import Lottie from "react-lottie-player";
import Handwave from "../commons/icons/handwave.json";
import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

function Profile() {
  const [branddeals, setBranddeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/get_user_details`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setBranddeals(response.data);
        setLinks(response?.data?.content_links);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
        // Set loading to false in case of error
      });
  }, []);
  console.log(branddeals, "das");
  return (
    <div style={{ backgroundColor: "#eff2f6" }}>
      <NavBar />
      <div className={styles.profile_container}>
        <div className={styles.complete_your_profile_container}>
          <div style={{ marginLeft: "14px" }}>
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
                  width: "3.5%",
                  height: "3.5%",
                  marginLeft: 10,
                  transform: "rotate(30deg)",
                }}
              />
            </div>
            <div className={styles.contact_info}>
              Please complete your contact info, education, work experience,
              resume, links, and equal employment info to finish your profile.
            </div>
          </div>
        </div>

        <div className={styles.status}>
          <div style={{ width: "40%" }}>
            <div style={{ padding: "0px 28px" }}>
              {" "}
              <CircularProgressbar value={66} text="66%" />
            </div>
            <div style={{ fontSize: 12, fontWeight: 700 }}>
              Profile Complete
            </div>
          </div>
        </div>
      </div>
      <div className={styles.user_details_container}>
        <div className={styles.user_container}>
          <User branddeals={branddeals} />
        </div>
        <div className={styles.profile_details_container}>
          <ProfileDetails
            branddeals={branddeals}
            links={links}
            setLinks={setLinks}
          />
        </div>
      </div>
    </div>
  );
}
export default Profile;
