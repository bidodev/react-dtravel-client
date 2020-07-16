import React from "react";
import { useDispatch } from "react-redux";
import "./adventurousmood.component.scss";
import smoothScroll from "../../intro/landing/smoothScroll";

function AdventurousMood() {

  //1. Use dispatch
  const dispatch = useDispatch();

  const submitValues = (event) => {
    const valueMood = event.target.id;

    //it's returning undefined..
    dispatch({ type: "UPDATE_INPUT", payload: valueMood });
    smoothScroll();
  };

  return (
    <div className="aside-adventurous__mood">
      <h3>Adventurous Mood</h3>
      <div className="aside-adventurous__mood-icons" onClick={submitValues}>
        <ion-icon id="tropical" name="sunny-outline" >Icon</ion-icon>
        <ion-icon id="winter" name="snow-outline"></ion-icon>
        <ion-icon id="mountain" name="map-outline"></ion-icon>
        <ion-icon id="cycling" name="bicycle"></ion-icon>
        <ion-icon id="city" name="business-outline"></ion-icon>
      </div>
    </div>
  );
}

export default AdventurousMood;
