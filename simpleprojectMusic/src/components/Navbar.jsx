import React from "react";

const Navbar = ({ count }) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-orange-500 font-bold">Orange</h1>

      <button className="px-3 py-1 bg-orange-400 text-zinc-100 text-sm font-bold">
        Favorites{" "}
        <span className="bg-orange-600 px-2 py-1 font-semibold mr-1">
          {count}
        </span>
      </button>
    </div>
  );
};

export default Navbar;
