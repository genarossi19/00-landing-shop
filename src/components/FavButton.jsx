import React from "react";
import Fav from "./icons/Fav.jsx";

function FavButton() {
  const [fav, setFav] = React.useState(false);
  const handleClick = () => {
    setFav(!fav);
  };

  const favStyle = fav ? "#A1D03C" : "none";
  const stroke = fav ? "#A1D03C" : "currentColor";
  return (
    <button
      onClick={() => handleClick()}
      className="hover:text-primary-green transition-all ease-in-out"
    >
      <Fav fill={favStyle} stroke={stroke} />
    </button>
  );
}

export default FavButton;
