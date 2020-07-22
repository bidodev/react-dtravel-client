import React, { useState } from "react";
import "./experience.item.component.styles.scss";


const Card = ({ id, src, productName, country }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <React.Fragment>
      <div
        className="card"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img
          className={id === 404 ? "img-404" : "img-card"}
          key={id}
          src={src}
          alt={productName}
        />
        {isHovering && (
          <div>
            <li>
              <h4>{productName[0].toUpperCase() + productName.slice(1)}</h4>
            </li>
            <li>
              <ion-icon name="navigate-outline"></ion-icon>
              {country[0].toUpperCase() + country.slice(1)}
            </li>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Card;
