import React from "react";
import Fav from "./icons/Fav.jsx";

function FavButton() {
  return (
    <button className="hover:text-primary-green transition-all ease-in-out">
      <Fav />
    </button>
  );
}

export default FavButton;
