import React from "react";

const Card = ({ user, onRemove, index }) => {
  const { name, bio, img } = user;
  return (
    <div id="card">
      <img src={`${img}`} alt="" />

      <h3>{name}</h3>
      <p>{bio}</p>

      <button id="btn" onClick={() => onRemove(index)}>
        Remove it
      </button>
    </div>
  );
};

export default Card;
