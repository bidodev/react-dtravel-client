import React, { Fragment } from "react";

function ListItem({
  productName,
  src,
  src2,
  description,
  continent,
  prices,
  bestMatch,
}) {
  const classNameForBestMatch = bestMatch ? "best-match" : "common";
  return (
    <div className={"offers-item " + classNameForBestMatch}>
      {classNameForBestMatch === "best-match" ? (
        <Fragment>
          <h3>
            <span>{"⭐ Best Match"}</span>
            {productName.charAt(0).toUpperCase() + productName.slice(1)}
          </h3>
          <div className="img-container">
            <div className="profile-img">
              <img src={src} alt={productName} />
            </div>

            <div className="gallery-container">
              {src2.map((element) => {
                return <img src={element} alt={productName} />;
              })}
            </div>
          </div>
          <p>{description}</p>
          <p>
            Continent: {continent.charAt(0).toUpperCase() + continent.slice(1)}
          </p>
          <p>Prices: {prices}</p>
        </Fragment>
      ) : (
        <Fragment>
          <h3>{productName.charAt(0).toUpperCase() + productName.slice(1)}</h3>
          <div className="img-container">
            <img src={src} alt={productName} />
          </div>
          <p>{description}</p>
          <p>Continent: {continent}</p>
          <p>Prices: {prices}</p>
        </Fragment>
      )}
    </div>
  );
}

export default ListItem;
