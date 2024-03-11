import React from "react";
import "./css/card.css";
const Card = ({ src, heading, name, instock }) => {
  return (
    <div id="card">
      <img src={src} alt="" />

      <div id="part2">
        <h2>{heading}</h2>
        <h3>{name}</h3>
      </div>
      {instock ? (
        <button
          style={{
            padding: "3px 25px",
            color: "black",
            backgroundColor: "green",
            border: "2px solid black",
            borderRadius: "6px",
            marginTop: "10px",
            fontSize: "18px",
          }}
        >
          Instock
        </button>
      ) : (
        <button
          style={{
            padding: "3px 25px",
            color: "black",
            backgroundColor: "red",
            border: "2px solid black",
            borderRadius: "6px",
            marginTop: "10px",
            fontSize: "18px",
          }}
        >
          out of stock
        </button>
      )}
    </div>
  );
};

export default Card;
