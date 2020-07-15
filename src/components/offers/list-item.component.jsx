import React from "react";


function ListItem({productName, src, description, continent, prices, bestMatch}) {
  const classNameForBestMatch = bestMatch ? "best-match" : "common";
  return (
    <div className={"offers-item " + classNameForBestMatch}>
      <h3>{productName}</h3>
      <div className="img-container">
        <img src={src} alt={productName} />
      </div>
      <p>{description}</p>
      <p>Continent: {continent}</p>
      <p>Prices: {prices}</p>
    </div>
  );
}

export default ListItem;
