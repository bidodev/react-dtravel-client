import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./landing.title.styles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";

const Landing = () => {
  const backgrounds = useSelector(({ data }) => data.backgrounds);

  return (
    <div className="landing-wrapper">
      <Carousel showThumbs={false}>
        {backgrounds.map((background) => (
          <div>
            <img src={`${background}`} alt={`${background}`} />
            <p className="legend">Legend 1</p>
          </div>
        ))}
      </Carousel>
      <div className="logo">
        <p>
          dtravel<span>.</span>
        </p>
      </div>
      <div className="content">
        <h1>Get ready for your lifetime journey!</h1>
        <h5>
          Collection of the most beautiful places, experiences and unusual
          housing in the world
        </h5>
        <Link to="/quiz">
          <button type="button" className="btn btn-primary btn-lg">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
