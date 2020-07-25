import React from "react";
import "./adventurousmood.component.scss";

import { useDispatch } from "react-redux";

const AdventurousMood = () => {
  // use Redux Hook Dispatch instead of connect
  const dispatch = useDispatch();

  // function to update our redux state
  const submitValues = (event) => {
    const valueMood = event.target.id;

    //Update Search input to simulate a search with specific keywords..
    dispatch({ type: "UPDATE_INPUT", payload: valueMood });
  };

  return (
    <div className="aside-adventurous__mood">
      <h3>Adventurous Mood</h3>
      <div className="aside-adventurous__mood-icons" onClick={submitValues}>
        <ion-icon id="tropical" name="sunny-outline"></ion-icon>
        <ion-icon id="winter" name="snow-outline"></ion-icon>
        <ion-icon id="mountain" name="map-outline"></ion-icon>
        <ion-icon id="cycling" name="bicycle"></ion-icon>
        <ion-icon id="city" name="business-outline"></ion-icon>
      </div>
    </div>
  );
};

export default AdventurousMood;
