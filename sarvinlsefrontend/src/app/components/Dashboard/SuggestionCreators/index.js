"use client";

import React, { useState } from "react";
import CreaterCard from "../../commons/CreaterCard/CreaterCard";
const SuggestionCreators = ({ text = null, children }) => {
  return (
    <div style={{ margin: "0px 20px" }}>
      <div style={{ fontSize: 30, fontWeight: 600, margin: 20 }}>
        Related Suggestions
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 20,
          justifyContent: "space-around",
        }}
      >
        <CreaterCard
          name="Rohit Sharma"
          img="https://media.istockphoto.com/id/529278045/photo/working-on-something-great.jpg?s=612x612&w=is&k=20&c=lfzJ5xpUSYkgNCsAK5UO6hcP0BDlAIJIXrDw-qlmktc="
        />
        <CreaterCard
          name="Prajakta Koli"
          img="https://t3.ftcdn.net/jpg/03/18/04/12/360_F_318041202_dSFWSp38bnmiNxhLQnJDgnszmCoW7W0a.jpg"
        />
        <CreaterCard
          name="Osama-Bin-Laden"
          img="https://media.istockphoto.com/id/1188563581/photo/head-shot-portrait-offended-upset-african-american-girl-feeling-bad.jpg?s=612x612&w=0&k=20&c=cY8vMx4MyrcaL0KfmFkHluHzx0ufQfh-XExtbMN1hm8="
        />
        <CreaterCard
          name="Lebron James"
          img="https://media.istockphoto.com/id/1213961316/photo/thoughtful-puzzled-african-american-man-looking-aside-at-copy-space.jpg?s=612x612&w=0&k=20&c=Kj347KnMRdm9MXO7wOFWpmcARkL7XkcVBkJJiEnSuug="
        />
      </div>
    </div>
  );
};

export default SuggestionCreators;
