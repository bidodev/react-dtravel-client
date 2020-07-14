import React from "react";
import "./adventurousmood.component.scss";

function AdventurousMood() {
  return (
    <div className="aside-adventurous__mood">
      <h3>Adventurous Mood</h3>
      <div className="aside-adventurous__mood-icons">
        <ion-icon name="sunny-outline"></ion-icon>
        <ion-icon name="snow-outline"></ion-icon>
        <ion-icon name="map-outline"></ion-icon>
        <ion-icon name="bicycle"></ion-icon>
        <ion-icon name="business-outline"></ion-icon>
      </div>
    </div>
  );
}

export default AdventurousMood;
