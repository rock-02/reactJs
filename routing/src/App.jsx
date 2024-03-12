// import React from "react";
import {  NavLink } from "react-router-dom";
// import Home from "./components/Home";
// import User from "./components/User";
// import About from "./components/About";
import Routing from "./utils/Routing";

const App = () => {
  return (
    <div>
      <nav>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "blue" : "black",
              fontWeight: e.isActive ? "bold" : "normal",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "blue" : "black",
              fontWeight: e.isActive ? "bold" : "normal",
            };
          }}
          to="/user"
        >
          User
        </NavLink>
        <NavLink
          to="/about"
          style={(e) => {
            return {
              color: e.isActive ? "blue" : "black",
              fontWeight: e.isActive ? "bold" : "normal",
            };
          }}
        >
          About
        </NavLink>
      </nav>

      <Routing />
    </div>
  );
};

export default App;
