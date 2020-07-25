import React, { useState } from "react";
import "./experience.item.component.styles.scss";

const Card = (props) => {
  const { id, cover, productName, country, openModal } = props

  const [isHovering, setIsHovering] = useState(false);

  /**
   * Function to capitalize the first letter of each word.
   * @param {*} str 
   */
  const sanitizeNames = (str) => {
    return str.split(" ").map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
  };

  return (
    
    <div
      className="card"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={()=>openModal(props)}
    >
      <img
        //this code is ugly, please fix this shit at some point..
        //className={id === 404 ? "img-404" : "img-card"}
        className={"img-card"}
        key={id}
        src={cover}
        alt={productName}
      />
      {isHovering && (
        <div>
          <li>
            <h4>{sanitizeNames(productName)}</h4>
          </li>
          <li>
            <ion-icon name="navigate-outline"></ion-icon>
            {sanitizeNames(country)}
          </li>
        </div>
      )}
    </div>
  );
};

export default Card;
