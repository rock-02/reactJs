import React, { useState } from "react";

const Usestate = () => {
  const [detail, setDetail] = useState({ name: "Tarun", class: "Deg" });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "40%",
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <h1>Name : {detail.name}</h1>
      <h1>Class : {detail.class}</h1>
      <button
        style={{
          padding: "4px 10px",
          backgroundColor: "blue",
          color: "white",

          height: "60px ",
        }}
        onClick={() => setDetail({ ...detail, name: "Shivam" })}
      >
        Change
      </button>
    </div>
  );
};

export default Usestate;
