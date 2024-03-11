import React from "react";

const Music = ({ song, handleClick, index }) => {
  const { name, desc, img, fav } = song;
  return (
    <div className="music">
      <div className="music ft">
        <div className="imgCont">
          <img className="img" src={img} alt="" />
        </div>
        <div id="details">
          <h2>{name}</h2>
          <h2>{desc}</h2>
        </div>
      </div>
      <button id="fav" onClick={() => handleClick(index)}>
        {fav ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default Music;
