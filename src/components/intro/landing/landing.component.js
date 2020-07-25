import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./landing.title.styles.scss";
//import smoothScroll from "./smoothScroll";


const Landing = () => {
  const [img, setImg] = useState(0);

  const Urls = useSelector(({data}) => data.backgrounds);

  const handleImg = () => {
    const arrayItems = Urls.length - 1;
    let numberImg = 0;

    if (img >= (arrayItems)) {
      setImg(0);
    } else {
      numberImg = img + 1;
      setImg(numberImg);
    }
    
  };

  let imgStyle = {
    backgroundImage: `linear-gradient(to left bottom,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.7)
          ), url("${Urls[img]}")`,
  };

  return (
    <div className="main-title" style={imgStyle}>
      {/* LOGO */}
      <div className="logo">
        <p>dtravel<span>.</span></p>
      </div>
      {/* Content part */}
      <div className="content">
        <h1>Get ready for your lifetime journey!</h1>
        <h5>
          Collection of the most beautiful places, experiences and unusual housing in the world
        </h5>
        <Link to="/quiz">
          <button type="button" className="btn btn-primary btn-lg">
            Get Started
          </button>
        </Link>
      </div>

      {/* onClick make the URL inside imgStyle change, you can pass it with props */}
      <div className="pagination">
        <ion-icon name="chevron-back-outline" onClick={handleImg}></ion-icon>
        <p>Get inspired</p>
        <ion-icon name="chevron-forward-outline" onClick={handleImg}></ion-icon>
      </div>
    </div>
  );
};

export default Landing;
