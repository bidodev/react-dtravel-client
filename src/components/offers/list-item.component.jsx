import React from 'react'

function ListItem({ value }) {
    
    const { productName, src, description, continent, prices } = value;
    
    return (
      <div className="offers-item">
        <h3>{productName}</h3>
        <img src={src} alt={productName} />
        <p>{description}</p>
        <p>Continent: {continent}</p>
        <p>Prices: {prices}</p>
      </div>
    );
}

export default ListItem