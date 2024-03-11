import React from "react";

const Card = ({ name, profession, img, index, handleClick, friends }) => {
  return (
    <>
      <div className="rounded-t-md w-52 h-66 m-2 bg-zinc-400-700 border-2 flex-col ">
        <img
          className="h-44 w-full object-cover rounded-t-md"
          src={img}
          alt=""
        />
        <div className="flex-col text-left gap-2 m-2">
          <h2>{name}</h2>
          <h2>{profession}</h2>

          <button
            className={`px-2 py-1  ${
              friends ? " bg-green-600" : "bg-blue-600 "
            }  rounded-sm text-zinc-200`}
            onClick={() => handleClick(index)}
          >
            {friends ? "Unfriend" : "Add Friend"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
