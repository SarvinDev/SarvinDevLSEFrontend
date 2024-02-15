"use client";

import React from "react";
import MapIntegration from "../commons/MapIntegration";
import NavBar from "../commons/Navbar";
import LocationSearch from "../commons/LocationSearch";
import GlobalSearch from "../commons/GlobalSearch";
import Chips from "../commons/Chips";
import Collapse from "../commons/Collapse";
import Categories from "./Categories";
import RisingCreators from "./RisingCreators";
import SuggestionCreators from "./SuggestionCreators";
import Footer from "../commons/Footer";
import { Button } from "../commons/button";

const Dashboard = () => {
  return (
    <div style={{ width: "100vw" }}>
      <NavBar />
      <MapIntegration h={"40vh"} />
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <Chips
          text={"Actors"}
          img="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
        />
        <Chips
          text={"Artist"}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQdb3b5E6XD4t2GeELeZgts9AvuTKtYK23g&usqp=CAU"
        />
        <Chips
          text={"Musicians"}
          img="https://st4.depositphotos.com/1077687/29907/v/450/depositphotos_299073292-stock-illustration-men-with-musicals-instruments-on.jpg"
        />
        <Chips
          text={"Singer"}
          img="https://w7.pngwing.com/pngs/305/570/png-transparent-singer-singing-free-singing-s-microphone-fictional-character-cartoon.png"
        />
        <Chips
          text={"Designer"}
          img="https://img.freepik.com/premium-photo/creative-colorful-abstract-human-brain-dark-background-knowledge-concept-generative-ai_58409-32417.jpg"
        />
        <Chips
          text={"Coders"}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9iVHFERvJNWy35cSvxSyp79AIHYc08OaXrsaU2sfkE2THiuIKJOxEqxioeXtELpQqY-E&usqp=CAU"
        />
      </div>
      <div style={{ margin: 10, display: "flex", justifyContent: "flex-end" }}>
        <Collapse
          text={
            <div
              style={{
                color: "#008ecc",
                width: "100vw",
                boxShadow: "none",
              }}
            >
              Show More
            </div>
          }
        >
          <div>
            <Categories />
          </div>
        </Collapse>
      </div>
      <RisingCreators />
      <SuggestionCreators />
      <br />
      <Footer />
    </div>
  );
};

export default Dashboard;
