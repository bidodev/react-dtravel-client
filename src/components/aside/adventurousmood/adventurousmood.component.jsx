import React from "react";
import { useDispatch } from "react-redux";
import "./adventurousmood.component.scss";

function AdventurousMood() {

  //1. Use dispatch
  const dispatch = useDispatch();

  const submitValues = (event) => {
    const value = event.target;
    console.log(value)

    //it's returning undefined..
    dispatch({ type: "UPDATE_INPUT", payload: "tropical"});
  };

  return (
    <div className="aside-adventurous__mood">
      <h3>Adventurous Mood</h3>
      <div className="aside-adventurous__mood-icons" onClick={submitValues}>
        <ion-icon value="tropical" name="sunny-outline" >Icon</ion-icon>
        <ion-icon value="winter" name="snow-outline"></ion-icon>
        <ion-icon value="driving" name="map-outline"></ion-icon>
        <ion-icon value="bike" name="bicycle"></ion-icon>
        <ion-icon value="city" name="business-outline"></ion-icon>
      </div>
    </div>
  );
}

export default AdventurousMood;
