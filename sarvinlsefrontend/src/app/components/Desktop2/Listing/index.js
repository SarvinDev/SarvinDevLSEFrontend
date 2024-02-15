import React from "react";
import ListCard from "../../commons/listView/ListCard";

const data = [
  {
    name: "Neil Sims",
    id: "neil123",
    img: "/Images/man2.jpeg",
  },
  {
    name: "Neil Sims",
    id: "neil123",
    img: "/Images/man2.jpeg",
  },
  {
    name: "Neil Sims",
    id: "neil123",
    img: "/Images/man2.jpeg",
  },
];

export default function Listing() {
  return (
    <div>
      {data.map((d) => (
        <ListCard name={d.name} id={d.id} img={d.img} />
      ))}
    </div>
  );
}
