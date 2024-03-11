/* eslint-disable react/prop-types */
import React from "react";
import Card from "./Card";

const Cards = ({ users, onRemove }) => {
  return (
    <div id="cards">
      {users.map((user, index) => (
        <Card key={index} user={user} onRemove={onRemove} index={index} />
      ))}
    </div>
  );
};

export default Cards;
