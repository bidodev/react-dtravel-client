import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import ExperienceItem from "./experiences/experience.item.component";
import { useSelector } from "react-redux";

const Carrousel = ({ match }) => {
  const offersFullData = useSelector((state) => state.destinations);

  const arrayItems = offersFullData.length;
  const randIndex = Math.floor(Math.random() * arrayItems);

  const randomOffer = offersFullData[randIndex];

  return (
    <div>
      {<ExperienceItem {...randomOffer} />}

      {/* generate the list of experiences */}
      <ion-icon name="chevron-back-outline"></ion-icon>
      <ion-icon name="chevron-forward-outline"></ion-icon>
    </div>
  );
};

const Main = () => {
  return (
    <div className="aside-main">
      <h1>Discover</h1>

      <div className="aside-main__carrousel">
        <Carrousel />
      </div>
    </div>
  );
};

export default Main;
