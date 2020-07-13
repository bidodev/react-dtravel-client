import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./landing.title.styles.scss";

const Landing = () => {
  const [index, setIndex] = useState(0);

  const offersFullData = useSelector((state) => state.destinations);
  const Urls = offersFullData.map((item) => item.src);

  const handleImg = () => {
    const arrayItems = offersFullData.length;
    const randIndex = Math.floor(Math.random() * arrayItems);
    setIndex(randIndex);
  };

  let imgStyle = {
    backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.5)
          ), url("${Urls[index]}")`,
  };

  return (
    <div className="main-title image" style={imgStyle}>
      {/* LOGO */}
      <div className="logo">
        <p> do the travel
          <span>.</span></p>
      </div>
      {/* Content part */}
      <div className="content">
        <h1>Get ready for your lifetime journey!</h1>
        <h5>
          Collection of the most beautiful places, experiences and unusual
          housing in the world
        </h5>
        <Link to="/quiz">
          <button type="button" className="btn btn-primary btn-lg">
            Start the Quiz
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
