import React, { useState } from "react";

const movieItem = ({ title }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  console.log(isFavorite);
  const handleClick = (e) => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="movie-item">
      <span>{title}</span>
      <button onClick={handleClick}>Favorite</button>
    </div>
  );
};

export default movieItem;
