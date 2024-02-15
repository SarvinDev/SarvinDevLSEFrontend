import React from "react";
import ProductCard from "../../commons/ProductCard/ProductCard";

const data = [
  {
    name: "Dates",
    img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/09/14/dates-mint-bowl-wood-surface.jpg.rend.hgtvcom.406.305.suffix/1631648676846.jpeg",
  },
  {
    name: "Dates",
    img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/09/14/dates-mint-bowl-wood-surface.jpg.rend.hgtvcom.406.305.suffix/1631648676846.jpeg",
  },
  {
    name: "Dates",
    img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/09/14/dates-mint-bowl-wood-surface.jpg.rend.hgtvcom.406.305.suffix/1631648676846.jpeg",
  },
  {
    name: "Dates",
    img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/09/14/dates-mint-bowl-wood-surface.jpg.rend.hgtvcom.406.305.suffix/1631648676846.jpeg",
  },
  {
    name: "Dates",
    img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/09/14/dates-mint-bowl-wood-surface.jpg.rend.hgtvcom.406.305.suffix/1631648676846.jpeg",
  },
  {
    name: "Dates",
    img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/09/14/dates-mint-bowl-wood-surface.jpg.rend.hgtvcom.406.305.suffix/1631648676846.jpeg",
  },
];
export default function CardsList() {
  return (
    <div
      style={{
        display: "flex",
        marginTop: 20,
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: 10,
      }}
    >
      {data.map((d) => (
        <ProductCard name={d.name} img={d.img} />
      ))}
    </div>
  );
}
