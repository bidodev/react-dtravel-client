import React from "react";

function ListItem(props) {
  console.log(props);
  const { productName, src, description, continent, prices } = props.value;

  return (
    <div className="offers-item">
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
