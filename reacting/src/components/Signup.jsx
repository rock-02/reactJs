import React from "react";

import gsap from "gsap";
import "./css/Singup.css";
const Signup = () => {
  const animation = () => {
    gsap.from("#form input", {
      duration: 1,
      x: 200,
      stagger: 0.5,
    });
  };

  animation();
  return (
    <div id="main">
      <div id="form">
        <h1>Signup</h1>
        <input type="text" id="email" placeholder="Email" />
        <input type="text" id="password" placeholder="password" />
        <input
          type="text"
          id="confirmpassword"
          placeholder="confirm password"
        />
        <button>Signup</button>

        <p> Already have an account? </p>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Signup;
