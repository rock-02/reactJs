import React, { useContext } from "react";
import { Mycontext } from "../contexts/Context";

import { useNavigate } from "react-router-dom";

const User = () => {
  const users = useContext(Mycontext);
  const navigate = useNavigate();
  console.log(users);
  return (
    <div className="tab">
      User
      {users.users.map((user) => {
        return (
          <div
            onClick={() => navigate(`/user/${user.id}`)}
            style={{
              backgroundColor: "#f8f8f8",
              margin: "20px",
              width: "40%",
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              borderRadius: "10px",
            }}
            key={user.id}
          >
            <h3>{user.name}</h3>
            <p>{user.city}</p>
          </div>
        );
      })}
    </div>
  );
};

export default User;
