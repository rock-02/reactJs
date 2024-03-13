import React, { useContext } from "react";
import { Mycontext } from "../contexts/Context";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const UserDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const users = useContext(Mycontext);

  console.log(users);
  console.log(id);

  const u = users.users.filter((user) => user.id == id);
  console.log(u);

  return (
    <div
      style={{
        margin: "auto",
        backgroundColor: "#f8f8f8",
        width: "40%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px",
        gap: "10px",
        borderRadius: "10px",
      }}
    >
      <h1>{u[0].name}</h1>
      <p>{u[0].city}</p>
      <h1>{u[0].id}</h1>
      <img
        style={{
          width: "100%",
          height: "250px",
          border: "2px solid black",
          borderRadius: "10px",
        }}
        src={u[0].img}
        alt=""
      />

      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "10px 20px",
          border: "2px solid black",
          borderRadius: "15px",
          backgroundColor: "blue",
        }}
      >
        goback
      </button>
    </div>
  );
};

export default UserDetails;
