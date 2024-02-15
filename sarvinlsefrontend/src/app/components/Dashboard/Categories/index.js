"use client";

import React, { useState } from "react";
import CategoryIcon from "../../commons/categoryIcons/CategoryIcon";
import Home from "../../commons/icons/home";
import Pencil from "../../commons/icons/artist.png";
import RealEstate from "../../commons/icons/realstateagent.png";
import Business from "../../commons/icons/Business.png";
import FoodChain from "../../commons/icons/FoodChain.png";
import Sweet from "../../commons/icons/Sweet.png";
import Bride from "../../commons/icons/bride.png";
import Coaching from "../../commons/icons/coaching.png";
import Events from "../../commons/icons/event.png";
import Makeover from "../../commons/icons/eyeshadow.png";
import Health from "../../commons/icons/health.png";
import Hotel from "../../commons/icons/hotel.png";
import Lawyers from "../../commons/icons/law.png";
import Plumber from "../../commons/icons/plumber.png";
import Room from "../../commons/icons/room.png";
import Safety from "../../commons/icons/safety.png";
import Transport from "../../commons/icons/transport.png";
import Wood from "../../commons/icons/wood.png";
import Jewel from "../../commons/icons/jewel.png";
import Schools from "../../commons/icons/school.png";
import Musicians from "../../commons/icons/musician.png";
import Actors from "../../commons/icons/actor.png";
import CA from "../../commons/icons/ca.png";
import Kitchen from "../../commons/icons/kitchen.png";
import Mehndi from "../../commons/icons/Mehendi.png";
import Loans from "../../commons/icons/loan.png";
import Insurance from "../../commons/icons/insurance.png";

import Image from "next/image";

const Categories = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: 50,
        flexWrap: "wrap",
        margin: "30px 50px 10px 70px",
        justifyContent: "center",
      }}
    >
      <CategoryIcon name="Home Appliances" icon={<Home />} />
      <CategoryIcon
        name="Designers"
        icon={<Image src={Pencil} width={58} height={40} />}
      />
      <CategoryIcon
        name="Real Estate"
        icon={<Image src={RealEstate} width={58} height={40} />}
      />
      <CategoryIcon
        name="Wooden Contractors"
        icon={<Image src={Wood} width={58} height={40} />}
      />
      <CategoryIcon
        name="Interior Designers"
        icon={<Image src={Room} width={58} height={40} />}
      />
      <CategoryIcon
        name="Home Security"
        icon={<Image src={Safety} width={58} height={40} />}
      />
      <CategoryIcon
        name="Makeovers"
        icon={<Image src={Makeover} width={58} height={40} />}
      />
      <CategoryIcon
        name="Wedding Planners"
        icon={<Image src={Bride} width={58} height={40} />}
      />
      <CategoryIcon
        name="Hotels/Spa"
        icon={<Image src={Hotel} width={58} height={40} />}
      />
      <CategoryIcon
        name="Food Chains"
        icon={<Image src={FoodChain} width={58} height={40} />}
      />
      <CategoryIcon
        name="Plumbers"
        icon={<Image src={Plumber} width={58} height={40} />}
      />
      <CategoryIcon
        name="Coaching Institutes"
        icon={<Image src={Coaching} width={58} height={40} />}
      />
      <CategoryIcon
        name="Travel/Transports"
        icon={<Image src={Transport} width={58} height={40} />}
      />
      <CategoryIcon
        name="Health Wellness"
        icon={<Image src={Health} width={58} height={40} />}
      />
      <CategoryIcon
        name="Events"
        icon={<Image src={Events} width={58} height={40} />}
      />
      <CategoryIcon
        name="Lawyers"
        icon={<Image src={Lawyers} width={58} height={40} />}
      />
      <CategoryIcon
        name="Consultants"
        icon={<Image src={Business} width={58} height={40} />}
      />
      <CategoryIcon
        name="Insurance"
        icon={<Image src={Insurance} width={58} height={40} />}
      />
      <CategoryIcon
        name="Loans"
        icon={<Image src={Loans} width={58} height={40} />}
      />
      <CategoryIcon
        name="Charted Accountants"
        icon={<Image src={CA} width={58} height={40} />}
      />
      <CategoryIcon
        name="Kitchen Appliances"
        icon={<Image src={Kitchen} width={58} height={40} />}
      />
      <CategoryIcon
        name="Mehndi Designers"
        icon={<Image src={Mehndi} width={58} height={40} />}
      />
      <CategoryIcon
        name="Actors"
        icon={<Image src={Actors} width={58} height={40} />}
      />
      <CategoryIcon
        name="Musicians"
        icon={<Image src={Musicians} width={58} height={40} />}
      />
      <CategoryIcon
        name="Schools"
        icon={<Image src={Schools} width={58} height={40} />}
      />
      <CategoryIcon
        name="Jewels"
        icon={<Image src={Jewel} width={58} height={40} />}
      />
      <CategoryIcon
        name="Sweets and Snacks"
        icon={<Image src={Sweet} width={58} height={40} />}
      />
    </div>
  );
};

export default Categories;
