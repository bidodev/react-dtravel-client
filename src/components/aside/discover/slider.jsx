import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Sliders = ({ data, openModal }) => {
  const [isHovering, setIsHovering] = useState(false);
  const settings = {
      dots: false,
      arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: false
  };

  /**
   * Function to capitalize the first letter of each word.
   * @param {*} str
   */
  const sanitizeNames = (str) => {
    return str
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
  };

  return (
    <div>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <div
              className="card"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => openModal(item)}
            >
              <img
                className={"img-card"}
                key={item.id}
                src={`./img/${item.type}/${item.cover.url}`}
                alt={item.cover.description}
              />
              {isHovering && (
                <div>
                  <li>
                    <h4>{item.productName}</h4>
                  </li>
                  <li>
                    <ion-icon name="navigate-outline"></ion-icon>
                    {item.country}
                  </li>
                </div>
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Sliders;
