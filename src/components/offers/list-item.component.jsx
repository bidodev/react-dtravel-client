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
            {src2 ? (
              <div className="gallery-container">
                {src2.map((element) => {
                  return <img src={element} alt={productName} />;
                })}
              </div>
            ) : null}
          </div>
          <p>
            <ion-icon name="navigate-outline"></ion-icon>: &nbsp;
            {continent.charAt(0).toUpperCase() + continent.slice(1)}
          </p>
          <p>
            <ion-icon name="cash-outline"></ion-icon>: &nbsp; {prices}
          </p>
          <p className="description">{description}</p>
        </Fragment>
      ) : (
        <Fragment>
          <h3>{productName.charAt(0).toUpperCase() + productName.slice(1)}</h3>
          <div className="img-container">
            <img src={src} alt={productName} />
          </div>
          <p>
            <ion-icon name="navigate-outline"></ion-icon>: &nbsp;
            {continent.charAt(0).toUpperCase() + continent.slice(1)}
          </p>
          <p>
            <ion-icon name="cash-outline"></ion-icon>: &nbsp; {prices}
          </p>
          <p className="description">{description}</p>
        </Fragment>
      )}
    </div>
  );
}

export default ListItem;
