import React from "react";
import { useState } from "react";



const ControoledCopmponents = () => {
  const [detail, setdetail] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(detail);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={detail.name}
          onChange={(e) => setdetail({ ...detail, name: e.target.value })}
        />{" "}
        <br /> <br />
        <input
          type="email"
          value={detail.email}
          onChange={(e) => setdetail({ ...detail, email: e.target.value })}
        />{" "}
        <br /> <br />
        <input
          type="password"
          value={detail.password}
          onChange={(e) => setdetail({ ...detail, password: e.target.value })}
        />{" "}
        <br /> <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ControoledCopmponents;
